# OrangeHRM Test Automation Framework – Requirements

## 1. Purpose of the Document

This document defines the **requirements, scope, standards, and expectations** for building a **professional, scalable, and maintainable test automation framework** for the **OrangeHRM application** (Application Under Test – AUT).

The framework is intended for **learning, internship-level contribution, and production‑like quality**, following real-world QA automation practices.

---

## 2. Application Under Test (AUT)

### 2.1 Application Name

**OrangeHRM**

### 2.2 AUT URL

* **Demo URL:** [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)

### 2.3 AUT Description

OrangeHRM is a Human Resource Management System (HRMS) that provides functionalities such as:

* User Authentication
* Employee Management
* Leave Management
* Time Tracking
* Recruitment
* Performance Management

This automation project will focus on **core, stable, and high‑value modules** commonly used in enterprise environments.

---

## 3. Project Objectives

* Build a **clean, modular, and scalable E2E automation framework**
* Cover **critical business flows** of OrangeHRM
* Follow **industry best practices** used in professional QA teams
* Reduce flaky tests and improve test reliability
* Enable easy onboarding for new QA engineers

---

## 4. Scope of Automation

### 4.1 In-Scope Modules

| Module                    | Description                                   |
| ------------------------- | --------------------------------------------- |
| Authentication            | Login, Logout, Session handling               |
| Dashboard                 | Widgets visibility, quick actions, navigation |
| PIM (Employee Management) | Add, View, Edit Employee                      |
| Leave Management          | Apply Leave, Leave List, Approval             |
| User Management           | Admin user creation and role assignment       |

### 4.2 Out-of-Scope (Initial Phase)

* Payroll
* Advanced Analytics & Reports
* Mobile-specific behavior
* Performance & Load testing
* Security & Penetration testing

---

## 5. Test Strategy

Test Strategy (Non‑Dummy, Real‑World Approach)

The test strategy is designed to align with how enterprise HR systems are validated in professional QA environments.

### 5.1 Test Pyramid Alignment

The framework follows a **UI-focused test pyramid**, appropriate for HR applications with business-critical user workflows:

* End-to-End (E2E) UI Tests – Primary focus
* UI Integration Tests – Secondary
* Unit-level testing – Out of scope for this framework

---

### 5.2 End-to-End (E2E) Testing Strategy

End-to-end tests validate **complete user journeys** across the application.

**Key Principles:**

* Tests start from authenticated or unauthenticated entry points
* Business actions are performed across multiple pages
* Assertions validate business outcomes, not UI implementation details

**Representative E2E Flows:**

* Admin logs in → creates an employee → verifies employee record in PIM
* Employee logs in → applies leave → admin approves → leave status updated

E2E coverage is intentionally focused on **high-value workflows** to maintain stability and execution speed.

---

### 5.3 Smoke Testing Strategy

Smoke tests confirm the **basic operational readiness** of the application after deployment.

**Characteristics:**

* Minimal assertions
* No complex data dependencies
* Fast execution suitable for CI pipelines

**Smoke Coverage Includes:**

* Application launch
* Login
* Dashboard availability
* Core module navigation
* Logout

---

### 5.4 Regression Testing Strategy

Regression tests ensure that existing functionality continues to work as expected following changes or deployments.

**Coverage Areas:**

* Core CRUD operations
* Field-level validations
* Role-based access control

The regression suite is executed:

* Before releases
* On scheduled CI runs

---

### 5.5 Negative and Boundary Testing

Negative and boundary tests validate system behavior under invalid or restricted conditions.

**Examples:**

* Invalid authentication attempts
* Mandatory field enforcement
* Unauthorized access prevention

Coverage is limited to business-relevant scenarios to maintain suite stability.

---

## 6. Automation Tooling Requirements

### 6.1 Core Tools

| Tool                    | Purpose               |
| ----------------------- | --------------------- |
| Playwright (JavaScript) | Browser automation    |
| Node.js (LTS)           | Runtime environment   |
| npm                     | Dependency management |
| Git & GitHub            | Version control       |

### 6.2 Supporting Tools

* Playwright Test Runner
* Playwright HTML Reporter
* Dotenv (Environment variables)
* ESLint (Code quality – optional)

---

## 7. Browser & Platform Coverage

### 7.1 Browsers

* Chromium (Primary)
* Firefox (Secondary)
* WebKit (Optional)

### 7.2 Platforms

* Windows 10/11
* CI-friendly (GitHub Actions / Azure DevOps – future)

---

## 8. Framework Architecture Requirements

### 8.1 Design Pattern

* **Page Object Model (POM)**

### 8.2 Suggested Folder Structure

```
project-root/
│
├── tests/
│   ├── smoke/
│   ├── regression/
│   └── e2e/
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── PIMPage.js
│
├── fixtures/
│   └── authFixture.js
│
├── utils/
│   ├── testData.js
│   └── helpers.js
│
├── config/
│   └── playwright.config.js
│
└── requirements.md
```

---

## 9. Coding Standards & Guidelines

* Use **async/await** consistently
* Avoid hard-coded waits (`waitForTimeout`)
* Prefer **Playwright auto-waits & assertions**
* One responsibility per page method
* Reusable selectors

---

## 10. Test Data Management

* Use static test users (demo credentials)
* Keep test data separate from test logic
* Environment-specific data via `.env`

Example:

```
ADMIN_USERNAME=Admin
ADMIN_PASSWORD=admin123
```

---

## 11. Reporting & Logging Requirements

* Generate **HTML test reports** after execution
* Capture screenshots on failure
* Capture traces for flaky tests (optional)

---

## 12. CI/CD Readiness

The framework should be designed to support:

* Headless execution
* CI pipeline execution
* Parallel test execution
* Environment-based runs

---

## 13. Entry & Exit Criteria

### 13.1 Entry Criteria

* AUT is accessible
* Test data is available
* Framework setup completed

### 13.2 Exit Criteria

* All smoke tests pass
* No critical test failures
* Reports generated successfully

---

## 14. Risks & Mitigations

| Risk                  | Mitigation                    |
| --------------------- | ----------------------------- |
| Demo site instability | Retry logic, stable selectors |
| UI changes            | Centralized selectors         |
| Flaky tests           | Proper waits & assertions     |

---

## 15. Success Metrics

* Smoke suite execution < 5 minutes
* Zero flaky tests in smoke suite
* Easy addition of new tests

---

## 16. Future Enhancements

* API testing integration
* Visual regression testing
* Custom reporters
* Test tagging & advanced filtering

---


**Document Version:** 1.0
**Last Updated:** [To be filled]
