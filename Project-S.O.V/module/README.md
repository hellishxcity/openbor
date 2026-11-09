# Streets of Violence — OpenBOR Module

This folder is reserved for the original game module. The module is not yet runnable.

## Planned data tree

```text
module/
  README.md
  data/
    README.md
    models.txt
    levels.txt
    chars/
      kanan/
      jaylen/
      shai/
      jenni/
      nona/
      dockside_grunt/
      brock/
      brick/
    levels/
      dockside/
    bgs/
    music/
    sounds/
    scripts/
```

## Build order

1. Pin the OpenBOR engine revision used for development.
2. Add the verified model registry and level-set definitions.
3. Add Kanan's first valid model file and original PNG/GIF frames.
4. Add a minimal Dockside test level and verify it loads in that engine.
5. Add the other four playable models, then the full stage encounters.
6. Package the finished `data/` directory into the game's PAK.

## Asset rules

All shipped characters, enemies, backgrounds, effects, music, sound, UI, and fonts must be original or explicitly licensed for redistribution and commercial use. Reference game archives are not part of this module.

## Status

Scaffold only. No runtime configuration or art assets are claimed complete. Empty character and level folders are intentionally omitted from Git until they contain real files.
