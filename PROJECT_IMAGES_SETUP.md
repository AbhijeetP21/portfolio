# Project Images Setup Guide

## Adding Images for Projects

To add screenshots/images for your projects, follow these steps:

### 1. Image Directory Structure

Place your project images in the `public/projects/` directory:

```
public/
  projects/
    dinodash/
      title-screen.png
      gameplay.png
    [project-name]/
      screenshot1.png
      screenshot2.png
```

### 2. Adding Images to Project Data

In `src/data/projects.ts`, add an `images` array to your project:

```typescript
{
  title: 'Your Project',
  // ... other fields
  images: [
    '/projects/your-project/screenshot1.png',
    '/projects/your-project/screenshot2.png',
  ],
}
```

### 3. Image Requirements

- **Format**: PNG, JPG, or WebP
- **Recommended size**: 1200x800px or similar aspect ratio
- **File size**: Keep under 500KB per image for optimal performance
- **Naming**: Use descriptive names (e.g., `title-screen.png`, `gameplay.png`)

### 4. Dinodash Project Images

For the Dinodash project, add your screenshots to:
- `public/projects/dinodash/title-screen.png`
- `public/projects/dinodash/gameplay.png`

The images will automatically appear in:
- Project card thumbnail
- Lightbox gallery (click image or screenshot button)
- Mobile swipe gesture support

### 5. Image Optimization Tips

- Use tools like [TinyPNG](https://tinypng.com/) to compress images
- Consider using WebP format for better compression
- Ensure images are optimized for web (not too large)

### 6. Testing

After adding images:
1. Restart your dev server if needed
2. Check that images load correctly
3. Test lightbox functionality
4. Test mobile swipe gestures
