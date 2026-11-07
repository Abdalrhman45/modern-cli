# modern-cli

A full-screen terminal starter built with TypeScript, Node, and [Ink](https://github.com/vadimdemedes/ink).

The window has a sidebar and a content panel. Arrow keys move the selection, number keys jump, and Enter marks the current view as opened.

## Run

```bash
npm install
npm run dev
```

## Keys

| Key | Action |
| --- | --- |
| ↑ / ↓ | Move through the menu |
| 1–5 | Jump to a view |
| Enter | Open the current view |
| Esc | Leave the opened state |
| q | Quit |

## Build

```bash
npm run build
node dist/cli.js
```

After a build, `npx modern-cli` also works from this folder because the `bin` field points at `dist/cli.js`.

## Extend

- Add a menu item in `src/content.ts`.
- Draw its panel in `src/panels.tsx`.
- Keyboard handling stays in `src/App.tsx`.
