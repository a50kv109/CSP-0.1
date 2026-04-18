# CSP-0.1 — Cognitive Skill Passport

CSP-0.1 is an open standard for describing, verifying, and transferring AI skills across systems.

---

## Core Concept

**Skill = Passport + Runtime Behavior**

- **Passport** — immutable definition of a skill  
- **Runtime** — dynamic execution in a specific environment  

---

## Problem

Modern AI systems are fragmented:

- Skills are platform-locked  
- Behavior is unpredictable  
- No standard way to compare or verify execution  

---

## Solution

CSP introduces a standardized passport for AI skills:

- Fixed, immutable structure (Passport)  
- Measurable execution (Runtime)  
- Cross-system compatibility  

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
