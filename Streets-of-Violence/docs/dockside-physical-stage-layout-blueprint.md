# Dockside District — Physical Stage Layout Blueprint

Project: Streets of Violence  
Milestone: 01 — Dockside District  
Status: production layout blueprint. This is a build-ready spatial/design guide, not a compiled OpenBOR level or a runtime-tested map.

## Purpose and build boundary

This document turns the approved Dockside route and encounter plan into a concrete left-to-right level layout. It defines the order of spaces, approximate playable lengths, foreground/background dressing, combat staging, route forks, convergence points, and camera/collision rules.

Distances below are planning units, not OpenBOR coordinates. Convert them into the chosen engine's actual level units only after the target revision and level syntax are verified. Do not treat this document as proof that geometry, triggers, or enemy spawns already exist in-game.

## Full route at a glance

```text
START
  |
  v
[01 PIER ENTRANCE]
  |
  v
[02 CONTAINER LANE]
  |  | \-- A: CONTAINER MAZE (optional cache + ambush; Jaylen mission candidate)
  |       \----------------------.
  |                                |
  \---- B: WAREHOUSE ENTRANCE      |
           (Grunts + Iron Guard)   |
                  |                |
                  v                |
          [03 WAREHOUSE APRON]     |
             BROCK encounter       |
                  |                |
                  v                |
          [04 WAREHOUSE PASSAGE] <-'
                  |
                  |                  | \-- A: WATERFRONT WALK (Viper flank + optional cache)
                  |       \----------------------.
                  |                                |
                  \---- B: SERVICE TUNNEL         |
                         (close-quarters fight)   |
                                  |                |
                                  v                |
                           [05 PIER APPROACH] <----'
                                  |
                                  v
                            [06 BOSS PIER]
                              BRICK boss
                                  |
                                  v
                             [07 STAGE CLEAR]
```

All branches must reconnect before Brick. The two route choices are separate junctions; choosing one branch at a junction must not skip the next junction or any mandatory campaign encounter.

## Coordinate and camera conventions

- Player travel is left-to-right. The camera follows the active play area and must not reveal future enemy groups prematurely.
- Each zone has a defined entry edge, combat envelope, and exit edge.
- Use a consistent floor baseline across connected spaces unless a visible ramp/step is deliberately designed and collision-tested.
- Keep the playable combat lane clear of decorative props. Decorative foreground objects may overlap visually but must not create invisible walls.
- Use background depth (water, cranes, warehouse walls, skyline) to sell scale; keep collision geometry simple and readable.
- Planning length is measured in approximate screen widths (SW). One SW means the width of one normal gameplay camera view, not a fixed pixel count.
- Recommended active combat capacity for early encounters: 2–3 ordinary enemies at once; introduce heavier combinations only after the player has room to reposition.

## Zone-by-zone layout

### 01 — Pier Entrance | approx. 1.5 SW

**Visual composition**
- Left: entrance gate, bollards, mooring ropes, warning sign and a few stacked pallets.
- Midground: open concrete pier, painted safety lines, puddles and scattered cargo.
- Background: harbor water, docked cargo vessel silhouettes, cranes and distant industrial skyline.
- Right: container stacks frame the transition into Container Lane.

**Playable floor**
- Broad, unobstructed lane; no narrow choke point at spawn.
- Keep first pickup/tutorial interaction away from enemy spawn points.

**Encounter**
- Safe approach, then 2 staggered Dockside Grunts.
- Optional third Grunt only after the first pair is mostly resolved.
- Exit unlocks after the opening group is cleared.

**Transition**
- Camera tracks past the container stack into the lane; avoid a hard scene cut if the engine setup supports continuous scrolling.

### 02 — Container Lane | approx. 1.5 SW before junction

**Visual composition**
- Tall containers on both sides, varied heights and faded shipping codes.
- Fork signage: painted arrows, a lit warehouse doorway, and a gap between container rows.
- Keep top edges and color coding distinct so the two route entrances read clearly on a phone screen.

**Encounter**
- Two Grunts, staggered from opposite ends.
- Follow-up: one Street Viper plus one Grunt.
- Small supply cache can sit off the main lane, visible but not directly on the combat floor.

**Junction 1**
- A — Container Maze: narrower cargo corridors, short ambush, optional scavenger cache; preferred candidate location for JAY-01, pending final mission placement.
- B — Warehouse Entrance: wider loading approach, Grunt pressure followed by an Iron Guard introduction.
- Route choice must be obvious without a timer. Both paths feed into Warehouse Apron.

### 02A — Container Maze | approx. 1.0 SW

**Visual composition**
- Offset container rows create two shallow bends, not a maze that hides the player.
- One dead-end alcove for an optional cache; keep it reachable and clearly signposted.
- Avoid overlapping foreground containers that obscure enemy silhouettes or player feet.

**Encounter**
- Brief ambush with enemies entering in staggered order from the visible ends of the lane.
- Leave a clear retreat/escape direction.
- Jaylen's JAY-01 can activate here only if Jaylen is selected and the mission offer/trigger rules are later verified.

**Exit**
- Single clearly marked opening toward Warehouse Apron.

### 02B — Warehouse Entrance | approx. 1.0 SW

**Visual composition**
- Wide loading apron entrance, roller door, dock leveler, forklift parked outside the playable lane, yellow/black hazard stripes.
- Interior light spills onto the concrete to signal the route.

**Encounter**
- Grunt pair, then one Iron Guard.
- Keep the Iron Guard's entry visible and leave lateral space to flank.

**Exit**
- Connect directly to Warehouse Apron.

### 03 — Warehouse Apron | approx. 1.5 SW

**Visual composition**
- Open loading yard between warehouse wall and dock edge.
- Loading bays, overhead lamps, pallet stacks, forklift silhouette and painted bay numbers.
- Keep props at the back or extreme edges of the combat floor.

**Encounter**
- Brock is introduced as the heavy bruiser.
- Brock starts alone; add at most one Grunt only if testing shows the fight remains fair.
- Reserve a wide central combat envelope for charge telegraphs and recovery punishment.

**Exit**
- Large roller-door opening leads into Warehouse Passage.
- Do not lock the player against Brock at the far edge; preserve a visible retreat lane.

### 04 — Warehouse Passage | approx. 1.25 SW

**Visual composition**
- Interior corridor with repeating steel supports, overhead pipes, high windows and emergency lamps.
- One side-room door can host Jenni's proposed JEN-01 rescue room, but its exact placement and mission identity remain pending approval.
- A wall sign points toward the waterfront exit and service tunnel.

**Encounter**
- Wave A: one Iron Guard and one Grunt.
- Wave B: one Street Viper enters from a visible flank.
- Health pickup placed after the main threat, in a safe pocket before Junction 2.

**Optional Jenni room**
- Side room off the passage, not on the mandatory route.
- If JEN-01 is offered, the player can enter, complete or abandon it, then return to the same main corridor.
- Do not implement a moving escort until NPC protection, follower movement and safe-exit behavior are proven in the target runtime.

### Junction 2 — Waterfront Walk or Service Tunnel

**A — Waterfront Walk | approx. 1.0 SW**
- Open-air pier edge with railings, mooring posts, water reflections and crane silhouettes.
- One Street Viper flanking wave, with entry direction visible.
- Optional cache near the waterline, outside the active fight envelope.
- Keep the outer rail as visual boundary; do not allow the player to fall or become trapped.

**B — Service Tunnel | approx. 0.8 SW**
- Narrow maintenance corridor with pipes, utility lights, floor drains and a clearly visible exit glow.
- Short mixed encounter; reduce simultaneous enemies because lateral space is limited.
- Health/alternate item may be placed in a safe pocket after combat.
- Avoid low ceilings or foreground pipes that obscure the player.

Both paths return to Pier Approach.

### 05 — Pier Approach | approx. 1.0 SW

**Visual composition**
- Outdoor transition back to open water; crane arms and ship hull create a strong forward focal point.
- The boss pier is visible in the far background to establish destination.
- Use mooring gear, rope coils and warning lights as edge dressing, not collision obstacles.

**Encounter**
- Two Grunts; introduce one Street Viper after a short delay.
- Place the final health pickup before the boss arena entrance.
- Optional route reward must not sit inside Brick's spawn/arena boundary.

**Transition**
- Short quiet beat or camera settle before entering Boss Pier; boss music cue begins with Brick's entrance, not during the approach wave.

### 06 — Boss Pier: Brick | approx. 2.0 SW

**Arena composition**
- Broad, mostly flat pier with open water and ship hull behind the fight.
- Crane hook, cargo net and warning beacons frame the arena but stay outside the combat lane.
- Clearly readable left/right arena boundaries; enough space for all five fighters to dodge and reposition.
- No support enemies at first. Brick is the sole boss.

**Encounter**
- Intro beat, then Brick Phase 1: measured heavy punches, step-in pressure and telegraphed shove/charge.
- Phase 2 begins at a tested health threshold with a two-part pattern; retain readable startup and recovery.
- Do not allow instant tracking on every attack or repeated unavoidable corner pressure.
- Defeat triggers boss exit, stage-clear cue and results flow.

### 07 — Stage Clear

- Show stage title, score, time if supported, route choices, secrets and optional mission outcomes.
- Keep text large and sparse for landscape mobile.
- Continue to the next campaign stage or return to campaign flow.
- Do not make optional mission evidence or route rewards mandatory for progression.

## Environment art and layer checklist

For every zone, prepare:
1. Far background: sky, skyline, sea, ship or distant industrial structures.
2. Mid background: cranes, warehouse walls, container stacks, doors, windows and signage.
3. Playfield: floor strip and collision-tested walkable surface.
4. Foreground dressing: ropes, posts, pallets and pipes; must not obscure critical action.
5. Lighting pass: consistent time-of-day palette, with readable player/enemy silhouettes.
6. Transition dressing: a visual cue that leads the eye into the next zone.

Dockside's palette: cold harbor blues and steel greys, dirty concrete, rust-orange metal, sodium-vapor amber lights, and restrained warning-red accents. Keep enemies and pickups contrasting against the background.

## Collision and spawn placement rules

- No enemy may spawn inside containers, walls, doors, forklifts, railings or other solid props.
- Place spawn points on the visible or soon-to-be-visible playfield, not behind the player without a clear flank cue.
- Keep a minimum clear combat pocket around every spawn; exact numeric spacing is to be established in the first runtime test.
- Pickups must be reachable from the normal floor and must not overlap enemy spawn points.
- Branch exits must not be usable while their encounter is active if that would bypass mandatory combat; after resolution, the exit must be visibly available.
- Boss boundaries must allow retreat and prevent camera-edge corner-lock loops.
- Validate all routes with each of the five starting fighters.

## Build order for today's layout pass

1. Block out the main route in placeholder geometry: Pier Entrance → Container Lane → Warehouse Entrance → Warehouse Apron → Warehouse Passage → Pier Approach → Boss Pier.
2. Add Container Maze branch and reconnect it before Warehouse Apron.
3. Add Waterfront Walk and Service Tunnel branches; reconnect both before Pier Approach.
4. Add placeholder doors, signage, floor strips, boundaries and spawn markers.
5. Walk the full route with a test fighter; verify camera, floor continuity, exits and no softlocks.
6. Add encounter triggers only after the target OpenBOR level syntax is verified.
7. Add the Jenni side room and Jaylen mission trigger as optional hooks after route geometry is stable.

## Completion checklist

- [ ] Main route is blocked out from start to Brick arena.
- [ ] Both Junction 1 branches reconnect correctly.
- [ ] Both Junction 2 branches reconnect correctly.
- [ ] Jenni side-room entrance is optional and rejoins the passage.
- [ ] All seven stage sections have readable visual identities.
- [ ] Collision floor and camera boundaries are continuous.
- [ ] All spawn and pickup markers are reachable and outside solid geometry.
- [ ] All five fighters can traverse all route combinations.
- [ ] Brick arena is wide enough for fair boss combat.
- [ ] Runtime and Android tests pass.

## Status honesty

This blueprint is a concrete production layout. It is not a generated level file, finished background art, implemented route logic, or playable build. The actual OpenBOR map still needs to be assembled and verified in the selected runtime.
