# **Change Log**

**Project:** To-Do List Web Application Mini Project  
**Version:** 1.0  
**Date:** December 23, 2025

**Prepared by:** Melat Mekonnen

## **Overview**

This Change Log documents all changes made to the To-Do List Web Application Mini Project during the Software Configuration Management process. All changes were requested by Melat Mekonnen, processed through formal Change Requests (CR-001, CR-002, CR-003), approved, and implemented in accordance with the approved Software.

**Change Request Summary**

| CR ID | Date Submitted | Title | Requester | Type | Priority | Status | Implementation  Date |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| CR-001 | 2025-12-22 | Password Strength Validation | Melat Mekonnen | Enhancement | Medium | Completed | 2025-12-23 |
| CR-002 | 2025-12-22 | UI Styling and Responsiveness | Melat Mekonnen | Enhancement | Low | Completed | 2025-12-23 |
| CR-003 | 2025-12-22 | Task Categorization Feature | Melat Mekonnen | New Feature | High | Completed | 2025-12-23 |

## **Detailed Change Records**

### **CR-001: Password Strength Validation**

**Date Submitted:** 2025-12-22

**Requester:** Melat Mekonnen

**Priority:** Medium

**Type:** Enhancement

**Description:**

Implement client-side password strength validation on the login page requiring:

* Minimum 8 characters  
* At least 1 uppercase letter  
* At least 1 lowercase letter  
* At least 1 number

Real-time validation feedback is displayed, and login is prevented until all criteria are met.

**Affected Components:**

* src/login.html  
* src/script.js

**Implementation Details:**

* Added regex-based validation logic in script.js  
* Created real-time feedback display element in login.html  
* Disabled login until password is valid

**Testing:**

* Tested multiple valid/invalid password combinations  
* Verified feedback messages appear correctly  
* Confirmed login only proceeds with strong passwords

**Status:** Completed

**Branch:** feature-login

**Commit:** feat: add password strength validation (CR-001)

### **CR-002: UI Styling and Responsiveness Improvements**

**Date Submitted:** 2025-12-22

**Requester:** Melat Mekonnen

**Priority:** Low

**Type:** Enhancement

**Description:**

Enhance the overall user interface by improving colors, layout, responsiveness, hover effects, transitions, and form/button styling.

**Affected Components:**

* src/login.html  
* src/dashboard.html  
* src/style.css

**Implementation Details:**

* Updated color palette and typography  
* Implemented responsive design using media queries and flexible layouts  
* Added hover effects, transitions, and modern button/form styling  
* Improved spacing and visual hierarchy

**Testing:**

* Tested on desktop, tablet, and mobile viewports  
* Verified smooth interactions and consistent appearance  
* Confirmed enhanced usability

**Status:** Completed

**Branch:** feature-login

**Commit:** feat: improve UI styling and responsiveness (CR-002)

### **CR-003: Task Categorization Feature**

**Date Submitted:** 2025-12-22

**Requester:** Melat Mekonnen

**Priority:** High

**Type:** New Feature

**Description:**

Add task categorization to improve organization and usability:

* Category options: High, Medium, Low, Personal, Work  
* Visual category labels/badges  
* Filtering tasks by category  
* Updated data structure to include category field

**Affected Components:**

* src/dashboard.html  
* src/script.js  
* src/tasks.json

**Implementation Details:**

* Added category dropdown in task creation  
* Implemented visual badges for categories  
* Added category filter controls  
* Extended task object and persistence logic to support categories

**Testing:**

* Verified task creation, editing, and deletion with categories  
* Confirmed filtering works accurately  
* Tested data persistence across sessions  
* Validated visual indicators

**Status:** Completed

**Branch:** feature-add-task

## **Configuration Item Changes (Reference CI Register v1.1)**

### **Updated Configuration Items**

| CI Name | Previous Version | New Version | Change Type | Description |
| ----- | ----- | ----- | ----- | ----- |
| login.html | 1 | 1.1 | Minor Update | Added password validation feedback UI |
| dashboard.html | 1 | 1.2 | Major Update | Added category selection and filtering controls |
| script.js | 1 | 1.3 | Major Update | Added validation, categorization, and filtering logic |
| style.css | 1 | 1.2 | Major Update | Modern styling and full responsive design |
| tasks.json | 1 | 1.1 | Minor Update | Added category field to task structure |

New/Closed Configuration Items

| CI Name | Version | Type | Description |
| ----- | ----- | ----- | ----- |
| CR-001.docx | 1 | Change Request | Completed CR document |
| CR-002.docx | 1 | Change Request | Completed CR document |
| CR-003.docx | 1 | Change Request | Completed CR document |
| Change\_Log.md | 1 | Documentation | This change log document |

