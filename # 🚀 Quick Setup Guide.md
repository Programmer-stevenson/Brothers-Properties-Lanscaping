# 🚀 Quick Setup Guide

## What You Need
- Node.js installed on your computer ([Download](https://nodejs.org/))

## Setup Steps

### 1️⃣ Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
- **Linux**: Press `Ctrl + Alt + T`

### 2️⃣ Navigate to Project Folder
```bash
cd path/to/brothers-landscaping-vite
```

### 3️⃣ Install Everything
```bash
npm install
```
⏳ This takes 1-2 minutes

### 4️⃣ Start the Website
```bash
npm run dev
```

### 5️⃣ Open in Browser
Go to: **http://localhost:5173/**

---

## 🎉 That's It!

Your website is now running locally. Any changes you make to the files will automatically update in the browser!

## 🛑 To Stop the Server
Press `Ctrl + C` in the terminal

## 📦 To Build for Production
```bash
npm run build
```
This creates a `dist` folder with your website files ready to upload to any hosting service.

---

## Common Issues

**"npm is not recognized"** → Install Node.js from nodejs.org

**"Port 5173 is already in use"** → Run: `npm run dev -- --port 3000`

**Nothing happens after `npm run dev`** → Check if you're in the correct folder

---

## File Structure
```
brothers-landscaping-vite/
├── src/
│   ├── App.jsx       ← Edit this to change website content
│   ├── main.jsx
│   └── index.css
├── package.json
├── README.md         ← Full documentation
└── SETUP-GUIDE.md    ← This file
```

---

## Need Help?
Check the full README.md for detailed instructions and troubleshooting!