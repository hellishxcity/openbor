# Milestone 01 — Full Dockside District + Five Playable Fighters

Status: production scope and acceptance plan. This is not yet a completed or tested game build.

## Milestone objective

Deliver the complete first Dockside District stage as a playable OpenBOR level, with all five main fighters selectable from the beginning of Story Mode:

- Kanan "Scorpion" Jaxon
- Jaylen "Coldman" Jaxon
- Shai Hooks
- Jenni "Legs" Rows
- Nona "Beauty" Silks

The stage should be a complete beginning-to-end arcade beat-'em-up experience, not a short combat-room prototype.

## Dockside stage route

1. **Pier Entrance** — establish the waterfront setting; safe opening space for movement and first combat lesson.
2. **Container Lane** — narrow lane with staggered Dockside Grunt attacks, crates, and clear foreground/background separation.
3. **Warehouse Apron** — wider arena for the Brock heavy-enforcer encounter, supported by one Grunt.
4. **Warehouse Passage** — short transition with environmental storytelling, a health pickup, and a fresh enemy formation.
5. **Pier Approach** — crane silhouettes, mooring equipment, waterline, and a final approach encounter.
6. **Boss Pier** — Brick boss arena with readable attack telegraphs, punish windows, and a clear victory condition.
7. **Stage Clear** — results/transition screen and return to the campaign flow.

## Playable character requirements

All five fighters must be selectable at the start of Story Mode. Each must have:
- A distinct idle, walk, run (if supported by chosen engine setup), jump, land, block, dodge, hurt, knockdown, recovery, and victory animation.
- Five visually distinct punch hits, five distinct kick hits, and five mixed-combo hits.
- A unique special move with startup, active, and recovery phases.
- Separate damage, speed, reach, knockback, and recovery tuning that expresses the fighter's role.
- Working health, hit detection, enemy interaction, and player-select controls.

Fighter identity:
- **Kanan:** balanced pressure, fast martial-arts strings, Scorpion Strike.
- **Jaylen:** slower heavy brawler, powerful throws/slams, Coldman Slam.
- **Shai:** mobile kickboxer, fast technical strings, Storm Rush Combo.
- **Jenni:** precise long-range kicks and anti-air control, Spinning Dragon Kick.
- **Nona:** grapples, takedowns, and crowd displacement, Grapple Break.

Special names and tuning remain provisional until implemented and playtested.

## Enemy and boss encounters

- Dockside Grunts: baseline gang fighters.
- Street Vipers: fast flankers who pressure from angles.
- Iron Guards: defensive enforcers who block and counter.
- Brock: heavy bruiser with a readable shoulder-charge telegraph and punishable recovery if he misses.
- Brick: Dockside stage boss with distinct attack phases and fair recovery windows.

Encounter pacing:
- Opening: small staggered Grunt group.
- Container lane: two short waves, with limited simultaneous attackers.
- Warehouse apron: Brock plus one supporting Grunt.
- Warehouse passage/pier approach: mixed enemy formation with space to reposition.
- Boss pier: Brick solo first; add support only if playtesting proves it fair and readable.

## Stage systems and finish conditions

- Side-scrolling camera with controlled stage advancement.
- Enemy waves activate in sequence and do not trap the player off-screen.
- Health and damage feedback are readable.
- Pickups work and cannot spawn inside inaccessible geometry.
- Stage exits unlock only after the active encounter is cleared.
- Player death, continue/restart, stage clear, and return-to-menu flows are handled.
- Touch controls are designed for landscape mobile play; keyboard/controller support may be used for development testing where supported.

## Production order

1. Verify the exact OpenBOR revision, Android target, model syntax, level syntax, and packaging method.
2. Create one minimal engine-valid test model and level to prove the pipeline.
3. Build the Dockside environment and stage route with placeholder art.
4. Implement and test the shared combat/AI systems.
5. Implement all five playable fighter models and distinct combat tuning.
6. Implement Grunts, Vipers, Iron Guards, Brock, and Brick.
7. Replace placeholders with original art, animation, sound, and music.
8. Run the full stage acceptance test on desktop/runtime and Android devices.

## Definition of done

- All five fighters appear in character select and can complete the entire Dockside stage.
- Every fighter's signature special works and is distinguishable.
- All stage areas, waves, pickups, transitions, Brock, Brick, and stage-clear flow work.
- No softlocks, unreachable pickups, off-screen enemy traps, or unavoidable repeated knockdowns.
- Controls and performance are verified on target Android devices.
- A clean project checkout can reproduce the build.

## Scope honesty

The full stage and five-fighter roster are the target for this milestone. They are not yet implemented merely by being specified here. No APK/AAB or completed playable build is claimed by this document.
