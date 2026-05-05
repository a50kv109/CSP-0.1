# CSP Versioning Policy

**Protocol:** CSP — Cognitive Skill Passport
**Author:** Artsybashev Andrii Oleksiiovych

---

## Version numbering

```
CSP-[MAJOR].[MINOR]
```

- **MAJOR** — breaking change to the core architecture (CORE classification, Passport structure, DBE/TDI definitions).
- **MINOR** — additive change (new optional layer, clarification, example).

---

## Version history

| Version | Date | Type | Changes |
|---------|------|------|---------|
| CSP-0.1 | 2026-04-16 | Base | Passport/Runtime split, CORE, DBE/TDI, Policy, Economic layer. DOI: 10.5281/zenodo.19639060 |
| CSP-0.2 | 2026-05-04 | Additive | Optional Compatibility Layer (I/O formats, capabilities, constraints). CORE unchanged. |

---

## Rules

### What is a breaking change (requires MAJOR bump)

- Any change to the CORE classification values (Nature / Action / Domain)
- Any change to required Passport fields
- Any change to the definition of TDI or DBE
- Any change to the Economic or Policy layer invariants

Breaking changes require:
1. Opening an Issue with justification
2. Discussion period (minimum 14 days)
3. New version tag

### What is an additive change (MINOR bump)

- New optional layer or field
- New examples or documentation
- Clarification of existing rules without changing them
- New tools or validators

---

## Backward compatibility

CSP-0.1 passports are fully valid in CSP-0.2 and all future minor versions.

A passport that was valid in version N must remain valid in version N+x (minor).
