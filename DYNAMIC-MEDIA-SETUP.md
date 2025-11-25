# 🎵 📸 Dynamic Media Setup Guide

## ✅ What's Been Implemented

Your website now supports:
1. **Music Playlist** - Play multiple songs in sequence
2. **Dynamic Gallery** - Load images from a central library

---

## 🎵 Music Playlist Setup

### Current Status
- ✅ Playlist functionality is ready
- ⚠️ Only 1 song currently in playlist (`background-music.mp3`)

### How It Works
- Songs play automatically one after another
- When the last song ends, it loops back to the first
- Users can pause/play anytime with the music button

### Adding More Songs

**Step 1:** Add MP3 files to `assets/music/` folder
```
assets/music/
  ├── background-music.mp3  ✅ (already there)
  ├── song2.mp3             ➕ (add your songs)
  ├── song3.mp3             ➕
  └── lullaby.mp3           ➕
```

**Step 2:** Run the auto-generator script
```bash
node generate-media-arrays.js
```

**Step 3:** Refresh your browser - Done! ✅

The script will automatically update the playlist in the code!

**Resources for Free Music:**
- [Pixabay Music](https://pixabay.com/music/) - Free downloads
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Royalty-free
- [Free Music Archive](https://freemusicarchive.org/) - Creative Commons

**Recommendations:**
- Children's lullabies
- Gentle piano instrumentals
- Nature sounds (birds, water)
- Soft classical music
- Keep files under 5MB each

---

## 📸 Gallery Carousel & Library Setup

### Current Status
- ✅ Dynamic carousel is ready
- ✅ Modal library viewer with beautiful borders and navigation
- ✅ Auto-generator script for easy updates
- ⚠️ Run `node generate-media-arrays.js` after adding files

### How It Works
- **Carousel**: Displays 10 random images from your library in a scrollable carousel
- **Click Image**: Opens full-screen modal to view single image with left/right navigation
- **View Library Button**: Opens modal starting from first image
- **Modal Navigation**: Use arrow buttons or keyboard (←/→) to browse all images
- **Random Selection**: Carousel shows different random images each time the page loads
- **Auto-Generator**: Scans folders and updates code automatically

### Adding Your Photos

**Step 1:** Add images to `assets/images/library/` folder
```
assets/images/library/
  ├── photo1.jpg          ➕ (add your photos)
  ├── photo2.jpeg         ➕ (JPEG also supported)
  ├── playground.png      ➕ (PNG for transparency)
  ├── classroom.jpg       ➕
  └── art-time.webp       ➕ (WebP for smaller size)
```

**Step 2:** Run the auto-generator script
```bash
node generate-media-arrays.js
```

**Step 3:** Refresh your browser - Done! ✅

The script will:
- ✅ Scan your folders for images and music
- ✅ Auto-generate captions from filenames
- ✅ Update the code automatically
- ✅ Show you a summary of what was found

**Image Recommendations:**
- Supported formats: JPG, JPEG, PNG, WebP, GIF
- Optimize to 1200px wide for faster loading
- Use bilingual captions: "French Text / English Text"
- Add at least 10 images for full carousel display
- More images = more variety in random carousel selection

**Tips:**
- Compress large images at [TinyPNG.com](https://tinypng.com/)
- Keep individual files under 2MB
- Use descriptive filenames
- Show happy children, activities, facilities
- Carousel shows 10 random images - add more for variety!
- "View Library" button shows ALL images in modal

---

## 🧪 Testing Your Changes

After adding music or images:

1. **Save the files** to the appropriate folders
2. **Update the arrays** in `js/script.js`
3. **Refresh your browser** (Cmd+R on Mac, Ctrl+R on Windows)
4. **Test the features**:
   - Music: Click the music button and verify songs play in sequence
   - Carousel: Scroll left/right to see different images
   - Modal: Click "View Full Library" to see all images in a beautiful grid

---

## 📝 Quick Reference

| Feature | File to Update | Line Number (approx) |
|---------|----------------|---------------------|
| Music Playlist | `js/script.js` | Line 205 |
| Gallery Images | `js/script.js` | Line 410 |

---

## ❓ Need Help?

- Check `assets/music/README.md` for music setup details
- Check `assets/images/library/README.md` for image setup details
- Browser console (F12) will show any file loading errors

**Browser Console Shortcuts:**
- Mac: `Cmd + Option + I`
- Windows: `F12` or `Ctrl + Shift + I`

---

**Last Updated:** January 2025
**Status:** ✅ Code ready, waiting for media files
