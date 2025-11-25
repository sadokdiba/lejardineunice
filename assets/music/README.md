# Background Music Setup

## 🎵 Playlist Feature - Now Supports Multiple Songs!

The music player now supports **playlists** - it will automatically play the next song when one finishes and loop back to the beginning.

## How to Add More Music

1. **Find royalty-free music files:**
   - [Pixabay Music](https://pixabay.com/music/) - Free downloads
   - [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Royalty-free
   - [Free Music Archive](https://freemusicarchive.org/) - Creative Commons

2. **Recommended music types:**
   - Children's lullabies
   - Gentle piano instrumentals
   - Nature sounds (birds, water)
   - Soft classical music

3. **Save the files:**
   - Add MP3 files to this folder: `/assets/music/`
   - Name them descriptively: `song1.mp3`, `song2.mp3`, `lullaby.mp3`, etc.
   - Keep each file under 5MB for faster loading

## Update the Playlist

After adding music files, update the `musicPlaylist` array in `js/script.js` (around line 200):

```javascript
const musicPlaylist = [
    'assets/music/background-music.mp3',
    'assets/music/song2.mp3',
    'assets/music/lullaby.mp3',
    // Add more files here...
];
```

## Playlist Features

- ✅ **Auto-advance**: Next song plays automatically when one ends
- ✅ **Loop playlist**: After last song, starts from the beginning
- ✅ **Auto-play**: Music starts on page load or first click
- ✅ **Play/Pause control**: Toggle with the music button

## Music Button

- 🎵 Shows music icon when paused
- ⏸️ Shows pause icon when playing
- Button has a gentle pulse animation when music is playing
- Centered at the top with the language toggle

## File Size Tips

- Aim for 2-5MB per file
- Use 128kbps or 192kbps MP3 quality
- Compress large files at [MP3Smaller.com](https://www.mp3smaller.com/)

---

**Current Status**: 1 song in playlist (`background-music.mp3`)

