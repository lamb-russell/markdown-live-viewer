
# Markdown Live Viewer

Markdown Live Viewer is a web application offering a live Markdown editor with real-time rendering and an interactive mindmap visualization. Designed for easy Markdown editing and content structuring, it enables users to create and visualize Markdown documents seamlessly.

## Features

- **Live Markdown Rendering**: View your Markdown content as it’s typed.
- **Mindmap Visualization**: Generate a mindmap structure from your document’s headings.
- **Responsive Layout**: Organized for ease of use with Markdown editing, previewing, and mindmap generation on a single screen.

## Demo

Check out a live demo [here](https://lamb-russell.github.io/markdown-live-viewer/) 

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Installation

### Requirements

To run this app locally, ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Steps

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

## Usage

To start the development server:

```bash
npm start
```

The app will run locally, typically accessible at `http://localhost:3000`.

### Editing Markdown

- Use the editor to type Markdown text.
- Real-time Markdown preview is shown below the editor.
- A mindmap visualization of the Markdown structure appears to the right, with scrollbars for large visualizations.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build will be located in the `dist` folder and is ready for deployment on any static hosting service.

## Deployment

### Deploying to GitHub Pages

1. **Configure `vite.config.js`**: Update the `base` path to match the repository name:

   ```javascript
   export default defineConfig({
       base: '/markdown-live-viewer/',
   });
   ```

2. **Build and Deploy**:

   ```bash
   npm run build
   npm install -D gh-pages
   npm run deploy
   ```

This process will push the `dist` folder contents to the `gh-pages` branch for GitHub Pages hosting.

3. **Automated Deployment (Optional)**

   You can configure GitHub Actions for automatic deployment on push events. Check `.github/workflows/deploy.yml` for an example setup.
