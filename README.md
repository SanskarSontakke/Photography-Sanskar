# Sanskar Sontakke | Photography Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple)

A high-end, creative photography portfolio website designed to showcase visual work with elegance and interactivity. Built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**, this project features smooth animations, a custom cursor, and a modern dark-mode aesthetic.

## 🎬 Demo Video

https://github.com/user-attachments/assets/e3db4c45-8481-40e5-9949-0ecc8dde5a29

## 📋 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Component Guide](#-component-guide)
- [Customization](#-customization)
- [Deployment](#-deployment)

## ✨ Features

- **Premium Design Aesthetic**: Minimalist, dark-themed UI with high-contrast typography (Oswald & Open Sans).
- **Interactive Animations**:
  - **Parallax Hero**: Smooth parallax scrolling effect on the main hero image.
  - **Custom Cursor**: A magnetic-style custom cursor that reacts to interactive elements.
  - **Scroll Reveals**: Content fades and slides in as you scroll.
- **Dynamic Project Slider**: An interactive carousel to showcase different photography categories.
- **Bento Grid Gallery**: A responsive masonry-style grid for displaying selected works.
- **Responsive Layout**: Fully optimized for desktops, tablets, and mobile devices.
- **Performance Optimized**: Built on Next.js for static generation and fast load times.

## 🛠 Technologies

- **[Next.js 15](https://nextjs.org/)**: React framework for production.
- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Framer Motion](https://www.framer.com/motion/)**: A production-ready motion library for React.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.
- **[TypeScript](https://www.typescriptlang.org/)**: Strictly typed JavaScript for better code quality.

## 📂 Folder Structure

```
.
├── app/                  # Next.js App Router directory
│   ├── layout.tsx        # Global layout (fonts, metadata, cursor)
│   ├── page.tsx          # Main entry point (homepage)
│   └── globals.css       # Global styles and Tailwind imports
├── components/           # Reusable React components
│   ├── Hero.tsx          # Hero section with parallax
│   ├── About.tsx         # About section with stats
│   ├── Gallery.tsx       # Image grid gallery
│   ├── ProjectSlider.tsx # Interactive project carousel
│   ├── CustomCursor.tsx  # Custom mouse cursor logic
│   └── ...               # Other UI components (Header, Footer, etc.)
├── public/               # Static assets (images, icons)
│   └── images/           # Project images
└── ...                   # Config files (package.json, next.config.ts, etc.)
```

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

- **Node.js**: Version 18.17 or later (Next.js 15 requirement).
- **npm**: Node Package Manager.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/SanskarSontakke/Photography-Sanskar.git
    cd Photography-Sanskar
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧩 Component Guide

Here is a brief overview of the key components used in this project:

-   **`Header.tsx`**: The top navigation bar. It is fixed and includes a subtle entrance animation.
-   **`Hero.tsx`**: Uses `useScroll` and `useTransform` from Framer Motion to create a parallax effect on the background image.
-   **`ProjectSlider.tsx`**: Manages state for the current slide. It features a circular navigation logic (Next/Prev) and animates the slide transitions.
-   **`CustomCursor.tsx`**: Listens to mouse events globally. It detects if the user is hovering over a link or button and adjusts the cursor size/style accordingly. Note: It is hidden on touch devices.
-   **`Gallery.tsx`**: Uses a CSS Grid with varying column and row spans to create a "bento box" layout.

## 🎨 Customization

To personalize this portfolio:

1.  **Images**: Replace the placeholder images in `public/images/`. Ensure you keep the file names or update the paths in the components (e.g., `Gallery.tsx`, `ProjectSlider.tsx`).
2.  **Content**: Edit the text content directly in the component files (e.g., change the bio in `About.tsx`).
3.  **Colors/Fonts**:
    -   Update font variables in `app/layout.tsx`.
    -   Modify global styles in `app/globals.css`.
    -   Adjust Tailwind theme settings if necessary.

## 🚢 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect the build settings (`npm run build`).
4.  Your site will be live!

---

## License

MIT © 2026 Sanskar Sontakke
