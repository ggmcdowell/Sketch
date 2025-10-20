import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    id: 'goblin',
    image: require('./goblin.png'),
    ...RMSpritesheet(3, 4)
})
export class GoblinSprite { }

@Spritesheet({
    id: 'slime',
    image: require('./slime.png'),
    ...RMSpritesheet(3, 4)
})
export class SlimeSprite { }
