# OpenBOR Production Plan

## Project structure target

```
Streets-of-Violence/
  README.md
  docs/
    roster-and-combat.md
    openbor-production-plan.md
  openbor-game/              # add after confirming local OpenBOR project layout
    data/
      streets_of_violence/
        chars/
        levels/
        models/
        scripts/
        sounds/
        music/
        backgrounds/
        sprites/
```

This is a proposed layout, not a claim that these directories or assets already exist. Confirm the exact data-folder conventions against the selected OpenBOR build before adding engine files.

## Asset pipeline
1. Create original character concept art.
2. Produce animation-specific frames with consistent character scale, baseline, facing direction and transparent backgrounds.
3. Split sheets into individual frames; verify frame boundaries manually.
4. Name frames consistently by character, action and frame index.
5. Create OpenBOR model definitions and animation scripts using the exact syntax supported by the selected engine build.
6. Test each animation in-engine before expanding the roster.

## Required animation groups
- idle / pain / walk / run
- jump / land / fall / rise
- punch combo 1-5
- kick combo 1-5
- mixed combo 1-5
- block / dodge / grab / throw
- special startup / active / recovery
- death / victory

## Original audio
Create or properly license all music and sound effects. Keep source masters and export game-ready formats separately. Do not extract audio from the SOR2X reference PAK.

## Technical gates
- Select and record the exact OpenBOR engine version and Android build.
- Confirm sprite format, palette/transparency behavior, frame naming and model syntax.
- Build a minimal test model and one test level before implementing all five fighters.
- Test collision boxes, attack ranges, knockback, hit pause and enemy AI.
- Test performance and controls on the target Android device.
- Keep a changelog and mark untested work clearly.

## Current limitations
The uploaded SOR2X PAK is a reference archive only. It does not by itself provide a legal or technically verified template for this project's content. No original OpenBOR game package or APK has been produced yet.
