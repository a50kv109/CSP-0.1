# CSP-0.1 — Cognitive Skill Passport

CSP-0.1 is an open standard for describing, verifying and transferring AI skills across systems.

**Core formula:**
---

## Problem

AI systems today are fragmented:
- skills are platform-locked
- behavior is unpredictable
- no standard way to compare or verify execution

---

## Solution

CSP introduces a **passport for AI skills**:
- immutable definition (Passport)
- dynamic execution layer (Runtime)

---

## How it works

Each skill is defined by a structured passport:

```yaml
passport:
  core: "AG.SY.DATA"
  description: "Analytical agent for structured reports"
  requirements:
    reasoning_depth: 0.8
    structure: 0.9
    adaptability: 0.5
