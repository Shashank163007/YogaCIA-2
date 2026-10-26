# Ananda Yoga

Ananda Yoga is a responsive online yoga academy landing page built with React and Vite. It introduces yoga programs, class plans, frequently asked questions, and an enrollment contact form.

## Features

- Yoga program cards with detailed service dialogs
- Pricing plans with enrollment links
- Interactive breathing pacer
- FAQ section and contact form
- Responsive layout styled with Tailwind CSS
- Vercel-ready production configuration

## Tech stack

- React 18
- Vite 6
- Tailwind CSS 3
- PostCSS and Autoprefixer

## Getting started

### Requirements

- Node.js (20 or later recommended)
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal (the project config uses port 3000).

### Build for production

```bash
npm run build
```

The production files are generated in `dist/`.

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
src/
  components/   Page sections and interactive UI components
  data/         Yoga services, pricing plans, and FAQ content
  App.jsx       Application layout
  main.jsx      React entry point
public/
  images/       Images served by Vite
```

## Deployment

The repository includes a Vercel configuration. Deploy the project with the Vercel CLI or connect the repository in the Vercel dashboard; the build command is `npm run build` and the output directory is `dist`.

## License

No license is currently specified.
