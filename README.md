# Local Events Board

Local Events Board is a small React application for discovering and sharing events happening in a local community.

## What it does

- Browse a set of local sample events.
- Filter events by category.
- Open an event to view its full details.
- Submit a new event through a validated form.
- Persist submitted events in the browser's `localStorage`.

Submitted events are stored only in the current browser. They are not shared with other users or devices, and clearing browser storage removes them.

## Technical stack

- React 19
- Vite 8
- JavaScript (ES modules)
- CSS using the existing `App.css` and `index.css` stylesheets

The MVP uses local sample data and browser memory/storage only. It does not use a database, backend, authentication, or blockchain integration.

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Future improvements

- Add a real backend and database so events can be shared across users and devices.
- Add authentication so event submissions can be associated with user accounts.
