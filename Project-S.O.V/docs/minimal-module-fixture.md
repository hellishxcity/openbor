# Minimal OpenBOR Module Fixture — Validation Gate

Status: fixture design only. Do not treat this as a runnable module until the selected engine revision loads it successfully.

## Why this gate comes first

OpenBOR modules require a model registry and level configuration. A model registry entry is not the same thing as a character definition: it points to a separate entity/model text file. The engine reads animation definitions in order, and each `frame` records the properties currently set for that frame.

## Intended first fixture

Use original placeholder artwork and keep the first test deliberately small:

- One selectable player: Kanan.
- One idle animation with at least one valid image frame.
- One walk animation with at least two valid image frames.
- One basic enemy model, initially stationary if needed.
- One short test level with a player start and a clear exit.
- No custom scripts, complex effects, or large sprite atlases until native loading is proven.

## Module layout target

```text
Streets-of-Violence/
  module/
    data/
      models.txt
      levels.txt
      chars/
        kanan/
          kanan.txt
          idle_01.png
          walk_01.png
          walk_02.png
        dockside_grunt/
          dockside_grunt.txt
          idle_01.png
      levels/
        dockside_test/
          dockside_test.txt
          background.png
```

This is a proposed layout, not yet a committed runnable module. Paths must match the exact references inside the model and level definitions.

## Registry convention

The current OpenBOR model-registry documentation gives this form:

```text
load Player data/chars/kanan/kanan.txt
```

Use `load` for selectable player models that must be available before gameplay. The internal model name and every path must match the registry and filesystem exactly.

## Animation convention

The current animation documentation describes this structure:

```text
anim idle
    loop 1
    offset 32 96
    delay 10
    frame data/chars/kanan/idle_01.png
```

This is an illustration of animation syntax only. The model still requires its other valid entity properties and required animations for the selected engine version. The image must exist and its offset must match the actual artwork dimensions.

## Validation sequence

1. Pin an exact OpenBOR source revision or release.
2. Confirm the module's required root files and entity properties against that revision's docs/source.
3. Add a tiny valid PNG placeholder frame and confirm the asset path.
4. Load the module and inspect the engine log for parser/resource errors.
5. Confirm Kanan appears as a selectable player.
6. Confirm idle and walk play without missing frames or incorrect offsets.
7. Add one enemy and one test level; confirm spawn, collision, defeat, and exit.
8. Only then expand the fixture into the full Dockside level and remaining four fighters.

## Current limitation

We have not run an OpenBOR runtime against this fixture, and this document intentionally does not claim that an executable module exists. A model text file without valid frame assets and a valid level is not a complete game.

## References

- Model Registry: https://chronocrash.com/openbor/wiki/index.php/Global_model
- Animation Overview: https://chronocrash.com/openbor/wiki/index.php/Animation_Overview
- Module Overview: https://chronocrash.com/openbor/wiki/index.php/OpenBOR_Overview
