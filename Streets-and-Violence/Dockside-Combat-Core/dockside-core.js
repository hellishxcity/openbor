// Streets and Violence — Dockside Combat Core
// Engine-independent JavaScript foundation for GDevelop integration.
// Not a complete GDevelop project or Android APK.

export const CONFIG = {
  world: { minX: 0, maxX: 2400, floorY: 520 },
  player: { maxHealth: 100, speed: 260, jumpSpeed: 560, gravity: 1500, bodyWidth: 54, comboWindow: 1.05, dodgeDuration: 0.32, dodgeSpeed: 520, specialCost: 100 },
  combat: {
    punchDamage: [8, 9, 10, 12, 20],
    kickDamage: [10, 11, 13, 15, 25],
    mixedDamage: [9, 10, 12, 14, 23],
    hitRange: 92, hitHeight: 90, normalKnockback: 210, finisherKnockback: 430,
    hitStun: 0.22, specialDamage: 88, specialRange: 190
  },
  enemy: { maxHealth: 65, speed: 92, attackRange: 68, attackDamage: 8, attackCooldown: 1.25 }
};
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export function createPlayer() {
  return { x: 180, y: CONFIG.world.floorY, vx: 0, vy: 0, facing: 1,
    health: 100, maxHealth: 100, special: 0, grounded: true, blocking: false,
    dodging: 0, invulnerable: 0, attack: null, comboType: null, comboStep: 0,
    comboTimer: 0, state: "idle", animation: "idle" };
}
export function createEnemy(x, boss = false) {
  const maxHealth = boss ? 420 : CONFIG.enemy.maxHealth;
  return { x, y: CONFIG.world.floorY, health: maxHealth, maxHealth, boss,
    vx: 0, hitStun: 0, attackCooldown: 0.5, alive: true, state: "approach" };
}
export function createGame() {
  const game = { player: createPlayer(), enemies: [createEnemy(570), createEnemy(760), createEnemy(930)],
    level: { name: "DOCKSIDE DISTRICT", stage: 1, wave: 1, waveDelay: 0, bossSpawned: false, status: "playing" },
    effects: [], hud: null };
  game.hud = getHudSnapshot(game);
  return game;
}
export function startCombo(p, type) {
  if (!["punch", "kick", "mixed"].includes(type) || p.blocking || p.dodging > 0) return false;
  if (p.comboTimer <= 0 || p.comboType !== type) { p.comboStep = 0; p.comboType = type; }
  p.comboStep = p.comboStep % 5 + 1;
  const arr = type === "punch" ? CONFIG.combat.punchDamage : type === "kick" ? CONFIG.combat.kickDamage : CONFIG.combat.mixedDamage;
  p.attack = { type, step: p.comboStep, damage: arr[p.comboStep - 1], timer: 0.18, hit: false };
  p.comboTimer = CONFIG.player.comboWindow; p.state = "attack"; p.animation = type + "_" + p.comboStep;
  return true;
}
function updatePlayer(p, dt, input) {
  p.comboTimer = Math.max(0, p.comboTimer - dt);
  if (!p.comboTimer) { p.comboStep = 0; p.comboType = null; }
  p.invulnerable = Math.max(0, p.invulnerable - dt);
  p.dodging = Math.max(0, p.dodging - dt);
  if (p.attack && (p.attack.timer -= dt) <= 0) p.attack = null;
  if (input.block && p.grounded && !p.attack && !p.dodging) {
    p.blocking = true; p.state = "block"; p.animation = "block";
  } else {
    p.blocking = false;
    if (input.dodge && !p.dodging && !p.attack) {
      p.dodging = CONFIG.player.dodgeDuration; p.invulnerable = p.dodging;
      p.vx = p.facing * CONFIG.player.dodgeSpeed; p.state = "dodge"; p.animation = "dodge";
    } else if (!p.dodging && !p.attack) {
      const dir = (input.right ? 1 : 0) - (input.left ? 1 : 0);
      p.vx = dir * CONFIG.player.speed;
      if (dir) { p.facing = dir; p.state = "move"; p.animation = "walk"; }
      else if (p.grounded) { p.state = "idle"; p.animation = "idle"; }
    }
  }
  if (input.jump && p.grounded && !p.attack) { p.vy = -CONFIG.player.jumpSpeed; p.grounded = false; p.animation = "jump"; }
  p.vy += CONFIG.player.gravity * dt; p.x = clamp(p.x + p.vx * dt, CONFIG.world.minX, CONFIG.world.maxX); p.y += p.vy * dt;
  if (p.y >= CONFIG.world.floorY) { p.y = CONFIG.world.floorY; p.vy = 0; p.grounded = true; }
}
export function resolvePlayerEnemySpacing(p, e, gap = 8) {
  const hp = CONFIG.player.bodyWidth / 2, he = e.boss ? 42 : 28;
  if (p.facing > 0) { const edge = e.x - he - hp - gap; if (p.x > edge) p.x = edge; }
  else { const edge = e.x + he + hp + gap; if (p.x < edge) p.x = edge; }
  p.x = clamp(p.x, CONFIG.world.minX, CONFIG.world.maxX);
  return p.x;
}
function hitEnemy(p, e) {
  if (!p.attack || p.attack.hit || !e.alive) return false;
  const dx = e.x - p.x;
  if (Math.sign(dx || 1) !== p.facing || Math.abs(dx) > CONFIG.combat.hitRange || Math.abs(e.y - p.y) > CONFIG.combat.hitHeight) return false;
  const finisher = p.attack.step === 5;
  e.health = Math.max(0, e.health - p.attack.damage);
  e.vx = p.facing * (finisher ? CONFIG.combat.finisherKnockback : CONFIG.combat.normalKnockback);
  e.hitStun = finisher ? 0.42 : CONFIG.combat.hitStun;
  p.special = Math.min(100, p.special + (finisher ? 28 : 12)); p.attack.hit = true;
  if (!e.health) { e.alive = false; e.state = "defeated"; }
  return true;
}
function updateEnemy(e, p, dt) {
  if (!e.alive) return;
  e.hitStun = Math.max(0, e.hitStun - dt); e.attackCooldown = Math.max(0, e.attackCooldown - dt);
  if (e.hitStun > 0) { e.x += e.vx * dt; e.vx *= Math.pow(0.03, dt); return; }
  const dx = p.x - e.x, dir = Math.sign(dx);
  if (Math.abs(dx) > CONFIG.enemy.attackRange) { e.state = "approach"; e.x += dir * (e.boss ? 72 : CONFIG.enemy.speed) * dt; }
  else if (e.attackCooldown <= 0 && p.invulnerable <= 0) {
    p.health = clamp(p.health - (p.blocking ? 2 : CONFIG.enemy.attackDamage), 0, p.maxHealth);
    if (!p.blocking) p.state = "hurt";
    e.attackCooldown = CONFIG.enemy.attackCooldown;
  }
}
export function getHudSnapshot(g) {
  const e = g.enemies[0] || null;
  return { stage: g.level.stage, stageName: g.level.name, wave: g.level.wave,
    playerHealth: g.player.health, playerMaxHealth: g.player.maxHealth, special: g.player.special,
    combo: g.player.comboStep, enemyHealth: e?.health ?? 0, enemyMaxHealth: e?.maxHealth ?? 0, status: g.level.status };
}
export function updateGame(g, dt, input = {}) {
  dt = Math.min(Math.max(dt, 0), 1/20);
  const p = g.player;
  if (input.punch) startCombo(p, "punch"); else if (input.kick) startCombo(p, "kick"); else if (input.mixed) startCombo(p, "mixed");
  if (input.special && p.special >= CONFIG.player.specialCost && !p.attack) {
    p.special = 0; p.attack = { type: "special", step: 5, damage: CONFIG.combat.specialDamage, timer: 0.34, hit: false };
    p.state = "special"; p.animation = "special";
  }
  updatePlayer(p, dt, input);
  for (const e of g.enemies) {
    updateEnemy(e, p, dt);
    if (!e.alive) continue;
    if (p.attack?.type === "special" && !p.attack.hit && Math.abs(e.x - p.x) <= CONFIG.combat.specialRange) {
      e.health = Math.max(0, e.health - p.attack.damage); e.vx = p.facing * CONFIG.combat.finisherKnockback;
      e.hitStun = 0.5; p.attack.hit = true;
      if (!e.health) e.alive = false;
      g.effects.push({ type: "scorpion_strike", x: e.x, y: e.y - 70, life: 0.3 });
    } else if (hitEnemy(p, e)) g.effects.push({ type: "impact", x: e.x, y: e.y - 60, life: 0.24 });
    resolvePlayerEnemySpacing(p, e);
  }
  for (const fx of g.effects) fx.life -= dt;
  g.effects = g.effects.filter(fx => fx.life > 0);
  g.enemies = g.enemies.filter(e => e.alive);
  if (!g.enemies.length && !g.level.bossSpawned) {
    g.level.waveDelay += dt;
    if (g.level.waveDelay >= 1.2) { g.enemies.push(createEnemy(1080, true)); g.level.bossSpawned = true; }
  } else if (!g.enemies.length && g.level.bossSpawned) g.level.status = "victory";
  if (p.health <= 0) g.level.status = "defeat";
  g.hud = getHudSnapshot(g);
  return g;
}
