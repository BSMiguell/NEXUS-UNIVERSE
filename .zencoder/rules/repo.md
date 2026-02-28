---
description: Repository Information Overview
alwaysApply: true
---

# NEXUS UNIVERSE Information

## Summary

**NEXUS UNIVERSE** is a static front-end project featuring a character gallery, modals, and a battle system. It organizes character data (e.g., One Piece, Dragon Ball) and provides an interactive interface for exploring characters and simulating battles.

## Structure

- `assets/`: Static resources including `animations/`, `images/`, and `videos/`.
- `src/css/`: Stylesheets organized into:
  - `base/`: Core styles, reset, and variables.
  - `components/`: UI components like modals, cards, and battle systems.
  - `utilities/`: Animation and visual effects.
- `src/js/`: Application logic split into:
  - `components/`: UI logic like gallery, header, and preloader.
  - `core/`: Fundamental systems like audio, cache, and theme initialization.
  - `systems/`: Complex systems like the battle engine and dynamic themes.
- `src/data/`: Centralized data files, notably `characters-data.js` containing character stats and info.
- `docs/`: Project documentation and organization rules.
- `index.html`: Main application entry point.

## Language & Runtime

**Language**: HTML, CSS, JavaScript (Vanilla JS)  
**Version**: ES6+ (JavaScript), CSS3  
**Build System**: Static Front-end (No build step required)  
**Package Manager**: `npm` (used for development tools)

## Dependencies

**Main Dependencies**:

- None (Uses Vanilla JS and standard web technologies)

**Development Dependencies**:

- `live-server` (^1.2.2): Local development server with live reload.
- `prettier` (^3.8.1): Code formatting tool.

## Build & Installation

```bash
# Install development dependencies
npm install

# Start local development server
npm run start
# OR
npm run dev
```

## Main Files & Resources

- **Entry Point**: `index.html`
- **Main Script**: `src/js/main.js`
- **Main Style**: `src/css/main.css`
- **Data Source**: `src/data/characters-data.js`
- **Battle Systems**: `src/js/systems/battle-system.js` and `battle-system-v2.js`
- **Utility Script**: `find_missing.js` - Helper to identify images in `assets/images` not yet in the data source and generate character templates.

## Usage & Operations

- **Formatting**: `npm run format` (formats the project using Prettier)
- **Formatting Check**: `npm run format:check` (validates formatting without changes)
- **Local Server**: Running `npm run dev` serves the project at `http://127.0.0.1:3000`.

## Clean-up Notes

- Service Worker (`sw.js`) registration removed from `main.js` as the file was missing.
- Unused visual effects scripts and styles identified for removal.

## Project Structure

- **Mídia/Código Separation**: All media stays in `assets/`, while logic and styles are in `src/`.
- **Naming Convention**: `kebab-case` for all filenames (e.g., `battle-system-v2.js`).
- **CSS Architecture**: Modular approach with `base/`, `components/`, and `utilities/`.
- **JS Architecture**: Split into `core/` (foundation), `components/` (UI), and `systems/` (complex logic).
