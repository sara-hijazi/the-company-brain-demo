# The Company Brain

Arabic-first browser-only portfolio demo for fictional Madar Logistics.

## Run

```sh
npm install
npm run dev
```

Vite prints the actual loopback URL (default port 5173; occupied ports are skipped).

## Validate

```sh
npm run typecheck
npm run build
npm run check:retrieval
git diff --check
```

## Structure

- `src/knowledge/data.ts`: five bilingual, versioned sources and 15 sections.
- `src/engine/retrieve.ts`: normalized bilingual topic signals, weighted ranking and selected evidence.
- `src/i18n/index.ts`: shared Arabic/English UI copy.
- `src/App.tsx`: shared state journey, evidence modal, overview and reset behavior.
- `src/styles.css`: responsive RTL/LTR, intentional light/dark styling and reduced motion.

Answers are extractive: the text shown is exactly the selected local evidence. This is a deterministic retrieval simulation, not a language model or embedding service. Keyword signals are deliberately small and may miss unusual phrasing. Fictional policies are demo content, not real operational guidance.

## Review status

TypeScript, production build and deterministic retrieval checks passed. No credential patterns found in project sources; whitespace check passed. UI source review confirms Arabic default and direction switching, in-session theme preservation, cancellable search timers, Home/another-question reset, exact evidence linkage, and dataset-derived counts.

Interactive browser/visual verification remains for Product Owner review: the environment exposes no browser connection and denies native computer-use permissions. Review desktop/mobile, both languages/themes, source modal, fallback, and resets in the running preview.

No commit, push or deployment was performed.
