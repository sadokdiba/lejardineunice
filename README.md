# Le Jardin Eunice - Bilingual Daycare Website

A beautiful, kid-friendly bilingual (English/French) website for a Canadian Garderie/Crèche.

## ✨ Features

- 🌍 **Bilingual Support**: Easy toggle between English and French
- 📱 **Mobile-First Responsive Design**: Works perfectly on all devices
- 🎨 **Soft Color Palette**: Kid-friendly colors (soft pink, sky blue, golden yellow)
- ✨ **Smooth Scroll Animations**: Beautiful fade-in effects as you scroll
- 📧 **Contact Form**: Opens email client with mailto: link
- 📞 **Sticky Action Buttons**: WhatsApp, Phone, and Facebook quick access
- 🎵 **Background Music**: Optional soothing music player
- 🖼️ **Image Gallery**: Showcase daycare activities
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## 📂 Project Structure

```
lejardineunice/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling and animations
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   ├── images/
│   │   ├── logo-square.png # Your square logo (add this)
│   │   ├── logo-text.png   # Your text logo (add this)
│   │   └── README.md       # Logo setup instructions
│   └── music/
│       ├── background-music.mp3 # Background music (add this)
│       └── README.md       # Music setup instructions
├── GETTING-STARTED.md      # Quick start guide
└── README.md               # This file
```

## 🚀 Quick Start

1. **Add Your Logos**: Place your logo files in `assets/images/`:
   - `logo-square.png` (square logo with illustration)
   - `logo-text.png` (text-only version)
2. **Add Music (Optional)**: Place `background-music.mp3` in `assets/music/`
3. **Update Contact Info**: Edit phone number, email, and social media links in `index.html`
4. **Open in Browser**: Simply open `index.html` in your web browser

## 📝 Customization

### Update Contact Information

In `index.html`, search and replace:
- Phone: `(514) 123-4567` → Your phone number
- Email: `info@lejardineunice.ca` → Your email
- WhatsApp: `15141234567` → Your WhatsApp number
- Facebook: Update the Facebook link URL

### Change Colors

In `styles.css`, update the CSS variables:
```css
:root {
    --primary-color: #FFB6C1;    /* Soft Pink */
    --secondary-color: #87CEEB;  /* Sky Blue */
    --accent-color: #FFD700;     /* Golden Yellow */
    /* Modify these to match your branding */
}
```

### Add Your Own Images

Replace the Unsplash image URLs in `index.html` with your own images:
- Gallery images
- About section image
- Hero background image (in CSS)

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings → Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/lejardineunice`

### GoDaddy
1. Upload all files to your hosting via FTP
2. Ensure `index.html` is in the root directory
3. Access your domain

### Squarespace
1. Use a Code Block to embed the HTML
2. Upload CSS and JS files as custom files
3. Note: Some features may be limited on Squarespace

## 📋 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Background Music

To add background music:
1. Find a royalty-free soothing music file (MP3 format)
2. Name it `background-music.mp3`
3. Place it in `assets/music/` folder
4. Music will auto-play on page load (or first user interaction)
5. Users can pause/play with the music button (centered top)

**Recommended Sources for Free Music:**
- [Pixabay Music](https://pixabay.com/music/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- [Free Music Archive](https://freemusicarchive.org/)

## 📧 Contact Form

The contact form uses a `mailto:` link that:
- Opens the user's default email client
- Pre-fills the subject and body with form data
- Works without any backend or server
- Compatible with Outlook, Apple Mail, Gmail desktop, etc.

## 🎨 Color Scheme

The website uses a soft, nature-inspired color palette from your logo:
- **Primary (Soft Sage Green)**: #A8C5A0
- **Secondary (Muted Green)**: #9AB89A
- **Accent (Soft Peach)**: #F4C89D
- **Text Brown**: #8B7355

## 📱 Sections

1. **Hero**: Eye-catching landing section with call-to-action
2. **About**: Introduction to your daycare
3. **Services**: Detailed service offerings
4. **Gallery**: Photo showcase
5. **Contact**: Form and location information
6. **Footer**: Quick links and social media

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No dependencies, lightweight
- **Font Awesome**: Icons
- **Google Fonts**: Poppins and Quicksand fonts

## 📄 License

This project is open source and available for personal and commercial use.

## 💡 Support

For questions or issues, contact the developer or open an issue in the repository.

---

Made with ❤️ for Le Jardin Eunice
