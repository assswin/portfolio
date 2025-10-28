# Portfolio Site

This is a simple static portfolio site. Files in this repo:

- index.html — main page
- style.css — responsive stylesheet
- assets/ — images and favicon
- server.js — minimal Express server for Node hosting
- package.json — Node metadata

Local development

1. Install Node (14+).
2. npm install
3. npm start
4. Open http://localhost:3000

Deploying

- Render / Heroku: push to a git repo and set build to `npm install` then start. The Express server serves static files and handles routing.
- GitHub Pages: remove server.js and package.json or deploy only static files using the repo's settings (gh-pages branch or GitHub Pages action).

Assets

- Replace placeholder files in assets/ with optimized JPG/WEBP files.
- Use 72-150 KB images for thumbnails and WebP for better compression.

Tips

- Update meta description, title, and favicon.
- Use an automated deployment (GitHub Actions) or host on Firebase Hosting for a CDN-backed experience.
