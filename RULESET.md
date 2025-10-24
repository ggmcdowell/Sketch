# Mercury's Ashes - LitRPG Ruleset

## System Overview: The MERIT Protocol

**In-Universe Explanation:**
The MERIT (Military Enhancement and Real-time Integration Technology) Protocol is a neural implant standard adopted across the Solar System in 2387. Originally designed for civilian freight pilots to optimize fuel efficiency and route planning, military variants provide combat analytics, skill tracking, and performance optimization. The system gamifies pilot performance to accelerate learning curves and identify talent.

After Mercury's destruction, salvaged MERIT cores from destroyed ships became the backbone of the resistance fleet's training program.

---

## Core Philosophy

- **Dual Progression:** Both PILOT and SHIP advance independently but synergistically
- **Physics as Mechanic:** Newtonian physics constraints are core gameplay elements
- **Limited Slots:** Max 6 active skills + 4 passive abilities to maintain focus
- **Meaningful Choices:** Specialization matters; can't max everything
- **Engineering Subclass:** Unlocks crafting/modification systems mid-story

---

## Pilot Statistics

### Primary Attributes (0-100 scale, start at 10-15)

**REFLEXES (RFX)**
*Response time to threats and opportunities*
- Affects: Reaction window, dodge chance, targeting acquisition speed
- Synergy: Pairs with ship's RCS (Reaction Control System) efficiency

**COMPOSURE (CMP)**
*Maintaining performance under stress and G-forces*
- Affects: Accuracy degradation under acceleration, system stability during damage
- Synergy: Reduces heat buildup from panicked maneuvering
- **Radicalization Impact:** CMP can be sacrificed for damage in "Vengeance State" (unlocked Chapter 3)

**SPATIAL REASONING (SPR)**
*3D tactical awareness and orbital mechanics intuition*
- Affects: Trajectory prediction, intercept solutions, awareness of battlefield geometry
- Synergy: Unlocks advanced maneuvers (gravity assists, Oberth effect exploitation)

**ENGINEERING (ENG)**
*Understanding of spacecraft systems and modification potential*
- Starts LOW (5-8) - Lathe is a pilot, not engineer
- Grows through subclass progression (Chapter 4+)
- Affects: Repair speed, modification quality, improvised solutions

**CONVICTION (CNV)**
*Ideological certainty and willingness to sacrifice*
- **Unique Radicalization Stat:** Increases with story events
- Unlocks: Desperate tactics, high-risk maneuvers, faction loyalty bonuses
- Trade-off: High CNV reduces diplomatic options, increases collateral acceptance

### Secondary Stats (Derived)

**STRESS THRESHOLD** = (CMP × 2) + (CNV ÷ 2)
*How much punishment before performance degrades*

**G-TOLERANCE** = CMP + (RFX ÷ 2)
*Maximum sustained G-forces before blackout*

**LEARNING RATE** = SPR + (ENG ÷ 3)
*XP multiplier for skill acquisition*

---

## Ship Statistics

### Core Systems (1-20 scale, upgradeable)

**THRUST AUTHORITY (THR)**
*Delta-v budget and acceleration capability*
- Measured in m/s² and total Δv reserves
- Linear growth (THR 10 = 10,000 m/s total Δv, 5G acceleration)
- Fuel capacity limits long-term thrust

**HEAT MANAGEMENT (HMG)**
*Radiator efficiency and thermal tolerance*
- Critical for combat: Lasers, rapid thrust changes generate heat
- Overheating: 100% = weapon failure, 150% = reactor scram, 200% = death
- Passive cooling vs active radiators (vulnerable to damage)

**ARMOR INTEGRITY (ARM)**
*Ablative plating and structural hit points*
- Whipple shields for micrometeoroids
- Heavier armor = less Δv (trade-off with THR)
- Damage is localized (cockpit, engines, fuel tanks, radiators)

**SENSORS & TARGETING (SNS)**
*Detection range, lock quality, ECM resistance*
- Light-lag matters: Target prediction at 10,000km+ ranges
- Sensor signature: Stealth vs detection trade-off
- Affects first-strike capability

**REACTION CONTROL (RCS)**
*Rotational authority and fine maneuvering*
- Nitrogen thrusters for orientation changes
- Pairs with pilot RFX for evasion
- Fuel-limited resource (distinct from main drive)

**POWER GRID (PWR)**
*Reactor output for weapons, sensors, life support*
- Linear scale: PWR 10 = 10MW available
- Overload potential: Sacrifice life support for weapons
- Engineering subclass unlocks overclocking

---

## Skills System

### Active Skills (Max 6 Equipped)

Skills have **Ranks 1-10**, each rank improves effect by ~15%

**Example Combat Skills:**
- **Brachistochrone Burn** (Rank 1-10): Optimal constant-acceleration intercept
  - Effect: Reduces Δv cost by 5-50%, increases heat by 10%
  - Cooldown: 300 seconds

- **Retrograde Flip** (Rank 1-10): Emergency reversal maneuver
  - Effect: Instant 180° rotation + counter-burn
  - Cost: 15% RCS fuel, 30% heat
  - Unlock: SPR 25+

- **Torpedo Solution** (Rank 1-10): Predictive fire on maneuvering targets
  - Effect: +10-100% hit chance vs evasive targets
  - Requires: SNS 8+

**Example Engineering Skills (Unlocked Chapter 4+):**
- **Field Modification** (Rank 1-5): In-flight system tuning
  - Effect: +5-25% to any ship stat for 60 seconds
  - Cost: 10% heat, chance of critical failure at low ENG

- **Improvised Munitions** (Rank 1-8): Convert cargo/fuel into weapons
  - Effect: Create custom ordnance from available materials
  - Synergy with CNV: Higher conviction = more radical designs

### Passive Abilities (Max 4 Equipped)

**Example Passives:**
- **Drift Jockey** (Freighter background): -10% Δv cost for course corrections
- **Vacuum Born** (Mercury native): +20% G-tolerance, -5% oxygen consumption
- **Trauma Response** (Post-Mercury): +30% damage when outnumbered (unlocked Chapter 1)
- **Engineer's Eye** (Subclass): See ship system details on enemy targets

---

## Progression System

### Experience & Leveling

**XP Sources:**
- **Combat Kills:** 100-500 XP (scaled to difficulty)
- **Successful Maneuvers:** 10-50 XP (first time bonus × 5)
- **Engineering Breakthroughs:** 200-1000 XP
- **Story Milestones:** 500-2000 XP

**Level-Up Rewards (Every Level):**
- +5 Attribute Points (allocate freely)
- +1 Skill Point (rank up existing or unlock new)
- Every 3rd Level: +1 Passive Slot OR Equipment Upgrade

**Level Range for Sample:** 1 → 15
- Start: Level 1 (Freighter Pilot)
- Chapter 3 (First Combat): Level 3-4
- Chapter 6 (Engineering Subclass): Level 7-8
- Chapter 10 (First Battle of Earth): Level 13-15

### Power Arc

**Stages:**
1. **Initiate (1-3):** Barely competent, survival focus
2. **Combatant (4-7):** Dangerous but vulnerable, learning combat
3. **Specialist (8-12):** Engineering mastery begins, unique tactics
4. **Ace (13-15):** Squadron-level threat, signature moves

**Avoid Linear Trap:** Each level matters at low levels, but 13→15 is refinement, not exponential power spike

---

## Newtonian Physics Integration

### Delta-V Budget (Δv)

Every maneuver costs Δv from ship's reserves:
- **Station Keeping:** 1-5 m/s per hour
- **Intercept Burn:** 500-2000 m/s
- **Combat Evasion:** 50-200 m/s per dodge
- **Orbital Transfer (Earth→Mars):** 5000-8000 m/s

**Empty Tank = Death:** Stranded in orbit or off-trajectory

### Heat as Resource

Combat generates heat faster than radiators can dump:
- **Laser Fire:** +15% heat per shot
- **High-G Burn:** +5% per G above 3G
- **Taking Damage:** +10-40% from absorbed energy

**Tactical Choice:** Spike heat for burst damage vs sustained combat cooling

### Orbital Mechanics Skills

- **Hohmann Transfer** (Basic): Fuel-efficient but slow, predictable
- **Bi-Elliptic Transfer** (Advanced): Even more efficient for extreme range
- **Oberth Effect** (Expert): Maximize thrust at periapsis for "free" Δv
- **Gravity Assist** (Master): Slingshot maneuvers around planets/stations

---

## Engineering Subclass (Unlocked Chapter 4)

### Modification System

**Modification Slots by Ship Size:**
- Fighter (Lathe's ship): 3 slots
- Corvette: 5 slots
- Frigate: 8 slots

**Example Modifications:**
- **Overclocked Reactor:** +25% PWR, +50% heat generation
- **Ablative Scabbing:** +15 ARM using scavenged plating, -200 m/s Δv
- **Improvised Railgun:** Convert cargo bay into kinetic weapon
  - Ammo: Literally anything (ice chunks, scrap, spent fuel rods)
  - Damage scales with impact velocity (Newtonian!)
- **Stealth Coating:** -30% sensor signature, -20% heat dissipation
- **Expanded Tanks:** +2000 m/s Δv, +10% target profile

### Crafting Minigame

**Engineering Challenges:**
When modifying, roll vs ENG stat:
- **Critical Success (ENG + 20):** Bonus effect, no drawback
- **Success (ENG + 0):** Works as designed
- **Failure (ENG - 10):** Partial effect or increased drawback
- **Critical Failure (ENG - 20):** System damage, lose materials

**Radicalization Synergy:**
High CNV unlocks "Desperate Measures" - mods that sacrifice safety for lethality:
- **Reactor Breach Trap:** Rig damaged reactor to detonate on command
- **Suicide Burn Protocol:** Override G-safety to 15G+ for one maneuver

---

## Character Sheet Example (Lathe - Chapter 1 Start)

### PILOT STATS
- **Level:** 1
- **XP:** 0 / 1000
- **RFX:** 14 (Freighter reflexes, decent)
- **CMP:** 12 (Cool under pressure... for now)
- **SPR:** 16 (Natural talent for 3D thinking)
- **ENG:** 6 (Can swap a fuse, not build a reactor)
- **CNV:** 8 (Pre-radicalization baseline)

**Secondary:**
- Stress Threshold: 28
- G-Tolerance: 19 (can handle ~6G)
- Learning Rate: 18

### SHIP: *Dancer's Reprieve* (Bulk Freighter, Modified)
- **THR:** 4 (4,000 m/s Δv, 1.5G max)
- **HMG:** 3 (Civilian-grade, poor)
- **ARM:** 2 (Basically tin foil)
- **SNS:** 5 (Standard nav sensors)
- **RCS:** 6 (Actually decent - freighter needs precision docking)
- **PWR:** 3 (Enough for life support and basic sensors)

### ACTIVE SKILLS
1. **Precision Docking** (Rank 4) - Freighter skill, +40% RCS efficiency near structures
2. **Emergency Vent** (Rank 2) - Dump cargo for instant Δv boost

### PASSIVE ABILITIES
1. **Drift Jockey** - Freighter background bonus
2. **Vacuum Born** - Mercury native resilience

---

## UI/Presentation in Novel

### Blue Box Format (Example)

```
╔═══════════════════════════════════════╗
║  KILL CONFIRMED: UNE Frigate "Reliant"║
║  +850 XP                               ║
║  +1 Conviction                         ║
║                                        ║
║  NEW SKILL UNLOCKED:                   ║
║  » VENGEANCE STRIKE (Active)           ║
║    Trade CMP for damage when          ║
║    targeting Earth-aligned vessels     ║
╚═══════════════════════════════════════╝
```

### Frequency Guidelines
- **Every Chapter:** 1-2 blue boxes minimum
- **Combat Scenes:** 3-5 boxes (kills, level-ups, skill uses)
- **Engineering Scenes:** 2-4 boxes (modifications, unlocks)
- **Character Moments:** 1 box (conviction changes, trauma responses)

### Narrative Integration
Don't just show stats - FEEL them:
- "The MERIT implant chimed as his G-tolerance redlined—7.2G and climbing. His vision tunneled, but his Composure held at 45. Just barely."
- "Δv reserves: 1,247 m/s. Enough for the burn to Earth, but nothing left for mistakes. No second chances."

---

## Balancing Notes

### Avoid Power Creep
- Levels 1-5: Learning to survive
- Levels 6-10: Competent specialist
- Levels 11-15: Exceptional, not godlike
- At Level 15, Lathe is ONE ace pilot, not a fleet

### Meaningful Losses
- Δv spent is GONE until refuel
- Ship damage persists between fights
- High CNV unlocks power but narratively isolates Lathe

### Engineering Subclass Balance
- Modifications take TIME (hours/days)
- Limited by available materials
- Each mod has trade-offs (no pure upgrades)

---

## Radicalization Mechanics

### Conviction Growth Events
- **Mercury Destruction (Chapter 1):** +10 CNV
- **First Kill (Chapter 3):** +5 CNV
- **Witnessing Atrocity:** +8 CNV
- **Faction Loyalty Moment:** +3 CNV
- **Personal Loss:** +10-15 CNV

### CNV Thresholds & Unlocks
- **CNV 20:** "Trauma Response" passive activates
- **CNV 35:** Engineering unlocks "Desperate Measures" category
- **CNV 50:** "Vengeance Strike" skill unlocked
- **CNV 70+:** "True Believer" status - point of no return

### Mechanical Trade-offs
High CNV provides:
- +Damage vs Earth-aligned targets
- +Access to high-risk/high-reward tactics
- +Faction reputation

But costs:
- -Diplomatic options (story branches closed)
- -Composure in certain situations
- -Ability to question orders

---

## Appendix: Sample Calculations

### Combat Example: Laser Duel at 50km

**Setup:**
- Lathe's *Reprieve* vs UNE Patrol Craft
- Range: 50,000m
- Light-lag: 0.00017 seconds (negligible)
- Both ships closing at 500 m/s

**Turn 1: Lathe's Actions**
1. **Activate "Torpedo Solution" (Rank 3)**
   - +30% hit chance
   - Cost: 50 PWR (no problem, PWR 3 = 3MW)

2. **Fire Improvised Railgun**
   - Base damage: 50 HP
   - Projectile velocity: 2000 m/s relative
   - Time to impact: 25 seconds
   - Enemy can evade if SNS high enough

3. **Evasive Burn**
   - 2G lateral thrust for 3 seconds
   - Δv cost: ~60 m/s
   - Heat: +10%
   - New vector complicates enemy targeting

**Enemy Response:**
- Detects railgun slug (SNS 7 vs Lathe's SNS 5)
- 1G dodge burn, costs 30 m/s Δv
- Slug misses by 200m
- Returns laser fire: 30 HP damage, +15% heat to Lathe

**Result:**
- Lathe: -30 HP, 25% heat, -60 m/s Δv
- Enemy: Intact, -30 m/s Δv
- **Tactical lesson:** Railguns are Δv-efficient but dodgeable at range

---

This ruleset provides a foundation for consistent, engaging LitRPG mechanics grounded in hard sci-fi physics. The system rewards tactical thinking, meaningful specialization, and reflects Lathe's emotional journey through the Conviction stat.
