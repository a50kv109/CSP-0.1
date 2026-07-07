# Repository Governance & Scope

This document defines the boundaries, principles, and long-term organization of the **CSP Reference Repository**.

## 1. Repository Scope

### What Belongs Here (In-Scope)
- **Standards:** Official protocol specifications (Markdown).
- **Schemas:** Machine-readable definitions (JSON Schema, YAML).
- **Reference Examples:** High-quality passport samples for testing.
- **Reference Implementations:** Non-commercial, open-source tools (e.g., CSP Inspector).
- **Validation Tools:** Logic for checking passport correctness.
- **Research:** Engineering studies, simulations, and whitepapers.
- **Proposals:** Concepts for future extensions of the standard.

### What Does NOT Belong (Out-of-Scope)
- **Prompt Collections:** General-purpose prompt libraries.
- **Private Agents:** Passports for closed or proprietary commercial agents.
- **Model Weights:** Large Language Model binaries or datasets.
- **Training Data:** Raw datasets used for training cognitive models.
- **Commercial Products:** End-user applications built *on* CSP but not *part* of it.

## 2. Engineering Principles

1. **Specification Before Implementation:** The standard defines the truth; tools must adapt to the standard.
2. **Backward Compatibility:** Published standards (marked as stable) must not be broken by subsequent updates.
3. **Machine-Readable First:** Documentation is good, but executable schemas are the ground truth for interoperability.
4. **Vendor Independence:** No cloud-specific or platform-specific logic should exist in the core standard.
5. **Transparency:** Every change to the standard must be documented and justified through the proposal system.

## 3. Reference Architecture (Long-term)

| Directory | Content Description |
| :--- | :--- |
| `standards/` | Official specifications (e.g., CSP-0.1, CSP-0.2). |
| `schemas/` | JSON/YAML schemas for automated validation. |
| `proposals/` | RFCs and concepts for future evolution (e.g., EAL). |
| `examples/` | Valid reference passports for different CORE types. |
| `research/` | Academic studies, economic models, and benchmarks. |
| `src/` | Tools for inspection, validation, and generation. |
| `docs/` | User-facing documentation and preprints. |
| `tests/` | Compatibility tests for the standard itself. |

## 4. Evolution Stages

- **Stage 1: Identity & Description** (Current - CSP-0.1/0.2)
- **Stage 2: Schema & Automated Validation** (Upcoming)
- **Stage 3: Inspection & Evaluation Tooling** (CSP Inspector)
- **Stage 4: Execution Attestation & Trust Layer** (EAL)
- **Stage 5: Cross-Ecosystem Interoperability** (LangGraph, AutoGen, MCP bridge)
