# RPG Adventure Game

A browser-based RPG game built with [RPG-JS](https://rpgjs.dev) featuring turn-based combat, quests, and procedurally generated pixel art sprites.

## Features

- **Turn-based Combat System**: Fight enemies with Attack, Defend, and Run options
- **Quest System**: Accept quests from NPCs and earn rewards
- **Enemy Types**:
  - **Goblins**: Aggressive enemies with moderate stats
  - **Slimes**: Weaker enemies, easier to defeat
- **Python-generated Sprites**: All enemy sprites are generated using Python/Pillow
- **Progressive Gameplay**: Complete quests to earn gold and experience

## Play Online

🎮 **[Play the game here!](https://ggmcdowell.github.io/Sketch/)**

> Mobile-optimized! Works great on phones and tablets.

## Game Controls

- **Arrow Keys / WASD**: Move your character
- **Enter / Space**: Interact with NPCs and enemies
- **ESC**: Open menu

## Getting Started Locally

### Prerequisites

- Node.js (>= 14)
- Python 3 with Pillow (for sprite generation)

### Installation

```bash
# Clone the repository
git clone https://github.com/ggmcdowell/Sketch.git
cd Sketch

# Install dependencies
npm install

# Generate sprites (optional - sprites are already included)
pip install Pillow
python3 generate_sprites.py

# Start development server
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
├── main/
│   ├── client/
│   │   ├── spritesheets/     # Character and enemy sprites
│   │   └── index.ts          # Client module
│   ├── server/
│   │   ├── events/           # NPCs and enemy logic
│   │   │   ├── goblin.ts     # Goblin enemy with AI
│   │   │   ├── slime.ts      # Slime enemy
│   │   │   ├── quest_giver.ts # Quest NPC
│   │   │   └── villager.ts   # Friendly NPC
│   │   ├── worlds/           # Game maps
│   │   ├── player.ts         # Player configuration
│   │   └── index.ts          # Server module
│   └── index.ts              # Main module entry
├── generate_sprites.py       # Python sprite generator
└── package.json
```

## Game Mechanics

### Combat

When you encounter an enemy, you enter turn-based combat:
- **Attack**: Deal damage based on your ATK stat minus enemy defense
- **Defend**: Reduce incoming damage by 50%
- **Run**: Attempt to escape (success chance varies by enemy)

### Quests

Find the Quest Giver (NPC with pink hair) to accept quests:
- **Goblin Menace**: Defeat 3 goblins → Reward: 50 gold + HP restore
- **Slime Cleanup**: Defeat 5 slimes → Reward: 35 gold

### Character Stats

- **HP**: Health points (100 max)
- **ATK**: Attack power (10 base)
- **PDEF**: Physical defense (5 base)
- **Gold**: Currency earned from quests and enemies

## Sprite Generation

Sprites are generated using Python with the Pillow library. To regenerate sprites:

```bash
python3 generate_sprites.py
```

This creates:
- `main/client/spritesheets/characters/hero_generated.png`
- `main/client/spritesheets/enemies/goblin.png`
- `main/client/spritesheets/enemies/slime.png`

Each sprite sheet follows the RPG Maker format (3 frames × 4 directions).

## Technologies Used

- **[RPG-JS](https://rpgjs.dev)**: RPG framework for browser games
- **TypeScript**: Type-safe game logic
- **Vue.js**: UI components (dialogs, menus)
- **PixiJS**: WebGL rendering
- **Vite**: Build tool
- **Python + Pillow**: Sprite generation

## Deployment

This game can be deployed to:
- **GitHub Pages**: Static hosting
- **Netlify**: Automatic deployment
- **Vercel**: Serverless deployment

See the `netlify.toml` and `vercel.json` files for configuration.

## Contributing

Contributions are welcome! Feel free to:
- Add new enemy types
- Create new quests
- Improve combat mechanics
- Design better sprites

## License

This project uses assets from various sources:
- Framework: [RPG-JS](https://github.com/RSamaium/RPG-JS) (MIT License)
- Tilesets: [Pipoya](https://pipoya.itch.io)
- Sounds: [Davidvitas](https://www.davidvitas.com/) (CC BY 4.0)

Game code is open source under MIT License.

## Credits

- Built with RPG-JS framework
- Sprites generated with Python/Pillow
- Created as a demo RPG project

---

**Have fun playing!** 🎮⚔️
