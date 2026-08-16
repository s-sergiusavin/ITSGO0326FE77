# LUMA — aplicatie de social media (React + SCSS Modules)

Tema cosmica, dark mode, accent verde mentolat. Logo: luna plina desenata in SVG cu gradient radial.

## Cum pornesti proiectul

```bash
npm install     # se ruleaza o singura data
npm run dev     # porneste serverul; deschide adresa afisata (http://localhost:5173)
```

Autentificare: orice email care contine `@` si o parola de minim 4 caractere.

## Structura folderelor

```
luma/
├─ public/                      # fisiere servite ca atare, fara prelucrare
│  ├─ moon.svg                  # iconita din tab-ul browserului
│  └─ images/
│     ├─ avatars/               # aici pui pozele de profil
│     └─ postari/               # aici pui pozele din postari
├─ index.html                   # fisierul HTML de baza + fonturile Google
├─ package.json                 # dependintele si comenzile npm
├─ vite.config.js               # configurarea Vite
└─ src/
   ├─ main.jsx                  # punctul de start: monteaza App + Router + AuthProvider
   ├─ App.jsx                   # rutele aplicatiei (/login, /, /profil/:id)
   ├─ index.scss                # stiluri globale (fundal, fonturi, scrollbar)
   │
   ├─ styles/                   # SCSS partajat, fara clase proprii
   │  ├─ _variables.scss        # culori, spatii, breakpoint-uri
   │  └─ _mixins.scss           # mixin-uri pentru Media Queries
   │
   ├─ data/                     # date demo (ar veni de la un server intr-o app reala)
   │  ├─ users.js
   │  └─ posts.js
   │
   ├─ context/
   │  └─ AuthContext.jsx        # cine e logat + functiile login() si logout()
   │
   ├─ components/               # bucati refolosibile de interfata
   │  ├─ MoonLogo/              # logo-ul SVG cu gradient radial
   │  ├─ Avatar/                # cerc colorat cu initialele
   │  ├─ Navbar/                # bara de sus (cautare, notificari, logout)
   │  ├─ LeftSidebar/           # coloana stanga
   │  ├─ RightSidebar/          # coloana dreapta
   │  ├─ CreatePost/            # formularul de postare
   │  └─ Post/                  # o postare din newsfeed
   │
   └─ pages/                    # cele 3 ecrane
      ├─ Login/
      ├─ Home/
      └─ Profile/
```

Fiecare folder de componenta contine doua fisiere: `Nume.jsx` (logica + HTML) si
`Nume.module.scss` (stilurile doar pentru acea componenta).

## Cerintele temei si unde sunt rezolvate

| Cerinta | Fisier |
|---|---|
| Pagina de autentificare | `src/pages/Login/Login.jsx` |
| Newsfeed central | `src/pages/Home/Home.jsx` |
| Coloana stanga | `src/components/LeftSidebar/` |
| Coloana dreapta | `src/components/RightSidebar/` |
| Click pe user duce la profil | `Post.jsx`, `RightSidebar.jsx` → ruta `/profil/:id` |
| Stilizare modulara SCSS | toate fisierele `*.module.scss` |
| Media Queries | `src/styles/_mixins.scss` + `@include m.tablet` etc. |
| Componente Material UI | iconitele `@mui/icons-material` din Navbar, Post, Profile |

## Evenimentele din coloanele laterale

**Stanga**
1. Butoanele *Tot fluxul / Urmariti / Populare* — schimba filtrul newsfeed-ului.
2. Comutatorul *Doar cu imagini* — afiseaza doar postarile care au media.

**Dreapta**
1. Click pe un subiect (`#astro`, `#luna`…) — filtreaza newsfeed-ul dupa hashtag. Al doilea click sterge filtrul.
2. Butonul *Urmareste / Urmarit* — modifica lista de urmariri, care alimenteaza filtrul *Urmariti* din stanga.

## Cum functioneaza filtrele (pe scurt)

Starea (`activeFilter`, `onlyMedia`, `activeTopic`, `following`) sta in `Home.jsx`.
Coloanele laterale primesc valorile si functiile prin props si le apeleaza la click.
Asta se numeste *lifting state up* si e modul standard de a face doua componente
"surori" sa comunice in React.

## Cum modifici designul

Deschide `src/styles/_variables.scss`. Schimbi acolo o culoare si se schimba in toata aplicatia.
De exemplu `$accent: #74e0ab;` pentru verdele principal, `$bg: #16181b;` pentru fundal.

## Breakpoint-uri

| Latime | Ce se intampla |
|---|---|
| peste 1100px | 3 coloane |
| sub 1100px | dispare coloana din dreapta |
| sub 900px | o singura coloana: filtrele din stanga devin o bara orizontala sus, coloana dreapta coboara sub newsfeed |
| sub 600px | spatieri si texte reduse, logo-ul text din navbar dispare |


## Cum schimbi pozele

Tot ce pui in `public/` este accesibil in browser la adresa fara `public` in cale:
fisierul `public/images/avatars/ana.jpg` se scrie in cod ca `/images/avatars/ana.jpg`.

**Poza de profil** — pui fisierul in `public/images/avatars/`, apoi deschizi
`src/data/users.js` si schimbi linia utilizatorului:

```js
avatar: '/images/avatars/ana.jpg',
```

**Poza dintr-o postare** — pui fisierul in `public/images/postari/`, apoi deschizi
`src/data/posts.js`:

```js
image: '/images/postari/luna.jpg',
```

Daca o postare nu are poza, scrii `image: null`.

Momentan pozele vin de pe internet (`i.pravatar.cc` pentru avataruri,
`picsum.photos` pentru postari), ca aplicatia sa arate complet din prima.
Daca nu ai internet, avatarurile se schimba automat pe initiale colorate,
iar postarile raman fara poza. Cand pui poze locale, nu mai depinzi de internet.

Reguli pentru fisiere: nume fara spatii si fara diacritice (`ana.jpg`, nu `Poza Ana.jpg`),
avatarurile patrate (300x300), pozele din postari dreptunghiulare (900x600).

## Cum functioneaza comentariile

Click pe iconita de comentarii dintr-o postare deschide sectiunea (`Post.jsx`,
starea `showComments`). Comentariile existente vin din `src/data/posts.js`,
unde fiecare postare are o lista `comments`. Cand scrii unul nou si apesi
butonul de trimitere, el se adauga in starea `comments` a acelei postari,
iar numarul de langa iconita creste automat.

Comentariile noi traiesc doar in memorie: la reincarcarea paginii (F5) dispar,
pentru ca aplicatia nu are inca un server care sa le salveze.
