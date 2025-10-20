import { RpgModule, RpgPlayer } from '@rpgjs/server'
import player from './player'

// Import events
import VillagerEvent from './events/villager'
import GoblinEvent from './events/goblin'
import SlimeEvent from './events/slime'
import QuestGiverEvent from './events/quest_giver'

@RpgModule<RpgServer>({
    player,
    events: [
        VillagerEvent,
        GoblinEvent,
        SlimeEvent,
        QuestGiverEvent
    ],
    maps: []
})
export default class RpgServerEngine { }
