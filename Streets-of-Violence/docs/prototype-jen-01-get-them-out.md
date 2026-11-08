# JEN-01 — Get Them Out
Project: Streets of Violence  
Mission owner: Jenni “Legs” Rows  
Mission type: Optional rescue / escort  
Status: Detailed design prototype; proposed details below are not yet implemented or runtime-tested.

## Established concept
Jenni discovers civilians or a witness being held in a gang-controlled location. She defeats the guards, opens a safe exit, and escorts the rescued person or group to safety. Her undercover police work creates tension between protecting people and preserving her cover.

This prototype chooses a small, controlled rescue encounter for the first implementation. The exact civilian count, dialogue, and reward values are proposals for review, not locked canon.

## Recommended first placement
- Preferred first stage: Stage 01 — Dockside District.
- Candidate location: a locked side room off the Warehouse Passage, reachable from the Warehouse Entrance branch.
- Eligibility: Jenni must be the selected fighter; the route and rescue room must actually be loaded.
- Offer timing: after the current enemy wave is cleared and before the player enters the next combat area. Never display the offer during a boss fight, knockdown, or active wave.
- If the player takes the other route, this mission is not failed; it remains eligible at a later authored location, subject to the mission scheduler.

## Player-facing offer
**Title:** GET THEM OUT  
**Prompt:** “Someone's being held inside. Clear the room and get them to the safe exit.”

The player may accept or walk past the trigger. Declining or ignoring the mission must not affect the main stage.

## Encounter sequence
1. **Discovery:** Jenni hears a muffled call and sees a clear visual cue at the locked room. The mission prompt appears only when the area is safe to enter.
2. **Entry:** On acceptance, the side-room encounter begins. A gang guard blocks the entrance; one additional guard protects the captives. Keep enemy count modest for the first mobile test.
3. **Clear the room:** Defeat the guards. The rescue target remains in a protected, non-combat state while enemies are active. Do not let ordinary enemy AI target or damage the civilian during this prototype.
4. **Release:** Once the room is clear, Jenni uses a clearly marked interaction point or reaches the captive's position to release them. If the exact interaction API is not yet verified, use a simple authored touch/area trigger rather than assuming an unsupported function.
5. **Escort:** The rescued witness follows at a safe distance along a short, unobstructed corridor. No new enemies spawn directly on the escort target. For the first prototype, use one witness rather than a large group to reduce pathing and collision risk.
6. **Safe exit:** Reach a marked safe-zone trigger at the corridor exit. The witness exits the combat area; the mission completes.
7. **Result:** Show a short success message and reward, then return control to the normal stage flow. The main route remains available.

## Success and optional challenge
- **Required success:** Clear the holding room, release the witness, and reach the safe exit with the witness.
- **Optional perfect rescue:** The witness takes no damage and the player does not abandon the escort.
- Do not require the perfect-rescue condition for mission completion or campaign progress.

## Failure, abandonment, and retry rules
- **Player walks away before accepting:** No mission state is started; main stage continues.
- **Player abandons after accepting:** End the optional mission cleanly, show “Rescue abandoned,” and restore the main-stage route. Do not penalize the campaign.
- **Player dies / uses continue:** Follow the normal stage continue behavior. Do not duplicate a one-time reward. Whether the rescue restarts or returns to the pre-mission state must be confirmed against actual OpenBOR stage/continue behavior.
- **Escort target becomes stuck or cannot reach the exit:** Provide a safe fallback: use a second trigger at the exit or a short scripted/cutaway transition. Never leave the stage softlocked.
- **Witness takes damage:** The optional perfect-rescue bonus is lost, but the mission can still succeed if the witness reaches safety.
- **No timer in the first version.** Add urgency only after the basic escort is proven reliable on mobile.

## Reward and story consequence
- **Primary reward proposal:** witness statement / evidence clue connecting a Dockside crew to a later gang operation.
- **Small immediate reward proposal:** modest score or ordinary upgrade currency, tuned against other optional missions.
- **Optional perfect-rescue bonus:** a small additional score/currency reward, not a permanent stat increase.
- **Potential later consequence:** a short dialogue variation or intel hint in a later stage. Do not make the evidence required to complete the campaign.
- The witness's statement can support Jenni's undercover-investigation arc without automatically exposing her identity.

Exact reward quantities and later-stage callback are pending design review.

## Mobile and accessibility requirements
- Use a compact objective prompt in landscape orientation; do not cover the combat area.
- Make the captive and safe exit visually distinct.
- Keep escort distance and movement simple; avoid narrow collision-heavy passages.
- Use a clear success/failure cue and return control promptly.
- Test with all five fighters only if the mission is intentionally made available to all; current design says Jenni's personal mission pool is available only when Jenni is selected.

## Conceptual mission states
These names are design labels only; they are not asserted to be OpenBOR variables or callbacks:
`UNAVAILABLE → AVAILABLE → OFFERED → ACCEPTED → ROOM_CLEARED → WITNESS_RELEASED → ESCORT_ACTIVE → COMPLETED`
Possible exits:
- `OFFERED → DECLINED`
- `ACCEPTED / ESCORT_ACTIVE → ABANDONED`
- `ESCORT_ACTIVE → PERFECT_RESCUE_FAILED` while the core mission remains active.

## Technical verification checklist
Before implementation, verify the exact target OpenBOR build and test:
1. How a level detects that Jenni is the selected player character.
2. Which supported mechanism can activate an optional trigger/area and show a prompt.
3. Whether a neutral NPC can be spawned and kept out of enemy targeting, or whether a protected/cutaway representation is safer.
4. Whether a character can follow the player using supported movement/AI, and how to prevent pathing deadlocks.
5. How to detect entry into the safe-exit area and transition the mission result without ending the stage.
6. How mission state and one-time rewards persist across death, continue, stage transition, and save/load.
7. Whether the mobile HUD can display the objective without obscuring play.

For every item, record the source file/documentation evidence and a minimal reproducible test. Do not assume function names.

## Minimal test plan
- Test A: Enter the room, defeat guards, release witness, reach exit; verify mission completes and stage continues.
- Test B: Walk past the offer; verify the main stage remains playable.
- Test C: Accept, then abandon; verify no softlock and no campaign penalty.
- Test D: Let the witness take damage; verify core rescue can still complete but perfect bonus is withheld.
- Test E: Die/continue during escort; verify no duplicate witness or reward.
- Test F: Complete once, revisit trigger/replay; verify one-time evidence/reward cannot be farmed.
- Test G: Test on target Android device for touch controls, readable prompts, stable frame rate, and collision behavior.

## Acceptance criteria
- [ ] Jenni-only eligibility is enforced.
- [ ] The mission appears only at a valid authored location and safe trigger moment.
- [ ] The player can decline or abandon without blocking the stage.
- [ ] Guards can be defeated and the witness released.
- [ ] Escort reaches the safe exit without pathing deadlock.
- [ ] Perfect-rescue bonus is optional and clearly communicated.
- [ ] Death/continue and replay do not duplicate permanent rewards.
- [ ] Mission completion returns cleanly to the main stage.
- [ ] The mission is tested in the exact target OpenBOR build on Android.

## Open decisions for review
1. Should the first rescue contain one witness (recommended for the prototype) or multiple civilians?
2. Should the witness be a named recurring character or an unnamed dockworker?
3. Should the rescue take place in the Warehouse Passage, or should it be reserved for a later stage to avoid overloading Dockside's first milestone?
4. Should the evidence lead to a later optional dialogue scene, or remain a self-contained reward?

## Scope honesty
This is a design prototype, not working game code. Escort AI, neutral NPC behavior, interaction triggers, persistence, reward handling, and Android performance remain unverified.
