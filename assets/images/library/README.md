# Image Library

This folder contains all the photos for your gallery carousel and modal viewer.

## How It Works

- **Carousel**: Shows 10 random images from this folder
- **View Library Button**: Opens a modal with ALL images in a beautiful grid
- **Random Selection**: Different images appear in carousel each page load

## How to Add Images

1. **Add your photos to this folder** (`assets/images/library/`)
2. **Supported formats**: JPG, JPEG, PNG, WebP, GIF
3. **Recommended naming**: 
   - `photo1.jpg`, `photo2.jpeg`, `photo3.png`, etc.
   - Or descriptive names: `playground.jpg`, `classroom.png`, `kids-playing.jpeg`

## Update the Gallery Code

After adding images to this folder, you need to update the `imageLibrary` array in `js/script.js` (around line 410):

```javascript
const imageLibrary = [
    { src: 'assets/images/library/photo1.jpg', caption: 'Children Playing' },
    { src: 'assets/images/library/photo2.jpeg', caption: 'Art Activities' },
    { src: 'assets/images/library/photo3.png', caption: 'Outdoor Fun' },
    { src: 'assets/images/library/photo4.webp', caption: 'Story Time' },
    // Add more images here...
];
```

## Tips

- **Image size**: Optimize images to 1200px wide for faster loading
- **Captions**: Use bilingual captions like "Temps de Jeu / Play Time"
- **Carousel**: Shows 10 random images - add more for variety!
- **Modal**: Displays ALL images in a beautiful grid with gradient borders
- **Minimum**: Add at least 10 images for best carousel experience

---

*Currently no images in library. Add your photos to see them in the carousel and modal!*
