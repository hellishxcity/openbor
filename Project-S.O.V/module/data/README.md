# Module Data

This directory will become the OpenBOR module's runtime data root.

Expected top-level files:
- `models.txt` — entity/model registration and model loading.
- `levels.txt` — campaign/level-set configuration.

Expected asset directories:
- `chars/` — playable fighters, enemies, and other entities.
- `levels/` — level definitions and stage-specific resources.
- `bgs/` — reusable background assets.
- `music/` — original music.
- `sounds/` — original sound effects.
- `scripts/` — module scripts, if native configuration is insufficient.

Do not add placeholder registry or level files until their syntax is checked against the exact pinned OpenBOR revision. A malformed `models.txt` or `levels.txt` can prevent the module from loading.

Current state: documentation only; runtime files and art are not yet present.
