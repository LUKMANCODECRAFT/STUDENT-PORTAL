/**
 * Student Academic Portal - Comprehensive Dashboard Logic & State Engine
 * Clean 3-Color Maximum Solid Palette
 */

// ============================================================================
// STUDENT PROFILES DATABASE & DEFAULT DATA
// ============================================================================

const STUDENT_DATABASE = {
    alex: {
        id: 'STU-2024-88492',
        name: 'Alex Rivera',
        email: 'a.rivera@university.edu',
        initials: 'AR',
        major: 'Computer Science, B.S.',
        standing: 'Senior (4th Year)',
        honors: "Dean's Honor List",
        advisor: 'Dr. Raymond Holt',
        gpa: 3.88,
        majorGpa: 3.92,
        creditsCompleted: 96.0,
        creditsRequired: 120.0,
        enrolledCredits: 16.0,
        phone: '+1 (555) 234-8901',
        address: 'Apex Tower Hall, Room 412B',
        courses: [
            {
                code: 'CS-401',
                name: 'Advanced Algorithms & Complexity',
                instructor: 'Prof. Donald Knuth',
                email: 'd.knuth@university.edu',
                credits: 4.0,
                schedule: 'Mon, Wed 10:00 AM - 11:30 AM',
                days: ['Monday', 'Wednesday'],
                timeSlot: '10:00 AM',
                room: 'Turing Hall 301',
                currentGrade: 'A (94%)',
                score: 94,
                letter: 'A',
                points: 4.0,
                attendance: '98%',
                syllabus: {
                    description: 'Rigorous analysis of asymptotic complexity, dynamic programming, network flows, and NP-completeness.',
                    grading: 'Midterm: 30%, Final: 40%, Homework: 30%',
                    textbook: 'Introduction to Algorithms (Cormen, Leiserson, Rivest, Stein)'
                }
            },
            {
                code: 'CS-450',
                name: 'Distributed Systems & Cloud Architecture',
                instructor: 'Dr. Leslie Lamport',
                email: 'l.lamport@university.edu',
                credits: 4.0,
                schedule: 'Tue, Thu 01:00 PM - 02:30 PM',
                days: ['Tuesday', 'Thursday'],
                timeSlot: '01:00 PM',
                room: 'Cloud Lab 204',
                currentGrade: 'A- (91%)',
                score: 91,
                letter: 'A-',
                points: 3.7,
                attendance: '96%',
                syllabus: {
                    description: 'Consensus protocols (Raft/Paxos), fault tolerance, distributed storage, and microservices.',
                    grading: 'Lab Projects: 50%, Exams: 40%, Quizzes: 10%',
                    textbook: 'Designing Data-Intensive Applications (Martin Kleppmann)'
                }
            },
            {
                code: 'MAT-350',
                name: 'Applied Linear Algebra & Optimization',
                instructor: 'Dr. Gilbert Strang',
                email: 'g.strang@university.edu',
                credits: 4.0,
                schedule: 'Mon, Wed 02:00 PM - 03:30 PM',
                days: ['Monday', 'Wednesday'],
                timeSlot: '02:00 PM',
                room: 'Euler Complex 102',
                currentGrade: 'A (96%)',
                score: 96,
                letter: 'A',
                points: 4.0,
                attendance: '100%',
                syllabus: {
                    description: 'Vector spaces, eigenvalues, singular value decomposition (SVD), and convex optimization methods.',
                    grading: 'Problem Sets: 35%, Midterm: 25%, Final: 40%',
                    textbook: 'Linear Algebra and Its Applications (Gilbert Strang)'
                }
            },
            {
                code: 'ENG-310',
                name: 'Technical Writing for Software Engineers',
                instructor: 'Prof. Sarah Jenkins',
                email: 's.jenkins@university.edu',
                credits: 4.0,
                schedule: 'Friday 09:00 AM - 12:00 PM',
                days: ['Friday'],
                timeSlot: '09:00 AM',
                room: 'Humanities Hall 115',
                currentGrade: 'B+ (88%)',
                score: 88,
                letter: 'B+',
                points: 3.3,
                attendance: '95%',
                syllabus: {
                    description: 'Professional API documentation, architecture RFCs, research papers, and technical proposals.',
                    grading: 'Writing Portfolio: 60%, Presentations: 25%, Participation: 15%',
                    textbook: 'The Elements of Technical Writing (Blake & Bly)'
                }
            }
        ],
        assignments: [
            {
                id: 'asn-1',
                title: 'Dynamic Programming & Graph Flow Lab',
                course: 'CS-401',
                dueDate: 'Due Tomorrow, 11:59 PM',
                status: 'pending',
                weight: '10% of Final Grade',
                description: 'Implement Ford-Fulkerson max-flow algorithm and benchmark on sparse matrix topologies.'
            },
            {
                id: 'asn-2',
                title: 'Raft Consensus Node Cluster Simulation',
                course: 'CS-450',
                dueDate: 'Due in 3 Days',
                status: 'pending',
                weight: '15% of Final Grade',
                description: 'Build a 3-node leader election prototype handling simulated network partition failures.'
            },
            {
                id: 'asn-3',
                title: 'Singular Value Decomposition (SVD) Matrix Decomposition',
                course: 'MAT-350',
                dueDate: 'Submitted on Sept 8',
                status: 'graded',
                gradeResult: '98 / 100 (A)',
                feedback: 'Exceptional visual graphs and error residue analysis.',
                weight: '10% of Final Grade',
                description: 'Image compression analysis using truncated rank-k SVD approximations.'
            },
            {
                id: 'asn-4',
                title: 'Microservices Architecture RFC Proposal',
                course: 'ENG-310',
                dueDate: 'Submitted on Sept 4',
                status: 'graded',
                gradeResult: '92 / 100 (A-)',
                feedback: 'Clear diagrams, succinct trade-off matrix.',
                weight: '15% of Final Grade',
                description: 'Full Request For Comments document proposing zero-downtime database migrations.'
            }
        ]
    },

    sarah: {
        id: 'STU-2025-91044',
        name: 'Sarah Chen',
        email: 's.chen@university.edu',
        initials: 'SC',
        major: 'Pre-Medicine / Molecular Biology',
        standing: 'Sophomore (2nd Year)',
        honors: "University Presidential Scholar",
        advisor: 'Dr. Marcus Sterling',
        gpa: 3.94,
        majorGpa: 3.98,
        creditsCompleted: 62.0,
        creditsRequired: 120.0,
        enrolledCredits: 15.0,
        phone: '+1 (555) 839-1120',
        address: 'Science Quad Court, Suite 208',
        courses: [
            {
                code: 'BIO-220',
                name: 'Molecular Genetics & CRISPR Technology',
                instructor: 'Dr. Jennifer Doudna',
                email: 'j.doudna@university.edu',
                credits: 4.0,
                schedule: 'Tue, Thu 10:00 AM - 11:30 AM',
                days: ['Tuesday', 'Thursday'],
                timeSlot: '10:00 AM',
                room: 'BioTech Center 402',
                currentGrade: 'A (97%)',
                score: 97,
                letter: 'A',
                points: 4.0,
                attendance: '100%',
                syllabus: {
                    description: 'Genome editing, DNA replication mechanisms, transcriptional regulation and oncology biomarkers.',
                    grading: 'Lab Experiments: 40%, Midterms: 30%, Final: 30%',
                    textbook: 'Molecular Biology of the Cell (Alberts et al.)'
                }
            },
            {
                code: 'CHM-301',
                name: 'Organic Chemistry II with Lab',
                instructor: 'Dr. Walter White',
                email: 'w.white@university.edu',
                credits: 5.0,
                schedule: 'Mon, Wed, Fri 09:00 AM - 10:00 AM',
                days: ['Monday', 'Wednesday', 'Friday'],
                timeSlot: '09:00 AM',
                room: 'Curie Laboratory 110',
                currentGrade: 'A (93%)',
                score: 93,
                letter: 'A',
                points: 4.0,
                attendance: '98%',
                syllabus: {
                    description: 'Carbonyl mechanisms, NMR spectroscopy, synthesis pathways and pharmaceutical molecular modeling.',
                    grading: 'Lab Reports: 30%, Midterm: 30%, Final: 40%',
                    textbook: 'Organic Chemistry (David Klein)'
                }
            }
        ],
        assignments: [
            {
                id: 'asn-s1',
                title: 'CRISPR-Cas9 Gene Targeting Protocol Report',
                course: 'BIO-220',
                dueDate: 'Due Tonight, 11:59 PM',
                status: 'pending',
                weight: '15% of Grade',
                description: 'Write up gel electrophoresis results and single guide RNA sequence binding analysis.'
            }
        ]
    },

    marcus: {
        id: 'STU-2026-44109',
        name: 'Marcus Vance',
        email: 'm.vance@university.edu',
        initials: 'MV',
        major: 'Mechanical Engineering',
        standing: 'Freshman (1st Year)',
        honors: "Engineering Dean's Scholar",
        advisor: 'Prof. Elena Rostova',
        gpa: 3.65,
        majorGpa: 3.70,
        creditsCompleted: 28.0,
        creditsRequired: 128.0,
        enrolledCredits: 14.0,
        phone: '+1 (555) 749-3382',
        address: 'Newton Hall, Room 104A',
        courses: [
            {
                code: 'PHY-201',
                name: 'Classical Mechanics & Thermodynamics',
                instructor: 'Prof. Richard Feynman',
                email: 'r.feynman@university.edu',
                credits: 4.0,
                schedule: 'Mon, Wed 01:00 PM - 02:30 PM',
                days: ['Monday', 'Wednesday'],
                timeSlot: '01:00 PM',
                room: 'Fermi Auditorium 200',
                currentGrade: 'B+ (89%)',
                score: 89,
                letter: 'B+',
                points: 3.3,
                attendance: '94%',
                syllabus: {
                    description: 'Lagrangian dynamics, rotational mechanics, fluid statics, and heat engines.',
                    grading: 'Exams: 60%, Labs: 25%, Homework: 15%',
                    textbook: 'University Physics with Modern Physics (Young & Freedman)'
                }
            }
        ],
        assignments: [
            {
                id: 'asn-m1',
                title: 'Gyroscopic Precession Numerical Simulation',
                course: 'PHY-201',
                dueDate: 'Due in 4 Days',
                status: 'pending',
                weight: '12% of Grade',
                description: 'Calculate angular momentum conservation for spinning top under varying torques.'
            }
        ]
    }
};

// COURSE CATALOG AVAILABLE FOR REGISTRATION
const COURSE_CATALOG_DATA = [
    {
        code: 'CS-480',
        name: 'Deep Learning & Neural Networks',
        dept: 'CS',
        credits: 4.0,
        instructor: 'Dr. Yann LeCun',
        schedule: 'Tue, Thu 03:30 PM - 05:00 PM',
        openSeats: 8,
        prereq: 'MAT-350 & CS-401',
        description: 'Transformers, convolutional networks, backpropagation calculus, and GPU tensor acceleration.'
    },
    {
        code: 'CS-495',
        name: 'Cybersecurity & Cryptographic Protocols',
        dept: 'CS',
        credits: 3.0,
        instructor: 'Prof. Bruce Schneier',
        schedule: 'Wed 06:00 PM - 09:00 PM',
        openSeats: 12,
        prereq: 'CS-401',
        description: 'RSA/ECC cryptography, zero-knowledge proofs, web security vulnerabilities, and network penetration.'
    },
    {
        code: 'PHY-302',
        name: 'Quantum Mechanics & Optics',
        dept: 'PHY',
        credits: 4.0,
        instructor: 'Dr. Niels Bohr',
        schedule: 'Mon, Wed 11:30 AM - 01:00 PM',
        openSeats: 15,
        prereq: 'PHY-201 & MAT-350',
        description: 'Schrödinger wave equation, spin observables, quantum entanglement, and laser interferometry.'
    },
    {
        code: 'ENG-402',
        name: 'Robotics & Autonomous Navigation',
        dept: 'ENG',
        credits: 4.0,
        instructor: 'Dr. Rodney Brooks',
        schedule: 'Tue, Thu 09:00 AM - 10:30 AM',
        openSeats: 6,
        prereq: 'CS-401',
        description: 'Kinematics, SLAM (Simultaneous Localization and Mapping), sensor fusion, and ROS2 programming.'
    },
    {
        code: 'BIO-310',
        name: 'Bioinformatics & Sequence Analysis',
        dept: 'BIO',
        credits: 3.0,
        instructor: 'Dr. Sydney Brenner',
        schedule: 'Mon, Fri 02:00 PM - 03:30 PM',
        openSeats: 20,
        prereq: 'BIO-220',
        description: 'BLAST algorithms, phylogenetics, protein structural modeling, and RNA-seq pipeline workflows.'
    }
];

// MOCK NOTIFICATIONS
const MOCK_NOTIFICATIONS = [
    {
        id: 1,
        title: 'Grade Published: MAT-350 Homework 3',
        time: '15 mins ago',
        icon: 'fa-award',
        text: 'Dr. Strang graded your image compression SVD lab: Score 98/100 (A).'
    },
    {
        id: 2,
        title: 'Tuition Zero Balance Confirmation',
        time: '2 hours ago',
        icon: 'fa-receipt',
        text: 'Your Fall 2026 statement has been verified and settled by Presidential Merit Grant.'
    },
    {
        id: 3,
        title: 'Upcoming Class Reminder: CS-401',
        time: '5 hours ago',
        icon: 'fa-clock',
        text: 'Advanced Algorithms lecture begins at 10:00 AM in Turing Hall 301.'
    }
];

// ============================================================================
// STATE ENGINE
// ============================================================================

let currentStudentKey = 'alex';
let currentStudent = null;
let currentSelectedAssignment = null;

function initPortal() {
    const savedKey = localStorage.getItem('active_student_key') || 'alex';
    currentStudentKey = STUDENT_DATABASE[savedKey] ? savedKey : 'alex';
    
    loadStudentData(currentStudentKey);
    initThemeState();

    renderDashboardOverview();
    renderMyCourses();
    renderTimetable();
    renderAssignments('all');
    renderGradesAndTranscript();
    renderGpaSimulator();
    renderCourseCatalog();
    renderNotificationsList();

    window.addEventListener('hashchange', handleHashRoute);
    if (window.location.hash) {
        const tab = window.location.hash.replace('#', '');
        switchPortalTab(tab, false);
    } else {
        switchPortalTab('overview', false);
    }

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebarClose = document.getElementById('sidebarCloseBtn');
    const sidebar = document.getElementById('portalSidebar');

    if (mobileBtn && sidebar) {
        mobileBtn.addEventListener('click', () => sidebar.classList.add('mobile-open'));
    }
    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener('click', () => sidebar.classList.remove('mobile-open'));
    }

    console.log(`Student Portal initialized (Solid 3-Color Mode) for ${currentStudent.name}`);
}

function loadStudentData(key) {
    const savedProfile = localStorage.getItem(`student_data_${key}`);
    if (savedProfile) {
        try {
            currentStudent = JSON.parse(savedProfile);
        } catch (e) {
            currentStudent = JSON.parse(JSON.stringify(STUDENT_DATABASE[key]));
        }
    } else {
        currentStudent = JSON.parse(JSON.stringify(STUDENT_DATABASE[key]));
        saveCurrentStudentState();
    }
}

function saveCurrentStudentState() {
    if (currentStudent && currentStudentKey) {
        localStorage.setItem(`student_data_${currentStudentKey}`, JSON.stringify(currentStudent));
    }
}

// ============================================================================
// TAB NAVIGATION ROUTING
// ============================================================================

function switchPortalTab(tabId, updateHash = true) {
    document.querySelectorAll('.tab-view-container').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.nav-item-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    const targetBtn = document.querySelector(`.nav-item-btn[data-tab="${tabId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    const sidebar = document.getElementById('portalSidebar');
    if (sidebar) sidebar.classList.remove('mobile-open');

    if (updateHash) {
        window.location.hash = tabId;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        switchPortalTab(hash, false);
    }
}

// ============================================================================
// TAB 1: OVERVIEW RENDERING
// ============================================================================

function renderDashboardOverview() {
    const heroName = document.getElementById('heroStudentName');
    const heroId = document.getElementById('heroStudentId');
    const heroMajor = document.getElementById('heroMajor');
    const sidebarName = document.getElementById('sidebarUserName');
    const sidebarMajor = document.getElementById('sidebarUserMajor');
    const sidebarInitials = document.getElementById('sidebarUserInitials');

    if (heroName) heroName.textContent = currentStudent.name;
    if (heroId) heroId.textContent = currentStudent.id;
    if (heroMajor) heroMajor.textContent = currentStudent.major;
    if (sidebarName) sidebarName.textContent = currentStudent.name;
    if (sidebarMajor) sidebarMajor.textContent = `${currentStudent.standing.split(' ')[0]} • ${currentStudent.id}`;
    if (sidebarInitials) sidebarInitials.textContent = currentStudent.initials;

    const statGpa = document.getElementById('statGpa');
    const statCredits = document.getElementById('statCredits');
    const statDeadlines = document.getElementById('statDeadlines');

    if (statGpa) statGpa.textContent = currentStudent.gpa.toFixed(2);
    if (statCredits) statCredits.textContent = currentStudent.enrolledCredits.toFixed(1);

    const pendingTasks = currentStudent.assignments.filter(a => a.status === 'pending');
    if (statDeadlines) statDeadlines.textContent = `${pendingTasks.length} Tasks`;

    const sidebarAssignmentBadge = document.getElementById('sidebarAssignmentBadge');
    if (sidebarAssignmentBadge) {
        sidebarAssignmentBadge.textContent = `${pendingTasks.length} Due`;
        sidebarAssignmentBadge.style.display = pendingTasks.length > 0 ? 'inline-block' : 'none';
    }

    const sidebarCourseCount = document.getElementById('sidebarCourseCount');
    if (sidebarCourseCount) sidebarCourseCount.textContent = currentStudent.courses.length;

    const degreeCreditsText = document.getElementById('overviewDegreeCredits');
    const degreeBar = document.getElementById('overviewDegreeBar');
    const pct = Math.min(100, Math.round((currentStudent.creditsCompleted / currentStudent.creditsRequired) * 100));
    if (degreeCreditsText) degreeCreditsText.textContent = `${currentStudent.creditsCompleted} / ${currentStudent.creditsRequired} (${pct}%)`;
    if (degreeBar) degreeBar.style.width = `${pct}%`;

    const todayContainer = document.getElementById('overviewTodayClasses');
    if (todayContainer) {
        todayContainer.innerHTML = currentStudent.courses.slice(0, 3).map(course => `
            <div class="timeline-item">
                <div class="timeline-left">
                    <div class="timeline-time-box">
                        <div class="time">${course.timeSlot}</div>
                        <div class="duration">75 Mins</div>
                    </div>
                    <div class="timeline-details">
                        <h4>${course.code}: ${course.name}</h4>
                        <p>
                            <span><i class="fas fa-user-tie"></i> ${course.instructor}</span>
                            <span><i class="fas fa-location-dot"></i> ${course.room}</span>
                        </p>
                    </div>
                </div>
                <button type="button" class="btn-join-room" onclick="openSyllabusModal('${course.code}')">
                    Class Info
                </button>
            </div>
        `).join('');
    }

    const upcomingContainer = document.getElementById('overviewUpcomingAssignments');
    if (upcomingContainer) {
        upcomingContainer.innerHTML = pendingTasks.slice(0, 2).map(task => `
            <div class="assignment-item-card" style="margin-bottom: 10px; padding: 12px;">
                <div class="assignment-card-top">
                    <span class="assignment-course-code">${task.course}</span>
                    <span class="assignment-due-tag"><i class="fas fa-clock"></i> ${task.dueDate}</span>
                </div>
                <div class="assignment-item-title" style="font-size: 0.9rem;">${task.title}</div>
                <div class="assignment-card-footer">
                    <span style="font-size: 0.75rem; color: var(--text-muted);">${task.weight}</span>
                    <button type="button" class="btn-submit" style="padding: 5px 12px; font-size: 0.75rem; width: auto;" onclick="openSubmitAssignmentModal('${task.id}')">
                        Submit Work
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// ============================================================================
// TAB 2: MY COURSES
// ============================================================================

function renderMyCourses() {
    const grid = document.getElementById('myCoursesGrid');
    if (!grid) return;

    grid.innerHTML = currentStudent.courses.map(course => `
        <div class="course-card">
            <div class="course-card-top">
                <span class="course-code-tag">${course.code}</span>
                <span class="course-grade-badge">${course.currentGrade}</span>
            </div>
            <div class="course-card-body">
                <h3 class="course-title">${course.name}</h3>
                <div class="course-instructor-row">
                    <div class="instructor-avatar">${course.instructor.split(' ')[1]?.[0] || 'P'}</div>
                    <div>
                        <div style="font-weight: 700; color: var(--text-main); font-size: 0.85rem;">${course.instructor}</div>
                        <div style="font-size: 0.72rem; color: var(--text-dim);">${course.email}</div>
                    </div>
                </div>
                <div class="course-meta-grid">
                    <div><i class="fas fa-clock" style="color: var(--primary); margin-right: 4px;"></i> ${course.schedule}</div>
                    <div><i class="fas fa-location-dot" style="color: var(--primary); margin-right: 4px;"></i> ${course.room}</div>
                    <div><i class="fas fa-award" style="color: var(--primary); margin-right: 4px;"></i> ${course.credits} Credits</div>
                    <div><i class="fas fa-user-check" style="color: var(--primary); margin-right: 4px;"></i> ${course.attendance} Attendance</div>
                </div>
            </div>
            <div class="course-card-footer">
                <button type="button" class="link-btn" onclick="openSyllabusModal('${course.code}')">
                    <i class="fas fa-file-lines"></i> View Syllabus
                </button>
                <button type="button" class="btn-social-auth" style="padding: 5px 10px; font-size: 0.72rem;" onclick="dropCourse('${course.code}')">
                    <i class="fas fa-trash-can"></i> Drop
                </button>
            </div>
        </div>
    `).join('');
}

// ============================================================================
// TAB 3: TIMETABLE & SCHEDULE
// ============================================================================

function renderTimetable() {
    const tbody = document.getElementById('timetableBody');
    if (!tbody) return;

    const timeSlots = ['09:00 AM', '10:00 AM', '01:00 PM', '02:00 PM', '03:30 PM'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    tbody.innerHTML = timeSlots.map(time => {
        return `
            <tr>
                <td class="time-col">${time}</td>
                ${days.map(day => {
                    const match = currentStudent.courses.find(c => c.days.includes(day) && c.timeSlot === time);
                    if (match) {
                        return `
                            <td>
                                <div class="schedule-slot-card" onclick="openSyllabusModal('${match.code}')">
                                    <div class="schedule-slot-title">${match.code}: ${match.name.substring(0, 20)}...</div>
                                    <div class="schedule-slot-room"><i class="fas fa-location-dot"></i> ${match.room}</div>
                                </div>
                            </td>
                        `;
                    }
                    return `<td></td>`;
                }).join('')}
            </tr>
        `;
    }).join('');
}

function downloadCalendarICS() {
    showToast('Exporting schedule to .ics calendar format...', 'info');
    setTimeout(() => {
        showToast('Schedule downloaded! Compatible with Google Calendar & Apple iCal.', 'success');
    }, 800);
}

// ============================================================================
// TAB 4: ASSIGNMENTS & EXAMS
// ============================================================================

function renderAssignments(filter = 'all') {
    const container = document.getElementById('assignmentsGridContainer');
    if (!container) return;

    let list = currentStudent.assignments;
    if (filter === 'pending') list = list.filter(a => a.status === 'pending');
    if (filter === 'submitted') list = list.filter(a => a.status === 'submitted');
    if (filter === 'graded') list = list.filter(a => a.status === 'graded');

    if (list.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 36px; background-color: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <i class="fas fa-circle-check" style="font-size: 2.2rem; color: var(--primary); margin-bottom: 10px;"></i>
                <h3>All caught up!</h3>
                <p style="color: var(--text-muted); font-size: 0.85rem;">No assignments found in this category.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = list.map(item => `
        <div class="assignment-item-card">
            <div class="assignment-card-top">
                <span class="assignment-course-code">${item.course}</span>
                <span class="assignment-due-tag">
                    <i class="fas fa-clock"></i> ${item.dueDate}
                </span>
            </div>
            <h3 class="assignment-item-title">${item.title}</h3>
            <p class="assignment-item-desc">${item.description}</p>
            
            ${item.status === 'graded' ? `
                <div style="background-color: var(--bg-input); border-left: 3px solid var(--primary); padding: 8px 10px; border-radius: var(--radius-sm); font-size: 0.75rem;">
                    <div style="font-weight: 700; color: var(--text-main);">Grade: ${item.gradeResult}</div>
                    <div style="color: var(--text-muted); margin-top: 2px;">"${item.feedback}"</div>
                </div>
            ` : ''}

            ${item.status === 'submitted' ? `
                <div style="background-color: var(--bg-input); border-left: 3px solid var(--primary); padding: 8px 10px; border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--text-main); font-weight: 600;">
                    <i class="fas fa-check-double" style="color: var(--primary);"></i> Submitted & Awaiting Instructor Review
                </div>
            ` : ''}

            <div class="assignment-card-footer">
                <span style="font-size: 0.75rem; color: var(--text-dim);">${item.weight}</span>
                ${item.status === 'pending' ? `
                    <button type="button" class="btn-submit" style="padding: 6px 14px; font-size: 0.78rem; width: auto;" onclick="openSubmitAssignmentModal('${item.id}')">
                        <i class="fas fa-upload"></i> Submit Work
                    </button>
                ` : `
                    <button type="button" class="btn-social-auth" style="padding: 5px 10px; font-size: 0.72rem;" onclick="showToast('Viewing submission files for ${item.title}', 'info')">
                        <i class="fas fa-file-arrow-down"></i> Files
                    </button>
                `}
            </div>
        </div>
    `).join('');
}

function filterAssignments(type, btnElement) {
    document.querySelectorAll('.filter-pill-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    renderAssignments(type);
}

function openSubmitAssignmentModal(assignmentId) {
    const item = currentStudent.assignments.find(a => a.id === assignmentId);
    if (!item) return;

    currentSelectedAssignment = item;
    const titleEl = document.getElementById('submitModalTitle');
    const subtitleEl = document.getElementById('submitModalSubtitle');
    const fileLabel = document.getElementById('selectedFileName');

    if (titleEl) titleEl.textContent = `Submit: ${item.title}`;
    if (subtitleEl) subtitleEl.textContent = `Course: ${item.course} • ${item.weight}`;
    if (fileLabel) fileLabel.textContent = '';

    openModal('submitAssignmentModal');
}

function handleFileSelected(input) {
    const label = document.getElementById('selectedFileName');
    if (input.files && input.files[0]) {
        label.textContent = `Selected: ${input.files[0].name} (${(input.files[0].size / 1024).toFixed(1)} KB)`;
    }
}

function confirmAssignmentSubmission() {
    if (!currentSelectedAssignment) return;

    currentSelectedAssignment.status = 'submitted';
    currentSelectedAssignment.dueDate = `Submitted Today at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    saveCurrentStudentState();
    closeModal('submitAssignmentModal');
    
    renderAssignments('all');
    renderDashboardOverview();

    showToast(`Successfully submitted coursework for ${currentSelectedAssignment.course}!`, 'success');
}

// ============================================================================
// TAB 5: GRADES & GPA SIMULATOR
// ============================================================================

function renderGradesAndTranscript() {
    const tbody = document.getElementById('gradesTableBody');
    if (!tbody) return;

    const gpaCumEl = document.getElementById('gradesCumulativeGpa');
    const gpaMajEl = document.getElementById('gradesMajorGpa');
    const creditsEl = document.getElementById('gradesCompletedCredits');

    if (gpaCumEl) gpaCumEl.textContent = currentStudent.gpa.toFixed(2);
    if (gpaMajEl) gpaMajEl.textContent = currentStudent.majorGpa.toFixed(2);
    if (creditsEl) creditsEl.textContent = currentStudent.creditsCompleted.toFixed(1);

    tbody.innerHTML = currentStudent.courses.map(c => `
        <tr>
            <td><strong style="color: var(--primary); font-family: 'Fira Code', monospace;">${c.code}</strong></td>
            <td>${c.name}</td>
            <td>${c.credits.toFixed(1)}</td>
            <td>${c.score}%</td>
            <td><span class="course-grade-badge">${c.letter}</span></td>
            <td><strong>${(c.points * c.credits).toFixed(1)}</strong> pts</td>
        </tr>
    `).join('');
}

function renderGpaSimulator() {
    const container = document.getElementById('gpaSimulatorInputs');
    if (!container) return;

    container.innerHTML = currentStudent.courses.map((course, idx) => `
        <div class="sim-row">
            <div>
                <strong>${course.code}</strong>: ${course.name}
                <div style="font-size: 0.72rem; color: var(--text-dim);">${course.credits} Credits</div>
            </div>
            <div>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Current: <strong>${course.letter}</strong></span>
            </div>
            <div>
                <label style="font-size: 0.72rem; color: var(--text-dim); display: block; margin-bottom: 2px;">Simulated Final:</label>
                <select class="form-input sim-grade-select" data-credits="${course.credits}" data-index="${idx}" onchange="recalculateSimulatedGpa()" style="padding: 5px 8px; font-size: 0.8rem;">
                    <option value="4.0" ${course.letter === 'A' ? 'selected' : ''}>A (4.0)</option>
                    <option value="3.7" ${course.letter === 'A-' ? 'selected' : ''}>A- (3.7)</option>
                    <option value="3.3" ${course.letter === 'B+' ? 'selected' : ''}>B+ (3.3)</option>
                    <option value="3.0" ${course.letter === 'B' ? 'selected' : ''}>B (3.0)</option>
                    <option value="2.7" ${course.letter === 'B-' ? 'selected' : ''}>B- (2.7)</option>
                    <option value="2.0" ${course.letter === 'C' ? 'selected' : ''}>C (2.0)</option>
                </select>
            </div>
            <div style="text-align: right; font-weight: 700; color: var(--text-main);">
                <span class="sim-row-points">${(course.points * course.credits).toFixed(1)}</span> pts
            </div>
        </div>
    `).join('');

    recalculateSimulatedGpa();
}

function recalculateSimulatedGpa() {
    const selects = document.querySelectorAll('.sim-grade-select');
    let termQualityPoints = 0;
    let termCredits = 0;

    selects.forEach(sel => {
        const points = parseFloat(sel.value);
        const credits = parseFloat(sel.getAttribute('data-credits'));
        termQualityPoints += points * credits;
        termCredits += credits;

        const rowPts = sel.closest('.sim-row').querySelector('.sim-row-points');
        if (rowPts) rowPts.textContent = (points * credits).toFixed(1);
    });

    const previousEarnedPoints = (currentStudent.creditsCompleted - termCredits) * currentStudent.gpa;
    const totalCredits = currentStudent.creditsCompleted;
    const simulatedCumGpa = (previousEarnedPoints + termQualityPoints) / totalCredits;

    const displayEl = document.getElementById('simulatedGpaValue');
    if (displayEl) {
        displayEl.textContent = Math.min(4.0, simulatedCumGpa).toFixed(2);
    }
}

function resetGpaSimulator() {
    renderGpaSimulator();
    showToast('GPA target simulator reset to actual recorded scores.', 'info');
}

// Printable Academic Transcript
function openPrintTranscriptModal() {
    const container = document.getElementById('printableTranscriptContent');
    if (!container) return;

    container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; font-size: 0.85rem; border-bottom: 1px solid #cbd5e1; padding-bottom: 14px;">
            <div>
                <div><strong>Student Name:</strong> ${currentStudent.name}</div>
                <div><strong>Student ID:</strong> ${currentStudent.id}</div>
                <div><strong>Program:</strong> ${currentStudent.major}</div>
            </div>
            <div>
                <div><strong>Academic Standing:</strong> ${currentStudent.standing}</div>
                <div><strong>Honor Recognition:</strong> ${currentStudent.honors}</div>
                <div><strong>Issued Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
        </div>

        <h4 style="margin-bottom: 10px; font-size: 0.95rem; color: #1e293b;">Undergraduate Coursework Record</h4>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 0.82rem;">
            <thead>
                <tr style="background: #f1f5f9; border-bottom: 2px solid #cbd5e1; text-align: left;">
                    <th style="padding: 8px;">Course</th>
                    <th style="padding: 8px;">Title</th>
                    <th style="padding: 8px;">Credits</th>
                    <th style="padding: 8px;">Grade</th>
                    <th style="padding: 8px;">Points</th>
                </tr>
            </thead>
            <tbody>
                ${currentStudent.courses.map(c => `
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px; font-weight: 700;">${c.code}</td>
                        <td style="padding: 8px;">${c.name}</td>
                        <td style="padding: 8px;">${c.credits.toFixed(1)}</td>
                        <td style="padding: 8px; font-weight: 700;">${c.letter}</td>
                        <td style="padding: 8px;">${(c.points * c.credits).toFixed(1)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 12px; display: flex; justify-content: space-around; font-size: 0.85rem;">
            <div><strong>Cumulative Credits:</strong> ${currentStudent.creditsCompleted.toFixed(1)}</div>
            <div><strong>Cumulative GPA:</strong> <span style="color: #4f46e5; font-size: 1.05rem; font-weight: 800;">${currentStudent.gpa.toFixed(2)}</span></div>
            <div><strong>Major GPA:</strong> <span style="font-weight: 800;">${currentStudent.majorGpa.toFixed(2)}</span></div>
        </div>

        <div style="margin-top: 20px; text-align: right; font-size: 0.72rem; color: #64748b;">
            <p>Office of the University Registrar &bull; Apex University</p>
            <p>Certified Secure Academic Document &bull; Verification Hash: 9f82-a0e1-48bd-bb23</p>
        </div>
    `;

    openModal('transcriptModal');
}

// ============================================================================
// TAB 6: COURSE REGISTRATION / CATALOG
// ============================================================================

function renderCourseCatalog() {
    const grid = document.getElementById('courseCatalogGrid');
    if (!grid) return;

    const enrolledCodes = currentStudent.courses.map(c => c.code);

    grid.innerHTML = COURSE_CATALOG_DATA.map(course => {
        const isEnrolled = enrolledCodes.includes(course.code);
        return `
            <div class="catalog-card">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span class="course-code-tag">${course.code}</span>
                        <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700;">${course.openSeats} Seats Left</span>
                    </div>
                    <h3 style="font-size: 0.98rem; font-weight: 700; color: var(--text-main);">${course.name}</h3>
                    <p style="font-size: 0.78rem; color: var(--text-muted); margin: 6px 0;">${course.description}</p>
                    <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 6px;">
                        <div><i class="fas fa-user-tie"></i> ${course.instructor}</div>
                        <div><i class="fas fa-clock"></i> ${course.schedule}</div>
                        <div><i class="fas fa-layer-group"></i> Prereq: ${course.prereq}</div>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 8px; border-top: 1px solid var(--border-color);">
                    <span style="font-weight: 700; color: var(--primary); font-size: 0.82rem;">${course.credits} Credits</span>
                    ${isEnrolled ? `
                        <button type="button" class="btn-social-auth" style="cursor: default;" disabled>
                            <i class="fas fa-check"></i> Enrolled
                        </button>
                    ` : `
                        <button type="button" class="btn-submit" style="padding: 6px 14px; font-size: 0.78rem; width: auto;" onclick="enrollNewCourse('${course.code}')">
                            <i class="fas fa-plus"></i> Add Course
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join('');

    const creditLimitDisplay = document.getElementById('catalogEnrolledCredits');
    if (creditLimitDisplay) creditLimitDisplay.textContent = currentStudent.enrolledCredits.toFixed(0);
}

function filterCourseCatalog() {
    const searchVal = document.getElementById('catalogSearchInput')?.value?.toLowerCase() || '';
    const deptVal = document.getElementById('catalogDeptFilter')?.value || 'all';

    const cards = document.querySelectorAll('.catalog-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const matchesSearch = text.includes(searchVal);
        let matchesDept = true;

        if (deptVal !== 'all') {
            matchesDept = card.querySelector('.course-code-tag')?.textContent.startsWith(deptVal);
        }

        card.style.display = matchesSearch && matchesDept ? 'flex' : 'none';
    });
}

function enrollNewCourse(courseCode) {
    const catalogItem = COURSE_CATALOG_DATA.find(c => c.code === courseCode);
    if (!catalogItem) return;

    if (currentStudent.enrolledCredits + catalogItem.credits > 18.0) {
        showToast('Credit limit exceeded! Max 18.0 credits per semester.', 'error');
        return;
    }

    const newCourse = {
        code: catalogItem.code,
        name: catalogItem.name,
        instructor: catalogItem.instructor,
        email: `${catalogItem.instructor.toLowerCase().replace(/[^a-z]/g, '')}@university.edu`,
        credits: catalogItem.credits,
        schedule: catalogItem.schedule,
        days: catalogItem.schedule.includes('Tue') ? ['Tuesday', 'Thursday'] : ['Monday', 'Wednesday'],
        timeSlot: '03:30 PM',
        room: 'Tech Quad 302',
        currentGrade: 'In Progress',
        score: 100,
        letter: 'A',
        points: 4.0,
        attendance: '100%',
        syllabus: {
            description: catalogItem.description,
            grading: 'Midterm: 35%, Final: 40%, Homework: 25%',
            textbook: 'University Approved Reading Material'
        }
    };

    currentStudent.courses.push(newCourse);
    currentStudent.enrolledCredits += catalogItem.credits;

    saveCurrentStudentState();
    
    renderCourseCatalog();
    renderMyCourses();
    renderTimetable();
    renderDashboardOverview();
    renderGradesAndTranscript();

    showToast(`Enrolled in ${catalogItem.code}: ${catalogItem.name}!`, 'success');
}

function dropCourse(courseCode) {
    const idx = currentStudent.courses.findIndex(c => c.code === courseCode);
    if (idx === -1) return;

    const dropped = currentStudent.courses[idx];
    currentStudent.courses.splice(idx, 1);
    currentStudent.enrolledCredits -= dropped.credits;

    saveCurrentStudentState();

    renderMyCourses();
    renderCourseCatalog();
    renderTimetable();
    renderDashboardOverview();
    renderGradesAndTranscript();

    showToast(`Dropped ${dropped.code} from active courses.`, 'warning');
}

// ============================================================================
// TAB 7: TUITION & PAYMENTS
// ============================================================================

function openPaymentModal() {
    openModal('paymentModal');
}

function handlePaymentSubmit(event) {
    event.preventDefault();
    const amount = document.getElementById('paymentAmountInput')?.value || '500.00';

    closeModal('paymentModal');
    showToast(`Processing payment of $${amount}...`, 'info');

    setTimeout(() => {
        showToast(`Payment of $${amount} authorized! Official receipt generated.`, 'success');
        viewRecentReceipt();
    }, 1000);
}

function viewRecentReceipt() {
    openPrintTranscriptModal();
}

// ============================================================================
// TAB 8: ADVISOR & CAMPUS SERVICES
// ============================================================================

function openAdvisorModal() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) dateInput.value = tomorrow.toISOString().split('T')[0];

    openModal('advisorModal');
}

function bookSpecificAdvisor(name) {
    const select = document.getElementById('bookingAdvisorSelect');
    if (select) {
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value.includes(name)) {
                select.selectedIndex = i;
                break;
            }
        }
    }
    openAdvisorModal();
}

function handleAdvisorBooking(event) {
    event.preventDefault();
    const advisor = document.getElementById('bookingAdvisorSelect')?.value;
    const date = document.getElementById('bookingDate')?.value;
    const slot = document.getElementById('bookingTimeSlot')?.value;

    closeModal('advisorModal');
    showToast(`Advising session booked with ${advisor} on ${date} at ${slot}!`, 'success');
}

// ============================================================================
// TAB 9: SETTINGS & PROFILE UPDATE
// ============================================================================

function handleProfileUpdate(event) {
    event.preventDefault();
    const newName = document.getElementById('settingsFullName')?.value;
    const newPhone = document.getElementById('settingsPhone')?.value;
    const newAddr = document.getElementById('settingsAddress')?.value;

    if (newName) currentStudent.name = newName;
    if (newPhone) currentStudent.phone = newPhone;
    if (newAddr) currentStudent.address = newAddr;

    saveCurrentStudentState();
    renderDashboardOverview();

    showToast('Student profile details updated successfully!', 'success');
}

// ============================================================================
// THEME ENGINE (SOLID 3-COLOR SYSTEM)
// ============================================================================

function initThemeState() {
    const savedTheme = localStorage.getItem('portal_theme') || 'dark';
    setThemeMode(savedTheme, false);

    const headerToggle = document.getElementById('headerThemeToggle');
    if (headerToggle) {
        headerToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            setThemeMode(current === 'dark' ? 'light' : 'dark');
        });
    }
}

function setThemeMode(mode, showNotification = true) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('portal_theme', mode);

    const headerIcon = document.getElementById('headerThemeIcon');
    if (headerIcon) {
        headerIcon.className = mode === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }

    if (showNotification) {
        showToast(`Switched to ${mode.toUpperCase()} mode.`, 'info', 2000);
    }
}

// ============================================================================
// NOTIFICATIONS & SYLLABUS MODALS
// ============================================================================

function renderNotificationsList() {
    const container = document.getElementById('notificationsListContainer');
    if (!container) return;

    container.innerHTML = MOCK_NOTIFICATIONS.map(n => `
        <div style="padding: 10px; border-bottom: 1px solid var(--border-color); display: flex; gap: 10px; align-items: flex-start;">
            <div style="width: 28px; height: 28px; border-radius: 50%; background-color: var(--primary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 0.78rem; flex-shrink: 0;">
                <i class="fas ${n.icon}"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-main);">${n.title}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">${n.text}</div>
                <div style="font-size: 0.68rem; color: var(--text-dim); margin-top: 3px;">${n.time}</div>
            </div>
        </div>
    `).join('');
}

function toggleNotificationDrawer() {
    const modal = document.getElementById('notificationsModal');
    if (modal) {
        modal.classList.toggle('active');
    }
}

function markAllNotificationsRead() {
    toggleNotificationDrawer();
    const dot = document.querySelector('.icon-indicator-dot');
    if (dot) dot.style.display = 'none';
    showToast('All notifications marked as read.', 'info');
}

function openSyllabusModal(courseCode) {
    const course = currentStudent.courses.find(c => c.code === courseCode) || COURSE_CATALOG_DATA.find(c => c.code === courseCode);
    if (!course) return;

    const titleEl = document.getElementById('syllabusModalTitle');
    const bodyEl = document.getElementById('syllabusModalContent');

    if (titleEl) titleEl.textContent = `${course.code}: ${course.name} Syllabus`;
    if (bodyEl) {
        bodyEl.innerHTML = `
            <div style="margin-bottom: 14px; background-color: var(--bg-input); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
                <div style="font-weight: 700; color: var(--primary);"><i class="fas fa-user-tie"></i> Instructor: ${course.instructor}</div>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 2px;">Email: ${course.email || 'faculty@university.edu'} &bull; Office: ${course.room}</div>
            </div>

            <h4 style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 4px;">Course Overview</h4>
            <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 14px;">
                ${course.syllabus?.description || 'Comprehensive curriculum covering theoretical foundations and practical laboratory applications.'}
            </p>

            <h4 style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 4px;">Assessment & Grading Criteria</h4>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 14px;">
                ${course.syllabus?.grading || 'Midterms: 30%, Final: 40%, Problem Sets: 30%'}
            </p>

            <h4 style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 4px;">Required Course Materials</h4>
            <p style="font-size: 0.82rem; color: var(--text-muted);">
                ${course.syllabus?.textbook || 'Digital access available through Apex University Library Online Portal.'}
            </p>
        `;
    }

    openModal('syllabusModal');
}

// ============================================================================
// GLOBAL SEARCH ENGINE
// ============================================================================

function handleGlobalSearch(query) {
    if (!query || query.trim() === '') return;
    const q = query.toLowerCase();

    const matchedCourse = currentStudent.courses.find(c => c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q));
    if (matchedCourse) {
        switchPortalTab('courses');
        return;
    }

    const matchedAsn = currentStudent.assignments.find(a => a.title.toLowerCase().includes(q) || a.course.toLowerCase().includes(q));
    if (matchedAsn) {
        switchPortalTab('assignments');
    }
}

// ============================================================================
// MODAL CONTROLS & UTILITIES
// ============================================================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('portal-modal-overlay')) {
        event.target.classList.remove('active');
    }
});

function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    toast.innerHTML = `
        <i class="fas fa-circle-info" style="color: var(--primary); font-size: 1rem;"></i>
        <div style="flex: 1; font-size: 0.82rem; color: var(--text-main); font-weight: 500;">${message}</div>
        <button type="button" style="background: none; border: none; color: var(--text-dim); cursor: pointer;" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration);
}

function logoutStudent() {
    sessionStorage.removeItem('portal_session');
    showToast('Signed out of student session.', 'info');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 600);
}

document.addEventListener('DOMContentLoaded', initPortal);
