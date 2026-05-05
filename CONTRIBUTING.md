# Contributing to CSP-0.1

**Protocol:** CSP-0.1 — Cognitive Skill Passport  
**Author:** Artsybashev Andrii Oleksiiovych  
**DOI:** 10.5281/zenodo.19639060

---

## What you can contribute

- Examples of skill passports (new CORE combinations)
- Clarifications and improvements to documentation
- Translations of the specification
- Test cases for DBE verification
- Tools that implement or validate CSP-0.1 passports

## What requires a version bump

Any change to the following is a **breaking change** and requires a new version (CSP-0.2 or higher):

- The CORE classification system (Nature / Action / Domain values)
- The Passport structure (required fields)
- The definition of TDI or DBE
- The Economic or Policy layer principles

Do not submit pull requests that modify these without opening an Issue first.

## Rules

1. **Do not modify the Passport structure** without a version discussion.
2. **Attribution is required.** Conceptual authorship belongs to Artsybashev Andrii Oleksiiovych.
3. **No breaking changes in patch contributions.** Add, clarify, or illustrate — do not redefine.
4. Keep examples minimal and correct. One passport per file, YAML format.

## How to submit

1. Fork the repository
2. Create a branch: `feature/your-contribution`
3. Submit a Pull Request with a clear description of what and why

## Questions

Open an Issue. Describe the problem or proposal clearly.
