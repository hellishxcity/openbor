# OpenBOR Runtime Verification — Streets of Violence

Status: research findings recorded; the Streets of Violence module has not yet been run in OpenBOR.

## Confirmed engine/module structure

The current OpenBOR documentation describes two parts:
- Engine runtime.
- Game module containing configuration, models, levels, scripts, graphics, and audio.

A typical unpacked module uses a `data/` directory with root configuration such as:
- `models.txt`
- `levels.txt`
- optional `video.txt`, `lifebar.txt`, `menu.txt`, and `script.txt`
- asset folders such as `chars/`, `levels/`, `bgs/`, `sounds/`, `music/`, and `scripts/`

For distribution, the module's data directory is packaged as a `.pak` file. The precise module structure and references must be validated against the chosen engine revision.

## Model and animation findings

- Models are registered through `models.txt`; selectable player models should be registered for startup loading.
- Model definitions describe entity statistics, movement, AI, animations, attacks, collision, sounds, and scripts.
- Animation definitions use `anim <type>` followed by frame properties and `frame <path>` entries.
- Frame properties such as delay and offset are applied in parse order; each animation should explicitly set its own important properties.
- Animation types include common states such as idle, walk, jump, pain, fall, and attack slots.

These findings are sufficient to design a minimal validation fixture, but not enough to claim a working character until a module is loaded by the exact selected runtime.

## Android packaging findings

The current upstream OpenBOR repository documents Android builds through the Gradle project under `engine/android/`, targeting `arm64-v8a`. Its build notes identify JDK 17, Android SDK Platform 35, Build Tools 36.0.0, and NDK 21.4.7075529 for the documented source snapshot.

The upstream Android README describes two packaging modes:
1. A general OpenBOR app that can load multiple modules.
2. A dedicated standalone commercial title with a custom package name and one fixed `.pak` module.

For Streets of Violence, the intended release mode is the dedicated standalone title, subject to verification against the exact source revision we adopt.

## Important build distinction

The Android build instructions in upstream documentation require a development environment with JDK, Android SDK, NDK, and Gradle. A source repository commit alone does not produce an APK or AAB. We must run the build, inspect its output, sign the release, install it, and test it on real devices.

## Licensing and distribution

The current upstream OpenBOR project describes the engine as royalty-free and explicitly discusses selling games made with it. We still need to preserve the applicable engine license notices and verify the license file at the exact pinned revision. Third-party assets are not automatically covered by the engine license.

## Sources consulted

- OpenBOR upstream compiling overview: https://github.com/DCurrent/openbor/wiki/Compiling-Overview
- OpenBOR Android build README: https://github.com/DCurrent/openbor/blob/master/engine/android/README
- OpenBOR module overview: https://chronocrash.com/openbor/wiki/index.php/OpenBOR_Overview
- OpenBOR animation overview: https://chronocrash.com/openbor/wiki/index.php/Animation_Overview
- OpenBOR model registry: https://chronocrash.com/openbor/wiki/index.php/Nocost
- OpenBOR upstream repository: https://github.com/DCurrent/openbor

## Next technical gate

Pin the exact upstream OpenBOR commit/release intended for the project, then create the smallest valid module:
- one registered test player model,
- one idle and one walk animation using original placeholder art,
- one small test level,
- one player start and one simple enemy.

Load it in the matching runtime and resolve parser/runtime errors before scaling to five fighters and the complete Dockside stage.
