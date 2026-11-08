# JAY-01 — Wrong Turn Ambush
Project: Streets of Violence  
Mission owner: Jaylen “Coldman” Jaxon  
Mission type: Optional route-gated ambush survival  
Status: Detailed design prototype; proposed details below are not yet implemented or runtime-tested.

## Established concept
Jaylen is ambushed if the player chooses a particular path or area. The encounter should feel like a deliberate setup, showcase Jaylen's heavy-brawler play style, and reward him for surviving. The player must receive fair warning and retain room to fight or escape.

This prototype recommends attaching the first version to Dockside District's optional Container Maze route. That placement is a proposal based on the existing route design, not a locked story decision.

## Recommended first placement and trigger
- Stage: Stage 01 — Dockside District.
- Route: Junction 1 → Container Maze (the optional scavenger route).
- Character eligibility: Jaylen must be the selected fighter.
- Trigger: a suspicious marked stretch between two cargo-container lanes, after the player has cleared the ordinary route wave and before the branch reconnects.
- Warning: show a visible gang marker (for example, fresh paint or a deliberately placed crate) and a brief audio/visual cue before the ambush activates.
- The ambush must not trigger on the Warehouse Entrance route or the main path.
- If Jaylen chooses another route, the mission is not failed; it remains eligible at a later authored route/area.

## Player-facing offer
**Title:** WRONG TURN AMBUSH  
**Prompt:** “This lane feels wrong. Keep moving—or stand your ground.”

The route itself is the player's choice. Do not force a hidden timer or spawn enemies directly on top of Jaylen. If the mission is presented as an explicit optional offer, allow the player to decline; if the ambush is the authored consequence of choosing the marked branch, communicate the danger before entry.

## Encounter sequence
1. **Approach:** Jaylen enters the marked Container Maze stretch. A short warning beat signals that the gang has prepared an ambush.
2. **Lock-in avoidance:** Do not seal both ends of the lane. Keep at least one visible escape direction or a clearly readable combat space. The player may retreat before crossing the activation threshold.
3. **Wave 1 — flankers:** Two Dockside Grunts enter from staggered positions, not simultaneously on top of the player. Their purpose is to pressure Jaylen and teach the encounter's multi-direction threat.
4. **Wave 2 — pressure crew:** After Wave 1 is cleared, one Street Viper and one Grunt enter from opposite sides with a delay between spawns. Avoid spawning during Jaylen's knockdown or recovery animation.
5. **Wave 3 — heavy enforcer:** A single Iron Guard or equivalent heavy support enemy arrives after the second wave. This is optional tuning; if it makes the encounter too long or difficult on mobile, use one Grunt instead.
6. **Survival resolution:** Defeat all ambush enemies or reach the designated escape marker after the ambush has activated. Both are valid outcomes; the player should not be trapped in a forced endurance fight.
7. **Recognition beat:** Jaylen identifies the attack as a deliberate attempt to isolate him. Keep the line short and avoid revealing a larger plot twist before it is approved.
8. **Rejoin:** The branch reconnects to the established Dockside progression before Brick's boss pier. Brick remains the stage boss.

## Success conditions and rewards
- **Primary success:** survive the ambush by defeating the attackers or escaping through the marked exit.
- **Combat-clear bonus:** defeat all ambush waves.
- **Reward proposal:** ordinary upgrade currency or score for survival; a modest additional reward or recoverable combat item for clearing every wave.
- Do not grant a permanent stat upgrade in this first version.
- Reward must be granted once according to the verified persistence system; no reload or re-entry farming.
- The main stage and Brick boss remain unchanged regardless of the outcome.

## Failure, retreat, and retry rules
- **Retreat before trigger:** no ambush starts; no failure is recorded.
- **Escape after trigger:** count as mission success with the base reward, but not the combat-clear bonus.
- **Player is defeated:** use normal OpenBOR continue behavior. Do not claim a mission retry/reset policy until stage restart and save semantics are tested.
- **Player leaves the branch by an unintended exit:** recover to the normal branch convergence or safely reset the encounter; never softlock.
- **Player declines an explicit offer:** continue along the available main-stage route without penalty.
- **No countdown in the first prototype.** Warning and spawn spacing provide pressure without relying on a mobile reaction timer.

## Character and combat goals
- Let Jaylen's heavy attacks stagger or knock back enemies, but don't make the ambush trivial.
- Use enemy spacing that lets the player turn and respond to both sides.
- Avoid unavoidable simultaneous attacks from off-screen enemies.
- Telegraph the Viper's faster entry and the heavy support enemy's approach.
- Give Jaylen enough floor space to use throws and slams without being pinned against container collision.
- Other fighters should not receive Jaylen's personal mission through random scheduling.

## Conceptual mission states
These are design labels only, not verified OpenBOR script variables:
`UNAVAILABLE → AVAILABLE → WARNING → AMBUSH_WAVE_1 → AMBUSH_WAVE_2 → AMBUSH_WAVE_3 → SURVIVED`
Alternative outcomes:
- `WARNING → RETREATED` (no mission started / no penalty)
- `AMBUSH_WAVE_n → ESCAPED` (base success reward)
- `AMBUSH_WAVE_n → DEFEATED` (normal continue behavior; exact reset policy pending verification)
- `SURVIVED → COMBAT_CLEAR_BONUS` if every wave is defeated.

## Technical verification checklist
Before implementation, verify the exact target OpenBOR build and test:
1. How the level reliably detects Jaylen as the selected player character.
2. How to detect route/area entry and activate an encounter once.
3. How to spawn enemy waves at authored positions with safe spacing.
4. How to wait for the current wave to clear before spawning the next wave.
5. How to detect player knockdown/recovery or otherwise prevent bad spawn timing.
6. How to detect retreat/escape and reconnect to the normal route.
7. How to track mission completion and reward grants without relying on unverified persistent globals.
8. How enemy spawn and collision behavior perform on target Android hardware.

For every item, record source evidence and a minimal reproducible test. Do not assume function names or script callback behavior.

## Minimal test plan
- Test A: Jaylen enters Container Maze; warning appears; all waves spawn in order; defeating them completes the mission.
- Test B: Jaylen retreats before the trigger; no ambush starts.
- Test C: Jaylen escapes after activation; base success reward is granted and combat-clear bonus is not.
- Test D: Jaylen is knocked down as a wave would spawn; no enemy appears directly on top of him.
- Test E: Player dies/continues; no duplicate waves or duplicate reward occur.
- Test F: Use Warehouse Entrance or another fighter; Jaylen's personal ambush does not trigger.
- Test G: Re-enter or replay the area; one-time rewards cannot be farmed.
- Test H: Verify the route reconnects before Brick's boss arena under every outcome.
- Test I: Test on target Android device for screen visibility, touch controls, performance, collision, and fair off-screen spawn behavior.

## Acceptance criteria
- [ ] Jaylen-only eligibility is enforced.
- [ ] Ambush is tied to the marked optional route/area.
- [ ] Player receives a fair warning before activation.
- [ ] Enemy waves spawn in a readable, staggered sequence.
- [ ] No enemy spawns directly on a knocked-down player.
- [ ] Player can defeat the crew or escape and still rejoin the stage.
- [ ] Combat-clear bonus is distinct from basic survival reward.
- [ ] No softlock or duplicate reward occurs after death, continue, or replay.
- [ ] Brick remains the Dockside boss on all routes.
- [ ] The mission is tested in the exact target OpenBOR build on Android.

## Open decisions for review
1. Confirm Container Maze as the ambush route, or choose a different suspicious route/area.
2. Should the player be allowed to escape after the ambush begins (recommended), or must Jaylen defeat every wave?
3. Should the final support enemy be an Iron Guard, or should the first version stay with Grunts and a Street Viper?
4. Should the ambush clue foreshadow a named gang leader, or remain a self-contained setup for now?

## Scope honesty
This is a design prototype, not working game code. Route detection, wave scheduling, enemy spawn positions, knockdown-safe timing, mission persistence, and Android performance remain unverified.
