# Using GitHub Copilot + Automated Scanning to Detect Insecure Code

## Project Overview

This project demonstrates how AI-generated code can introduce security vulnerabilities and how automated security scanning tools can identify and help remediate insecure coding practices.

The lab focuses on the DevSecOps security approach:

**AI Assistance → Developer Review → Automated Security Scanning → Vulnerability Remediation → Validation**

GitHub Copilot is used to generate code examples, including intentionally insecure coding patterns, and GitHub Code Scanning with CodeQL is used to detect security issues.

---

## Project Objectives

The objectives of this project are:

- Understand that AI-generated code is not always secure.
- Identify common insecure coding patterns.
- Use automated security scanning tools to detect vulnerabilities.
- Practice secure code remediation using AI assistance.
- Understand the importance of security verification in DevSecOps workflows.

---

## Tools and Technologies

| Tool | Purpose |
|---|---|
| GitHub Copilot | AI-assisted code generation |
| GitHub Copilot Chat | AI-based code explanation and secure code suggestions |
| Visual Studio Code | Development environment |
| GitHub Code Scanning | Automated security analysis |
| CodeQL | Static Application Security Testing (SAST) tool |
| Git | Version control |

---

## Security Workflow

The project follows this workflow:

```text
Developer Request
        |
        ↓
GitHub Copilot Generates Code
        |
        ↓
Developer Reviews Code
        |
        ↓
GitHub Code Scanning + CodeQL Analysis
        |
        ↓
Security Vulnerabilities Identified
        |
        ↓
AI-Assisted Secure Code Improvement
        |
        ↓
Security Validation
```

---

## Project Structure

copilot-security-lab
│
├── src
│   └── login.js
│
├── screenshots
│
├── docs
│
└── README.md


---

## Security Concepts Demonstrated

This project demonstrates detection of insecure coding patterns such as:

- Hardcoded credentials
- Weak authentication logic
- Missing input validation
- Insecure password handling
- Lack of secure coding practices

---

## Learning Outcomes

After completing this project, the learner will understand:

- Risks of blindly trusting AI-generated code.
- Importance of secure code review.
- Role of SAST tools in application security.
- How DevSecOps integrates security into development workflows.

---

## Disclaimer

The insecure code examples in this repository are intentionally created for educational security testing purposes only.

They should never be used in real-world production applications.

---

## Author

Suraj Somkuwar

Cybersecurity | Cloud Security | DevSecOps Learning Projects