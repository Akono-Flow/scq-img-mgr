# Quiz Competition Images Gallery

A modern, responsive web application for displaying quiz competition images with advanced filtering, search, and viewing capabilities.

## Features

✨ **Core Features**
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔍 Real-time search across questions, topics, and descriptions
- 🎯 Advanced filtering (All, Today, This Week, This Month)
- 📊 Multiple sorting options (Newest, Oldest, Topic A-Z)
- 🖼️ Lightbox viewer with keyboard navigation
- ⬇️ Individual image download capability
- 🚀 Lazy loading for optimal performance
- 📈 Live statistics display

🎨 **User Experience**
- Clean, modern interface
- Smooth animations and transitions
- Touch-friendly controls
- Keyboard navigation support (Arrow keys, Escape)
- No results messaging
- Loading states

## File Structure

```
quiz-images/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── images.json         # Image metadata (YOU UPDATE THIS DAILY)
├── images/             # Image storage folder
│   ├── 2025-02-22/    # Organized by date
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   └── ...
│   ├── 2025-02-21/
│   │   └── ...
│   └── ...
└── README.md          # This file
```

## Installation & Setup

### Step 1: Create the Folder Structure

1. In your GitHub repository, create a new folder called `quiz-images`
2. Inside `quiz-images`, create an `images` folder
3. Upload all the files from this package

### Step 2: Initial Setup

1. Copy the provided files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `images.json`

2. Commit and push to GitHub:
```bash
git add quiz-images/
git commit -m "Add quiz images gallery app"
git push origin main
```

3. Your app will be available at:
   - `https://yourusername.github.io/your-repo/quiz-images/`
   - Or with your custom domain: `https://yourdomain.com/quiz-images/`

### Step 3: Add to Your Gallery

In your main gallery JavaScript file, add this entry:

```javascript
{
    title: "Quiz Competition Images",
    description: "View all images from daily quiz competitions with advanced search and filtering",
    url: "quiz-images/index.html",  // or your custom domain path
    category: "Education",
    icon: "🖼️"
}
```

## Daily Update Workflow

Every day when you receive 9 new quiz images, follow this simple process:

### Step 1: Organize Images

1. Create a new folder in `images/` with today's date: `images/2025-02-22/`
2. Add your 9 images to this folder
3. Name them clearly: `img1.jpg`, `img2.jpg`, ..., `img9.jpg`

### Step 2: Update images.json

Open `images.json` and add 9 new entries. Here's the template:

```json
{
  "id": 19,
  "date": "2025-02-22",
  "question": "What is the chemical formula for ammonia?",
  "topic": "Inorganic Chemistry",
  "description": "Basic question about common nitrogen compound.",
  "imageUrl": "images/2025-02-22/img1.jpg"
}
```

**Field Explanations:**
- `id`: Unique number (increment from last entry)
- `date`: Today's date in YYYY-MM-DD format
- `question`: The quiz question shown in the image
- `topic`: Subject category (e.g., "Organic Chemistry", "Thermodynamics")
- `description`: Brief context or additional info
- `imageUrl`: Path to the image file

### Step 3: Commit & Push

```bash
git add images.json images/2025-02-22/
git commit -m "Add quiz images for Feb 22, 2025"
git push origin main
```

GitHub Pages will automatically update within a few minutes!

## Complete Example: Adding 9 Images

Let's say it's February 22, 2025, and you have 9 new images:

**Step 1:** Create folder `images/2025-02-22/`

**Step 2:** Add this to `images.json`:

```json
{
  "images": [
    // ... existing images ...
    {
      "id": 19,
      "date": "2025-02-22",
      "question": "What is the molecular geometry of methane?",
      "topic": "Molecular Geometry",
      "description": "VSEPR theory application for CH4.",
      "imageUrl": "images/2025-02-22/img1.jpg"
    },
    {
      "id": 20,
      "date": "2025-02-22",
      "question": "Calculate the molarity of this solution",
      "topic": "Stoichiometry",
      "description": "Concentration calculation problem.",
      "imageUrl": "images/2025-02-22/img2.jpg"
    },
    {
      "id": 21,
      "date": "2025-02-22",
      "question": "Identify the type of chemical bond",
      "topic": "Chemical Bonding",
      "description": "Ionic vs covalent bonding question.",
      "imageUrl": "images/2025-02-22/img3.jpg"
    },
    {
      "id": 22,
      "date": "2025-02-22",
      "question": "What is the common name of this compound?",
      "topic": "Nomenclature",
      "description": "Organic compound naming.",
      "imageUrl": "images/2025-02-22/img4.jpg"
    },
    {
      "id": 23,
      "date": "2025-02-22",
      "question": "Balance this redox reaction",
      "topic": "Redox Chemistry",
      "description": "Half-reaction method application.",
      "imageUrl": "images/2025-02-22/img5.jpg"
    },
    {
      "id": 24,
      "date": "2025-02-22",
      "question": "What is the hybridization of carbon in ethene?",
      "topic": "Organic Chemistry",
      "description": "sp2 hybridization in alkenes.",
      "imageUrl": "images/2025-02-22/img6.jpg"
    },
    {
      "id": 25,
      "date": "2025-02-22",
      "question": "Calculate the heat of reaction",
      "topic": "Thermochemistry",
      "description": "Calorimetry calculation.",
      "imageUrl": "images/2025-02-22/img7.jpg"
    },
    {
      "id": 26,
      "date": "2025-02-22",
      "question": "What is the empirical formula?",
      "topic": "Stoichiometry",
      "description": "Determining simplest formula from data.",
      "imageUrl": "images/2025-02-22/img8.jpg"
    },
    {
      "id": 27,
      "date": "2025-02-22",
      "question": "Identify the spectator ions",
      "topic": "Ionic Equations",
      "description": "Net ionic equation question.",
      "imageUrl": "images/2025-02-22/img9.jpg"
    }
  ]
}
```

**Step 3:** Commit and push!

## Quick Copy-Paste Template

Use this template for daily updates:

```json
{
  "id": NEXT_ID,
  "date": "YYYY-MM-DD",
  "question": "QUESTION_TEXT",
  "topic": "TOPIC_NAME",
  "description": "BRIEF_DESCRIPTION",
  "imageUrl": "images/YYYY-MM-DD/imgN.jpg"
}
```

## Customization Options

### Changing Colors

Edit `styles.css` and modify the `:root` variables:

```css
:root {
    --primary-color: #2563eb;      /* Main blue color */
    --primary-dark: #1e40af;       /* Darker shade */
    --primary-light: #3b82f6;      /* Lighter shade */
    --secondary-color: #10b981;    /* Green accent */
    /* ... */
}
```

### Popular Color Schemes:

**Purple Theme:**
```css
--primary-color: #7c3aed;
--primary-dark: #5b21b6;
--primary-light: #8b5cf6;
```

**Green Theme:**
```css
--primary-color: #059669;
--primary-dark: #047857;
--primary-light: #10b981;
```

**Red Theme:**
```css
--primary-color: #dc2626;
--primary-dark: #b91c1c;
--primary-light: #ef4444;
```

### Changing Gallery Grid

In `styles.css`, find `.gallery` and modify:

```css
.gallery {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* Change 300px to adjust card width */
    /* Larger number = fewer columns, bigger cards */
}
```

### Image Height

In `styles.css`, find `.gallery-item-image`:

```css
.gallery-item-image {
    height: 250px;  /* Change this value */
}
```

## Tips & Best Practices

### Image Organization
- ✅ Always organize by date folders
- ✅ Use consistent naming (img1.jpg, img2.jpg, etc.)
- ✅ Keep original high-quality images
- ✅ Use JPEG for photographs, PNG for diagrams/text

### Image Optimization
- 📏 Recommended size: 800-1200px width
- 💾 Optimize file size (use tools like TinyPNG)
- 🎨 Keep quality at 80-85% for good balance

### JSON Best Practices
- ✅ Always validate JSON after editing (use jsonlint.com)
- ✅ Keep descriptions concise but informative
- ✅ Use consistent topic names for better filtering
- ✅ Double-check image paths

### Git Workflow
```bash
# Daily update workflow
git pull origin main                    # Get latest changes
# Add your images and update images.json
git add images.json images/2025-02-22/
git commit -m "Add quiz images for Feb 22, 2025"
git push origin main
```

## Troubleshooting

### Images Not Showing
1. Check image paths in `images.json` - they're case-sensitive!
2. Verify images are actually in the correct folder
3. Check browser console for 404 errors
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### JSON Errors
1. Use [JSONLint](https://jsonlint.com/) to validate
2. Common issues:
   - Missing comma between objects
   - Extra comma after last object
   - Unescaped quotes in text
   - Incorrect date format

### Filters Not Working
1. Ensure dates are in YYYY-MM-DD format
2. Check browser console for JavaScript errors
3. Try hard refresh (Ctrl+Shift+R)

### Performance Issues
1. Optimize images (compress large files)
2. Limit description length
3. Consider splitting into multiple JSON files if >500 images

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- ♿ Keyboard navigation support
- 🎯 Focus indicators for all interactive elements
- 📱 Touch-friendly controls
- 🔍 Semantic HTML structure
- ⚡ Reduced motion support for accessibility preferences

## License

This web app is provided as-is for educational purposes. Feel free to customize and use it for your teaching needs.

## Support

If you encounter any issues:
1. Check the Troubleshooting section above
2. Validate your JSON at jsonlint.com
3. Check browser console for errors (F12)
4. Review recent changes to images.json

---

**Happy Teaching! 🎓**

Remember: The more consistently you update with quality images and descriptions, the more valuable this resource becomes for your students!
