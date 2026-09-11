# Apex University Student Academic Portal

A full-featured, minimalist, and production-grade **Student Academic & Campus Management Portal**. Built with a focused **solid 3-color palette**, high-contrast typography, interactive 2FA security, GPA simulation tools, and live academic course management.

![Student Portal](https://img.shields.io/badge/Design-Solid%203--Color%20Palette-indigo?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20Vanilla%20CSS3%20%7C%20JavaScript%20ES6+-success?style=for-the-badge)

---

## 🎨 3-Color Solid Design System

The application strictly uses a **maximum of three solid colors** for maximum visual clarity, contrast, and elegance:
1. **Primary Solid (`#4f46e5`)**: Used for primary action buttons, active navigation states, brand markers, and focus borders.
2. **Surface & Background Solid (`#0f172a` / `#1e293b`)**: Used for page background, card surfaces, sidebars, and input containers.
3. **Text & Contrast Solid (`#f8fafc`)**: Used for high-contrast typography, icons, and readability.

---

## 🌟 Key Features

### 1. 🔐 Security & Gateway Hub (`index.html`)
- **1-Click Quick Demo Login Switcher**: Instant testing with 3 student profiles (Senior CS, Pre-Med, Engineering Freshman).
- **Interactive 2-Factor Authentication (2FA)**: 6-digit individual input boxes with automatic tab navigation, backspace handling, and paste detection.
- **Real-Time Password Strength Meter**: Live checklist criteria (length, uppercase, numbers, symbols) with dynamic progress bar.
- **Single Sign-On (SSO)**: Google Workspace and Microsoft 365 student single sign-on flows.
- **Theme Switcher**: Instant Dark and Light mode toggle.

### 2. 📊 Student Academic Dashboard (`dashboard.html`)
- **Academic Performance Overview**:
  - Live GPA meter, credit breakdown, class attendance tracking, and urgent assignment alerts.
  - Degree progress bar (e.g. 96 / 120 credits - 80% to graduation).
  - Daily lecture timeline with direct virtual room / class info modals.
  - University news & campus announcements ticker.
- **My Courses & Syllabus Hub**:
  - Detailed course cards with faculty info, meeting times, room locations, attendance percentages, and syllabus modals.
  - Drop course functionality with real-time credit recalculation.
- **Interactive Weekly Timetable**:
  - Lecture and lab schedule grid (Monday to Friday, 8:00 AM – 6:00 PM).
  - Export to `.ics` format for Apple Calendar & Google Calendar integration.
- **Coursework & Exam Tracker**:
  - Filterable by status (*All*, *Pending*, *Submitted*, *Graded*).
  - Interactive file submission modal (drag-and-drop / file selector simulation with status updates and feedback).
- **Grades, Transcript & "What-If" GPA Calculator**:
  - Official grade records with letter grades, percentage scores, and quality points.
  - Interactive GPA target simulator: test hypothetical final exam grades to preview resulting semester and cumulative GPA.
  - Certified **Official Printable Academic Transcript** modal with University Seal.
- **Course Registration & Catalog**:
  - Searchable course catalog with department filters (CS, MAT, PHY, ENG, BIO).
  - Add/Drop courses with real-time prerequisite validation and 18.0 max credit limits.
- **Tuition & Student Financials**:
  - Itemized billing breakdown (tuition, tech fee, lab fees, health insurance).
  - Financial aid and scholarship tracking.
  - Interactive payment portal with instant generated receipt view.
- **Academic Advising & Campus Life**:
  - Schedule one-on-one appointments with assigned advisors (date & time slot picker).
  - Campus facilities and direct mentor booking.
- **Settings & Preferences**:
  - Dark & Light mode toggle.
  - Student profile and contact information editor.

---

## 🚀 Quick Start

No build tools, bundlers, or package managers required. Simply open in any modern browser!

### Direct Browser Launch
1. Open the project directory: `Student portal/`
2. Open `index.html` in your web browser (Chrome, Edge, Firefox, Safari).

---

## 👥 Demo Student Profiles

For instant testing, use the 1-click quick login buttons on the login screen or enter these credentials:

| Student Name | Email | Academic Program | Cumulative GPA | Standing |
| :--- | :--- | :--- | :--- | :--- |
| **Alex Rivera** | `a.rivera@university.edu` | Computer Science, B.S. | **3.88** | Senior (4th Year) |
| **Sarah Chen** | `s.chen@university.edu` | Pre-Medicine / Molecular Biology | **3.94** | Sophomore (2nd Year) |
| **Marcus Vance** | `m.vance@university.edu` | Mechanical Engineering | **3.65** | Freshman (1st Year) |

*Password for all demo accounts: `Password2026!` (or use the 1-Click Demo Buttons).*  
*2FA Code: Any 6 digits (e.g., `123456`).*

---

## 📁 File Structure

```
Student portal/
├── index.html        # Modern Authentication & Security Gateway (Solid 3-Color)
├── dashboard.html    # Full Student Portal Dashboard (9 tabs + modals)
├── style.css         # Minimalist Solid 3-Color Design System (Tokens, Themes, Print)
├── script.js         # Authentication logic, 2FA pin inputs & security controls
├── portal.js         # Reactive portal state, GPA simulator, catalog & bookings
└── README.md         # Comprehensive documentation & user guide
```

---

## 📜 License
MIT License &bull; Created for Apex University Academic Network.
