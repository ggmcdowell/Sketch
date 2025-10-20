import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'Quest Giver',
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class QuestGiverEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }

    async onAction(player: RpgPlayer) {
        const hasGoblinQuest = player.getVariable('HAS_GOBLIN_QUEST')
        const goblinQuestComplete = player.getVariable('GOBLIN_QUEST_COMPLETE')
        const hasSlimeQuest = player.getVariable('HAS_SLIME_QUEST')
        const slimeQuestComplete = player.getVariable('SLIME_QUEST_COMPLETE')

        // Check if player can turn in goblin quest
        if (hasGoblinQuest && !goblinQuestComplete) {
            const kills = player.getVariable('GOBLIN_QUEST_KILLS') || 0
            if (kills >= 3) {
                await this.completeGoblinQuest(player)
                return
            } else {
                await player.showText(`You've defeated ${kills}/3 goblins. Keep going!`, {
                    talkWith: this
                })
                return
            }
        }

        // Check if player can turn in slime quest
        if (hasSlimeQuest && !slimeQuestComplete) {
            const kills = player.getVariable('SLIME_QUEST_KILLS') || 0
            if (kills >= 5) {
                await this.completeSlimeQuest(player)
                return
            } else {
                await player.showText(`You've defeated ${kills}/5 slimes. Keep hunting!`, {
                    talkWith: this
                })
                return
            }
        }

        // Main quest menu
        await player.showText('Greetings, brave adventurer! I have quests for you.', {
            talkWith: this
        })

        const choice = await player.showChoices('Which quest interests you?', [
            { text: 'Goblin Menace' + (goblinQuestComplete ? ' (Complete)' : ''), value: 'goblin' },
            { text: 'Slime Cleanup' + (slimeQuestComplete ? ' (Complete)' : ''), value: 'slime' },
            { text: 'Never mind', value: 'cancel' }
        ])

        if (choice?.value === 'goblin' && !goblinQuestComplete) {
            await this.giveGoblinQuest(player)
        } else if (choice?.value === 'slime' && !slimeQuestComplete) {
            await this.giveSlimeQuest(player)
        } else if (choice?.value === 'goblin' && goblinQuestComplete) {
            await player.showText('You already completed this quest!', {
                talkWith: this
            })
        } else if (choice?.value === 'slime' && slimeQuestComplete) {
            await player.showText('You already completed this quest!', {
                talkWith: this
            })
        } else {
            await player.showText('Come back when you\'re ready!', {
                talkWith: this
            })
        }
    }

    async giveGoblinQuest(player: RpgPlayer) {
        await player.showText('The goblins have been terrorizing nearby travelers!', {
            talkWith: this
        })
        await player.showText('Please defeat 3 goblins and I\'ll reward you handsomely.', {
            talkWith: this
        })
        await player.showText('Quest accepted: Defeat 3 Goblins!', {
            talkWith: this
        })

        player.setVariable('HAS_GOBLIN_QUEST', true)
        player.setVariable('GOBLIN_QUEST_KILLS', 0)
    }

    async completeGoblinQuest(player: RpgPlayer) {
        await player.showText('Excellent work! The roads are safer thanks to you!', {
            talkWith: this
        })
        await player.showText('Here\'s your reward: 50 gold and a health potion!', {
            talkWith: this
        })

        player.gold = (player.gold || 0) + 50
        player.hp = Math.min((player.hp || 0) + 30, player.param?.maxHp || 100)

        player.setVariable('GOBLIN_QUEST_COMPLETE', true)

        await player.showText('Quest Complete! +50 Gold, HP restored!', {
            talkWith: this
        })
    }

    async giveSlimeQuest(player: RpgPlayer) {
        await player.showText('The slimes have been multiplying in the fields!', {
            talkWith: this
        })
        await player.showText('Please defeat 5 slimes to help control their population.', {
            talkWith: this
        })
        await player.showText('Quest accepted: Defeat 5 Slimes!', {
            talkWith: this
        })

        player.setVariable('HAS_SLIME_QUEST', true)
        player.setVariable('SLIME_QUEST_KILLS', 0)
    }

    async completeSlimeQuest(player: RpgPlayer) {
        await player.showText('Thank you! The farmers can rest easier now.', {
            talkWith: this
        })
        await player.showText('Here\'s your reward: 35 gold!', {
            talkWith: this
        })

        player.gold = (player.gold || 0) + 35

        player.setVariable('SLIME_QUEST_COMPLETE', true)

        await player.showText('Quest Complete! +35 Gold!', {
            talkWith: this
        })
    }
}
