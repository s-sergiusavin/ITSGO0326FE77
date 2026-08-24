# Social Media App (Demo)

Conversie a paginilor HTML/CSS statice (auth, feed, profile, landing-page) într-un
proiect **React + Vite** cu backend **Node.js / Express** pentru date demo.

## Structură

```
social-app/
├── client/                # React + Vite frontend
│   ├── public/assets/     # aici pui imaginile (vezi assets/README.txt)
│   └── src/
│       ├── components/    # Header, PostCard
│       ├── hooks/         # useAuth (login demo + localStorage)
│       ├── pages/         # Auth, Feed, Profile, Landing
│       └── styles/        # CSS-urile originale (auth.css, feed.css, ...)
├── server/                 # Express API (date în memorie, fără DB)
│   ├── data.js             # posts, friends, trending, profile
│   └── index.js
└── package.json            # scripturi la nivel de root
```

## Rute

| Rută                | Pagină            |
|----------------------|-------------------|
| `/`                  | Login (Auth)      |
| `/feed`               | Feed              |
| `/profile`            | Profile           |
| `/landing-page`       | Landing / eveniment |

Rutele `/feed`, `/profile` și `/landing-page` sunt protejate — dacă nu ești logat,
ești redirecționat automat la `/`.

**Cont demo:** `demo` / `demo123`

## Instalare

Din rădăcina proiectului:

```bash
npm run install:all
```

(sau manual: `npm install` în `client/` și în `server/`)

## Rulare în dezvoltare

Ai nevoie de două terminale:

```bash
# Terminal 1 — API-ul Node/Express (port 4000)
npm run dev:server

# Terminal 2 — frontend-ul React/Vite (port 5173)
npm run dev:client
```

Deschide http://localhost:5173 — Vite face proxy la `/api/*` către
`http://localhost:4000`, deci nu ai nevoie de configurare CORS suplimentară.

## Build de producție (doar frontend)

```bash
npm run build:client
```

Rezultatul apare în `client/dist/`.

## API disponibil (server/index.js)

- `POST /api/login` — autentificare demo
- `GET /api/posts` — lista postărilor din feed
- `POST /api/posts/:id/like` — incrementează like-urile
- `POST /api/posts/:id/comments` — adaugă un comentariu
- `GET /api/profile` — datele profilului
- `GET /api/friends` — prieteni sugerați
- `GET /api/trending` — topicuri trending

Toate datele sunt ținute **în memorie** (`server/data.js`) — e un demo, nu o bază
de date reală; se resetează la fiecare restart al serverului.

## Imagini lipsă

Fișierele HTML/CSS originale referențiau imagini locale (`assets/...`) care nu au
fost furnizate. Structura, stilurile și funcționalitatea merg perfect fără ele —
doar `<img>`-urile vor apărea "sparte" până pui pozele reale în
`client/public/assets/` (vezi `client/public/assets/README.txt` pentru lista
completă de nume de fișiere așteptate).

## Ce am schimbat față de HTML-ul original

- Fiecare pagină (`auth.html`, `feed.html`, `profile.html`, `landing-page.html`)
  a devenit o componentă React, cu navigare prin `react-router-dom` în loc de
  linkuri `<a href="...html">`.
- Header-ul din `feed.html` și `profile.html` a fost extras într-o componentă
  comună (`Header.jsx`).
- O postare din feed a devenit componenta `PostCard.jsx`, randată dintr-o listă
  (nu mai e cod HTML repetat de 4 ori).
- Like-urile și comentariile sunt acum funcționale (state React + apeluri către
  API-ul Express), cu actualizare optimistă a UI-ului.
- CSS-urile originale au fost păstrate **neschimbate** (doar calea imaginii de
  fundal din `auth.css` a fost ajustată la `/assets/...` pentru a funcționa cu
  structura de foldere Vite).
