# Streets of Violence — Continuity Audit & Current Project Register
Updated: 2026-11-09

This is a recovered-history checkpoint, not a claim that every earlier chat message or every binary asset has been recovered. It separates confirmed decisions, approved design specifications, work products, and unresolved items. Project scope is **Streets of Violence only**; do not mix it with NinaStorm: The Bloodstorm or any other game.

## 1. Project identity and guardrails
- Original 2D side-scrolling beat-'em-up built for OpenBOR.
- Android-first, landscape orientation; long-term goal is a self-contained installable Android app and eventual Google Play release.
- Five starting fighters are playable from the beginning of Story Mode.
- Romeo Wells and Mei Lin are secret playable unlockables; **both unlock only after the player beats/completes the main game (Story Mode)**. They are not starting roster characters and are not unlocked by merely completing their bonus-story stages.
- Create original characters, sprites, stages, music, sounds, scripts, and other expressive content, or use properly licensed assets. OpenBOR engine/public documentation are permitted. SOR2X PAK/EXE were reference material only; do not copy protected SOR2X characters, sprites, backgrounds, music, sound, scripts, stages, names, or other expressive content.
- Keep all repository work under `Streets-of-Violence/`; never modify upstream OpenBOR root files/assets.
- User is Android-only for now and budget-conscious. Do not use paid or credit-consuming generation tools without explicit approval.
- Never call a scaffold or preview playable, compiled, tested, or production-ready unless that exact result has been verified.

## 2. Starting playable roster
1. **Kanan “Scorpion” Jaxon** — balanced/fast martial artist; red/black identity; signature Scorpion Strike. Athletic adult male, long braids, black coat with red scorpion insignia/details, gloves, dark pants and boots; no chibi proportions or ninja mask.
2. **Jaylen “Coldman” Jaxon** — Kanan's older brother; heavy wrestler/street brawler; throws and slams; blue-and-white tracksuit. Preserve blue/white palette.
3. **Shai Hooks** — Kanan's fiancée; kickboxer and tech-savvy fighter; long braids; black/gold with purple accents; Storm Rush Combo.
4. **Jenni “Legs” Rows** — taekwondo specialist; undercover police officer infiltrating Kingpin; curly/messy hair; black/gold with purple accents; Spinning Dragon Kick.
5. **Nona “Beauty” Silks** — MMA/grappler; former criminal recruited by Jenni; short spiky purple hair; green/black; Grapple Break.

## 3. Secret characters and story canon
### Romeo Wells
- Replaces the earlier concept Marcus Stone.
- Ali/Kingpin's mercenary. Before Ali's arrest, Ali hired Romeo to kill Jaylen “Coldman” Jaxon because Coldman threatened Ali's empire.
- Coldman defeats Romeo in bonus Stage 20. Romeo learns the truth about Coldman, accepts defeat, voids the contract, keeps half the payment, and stops pursuing him. This is not a death.
- Romeo is attracted to Mei Lin.

### Mei Lin
- Jenni Rows' younger cousin; undercover inside the gang.
- In main-story Stage 8, only Shai Hooks or Nona “Beauty” Silks can discover/fight Mei. Jenni is absent and unaware.
- Stage 8 fight ends in a draw; Mei escapes when others arrive, preserving her secret identity.
- Bonus Stage 21 reveals Mei's identity to Jenni.

### Romeo + Mei bonus storyline
- Their first meeting is as complete strangers/opposing bosses in bonus Stage 2. They compliment each other after the confrontation and agree to stop the crime operation.
- Bonus storyline expands through Stages 16–24.
- Romeo initially joins Mei to access information about Coldman and because he thinks she is cute.
- Stage 19: Mei is annoyed with Romeo; he must earn her trust. Preserve a slow-trust relationship arc.
- Do not make them acquaintances before Stage 2; do not let Jenni discover Mei in Stage 8.
- Exact dialogue, full scene beats, and detailed events for each bonus stage are not fully recovered.

## 4. Campaign, locations, bosses
### Main campaign stage order
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

### Dockside District
- Waterfront setting: shipping containers, warehouses, piers, loading yards.
- Baseline route: Pier Entrance → Container Lane → Warehouse Apron → Warehouse Passage → Pier Approach → Boss Pier → Stage Clear.
- Junction 1: Container Maze (scavenger route, hidden cache/ambush) vs Warehouse Entrance (direct combat, Iron Guard, health/combat reward).
- Junction 2: Waterfront Walk (exposed route, Street Viper, score/collectible) vs Service Tunnel (close quarters, health/alternate item).
- Paths reconnect before Brick's boss pier.
- Optional Jenni rescue room off Warehouse Passage; Jaylen ambush candidate in Container Maze.
- Brock is a heavy bruiser mini-boss; **Brock is not Brick**. Brick is Stage 1 main boss and recurring boss (stages 1, 7, and 10).

### Other known bosses / elites
Bosses: Razor, The Butcher, Money Man, Captain Cross, Viper Queen, Iron Fist, DJ Havoc, Warden Stone, Ali/Kingpin (final boss), plus Brick recurring.
Elites: Reaper, Ghost, Mr. Gold, Ali's Right-Hand Man, King's Elite Guard.
Enemy archetypes include Dockside Grunts, Street Vipers, Iron Guards, and original variants. These are design names; exact placement and final art remain to be locked.

## 5. Character-specific secret missions
Exactly three personal secret missions for each of the five starting fighters (15 total). Only the selected fighter's pool is eligible. Random appearance is weighted and must respect stage/route/trigger eligibility; initial tuning: at most one offer per stage, no repeats too often, no impossible triggers, never during boss fights. Missions are optional; declining, ignoring, abandoning, dying, or failing must not block campaign completion. Save/persistence behavior must be verified before implementation.

- Kanan: KAN-01 **The Old Man's Last Coin**; KAN-02 **Red Ledger**; KAN-03 **No One Left Behind**.
- Jaylen: JAY-01 **Wrong Turn Ambush**; JAY-02 **Heavy Debt**; JAY-03 **Brother's Trail**.
- Shai: SHA-01 **Safe Signal**; SHA-02 **The Stolen Drive**; SHA-03 **One More Round**.
- Jenni: JEN-01 **Get Them Out**; JEN-02 **Evidence Locker**; JEN-03 **Cover Not Blown**.
- Nona: NON-01 **Old Gym, New Trouble**; NON-02 **Debt Collector's Lesson**; NON-03 **No One Gets Left Behind**.

### Prototyped mission concepts
- **KAN-01:** Kanan helps an elderly dockworker being bullied; clue leads to a hidden cache/life-up. Reward meaning (extra life vs permanent max-health increase) must not be conflated; one-time max-health +10% was proposed, not finalized.
- **JAY-01:** Jaylen-only Container Maze ambush. Escape is a valid terminal outcome but does not earn full-combat-clear bonus; defeating all waves earns a separate bonus. Clear pre-trigger retreat area and marked escape exit.
- **JEN-01:** Jenni rescues one witness from a side room off Warehouse Passage. Completion requires both Jenni and witness in safe zone; first prototype protects witness, but target immunity and damage immunity must be tested separately.
- **NON-03:** Nona escorts a woman who can be targeted and killed. Both must reach the destination alive. If woman dies, mission fails. Reward: one extra life, once per save slot. Optional; never blocks stage.
- Mission prototypes are design specs, not implemented/tested. Continue/reselection abandons optional mission cleanly under the current approved prototype defaults. Mission state, bonus eligibility, and reward-granted state are separate.

## 6. Combat, specials, and animation preview status
### Jaylen's two distinct specials
1. **Coldman Slam** — original source sheet; multi-part grappling/slam combo. It still needs its own correctly named preview and frame-isolation pass.
2. **The Cold Special** — separate dense source sheet, intended user-described sequence: Grab (8 frames), Overhead Slam (10), Knee Takedown (8), Giant-Swing Throw (8), Piledriver Finisher (10), 44 intended frames total.
- The Cold Special preview package exists locally as `Jaylen_The_Cold_Special_Preview_v1.zip`. It contains a reel, five sequence previews, contact sheet, and README.
- These are crop-based visual previews, not finished individually aligned frames, not game-integrated, and not runtime tested. Opponent reactions should be separate synchronized enemy states where possible. Hitboxes, timing, effects, and OpenBOR integration remain outstanding.
- Preserve Jaylen's blue-and-white look.

### Kanan
- Kanan candidate preview package exists locally as `Streets_of_Violence_Move_Preview_v1.zip`, including reel, punches, kicks, and movement previews.
- Candidate set includes 50 frames across 14 animation groups, on transparent 1024×1024 canvases with automated center/bottom anchoring. Requires visual QA, per-frame alignment, frame timing, hitboxes, and runtime integration.

### Co-op team-up attacks — restart approved, names not yet chosen
- The exact original names were not recovered. User chose to start over rather than invent or reuse incorrect names.
- Pairing A: **Kanan + Jaylen** — brotherly teamwork, powerful wrestling setups combined with Kanan's fast martial arts.
- Pairing B: **Kanan + Shai** — coordinated martial arts and kickboxing, with tech-assisted teamwork.
- For each pairing, design a unique team-up name, opening move, synchronized sequence, devastating finisher, and visual preview. No names or detailed move sequence have been approved yet.

## 7. Music, audio, and asset handling
- User previously uploaded 13 original MP3 tracks. Preserve original masters; mapping each track to stages/menus/bosses was previously approved in earlier work but the full mapping is not present in this recovered checkpoint. Recover the mapping before changing it.
- Original music, sound effects, sprites, stages, UI, and characters are intended. Keep source masters untouched; optimized game copies should be separate.
- Binary asset files are not automatically backed up by GitHub text commits. A dated local ZIP or verified remote upload is required. Do not claim a backup exists unless its path/storage and contents have been verified.
- Existing local package names in prior work: `Streets_of_Violence_Move_Preview_v1.zip`, `Jaylen_The_Cold_Special_Preview_v1.zip`, `Streets_of_Violence_Kanan_All_Files_Backup.zip`, `Kanan_AI_Sprite_Handoff_Package.zip`, `Kanan_Reference_Refresh.zip`, `Kanan_Sprite_Prep_Toolkit.zip`. Their current availability must be checked before relying on them.

## 8. OpenBOR / Android technical baseline
- OpenBOR is the chosen engine; project aims for Android-first landscape controls.
- Source baseline previously pinned to DCurrent/OpenBOR commit `65a7f0b41aee87fe4084e538634b4ed73236f871`. This is a compatibility pin, not a declared stable release or verified game runtime.
- Latest known OpenBOR tag in earlier research: 4.0 Build 7533 (`v7533`), older Android config used SDK 31; do not blindly reuse old target settings for a current Play release.
- Prior upstream Android build notes: JDK 17, SDK Platform 35, Build Tools 36.0.0, NDK 21.4.7075529; Android Gradle project at `engine/android/`; standalone app mode with custom app ID/fixed PAK; minimum SDK API 21. Re-check current Android/Play requirements before release.
- Source license noted as BSD 3-Clause; preserve notices and do not imply OpenBOR/Senile Team endorsement. Third-party assets have their own licenses.
- Prior Dockside demo failed to start and was reported unusable. A module scaffold and runtime notes exist, but no verified playable demo/APK. Repair a minimal launchable module first, then test on Android and record exact engine/source SHA, module revision, device, logs, and result.
- User wants visible move previews before another engine build attempt.

## 9. Repository and documentation map
Repository: https://github.com/hellishxcity/openbor  
Project folder: https://github.com/hellishxcity/openbor/tree/master/Streets-of-Violence

Important existing docs:
- `README.md` — project identity, roster, content rules, build status.
- `docs/project-continuity-log-2026-11-08.md` — previous continuity checkpoint.
- `docs/milestone-01-full-dockside-scope.md` — Dockside first milestone.
- `docs/dockside-physical-stage-layout-blueprint.md` — physical stage layout.
- `docs/branching-routes-and-player-choice.md` — branching route design.
- `docs/character-secret-missions.md` — 15 mission definitions.
- `docs/mission-prototype-decisions.md` — approved JAY-01/JEN-01 prototype defaults.
- `docs/prototype-kan-01-old-mans-last-coin.md`, `docs/prototype-jay-01-wrong-turn-ambush.md`, `docs/prototype-jen-01-get-them-out.md`, `docs/prototype-non-03-no-one-gets-left-behind.md`.
- `docs/android-release-plan.md`, `docs/openbor-runtime-verification.md`, `docs/minimal-module-fixture.md`, `docs/engine-baseline-and-license.md`, `THIRD-PARTY-NOTICES.md`.
- Character scaffold/model files under `module/data/chars/`; registry at `module/data/models.txt`.

## 10. Backup and storage truth
- GitHub repository stores project documentation/scaffolding and commits; it does not automatically contain all local animation/audio source files.
- A Notion page titled **Streets of Violence — Romeo Wells & Mei Lin Story Canon** is saved privately: https://app.notion.com/p/413ee7941b4181968e73c5716ecc8f76?pvs=204. It records recovered secret-character canon and the post-game unlock condition.
- A weekly backup automation exists: **Weekly Streets of Violence project backup**, Sundays at 6:00 PM America/New_York, first scheduled run 2026-11-15. It was created to review the GitHub project, update a continuity checkpoint, and inventory binary assets; do not claim a Notion sync is included until the automation is explicitly updated to do so.
- ChatGPT Library folder `/Streets of Violence/Kanan` was created, but uploads failed because Library storage was full. Do not claim those files were uploaded there.
- Some ZIPs were generated in prior sessions; their presence should be verified before sharing or assuming durable storage.

## 11. Unresolved recovery list
1. Recover the approved 13-track MP3 mapping (track filenames → stage/menu/boss usage), track metadata, and current source-file availability.
2. Inventory every original sprite sheet, model, animation, sound, stage/background, UI file, and generated preview; mark each as local-only, GitHub, Notion, Library, or other verified storage.
3. Create a separately named preview for **Coldman Slam**, then isolate/align both Jaylen specials.
4. Resume team-up attack design for Kanan + Jaylen and Kanan + Shai; names and sequences remain unapproved.
5. Recover complete character bios, stats, move lists, enemy variants, boss placement, dialogue, cutscenes, and stage-specific details from older chat where available.
6. Recover exact bonus storyline beats for Romeo/Mei Stages 16–24 and exact Stage 2/19/21 dialogue/scene details.
7. Recover Mei's exact undercover mission/target and how her cover is maintained.
8. Confirm whether Romeo and Mei unlock simultaneously or independently after Story Mode completion; current confirmed fact is only that both unlock after beating the game.
9. Verify OpenBOR source contracts and a minimal runnable module before implementing missions or calling the game playable.
10. Confirm current Android build/Play requirements before producing a release APK.
11. Confirm the weekly automation's Notion update step if Notion is intended to be part of the recurring backup.

## 12. Immediate next work sequence
1. Finish the visual review pass for both Jaylen specials (Coldman Slam first).
2. Resume team-up attacks, starting with Kanan + Jaylen, then Kanan + Shai.
3. Recover and document the 13-track music map and asset inventory.
4. Update Notion/GitHub continuity records as recovered facts are confirmed.
5. Repair the minimal OpenBOR module and validate on Android only after preview/design review gates are met.

---
**Status note:** This register is the best consolidated state recovered from available conversation history and existing repository files as of 2026-11-09. It is not proof that every historical message or every local binary asset has been recovered.
