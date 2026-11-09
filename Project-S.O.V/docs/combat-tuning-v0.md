# Combat Tuning — Initial Targets

All values below are starting design targets for playtesting, not measured or implemented engine values.

## Shared fighter rules
- Five-hit punch chain, five-hit kick chain and five-hit mixed chain.
- Every hit uses a unique pose/frame sequence; no repeated frame as a substitute for a distinct hit.
- Combo continuation window target: 0.9–1.1 seconds after a valid hit.
- Fifth hit target: 1.6–1.9x the damage of a normal combo hit, with stronger hit-stop and knockback.
- Attack recovery must leave a punish window when the player whiffs.
- Facing and target selection must not cause a forward lunge to pass through an enemy.

## Fighter identity targets
- **Kanan:** balanced speed/reach/damage; reliable chain links; SCORPION STRIKE is a high-impact crowd-control special.
- **Jaylen:** slower movement, highest throw/knockback potential, strong armor during selected heavy attacks.
- **Shai:** fast kick strings, quick recovery, lower per-hit damage, mobility advantage.
- **Jenni:** precise long-reach kicks, strong anti-air and spacing tools.
- **Nona:** close-range grapples, command throws and crowd displacement.

## Brock AI targets
1. Close distance at a measured pace.
2. Enter guard stance when the player attacks from the front.
3. Telegraph shoulder charge with a visible/audio cue.
4. Charge in a straight line; stop on collision or at attack range.
5. On miss, remain vulnerable during a clear recovery window.
6. Use knockdown attack only when close enough; avoid repeated unavoidable knockdowns.

## Readability rules
- Telegraph heavy attacks before the hit frame.
- Separate hit flash, hit-stop, knockback and damage feedback.
- Avoid overlapping enemy attacks that leave no escape route.
- Keep player and enemy hurtboxes distinct from decorative sprite pixels.
- Specials need startup, active and recovery phases.

## Test matrix
- Each fighter against one Grunt.
- Each fighter against Brock.
- Five-hit chain at close, edge and moving range.
- Block against frontal and rear attacks.
- Dodge through/away from a telegraphed heavy.
- Special against one target and a small group.
- Two enemies attacking with staggered timing.
