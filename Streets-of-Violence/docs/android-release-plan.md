# Streets of Violence — Android & Google Play Release Plan

Status: planning document; no Android app or store release has been built yet.

## Release goal

Ship Streets of Violence as its own installable Android game. Players should install one app and launch the game without needing to install a separate OpenBOR player.

## Proposed technical route

1. Lock the exact OpenBOR engine revision and review its license and notices.
2. Verify the Android project and standalone-game packaging workflow for that exact revision.
3. Integrate the original Streets of Violence game data into a dedicated Android application package.
4. Add the game's own application ID, title, icon, orientation, touch controls, save location, audio behavior, and launch flow.
5. Build a signed Android App Bundle (AAB) for Google Play, plus a separate APK for controlled device testing where appropriate.
6. Test install, first launch, gameplay, suspend/resume, save/load, audio, controller/touch input, screen sizes, and low-memory behavior on real Android devices.
7. Complete Play Console listing, content rating, data safety, privacy policy, testing tracks, and release review.

## Google Play technical gate

As of the current 2026 policy schedule, new apps and updates submitted from August 31, 2026 must target Android 16 (API level 36) or higher. Re-check the official Play Console policy immediately before release because Google can update deadlines and requirements.

Google Play app setup also requires a unique package name, app/game selection, free-or-paid choice, contact email, and signing configuration. The version code must increase with each update.

## Licensing and content gate

- Confirm the exact OpenBOR revision's license and preserve required copyright/license notices.
- Do not assume the license of the engine covers third-party game content.
- Use only original or properly licensed characters, sprites, stages, music, sound effects, fonts, logos, and other assets.
- Keep any third-party reference game packages separate; do not ship their files or expressive content.
- Review all bundled libraries and assets for redistribution rights before release.

## Paid distribution options

- Google Play supports publishing an app as free or paid during setup.
- A paid upfront game is one possible model. If we later add digital purchases inside the game, use Google Play's current billing requirements for eligible in-app digital goods.
- Pricing, tax, merchant profile, and developer-account requirements must be completed by the account owner in Play Console.

## Release acceptance checklist

- [ ] Exact engine revision and license documented
- [ ] Android build succeeds from a clean checkout
- [ ] Dedicated Streets of Violence app launches without a separate player app
- [ ] Signed AAB generated and validated
- [ ] Real-device testing completed
- [ ] Save/load and touch controls verified
- [ ] All bundled content has documented rights
- [ ] Store listing, privacy/data-safety declarations, and content rating completed
- [ ] Play Console review passed

## Current reality

This document is a release plan, not evidence of a working Android build. The project still needs verified OpenBOR game data, original runtime-ready art/audio, an Android packaging build, and device testing before it can be described as installable or ready for sale.
