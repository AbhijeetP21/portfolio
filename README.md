# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, glass-morphism design with smooth animations
- 🌓 Dark/Light theme toggle with system preference detection
- 🖱️ Custom cursor effects with flashlight overlay
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js
- 🎯 TypeScript for type safety
- 🎭 Smooth scroll animations and reveal effects

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter & JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main page component
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Patents.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Toast.tsx
│   │   └── BackgroundEffects.tsx
│   ├── data/
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── patents.ts
│   │   └── skills.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useCursor.ts
│   │   ├── useScrollReveal.ts
│   │   └── useNavbar.ts
│   └── contexts/
│       └── ToastContext.tsx
├── public/
│   └── Abhijeet_MASTER_Resume (1).pdf
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `.next` folder`.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

Alternatively, you can deploy to:
- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Connect your repository
- **Any static host**: Run `npm run build` and deploy the `out` folder (if configured for static export)

## Customization

### Updating Content

- **Experience**: Edit `src/data/experience.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Skills**: Edit `src/data/skills.ts`
- **Patents/Awards**: Edit `src/data/patents.ts`

### Styling

- **Colors**: Modify `tailwind.config.ts`
- **Global Styles**: Edit `src/app/globals.css`
- **Component Styles**: Use Tailwind classes in component files

## License

This project is open source and available under the MIT License.
