#!/usr/bin/env python3
"""
RPG Sprite Generator
Creates pixel art sprites in RPG Maker format (3 frames x 4 directions)
"""

from PIL import Image, ImageDraw
import random


def create_sprite_sheet(char_type="hero", width=32, height=32):
    """
    Create a character sprite sheet with 4 directions (down, left, right, up)
    and 3 animation frames each
    """
    # Total size: 3 frames wide x 4 directions tall
    sheet_width = width * 3
    sheet_height = height * 4

    # Create blank sprite sheet
    sprite_sheet = Image.new('RGBA', (sheet_width, sheet_height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(sprite_sheet)

    if char_type == "hero":
        colors = {
            'skin': (255, 220, 177),
            'hair': (139, 69, 19),
            'shirt': (65, 105, 225),
            'pants': (70, 70, 70),
            'outline': (0, 0, 0)
        }
    elif char_type == "goblin":
        colors = {
            'skin': (106, 168, 79),
            'eye': (255, 0, 0),
            'armor': (139, 69, 19),
            'weapon': (192, 192, 192),
            'outline': (0, 0, 0)
        }
    elif char_type == "slime":
        colors = {
            'body': (138, 43, 226),
            'shine': (200, 150, 255),
            'eye': (255, 255, 255),
            'pupil': (0, 0, 0),
            'outline': (75, 0, 130)
        }
    else:
        # Default random colors
        colors = {
            'primary': tuple(random.randint(100, 255) for _ in range(3)),
            'secondary': tuple(random.randint(50, 150) for _ in range(3)),
            'outline': (0, 0, 0)
        }

    # Draw each frame
    for row in range(4):  # 4 directions
        for col in range(3):  # 3 animation frames
            x_offset = col * width
            y_offset = row * height

            # Animation offset (middle frame is neutral)
            anim_offset = 0 if col == 1 else (1 if col == 0 else -1)

            if char_type == "hero":
                draw_hero(draw, x_offset, y_offset, width, height, row, anim_offset, colors)
            elif char_type == "goblin":
                draw_goblin(draw, x_offset, y_offset, width, height, row, anim_offset, colors)
            elif char_type == "slime":
                draw_slime(draw, x_offset, y_offset, width, height, row, anim_offset, colors)

    return sprite_sheet


def draw_hero(draw, x, y, w, h, direction, anim, colors):
    """Draw a simple hero character"""
    cx, cy = x + w // 2, y + h // 2

    # Body (down, left, right, up)
    if direction == 0:  # Down
        # Head
        draw.ellipse([cx - 6, cy - 10, cx + 6, cy - 2], fill=colors['skin'], outline=colors['outline'])
        # Hair
        draw.ellipse([cx - 7, cy - 11, cx + 7, cy - 6], fill=colors['hair'], outline=colors['outline'])
        # Eyes
        draw.point([cx - 3, cy - 6], fill=colors['outline'])
        draw.point([cx + 3, cy - 6], fill=colors['outline'])
        # Body
        draw.rectangle([cx - 6, cy - 2, cx + 6, cy + 8], fill=colors['shirt'], outline=colors['outline'])
        # Legs
        draw.rectangle([cx - 5 + anim, cy + 8, cx - 1 + anim, cy + 14], fill=colors['pants'], outline=colors['outline'])
        draw.rectangle([cx + 1 - anim, cy + 8, cx + 5 - anim, cy + 14], fill=colors['pants'], outline=colors['outline'])

    elif direction == 1:  # Left
        # Head
        draw.ellipse([cx - 6, cy - 10, cx + 6, cy - 2], fill=colors['skin'], outline=colors['outline'])
        # Hair
        draw.ellipse([cx - 7, cy - 11, cx + 7, cy - 6], fill=colors['hair'], outline=colors['outline'])
        # Body
        draw.rectangle([cx - 6, cy - 2, cx + 6, cy + 8], fill=colors['shirt'], outline=colors['outline'])
        # Arm
        draw.rectangle([cx - 9, cy + anim, cx - 6, cy + 6 + anim], fill=colors['skin'], outline=colors['outline'])
        # Legs
        draw.rectangle([cx - 5 + anim, cy + 8, cx - 1 + anim, cy + 14], fill=colors['pants'], outline=colors['outline'])
        draw.rectangle([cx + 1, cy + 8, cx + 5, cy + 14], fill=colors['pants'], outline=colors['outline'])

    elif direction == 2:  # Right
        # Head
        draw.ellipse([cx - 6, cy - 10, cx + 6, cy - 2], fill=colors['skin'], outline=colors['outline'])
        # Hair
        draw.ellipse([cx - 7, cy - 11, cx + 7, cy - 6], fill=colors['hair'], outline=colors['outline'])
        # Body
        draw.rectangle([cx - 6, cy - 2, cx + 6, cy + 8], fill=colors['shirt'], outline=colors['outline'])
        # Arm
        draw.rectangle([cx + 6, cy + anim, cx + 9, cy + 6 + anim], fill=colors['skin'], outline=colors['outline'])
        # Legs
        draw.rectangle([cx - 5, cy + 8, cx - 1, cy + 14], fill=colors['pants'], outline=colors['outline'])
        draw.rectangle([cx + 1 - anim, cy + 8, cx + 5 - anim, cy + 14], fill=colors['pants'], outline=colors['outline'])

    else:  # Up
        # Hair back
        draw.ellipse([cx - 7, cy - 11, cx + 7, cy - 6], fill=colors['hair'], outline=colors['outline'])
        # Head
        draw.ellipse([cx - 6, cy - 10, cx + 6, cy - 2], fill=colors['skin'], outline=colors['outline'])
        # Body
        draw.rectangle([cx - 6, cy - 2, cx + 6, cy + 8], fill=colors['shirt'], outline=colors['outline'])
        # Legs
        draw.rectangle([cx - 5 + anim, cy + 8, cx - 1 + anim, cy + 14], fill=colors['pants'], outline=colors['outline'])
        draw.rectangle([cx + 1 - anim, cy + 8, cx + 5 - anim, cy + 14], fill=colors['pants'], outline=colors['outline'])


def draw_goblin(draw, x, y, w, h, direction, anim, colors):
    """Draw a goblin enemy"""
    cx, cy = x + w // 2, y + h // 2

    # Similar to hero but with different proportions and colors
    if direction == 0:  # Down
        # Head (larger)
        draw.ellipse([cx - 8, cy - 10, cx + 8, cy + 2], fill=colors['skin'], outline=colors['outline'])
        # Ears
        draw.ellipse([cx - 10, cy - 7, cx - 7, cy - 3], fill=colors['skin'], outline=colors['outline'])
        draw.ellipse([cx + 7, cy - 7, cx + 10, cy - 3], fill=colors['skin'], outline=colors['outline'])
        # Eyes (red)
        draw.ellipse([cx - 4, cy - 5, cx - 2, cy - 3], fill=colors['eye'])
        draw.ellipse([cx + 2, cy - 5, cx + 4, cy - 3], fill=colors['eye'])
        # Body (small)
        draw.rectangle([cx - 6, cy + 2, cx + 6, cy + 8], fill=colors['armor'], outline=colors['outline'])
        # Legs (short)
        draw.rectangle([cx - 5 + anim, cy + 8, cx - 2 + anim, cy + 12], fill=colors['skin'], outline=colors['outline'])
        draw.rectangle([cx + 2 - anim, cy + 8, cx + 5 - anim, cy + 12], fill=colors['skin'], outline=colors['outline'])

    elif direction == 1:  # Left
        draw.ellipse([cx - 8, cy - 10, cx + 8, cy + 2], fill=colors['skin'], outline=colors['outline'])
        draw.ellipse([cx - 10, cy - 7, cx - 7, cy - 3], fill=colors['skin'], outline=colors['outline'])
        draw.rectangle([cx - 6, cy + 2, cx + 6, cy + 8], fill=colors['armor'], outline=colors['outline'])
        draw.rectangle([cx - 5 + anim, cy + 8, cx - 2 + anim, cy + 12], fill=colors['skin'], outline=colors['outline'])
        draw.rectangle([cx + 2, cy + 8, cx + 5, cy + 12], fill=colors['skin'], outline=colors['outline'])

    elif direction == 2:  # Right
        draw.ellipse([cx - 8, cy - 10, cx + 8, cy + 2], fill=colors['skin'], outline=colors['outline'])
        draw.ellipse([cx + 7, cy - 7, cx + 10, cy - 3], fill=colors['skin'], outline=colors['outline'])
        draw.rectangle([cx - 6, cy + 2, cx + 6, cy + 8], fill=colors['armor'], outline=colors['outline'])
        draw.rectangle([cx - 5, cy + 8, cx - 2, cy + 12], fill=colors['skin'], outline=colors['outline'])
        draw.rectangle([cx + 2 - anim, cy + 8, cx + 5 - anim, cy + 12], fill=colors['skin'], outline=colors['outline'])

    else:  # Up
        draw.ellipse([cx - 8, cy - 10, cx + 8, cy + 2], fill=colors['skin'], outline=colors['outline'])
        draw.rectangle([cx - 6, cy + 2, cx + 6, cy + 8], fill=colors['armor'], outline=colors['outline'])
        draw.rectangle([cx - 5 + anim, cy + 8, cx - 2 + anim, cy + 12], fill=colors['skin'], outline=colors['outline'])
        draw.rectangle([cx + 2 - anim, cy + 8, cx + 5 - anim, cy + 12], fill=colors['skin'], outline=colors['outline'])


def draw_slime(draw, x, y, w, h, direction, anim, colors):
    """Draw a slime enemy (blob-like)"""
    cx, cy = x + w // 2, y + h // 2

    # Slime body (bouncy animation)
    bounce = anim * 2

    # Main body
    draw.ellipse([cx - 10, cy - 8 + bounce, cx + 10, cy + 10], fill=colors['body'], outline=colors['outline'], width=2)

    # Shine highlight
    draw.ellipse([cx - 6, cy - 5 + bounce, cx - 2, cy - 2 + bounce], fill=colors['shine'])

    # Eyes
    eye_y = cy - 2 + bounce
    draw.ellipse([cx - 5, eye_y - 2, cx - 2, eye_y + 1], fill=colors['eye'], outline=colors['outline'])
    draw.ellipse([cx + 2, eye_y - 2, cx + 5, eye_y + 1], fill=colors['eye'], outline=colors['outline'])

    # Pupils
    draw.point([cx - 3, eye_y], fill=colors['pupil'])
    draw.point([cx + 3, eye_y], fill=colors['pupil'])


if __name__ == "__main__":
    print("Generating RPG sprites...")

    # Create sprites directory if it doesn't exist
    import os
    os.makedirs("main/spritesheets/characters", exist_ok=True)
    os.makedirs("main/spritesheets/enemies", exist_ok=True)

    # Generate hero sprite
    hero_sprite = create_sprite_sheet("hero", 32, 32)
    hero_sprite.save("main/spritesheets/characters/hero_generated.png")
    print("✓ Generated hero sprite")

    # Generate enemies
    goblin_sprite = create_sprite_sheet("goblin", 32, 32)
    goblin_sprite.save("main/spritesheets/enemies/goblin.png")
    print("✓ Generated goblin enemy sprite")

    slime_sprite = create_sprite_sheet("slime", 32, 32)
    slime_sprite.save("main/spritesheets/enemies/slime.png")
    print("✓ Generated slime enemy sprite")

    print("\n🎨 All sprites generated successfully!")
    print("Files saved to:")
    print("  - main/spritesheets/characters/hero_generated.png")
    print("  - main/spritesheets/enemies/goblin.png")
    print("  - main/spritesheets/enemies/slime.png")
