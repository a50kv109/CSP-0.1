# CSP-0.1 — Cognitive Skill Passport

**Version:** 0.1 (Strict)
**Status:** Canonical Standard
**DOI:** 10.5281/zenodo.19639060
**Author of standard:** Artsybashev Andrii Oleksiiovych
**License:** CC BY 4.0

---

## 1. Core Concept

**Skill = Passport + Runtime Behavior**

- **Passport:** Immutable identity, structural requirements, and cognitive contract of the skill.
- **Runtime Behavior:** Dynamic execution metrics and historical performance in a specific host environment.

---

## 2. CORE Classification

**CORE = Nature . Action . Domain**

**Nature:**
| Code | Name | Description |
|------|------|-------------|
| `OP` | Operator | Pure, deterministic function. No goal-setting. |
| `PR` | Procedure | Rigid sequence of actions. No context adaptation. |
| `AG` | Agent | Goal-oriented, adaptive entity. Makes decisions. |
| `MI` | Mind Model | Meta-level interpretive framework. |

**Action:**
| Code | Name | Description |
|------|------|-------------|
| `TR` | Transformation | Format or structural conversion. |
| `AN` | Analysis | Decomposition and pattern recognition. |
| `SY` | Synthesis | Assembly of disparate elements into a new whole. |
| `CO` | Coordination | Orchestration of other processes or skills. |

**Domain:**
| Code | Description |
|------|-------------|
| `DATA` | Structured data, metrics, tables, arrays. |
| `LANG` | Text, language, semantics, dialogue. |
| `SYS` | Engineering, architecture, code, systems. |
| `VIS` | Spatial and visual data. |

**Examples:**
- `AG.SY.DATA` — Agent synthesizing analytical reports from data arrays.
- `OP.TR.LANG` — Deterministic language transformer.
- `MI.AN.VIS` — Mind Model analyzing visual information.

---

## 3. Passport Architecture

The passport is the invariant specification of the skill.
Host systems cannot alter this contract.

```yaml
passport:
  core: "AG.SY.DATA"
  description: "Agent synthesizing structured analytical reports from raw data."
  requirements:
    reasoning_depth: 0.8   # 0.0–1.0
    structure:       0.9   # 0.0–1.0
    adaptability:    0.5   # 0.0–1.0
  meta:
    author:  "Artsybashev Andrii Oleksiiovych"
    version: "1.0"
```

---

## 4. Verification Methods

CSP-0.1 defines two primary methods for validating the relationship between a Passport and its Runtime reality.

### 4.1. DBE (Dynamic Benchmark Engine)
Standardized evaluation framework for assessing skill performance against Passport criteria. Results are reproducible and environment-aware.

### 4.2. TDI (Tensor Divergence Index)
Quantifies deviation of actual runtime behavior from expected Passport requirements. Range: 0 (stable) to 1 (failure).

---

## 5. Implementation Status

This document represents the L1 (Specification) layer of the CSP architecture.
Target implementation tools:
- **Validator** (L2) — Verifies Passport syntax and CORE integrity.
- **Inspector** (L3) — Analyzes Runtime behavior and calculates TDI.
- **Attestation** (L4) — Issues cryptographic proof of compliance.

      capabilities:
        - "text_extraction"
        - "layout_analysis"
    - category: "structured"
      formats: ["json", "csv"]
      capabilities:
        - "parse_table"
  output:
    - category: "structured"
      formats: ["json", "yaml"]
  constraints:
    max_file_size_mb: 50
    encoding: "utf-8"
```

### 4.3. Design Rules

- **Optional:** If absent, the skill is assumed to operate on raw text/tokens.
- **Backward Compatible:** CSP-0.1 passports remain fully valid without this layer.
- **Machine-Readable:** Designed strictly for algorithmic pre-execution validation.
- **Pre-Execution:** Orchestration systems must validate I/O compatibility before invoking the skill.

---

## 5. Runtime Layer

Tracks dynamic, environment-specific execution metrics.
This layer updates continuously based on operational history.

```yaml
runtime:
  rating:      0.0
  usage_count: 0
  reliability:
    success_rate: null
    stability:    null
  tdi:          0.0
  last_updated: "YYYY-MM-DD"
```

---

## 6. Verification

- **DBE (Dynamic Benchmark Engine):** Generates dynamic stress-tests to verify
  skill behavior against its declared passport requirements.
- **TDI (Tensor Divergence Index):** Measures deviation between declared passport
  requirements and actual runtime output.
  - `0.0` = Perfect structural stability.
  - `1.0` = Total ontological collapse / hallucination.

---

## 7. Policy & Safety

Governed by the **Immutable Passport + Local Control** principle.

The host environment has absolute sovereignty to control execution,
but cannot alter the original passport.

```yaml
policy:
  admission:
    status: "accepted | restricted | rejected"
    reason:
      type: "safety | compliance | policy | performance"
  lifecycle:
    state: "active | suspended | deprecated | removed"
```

**Principle:** `No Passport → No Execution`

---

## 8. Economic Principle

**Developer-Led Growth:**
In a sustainable ecosystem, the developer's revenue share must exceed
the platform's share to incentivize continuous creation of new cognitive units.

```yaml
economic:
  developer_share:       0.80
  platform_share:        0.20
  quality_bonus_enabled: true
```

**Invariant:** `developer_share > platform_share`

---

## 9. Version History

| Version | Date | Changes |
|---------|------|---------|
| **CSP-0.1** | 2026-04-16 | Base protocol: Passport/Runtime split, CORE classification, DBE/TDI, Policy, Economic layer. |
| **CSP-0.2** | 2026-05-04 | Additive: Optional Compatibility Layer (I/O formats, capabilities, constraints). CORE unchanged. |

---

*CSP-0.2 — Cognitive Skill Passport*
*Author of standard: Artsybashev Andrii Oleksiiovych*
*DOI (v0.1 base): 10.5281/zenodo.19639060*
