# Character-Specific Secret Missions — 15-Mission System

Project: Streets of Violence  
Scope: Three signature secret missions for each of the five starting fighters.  
Status: design specification; random scheduling, mission logic, rewards, and persistence are not yet implemented or runtime-tested.

## Core concept

Each starting fighter has three personal secret missions. Across the five-character roster, that creates 15 character-specific missions. These are optional side objectives that can appear dynamically in eligible stages and routes.

The system should feel surprising but fair:
- A mission appears only when its stage, route, and character conditions are valid.
- Use weighted random selection from the eligible mission pool, not unrestricted randomness.
- Avoid repeating the same mission too often in one play session or save slot.
- Never spawn a mission during an active boss fight or in a location that makes it impossible to complete.
- Give the player a clear visual/audio cue and a short objective prompt.
- Let the player ignore a mission and continue the main stage without penalty.
- Keep mission timers optional; use them only when the story situation genuinely calls for urgency.
- Mission rewards should be useful but balanced. Permanent upgrades must be rare and never required to finish the campaign.

## Random appearance rules

1. At stage start, determine which character is selected.
2. Build an eligible pool from that character's three missions and the current stage/route conditions.
3. Roll once at a suitable trigger point, such as entering a side area, passing an NPC, or choosing a branch.
4. Limit the initial implementation to at most one personal secret mission offer per stage. This can be tuned after playtesting.
5. If the selected mission is unavailable because its NPC, route, or encounter cannot be loaded, reroll from the remaining eligible pool or show no mission. Never create a broken objective.
6. Record mission completion and recent appearances only after the engine's save/persistence behavior is verified.
7. Support replay so players can discover missions they missed with other fighters.

Random should mean varied, not arbitrary: each mission needs a known eligible stage/area and a reliable trigger.

## Kanan “Scorpion” Jaxon — personal missions

### KAN-01: The Old Man's Last Coin
**User's approved concept:** Kanan helps an elderly man being bullied by gang members.
- Trigger: Kanan enters a suitable street, market, or dockside side area where an elderly NPC is being harassed.
- Objective: defeat or drive away the bullies without harming the civilian.
- Story beat: the old man thanks Kanan and shares information about a hidden reward.
- Reward: a clue leading to a concealed life-up item or permanent maximum-health upgrade, subject to balance testing.
- Follow-through: the clue can point to a nearby secret cache or a later-stage hidden location.

### KAN-02: Red Ledger
- Trigger: Kanan discovers a dropped ledger or overhears gang members discussing a hidden stash.
- Objective: recover the ledger and defeat the gang members trying to retrieve it.
- Reward: upgrade currency and a map clue to a hidden weapon or collectible.
- Character angle: Kanan uses observation and street knowledge to turn a small discovery into an advantage.

### KAN-03: No One Left Behind
- Trigger: a trapped informant or injured ally is found in an optional side area.
- Objective: clear the immediate threat and escort the person to a safe exit.
- Reward: a later encounter hint, a modest health supply, or a friendly support appearance.
- Failure handling: the main stage remains completable if the player walks away.

## Jaylen “Coldman” Jaxon — personal missions

### JAY-01: Wrong Turn Ambush
**User's approved concept:** Jaylen is ambushed if the player chooses a particular path or area.
- Trigger: Jaylen chooses a suspicious route or enters a marked danger area.
- Objective: survive a coordinated ambush by gang fighters entering from multiple directions.
- Encounter design: give a brief warning cue, preserve escape space, and avoid spawning enemies directly on top of Jaylen.
- Reward: high score/upgrade currency and a chance to recover a useful combat item.
- Story beat: Jaylen recognizes the setup as a deliberate attempt to isolate him.

### JAY-02: Heavy Debt
- Trigger: Jaylen encounters a local who says a gang crew has been shaking down neighborhood businesses.
- Objective: defeat the enforcers and destroy or recover their intimidation records.
- Reward: cash/upgrade currency and a discount or supply bonus at a later friendly merchant.
- Character angle: Jaylen's intimidating reputation becomes protection for the neighborhood.

### JAY-03: Brother's Trail
- Trigger: Jaylen finds a clue connected to Kanan or the brothers' shared past.
- Objective: follow the clue through an optional combat area and recover a keepsake or message.
- Reward: character lore, a small upgrade resource, and optional dialogue in a later stage.
- Character angle: a personal mission focused on family rather than simply fighting.

## Shai Hooks — personal missions

### SHA-01: Safe Signal
- Trigger: Shai intercepts a distress call or coded message in a stage with communications equipment.
- Objective: reach the signal source and disable the gang's interference device.
- Reward: a route hint, collectible intel, or a temporary support advantage in a later encounter.

### SHA-02: The Stolen Drive
- Trigger: Shai spots a courier carrying stolen data through an optional route.
- Objective: catch the courier, defeat the guards, and recover the drive.
- Reward: upgrade currency and intelligence that reveals a hidden route or enemy deployment.

### SHA-03: One More Round
- Trigger: Shai discovers an underground fight being used to recruit or extort locals.
- Objective: defeat an optional challenger under clear combat rules.
- Reward: a combat upgrade resource or a unique victory collectible.
- Character angle: showcases her kickboxing skill and confidence.

## Jenni “Legs” Rows — personal missions

### JEN-01: Get Them Out
**User's approved concept:** Jenni gets a rescue mission.
- Trigger: Jenni discovers civilians or a witness being held in a gang-controlled location.
- Objective: defeat the guards, open the safe exit, and escort the rescued person or group to safety.
- Optional challenge: rescue everyone without letting the escort target take damage.
- Reward: a witness statement or evidence item that can expose a gang operation later, plus a modest supply reward.
- Story beat: Jenni's undercover police work creates tension between her mission and her duty to protect people.

### JEN-02: Evidence Locker
- Trigger: Jenni finds a hidden stash of records, contraband, or a gang transaction book.
- Objective: secure the evidence while surviving a response wave.
- Reward: campaign intel, an alternate dialogue scene, and possible access to a later optional route.
- Character angle: rewards investigation rather than brute force.

### JEN-03: Cover Not Blown
- Trigger: Jenni encounters a gang member who suspects her undercover identity.
- Objective: escape or neutralize the threat without triggering a full reinforcement alarm.
- Reward: a stealth-related route advantage, intel, or a later encounter starting bonus.
- Fairness: the player receives readable suspicion cues and a way to recover from small mistakes.

## Nona “Beauty” Silks — personal missions

### NON-01: Old Gym, New Trouble
- Trigger: Nona finds a neighborhood gym being taken over by gang enforcers.
- Objective: defeat the crew and protect the gym owner and trainees.
- Reward: a training resource or a permanent but modest grappling/combat upgrade after balance testing.

### NON-02: Debt Collector's Lesson
- Trigger: a local asks Nona for help against a violent debt collector.
- Objective: confront the collector and defeat the accompanying crew.
- Reward: merchant discount, upgrade currency, or a useful supply item.
- Character angle: Nona uses her past experience to recognize and challenge exploitation.

### NON-03: No One Gets Left Behind
**User-approved concept:** Nona must protect a woman and escort her alive to a specified destination.
- Trigger: Nona encounters a woman being hunted by a gang in an optional side area.
- Objective: escort the woman through connected combat areas to the marked safe destination.
- Threat model: enemies are allowed to target and damage the woman. She is not invulnerable; if her health reaches zero, the mission fails immediately.
- Core skill test: Nona must eliminate attackers quickly and prevent them from reaching or surrounding the woman. Enemy waves should use readable approach lanes and fair warning cues, but should pressure the player from more than one direction where the layout allows.
- Escort behavior: the woman follows Nona along a tested route, pauses safely when blocked, and must physically reach the destination with Nona. Nona arriving alone never counts as success.
- Success: both Nona and the living woman enter the safe destination zone.
- Failure: the woman dies, or the mission is explicitly abandoned. Failure never blocks the main stage.
- Reward: one extra life, granted once per save slot for this mission. Display the life-up clearly and prevent repeat farming on replay.
- Character angle: Nona's grappling and close-range control make her the protector who clears threats before they can reach the civilian.


## Reward policy

- Common rewards: score, modest currency, health pickup, or consumable supply.
- Uncommon rewards: collectible, route clue, merchant discount, intel, or temporary encounter advantage.
- Rare rewards: permanent maximum-health increase, permanent stat upgrade, or unique equipment.
- Kanan's hidden life-up clue is a rare reward path. Decide whether the life-up is a one-time permanent maximum-health increase or a collectible that grants an extra life; do not implement both meanings interchangeably.
- Never make a required progression item exclusive to a random mission.
- Show the reward clearly when the mission is completed.

## Mission presentation and controls

- Use a short title card and one-sentence objective.
- Use a distinct icon per mission category: rescue, ambush, investigation, escort, challenge, or recovery.
- On mobile, show a compact objective reminder that does not cover the combat area.
- Provide clear success/failure feedback.
- If the mission is abandoned, return cleanly to the main stage flow.

## Implementation plan

1. Verify OpenBOR's supported script, global-variable, and save-persistence behavior for the pinned engine revision.
2. Prototype one mission end-to-end before creating the full pool. Recommended first prototype: KAN-01, because it tests NPC interaction, optional combat, reward clue, and secret pickup.
3. Prototype JEN-01 rescue and JAY-01 ambush as the next two distinct mission types.
4. Add the remaining 12 mission definitions and stage eligibility table.
5. Add weighted selection, repeat protection, and per-save tracking only after persistence support is proven.
6. Test every mission with its assigned fighter, including abandonment, player death, stage transition, and replay.

## Acceptance checklist

- [ ] Each of the five starting fighters has exactly three personal secret mission definitions.
- [ ] Only the selected fighter's personal mission pool is eligible.
- [ ] Random selection respects stage/route eligibility and avoids impossible triggers.
- [ ] At most one personal mission offer appears per stage in the initial tuning.
- [ ] Missions are optional and never block the main route.
- [ ] Rewards are granted once per intended completion rule and cannot be farmed through reload exploits.
- [ ] Mission state and replay behavior work with verified save persistence.
- [ ] All mission objectives and prompts are readable on mobile.
- [ ] Kanan's old-man encounter, Jaylen's route ambush, and Jenni's rescue mission each work from trigger to reward.

## Scope honesty

This file records the approved mission design. The 15 missions, random appearance logic, NPCs, rewards, and save tracking have not yet been implemented or runtime-tested.
