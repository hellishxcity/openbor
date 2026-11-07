# Milestone 01 — Dockside District

## Player-facing goal
A short, replayable side-scrolling beat-'em-up stage that proves movement, combat readability, enemy behavior, wave pacing and a boss encounter before the campaign expands.

## Stage layout
1. **Pier entrance:** tutorial-safe space, dock lights, stacked crates, waterline and distant cranes.
2. **Container lane:** narrow combat lane with staggered Dockside Grunt entries.
3. **Warehouse apron:** wider arena; introduce Brock with one Grunt support.
4. **Pier approach:** short traversal beat with environmental storytelling and a health pickup.
5. **Boss pier:** Brick encounter; exit unlocks after victory.

## Encounter beats (provisional tuning)
- Wave A: 2 Dockside Grunts, staggered by 0.8 seconds.
- Wave B: 3 Grunts, no more than 2 actively attacking at once.
- Wave C: Brock + 1 Grunt. Brock teaches bait-and-punish.
- Boss: Brick, with a clear wind-up, attack window and recovery window.

## Camera and lane
- Side-on camera, horizontal scrolling.
- Keep player and enemies inside a readable combat lane.
- Avoid spawning enemies directly on top of the player.
- Camera advances after the active wave is cleared; do not scroll into the next wave prematurely.

## Completion conditions
- All waves cleared.
- Brick defeated.
- Stage-complete screen displays score and remaining health.
- Restart returns to the opening spawn with a clean state.

## Acceptance checklist
- [ ] Player can move left/right and jump.
- [ ] Touch controls and keyboard controls both work where supported.
- [ ] At least one enemy approaches and attacks.
- [ ] Player and enemy health are visible.
- [ ] Punch, kick and special attacks have distinct readable outcomes.
- [ ] Brock's heavy attack has a telegraph and punishable recovery.
- [ ] Brick boss can be defeated and stage completion triggers.
- [ ] No soft-lock after player death, enemy death or restart.
- [ ] Test on target Android OpenBOR build before calling this milestone playable.

## Scope boundary
This document is a design/acceptance specification. It is not a completed stage or a verified OpenBOR level file.
