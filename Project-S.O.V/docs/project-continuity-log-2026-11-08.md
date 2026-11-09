# Streets of Violence — Project Continuity Log
Updated: 2026-11-08

This file is a continuity checkpoint. It records the latest confirmed project state so future sessions can resume without confusing this game with NinaStorm or other projects.

## Current focus
- User reported the previous Dockside demo was unusable because it did not start. Do not present that scaffold as a working/playable demo.
- The user wants visible move previews before another engine build attempt.
- Kanan move preview package exists locally as `Streets_of_Violence_Move_Preview_v1.zip`.
- Jaylen “Coldman” is blue-and-white. Preserve this palette.
- Jaylen's two specials are distinct:
  1. **Coldman Slam** — the original Coldman Slam source sheet; multi-part grappling/slam combo.
  2. **The Cold Special** — the dense second sheet, described by the user as Grab (8), Overhead Slam (10), Knee Takedown (8), Giant-Swing Throw (8), Piledriver Finisher (10), total intended 44 frames.
- A crop-based visual preview package for The Cold Special exists as `Jaylen_The_Cold_Special_Preview_v1.zip`. The earlier preview reel was created from the dense sheet; this is now correctly labeled The Cold Special.
- The separate original Coldman Slam sheet still needs its own correctly named preview and frame isolation pass.
- Current previews are visual review material only. They are not finished, individually aligned OpenBOR frames and are not runtime-integrated. Grapple opponents need separate synchronized reaction states where possible; hitboxes, timing, effects, and engine tests remain outstanding.

## Co-op attack redesign
The user could not recover the previously named co-op attacks and decided to restart that design tomorrow/from scratch:
- Kanan + Jaylen: brother team-up attack set.
- Kanan + Shai: partner team-up attack set.
For each pairing, develop a unique team-up name, opening move, synchronized sequence, finisher, and visual preview. Do not borrow names from NinaStorm or other projects.

## Project safeguards
- Keep **Streets of Violence** separate from **NinaStorm: The Bloodstorm** and every other game.
- Keep work under `Streets-of-Violence/` in `hellishxcity/openbor`; do not modify upstream OpenBOR root files/assets.
- Do not claim anything is playable, compiled, tested, or production-ready unless verified.
- User is working from Android and is budget-conscious. Do not use paid or credit-consuming tools without explicit approval.
- Continue preserving user-created music masters and original assets.

## Next steps
1. Create a separate visual preview for the original Coldman Slam source sheet.
2. Review both Jaylen specials and isolate attacker and opponent frames separately.
3. Resume co-op attacks: Kanan + Jaylen first, then Kanan + Shai.
4. Repair and validate a minimal OpenBOR launchable module before calling anything a demo; record exact engine build/device/test result.

## Backup discipline
At each meaningful milestone, update this continuity log and commit relevant text/design files to GitHub. Keep dated ZIP snapshots of generated image/animation assets separately; GitHub text commits do not back up local binary assets automatically.
