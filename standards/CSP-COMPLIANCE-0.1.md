# CSP-COMPLIANCE-0.1: Conformance Levels Specification

**Version:** 0.1  
**Status:** Draft / Normative Proposal  
**Parent Specification:** CSP Reference Architecture  
**Scope:** Measuring implementation adherence to the CSP Standard

---

## 1. Purpose
The **CSP Compliance Specification** defines the normative criteria for evaluating how closely a cognitive component, host environment, or tool adheres to the Cognitive Skill Passport (CSP) standard. 

Compliance is distinct from the Passport itself; while the Passport describes an *artifact*, Compliance measures the *implementation's ability* to process, validate, and honor that artifact.

## 2. Compliance Levels (L0 - L4)

The standard defines five levels of conformance, allowing for incremental adoption across different AI ecosystems.

### Level 0: Non-Compliant (Shadow Component)
- **Definition:** No CSP support.
- **Status:** The component lacks a machine-readable passport or uses a proprietary, non-interoperable metadata format.

### Level 1: Passport Aware (Identity Level)
- **Definition:** Basic identity recognition.
- **Mandatory:** Valid `passport` section with a CORE identifier.
- **Validation:** Syntactic check of the `passport` and `meta` blocks only.
- **Capability:** The system can identify *who* the component is and *what* its nature is (Nature.Action.Domain).

### Level 2: Contract Aware (Compatibility Level)
- **Definition:** Structural interoperability.
- **Mandatory:** L1 + Valid `compatibility` section.
- **Validation:** Semantic validation of I/O contracts, formats, and resource constraints.
- **Capability:** The system can perform pre-flight checks to ensure the component fits into a specific workflow or pipeline.

### Level 3: Behavior Aware (Observation Level)
- **Definition:** Performance transparency.
- **Mandatory:** L2 + Valid `runtime` section.
- **Validation:** Real-time or batch validation of execution metrics against declared requirements.
- **Capability:** The system can track usage, reliability, and calculate the Tensor Divergence Index (TDI).

### Level 4: Fully Compliant (Trust Level)
- **Definition:** Total CSP integration.
- **Mandatory:** L3 + `verification` + `attestation` support.
- **Validation:** Cryptographic or logic-based verification of execution signatures.
- **Capability:** The system supports the Execution Attestation Layer (EAL) and Dynamic Benchmark Engine (DBE) results.

---

## 3. Compliance Matrix

| Feature | L0 | L1 | L2 | L3 | L4 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Passport Section** | ✖ | **M** | **M** | **M** | **M** |
| **CORE Classification** | ✖ | **M** | **M** | **M** | **M** |
| **Compatibility Section** | ✖ | O | **M** | **M** | **M** |
| **Runtime Metrics** | ✖ | ✖ | O | **M** | **M** |
| **Attestation Support** | ✖ | ✖ | ✖ | O | **M** |
| **Syntax Validation** | ✖ | **M** | **M** | **M** | **M** |
| **Semantic Validation** | ✖ | ✖ | **M** | **M** | **M** |
| **Trust Validation** | ✖ | ✖ | ✖ | ✖ | **M** |

**M** = Mandatory | **O** = Optional | **✖** = Not Provided

---

## 4. Validation Principles

Conformance is measured through four distinct validation pipelines:

1.  **Syntax Validation:** Verification against the JSON/YAML Schema (L1+).
2.  **Semantic Validation:** Logic-check of the Consistency between `requirements` and `compatibility` (L2+).
3.  **Runtime Validation:** Observation of actual behavior vs. declared Passport thresholds (L3+).
4.  **Trust Validation:** Verification of signatures and third-party attestations (L4+).

## 5. Implementation Guidelines

- **Backward Compatibility:** All Level $N$ implementations MUST be able to process Level $N-1$ artifacts, ignoring fields they are not yet equipped to handle.
- **Fail-Fast Policy:** If a mandatory field for the declared Compliance Level is missing or malformed, the implementation MUST flag the artifact as non-conforming.
- **Transparency:** Tools (like CSP Inspector) should explicitly state the Compliance Level being checked.

## 6. Relationship with Other Documents

This specification formalizes the concepts introduced across the CSP ecosystem:
- **[CSP-0.1](CSP-0.1.md) / [0.2](CSP-0.2.md):** Defines the sections being measured.
- **[Reference Architecture](CSP-REFERENCE-ARCHITECTURE.md):** Defines the layers (L1-L4) this document measures.
- **[Governance](../GOVERNANCE.md):** Sets the rules for how this specification remains vendor-neutral.

---

## 7. Status & Updates
This document is a **Normative Proposal**. Future updates will refine the exact metric thresholds required for L3 and the cryptographic standards for L4.
