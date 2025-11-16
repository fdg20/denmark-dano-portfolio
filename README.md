# Denmark Dano Portfolio

A modern portfolio website replicated from [Framer Portfolite Template](https://portfolite.framer.website/#projects), built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Smooth scrolling animations
- 🎨 Modern, responsive design
- 📱 Mobile-friendly layout
- 🚀 Optimized for GitHub Pages
- ⚡ Fast performance with Next.js
- 🎭 Beautiful animations with Framer Motion

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
npm run build
```

This will create an `out` folder with static files ready for deployment.

## Deploying to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `denmark-dano-portfolio`
3. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/fdg20/denmark-dano-portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/fdg20/denmark-dano-portfolio`
2. Click **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to main

Your site will be available at:
`https://fdg20.github.io/denmark-dano-portfolio/`

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/          # Static assets
└── .github/         # GitHub Actions workflow
```

## Customization

### Update Content

Edit the component files in `/components/` to customize:
- Hero section text
- Project cards
- About section
- Services
- Testimonials
- FAQ questions
- Contact information

### Update Colors

Edit `app/globals.css` to change the color scheme:
```css
:root {
  --background: #your-color;
  --foreground: #your-color;
}
```

### Add Images

Place your project images in the `/public/` folder and update the image paths in `components/Projects.tsx`.

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GitHub Pages** - Hosting

## License

This project is open source and available for personal use.

---

Designed with ❤️ using Next.js and Framer Motion
