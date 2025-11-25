# 🔄 Auto-Update Media Files

## The Problem
Browser JavaScript **cannot read folder contents** directly for security reasons. This is why we need to manually list files in arrays.

## The Solution
Use the **auto-generator script** that scans your folders and updates the code automatically!

---

## 🚀 How to Use

### When you add new images or music:

1. **Add your files** to the folders:
   - Images → `assets/images/library/`
   - Music → `assets/music/`

2. **Run the auto-generator script**:
   ```bash
   node generate-media-arrays.js
   ```

3. **Refresh your browser** - Done! ✅

---

## 📋 What the Script Does

- ✅ Scans `assets/images/library/` for images (JPG, JPEG, PNG, WebP, GIF)
- ✅ Scans `assets/music/` for audio files (MP3, WAV, OGG)
- ✅ Auto-generates captions from filenames
- ✅ Updates `js/script.js` with the new arrays
- ✅ Shows you a summary of what was found

---

## 💡 Example

**Before adding files:**
```javascript
const imageLibrary = [];
const musicPlaylist = [];
```

**After running the script:**
```javascript
const imageLibrary = [
    { src: 'assets/images/library/home works.jpeg', caption: 'Home Works / Home Works' },
    { src: 'assets/images/library/lego lego.jpeg', caption: 'Lego Lego / Lego Lego' },
    { src: 'assets/images/library/painting time.jpeg', caption: 'Painting Time / Painting Time' }
];

const musicPlaylist = [
    'assets/music/background-music.mp3',
    'assets/music/lullaby.mp3'
];
```

---

## 🎨 Custom Captions

The script auto-generates captions from filenames, but you can edit them afterward in `js/script.js`:

```javascript
// Auto-generated:
{ src: 'assets/images/library/kids playing.jpg', caption: 'Kids Playing / Kids Playing' }

// Edit to bilingual:
{ src: 'assets/images/library/kids playing.jpg', caption: 'Enfants qui Jouent / Kids Playing' }
```

---

## 🔧 Alternative: Manual Update

If you prefer not to use Node.js, you can still manually update the arrays in `js/script.js`:

**For images (line ~397):**
```javascript
const imageLibrary = [
    { src: 'assets/images/library/your-image.jpg', caption: 'French / English' },
];
```

**For music (line ~205):**
```javascript
const musicPlaylist = [
    'assets/music/your-song.mp3',
];
```

---

## ⚙️ Requirements

- **Node.js** installed on your system
- If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/)

---

## 🎯 Quick Commands

```bash
# Run the auto-generator
node generate-media-arrays.js

# Check if Node.js is installed
node --version

# Make the script executable (optional)
chmod +x generate-media-arrays.js
./generate-media-arrays.js
```

---

**Last Updated:** November 2025
**Status:** ✅ Auto-generator ready to use
