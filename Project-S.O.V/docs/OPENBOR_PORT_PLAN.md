# Streets of Violence — OpenBOR Port Plan
Status: technical audit and implementation plan (not yet an in-engine build)

## Target
- Engine: OpenBOR
- Platform: Android first, landscape
- First playable slice: Dockside District
- Playable fighters: Kanan "Scorpion" Jaxon and Shai Hooks
- Initial encounter: three Dockside grunts, then a Brick boss encounter
- Content rule: original or properly licensed art, audio, names, and other assets only

## Existing combat-core audit
Source reviewed: Streets-and-Violence/Dockside-Combat-Core/dockside-core.js.

The JavaScript file is an engine-independent gameplay prototype, not OpenBOR script and not a complete game. Its current design includes:
- Five-step punch, kick, and mixed combo damage tables.
- Player health and special meter; Scorpion Strike special.
- Jump, block, dodge/invulnerability, facing, and movement state.
- Enemy approach, attack cooldown, hit-stun, knockback, and health.
- A three-enemy opening encounter followed by a generic boss spawn.
- A HUD state snapshot.

### Issues to fix before treating it as a gameplay specification
1. Held-input repeat: updateGame calls startCombo whenever punch, kick, or mixed is true. If input remains held across multiple update calls, combo steps can advance repeatedly. OpenBOR implementation must use discrete key presses / command history and animation cancel windows, not per-tick held-button combo advancement.
2. Combo timing: the prototype has a 1.05-second combo timer, but it does not yet define individual hit windows, recovery frames, hit-stop, or validated animation cancel windows.
3. Enemy contact: the current enemy update damages the player at close range without a complete facing/attack-animation check. OpenBOR should use authored enemy attack animations and attack boxes.
4. Blocking: prototype block reduces incoming damage to 2, but has no guard-break, block-stun, directional guard, or block feedback rules.
5. Dodge: prototype grants invulnerability for the whole dodge duration. This needs a deliberate, tested invulnerability window and animation timing.
6. Wave flow: after the initial three enemies, the prototype spawns one generic boss. It does not implement multiple waves, Brock, or Brick's final boss phases.
7. Boss targeting / HUD: HUD reads the first enemy in the list, which is not a robust target/boss-bar selection rule.
8. State lifecycle: the update loop should stop or route to a result state after victory/defeat; current prototype continues processing updates.

## OpenBOR implementation mapping
- Movement and core states: use native model animations and engine movement properties first; add model scripts only where native behavior is insufficient.
- Five-hit combos: create a clear attack animation chain using OpenBOR attack slots and/or freespecial slots. Use com command sequences and cancel windows where appropriate. Each animation frame gets intentional delay, offset, body box, and attack box.
- Kanan: punch/kick/mixed branches, fifth-hit finisher, and Scorpion Strike as a dedicated special animation.
- Shai: separate kickboxing-focused attack chain and animation set; do not reuse Kanan's visual identity or animation timings without review.
- Block and dodge: define the input mapping and native/scripted states after checking the chosen OpenBOR build's supported controls and script APIs. Do not assume the JavaScript invulnerability behavior maps one-to-one.
- Enemy AI: use OpenBOR native model behavior and only add scripts for specific approach/attack decisions, cooldowns, boss phases, and wave triggers.
- Stage progression: implement Dockside as an OpenBOR level with explicit spawn points and scripted wave transitions; Brick is a named boss, not the generic prototype boss.
- HUD: use OpenBOR's supported HUD/lifebar facilities and a script only for custom boss/special indicators if required.

## Suggested file layout
    Project-S.O.V/
      README.md
      data/
        levels/
          dockside/
            dockside.txt
        chars/
          kanan/
            kanan.txt
            animations/
          shai/
            shai.txt
            animations/
          enemies/
            dockside_grunt/
            brick/
        scripts/
          dockside_waves.c
          combat_helpers.c
      docs/
        OPENBOR_PORT_PLAN.md

The layout above is a proposed target structure, not a claim that these files/assets already exist. Actual filenames and model syntax must be checked against the selected OpenBOR engine build.

## First implementation milestone
1. Confirm the exact OpenBOR engine build/runtime that will be used for Android testing.
2. Inventory approved Kanan and Shai sprite sheets and verify frame dimensions, transparency, facing direction, and animation completeness.
3. Build Kanan's idle, walk, jump, pain, fall/rise, block, dodge, and five attack animations with real frame art.
4. Build Shai's corresponding core animations with her distinct kickboxing identity.
5. Add a test Dockside level with one grunt and verify movement, collision, hit boxes, damage, and recovery in OpenBOR.
6. Add combo branching and Scorpion Strike, then expand to enemy waves and Brick.

## Documentation references
- OpenBOR Animation Overview: https://chronocrash.com/openbor/wiki/index.php/Animation_Overview
- OpenBOR Animationscript: https://chronocrash.com/openbor/wiki/index.php/Animationscript
- OpenBOR Controls (command sequences and cancels): https://chronocrash.com/openbor/wiki/index.php/Controls
- OpenBOR Overview: https://chronocrash.com/openbor/wiki/index.php/OpenBOR_Overview

## Build-status statement
This document records an audit and a port plan. It does not mean an OpenBOR module, playable stage, or Android APK has been built or tested.