
# Markdown Live Viewer

Markdown Live Viewer is a web application that provides a live Markdown editor with real-time rendering and mindmap visualization. Type Markdown in the editor, and view the rendered Markdown as well as a mindmap structure based on the headings in the text.

### Features

- **Live Markdown Rendering**: See rendered Markdown in real time as you type.
- **Mindmap Visualization**: Visualize your Markdown structure as a mindmap, with scrollbars enabled for larger visualizations.
- **Responsive Layout**: Editor on the top, rendered Markdown on the bottom left, and mindmap visualization on the bottom right.

### Demo

You can try a live demo of this project at [https://lamb-russell.github.io/markdown-live-viewer/](https://lamb-russell.github.io/markdown-live-viewer/) (if deployed to GitHub Pages).

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

---

## Installation

To run this project locally, you’ll need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

1. Clone this repository:

   ```bash
   git clone https://github.com/lamb-russell/markdown-live-viewer.git
   ```

2. Navigate into the project directory:

   ```bash
   cd markdown-live-viewer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

---

## Usage

To start the development server:

```bash
npm start
```

This will run the project on a local server, usually accessible at `http://localhost:3000`.

### Editing Markdown

- Use the editor at the top to enter Markdown text.
- The Markdown preview will appear on the bottom left.
- The mindmap visualization of your Markdown headings will be displayed on the bottom right. Scrollbars are enabled for larger visualizations.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This command generates an optimized build in the `dist` folder, which can be deployed to a static hosting service.

---

## Deployment

You can deploy this app to any static hosting service. Here’s how to deploy it to GitHub Pages.

### Deploying to GitHub Pages

1. **Set the Base Path in `vite.config.js`**

   Make sure the base path is set to the repository name for GitHub Pages to work correctly:

   ```javascript
   // vite.config.js
   import { defineConfig } from 'vite';

   export default defineConfig({
       base: '/markdown-live-viewer/',
   });
   ```

2. **Build and Deploy**

   To deploy the app manually to GitHub Pages:

   ```bash
   npm run build
   npm install -D gh-pages
   npm run deploy
   ```

   This will build the project and push the contents of the `dist` folder to the `gh-pages` branch, which GitHub Pages will use to serve the app.

3. **GitHub Actions (Optional)**

   Alternatively, you can set up GitHub Actions to automatically build and deploy the app to GitHub Pages whenever you push to the main branch. See the `.github/workflows/deploy.yml` file for an example configuration.

