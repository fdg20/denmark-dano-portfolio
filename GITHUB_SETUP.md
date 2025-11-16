# GitHub Repository Setup - Step by Step

## ⚠️ Important: Create Repository on GitHub First!

You need to create the repository on GitHub **before** pushing. Follow these steps:

### Step 1: Create Repository on GitHub

1. Go to: **https://github.com/new**
2. Repository name: `denmark-dano-portfolio`
3. Description (optional): "Portfolio website"
4. **Make sure it's PUBLIC** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README" (we already have files)
6. **DO NOT** add .gitignore or license
7. Click **"Create repository"**

### Step 2: Push Your Code

After creating the repository, run these commands in your terminal:

```bash
cd "/Users/kram/Desktop/New Portfolio"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add GitHub remote (replace with your actual repo URL if different)
git remote add origin https://github.com/fdg20/denmark-dano-portfolio.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to: https://github.com/fdg20/denmark-dano-portfolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. Click **Save**

### Step 4: Wait for Deployment

- GitHub Actions will automatically build and deploy
- Check the **Actions** tab to see progress
- Your site will be live at: `https://fdg20.github.io/denmark-dano-portfolio/`

## Troubleshooting

### "Repository not found" Error

This means the repository doesn't exist on GitHub yet. **You must create it first** using Step 1 above.

### "Permission denied" Error

- Make sure you're logged into GitHub
- Check that you have write access to the repository
- Verify the repository name matches exactly: `denmark-dano-portfolio`

### Alternative: Use GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create denmark-dano-portfolio --public --source=. --remote=origin --push
```

This will create the repo and push in one command!

