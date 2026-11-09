# NON-03 — No One Gets Left Behind
Project: Streets of Violence
Character: Nona “Beauty” Silks
Mission type: character-specific escort / protection
Status: approved design prototype; not implemented or runtime-tested

## Mission premise
Nona finds a woman being hunted by a local gang. She agrees to escort her through a dangerous district to a safe destination. The woman is vulnerable throughout the mission: enemies can target and damage her, and she can die. Nona must eliminate threats quickly and keep attackers away from her.

## Core objective
Escort the woman alive from the encounter start to the authored safe-destination zone. Success requires BOTH Nona and the woman to reach the destination while the woman is alive.

## Mission flow
1. **Discovery:** Nona enters an eligible side area and finds the woman under threat. Show a short mission title and objective prompt.
2. **Acceptance:** Start only after the player accepts/interacts. Declining or leaving returns to the main stage without penalty.
3. **Escort start:** The woman begins following Nona along a deliberately authored route. The route must be tested for collision, turns, narrow passages, and camera boundaries.
4. **Threat waves:** Gang enemies enter from readable approach lanes. Their AI may select the woman as a target. Nona must intercept and defeat them before they can deal lethal damage.
5. **Progress:** Use clear route markers and short objective reminders. The woman follows at a controlled pace; she must not teleport past enemies or through blocked geometry.
6. **Safe destination:** Complete only when Nona and the living woman are both inside the safe zone.
7. **Reward:** Show a clear +1 LIFE presentation and grant one extra life, once per save slot for this mission.

## Failure and edge cases
- Woman health reaches zero: fail immediately; do not grant reward.
- Nona reaches the exit alone: do not complete; keep the objective active while the woman remains alive and can still reach the exit.
- Woman becomes separated or blocked: pause her movement, use a visible recovery/reposition fallback only after a tested timeout, and never silently count her as rescued.
- Nona dies, continues, changes character, or abandons the optional mission: end the mission without reward and return to the normal campaign flow according to the project's verified continue rules.
- Simultaneous woman death and destination entry: death takes priority; no reward.
- Mission replay after reward: allow the story encounter if desired, but do not grant another life for the same save slot.

## Combat pressure and fairness
- Enemies are intentionally allowed to attack the woman; she is NOT invulnerable.
- Threats should prefer the woman when they have a valid path and line/attack opportunity, but must not ignore Nona if she is actively attacking them.
- Use a small number of attackers at once for mobile performance and readable defense. Escalate pressure through staggered reinforcements rather than an unfair instant surround.
- Spawn enemies outside immediate melee range and never directly on top of the woman.
- Give the player clear audio/visual cues when an enemy switches focus to the woman or when her health is low.
- Avoid unavoidable damage: every attack lane must be visible or signaled, with enough time for Nona to intercept.
- Tune the woman's health and enemy damage only after runtime tests; no numerical values are locked yet.

## State model
Suggested states:
- UNAVAILABLE
- OFFERED
- ACTIVE
- ESCORT_MOVING
- ESCORT_PAUSED
- COMPLETED
- FAILED
- REWARD_GRANTED

Keep mission completion, failure, and reward-granted state separate. Persist the one-time reward per save slot only after the selected OpenBOR revision's save/persistence mechanism is verified. Do not rely on transient globals as permanent reward storage.

## Required runtime tests
- Enemies can acquire and damage the woman.
- Nona can interrupt attackers and defeat them before they reach the woman.
- The woman follows Nona through the full authored route without getting stuck or clipping through geometry.
- Woman death fails the mission immediately.
- Nona alone at the exit does not complete the mission.
- Both reach the safe zone alive and trigger exactly one +1 LIFE reward.
- Replay after reward cannot grant a second life.
- Decline, abandonment, player death, continue, and character reselection do not softlock or block the main stage.
- Test on desktop OpenBOR first, then the target Android build; record engine commit, device, build, and observed result.

## Implementation gate
Before coding the escort logic, verify the pinned OpenBOR revision's entity targeting, damage, movement, collision, script callback, and save-persistence contracts. In particular, do not assume a follower/navigation API exists merely because entity movement fields are available. Prototype the woman in a short corridor first, then add combat pressure.

## Scope honesty
This document is a production-ready behavior specification, not an implemented mission. No escort AI, enemy targeting, health UI, life reward, or persistence has yet been verified in a running module.
