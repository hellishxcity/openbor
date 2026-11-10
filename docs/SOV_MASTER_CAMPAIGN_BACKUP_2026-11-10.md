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
