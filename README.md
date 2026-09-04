# TypeScript Webpack Week 1

Small TypeScript project bundled with Webpack. The app renders a simple book list in the browser and includes a lightweight review model as part of the assignment work.

It is ready to install, build, and open locally with a browser.

## What It Includes

- TypeScript source in [src/main.ts](src/main.ts)
- Webpack bundling via [webpack.config.js](webpack.config.js)
- Type checking via [tsconfig.json](tsconfig.json)
- Browser entry point in [index.html](index.html)

## Setup

```bash
npm install
```

## Build

```bash
npm run build
```

This creates the browser bundle at `dist/bundle.js`.

## Scripts

- `npm install` installs the project dependencies.
- `npm run build` bundles the TypeScript source with Webpack.

## Run

Open [index.html](index.html) in a browser after building the project.

## Project Structure

```text
.
├── index.html
├── src/
│   └── main.ts
├── dist/
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Notes

- `node_modules/` and `dist/` are not committed.
- The repository is ready for local development and browser testing.
