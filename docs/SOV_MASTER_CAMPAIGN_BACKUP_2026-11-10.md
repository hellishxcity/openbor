# Streets of Violence (S.O.V.) — Master Campaign & Development Backup
**Backup date:** 2026-11-10  
**Project:** Original 2D side-scrolling beat-'em-up  
**Target:** OpenBOR, Android-first, landscape  
**Repository:** hellishxcity/streets-of-violence-  
**Working branch:** Streets-of-Violence

> This is a consolidated working reference, not a claim that every planned feature is implemented. It separates established decisions, approved design material, proposed additions, and unresolved details. Preserve original ideas; do not silently replace canon.

## 1. Project identity and scope
S.O.V. is an original gritty urban beat-'em-up. Main Story Mode is the current priority. The original ten-stage campaign and original boss roster remain the backbone. Mei Lin and Romeo Wells' bonus campaign is deferred until the main story is complete. Keep S.O.V. separate from NinaStorm: The Bloodstorm, Bricks Business, and the sequel The Violent Streets.

## 2. Opening scene and player introductions
The opening takes place at the Dockside District at night. Dock workers are unloading shipments while gang members collect money from them. Two gang members corner a dockworker; one says, “Ali gets his cut.” They shove the worker against a shipping container. The selected playable character witnesses the abuse and intervenes.

Opening exchange in the current working scene:
- Selected character: “Keep walking. This doesn't concern you.”
- The first fight begins.
- After the first group is defeated, three more gang members arrive.
- The rescued dockworker warns: “They work for Ali. You don't know what you've gotten yourself into.”
- Selected character: “Maybe it's time somebody reminded Ali that he doesn't own this place.”

Treat these lines and beats as the current approved opening draft from the latest conversation. If earlier original dialogue is recovered, reconcile rather than overwrite without asking.

### Starting playable roster
All five are selectable from the beginning of Stage 1:
1. Kanan “Scorpion” Jaxon — fast martial arts and striking; jab, cross, body-hook punch, spinning heel kick, Scorpion Strike.
2. Jaylen “Coldman” Jaxon — wrestling and street brawling; grapples, throws, heavy strikes. (A later assistant response used “Coleman”; canonical spelling in the earlier roster is Jaylen. Confirm if needed; do not silently rename.)
3. Shai Hooks — kickboxing; Kanan's fiancée; powerful kicks and combinations. She is a full character, not merely a love-interest role.
4. Jenni “Legs” Rows — taekwondo; undercover police officer; fast, high-impact kicks.
5. Nona “Beauty” Silks — MMA and grappling; striking, takedowns, close-range grappling.

Character selection is available from the beginning. Each character has their own introduction and fighting style. Kanan is mostly silent, communicating through nods, signals, and occasional short lines. Kanan and Shai have established romantic chemistry and the co-op special “Lover's Quarrel.”

### Opening tutorial
The first fight teaches:
- movement and positioning;
- light and heavy attacks;
- five-hit combos;
- blocking and dodging;
- counters;
- grabs and throws;
- environmental combat;
- special attacks.

First-playthrough tutorial is mandatory; subsequent playthroughs may skip it. These are design decisions, not verified implementation.

## 3. Dockside District — Stage 1
Original stage areas, in order:
1. Pier Entrance
2. Container Lane
3. Container Maze
4. Warehouse Entrance
5. Warehouse Apron
6. Warehouse Passage
7. Waterfront Walk
8. Service Tunnel
9. Pier Approach

Dockside is the first vertical-slice target. Preserve the original nine-section layout and add missions/story beats within it rather than replacing it.

### Dockside story and mission material
The Dockside investigation concerns Ali's criminal operation and suspicious shipment activity. Established/working story discoveries:
- Shipment Manifest: suspicious shipments moving through the docks.
- Communications Log: evidence that dock operations receive outside instructions.
- U-6 — NIGHT TRANSFER: a shipment reference that connects forward to the Underground operation in Stage 6.

The “Safe Signal” mission material:
- locate the communications equipment;
- disable the jammer;
- locate the holding area;
- rescue Jay Brooks and the captured workers;
- protect them during the escape.

Jay Brooks is the dock contact/rescued worker in the current story notes. The ledger contains evidence of forced labor and protection payments. The U-6 code links the dock operation to the Underground. Integrate these objectives into the warehouse portion so the mission feels part of the stage rather than a disconnected side quest.

Other Dockside exploration material discussed:
- container-yard encounters and alternate route through the container maze, with routes reconnecting;
- hidden health items and collectibles;
- freight passage, loading corridors, storage rooms, and shipment records;
- freight lift and warehouse interior exploration;
- an enforcer encounter in the freight-passage/warehouse progression.

Important: exact sequence and detailed mission text from prior work should be recovered from conversation/project files if available. Do not invent additional canon under the label “yesterday's approved material.”

### Dockside environmental combat
Planned interactive objects:
- breakable wooden crates that may reveal items;
- barrels that can be struck or thrown;
- metal pipes as temporary weapons;
- breakable cargo pallets;
- forklifts and parked vehicles as obstacles or possible hazards;
- breakable doors, windows, and walls that may reveal paths, evidence, or collectibles.

Environmental attacks need clear animation, pickup/throw states, collision, and feedback.

### Dockside boss
Dockside District boss identity is UNCONFIRMED. Do not assign Brick or Brock to Dockside without user confirmation. Brick's confirmed placement is a returning boss encounter in King's Territory; his first appearance remains unresolved. Brock is an established heavy bruiser/miniboss, but exact stage placement is not confirmed.

## 4. Main campaign — original ten stages
| # | Stage | Original sections / notes | Boss |
|---|---|---|---|
| 1 | Dockside District | Pier Entrance; Container Lane; Container Maze; Warehouse Entrance; Warehouse Apron; Warehouse Passage; Waterfront Walk; Service Tunnel; Pier Approach | Unconfirmed |
| 2 | The Concrete Jungle | Southside Street; Graffiti Alley; Corner Market; Apartment Courtyard; Fire Escape; Rooftop Crossing; Gang Hideout; Backstreet Garage; Underground Fight Room | Razor |
| 3 | The Ironworks | Factory Entrance; Loading Yard; Conveyor Floor; Machine Hall; Furnace Corridor; Smelting Room; Upper Catwalks; Maintenance Tunnels; Foundry Floor | The Butcher |
| 4 | Neon Strip | Neon Boulevard; Club Entrance; Nightclub Dance Floor; VIP Lounge; Casino Floor; Casino Back Rooms; Underground Fight Club; Service Corridors; Rooftop Neon Sign | Money Man |
| 5 | Lockdown | Prison Transfer Yard; Main Gate; Guard Checkpoint; Cell Block A; Cell Block B; Prison Infirmary; Security Control Room; Laundry and Service Tunnels; Exercise Yard | Captain Cross |
| 6 | Underground | Subway Entrance; Ticket Hall; Abandoned Platform; Maintenance Tunnel; Track Crossing; Moving Train Interior; Train Car Connections; Underground Service Station; Emergency Exit | Viper Queen |
| 7 | King's Territory | King's Boulevard; Luxury Hotel Entrance; Grand Lobby; Hotel Ballroom; Private Casino; Executive Offices; Underground Parking Garage; Security Compound; Rooftop Helipad | Iron Fist and returning Brick |
| 8 | The Shipyard | Outer Shipyard; Crane Loading Zone; Container Stacks; Dry Dock; Cargo Ship Gangway; Main Cargo Deck; Crew Quarters; Engine Room; Upper Bridge Deck | DJ Havoc |
| 9 | No Man's Land | Outer Barricade; Abandoned Neighborhood; Burned-Out Street; Collapsed Apartment Block; Rooftop Route; Ruined Shopping Center; Underground Shelter; Abandoned Warehouse; War Zone Crossing | Warden Stone |
| 10 | The King's Fall | Final campaign stage; detailed sections still to be confirmed | Final boss needs reconciliation |

Older story notes explicitly identify Ali as the final boss and reveal that Shaw is a pawn funded by a more powerful unknown figure. The latest stage screenshots left The King's Fall boss unconfirmed. Preserve Ali as the older established direction pending user confirmation; do not silently replace or finalize the identity.

## 5. Enemy master roster
### Regular enemies
- Dockside Thug — basic street fighting
- Switchblade — fast knife attacks
- The Bat — heavy weapon swings
- Street Dragon — martial arts
- Bottle Bomber — ranged projectile attacks
- Dual Knuckles — fast dual-weapon fighting
- Pit Viper — low sweeps and combinations
- Smoke Runner — evasive attacks

### Elite enemies
- Black Parasol — umbrella combat and limited firearm ammunition (fictional umbrella-mounted gun)
- Iron Wall — defensive shield fighter
- Ghost Step — evasive counterattacker
- The Collector — grappling and throws
- Chain Reaper — chain attacks and pulls
- The Rooftop Rat — elevated ranged attacks
- Firestarter — environmental hazard attacks
- The Enforcer — armored security fighter

### Heavy enemies / bruisers
- Brock — established heavy bruiser
- Wrecking Ball — charging and ground-smashing attacks
- The Crusher — grabs and powerful slams

### Distribution principles
Enemy placement must suit each stage's environment. Examples: Black Parasol in warehouse environments; prison-related opponents in Lockdown; underground fighters in Underground; shipyard enforcers in The Shipyard. These are placement guidance, not a complete locked spawn list. Do not put every enemy in every stage.

## 6. Original campaign bosses and story continuity
- Razor — The Concrete Jungle
- The Butcher — The Ironworks
- Money Man — Neon Strip
- Captain Cross — Lockdown
- Viper Queen — Underground
- Iron Fist — King's Territory
- Brick — returning boss in King's Territory; first appearance unresolved
- DJ Havoc — The Shipyard
- Warden Stone — No Man's Land
- The King's Fall final boss — older story notes say Ali; reconcile with latest roster
- Dockside boss — unconfirmed

### Shaw / Ali story thread
Shaw is fought by Nona and Jenni. After defeat, Shaw reveals Ali is a pawn funded by a more powerful unknown figure; Shaw gives Nona a letter and disappears. Shaw is planned as a playable character in the sequel The Violent Streets. Do not confuse Shaw with the five bonus-story bosses below.

## 7. Bonus Story Mode — deferred
Mei Lin and Romeo Wells are secret unlockable characters after completing the main Story Mode. Their bonus Story Mode is deferred until the main campaign is complete. Five additional proposed bosses are reserved for that bonus campaign:
- The Champion
- The Director
- Black Fang
- Iron Jaw
- The Twins

Do not move these bosses into the original ten-stage main campaign.

## 8. Combat and co-op
- Kanan's Scorpion fighting style and signature Scorpion Strike.
- Five-hit player combo system.
- Light/heavy attacks, jump, block, dodge, counters, grabs, throws, specials.
- Character-specific movesets.
- Kanan and Shai co-op special: Lover's Quarrel.
- Environmental weapon pickup/throw and destructible scenery.
- AI co-player accompanies the selected player in the planned mode.
- Kanan's mostly silent communication style is intentional.

## 9. Dockside Thug AI — approved pseudocode
This is design pseudocode, not native OpenBOR code.

### can_attack()
```text
FUNCTION can_attack(is_attacking, is_in_recovery, is_in_range, is_vulnerable):
    IF is_attacking OR is_in_recovery:
        RETURN FALSE
    IF NOT is_in_range OR NOT is_vulnerable:
        RETURN FALSE
    RETURN TRUE
```

### start_attack() v2.4
```text
FUNCTION start_attack(current_time, is_in_range, is_vulnerable):

    IF is_attacking OR is_in_recovery:
        RETURN FALSE

    IF cooldown_start_time IS NONE OR (cooldown_start_time + COOLDOWN_DURATION <= current_time):
        IF can_attack(is_attacking, is_in_recovery, is_in_range, is_vulnerable):
            is_attacking = TRUE
            attack_animation_start_time = current_time
            cooldown_start_time = current_time
            RETURN TRUE
    RETURN FALSE
```

Rules:
- can_attack() checks permission only; it does not mutate state.
- start_attack() is the gate for starting attacks; no direct bypass.
- If cooldown timestamp is NONE, first attack may start.
- Failed attempts do not reset cooldown.
- Cooldown timestamp is minimum interval between attack starts, not recovery.
- Target range and vulnerability are re-evaluated for each new attack.
- If target moves out of range or becomes invulnerable after the attack starts, the active animation finishes naturally.
- Recovery begins only when the active attack animation actually finishes: record recovery_start_time, set is_in_recovery TRUE, clear is_attacking.
- Recovery expiry and cooldown expiry are separate; both must expire before another attack.
- Example: 30-frame attack, 20-frame recovery, 60-frame cooldown. Attack starts frame 0, ends 30, recovery ends 50, cooldown expires 60. Eligible at 60 only if target remains in range and vulnerable.
- attack_animation_finished must be a reliable engine/animation completion signal, not an arbitrary AI reset.

### Pursuit controller
User-submitted v1.1 exists; assistant proposed corrected v1.2, which is NOT yet explicitly accepted. Main corrections:
1. Stale-target check should use target.last_update_time, not thug.last_update_time.
2. Horizontal pursuit distance sign should be distance - APPROACH_STOP_DISTANCE; move only if positive.
3. Clear stale is_in_range and movement directions when target invalid or stale.
4. Target selection/validity is separate from attack permission.
5. Pursuit stops at approach distance; attack range is independent.
6. Controller does not assess vulnerability or start attacks.

Proposed v1.2:
```text
FUNCTION update_pursuit(thug, target):

    IF target does not exist OR target is not valid:
        thug.has_target = FALSE
        thug.is_in_range = FALSE
        thug.movement = STOP
        thug.direction_x = 0
        thug.direction_y = 0
        RETURN

    time_since_target_update = CURRENT_TIME - target.last_update_time

    IF time_since_target_update > MAX_TIME_WITHOUT_UPDATE:
        thug.has_target = FALSE
        thug.is_in_range = FALSE
        thug.movement = STOP
        thug.direction_x = 0
        thug.direction_y = 0
        RETURN

    thug.has_target = TRUE
    lane_difference = target.lane_position - thug.lane_position

    IF ABS(lane_difference) > LANE_ALIGNMENT_TOLERANCE:
        thug.movement = MOVE_TOWARD_TARGET_LANE
        thug.direction_y = SIGN(lane_difference)
        thug.is_in_range = FALSE
        RETURN

    thug.direction_y = 0
    distance = HORIZONTAL_DISTANCE(thug.position, target.position)

    IF distance > APPROACH_STOP_DISTANCE:
        thug.movement = MOVE_TOWARD_TARGET
        thug.direction_x = SIGN(target.x - thug.x)
    ELSE:
        thug.movement = STOP
        thug.direction_x = 0

    thug.is_in_range = IS_WITHIN_ATTACK_RANGE(thug, target)
```

### AI priority proposal
Proposed behavior priority:
1. defeated;
2. native pain/knockdown reaction;
3. active attack animation;
4. recovery;
5. valid target approach/attack;
6. target memory/investigate;
7. idle.

Test first with one Kanan versus one Dockside Thug, then multiple thugs and multiple playable targets. Target selection/validity should be designed before multi-target testing.

## 10. Technical status and OpenBOR implementation
- Engine target: OpenBOR; Android-first, landscape.
- GitHub repository: `hellishxcity/streets-of-violence-`.
- Working branch previously used: `Streets-of-Violence`; repository default branch is `master`.
- Existing JS prototype at `Streets-and-Violence/Dockside-Combat-Core/dockside-core.js` is engine-independent gameplay reference logic, not OpenBOR code and not a complete game.
- Prototype includes player health/special meter, five-step combos, Scorpion Strike, jump/block/dodge/movement, enemy approach/cooldown/hitstun/knockback/health, three enemies then generic boss, HUD snapshot.
- Known JS prototype issues: held input may restart combos; combo lacks hit windows/recovery/hit-stop/cancel windows; enemy damages player at close range without facing/attack-animation checks; block lacks guard-break/block-stun/directional guard/feedback; dodge invulnerability covers full dodge; generic wave flow lacks Brock/Brick phases; HUD reads first enemy instead of robust boss/target selection; update loop continues after victory/defeat.
- Repository README and OpenBOR port plan were previously inspected. Existing native OpenBOR enemy files, test level, and confirmed OpenBOR runtime/build were not established by that inspection. Do not claim they exist.
- Earlier guidance mentioned candidate OpenBOR build 7735, but this was not verified. A later assistant message asserted OpenBOR v4.0 Build 7533 without evidence. Treat the exact build as UNVERIFIED; ask the user for the app/version screen before writing build-specific native code.
- Native OpenBOR model definitions, script APIs, and animation syntax must be checked against the exact target build. Do not invent API names or claim pseudocode is native code.
- Engine should handle entity health, movement execution, animation playback, collision, damage reactions, and defeat. Custom AI should handle target detection/tracking, approach decisions, attack selection, cooldown, and behavior/event decisions. Avoid independently applying proximity damage or removing entities from AI code.
- Candidate file structure previously proposed, not verified or created:
  ```
  data/
    chars/dockside_thug/
      dockside_thug.txt
      animations/
    scripts/enemies/
      thug_ai.c
      thug_config.c
  ```
- User is currently working from an Android phone and has previously said they do not have a computer. Do not assume Unity or desktop access.

## 11. Development order
1. Preserve and finish the Dockside opening cinematic, selectable-character introductions, first encounter, tutorial, and dockworker dialogue.
2. Consolidate the exact previously agreed Dockside missions and story beats; recover prior source material rather than duplicating or reinventing it.
3. Lock the Dockside section-by-section encounter and mission flow.
4. Verify the OpenBOR app/runtime version and exact script API.
5. Implement one Dockside Thug and one-player test: target validity/selection, lane alignment, pursuit, attack gate, animation completion, recovery, cooldown, hit reactions.
6. Build first playable Pier Entrance/Container Lane slice.
7. Add warehouse, Safe Signal rescue, discoveries, environmental combat, and stage completion.
8. Expand to remaining campaign stages after Dockside is stable.
9. Defer Mei Lin/Romeo bonus story until main Story Mode is complete.

## 12. Open questions — do not silently decide
- Exact Dockside boss identity.
- Whether Brock appears in Dockside or another stage.
- Brick's first appearance; King's Territory return is confirmed.
- Final boss identity in The King's Fall: older story says Ali, latest stage roster unconfirmed.
- Exact OpenBOR version/build and native API.
- Whether the user's spelling preference is Jaylen or Coleman; earlier roster says Jaylen, one later assistant response said Coleman.
- Full exact wording and mission order from yesterday's detailed Dockside notes should be checked against source material if available.
- Whether corrected pursuit v1.2 is accepted; it remains a proposal pending user confirmation.

## 13. Canon / proposal rules
- Preserve the original ten-stage campaign and original boss list.
- Keep all new enemy concepts alongside original enemies.
- Keep five bonus bosses exclusively in Mei Lin/Romeo bonus Story Mode.
- Mark new ideas as proposals until the user approves them.
- Do not conflate S.O.V. with NinaStorm, Bricks Business, or The Violent Streets sequel.
- Never describe a design checklist or pseudocode as implemented or playable until verified in the actual OpenBOR build.


## 14. Continuity additions confirmed in the November 10 discussion

These details were specifically raised by the user as part of the previous day's work and are now included in the master continuity record. Preserve them; do not downgrade them to speculative ideas.

### Character and relationship story threads
- **Jay** is Brick's ex-girlfriend. Jay is a distinct character from **Jay Brooks**, the dock contact rescued during “The Safe Signal.”
- **Brick** is a mad, volatile man whose behavior is affected by experimental drugs. His drug-related rage is part of his character/story. Keep his established returning boss encounter in King's Territory; his first appearance is still unresolved.
- **Romeo** is stalking and plotting against **Jaylen**. Preserve this as an active story thread. The exact scenes, motive, and timing need to be recovered or developed without changing the established premise.
- **Shai / Shay** was discussed as part of the previous day's character work. The current roster spells the playable character **Shai Hooks**; the transcript also contains the spoken spelling “Shay.” Retain Shai Hooks provisionally and do not silently create a second character. Confirm spelling if the user corrects it.
- The user explicitly identified the prior day's covered material as the introduction, tutorial, “The Safe Signal,” Shai, Jay/Brick's past relationship, Brick's experimental-drug storyline, and Romeo's stalking/plotting against Jaylen.

### Environmental combat — additional detail
The user specifically asked whether the combat design included throwable bricks, doors, and car parts. Preserve these mechanics in the combat design:
- **Bricks:** loose bricks can be picked up and thrown at enemies. During Brick boss battles, players can use bricks as a special environmental gimmick and hit Brick with bricks.
- **Car doors:** cars can be damaged; doors can be ripped off and used as improvised weapons. The design discussion includes swinging a detached door as a melee weapon and throwing it at enemies.
- **Other environmental destruction:** retain the established ability to send enemies through breakable doors, windows, and walls; use cars, trash cans, and smaller breakable objects as impact targets; breakable scenery can expose paths, evidence, or collectibles.
- **Character-specific environmental strength:** Shai and Nona can knock enemies into smaller breakable objects, cars, and trash cans. Kanan and Jaylen/Coldman can send enemies through walls, doors, and windows. Preserve the original character assignments unless the user changes them.

### Status discipline
The above are design/story decisions, not proof that the features are implemented in a playable build. Mark them as **confirmed design canon** and track implementation separately. Keep the distinction between Jay and Jay Brooks visible anywhere both names appear.


## 15. Character Bible — Kanan “Scorpion” Jaxon

**Status: Confirmed character direction from the user's November 10 description.**

### Personality
- Serious, reserved, and not very talkative.
- Protective of Shai, with a particularly strong overprotective streak toward her.
- His quiet nature is intentional; he communicates more through actions, expressions, and occasional short lines than long conversations.

### Fighting identity
- Highly skilled in martial arts and karate.
- Delivers very strong, powerful attacks while retaining speed and agility.
- Fast, capable dodger with a broad variety of moves, skills, and attacks.
- His combat identity balances force and mobility rather than making him a slow, heavy fighter.
- Preserve his established Scorpion fighting style and signature **Scorpion Strike**.
- Preserve the five-hit combo system and character-specific moveset.

### Relationship
- Shai Hooks is his fiancée/romantic partner in the existing campaign notes.
- His protectiveness toward Shai is a defining character trait. It should inform story scenes and co-op interactions without reducing Shai's independence or agency.
- Their established co-op special is **Lover's Quarrel**.

### Continuity constraints
- Kanan remains a street-fighting/martial-arts character; do not give him a katana.
- Do not interpret “overprotective” as a reason to make him controlling or to remove Shai's ability to fight and make her own decisions.
- Detailed biography, age, appearance, history, and exact move list remain open unless already established in source material.


## 16. Character Bible — Jaylen “Coldman” Jaxon: AI Partner Behavior

**Status: Confirmed direction from the user's November 10 description.**

- When Jaylen is controlled by the game's AI as a partner, his behavior should be aggressive rather than passive or purely defensive.
- He actively tries to keep enemies away from Shai.
- His partner AI should prioritize threats that are closing in on, attacking, or surrounding Shai, and engage those enemies decisively.
- This is a protective combat role expressed through aggression: intercept threats, pressure attackers, and create space for Shai.
- This note defines Jaylen's AI-partner behavior; it does not change his established wrestling/street-brawling fighting style or establish any unconfirmed relationship details.
- Exact targeting weights, leash distance, and tactical rules remain to be designed and tested.


### Jaylen's protective partner move — confirmed
- The user approved a special protective move for Jaylen when he is AI-controlled alongside Shai.
- If an enemy attacks or closes in on Shai, Jaylen can intercept, grab that enemy, and violently throw them away from her, creating immediate space.
- Treat this as a signature AI-partner intervention. Exact animation, trigger conditions, cooldown, and whether it is also player-commandable remain to be designed.


### Jaylen “Coldman” Jaxon — durability distinction
**Status: Confirmed design direction from the user's November 10 description.**

- Jaylen should be noticeably tougher and more durable than the other playable characters.
- He takes reduced damage when enemies hit him; he is not literally invulnerable or indestructible.
- This gives him a distinct bruiser/tank-like identity that complements his aggressive protective AI behavior when partnered with Shai.
- Preserve meaningful danger: enemies can still hurt and defeat him, but he withstands more punishment than the rest of the roster.
- Exact damage-reduction percentage, health values, and balance tuning remain open for playtesting.


### Jaylen “Coldman” Jaxon — movement speed
**Status: Confirmed design direction from the user's November 10 description.**

- Jaylen is slightly slower than the other playable characters.
- His movement speed must still let him keep up with the team and remain alongside Shai during partner play.
- The small speed tradeoff complements his higher durability and bruiser role; do not make him so slow that he gets left behind.
- Exact movement-speed values remain open for balance testing.


### Relationship/protectiveness correction — Kanan and Shai
**Status: Explicit user correction, November 10, 2026.**

- Kanan “Scorpion” Jaxon is the character who is overprotective of Shai Hooks.
- Do not assign Kanan's overprotective trait to Jaylen “Coldman” Jaxon.
- Jaylen's separate confirmed traits remain: aggressive AI partner behavior to keep enemies away from Shai, a protective grab-and-throw intervention, higher durability/reduced incoming damage, and slightly slower movement while still keeping up with the team.
- Kanan's overprotectiveness should be expressed through his relationship and story/co-op behavior, while preserving Shai's independence and combat agency.


## 19. Shai Hooks and Kanan Jaxon — how they first got together
**Status: Confirmed relationship backstory from the user's November 10 description.**

- Before they became a couple, two men were bothering Shai.
- Kanan stepped in and took the two men out. Shai was impressed by his courage and fighting ability.
- The men returned with several friends, apparently expecting to turn the tables.
- This time Shai handled the group herself, fighting them off in front of Kanan.
- Kanan was impressed by Shai's skill, confidence, and ability to defend herself.
- Their relationship began with mutual respect and admiration: Kanan impressed Shai, then Shai impressed Kanan.
- Preserve the important balance: Kanan is overprotective of Shai, but he fell for a woman who had already shown she could stand up for herself. Shai is not a damsel in distress.
- The exact location, dialogue, ages, and timeline of this first meeting remain open; do not invent them as established canon.


## 20. Shai and Kanan — first-meeting dialogue sketch
**Status: Draft scene based on the user's approved meet-cute concept; the score exchange is the key beat.**

*The last of the men Shai fought hits the pavement. The alley falls quiet except for the distant traffic. Kanan stands a few steps away, watching her with a look of genuine respect.*

**Shai:** "My score to your two."

*Kanan looks at her. For a moment he keeps his usual serious expression—then a grin breaks through.*

**Kanan:** "I guess I gotta catch up."

**Shai:** "You can try."

*He gives a quiet laugh. Shai starts walking, then glances back to see if he's coming.*

**Shai:** "You always jump into other people's fights?"

**Kanan:** "Only when they're as cute as you."

**Shai:** "Well, you can jump into all my fights, too."

*Kanan's grin lingers. Shai gives him a playful look, making it clear she is teasing him—but also leaving the door open to seeing him again.*


**Shai:** "Well, next time, ask first."

**Kanan:** "Next time?"

**Shai:** *with a teasing smile* "You heard me."

*Kanan falls into step beside her. Neither says much after that, but both leave knowing they've met someone worth remembering.*

**Character note:** Kanan's grin is rare, which makes this moment stand out. Shai's confidence and teasing establish that she can meet him as an equal. Their bond starts with mutual respect, not dependence.


## 21. Jenni “Legs” Rows — Character Bible and Moveset
**Status: User-approved character direction, November 10, 2026.**

### Personality and role
- Confident, playful, sharp-witted, sarcastic, and strong-willed.
- Doesn't back down and doesn't need to prove herself.
- Her undercover police experience gives her sharp instincts and investigative skills.
- Gets serious when innocent people are in danger.
- Her humor and attitude should contrast with her professional, focused side when a situation turns dangerous.
- Combat identity: fast, agile, taekwondo-based fighter with devastating kicks.

### Fighting style
- Lightning-fast kicks and combinations.
- Spinning and jumping kicks, high kicks, sweeps, counters, and aerial attacks.
- Uses speed, precision, and acrobatics as her defining combat strengths.
- Her nickname “Legs” should be reflected in her distinctive kick-heavy fighting style.

### Signature moves — current design
1. **Cyclone Kick:** Jenni spins rapidly, striking multiple nearby enemies with a series of powerful kicks. Area attack.
2. **Sky Breaker:** Jenni jumps into the air and delivers multiple consecutive stomps to enemies beneath her, transitions into a forward flip, then drives a crushing downward axe kick into her primary target. The repeated stomps deliver successive hits; the final axe kick deals heavy damage and knockdown. This is the full, corrected sequence; do not omit the front flip or final axe kick.
3. **Lightning Legs:** A rapid chain of kicks that overwhelms one enemy before finishing with a heavy knockback kick.
4. **Leg Sweep:** A fast low spinning sweep that knocks nearby enemies off their feet.
5. **Leg Lightning:** Jenni jumps toward her target, comes down with a powerful stomp, flips forward, and drives a crushing downward axe kick into the target. This is a focused single-target attack.
   
### Sky Breaker / Leg Lightning distinction
- **Sky Breaker** is the multi-target version: multiple aerial stomps, forward flip, crushing downward axe kick into the primary target.
- **Leg Lightning** is the focused single-target version: jumping stomp, forward flip, crushing downward axe kick.
- They share an acrobatic visual language but have different targeting/gameplay roles. This distinction was agreed in the conversation; exact animation timings and balance values remain open.

## 22. Tag-Team / Co-op Attack Roster — 42 Proposed Attacks
**Status: Full roster mapped as a proposal for review; not yet individually approved or implemented.** The user asked to map out all 42 attacks and then requested the same roster be resent text-only. Preserve the move names and descriptions below as the current proposal, while retaining the distinction between proposed and approved material.

### Roster math
- Seven characters are included in the co-op system: Kanan, Jaylen, Shai, Jenni, Nona, Romeo, and Mei Lin.
- Five starting characters create 10 unique pairings, with two attacks per pairing = 20 starting-roster attacks.
- Adding Romeo and Mei Lin creates 11 additional unique pairings, with two attacks per pairing = 22 unlockable-roster attacks.
- Total: 21 unique pairings × 2 attacks = **42 proposed attacks**.
- Romeo Wells and Mei Lin are secret unlockable characters after completing the main Story Mode. Their bonus Story Mode remains deferred.
- Pairing list is exhaustive and non-duplicated: 10 pairings among the five starting characters; 5 Romeo pairings with the starting roster; 5 Mei Lin pairings with the starting roster; 1 Romeo + Mei Lin pairing.

### Part 1 — Starting roster (20 attacks)

#### Kanan “Scorpion” Jaxon
**Kanan + Jaylen**
1. **Scorpion Home Run:** Kanan launches an enemy with a Scorpion Strike; Jaylen grabs and throws them into another enemy.
2. **Wrecking Duo:** Jaylen grabs two enemies while Kanan delivers a powerful spinning kick to knock them away.

**Kanan + Shai**
3. **Lover's Quarrel:** Established signature co-op special. A coordinated combination of martial arts strikes ending in a synchronized finisher.
4. **Heartbreaker:** Shai sweeps an enemy off balance; Kanan follows with a devastating Scorpion Strike.

**Kanan + Jenni**
5. **Scorpion Cyclone:** Kanan draws enemies into range; Jenni unleashes her spinning kick combination.
6. **Double Venom:** Kanan launches an enemy upward; Jenni follows with a jumping kick and Kanan finishes with a powerful strike.

**Kanan + Nona**
7. **Royal Sting:** Nona catches an enemy with a stylish strike; Kanan follows with a Scorpion Strike.
8. **Beauty and the Scorpion:** Nona attacks a group while Kanan delivers a powerful finishing blow to the strongest enemy.

#### Jaylen “Coldman” Jaxon
**Jaylen + Shai**
9. **Cold Snap:** Jaylen throws an enemy into Shai's rapid combination.
10. **Double Impact:** Shai launches an enemy with a kick; Jaylen catches them and slams them down.

**Jaylen + Jenni**
11. **Home Run Special:** Jaylen throws an enemy into the air; Jenni connects with a spectacular aerial kick combo.
12. **Cold Lightning:** Jenni attacks with rapid kicks while Jaylen charges through the remaining enemies.

**Jaylen + Nona**
13. **Cold Beauty:** Jaylen grabs and holds an enemy while Nona delivers a powerful finishing strike.
14. **Beauty's Bouncer:** Nona knocks enemies toward Jaylen, who throws them back into the crowd.

#### Shai Hooks
**Shai + Jenni**
15. **Double Trouble:** Shai attacks from one side while Jenni attacks from the other.
16. **Sky Sisters:** Shai launches an enemy; Jenni finishes with her Sky Breaker aerial stomp sequence.

**Shai + Nona**
17. **Pretty Dangerous:** Nona distracts the enemy while Shai lands a fast combination.
18. **Sister Act:** Both fighters deliver synchronized strikes, finishing with simultaneous kicks.

#### Jenni “Legs” Rows
**Jenni + Nona**
19. **Beauty and the Beast:** Nona catches enemies with a powerful attack while Jenni unleashes an aerial kick finisher.
20. **Legs for Days:** Jenni delivers a rapid kick sequence while Nona finishes the combo with a heavy strike.

### Part 2 — Unlockable roster (22 attacks)

#### Romeo Wells
**Romeo + Kanan**
21. **Scorpion's Rival:** Kanan launches an enemy; Romeo follows with a rapid aerial strike.
22. **Venomous Alliance:** Romeo distracts the enemy with quick attacks while Kanan delivers Scorpion Strike.

**Romeo + Jaylen**
23. **Cold Blooded:** Jaylen grabs an enemy and Romeo delivers a powerful finishing kick.
24. **Out of Bounds:** Romeo sends an enemy toward Jaylen, who throws them across the screen.

**Romeo + Shai**
25. **Trouble Makers:** Shai starts a fast combination; Romeo follows with a spinning attack.
26. **Double Cross:** Romeo trips an enemy while Shai delivers a powerful follow-up.

**Romeo + Jenni**
27. **Lightning Rebellion:** Jenni launches an enemy; Romeo follows with an aerial combination.
28. **Fast and Furious:** Both fighters unleash alternating rapid attacks before a synchronized finisher.

**Romeo + Nona**
29. **Dangerous Attraction:** Nona distracts enemies while Romeo attacks from behind.
30. **Pretty Reckless:** Nona delivers a heavy strike and Romeo finishes with a flying kick.

#### Mei Lin
**Mei Lin + Kanan**
31. **Shadow Scorpion:** Mei Lin delivers rapid precision strikes while Kanan finishes with Scorpion Strike.
32. **Dragon's Sting:** Kanan launches an enemy; Mei Lin delivers a powerful airborne kick.

**Mei Lin + Jaylen**
33. **Iron Dragon:** Mei Lin uses fast strikes to stagger enemies while Jaylen throws them aside.
34. **Dragon Hammer:** Jaylen grabs an enemy and Mei Lin delivers a spinning kick to finish.

**Mei Lin + Shai**
35. **Twin Dragons:** Both fighters unleash synchronized martial arts combinations.
36. **Crossfire:** Shai sweeps enemies into Mei Lin's rapid spinning kick attack.

**Mei Lin + Jenni**
37. **Dragon Lightning:** Mei Lin launches an enemy; Jenni finishes with Leg Lightning.
38. **Storm Sisters:** Both fighters perform alternating aerial kicks against a group.

**Mei Lin + Nona**
39. **Golden Beauty:** Nona knocks an enemy into Mei Lin's precision strike combination.
40. **Silk and Steel:** Nona delivers a powerful opening attack while Mei Lin finishes with a rapid series of kicks.

#### Romeo Wells + Mei Lin
41. **Dragon Rebellion:** Mei Lin launches enemies with a spinning kick while Romeo rushes through the group with a powerful finishing combination.
42. **Shadow Storm:** Romeo distracts the enemies while Mei Lin performs a rapid aerial attack, ending with both fighters striking simultaneously.

### Proposed co-op gameplay rules
1. Every co-op attack should have its own animation and recognizable finish.
2. Co-op attacks should consume special meter, with stronger attacks costing more.
3. Enemies should be vulnerable to the combo, but bosses should have appropriate resistance.
4. Both characters should have a meaningful role in the animation.
5. Romeo and Mei Lin's co-op attacks remain locked until their characters are unlocked after main Story Mode completion.
6. The activation method (AI partner, local co-op, or online co-op) remains undecided; do not assume multiplayer implementation.

### Important continuity notes
- **Lover's Quarrel** remains Kanan and Shai's established signature co-op special.
- **Home Run Special** is the proposed Jaylen + Jenni attack: Jaylen throws an enemy into the air and Jenni connects with an aerial kick combo.
- The user liked the overall co-op attack concept and asked to see the full roster again. The roster remains proposed pending move-by-move approval.
- These are design proposals, not proof of implemented or playable attacks.
