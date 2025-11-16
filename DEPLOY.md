# Deployment Guide

## Quick Deploy to GitHub

Follow these steps to deploy your portfolio to GitHub Pages:

### 1. Initialize Git Repository

```bash
cd "/Users/kram/Desktop/New Portfolio"
git init
```

### 2. Add All Files

```bash
git add .
```

### 3. Create Initial Commit

```bash
git commit -m "Initial commit: Portfolio website"
```

### 4. Add GitHub Remote

```bash
git remote add origin https://github.com/fdg20/denmark-dano-portfolio.git
```

### 5. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

### 6. Enable GitHub Pages

1. Go to: https://github.com/fdg20/denmark-dano-portfolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save

### 7. Wait for Deployment

GitHub Actions will automatically:
- Build your Next.js site
- Deploy to GitHub Pages
- Make it available at: `https://fdg20.github.io/denmark-dano-portfolio/`

The first deployment may take 2-3 minutes. You can check the progress in the **Actions** tab.

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

GitHub Actions will automatically rebuild and redeploy your site.

## Troubleshooting

### Build Fails

- Check the **Actions** tab in GitHub for error messages
- Ensure all dependencies are in `package.json`
- Verify `next.config.js` has `output: 'export'`

### Site Not Loading

- Wait a few minutes after pushing (first deployment takes time)
- Check GitHub Pages settings are set to **GitHub Actions**
- Verify the repository is public (required for free GitHub Pages)

### Images Not Showing

- Ensure images are in the `/public/` folder
- Use relative paths: `/image.jpg` not `./image.jpg`
- Check file names match exactly (case-sensitive)

## Need Help?

- GitHub Actions logs: Check the **Actions** tab
- GitHub Pages docs: https://docs.github.com/en/pages
- Next.js deployment: https://nextjs.org/docs/deployment

