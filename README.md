# CSP — Cognitive Skill Passport

**Open standard for describing, validating, and exchanging cognitive components across heterogeneous AI ecosystems.**

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19639060.svg)](https://doi.org/10.5281/zenodo.19639060)
[![Status](https://img.shields.io/badge/Status-Draft-yellow.svg)](#reference)

---

## 🏛️ Project Governance & Architecture
This repository is the reference home for the CSP standard. Before contributing, please read:
- **[Problem Statement](PROBLEM-STATEMENT.md)** — Why the world needs CSP.
- **[Project Manifest](MANIFEST.md)** — Mission and vision.
- **[Ecosystem Architecture](ARCHITECTURE.md)** — Component interaction map.
- **[Terminology](TERMINOLOGY.md)** — Canonical vocabulary.
- **[Governance & Scope](GOVERNANCE.md)** — Engineering principles and scope.

---

## 🗺️ Quick Navigation

- **[Standards](standards/)** — Canonical protocol specifications:
    - [CSP-0.1](standards/CSP-0.1.md)
    - [CSP-0.2](standards/CSP-0.2.md)
    - [Reference Architecture](standards/CSP-REFERENCE-ARCHITECTURE.md)
    - [Compliance 0.1](standards/CSP-COMPLIANCE-0.1.md)
- **[Examples](examples/)** — Sample passports and implementations.
- **[Proposals](proposals/)** — Future concepts ([CSP-TRUST-CONCEPT](proposals/CSP-TRUST-CONCEPT.md)).
- **[Roadmap](ROADMAP.md)** — Project evolution and future goals.
- **[Changelog](CHANGELOG.md)** — History of engineering changes.

---

## 💡 Core Concept

**Skill = Passport + Runtime Behavior**

A skill is defined by two independent layers:

- **Passport:** Immutable, author-signed description of skill definition and requirements
- **Runtime:** Dynamic execution metrics and behavior in a specific environment

---

## Problem

Current AI systems suffer from:

- **Platform Lock-in:** Skills are tightly coupled to specific platforms and frameworks
- **Unpredictable Behavior:** No standardized way to assess or compare skill performance across systems
- **No Verification Standard:** Skills lack cryptographic identity and verifiable properties
- **Fragmentation:** Each platform maintains its own skill representation, incompatible with others

---

## Solution

CSP-0.1 introduces a minimal, strict protocol:

- **Immutable Passport:** Fixed, version-controlled definition of what a skill is and requires
- **Measurable Runtime:** Quantifiable execution metrics tied to specific environments
- **Cross-system Compatibility:** Skills described in CSP-0.1 are portable and interoperable
- **Zero-Trust Architecture:** Skills can be verified without trusting a specific platform

---

## How It Works

### Passport Structure

Each skill is defined by a structured Passport:

```yaml
passport:
  core: "AG.SY.DATA"
  description: "Analytical agent for structured data reports"
  requirements:
    reasoning_depth: 0.8
    structure: 0.9
    adaptability: 0.5
  meta:
    author: "Artsybashev Andrii Oleksiiovych"
    version: "1.0"
```

### Layers

**Passport (Immutable):**
- Core identifier and classification
- Skill description and intent
- Required capability thresholds
- Author signature and metadata

**Runtime (Dynamic):**
- Actual performance metrics in a specific environment
- Execution context and system configuration
- Observed behavior divergence (TDI)
- Benchmark results (DBE)

---

## CORE Classification

Skills are identified by a hierarchical classification: **Nature.Action.Domain**

- `AG.SY.DATA` — Agent that synthesizes structured reports
- `OP.TR.LANG` — Operator that transforms natural language
- `ST.AN.CODE` — Structurer that analyzes code

---

## Verification

### DBE (Dynamic Benchmark Engine)
Standardized evaluation framework for assessing skill performance against defined criteria. Results are reproducible and environment-aware.

### TDI (Tensor Divergence Index)
Quantifies deviation of actual runtime behavior from expected Passport requirements. Range: 0 (stable) to 1 (failure).

---

## Policy & Safety

**Immutable Passport + Local Control:**

The Passport defines the skill contract and cannot be modified. Each runtime environment maintains control over acceptance, restriction, or rejection. Decisions are local and do not affect skill portability.

---

## Economic Principle

**Developer-Led Growth Principle:**

Developer share of value should exceed platform share. Skills created and published by developers are the primary unit of value.

---

## Why It Matters

- **Portability:** Skills can be deployed across compatible runtimes
- **Predictability:** Standardized verification enables reliable performance assessment
- **Safety:** Immutable Passports provide cryptographic identity and non-repudiation
- **Interoperability:** Open standard eliminates platform-specific representations
- **Scalable Ecosystems:** Foundation for decentralized AI skill marketplaces

---

## 📚 Reference & Status

- **DOI:** [10.5281/zenodo.19639060](https://doi.org/10.5281/zenodo.19639060)
- **Status:** Active Evolution (CSP-0.1, CSP-0.2 Published)
- **Next Stage:** Tooling & Validation (see [Roadmap](ROADMAP.md))

---

## 🏗️ Repository Structure

- `standards/` — Canonical specifications (CSP, Architecture, Compliance).
- `proposals/` — Draft concepts for ecosystem discussion.
- `examples/` — Practical YAML passport examples.
- `docs/` — Supporting documentation and PDF preprints.
- `src/` — Source code for related tools (Validator, Inspector).
- `archive/` — Historical references and logs.

---

## 🤝 Contributing

Contributions are welcome via Pull Requests.

- **Allowed:** Examples, clarifications, documentation improvements
- **Not allowed:** Breaking changes to Passport structure
- **Rule:** No breaking changes without version update
- **Authorship:** Conceptual authorship retained by Artsybashev Andrii Oleksiiovych

By contributing, you agree to the terms in [CONTRIBUTING.md](CONTRIBUTING.md).

---

**Author:** Artsybashev Andrii Oleksiiovych