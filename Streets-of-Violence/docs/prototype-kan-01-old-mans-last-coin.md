# Prototype Mission KAN-01 — The Old Man's Last Coin

Project: Streets of Violence  
Playable character: Kanan “Scorpion” Jaxon only  
First target stage: Dockside District  
Mission category: civilian protection / investigation / hidden reward  
Status: implementation-ready encounter specification; not yet coded or runtime-tested.

## Player experience

Kanan enters a quiet side lane near the docks and sees two gang members harassing an elderly neighborhood resident. The encounter is optional. If Kanan intervenes, he protects the man, hears a short story about a hidden cache, and receives a clue. The clue leads to a concealed supply alcove containing a rare life-up reward.

The old man is not a quest vending machine. He is a local who remembers the neighborhood and knows where people hid valuables before the gang took over the waterfront.

## Trigger and eligibility

- Stage: Dockside District.
- Character: Kanan selected for the current run.
- Location: side lane off the Container Maze branch, before the route rejoins the main stage.
- Trigger: Kanan enters the marked interaction zone while no active wave or boss encounter is running.
- Availability: eligible for a random personal-mission roll; do not guarantee appearance on every run.
- If the mission is not selected, the lane remains ordinary scenery or contains a harmless ambient NPC. Do not leave an unusable mission marker behind.

## Encounter beats

### Beat 1 — Discovery
- Show the elderly man backed against a wall or crate, with two Dockside Grunts threatening him.
- Use a short, readable callout: “Leave him alone.”
- The player can approach to start the encounter or continue past the lane.
- Do not lock player movement before the player commits.

### Beat 2 — Protection fight
- Spawn two Grunts with a slight stagger so the player can read the encounter.
- Keep the civilian outside the combat lane and outside enemy attack paths where possible.
- The civilian must not become a normal enemy target or take incidental damage from broad attacks.
- If the engine cannot safely protect a neutral entity from damage, keep the civilian in a protected non-combat interaction area and despawn/disable the bullies before the conversation begins.

### Beat 3 — Thank-you and clue
- After both bullies are defeated, pause new spawns and allow Kanan to interact with the old man.
- Dialogue: “They took the streets, but they never learned what the old dockworkers buried.”
- Kanan: “Then tell me where to look.”
- Old man: “Follow the red paint beneath the third crane. The old lockbox is still there.”
- Set the mission objective to “Find the old lockbox beneath the third crane.”

### Beat 4 — Hidden cache
- Place a subtle red paint mark on a support beam beneath the third crane, visible from the correct route but not highlighted by a giant marker.
- The lockbox is an optional interactable in a small safe alcove.
- Interacting with it completes the mission and grants the life-up reward once.
- If the player leaves Dockside without opening it, the clue can remain recorded for a later eligible revisit only if the save system supports this safely. Otherwise, keep the clue and cache within the same stage run.

## Life-up reward definition

For this mission, “life-up” means a permanent increase to Kanan's maximum health by a small, fixed amount (provisional: +10% of base maximum health), not an extra continue or a refill of the current health bar. Confirm final tuning through playtesting.

- Grant only once per save slot.
- Display a clear reward toast and a small health-bar growth effect.
- Do not allow farming by restarting the stage or reloading a checkpoint.
- If the permanent reward has already been collected, a replay may provide a small repeat-safe currency reward instead, or the mission can remain unavailable.
- Do not let the reward exceed the campaign's planned health cap.

## Failure, decline, and edge cases

- If the player walks past the lane, no mission failure is recorded.
- If Kanan loses all health during the fight, normal continue/restart rules apply; do not duplicate the reward.
- If the player defeats one bully and leaves, the encounter should either safely reset on re-entry or remain in a clear incomplete state. Never leave the stage wave controller stuck.
- If the player exits the branch, the main stage continues normally.
- The old man must not spawn inside collision geometry or behind a camera boundary.
- The cache must be reachable without a character-specific jump or upgrade requirement.
- If Kanan is not selected, this mission must not appear for another fighter.

## Required state model

Conceptual states, not yet mapped to verified OpenBOR APIs:

- `UNAVAILABLE`
- `AVAILABLE`
- `OFFERED`
- `BULLIES_ACTIVE`
- `CLUE_GRANTED`
- `CACHE_OPENED`
- `COMPLETED`

One-time reward flag: `KAN_OLD_MAN_LIFEUP_CLAIMED`.

The runtime implementation must use only persistence and script features verified for the pinned OpenBOR revision. Do not copy these identifiers into engine code until the API is confirmed.

## Art and audio needs

- Elderly dockworker civilian sprite set: idle, worried/talking, thank-you.
- Two Grunt sprites can be reused from the enemy roster if their combat animations are ready.
- Small red paint clue decal.
- Lockbox/chest prop with closed and opened states.
- Short interaction cue, mission success sting, and reward pickup sound. Use original game audio.

## Acceptance tests

- [ ] Mission can only be offered when playing as Kanan.
- [ ] It appears only at the authored Dockside side-lane trigger.
- [ ] Player can decline and complete the main stage.
- [ ] Both bullies can be defeated without harming the civilian.
- [ ] The clue is delivered once and points to the correct crane.
- [ ] The lockbox is reachable and clearly interactable.
- [ ] Life-up increases maximum health exactly once.
- [ ] Restart/reload cannot duplicate the permanent reward.
- [ ] Mission completion does not block the stage exit or Brick boss transition.
- [ ] No NPC, enemy, or cache spawns inside geometry or off-camera.

## Technical implementation gate

Before writing runtime scripts, inspect the exact pinned OpenBOR source for neutral entity damage handling, interaction/input callbacks, mission-state storage, and persistent save data. If neutral NPC protection is not reliable, use a protected cutaway interaction scene rather than risking the civilian during combat. This specification is ready for implementation planning, but no executable mission code is claimed complete.
