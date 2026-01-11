# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your resume file:**
   - Place your resume PDF in the `public/` folder
   - The file should be named: `Abhijeet_MASTER_Resume (1).pdf`
   - Or update the path in `src/components/Hero.tsx` if you use a different filename

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Important Notes

### Resume File
Make sure your resume PDF is in the `public/` folder. The current path in the Hero component is:
```
/Abhijeet_MASTER_Resume (1).pdf
```

If your file has a different name, update line 295 in `src/components/Hero.tsx`.

### Font Awesome Icons
The project uses Font Awesome 6.4.0 via CDN. All icons should work out of the box. If you need to add new icons, make sure they're available in Font Awesome 6.4.0.

### Customization
- **Content**: Edit files in `src/data/` to update your information
- **Styling**: Modify `tailwind.config.ts` for theme customization
- **Components**: All components are in `src/components/` and can be customized

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Connect repository
- **Static Export**: Configure `next.config.js` for static export

## Troubleshooting

### Icons not showing
- Check that Font Awesome CDN is loading (inspect browser console)
- Verify icon class names match Font Awesome 6.4.0

### Theme not persisting
- Check browser localStorage is enabled
- Verify `useTheme` hook is working (check browser console)

### Cursor effects not working
- Cursor effects only work on devices with fine pointer (mouse/trackpad)
- Touch devices automatically hide cursor elements
