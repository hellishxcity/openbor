# Mission Prototype Decisions — Approved Defaults

Project: Streets of Violence  
Scope: Dockside District mission prototypes JAY-01 and JEN-01  
Status: user-approved design decisions; implementation and runtime verification remain outstanding.

## Approved shared defaults

1. **Initial scope is single-player.** Do not design multiplayer ownership or co-op behavior into the first mission prototypes.
2. **Provisional engine target:** DCurrent/OpenBOR commit `65a7f0b41aee87fe4084e538634b4ed73236f871`. This is a pinned compatibility target, not a confirmed stable release or a tested Streets of Violence runtime.
3. **Route architecture:** prefer connected areas in one continuous stage where the target runtime supports it. If verified engine constraints require separate level sections, use an explicit hybrid with tested transitions and preserved route state. Do not assume persistence APIs.
4. **Mission state and reward state are separate.** Track mission outcome, bonus eligibility, and reward-granted status independently.
5. **Permanent evidence/unlocks:** once per save slot. Ordinary score/currency may be repeatable, but exact amounts and anti-farming limits remain to be tuned and verified.
6. **Continue/reselection:** for the first prototype, a continue or character reselection abandons the active optional mission cleanly; it must not award completion or clear bonuses. Main-stage progress follows the stage's normal continue behavior. This is the default pending a verified checkpoint/persistence design.
7. **No mission may block main-stage completion.** Decline, ignore, abandon, death, or mission failure must allow the campaign route to continue.

## JAY-01 — Wrong Turn Ambush

Approved defaults:
- Jaylen-only, single-player, optional mission.
- Proposed placement: Container Maze branch, subject to final layout confirmation.
- Escape is a successful terminal mission outcome.
- Escape cancels all pending ambush waves and cleans up or safely deactivates only enemies owned by this encounter.
- Escape does **not** earn the full-combat-clear bonus.
- Defeating every encounter wave earns the separate combat-clear bonus.
- Selecting Container Maze and activating the mission are separate events. Preserve a clearly marked pre-trigger retreat area; once the encounter trigger is crossed, retreat/escape is resolved through the mission's marked exit.
- If escape and final-wave defeat appear to occur in the same update, resolve the mission once using a deterministic rule: the first terminal condition registered by the encounter controller wins; never grant both outcomes or duplicate rewards.
- The exact warning distance, trigger boundary, escape boundary, and final-wave composition remain to be set during level blockout and runtime testing.

## JEN-01 — Get Them Out

Approved defaults:
- Jenni-only, single-player, optional mission.
- One witness in the first prototype.
- Proposed placement: optional side room off Warehouse Passage, subject to final layout confirmation.
- Witness remains protected throughout the first follower experiment. Enemy targeting immunity and damage immunity are separate requirements and must be tested separately.
- Mission completion requires **both Jenni and the witness** to enter the marked safe zone.
- Jenni reaching the exit alone does not count as rescue completion.
- Ordinary repositioning does not count as abandonment. Abandonment requires an explicit exit/abandon action or the mission's defined terminal failure condition.
- A stuck-witness fallback must be visible and deliberate (for example, a clearly marked regroup interaction). It may not silently count as rescue; completion still requires both to reach safety.
- Evidence is a permanent once-per-save-slot reward. It is not required to complete the main campaign.
- Exact witness identity, interaction method, stuck threshold, and reward presentation remain open until the follower fixture is tested.

## Implementation gates

Before mission code is approved:
1. Build and identify a minimal runnable module against the pinned source snapshot.
2. Verify exact script-hook lifecycle, spawn contracts, entity lifetime handling, player identity lookup, branch transitions, combat filtering, and save/continue semantics from source implementations and call sites.
3. Add a minimal test fixture with placeholder player, enemy, witness, visible/logged mission state, and controlled exits.
4. Run desktop/runtime tests and the exact Android binary tests; record source SHA, module revision, device, logs, and results.
5. Only then implement JAY-01 wave/escape logic, followed by JEN-01 protection/follower logic.

## Explicitly not claimed

These decisions do not mean either mission is implemented, the module is runnable, the target engine is production-approved, or Android behavior has been tested.
