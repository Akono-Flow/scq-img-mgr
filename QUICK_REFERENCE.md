# QUICK REFERENCE - Daily Update Guide

## 📋 Daily Checklist (5 minutes)

### Step 1: Create Folder
```
images/YYYY-MM-DD/
```
Example: `images/2025-02-22/`

### Step 2: Add Images
Put your 9 images in the folder:
- img1.jpg
- img2.jpg
- img3.jpg
- img4.jpg
- img5.jpg
- img6.jpg
- img7.jpg
- img8.jpg
- img9.jpg

### Step 3: Update images.json

Add 9 entries using this template:

```json
{
  "id": NEXT_NUMBER,
  "date": "YYYY-MM-DD",
  "question": "Your question here",
  "topic": "Topic name",
  "description": "Brief description",
  "imageUrl": "images/YYYY-MM-DD/imgN.jpg"
}
```

**Don't forget the comma** between entries (except for the last one)!

### Step 4: Commit & Push
```bash
git add images.json images/2025-02-22/
git commit -m "Add quiz images for Feb 22, 2025"
git push origin main
```

## ⚡ Copy-Paste Template

Replace ALL_CAPS text with your values:

```json
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img1.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img2.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img3.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img4.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img5.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img6.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img7.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img8.jpg"
    },
    {
      "id": ID_NUMBER,
      "date": "YYYY-MM-DD",
      "question": "QUESTION_TEXT",
      "topic": "TOPIC_NAME",
      "description": "DESCRIPTION_TEXT",
      "imageUrl": "images/YYYY-MM-DD/img9.jpg"
    }
```

## 🎯 Topic Name Examples

Use consistent names for better filtering:

**Chemistry Topics:**
- Organic Chemistry
- Inorganic Chemistry
- Physical Chemistry
- Analytical Chemistry
- Biochemistry
- Chemical Bonding
- Stoichiometry
- Thermochemistry
- Chemical Kinetics
- Equilibrium
- Acid-Base Chemistry
- Redox Chemistry
- Electrochemistry
- Nomenclature
- Molecular Geometry
- Periodic Trends

## ✅ Pre-Commit Checklist

Before pushing to GitHub:

- [ ] Created date folder (YYYY-MM-DD format)
- [ ] Added all 9 images
- [ ] Updated images.json with 9 entries
- [ ] Validated JSON at [jsonlint.com](https://jsonlint.com)
- [ ] Checked all image paths match actual files
- [ ] Used consistent topic names
- [ ] Incremented ID numbers correctly

## 🚨 Common Mistakes to Avoid

❌ **Wrong date format** → Use YYYY-MM-DD (2025-02-22, not 02/22/2025)
❌ **Missing comma** → Every entry except the last needs a comma after it
❌ **Wrong image path** → Check capitalization and folder structure
❌ **Typos in imageUrl** → Double-check spelling: images/2025-02-22/img1.jpg
❌ **Duplicate IDs** → Always increment from the last entry
❌ **Unclosed quotes** → Make sure every " has a matching closing "

## 🔧 JSON Validation

**Before committing**, copy your entire images.json to:
👉 [https://jsonlint.com](https://jsonlint.com)

If valid: ✅ Green checkmark
If invalid: ❌ Shows exact line with error

## 📱 Quick Access Links

- [JSONLint Validator](https://jsonlint.com)
- [TinyPNG Image Compressor](https://tinypng.com)
- [Your GitHub Repo](https://github.com/YOUR_USERNAME/YOUR_REPO)
- [Your Live Site](https://YOUR_DOMAIN/quiz-images)

---

**Pro Tip:** Bookmark this page for quick reference! 🔖
