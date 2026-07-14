# Vue API Playground

A small Vue 3 + TypeScript playground app for practicing Vue fundamentals and working with public APIs.

## Pages

- **Home** (`/`) — landing page linking to each feature
- **Quotes** (`/quotes`) — programming quote generator
- **Emoji** (`/emoji`) — random emoji generator
- **Logo** (`/logo`) — random logo generator
- **Recipe** (`/recipe`) — random recipe viewer using the [DummyJSON](https://dummyjson.com/) recipes API

## Tech Stack

- [Vue 3](https://vuejs.org/) with `<script setup>` + TypeScript
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/) for dev/build tooling
- ESLint + Prettier for linting/formatting

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Preview the Production Build

```sh
pnpm preview
```

### Lint with ESLint

```sh
pnpm lint
```

### Format with Prettier

```sh
pnpm format
```
