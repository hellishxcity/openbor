# Branching Routes and Player Choice System

Project: Streets of Violence  
Scope: Campaign-wide feature; first implementation target is Stage 01 — Dockside District.  
Status: design specification; route logic is not yet implemented or runtime-tested.

## Design goals

1. Give players meaningful choices about where to go, not just cosmetic forks.
2. Make each route offer a distinct mix of combat pressure, exploration, and rewards.
3. Keep the main campaign completable regardless of route choice.
4. Let selected choices influence later encounters, dialogue, resources, and optional scenes.
5. Keep route layouts readable and practical for a side-scrolling beat-'em-up.

## Player-facing route rules

- At a route junction, pause forward enemy pressure briefly and show clear visual signposting.
- Offer two or three directions at most.
- Communicate each path through signs, lighting, enemy silhouettes, and environmental clues.
- The player chooses by moving toward a clearly marked exit or interacting with a route marker.
- Never make a route choice depend on a hidden timer.
- Once selected, deactivate the unchosen exits and proceed along the selected branch.
- Branches may rejoin later in the same stage.
- Optional branches may contain a secret, mini-encounter, rescue, or resource cache.
- Never permanently block campaign progress because the player lacks a particular character, item, or upgrade.

## Dockside District route structure

### Junction 1 — Container Lane

After the opening pier encounter, players choose:

**A. Container Maze — scavenger route**
- Tight cargo lanes and a short ambush.
- Enemies can approach from both sides.
- Optional hidden supply cache.
- Reward emphasis: cash or a modest upgrade resource.

**B. Warehouse Entrance — direct combat route**
- More open loading apron.
- Grunt support followed by an Iron Guard introduction.
- Reward emphasis: health supply or combat resource.
- Leads toward the warehouse apron and Brock encounter.

### Junction 2 — After the warehouse passage

Players choose:

**A. Waterfront Walk — exposed route**
- More room to maneuver, but a Street Viper flanking wave.
- Optional cache near the waterline.
- Reward emphasis: score bonus or collectible.

**B. Service Tunnel — close-quarters route**
- Narrow interior corridor and a short mixed enemy encounter.
- Clear sightlines and safe spawn spacing are essential.
- Reward emphasis: health pickup or alternate item.

### Convergence — Boss Pier

Both branches reconnect at the pier approach before Brick's arena. Route choice can alter which support enemies appear before the boss, a short line of crew dialogue, the type or location of one optional reward, and a small boss-arena starting advantage — never a guaranteed win.

Brick remains the Stage 01 boss on every route. All five starting fighters can complete every route.

## Campaign-wide persistent choice flags

Use a small, explicit set of route flags rather than a large branching story tree. Initial conceptual flags:

- dockside_route_1: container_maze or warehouse_entrance
- dockside_route_2: waterfront_walk or service_tunnel
- dockside_cache_found: true or false
- dockside_rescue_completed: true or false, reserved for a future optional encounter

These are design identifiers, not confirmed OpenBOR script variables. Implement persistence only after verifying the chosen engine revision's supported save/global-variable behavior.

## Meaningful consequences

- A resource route may make a later encounter easier but contain fewer score opportunities.
- A combat route may grant more score or upgrade currency but consume more health.
- A secret route may reveal a story clue or collectible that changes later dialogue.
- A rescue or optional objective may add a friendly support appearance in a later stage.
- Replaying a stage should allow players to discover the other branch and its rewards.

Avoid permanent missable progression items, unavoidable difficulty spikes, or route choices that make the final boss unfair.

## Replay and campaign presentation

- Show a simple route summary on the stage-clear screen: chosen paths, secrets found, and optional objectives completed.
- Keep the stage-clear summary readable on mobile.
- Track route completion per save slot if supported by the runtime.
- Do not require a full branching ending system for the first milestone; start with encounter, reward, and dialogue variations.

## Implementation sequence

1. Build and validate Dockside's main route as a stable playable level.
2. Add the first route junction and two short branch sections.
3. Add the second junction and branch sections.
4. Reconnect all branches before Brick's boss arena.
5. Add route-specific enemy waves and pickups.
6. Add route summary and persistence only after verifying engine support.
7. Test every branch with all five playable characters and confirm no softlocks.
8. Expand the same design pattern to later campaign stages, giving each stage its own route identity.

## Acceptance checklist

- [ ] Every route can be selected with mobile controls.
- [ ] Route markers are visible and understandable.
- [ ] Every branch has a distinct encounter or reward.
- [ ] All branches reconnect to the intended campaign progression.
- [ ] No branch can trap the player or create a softlock.
- [ ] All five starting characters can finish every route.
- [ ] Route-specific choices are reflected in the stage-clear summary.
- [ ] Persistent choices survive stage transitions and save/load if supported.
- [ ] Alternate routes are tested for enemy spawn, camera, collision, pickup, and boss-transition issues.

## Scope boundary

This document defines the intended player-choice system. It does not claim that route selection, save flags, branching dialogue, or alternate encounters have been implemented in the game yet.
