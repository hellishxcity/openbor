# Streets and Violence — Dockside Combat Core

This is a separate game-development folder inside this repository. It does not modify or replace the OpenBOR files already present.

## Prototype foundation
- Kanan "Scorpion" Jaxon player state and movement
- Five-hit punch, kick, and mixed combo chains
- Forward-lunge spacing correction to prevent passing through an enemy
- Enemy health, approach behavior, hit-stun, and knockback
- Block, dodge, special meter, and Scorpion Strike
- Dockside District wave/boss state and HUD snapshot

## Integration status
This is engine-independent JavaScript gameplay logic intended to be connected to GDevelop events and scene objects. It is not a native GDevelop project, compiled APK, or verified in-game build. The existing GDevelop project was not available when these files were prepared.

## Files
- `dockside-core.js`: standalone module with the gameplay state and update functions.

## Basic use
Import `createGame` and `updateGame`. Create one game state, then call `updateGame(game, deltaSeconds, input)` each frame. Input fields are booleans: `left`, `right`, `jump`, `punch`, `kick`, `mixed`, `block`, `dodge`, and `special`.

The returned game state contains player, enemies, level status, effects, and a HUD snapshot. Map these values to GDevelop scene objects and touch controls.
