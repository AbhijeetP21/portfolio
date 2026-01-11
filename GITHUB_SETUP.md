# GitHub Repository Setup

## Quick Setup Instructions

Your code is committed and ready to push! Follow these steps:

### Option 1: Create Repository on GitHub Website (Recommended)

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `portfolio`
3. **Visibility**: Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**
6. **Then run this command** in your terminal:
   ```bash
   cd /Users/u1528773/Downloads/portfolio
   git push -u origin main
   ```

### Option 2: Use GitHub CLI (if installed)

If you have GitHub CLI installed:
```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

### After Pushing

Once pushed, your repository will be available at:
**https://github.com/AbhijeetP21/portfolio**

Then you can deploy to Vercel by:
1. Go to https://vercel.com
2. Import the `portfolio` repository
3. Deploy!
