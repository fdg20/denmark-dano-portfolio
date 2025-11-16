# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **View your site:**
   Open [http://localhost:3000](http://localhost:3000)

## Replicating Your Framer Design

### Option 1: Share Your Framer Design
If you have a Framer design link, I can help you:
- Extract the design specifications
- Recreate the components and layout
- Match colors, typography, and spacing

### Option 2: Manual Recreation
1. Open your Framer design
2. Note down:
   - Colors (hex codes)
   - Typography (fonts, sizes, weights)
   - Spacing and layout
   - Component structure
3. Update the components in `/app/page.tsx` and `/components/` to match

## Publishing to GitHub

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Don't initialize with README (we already have one)

### Step 2: Push Your Code
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to main

Your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Customization

### Update Colors
Edit `app/globals.css` to change the color scheme:
```css
:root {
  --background: #your-color;
  --foreground: #your-color;
}
```

### Update Content
Edit `app/page.tsx` to customize:
- Hero section text
- Project cards
- Contact information

### Add Components
Create new components in a `components/` folder and import them in your pages.

## Need Help?

If you have a Framer design link, share it and I can help replicate it exactly!

