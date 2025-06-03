from PIL import Image

# Open the transparent image
img = Image.open('logo.png').convert('RGBA')

# Define the new color (RGBA format)
new_color = (255, 255, 255, 255)  # Red, for example

# Change color of non-transparent pixels
pixels = img.load()
for y in range(img.height):
    for x in range(img.width):
        r, g, b, a = pixels[x, y]
        if a != 0:  # Only recolor non-transparent pixels
            pixels[x, y] = new_color[:3] + (a,)

# Save the new image
img.save('recolored_image.png')
