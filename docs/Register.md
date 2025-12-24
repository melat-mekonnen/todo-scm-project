# **Configuration Item (CI) Register**

**Project:** To-Do List Web Application Mini Project  
**Date:** December 23, 2025

**Prepared by:** Melat Mekonnen

| CI ID | CI Name | Category | Type | Version | Owner | Status | Location | Last Modified | Description |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| CI-001 | login.html | SRC | Web Page | 1.1 | Melat Mekonnen | Baseline | src/login.html | 2025-12-23 | Login page with password strength validation and feedback UI |
| CI-002 | dashboard.html | SRC | Web Page | 1.2 | Melat Mekonnen | Baseline | src/dashboard.html | 2025-12-23 | Task management dashboard with category selection and filtering |
| CI-003 | script.js | SRC | JavaScript | 1.3 | Melat Mekonnen | Baseline | src/script.js | 2025-12-23 | Core logic: password validation, task CRUD, categorization, filtering, persistence |
| CI-004 | style.css | SRC | CSS | 1.2 | Melat Mekonnen | Baseline | src/style.css | 2025-12-23 | Global styling, responsive design, hover effects, modern UI enhancements |
| CI-005 | tasks.json | DAT | Data File | 1.1 | Melat Mekonnen | Baseline | src/tasks.json | 2025-12-23 | Task data storage including category information |
| CI-006 | Requirements.docx | DOC | Requirements Spec | 1 | Melat Mekonnen | Baseline | docs/Requirements.docx | 2025-12-22 | Project functional and non-functional requirements |
| CI-007 | SCMP.docx | DOC | SCM Plan | 1 | Melat Mekonnen | Baseline | docs/SCMP.docx | 2025-12-22 | Software Configuration Management Plan |
| CI-008 | CR\_Form.docx | TMP | Template | 1 | Melat Mekonnen | Baseline | docs/templates/CR\_Form.docx | 2025-12-22 | Standard Change Request Form template |
| CI-009 | CR-001.docx | DOC | Change Request | 1 | Melat Mekonnen | Baseline | docs/cr/CR-001.docx | 2025-12-23 | CR for password strength validation (completed) |
| CI-010 | CR-002.docx | DOC | Change Request | 1 | Melat Mekonnen | Baseline | docs/cr/CR-002.docx | 2025-12-23 | CR for UI styling and responsiveness improvements (completed) |
| CI-011 | CR-003.docx | DOC | Change Request | 1 | Melat Mekonnen | Baseline | docs/cr/CR-003.docx | 2025-12-23 | CR for task categorization feature (completed) |
| CI-012 | [Change\_Log.md](http://Change_Log.md) | DOC | Change Log | 1 | Melat Mekonnen | Baseline | docs/Change\_Log.md | 2025-12-23 | Complete record of all implemented changes and release history |
| CI-013 | CI\_Register.docx | DOC | Register | 1.1 | Melat Mekonnen | Baseline | docs/CI\_Register.docx | 2025-12-23 | This Configuration Item Register document |
| CI-014 | [README.md](http://README.md) | DOC | Project Guide | 1 | Melat Mekonnen | Baseline | [README.md](http://README.md) | 2025-12-23 | Project overview, setup instructions, and usage guidelines |

**CI Relationships (Dependencies)**

| CI ID | Dependent On | Description |
| ----- | ----- | ----- |
| CI-001 | CI-003, CI-004 | Login page requires script logic and styling |
| CI-002 | CI-003, CI-004, CI-005 | Dashboard requires script, styling, and task data |
| CI-003 | CI-001, CI-002, CI-005 | Script provides functionality to pages and data handling |
| CI-004 | CI-001, CI-002 | Styles are applied to both HTML pages |

