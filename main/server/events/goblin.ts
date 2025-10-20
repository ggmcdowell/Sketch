import { RpgEvent, EventData, RpgPlayer, EventMode } from '@rpgjs/server'

@EventData({
    name: 'Goblin',
    mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 32
    }
})
export default class GoblinEvent extends RpgEvent {
    private hp: number = 30
    private maxHp: number = 30
    private attack: number = 5
    private defense: number = 2
    private xpReward: number = 15
    private goldReward: number = 5
    private defeated: boolean = false

    onInit() {
        this.setGraphic('goblin')
        this.speed = 1
        this.frequency = 100
        this.throughOtherPlayer = true
    }

    onChanges() {
        return {
            hp: this.hp,
            maxHp: this.maxHp
        }
    }

    async onAction(player: RpgPlayer) {
        if (this.defeated) {
            await player.showText('The goblin has been defeated.')
            return
        }

        await this.startCombat(player)
    }

    async startCombat(player: RpgPlayer) {
        await player.showText(`A wild Goblin appears! (HP: ${this.hp}/${this.maxHp})`)

        let combatActive = true

        while (combatActive && this.hp > 0 && player.hp > 0) {
            const choice = await player.showChoices('What will you do?', [
                { text: 'Attack', value: 'attack' },
                { text: 'Defend', value: 'defend' },
                { text: 'Run', value: 'run' }
            ])

            if (choice?.value === 'attack') {
                // Player attacks
                const playerDamage = Math.max(1, (player.param?.atk || 10) - this.defense)
                this.hp -= playerDamage
                await player.showText(`You dealt ${playerDamage} damage! Goblin HP: ${Math.max(0, this.hp)}/${this.maxHp}`)

                if (this.hp <= 0) {
                    await this.onDefeat(player)
                    combatActive = false
                    break
                }

                // Enemy attacks back
                const enemyDamage = Math.max(1, this.attack - (player.param?.pdef || 5))
                player.hp -= enemyDamage
                await player.showText(`Goblin attacks! You took ${enemyDamage} damage! Your HP: ${Math.max(0, player.hp)}/${player.param?.maxHp || 100}`)

                if (player.hp <= 0) {
                    await player.showText('You have been defeated...')
                    player.hp = player.param?.maxHp || 100
                    player.teleport({ x: 100, y: 100 }) // Respawn
                    combatActive = false
                }

            } else if (choice?.value === 'defend') {
                await player.showText('You brace yourself...')

                // Enemy attacks with reduced damage
                const enemyDamage = Math.max(1, Math.floor((this.attack - (player.param?.pdef || 5)) / 2))
                player.hp -= enemyDamage
                await player.showText(`Goblin attacks! You blocked some damage and took ${enemyDamage} damage! Your HP: ${Math.max(0, player.hp)}/${player.param?.maxHp || 100}`)

            } else if (choice?.value === 'run') {
                const escapeChance = Math.random()
                if (escapeChance > 0.5) {
                    await player.showText('You successfully escaped!')
                    combatActive = false
                } else {
                    await player.showText('Could not escape!')
                    // Enemy gets a free attack
                    const enemyDamage = Math.max(1, this.attack - (player.param?.pdef || 5))
                    player.hp -= enemyDamage
                    await player.showText(`Goblin attacks as you flee! You took ${enemyDamage} damage!`)
                }
            }
        }
    }

    async onDefeat(player: RpgPlayer) {
        this.defeated = true
        await player.showText(`You defeated the Goblin! +${this.xpReward} XP, +${this.goldReward} Gold`)

        // Reward player
        player.gold = (player.gold || 0) + this.goldReward

        // Update quest progress if player has goblin quest
        const questProgress = player.getVariable('GOBLIN_QUEST_KILLS') || 0
        player.setVariable('GOBLIN_QUEST_KILLS', questProgress + 1)

        // Remove the enemy from map
        this.remove()
    }

    onDetect(player: RpgPlayer) {
        // Simple AI: move toward player
        if (!this.defeated && Math.random() > 0.7) {
            this.moveToward(player)
        }
    }
}
