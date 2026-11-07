# Roster and Combat Design

## Shared combat standard
Each core fighter is designed around:
- Five distinct punch-hit animations.
- Five distinct kick-hit animations.
- Five distinct mixed-combo animations.
- Jump, land, dodge, block, hurt, knockdown, recovery and victory states.
- A signature special with a clear startup, active hit and recovery.
- Distinct movement speed, reach, damage, stamina/energy profile and hit reactions.

These are design requirements; they are not yet implemented or tested in OpenBOR.

## Playable fighters

| Fighter | Role | Signature identity |
|---|---|---|
| Kanan "Scorpion" Jaxon | Balanced fast martial artist | SCORPION STRIKE; quick pressure and counters |
| Jaylen "Coldman" Jaxon | Heavy brawler/wrestler | Throws, slams, high knockback |
| Shai Hooks | Kickboxer | Fast kick strings, mobility and technical pressure |
| Jenni "Legs" Rows | Taekwondo specialist | Long-range kicks, aerial attacks and precision |
| Nona "Beauty" Silks | MMA/grappler | Clinches, takedowns and control |

Secret unlockables:
- Romeo Wells — mercenary/brawler archetype.
- Mei Lin — kung-fu specialist.

## Enemy archetypes

### Dockside Grunts
Baseline opponents used to teach spacing, blocking and combo timing. Low durability; simple approach and attack patterns.

### Brock — Dockside Crew bruiser
Heavy enemy with slower movement and telegraphed high-damage attacks:
- Heavy straight punch.
- Charging shoulder attack.
- Guard stance that reduces frontal damage.
- Knockdown finisher.
- Vulnerable recovery after a missed heavy attack.

### Street Vipers
Fast flankers who use quick jabs, low kicks and retreat/re-engage behavior. Lower durability than Brock.

### Iron Guards
Defensive enforcers with strong blocks, short-range counters and high poise. Players should use throws, cross-ups or recovery punishes.

### Brick
Recurring boss. Boss behavior and phase structure are to be designed after the basic combat loop is working.

## First stage encounter proposal
1. Opening stretch: two Dockside Grunts, introduced one at a time.
2. Second encounter: three mixed Grunts with staggered entry.
3. Bruiser check: Brock appears with one support Grunt; teach bait-and-punish.
4. Pier finale: Brick boss encounter after the player clears the approach.

Encounter counts and tuning remain provisional until tested.
