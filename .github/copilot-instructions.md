# GitHub Copilot – Project Instructions

## General style and scope

- Scrie cod concis, clar și ușor de întreținut.
- Respectă bunele practici din:
  - React (hooks, componentizare, evitarea side‑effects necontrolate, props clare)
  - JavaScript (ES6+, const/let, arrow functions, evitarea variabilelor globale)
  - Frontend development (separarea responsabilităților, accesibilitate de bază, structură logică a componentelor).

- Nu modifica lucruri care țin de contextul problemei deja discutate:
  - Nu schimba structura principală a aplicației fără să fie cerut explicit.
  - Nu redenumi componente, hook‑uri sau variabile existente doar „pentru stil”.
  - Nu altera logica de business deja implementată, decât dacă cer explicit refactorizare.

## Comentarii

- Limitează comentariile la cazurile absolut necesare:
  - Explicarea unei logici complexe sau a unui algoritm non‑trivial.
  - Marcarea unui TODO clar, cerut explicit.
  - Clarificarea unui workaround tehnic (de exemplu, o limitare de API sau browser).

- Nu adăuga comentarii redundante sau evidente:
  - Fără comentarii de tipul `// increment counter` sau `// call API`.
  - Fără comentarii care doar repetă numele funcției sau variabilei.
  - Fără comentarii „explicative” pentru concepte de bază din React/JS, dacă nu sunt cerute.

- Nu lăsa blocuri mari de cod comentat ca „alternative” decât dacă cer explicit acest lucru.

## React best practices

- Folosește componente funcționale și hooks (nu clase) pentru cod nou.
- Respectă regulile hooks:
  - Nu apela hooks în condiții sau bucle.
  - Păstrează ordinea apelurilor de hooks stabilă.
- Folosește `useState`, `useEffect`, `useMemo`, `useCallback` doar când sunt necesare.
- Evită:
  - `any` abuziv în TypeScript (dacă proiectul folosește TS).
  - Mutarea directă a props sau state (folosește copii imutabile).
  - Logica complexă direct în JSX – extrage în funcții sau hooks.

## JavaScript & frontend best practices

- Folosește:
  - `const` pentru valori care nu se reasignează.
  - `let` pentru variabile care se schimbă.
  - Arrow functions pentru funcții scurte și callbacks.
- Evită:
  - Variabile globale inutile.
  - Cod duplicat – propune refactorizare doar dacă este clar și util.
- Respectă:
  - Structura proiectului existent (foldere, naming, pattern‑uri).
  - Convențiile de stil (ESLint/Prettier) dacă sunt prezente în proiect.

## Interacțiune cu utilizatorul (developerul)

- Urmează strict cerințele din promptul curent.
- Dacă cerința este ambiguă:
  - Propune o soluție clară și întreabă (prin comentariu minim sau text în chat) dacă este acceptabilă.
- Nu introduce funcționalități sau refactorizări necerute:
  - Fără „optimizări” speculative.
  - Fără schimbări de arhitectură fără cerere explicită.

## Output expectations

- Codul generat trebuie să fie:
  - Consistent cu restul proiectului.
  - Ușor de citit și de modificat.
  - Fără comentarii inutile.
- Dacă este nevoie de explicații:
  - Folosește textul din chat pentru explicații detaliate.
  - În cod, păstrează comentariile la minimul necesar.
