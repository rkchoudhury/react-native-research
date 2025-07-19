# App Optimisation - Image optimisation technique evalution

## Alternative image extension of png:
- SVG
    - Useful for icons, logos, and simple graphics
    - Can be scaled to any size without losing quality
    - React Native does not natively support SVG. Use libraries like react-native-svg to display SVG images

- WebP
    - Smaller file size compared to PNG and JPEG.
    - Reduces file sizes while maintaining high image quality
    - But WebP is being supported iOS 14 & later.
    - We might have to use some external library - react-native-webp-format
    - Reduce React Native application size with WebP image format - Link

- JPEG
    - it's ideal for photographic images or complex images with many colors

## Different compression mechanisim for png:

### Approach 1: Utilizing compress tools
- Utilize tools like ImageOptim or TinyPNG to compress images without quality loss.
- TinyPNG is a web service that uses advanced lossless compression techniques to reduce the file size of PNG images.

### Approach 2: Using Sprite Sheet

- PNG Sprite Analysis
    - Tied with sample PNG sprite sheet and displayed icons in app by giving some css property like top, left, right, bottom and overflow as hidden.

- SVG Sprite Analysis
    - Tied with sample SVG sprite sheet and displayed icons in app by giving some css property like top, left, right, bottom and overflow as hidden.

    - Example is added in the attachment section.

### Approach 3: Adding SVG icons in a single file
- Tried another approach by adding SVG icons in a single file by binding it like a key-value pair and import that json object and use it in component level.
- Example is added in the attachment section.
