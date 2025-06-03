# 🎓 IIIT-H Student Kit | Fresher's Guide

A beautiful, modern static website built with React + Vite to help new students at IIIT Hyderabad navigate their first few days of college life.

## ✨ Features

### 🎨 Design
- **Modern & Minimal**: Clean, professional design with gradient cards
- **Dual Theme Support**: Seamless light/dark mode toggle
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered interactions
- **Glass-morphism Effects**: Modern backdrop blur and transparency

### 🏫 Content Categories
- 📄 **Documents Required**: Essential paperwork for admission
- 📅 **Induction Schedule**: Complete orientation timeline
- 👥 **Echoes from Alumni**: Valuable insights from seniors
- 🏨 **Hotels near IIIT-H**: Accommodation for visiting families
- 🗺️ **How to reach campus**: Travel guides and directions
- 📸 **Places to Visit**: Tourist attractions around Hyderabad
- 📖 **Informal Brochure**: Unofficial campus life guide

### 🎯 User Experience
- **Single Page Layout**: All information accessible without scrolling
- **Modal Navigation**: Clean popup interface for detailed content
- **Floating Background**: Subtle animated shapes for visual appeal
- **Fast Loading**: Optimized with Vite for instant page loads

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Student-Kit-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
Student-Kit-2025/
├── src/
│   ├── App.jsx               # Main React component
│   ├── App.css               # Complete styling with themes
│   ├── index.css             # Global styles and fonts
│   ├── main.jsx              # React entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🎨 Technology Stack

### Core
- **React 18.3.1** - Modern UI library
- **Vite 6.3.5** - Lightning-fast build tool
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & Animation
- **CSS3** - Custom properties, Grid, Flexbox
- **Framer Motion** - Smooth animations and transitions
- **Google Fonts (Inter)** - Modern typography

### Icons & UI
- **Lucide React** - Beautiful, consistent icons
- **CSS Variables** - Dynamic theming system

## 🌈 Theme System

The website features a sophisticated theming system:

### Light Mode
- Primary: `#ffffff` (White)
- Text: `#1e293b` (Dark Slate)
- Secondary: `#64748b` (Slate)

### Dark Mode
- Primary: `#0f172a` (Dark Navy)
- Text: `#f8fafc` (Light)
- Secondary: `#cbd5e1` (Light Slate)

Themes are controlled via CSS custom properties and can be toggled with the sun/moon button.

## 🎯 Key Components

### Header Section
- Animated title with gradient highlight
- Descriptive subtitle
- Responsive typography

### Category Grid
- 7 information categories
- Gradient backgrounds with unique colors
- Hover animations and 3D effects
- Modal popups for detailed content

### Background Animation
- 6 floating shapes with subtle motion
- Theme-aware opacity levels
- Performance-optimized animations

## 📱 Responsive Breakpoints

| Device | Breakpoint | Grid Layout |
|--------|------------|-------------|
| Desktop | > 768px | Multi-column grid |
| Tablet | 480-768px | Single column |
| Mobile | < 480px | Optimized spacing |

## 🔧 Customization

### Adding New Categories
1. Update the `categories` array in `App.jsx`
2. Add new icon from Lucide React
3. Define gradient colors
4. Implement content in modal

### Modifying Themes
1. Update CSS variables in `App.css`
2. Adjust color values for both light/dark modes
3. Test contrast ratios for accessibility

### Content Updates
Replace placeholder text in modal components with actual information for each category.

---

**Made with ❤️ for IIIT-H Freshers**

*Last updated: May 29*
