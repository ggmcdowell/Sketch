# 🚀 Deploy Your RPG Game to GitHub Pages

## Your Game is Ready! Follow These Simple Steps:

Your game is fully built and ready to deploy. Since I can't push directly to the `main` branch, you'll need to complete the deployment through GitHub's web interface. It's super easy!

---

## 📋 Step-by-Step Deployment (5 minutes)

### Step 1: Create a Pull Request

1. **Visit your repository:**
   ```
   https://github.com/ggmcdowell/Sketch
   ```

2. **You should see a yellow banner** that says:
   > "claude/skip-permissions-flag-011CUK5VTvmH4nngkjjEDNWj had recent pushes"

   Click the **"Compare & pull request"** button

3. **If you don't see the banner:**
   - Click the "Pull requests" tab
   - Click "New pull request"
   - Set base: `main` (or `master`)
   - Set compare: `claude/skip-permissions-flag-011CUK5VTvmH4nngkjjEDNWj`
   - Click "Create pull request"

4. **Add a title:**
   ```
   Add RPG Game with Combat, Quests, and Mobile Support
   ```

5. **Click "Create pull request"**

---

### Step 2: Merge the Pull Request

1. **Review the changes** (optional - you can see all the files I created)

2. **Click the green "Merge pull request" button**

3. **Click "Confirm merge"**

4. **Done!** The code is now on your main branch

---

### Step 3: Enable GitHub Pages

1. **Go to Settings:**
   ```
   https://github.com/ggmcdowell/Sketch/settings/pages
   ```

2. **Under "Source":**
   - Select: **GitHub Actions**
   - (You might see "Deploy from a branch" - change it to "GitHub Actions")

3. **Save the settings**

---

### Step 4: Wait for Deployment (2-3 minutes)

1. **Go to the Actions tab:**
   ```
   https://github.com/ggmcdowell/Sketch/actions
   ```

2. **You should see** a workflow running called "Deploy to GitHub Pages"
   - It will show a yellow dot (in progress)
   - Wait for it to turn into a green checkmark ✓

3. **When complete,** your game will be live at:
   ```
   https://ggmcdowell.github.io/Sketch/
   ```

---

## 🎮 Your Game URL

Once deployed, share this link:
```
https://ggmcdowell.github.io/Sketch/
```

**Perfect for:**
- Testing on your iPhone
- Sharing with friends
- Playing from anywhere

---

## 🔧 Troubleshooting

**"Actions" tab disabled?**
- Go to Settings → Actions → General
- Allow "All actions and reusable workflows"
- Save

**No "GitHub Actions" option in Pages settings?**
- Make sure you've merged the PR first
- The workflow file must be on the main branch

**Deployment failed?**
- Check the Actions tab for error messages
- Make sure the workflow completed successfully

**Game not loading?**
- Wait a few minutes for DNS propagation
- Try clearing browser cache
- Check the Actions tab to confirm deployment succeeded

---

## 📱 Mobile Testing

Once live, open on your iPhone:
1. Visit the URL in Safari
2. You'll see touch controls automatically
3. Random player name will be generated
4. Start playing!

**Add to Home Screen:**
1. Tap the Share button in Safari
2. Scroll down and tap "Add to Home Screen"
3. Your game becomes a full-screen app!

---

## ✅ What's Included

Your deployed game has:
- ✅ Turn-based combat system
- ✅ Quest system with rewards
- ✅ Goblins and Slimes enemies
- ✅ Mobile touch controls
- ✅ Portrait mode optimization
- ✅ Auto-generated player names
- ✅ PWA support (add to home screen)
- ✅ Python-generated pixel art sprites

---

## 🎉 That's It!

Follow the 4 steps above and your game will be live on the internet!

**Need help?**
- Open an issue on GitHub
- Check the Actions tab for deployment status
- Make sure GitHub Pages is set to "GitHub Actions" mode

---

**Estimated time:** 5 minutes
**Cost:** FREE ✨
**URL:** https://ggmcdowell.github.io/Sketch/

Happy gaming! 🎮⚔️
