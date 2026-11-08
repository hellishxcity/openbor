# Dockside District — Encounter and Route Production Pass

Project: Streets of Violence  
Milestone: 01 — Full Dockside District  
Status: design specification; encounters are not yet implemented or runtime-tested.

## Stage route

The stage is one continuous side-scrolling level with connected combat spaces and clear visual transitions:

1. **Pier Entrance** — establish the waterfront setting; tutorial-scale opening encounter.
2. **Container Lane** — narrow cargo-container corridor with staggered enemy entries and a small optional supply cache.
3. **Warehouse Apron** — open loading yard where Brock appears as a heavy mini-boss encounter.
4. **Warehouse Passage** — tighter interior fight with mixed enemy roles and environmental cover.
5. **Pier Approach** — outdoor transition back toward the water; a short enemy reinforcement wave and a health pickup.
6. **Boss Pier** — arena space for Brick; keep the player from being trapped against the screen edge.
7. **Stage Clear** — victory sting, score/reward summary, and route to the next campaign stage.

The spaces should connect without abrupt unexplained cuts. Use background depth changes, signage, lighting, container placement, warehouse architecture, and waterline details to make each zone readable.

## Encounter schedule

### Zone 1 — Pier Entrance
- Start with a brief safe approach so players can read the environment.
- Wave A: 2 Dockside Grunts, entering with a slight delay rather than simultaneously.
- Optional reinforcement: 1 additional Grunt after the first enemy is defeated.
- Teach basic movement, attack, jump, and pickup interactions without overwhelming a new player.

### Zone 2 — Container Lane
- Wave A: 2 Grunts from opposite sides, but stagger their activation.
- Wave B: 1 Street Viper flanker plus 1 Grunt.
- Optional supply cache tucked behind a container or side route.
- Keep the playable lane wide enough for side-scrolling combat; avoid geometry that traps the player or hides enemies off-screen.

### Zone 3 — Warehouse Apron
- Introduce **Brock** as a heavy bruiser encounter.
- Brock should have readable tells: shoulder dip before charge, clear wind-up before heavy punch, and a visible guard stance.
- After a missed charge, give Brock a punishable recovery window.
- Add at most 1 Grunt as support only after Brock's opening behavior is understood.
- Brock is a mini-boss enemy, not a playable character and not the stage boss.

### Zone 4 — Warehouse Passage
- Wave A: 1 Iron Guard with 1 Grunt.
- Wave B: 1 Street Viper entering from a flank after the player engages the first group.
- Iron Guard blocks frontal pressure but has a vulnerable recovery or flank window.
- Include a clear exit lane and avoid spawning enemies inside collision geometry.

### Zone 5 — Pier Approach
- Wave A: 2 Grunts with 1 Street Viper introduced after a short delay.
- Place one health pickup before the boss arena, not inside the boss spawn point.
- Optional hidden reward route can branch behind readable environmental dressing, then rejoin the main path before the boss.

### Zone 6 — Boss Pier: Brick
- Brick enters alone with a short intro beat and boss music cue.
- Phase 1: measured heavy punches, short step-in pressure, and a telegraphed shove/charge.
- Phase 2: at a health threshold, increase pressure with a two-part attack pattern, but preserve clear tells and recovery windows.
- Do not make every attack track the player instantly; allow dodge, jump, block, and punish responses.
- Keep arena boundaries fair and visible. Avoid unavoidable corner-lock loops.
- On defeat: boss defeat animation, stage-clear music cue, score/reward summary.

## Enemy role definitions

| Enemy | Combat role | Readable counterplay |
|---|---|---|
| Dockside Grunt | Baseline gang fighter | Basic attacks, spacing, and combo control |
| Street Viper | Fast flanker | Watch entry direction; interrupt or turn to meet the approach |
| Iron Guard | Defensive enforcer | Bait guard, flank, or punish recovery |
| Brock | Heavy bruiser / mini-boss | Evade telegraphed charge and punish the miss |
| Brick | Stage boss | Learn attack patterns, avoid corner traps, punish recovery |

## Pickups and secrets

- Health pickup before the boss encounter.
- Optional container-cache reward in Zone 2.
- Optional hidden route reward that rejoins the main route before Zone 6.
- Keep pickup placement visible enough to discover but not directly on top of enemy spawn points.
- Reward amounts and item effects remain to be tuned in-game.

## Five playable fighters

All five fighters should be selectable at the beginning of Story Mode and must be able to complete the entire stage:

- Kanan “Scorpion” Jaxon
- Jaylen “Coldman” Jaxon
- Shai Hooks
- Jenni “Legs” Rows
- Nona “Beauty” Silks

Each character needs their own movement, attack, hit reaction, knockdown/recovery, and signature special animations. Do not assume one fighter's animation set is valid for another.

## Stage acceptance checklist

- [ ] All six zones connect in the intended order.
- [ ] All five fighters can enter and finish every encounter.
- [ ] Enemies spawn in valid positions and do not overlap solid geometry.
- [ ] Enemy waves activate and clear reliably.
- [ ] Brock's charge has a readable tell and punishable recovery.
- [ ] Brick's boss fight has readable patterns and fair recovery windows.
- [ ] Health pickup and optional reward route function correctly.
- [ ] Stage exit and stage-clear flow work without softlocks.
- [ ] Music transitions match exploration, combat, boss warning, Brick fight, and clear.
- [ ] Touch controls and performance are tested on the target Android device.

## Not yet implemented

This document defines the encounter plan only. It does not mean the level geometry, enemy AI, pickups, music triggers, or boss scripting have been built or tested in OpenBOR.
