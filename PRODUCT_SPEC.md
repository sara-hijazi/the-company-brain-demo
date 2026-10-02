# The Company Brain

An Arabic-first, bilingual interactive portfolio demo for a fictional logistics company, مدار للخدمات اللوجستية / Madar Logistics. Employees ask operational questions and inspect the exact internal knowledge that informs the response.

## Journey
Home → Ask → five retrieval stages (4.5 seconds) → grounded answer → source evidence. The answer also opens a knowledge overview. Home clears the journey; Ask Another Question starts a fresh question. Language and theme persist.

## Scope
React, Vite, strict TypeScript. Browser-only structured bilingual knowledge and deterministic retrieval. No accounts, backend, paid APIs, analytics or external runtime services. Static hosting supported with relative asset paths.

## Knowledge and grounding
Five versioned fictional sources cover delays, damage, address changes, domestic SLA and escalation. Each has three independently retrievable bilingual sections. Normalized Arabic/English topic signals and weighted token overlap rank chunks. Answers consist exclusively of retrieved operational sections; sources and evidence share the same chunk identifiers. Unknown or ambiguous unsupported questions return an explicit insufficient-evidence response.

## Acceptance
Arabic RTL default; English LTR; light and dark themes; responsive keyboard-accessible controls; reduced motion; source evidence dialog; dataset-derived overview counts. Typecheck, production build, lightweight deterministic checks, secret scan and whitespace check. No commit, push or deployment.
