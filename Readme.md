# Adelic Transition Engine: O(N) Resolution of Worst-Case LWE

[![Project NP](https://img.shields.io/badge/Project-NP-blueviolet)](https://open-experiments.org/np/)
[![Architecture](https://img.shields.io/badge/Architecture-Intel_x86__64-orange)](https://www.intel.com/)
[![Institution](https://img.shields.io/badge/Institution-NTNU_CSIE-green)]()

## 1. Overview
This repository contains the implementation of the **Adelic Transition Engine**, a framework designed to resolve NP-complete state spaces—specifically focusing on **Worst-Case LWE (Learning With Errors)**—in linear time $O(N)$. 

By leveraging the **Marilyn-Adelic Consensus Formula**, this engine collapses high-dimensional algebraic manifolds into a 180° flattened state, allowing for the direct extraction of secret keys without branch-based backtracking.

## 2. Core Theoretical Framework
Our approach departs from traditional lattice-based reduction (e.g., BKZ) by introducing:

* **Grandparent Sentinel (G)**: A fixed truth-anchor at the MSB, enforcing an **MSB-Origin logic**.
* **Marilyn Fold ($\Omega$)**: A geometric operator for arithmetic pressure, achieving $R \equiv H \pmod{M_p}$.
* **Residual Arithmetic Friction (RAF)**: "Ghost Carries" that identify logical contradictions in the bitstream.
* **Destructive Phase Interference (DPI)**: Real-time Boolean reversal that neutralizes RAF, leading to the **Crystallization Phase**.

## 3. Hardware Implementation (Intel x86_64)
The engine is optimized for Intel BMI2 (Bit Manipulation Instruction Set 2) to achieve complexity collapse.

### Compilation
```bash
gcc -O3 -mbmi2 -march=native Engine_Core.c -o adelic_engine
./adelic_engine
