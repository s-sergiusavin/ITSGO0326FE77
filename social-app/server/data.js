// In-memory demo data. Restarts reset everything (this is a demo API, not a real DB).
// Images use picsum.photos / i.pravatar.cc so they render without needing local asset files.

export const posts = [
  {
    id: 1,
    author: "Zona IT",
    avatar: "https://i.pravatar.cc/80?img=68",
    date: "11.05.2026",
    image: "https://loremflickr.com/800/450/smartphone,technology?lock=101",
    category: "tech",
    title:
      "Aceste funcții One UI 8.5 nu ajung la utilizatorii Galaxy S25, chiar dacă au fost testate cu firmware-ul beta",
    description:
      "Prezente în firmware-ul One UI 8.5 distribuit utilizatorilor Galaxy S25 înrolați în programul de testare beta, patru funcții disponibile utilizatorilor…",
    likes: 10,
    comments: [
      {
        id: 1,
        user: "User name",
        avatar: "https://i.pravatar.cc/60?img=12",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugiat, iure consequuntur ex dolores eius culpa eaque voluptatibus soluta eum.",
        emoji: "😎",
      },
    ],
  },
  {
    id: 2,
    author: "Zona IT",
    avatar: "https://i.pravatar.cc/80?img=68",
    date: "11.05.2026",
    image: "https://loremflickr.com/800/450/smartwatch,fitness?lock=102",
    category: "tech",
    title: "Google Health – noul asistent personal de sănătate și fitness de la Google",
    description:
      "Un nou instrument care centralizează datele de sănătate și fitness colectate de pe telefon și dispozitive conectate…",
    likes: 10,
    comments: [
      {
        id: 1,
        user: "User name",
        avatar: "https://i.pravatar.cc/60?img=12",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugiat, iure consequuntur ex dolores eius culpa eaque voluptatibus soluta eum.",
        emoji: "😎",
      },
    ],
  },
  {
    id: 3,
    author: "Diac Andrei-Cristian",
    avatar: "https://i.pravatar.cc/80?img=51",
    date: "08 Apr 2026",
    image: "https://loremflickr.com/800/450/gaming,setup?lock=103",
    category: "gaming",
    title: "Setup-ul meu de gaming, în sfârșit gata!",
    description:
      "Aceasta este prima mea postare facuta pe reteaua de socializare creata de mine in timpul cursului de Front End Development.",
    likes: 10,
    comments: [
      {
        id: 1,
        user: "User name",
        avatar: "https://i.pravatar.cc/60?img=12",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugiat, iure consequuntur ex dolores eius culpa eaque voluptatibus soluta eum.",
        emoji: "😎",
      },
    ],
  },
  {
    id: 4,
    author: "Diac Andrei-Cristian",
    avatar: "https://i.pravatar.cc/80?img=51",
    date: "08 Apr 2026",
    image: "https://loremflickr.com/800/450/design,workspace?lock=104",
    category: "design",
    title: "Mood board pentru proiectul nou de design",
    description:
      "Am adunat câteva referințe vizuale pentru un proiect retro-futurist la care lucrez zilele astea.",
    likes: 10,
    comments: [
      {
        id: 1,
        user: "User name",
        avatar: "https://i.pravatar.cc/60?img=12",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugiat, iure consequuntur ex dolores eius culpa eaque voluptatibus soluta eum.",
        emoji: "😎",
      },
    ],
  },
];

// image keywords per composer category, used when a new post is created from the feed
export const categoryImageKeywords = {
  news: "newspaper,news",
  tech: "technology,computer",
  gaming: "gaming,console",
  design: "design,creative",
};

export const friends = [
  { id: 1, name: "John Doe", avatar: "https://i.pravatar.cc/80?img=15", since: "3 minute" },
  { id: 2, name: "Jane Smith", avatar: "https://i.pravatar.cc/80?img=47", since: "3 minute" },
  { id: 3, name: "Emily Johnson", avatar: "https://i.pravatar.cc/80?img=25", since: "3 minute" },
];

export const trending = [
  { id: 1, icon: "bi-code-slash", tag: "#programming" },
  { id: 2, icon: "bi-css", tag: "#frontenddev" },
  { id: 3, icon: "bi-newspaper", tag: "#newtech" },
  { id: 4, icon: "bi-geo-alt", tag: "#bacau" },
];

export const profile = {
  name: "Diac Andrei-Cristian",
  bio: "Pasionat de web development. Locuiesc in Bacau.",
  avatar: "https://i.pravatar.cc/300?img=51",
  cover: "https://loremflickr.com/1200/300/circuit,technology?lock=200",
  about: ["📍Bacau, Romania", "🎓 Universitatea de Stat din Bacau", "💼 Web Developer"],
  quickInfo: ["Pasionat de calatorii", "Pasionat de ciclism", "🏓 Pasionat de Tennis"],
  favoriteGroups: [
    "Frontend Developers Romania",
    "Web Developers Romania",
    "Mobile Developers Romania",
  ],
  gallery: [
    "https://loremflickr.com/500/500/travel,mountains?lock=201",
    "https://loremflickr.com/500/500/cycling,bike?lock=202",
    "https://loremflickr.com/500/500/tennis,racket?lock=203",
    "https://loremflickr.com/500/500/coding,laptop?lock=204",
    "https://loremflickr.com/500/500/coffee,desk?lock=205",
    "https://loremflickr.com/500/500/city,sunset?lock=206",
  ],
  stats: { posts: 4, friends: 128, groups: 3 },
};

// used by the feed's post composer to assign a consistent random author name + face
export const randomAuthors = [
  { name: "Alexandra Ionescu", avatar: "https://i.pravatar.cc/80?img=5" },
  { name: "Mihai Popescu", avatar: "https://i.pravatar.cc/80?img=13" },
  { name: "Elena Dumitrescu", avatar: "https://i.pravatar.cc/80?img=9" },
  { name: "Andrei Vasilescu", avatar: "https://i.pravatar.cc/80?img=14" },
  { name: "Maria Constantin", avatar: "https://i.pravatar.cc/80?img=20" },
  { name: "Cristian Marin", avatar: "https://i.pravatar.cc/80?img=33" },
  { name: "Ioana Radu", avatar: "https://i.pravatar.cc/80?img=26" },
  { name: "Bogdan Stancu", avatar: "https://i.pravatar.cc/80?img=15" },
];

export const users = [{ id: 1, username: "demo", password: "demo123" }];
