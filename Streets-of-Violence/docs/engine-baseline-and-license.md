# OpenBOR Engine Baseline and License

Status: source baseline selected for initial compatibility work; not yet built or runtime-tested by Streets of Violence.

## Baseline selection

Use upstream repository `DCurrent/openbor` at commit:

`65a7f0b41aee87fe4084e538634b4ed73236f871`

This is the latest commit returned by the upstream repository's commit search at the time this baseline was recorded (2026-11-07). Treat it as a reproducible source snapshot, not as a formal stable release tag. Re-check upstream history before changing the baseline.

The latest tagged release visible during this check was OpenBOR 4.0 Build 7533 (`v7533`, release commit `5c82614`). Its Android Gradle configuration is older and declares compile/target SDK 31. Do not assume that tag's Android app configuration is suitable for a new Play Store release in 2026.

## Android build implications

The current upstream Android build README on the selected development branch specifies:
- JDK 17
- Android SDK Platform 35
- Android Build Tools 36.0.0
- Android NDK 21.4.7075529
- Gradle project under `engine/android/`
- arm64-v8a target

This is the upstream build environment documented at the time of review. Before Play submission, update/verify compile SDK, target SDK, Gradle and Android plugin compatibility against current Google Play requirements. Do not blindly copy the old v7533 `app/build.gradle`.

The upstream README documents a dedicated standalone app mode with a custom application ID and a fixed game PAK. This is the intended distribution architecture for Streets of Violence, pending an actual successful build and licensing review.

## License review

The selected upstream source snapshot contains a BSD 3-Clause license. Its requirements include:
- Retain copyright, conditions, and disclaimer in source redistributions.
- Reproduce copyright, conditions, and disclaimer in documentation and/or other materials for binary redistributions.
- Do not use the project/contributor names to endorse or promote a derived product without prior written permission.

The full authoritative license text is in the upstream repository's `LICENSE` file at the pinned commit. Before distributing the game, include the required license notice in the shipped documentation/about materials and review all bundled third-party dependencies separately.

OpenBOR's engine license does not grant rights to assets from other game modules. Streets of Violence must ship only original or properly licensed art, animation, music, sounds, fonts, and other content.

## Source references

- Selected source snapshot: https://github.com/DCurrent/openbor/tree/65a7f0b41aee87fe4084e538634b4ed73236f871
- Upstream license at snapshot: https://github.com/DCurrent/openbor/blob/65a7f0b41aee87fe4084e538634b4ed73236f871/LICENSE
- Current Android build README: https://github.com/DCurrent/openbor/blob/master/engine/android/README
- Current compile overview: https://github.com/DCurrent/openbor/wiki/Compiling-Overview
- Latest tagged release page: https://github.com/DCurrent/openbor/releases

## Next verification tasks

1. Inspect the selected snapshot's actual Android Gradle files and manifest.
2. Record the current target/compile SDK and Gradle plugin versions from that snapshot.
3. Verify the required model and level syntax against the same source revision.
4. Build the upstream Android debug app in a reproducible environment.
5. Only then create and test the minimal Streets of Violence module against that exact runtime.
