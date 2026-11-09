# Kanan Animation Blueprint — First Playable Pass

Project: Streets of Violence  
Character: Kanan “The Scorpion” Jaxon  
Status: production specification; not a completed sprite sheet or tested runtime animation.

## Character model lock

- Average adult male height; neither towering nor short.
- Muscular, athletic street-fighter build with realistic adult proportions.
- Long braids and a recognizable face.
- Black coat with red Scorpion insignia/details, gloves, dark pants, and boots.
- No chibi proportions, oversized head, ninja mask, or ninja silhouette.
- Keep the same costume, braid length, body proportions, and palette in every frame.

## Sprite conventions

- Side-view 2D beat-'em-up presentation.
- Recommended first-pass frame canvas: 256 × 256 px, transparent RGBA.
- Ground line / foot anchor: x=128, y=224 on the common canvas.
- Keep camera scale, character height, and facing direction consistent.
- Preserve transparent padding; do not crop boots or braids.
- Export each frame as a separate PNG before building an atlas.
- Any crop taken from the current showcase poster is reference material only; it is not a production frame.

## Animation 01 — Idle

Goal: confident street-fighter guard, not a ninja crouch.

| Frame | Pose / action | Suggested hold |
|---|---|---:|
| idle_01 | Neutral guard, feet shoulder-width, knees soft, fists relaxed | 6 |
| idle_02 | Small chest rise / breathing | 6 |
| idle_03 | Slight weight shift to rear foot; coat settles | 6 |
| idle_04 | Subtle head/shoulder movement; braids lag naturally | 6 |
| idle_05 | Return toward neutral guard | 6 |
| idle_06 | Settle into loop pose | 6 |

Timing values are starting art-direction targets, not engine-verified frame delays. Loop should be subtle and readable; avoid large bobbing or exaggerated ninja poses.

## Animation 02 — Walk

Target: grounded, purposeful forward movement.
- 6–8 frames for a complete loop.
- Alternating heel-to-toe steps; keep torso mostly level.
- Arms counter-swing naturally; fists remain ready.
- Coat tails and braids follow the body with slight secondary motion.
- Keep both feet aligned to the shared ground line at contact.

## Animation 03 — Five-hit combo

Build as five distinct attacks with readable anticipation and recovery:
1. Fast lead-hand straight — quick interrupt.
2. Rear-hand cross — stronger body rotation.
3. Short hook — close-range impact.
4. Mid-level kick — clear leg extension and balance.
5. Heavy finishing strike — largest follow-through and knockback read.

Art requirements:
- Each hit must have a clear start, contact, and recovery pose.
- Keep Kanan's face, coat, braids, and body proportions consistent.
- The fifth hit should read as the finisher without changing his silhouette or costume.
- Gameplay damage, combo windows, hit-stop, and knockback must be tuned in-engine; artwork alone does not implement them.

## Animation 04 — Scorpion Strike

Signature special:
- Brief grounded anticipation, weight shifts forward.
- Explosive forward strike with red Scorpion energy accent.
- Strong contact pose with clear silhouette.
- Controlled recovery to the normal fighting stance.
- Keep effects on separate layers where practical so they can be adjusted independently.

## Acceptance checklist

- [ ] Character reads as average-height adult male, not miniature or towering.
- [ ] No ninja-like mask or chibi proportions.
- [ ] Costume and facial features remain consistent across frames.
- [ ] Transparent PNGs have clean edges and no poster labels/background.
- [ ] Feet contact the same ground line in every grounded frame.
- [ ] Idle and walk loops do not pop at the seam.
- [ ] Combo hits are visually distinct and readable at phone-screen scale.
- [ ] Scorpion Strike effect does not obscure Kanan's body silhouette.
- [ ] Atlas offsets and animation timing are validated in OpenBOR before calling the set playable.

## Production status

The character showcase image and reference crops exist. This document locks the first animation pass. Individual clean transparent animation frames have not yet been produced, and no Kanan animation has been validated in the OpenBOR runtime.
