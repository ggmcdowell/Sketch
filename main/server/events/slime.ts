import { RpgEvent, EventData, RpgPlayer, EventMode } from '@rpgjs/server'

@EventData({
    name: 'Slime',
    mode: EventMode.Scenario,
    hitbox: {
        width: 32,
        height: 32
    }
})
export default class SlimeEvent extends RpgEvent {
    private hp: number = 20
    private maxHp: number = 20
    private attack: number = 3
    private defense: number = 1
    private xpReward: number = 10
    private goldReward: number = 3
    private defeated: boolean = false

    onInit() {
        this.setGraphic('slime')
        this.speed = 0.5
        this.frequency = 150
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
            await player.showText('The slime has been defeated.')
            return
        }

        await this.startCombat(player)
    }

    async startCombat(player: RpgPlayer) {
        await player.showText(`A Slime bounces toward you! (HP: ${this.hp}/${this.maxHp})`)

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
                await player.showText(`You dealt ${playerDamage} damage! Slime HP: ${Math.max(0, this.hp)}/${this.maxHp}`)

                if (this.hp <= 0) {
                    await this.onDefeat(player)
                    combatActive = false
                    break
                }

                // Enemy attacks back
                const enemyDamage = Math.max(1, this.attack - (player.param?.pdef || 5))
                player.hp -= enemyDamage
                await player.showText(`Slime bounces at you! You took ${enemyDamage} damage! Your HP: ${Math.max(0, player.hp)}/${player.param?.maxHp || 100}`)

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
                await player.showText(`Slime attacks! You blocked some damage and took ${enemyDamage} damage! Your HP: ${Math.max(0, player.hp)}/${player.param?.maxHp || 100}`)

            } else if (choice?.value === 'run') {
                const escapeChance = Math.random()
                if (escapeChance > 0.3) { // Easier to escape from slime
                    await player.showText('You successfully escaped!')
                    combatActive = false
                } else {
                    await player.showText('The slime blocks your path!')
                    // Enemy gets a free attack
                    const enemyDamage = Math.max(1, this.attack - (player.param?.pdef || 5))
                    player.hp -= enemyDamage
                    await player.showText(`Slime bounces at you! You took ${enemyDamage} damage!`)
                }
            }
        }
    }

    async onDefeat(player: RpgPlayer) {
        this.defeated = true
        await player.showText(`You defeated the Slime! +${this.xpReward} XP, +${this.goldReward} Gold`)

        // Reward player
        player.gold = (player.gold || 0) + this.goldReward

        // Update quest progress if player has slime quest
        const questProgress = player.getVariable('SLIME_QUEST_KILLS') || 0
        player.setVariable('SLIME_QUEST_KILLS', questProgress + 1)

        // Remove the enemy from map
        this.remove()
    }

    onDetect(player: RpgPlayer) {
        // Slime AI: slower movement toward player
        if (!this.defeated && Math.random() > 0.8) {
            this.moveToward(player)
        }
    }
}
