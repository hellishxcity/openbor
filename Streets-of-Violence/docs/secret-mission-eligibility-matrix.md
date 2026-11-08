# Secret Mission Stage Eligibility and Random Appearance Matrix

Project: Streets of Violence  
Related design: `character-secret-missions.md`  
Status: scheduling specification only; no runtime randomizer or save system has been implemented or tested.

## Scheduling principles

- Each fighter has three personal missions; only that fighter's pool is considered during a run.
- A mission can only be rolled at a stage and location listed below.
- The first release target is a maximum of one personal secret mission offer per stage.
- Mission appearance is a weighted random choice among eligible, not-yet-completed missions. A mission with no valid trigger in the current route is excluded before the roll.
- If the player has completed all eligible missions for that fighter, do not repeat a permanent-reward mission. A replayable mission may return only if its reward is repeat-safe.
- Never interrupt a boss fight, a knockdown, a cutscene, or an active wave with a mission prompt.
- The player can decline or ignore the mission; the stage continues normally.

## Campaign stage key

1. Dockside District
2. The Concrete Jungle
3. The Ironworks
4. Neon Strip
5. Lockdown
6. Underground
7. King's Territory
8. The Shipyard
9. No Man's Land
10. The King's Fall

## Mission eligibility matrix

| Fighter / mission | Preferred stages | Valid trigger location | Mission type |
|---|---|---|---|
| Kanan — The Old Man's Last Coin | 1, 2, 4 | Street corner, market edge, dockside side lane | Protect civilian / clue |
| Kanan — Red Ledger | 1, 3, 7 | Office, loading area, gang stash room | Recover intel |
| Kanan — No One Left Behind | 2, 5, 8 | Side room, prison holding area, ship compartment | Rescue / escort |
| Jaylen — Wrong Turn Ambush | 1, 2, 6, 8 | Optional branch or suspicious route entrance | Ambush survival |
| Jaylen — Heavy Debt | 2, 4, 7 | Shopfront, casino service area, hotel loading bay | Protect locals |
| Jaylen — Brother's Trail | 3, 6, 9 | Hidden cache, abandoned transit room, personal clue site | Story investigation |
| Shai — Safe Signal | 3, 6, 8 | Control room, communications station, ship bridge | Disable signal jammer |
| Shai — The Stolen Drive | 4, 7, 10 | Office, security hub, executive floor | Pursuit / recover data |
| Shai — One More Round | 2, 4, 5 | Fight club, gym, prison recreation area | Optional duel |
| Jenni — Get Them Out | 1, 5, 7, 9 | Locked room, holding cell, guarded safehouse | Rescue / escort |
| Jenni — Evidence Locker | 3, 5, 7, 10 | Records room, evidence store, office archive | Secure evidence |
| Jenni — Cover Not Blown | 2, 4, 7, 10 | Guard checkpoint, restricted corridor, gang meeting | Avoid alarm / escape |
| Nona — Old Gym, New Trouble | 2, 4, 5 | Neighborhood gym, fight club, prison gym | Defend location |
| Nona — Debt Collector's Lesson | 1, 2, 7 | Street collection point, market, hotel service lane | Confront enforcers |
| Nona — No Easy Way Out | 3, 8, 9 | Hideout, ship compartment, abandoned block | Rescue or recover evidence |

## Weighted selection proposal

Use weights only after the valid pool is built. Initial tuning suggestion:
- First-time unseen mission: weight 5.
- Previously offered but declined mission: weight 2.
- Completed one-time mission: weight 0.
- Mission unavailable on the chosen route: weight 0.
- Repeat-safe challenge mission already completed: weight 1, only if replay rewards are non-farmable.

This weighting is a tuning proposal, not an engine implementation. If the eligible pool has one mission, offer it only at its authored trigger and only if the encounter can load safely.

## Route-specific rules

- Jaylen's Wrong Turn Ambush must be attached to a route the player actively chooses. Do not force an ambush on the main path without warning.
- Kanan's Old Man's Last Coin should be discoverable in an optional side area, but the old man and bullies must be placed before the area's exit trigger.
- Jenni's Get Them Out should only appear where a valid escort path and safe destination exist. Avoid escorting through a boss arena.
- If a route branch is skipped, its mission is not marked failed; it remains eligible for a later stage or replay.
- The mission scheduler must not change the main stage boss or remove a required enemy wave.

## Completion and rewards

Every mission definition should specify:
- unique mission ID;
- eligible stages and route conditions;
- trigger entity/area;
- objective state sequence;
- success condition;
- optional failure/abandon condition;
- reward and whether it is one-time;
- dialogue/result cue;
- save-state key after persistence is verified.

Permanent life-ups, maximum-health increases, unique equipment, and campaign-critical evidence should be one-time rewards. Score and ordinary currency can be repeat-safe only with anti-farming limits.

## First three implementation prototypes

1. **KAN-01 The Old Man's Last Coin** — tests NPC interaction, protecting a civilian, clue delivery, and hidden reward discovery.
2. **JEN-01 Get Them Out** — tests rescue target state, escort movement, and safe-exit completion.
3. **JAY-01 Wrong Turn Ambush** — tests route-gated enemy wave activation and survival completion.

Do not build all 15 at once. Validate these three different mission patterns first, then reuse proven interaction/state patterns for the remaining missions.

## QA cases

- Mission offer appears only for the correct selected fighter.
- Mission is not offered in an ineligible stage or route.
- Declining/ignoring the mission does not block stage completion.
- Player death and continue do not duplicate permanent rewards.
- Re-entering a trigger cannot duplicate mission NPCs or rewards.
- A branch skipped by the player does not mark its mission as failed.
- All mission prompts fit landscape mobile screens and do not obscure combat.
- Each mission has a clear success state and returns control to the main stage.

## Technical gate

Before coding the randomizer, verify the pinned OpenBOR revision's supported script callbacks, entity interaction methods, global variables, and save persistence. Until that is confirmed, the IDs and state keys in this document are conceptual design data only.
