# QUICK START GUIDE - Le Jardin Eunice Website

## ✅ What's Been Created

Your complete bilingual daycare website with:
- ✅ HTML structure (index.html)
- ✅ Beautiful CSS styling (styles.css)
- ✅ Interactive JavaScript (script.js)
- ✅ English/French language toggle
- ✅ Contact form with mailto functionality
- ✅ Sticky WhatsApp, Phone, and Facebook buttons
- ✅ Smooth scroll animations
- ✅ Mobile-responsive design
- ✅ Google Maps integration (your address: 1655 Mnt Sainte-Thérèse)

## 🎯 IMMEDIATE ACTION ITEMS

### 1. Add Your Logo (REQUIRED)
- Save your logo as `logo.png` in this folder
- Recommended: 200px width, transparent background
- The colors in your logo should work with the pink/blue theme

### 2. Add Background Music (OPTIONAL)
- Download a royalty-free lullaby/gentle music MP3
- Save it as `background-music.mp3` in this folder
- See `music-instructions.txt` for download sources

### 3. Update Contact Information
Open `index.html` and search/replace:
- Phone: `(514) 123-4567` → YOUR PHONE
- Email: `info@lejardineunice.ca` → YOUR EMAIL
- WhatsApp: `15141234567` → YOUR WHATSAPP (format: country code + number)
- Facebook: Update the Facebook URL (line 397 and 566)

### 4. Test Locally
1. Double-click `index.html` to open in your browser
2. Test the language toggle (EN/FR button)
3. Test the contact form
4. Test on mobile (resize browser or use dev tools)

## 🌐 DEPLOYMENT OPTIONS

### Option A: GitHub Pages (FREE & RECOMMENDED)
```bash
# 1. Create a GitHub repository
# 2. In terminal, navigate to this folder:
cd /Users/sadokdiba/Desktop/personal-folder/tech-data-coding-and-courses/coding-projects/lejardineunice

# 3. Initialize git and push:
git init
git add .
git commit -m "Initial commit - Le Jardin Eunice website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lejardineunice.git
git push -u origin main

# 4. Enable GitHub Pages in repo settings
# Your site will be live at: https://YOUR_USERNAME.github.io/lejardineunice
```

### Option B: GoDaddy Hosting
1. Log into GoDaddy cPanel
2. Open File Manager
3. Upload all files to `public_html` folder
4. Access via your domain

### Option C: Squarespace
1. Create a new page
2. Add a Code Block
3. Copy/paste HTML content
4. Upload CSS/JS as custom files
(Note: Some features may be limited)

## 🎨 CUSTOMIZATION TIPS

### Change Colors
Edit `styles.css` lines 15-20:
```css
--primary-color: #FFB6C1;    /* Change this for main color */
--secondary-color: #87CEEB;  /* Change this for secondary color */
```

### Add Your Own Photos
Replace image URLs in `index.html`:
- Search for `images.unsplash.com`
- Replace with your own image URLs or local files

### Modify Services
Edit the services section in `index.html` (lines 128-210)
- Change service names
- Update descriptions
- Add/remove service cards

## 📞 CONTACT INFORMATION TO UPDATE

Search for these in `index.html` and replace:

1. **Phone Number**: `(514) 123-4567`
   - Line 328 (in contact info)
   - Line 383 (sticky phone button)
   - Line 388 (WhatsApp button)

2. **Email**: `info@lejardineunice.ca`
   - Line 334 (in contact info)
   - Line 68 in `script.js` (mailto link)

3. **Facebook Link**: `https://facebook.com`
   - Line 397 (in contact section)
   - Line 566 (in footer)
   - Line 393 (sticky button)

4. **Instagram** (Optional): Add your Instagram handle

## ✨ FEATURES EXPLANATION

### Bilingual Toggle
- Click "EN / FR" button in top right
- Automatically translates all text
- Remembers language preference during session

### Contact Form
- Fills out email with all form data
- Opens user's default email client (Outlook, Apple Mail, etc.)
- No backend needed - 100% static

### Sticky Buttons
- Appear after scrolling down
- WhatsApp: Direct messaging
- Phone: One-tap calling
- Facebook: Link to your page

### Music Player
- Click music icon to play/pause
- Loops automatically
- User must click to start (browser requirement)

## 🐛 TROUBLESHOOTING

**Logo not showing?**
- Ensure file is named exactly `logo.png`
- Check file is in the same folder as `index.html`

**Music not playing?**
- Ensure file is named exactly `background-music.mp3`
- Check file format is MP3
- Remember: user must click the music button

**Contact form not working?**
- Mailto links require a default email client
- Won't work on mobile apps (Instagram, Facebook browser)
- Test in Chrome/Safari on desktop

**Site not responsive?**
- Clear browser cache
- Test in different browsers
- Use Chrome DevTools to test mobile view

## 📱 MOBILE TESTING

1. Open in Chrome
2. Press F12 (open DevTools)
3. Click device icon (toggle device toolbar)
4. Test on different screen sizes

## 🎯 CHECKLIST BEFORE GOING LIVE

- [ ] Logo added
- [ ] Contact info updated (phone, email, WhatsApp)
- [ ] Facebook link updated
- [ ] Tested on desktop browser
- [ ] Tested on mobile
- [ ] Tested contact form
- [ ] Added background music (optional)
- [ ] Replaced placeholder images with real photos
- [ ] Spell-checked all text (EN & FR)
- [ ] Tested language toggle

## 💡 FUTURE ENHANCEMENTS (Optional)

- Add Instagram feed integration
- Add photo upload functionality
- Create a blog section
- Add testimonials from parents
- Create a staff profiles page
- Add a calendar for events

## 📞 NEED HELP?

If you encounter issues:
1. Check browser console (F12) for errors
2. Verify all files are in the correct folder
3. Ensure file names match exactly (case-sensitive)

---

**Ready to launch?** Follow the deployment steps above! 🚀

Your website is professional, beautiful, and ready for parents to discover Le Jardin Eunice! 🌸
