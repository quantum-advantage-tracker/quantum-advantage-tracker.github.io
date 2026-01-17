## Overview

The **Quantum Advantage Tracker (QAT)** is an open-source, platform-agnostic framework designed to collect, validate, and compare experimental results in the pursuit of quantum advantage. As quantum computing transitions from theoretical milestones to experimental claims, QAT provides the quantum community with a centralized platform to track progress through a lens of scientific rigor and falsifiability.

Quantum advantage is more than just a performance metric; it is a scientific hypothesis. QAT enables researchers to test this hypothesis by providing standardized pathways for verification, ensuring that quantum outputs can be trusted even when produced by noisy, intermediate-scale quantum (NISQ) devices.

## The Three Pathways

To facilitate a comprehensive analysis of advantage claims, the project organizes submissions into three distinct methodology-based trackers:

### 1. Observable Estimations 📊
Focuses on submissions that report expectation values for observables. To be validated, these results must include mathematically grounded error bars and rigorous error control. This pathway prioritizes trust through provable confidence intervals.

### 2. Variational Problems 🌀
Focuses on variational algorithms (such as VQE) that provide guaranteed solution bounds. Submissions must demonstrate that the chosen ansatz and optimization process respect the variational principle, allowing for benchmarking against classical methods even when exact solutions are unknown.

### 3. Classically Verifiable Problems 🗝️
Focuses on problems where the quantum output can be efficiently checked using classical resources. This includes scoring solutions against known answers or verifying "witnesses" that prove the validity of the quantum computation.

---

## Getting Started

### Accessing the Tracker
The primary interface for the project is the web-based dashboard, where you can browse current submissions, compare performance across different hardware, and download circuit instances.

**Official Website:** [https://quantum-advantage-tracker.github.io](https://quantum-advantage-tracker.github.io)

### Local Development
If you wish to run the tracker environment locally for development or private analysis, ensure you have [node.js](https://nodejs.org) installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

3.  **Build for production:**
    ```bash
    npm run build
    ```

---

## Participation and Submissions

QAT is a community-driven project that welcomes contributions from researchers across all organizations. The submission process is handled entirely through GitHub to maintain transparency and version control.

### Submission Workflow
1.  **Choose a Pathway:** Identify which of the three pathways (Observable, Variational, or Verifiable) fits your experiment.
2.  **Select an Instance:** Use the provided circuit models, Hamiltonians, or instances located in the `/data` directory of the repository.
3.  **Run Experiment:** Execute your computation on your quantum hardware or simulator.
4.  **Submit Results:** Open a new issue using the provided templates on the [GitHub repository](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/issues/new/choose).

For detailed technical specifications on how to format your data for submission, please refer to the [Data Contribution Documentation](https://github.com/quantum-advantage-tracker/quantum-advantage-tracker.github.io/tree/main/data/README.md).
