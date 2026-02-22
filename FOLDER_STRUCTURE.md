# Folder Structure Guide

## Complete Directory Layout

```
quiz-images/
│
├── index.html                 ← Main web app page
├── styles.css                 ← All styling
├── script.js                  ← JavaScript functionality
├── images.json                ← Image metadata (UPDATE DAILY)
├── README.md                  ← Full documentation
├── QUICK_REFERENCE.md         ← Daily update cheat sheet
│
└── images/                    ← All quiz images stored here
    │
    ├── 2025-02-22/           ← Today's folder (example)
    │   ├── img1.jpg
    │   ├── img2.jpg
    │   ├── img3.jpg
    │   ├── img4.jpg
    │   ├── img5.jpg
    │   ├── img6.jpg
    │   ├── img7.jpg
    │   ├── img8.jpg
    │   └── img9.jpg
    │
    ├── 2025-02-21/           ← Yesterday's folder (example)
    │   ├── img1.jpg
    │   ├── img2.jpg
    │   ├── img3.jpg
    │   ├── img4.jpg
    │   ├── img5.jpg
    │   ├── img6.jpg
    │   ├── img7.jpg
    │   ├── img8.jpg
    │   └── img9.jpg
    │
    ├── 2025-02-20/           ← Previous day (example)
    │   └── ...
    │
    └── ...                    ← More date folders as you add images
```

## Initial Setup Steps

### 1. Create the Main Structure

In your GitHub repository:

```bash
# Navigate to your repository
cd your-repo-name

# Create the quiz-images folder
mkdir quiz-images
cd quiz-images

# Create the images folder
mkdir images
```

### 2. Add the Files

Place these files in the `quiz-images/` folder:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ images.json
- ✅ README.md
- ✅ QUICK_REFERENCE.md

### 3. Create Your First Date Folder

```bash
# Inside quiz-images/images/
mkdir 2025-02-22  # Use today's date
```

### 4. Add Your First Images

Place your 9 images in the date folder:
```
quiz-images/images/2025-02-22/
├── img1.jpg
├── img2.jpg
├── img3.jpg
├── img4.jpg
├── img5.jpg
├── img6.jpg
├── img7.jpg
├── img8.jpg
└── img9.jpg
```

## File Relationships

```
┌─────────────┐
│ index.html  │──┐
└─────────────┘  │
                 ├─→ Loads together to create the web app
┌─────────────┐  │
│ styles.css  │──┤
└─────────────┘  │
                 │
┌─────────────┐  │
│ script.js   │──┘
└─────────────┘
      │
      │ Fetches data from
      ↓
┌─────────────┐
│images.json  │ ─→ Contains metadata about images
└─────────────┘
      │
      │ Points to
      ↓
┌─────────────┐
│   images/   │ ─→ Actual image files
└─────────────┘
```

## Growth Over Time

After one week of daily updates:

```
images/
├── 2025-02-22/ (9 images)
├── 2025-02-23/ (9 images)
├── 2025-02-24/ (9 images)
├── 2025-02-25/ (9 images)
├── 2025-02-26/ (9 images)
├── 2025-02-27/ (9 images)
└── 2025-02-28/ (9 images)

Total: 63 images in 7 days
```

After one month:

```
images/
├── 2025-02-01/ through 2025-02-28/ (28 days)

Total: ~252 images
```

After one year:

```
images/
├── 2025-02-01/
├── 2025-02-02/
├── ...
└── 2026-01-31/

Total: ~3,285 images (365 days × 9 images)
```

## GitHub Repository Integration

Your complete repository structure:

```
your-repo/
│
├── index.html              ← Your main gallery page
├── styles.css              ← Your gallery styles
├── apps.js                 ← Your gallery data
│
├── quiz-images/            ← NEW: This web app
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   ├── images.json
│   ├── README.md
│   ├── QUICK_REFERENCE.md
│   └── images/
│       ├── 2025-02-22/
│       └── ...
│
├── other-app-1/            ← Your other web apps
│   └── ...
│
├── other-app-2/
│   └── ...
│
└── README.md               ← Your main repo README
```

## URL Structure

After publishing to GitHub Pages:

```
Main Gallery:
https://yourusername.github.io/your-repo/

Quiz Images App:
https://yourusername.github.io/your-repo/quiz-images/

Individual Image:
https://yourusername.github.io/your-repo/quiz-images/images/2025-02-22/img1.jpg
```

With custom domain:

```
Main Gallery:
https://yourdomain.com/

Quiz Images App:
https://yourdomain.com/quiz-images/

Individual Image:
https://yourdomain.com/quiz-images/images/2025-02-22/img1.jpg
```

## Adding to Your Gallery

In your main `apps.js` (or wherever you store app data), add:

```javascript
{
    title: "Quiz Competition Images",
    description: "Browse and search all quiz competition images with advanced filtering",
    url: "quiz-images/index.html",
    thumbnail: "quiz-images/images/2025-02-22/img1.jpg", // Use any recent image
    category: "Education",
    icon: "🖼️",
    tags: ["quiz", "chemistry", "education", "gallery"]
}
```

## Storage Considerations

### File Sizes
- **Recommended:** 100-300 KB per image
- **Maximum:** 1 MB per image for best performance
- **Optimization:** Use TinyPNG or similar tools

### Repository Size Estimates
```
1 month:  ~252 images × 200 KB avg = ~50 MB
6 months: ~1,512 images × 200 KB avg = ~300 MB
1 year:   ~3,285 images × 200 KB avg = ~650 MB
```

GitHub free tier allows up to 1 GB repository size, so you're good for over a year!

### If You Exceed Limits

After a year or two, you can:
1. **Archive old images** to a separate repository
2. **Compress images** more aggressively
3. **Use external storage** (like Cloudinary) and update URLs
4. **Split by year** (quiz-images-2025, quiz-images-2026)

## Best Practices

✅ **DO:**
- Keep consistent folder naming (YYYY-MM-DD)
- Organize images by date immediately
- Validate JSON after every update
- Commit changes daily
- Keep README files updated

❌ **DON'T:**
- Mix date formats
- Store images in root directory
- Forget to commit after adding images
- Use spaces in filenames
- Skip JSON validation

---

**Quick Tip:** Print this page and keep it near your computer for easy reference when setting up! 📄
