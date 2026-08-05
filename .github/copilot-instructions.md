# Copilot Project Instructions – React Frontend

You are GitHub Copilot working in a React + JavaScript frontend project.

## General style and best practices

- Prefer **clean, idiomatic React**:
  - Use **functional components** and **hooks**.
  - Avoid legacy patterns (class components, unsafe lifecycle methods).
  - Keep components **small and focused**.
- Follow **JavaScript best practices**:
  - Use `const` and `let`, avoid `var`.
  - Avoid unnecessary global state and side effects.
  - Prefer pure functions where possible.

## Comments

- **Limit comments strictly**:
  - Do NOT add explanatory comments for obvious code.
  - Add comments ONLY when:
    - There is non-trivial business logic.
    - There is a workaround or a known limitation that must be documented.
  - Do NOT add comments like “TODO: handle error” unless explicitly requested.
- Do NOT generate large comment blocks describing what the code does if it is already clear from the code.

## Frontend and React best practices

- Use **clear, semantic JSX**:
  - Prefer meaningful component and prop names.
  - Avoid deeply nested JSX when possible; extract subcomponents.
- Handle **state and props** carefully:
  - Avoid unnecessary state; derive values from props when possible.
  - Keep side effects inside `useEffect` with correct dependency arrays.
- Respect **accessibility**:
  - Use proper HTML semantics (e.g. `<button>` for clickable actions).
  - Add `aria-` attributes only when needed and meaningful.

## Scope and context

- When modifying code:
  - **Only change code that is directly related to the current request or problem.**
  - Do NOT refactor unrelated files or functions unless explicitly asked.
  - Do NOT rename variables, functions, or components outside the scope of the current change.
- Preserve existing behavior unless the request explicitly asks to change it.

## Output format

- Prefer **concise, production-ready code**:
  - No unnecessary console logs.
  - No placeholder comments.
  - No dead code or unused imports.
- When asked to refactor:
  - Show the **final version of the file** or component.
  - Avoid mixing old and new code in the same snippet.

## Error handling

- Use simple, clear error handling:
  - Avoid over-engineering try/catch blocks.
  - Only add error handling when relevant to the request.

