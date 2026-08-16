

export const posts = [
  {
    id: 1,
    userId: 2,
    time: '12 minutes ago',
    text: 'My beautiful dog #luna',
    tags: [ 'luna'],
    image: 'https://picsum.photos/id/1025/900/600',
    likes: 214,
    comments: [
      { id: 11, userId: 3, time: '12 minutes ago', text: 'Amazing view' },
      { id: 12, userId: 5, time: '15 minutes ago', text: 'Where is the location ?' },
    ],
  },
  {
    id: 2,
    userId: 3,
    time: '3 minutes ago',
    text: 'Am explicat azi ca energia nu se pierde, ci doar se transforma. Un elev a zis ca atunci si energia lui de dimineata s-a transformat, probabil in caldura, undeva sub banca. Nu am ce sa ii reprosez. #fizica #fizica',
    tags: ['fizica'],
    image: null,
    likes: 96,
    comments: [
      { id: 21, userId: 4, time: '10 minutes ago', text: 'Hahaha funny :))' },
    ],
  },
  {
    id: 3,
    userId: 5,
    time: '4 minutes ago',
    text: 'This view is breathtaking #astro',
    tags: ['scris', 'astro'],
    image: 'https://picsum.photos/id/1057/900/600',
    likes: 148,
      comments: [
        { id: 91, userId: 2, time: '16 minutes ago', text: 'Beautiful!' },
        { id: 92, userId: 3, time: '12 minutes ago', text: 'What a view!' },
      ],
    
  },
  {
    id: 4,
    userId: 4,
    time: '12 minutes ago',
    text: 'This animals are hilarious. #diy',
    tags: ['diy'],
    image: 'https://picsum.photos/id/1084/900/600',
    likes: 62,
    comments: [],
  },
  {
    id: 5,
    userId: 1,
    time: '12 minutes ago',
    text: 'Intrebare pentru voi: care e cel mai bun obiectiv pentru fotografiat cerul noptii sub 1000 de lei? Astept recomandari. #foto',
    tags: ['foto'],
    image: null,
    likes: 41,
    comments: [
      { id: 51, userId: 2, time: '7 minutes ago', text: 'Un 50mm f/1.8 second hand. Sub 600 de lei si prinde foarte multa lumina.' },
      { id: 52, userId: 4, time: '6 minutes ago', text: 'Sau un 24mm daca vrei sa prinzi si peisajul, nu doar cerul.' },
    ],
  },
  {
    id: 6,
    userId: 2,
    time: '11 hours ago',
    text: 'The road to heaven. #meteori #astro',
    tags: ['meteori', 'astro'],
    image: 'https://picsum.photos/id/1018/900/600',
    likes: 302,
    comments: [
      { id: 61, userId: 5, time: '9 hours ago', text: 'Indeed' },
    ],
  },
  {
    id: 7,
    userId: 5,
    time: '2 days ago',
    text: 'Cea mai buna aplicatie pe care am gasit-o pentru identificat constelatii nu are reclame si cantareste 12 MB. Uneori software-ul simplu castiga. #diy',
    tags: ['diy'],
    image: null,
    likes: 129,
    comments: [],
  },
]

export const topics = [
  { tag: 'astro', posts: '12.4k postari' },
  { tag: 'luna', posts: '8.1k postari' },
  { tag: 'meteori', posts: '5.6k postari' },
  { tag: 'diy', posts: '3.2k postari' },
  { tag: 'fizica', posts: '2.9k postari' },
]


export const imaginiDemo = [
  'https://picsum.photos/id/1039/900/600',
  'https://picsum.photos/id/1036/900/600',
  'https://picsum.photos/id/1015/900/600',
]
