# Mobile Testing Guide

## Quick Deploy Options for Mobile Testing

### Option 1: Netlify Drop (Fastest - No Account Required)

1. **Build the game:**
   ```bash
   npm run build
   ```

2. **Visit [Netlify Drop](https://app.netlify.com/drop)**

3. **Drag and drop** the `dist/client` folder onto the page

4. **Get instant URL** - You'll receive a live URL like `https://random-name.netlify.app`

5. **Test on your iPhone!** - Open the URL in Safari

---

### Option 2: Vercel (Fast - GitHub Integration)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd dist/client
   vercel --prod
   ```

3. **Follow prompts** and get your live URL

---

### Option 3: GitHub Pages (Best for Permanent Hosting)

1. **Merge this branch to main:**
   ```bash
   git checkout main
   git merge claude/skip-permissions-flag-011CUK5VTvmH4nngkjjEDNWj
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Pages section
   - Source: GitHub Actions
   - Wait ~2 minutes for deployment

3. **Your game will be at:**
   ```
   https://ggmcdowell.github.io/Sketch/
   ```

---

### Option 4: Python Simple Server (Local Network Testing)

If your iPhone is on the same WiFi network:

1. **Build and serve:**
   ```bash
   npm run build
   cd dist/client
   python3 -m http.server 8080
   ```

2. **Find your computer's IP:**
   ```bash
   # Mac/Linux:
   ifconfig | grep "inet "

   # Or just:
   hostname -I
   ```

3. **On iPhone Safari, visit:**
   ```
   http://YOUR_IP_ADDRESS:8080
   ```
   Example: `http://192.168.1.100:8080`

---

## Mobile Features Implemented

✅ **Touch Controls** - On-screen D-pad and action buttons
✅ **Portrait Mode** - Optimized for vertical phone orientation
✅ **Full Screen** - No browser chrome, immersive gameplay
✅ **iPhone Notch Support** - Safe area insets respected
✅ **PWA Ready** - Can be added to home screen
✅ **No Pull-to-Refresh** - Gestures won't interfere with gameplay
✅ **Touch-Optimized Dialogs** - Large touch targets for combat/quests

## Testing Checklist

When testing on mobile, verify:

- [ ] Touch controls appear (D-pad, A/B buttons)
- [ ] Character moves smoothly with touch
- [ ] Combat menu is easily tappable
- [ ] Text dialogs are readable
- [ ] Game fills the screen properly
- [ ] No unwanted scrolling/zooming
- [ ] Portrait orientation works well
- [ ] Can interact with NPCs via touch
- [ ] Quest menu is accessible

## Troubleshooting

**Controls not showing?**
- The mobile GUI should auto-detect touch devices
- Try refreshing the page
- Check browser console for errors

**Game too small/big?**
- The game auto-scales to fit your screen
- Try rotating to portrait mode
- Clear browser cache and reload

**Can't interact with anything?**
- Use the on-screen action button (usually marked "A")
- Or tap directly on NPCs/enemies

---

**Need help?** Open an issue on GitHub!
