# Portfolio Links Setup Guide

## How to Add File Links to Your Portfolio Projects

Your portfolio section is now clickable and ready for file links! Here's how to add them:

### Step 1: Update Project fileUrl
In `client/src/components/Portfolio.tsx`, find each project object and update the `fileUrl` field:

```tsx
{
  title: "Interactive eLearning Module",
  // ... other properties ...
  fileUrl: "/path/to/your/project-file.pdf", // Add your file path here
  // ... rest of properties ...
}
```

### Step 2: File Types You Can Add
- **PDF documents**: `/files/project-presentation.pdf`
- **Image galleries**: `/images/project-gallery/`
- **Video demonstrations**: `/videos/project-demo.mp4`
- **External links**: `https://your-project-website.com`
- **Google Drive links**: `https://drive.google.com/file/d/your-file-id/view`
- **Figma prototypes**: `https://www.figma.com/proto/your-prototype-id`

### Step 3: File Storage Options
1. **Local files**: Place files in `client/public/` folder
2. **Cloud storage**: Use Google Drive, Dropbox, or similar
3. **External hosting**: Host on your own domain

### Step 4: Example Setup
```tsx
projects: [
  {
    title: "Interactive eLearning Module",
    // ... other properties ...
    fileUrl: "/files/elearning-module-demo.pdf", // Local file
    // OR
    fileUrl: "https://drive.google.com/file/d/1abc123/view", // Google Drive
    // OR  
    fileUrl: "https://my-portfolio.com/projects/elearning", // External link
  }
]
```

### Current Behavior
- **With fileUrl**: Opens the file/link in a new tab
- **Without fileUrl**: Shows alert with project name (for testing)

### Features Ready
✅ Entire cards are clickable
✅ Hover animations and effects
✅ Visual click indicators
✅ File link functionality prepared
✅ Cross-browser compatibility

### Next Steps
1. Gather your project files
2. Choose storage method (local/cloud/external)
3. Update the `fileUrl` fields in Portfolio.tsx
4. Test the links work correctly

### Need Help?
The click handler function is in the `handleProjectClick` function at the top of the Portfolio component. You can customize this behavior as needed.
