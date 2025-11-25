#!/usr/bin/env node

/**
 * Auto-generate media arrays for gallery and music
 * Run this script whenever you add new images or music files
 * Usage: node generate-media-arrays.js
 */

const fs = require('fs');
const path = require('path');

// Paths
const libraryPath = path.join(__dirname, 'assets', 'images', 'library');
const musicPath = path.join(__dirname, 'assets', 'music');
const scriptPath = path.join(__dirname, 'js', 'script.js');

// Read directory and filter for image files
function getImageFiles(dir) {
    try {
        const files = fs.readdirSync(dir);
        return files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
        }).sort();
    } catch (err) {
        console.log(`⚠️  Directory not found: ${dir}`);
        return [];
    }
}

// Read directory and filter for music files
function getMusicFiles(dir) {
    try {
        const files = fs.readdirSync(dir);
        return files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.mp3', '.wav', '.ogg'].includes(ext);
        }).sort();
    } catch (err) {
        console.log(`⚠️  Directory not found: ${dir}`);
        return [];
    }
}

// Generate caption from filename
function generateCaption(filename) {
    const nameWithoutExt = path.basename(filename, path.extname(filename));
    const words = nameWithoutExt.split(/[-_\s]+/);
    const capitalized = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
    return `${capitalized} / ${capitalized}`;
}

// Generate image library array code
function generateImageLibraryCode(images) {
    if (images.length === 0) {
        return `const imageLibrary = [\n    // No images found in assets/images/library/\n    // Add images and run: node generate-media-arrays.js\n];`;
    }
    
    const imageEntries = images.map(img => {
        const caption = generateCaption(img);
        return `    { src: 'assets/images/library/${img}', caption: '${caption}' }`;
    }).join(',\n');
    
    return `const imageLibrary = [\n${imageEntries}\n];`;
}

// Generate music playlist array code
function generateMusicPlaylistCode(musicFiles) {
    if (musicFiles.length === 0) {
        return `const musicPlaylist = [\n    // No music files found in assets/music/\n    // Add MP3 files and run: node generate-media-arrays.js\n];`;
    }
    
    const musicEntries = musicFiles.map(file => 
        `    'assets/music/${file}'`
    ).join(',\n');
    
    return `const musicPlaylist = [\n${musicEntries}\n];`;
}

// Update script.js file
function updateScriptFile() {
    console.log('🔍 Scanning folders...\n');
    
    // Get files
    const images = getImageFiles(libraryPath);
    const musicFiles = getMusicFiles(musicPath);
    
    console.log(`📸 Found ${images.length} image(s):`);
    images.forEach(img => console.log(`   - ${img}`));
    console.log();
    
    console.log(`🎵 Found ${musicFiles.length} music file(s):`);
    musicFiles.forEach(file => console.log(`   - ${file}`));
    console.log();
    
    // Read script.js
    let scriptContent = fs.readFileSync(scriptPath, 'utf8');
    
    // Replace imageLibrary array
    const imageLibraryCode = generateImageLibraryCode(images);
    scriptContent = scriptContent.replace(
        /const imageLibrary = \[[\s\S]*?\];/,
        imageLibraryCode
    );
    
    // Replace musicPlaylist array
    const musicPlaylistCode = generateMusicPlaylistCode(musicFiles);
    scriptContent = scriptContent.replace(
        /const musicPlaylist = \[[\s\S]*?\];/,
        musicPlaylistCode
    );
    
    // Write back to file
    fs.writeFileSync(scriptPath, scriptContent, 'utf8');
    
    console.log('✅ Successfully updated js/script.js!\n');
    console.log('📝 Summary:');
    console.log(`   - ${images.length} images in carousel/modal`);
    console.log(`   - ${musicFiles.length} songs in playlist`);
    console.log('\n🎉 Refresh your browser to see the changes!');
}

// Run the script
try {
    updateScriptFile();
} catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
}
