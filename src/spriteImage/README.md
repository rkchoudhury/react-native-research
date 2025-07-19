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

# SVG Sprite Image Implementation Details

Created a SpriteIcon component which will take the sprite sheet as input and will try to render the icon based on the input index

## SpriteIcon Component

- This is a reusable component used for render the sprite sheet icon based on the `iconIndex`.
- The component basically needs following props to render the svg icon correctly from the sprite sheet.
    - `source`: The SVG sprite sheet file
    - `iconIndex`: The position of the icon in the sheet(starting icon with index 0 and so on from left to right)
    - `iconSize`: The size of the svg icon you want to render.
    - `columns`: The number of columns the SVG sprite sheet has.
    - `totalIcons`: The total number of icons the SVG sprite sheet has.
- Basically this component will go to the position where the required icon is located in the SVG sprite sheet and it uses top and left properties with overflow as hidden to render the SVG icon correctly.

- Note: This component is tested with SVG sprite sheet containing SVG icons with no gap in-between (We might have to revisit the logic if here is gap between the SVG icons in the Sprite Sheet).

## Asserts Directory Structure

Created a sprite-sheet folder inside the asserts directory.

- The sprite-sheet folder will contain multiple sprite-sheets in the following ways,

### icon.svg: 
- The file contains the SVG sprite sheet.
- The sprite sheet can be in grid formart or it can be a single row or a single column.

- Note: 
    - The SVG sprite sheet should contain all the svg icons with same size (height and width)
    - We can create multiple sheets if the size of the SVG icons varies.
    - If we adding some new icons to the SVG sprite sheet then make sure to append the icons in the end. Don't distrub the order of the SVG icons in the sheet. (As the icon rendering in the app is based on the postion of the SVG icon in the sheet)

### index.js:
- This file contains the Sprite Sheet information and the position of each SVG icons in the Sprite sheet so that it can be easily used inside the component.

- Example:
    - `SocialMediaEnum:`
        - The enum contains the postion of each SVG icon in the SVG sheet

    - `SOCIAL_MEDIA_SHEET:`
        - The propose of this object is: As SpriteIcon need these common props, we can centralised these props in one single place so that we don't have to add it again and in again while using SpriteIcon component.
        - If there is any change in Sprite Sheet like addition of new icons then we just have to update this file only. 

## Usages

### SpriteSVGExample.tsx:
- In the following way we can use SpriteIcon
    - Pass the Sprite sheet details by importing SOCIAL_MEDIA_SHEET from respective sprite-sheet index.ts file
    - Pass Enum constants to render the specific SVG icons from the sprite sheet.
    - As the SVG icons are scalable, we can override the default iconSize specified in the SOCIAL_MEDIA_SHEET object.

## Additional Information:

- Used Nucleo app to create the SVG sheet,
    - https://nucleoapp.com/application
- Refer the instructions folder