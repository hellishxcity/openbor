# Streets of Violence — Co-op Attack & Character Dialogue Production Bible
Updated: 2026-11-09
Status: planning framework based on the user's direction. Exact attack names, choreography, dialogue lines, and unlock rules are not approved until reviewed with the user.

## Purpose
Preserve co-op combat and character dialogue as first-class parts of Streets of Violence. These are core creative assets, not disposable chat ideas. Every approved name, line, move sequence, animation reference, and revision should be recorded here or in a linked dedicated file immediately.

## Co-op attack target
The user wants approximately **20 co-op attacks/moves**, covering the cast rather than only Kanan's two previously discussed pairings.

### Proposed roster scope and count
The five starting fighters are Kanan, Jaylen, Shai, Jenni, and Nona. There are 10 unique two-character pairings among five characters. A useful planning target is **two signature co-op attacks per pairing = 20 total**.

This is a proposed organizing method, not a claim that the user has approved exactly two per pair. The user should confirm whether Romeo and Mei (post-game unlockables) should also receive co-op pairings in the first 20 or in a later expansion. If all seven characters are included, the number of possible unique pairs is 21.

### Ten starting-roster pairings (planning matrix)
1. Kanan + Jaylen — brotherly power/precision combination; previously identified as a priority.
2. Kanan + Shai — coordinated martial arts/kickboxing and tech-assisted teamwork; previously identified as a priority.
3. Kanan + Jenni — fast martial arts plus taekwondo timing.
4. Kanan + Nona — precision setup into grappling/control.
5. Jaylen + Shai — heavy setup plus agile kickboxing follow-through.
6. Jaylen + Jenni — wrestler control paired with taekwondo strikes.
7. Jaylen + Nona — heavyweight wrestling/grappling tandem.
8. Shai + Jenni — synchronized kickboxing/taekwondo speed and precision.
9. Shai + Nona — fast pressure into grappling finish.
10. Jenni + Nona — technical strikes and close-range grappling control.

### Each co-op attack entry must record
- Unique attack name (do not recycle another game's move names).
- Pairing and whether both characters must be playable/unlocked.
- Gameplay role: crowd control, single-target damage, launcher, armor break, rescue, boss punish, etc.
- Activation condition/input and cooldown/resource cost.
- Opening move, synchronized middle sequence, finisher, and recovery.
- Player 1/player 2 roles; avoid making one partner look like a background prop.
- Target rules: enemies, bosses, airborne targets, grounded targets, edge cases.
- Damage/knockback/stagger intent (numbers remain tuning placeholders until tested).
- Animation frame list for each character separately, with timing and alignment notes.
- Hitboxes/hurtboxes and effects/audio cues.
- Mobile readability and control accessibility.
- Preview image/GIF and source-sheet reference.
- Implementation status: idea → approved concept → storyboard → preview → isolated frames → OpenBOR integration → tested.
- Approval date and source conversation/decision.

## Co-op design principles
- Every character should contribute visibly and meaningfully.
- Each pairing should feel distinct, reflecting the characters' relationships and fighting styles.
- Moves must work in single-player with an AI/partner command only if that system is designed; do not assume local/online multiplayer exists. First milestone is single-player unless explicitly changed.
- Do not promise two-player multiplayer just because a co-op attack exists. Define co-op attacks as paired/team attacks with the actual partner-control mechanic to be decided.
- Boss interactions need fair telegraphs and tested boss-specific rules; do not assume every boss can be grabbed/launched.
- Preserve readable mobile controls; avoid requiring complicated simultaneous button chords unless an accessibility alternative exists.

## Character dialogue production bible
Dialogue is a separate deliverable and must be captured systematically, not left scattered across chat.

### Dialogue categories to track
1. Story cutscenes and chapter transitions.
2. Stage intro/outro exchanges.
3. Character-to-character banter during stages.
4. Enemy encounter lines and boss taunts.
5. Boss fight phase changes, damage reactions, defeat lines.
6. Secret mission trigger, objective, success, failure, and abandonment lines.
7. Co-op/team attack callouts and partner responses.
8. Revive/rescue/support lines if such mechanics are implemented.
9. Bonus-story scenes, especially Romeo and Mei Stages 2 and 16–24.
10. Unlock/reveal scenes, including Mei's Stage 21 identity reveal to Jenni and post-game unlock acknowledgments.
11. Ending and replay/new-game dialogue.

### Every dialogue entry must record
- Speaker(s), listener(s), and character availability/route conditions.
- Exact line text (preserve punctuation and wording once approved).
- Scene/stage/mission and trigger condition.
- Delivery intent/emotion and optional animation/portrait cue.
- Whether line is canon-approved, draft, alternate, or retired.
- Continuity dependencies (who knows what at this point in the story).
- Localization notes and text-length constraints for mobile UI.
- Approval date and source conversation/decision.

### Continuity rules already known
- Mei is Jenni's younger cousin and is undercover in the gang.
- At main Story Stage 8, only Shai or Nona may discover/fight Mei; Jenni is absent and does not know. The encounter ends in a draw; Mei escapes when others arrive.
- Jenni learns Mei's identity in bonus Stage 21, not earlier.
- Romeo and Mei are strangers at their first meeting in bonus Stage 2.
- Romeo is Ali's mercenary hired to kill Jaylen. In Stage 20, Coldman defeats him; Romeo accepts defeat, voids the contract, keeps half the payment, and stops hunting Coldman. This is not a death.
- Romeo is attracted to Mei; in Stage 19 she is annoyed and he must earn her trust.
- Romeo and Mei are both secret playable characters unlocked after beating the main Story Mode.
- Do not violate character knowledge, timeline, or identity secrecy in banter or stage dialogue.

## Current recovered dialogue snippets
Only preserve lines that are actually present in recovered history. Do not invent replacements and label them as approved unless confirmed:
- Knight: “How long?”
- NinaStorm-related dialogue is not part of this game and must not be copied into Streets of Violence.
- No complete Streets of Violence dialogue script has yet been recovered in the current register. Previously discussed character and stage concepts imply dialogue needs, but exact wording must be retrieved or newly approved.

## Production ledger — blank templates

### Co-op attack record template
- ID:
- Name:
- Pair:
- Status:
- Activation:
- Opening:
- Synchronized sequence:
- Finisher:
- Gameplay purpose:
- Animation references:
- Audio/callout:
- Edge cases:
- User approval:

### Dialogue scene record template
- Scene ID:
- Stage/mission:
- Speakers:
- Trigger/route:
- Exact approved lines:
- Delivery/emotion:
- Character knowledge at this point:
- Status:
- User approval:

## Next review gates
1. Confirm whether the first ~20 attacks cover the five starting characters only, with Romeo/Mei co-op moves later, or include the unlockable pairings now.
2. Confirm whether "co-op" means AI-assisted team attacks in single-player, local two-player, online multiplayer, or a combination. Do not assume.
3. Build and review the Kanan + Jaylen and Kanan + Shai attack concepts first, since those pairings were previously prioritized.
4. Create a full dialogue index by stage and character, then fill exact lines from recovered history before writing new dialogue.
