# Logo Setup Instructions

## Your Logo Files

You have two beautiful logo variations:

1. **Square Logo with Border** (Children with tree, flowers, sun)
   - Save this as: `logo-square.png`
   - This is currently set as the main logo in the navigation

2. **Text Only Logo** ("Le Jardin d'Eunice Garderie éducative")
   - Save this as: `logo-text.png`
   - Can be used as alternative or in footer

## How to Add Your Logos

1. Save both logo images from your attachments
2. Name them:
   - `logo-square.png` (the square one with illustration)
   - `logo-text.png` (the text-only version)
3. Place them in this folder: `/assets/images/`

## Logo Colors Extracted

The website now uses your logo's natural color palette:
- 🌿 Soft Sage Green: #A8C5A0 (primary)
- 🌳 Muted Green: #9AB89A (secondary)
- 🌸 Soft Peach: #F4C89D (accent)
- 🤎 Warm Brown: #8B7355 (text from logo)

## Already Configured

The HTML is already set to use `logo-square.png` in the navigation.
Once you place the file here, it will display automatically!

## Alternative: Use Text Logo

If you prefer the text-only logo in navigation, change line 29 in `index.html`:
```html
<img src="assets/images/logo-text.png" alt="Le Jardin Eunice Logo" id="logoImg">
```

The logo will display at 55px height with automatic width scaling.
