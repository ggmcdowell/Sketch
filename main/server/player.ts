import { RpgPlayer, type RpgPlayerHooks, Control, Components } from '@rpgjs/server'

// Random name generator for dynamic accounts
const heroNames = [
    'Brave', 'Swift', 'Mighty', 'Wise', 'Bold', 'Noble', 'Fierce', 'Valiant',
    'Shadow', 'Storm', 'Fire', 'Ice', 'Thunder', 'Light', 'Dark', 'Wind'
]
const titles = [
    'Warrior', 'Knight', 'Mage', 'Ranger', 'Rogue', 'Paladin', 'Hunter', 'Sage',
    'Slayer', 'Champion', 'Hero', 'Adventurer', 'Explorer', 'Guardian', 'Defender'
]

function generateRandomName(): string {
    const name = heroNames[Math.floor(Math.random() * heroNames.length)]
    const title = titles[Math.floor(Math.random() * titles.length)]
    return `${name} ${title}`
}

const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        // Auto-generate random name - no login required!
        player.name = generateRandomName()
        player.setComponentsTop(Components.text('{name}'))

        // Set initial stats for combat
        player.hp = 100
        player.gold = 10

        // Set player parameters (combat stats)
        if (!player.param) {
            player.param = {
                maxHp: 100,
                maxSp: 50,
                sp: 50,
                atk: 10,     // Attack power
                pdef: 5,     // Physical defense
                sdef: 5,     // Special defense
                str: 10,     // Strength
                level: 1
            }
        }
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
    async onJoinMap(player: RpgPlayer) {
        if (player.getVariable('AFTER_INTRO')) {
            return
        }
        await player.showText('Welcome, brave adventurer!')
        await player.showText('This world is filled with dangerous creatures.')
        await player.showText('Find the Quest Giver (NPC with pink hair) to accept quests.')
        await player.showText('Battle enemies by walking up to them and pressing the action key.')
        await player.showText('Good luck on your adventure!')
        player.setVariable('AFTER_INTRO', true)
    }
}

export default player