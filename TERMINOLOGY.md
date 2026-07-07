# CSP Canonical Terminology

This document defines the official vocabulary used in the **Cognitive Skill Passport (CSP)** ecosystem. All definitions are implementation-independent.

## Core Concepts

### Cognitive Component
A functional unit of an AI system that performs a specific cognitive task (e.g., an agent, a tool, or a transformation module).

### Passport
An immutable, author-signed metadata record that defines the identity, requirements, and intent of a Cognitive Component.

### Standard
The overarching specification (e.g., CSP-0.1) that governs how cognitive artifacts must be structured and interpreted.

### Artifact
Any unit of information or code (Passport, Schema, Spec) produced within the CSP ecosystem.

## Structural Definitions

### CORE
A hierarchical classification system (**Nature.Action.Domain**) used to identify a component's fundamental characteristics (e.g., `AG.SY.DATA`).

### Compatibility
The layer describing the structural and resource requirements (inputs, outputs, formats, capabilities) needed for a component to function.

### Runtime
The dynamic layer that tracks execution metrics, performance history, and behavioral divergence in a specific host environment.

### Attestation
A verifiable claim or signature issued by a runtime environment or third party confirming that a component behaved as described in its Passport.

## Tools & Utilities

### Inspector
A comprehensive workbench for deep analysis, evaluation, and visualization of CSP Passports and their performance.

### Validator
A specialized utility that checks a Passport against official schemas for syntactic and logical correctness.

### Reference Implementation
A non-commercial, open-source realization of a tool or component that serves as a guide for others following the standard.

## Component Types

### Skill
A specific, measurable capability described by a Passport (e.g., "Synthesize analytical reports").

### Agent
A goal-oriented cognitive component capable of adaptive decision-making and context awareness.

### Workflow
A sequence of coordinated cognitive components or skills arranged to achieve a complex goal.

### Tool
A deterministic operator or function that performs a specific, bounded transformation or action.

### Reasoning Module
A specialized component focused on high-level cognitive processing, such as planning, inference, or logic.
