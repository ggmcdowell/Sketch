import { RpgModule, RpgClient } from '@rpgjs/client'

// Import spritesheets
import Characters from './spritesheets/characters/characters'
import { GoblinSprite, SlimeSprite } from './spritesheets/enemies/enemies'

@RpgModule<RpgClient>({
    spritesheets: [
        Characters,
        GoblinSprite,
        SlimeSprite
    ]
})
export default class RpgClientEngine { }
