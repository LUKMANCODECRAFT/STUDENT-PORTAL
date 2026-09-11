/**
 * Student Academic Portal - Modern Authentication & Security Gateway
 * Clean 3-Color Maximum Solid Palette
 */

const AuthConfig = {
    SESSION_KEY: 'portal_session',
    ACTIVE_STUDENT_KEY: 'active_student_key',
    THEME_KEY: 'portal_theme'
};

document.addEventListener('DOMContentLoaded', () => {
    initAuthTheme();
    setupPasswordToggles();
    setup2FAPinInputs();
    setupSignupPasswordCriteria();
    setupFormSubmissions();
});

// ============================================================================
// THEME HANDLING
// ============================================================================

function initAuthTheme() {
    const savedTheme = localStorage.getItem(AuthConfig.THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleUI(savedTheme);

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem(AuthConfig.THEME_KEY, next);
            updateThemeToggleUI(next);
            showAuthToast(`Switched to ${next.toUpperCase()} mode.`, 'info', 2000);
        });
    }
}

function updateThemeToggleUI(theme) {
    const icon = document.querySelector('#themeToggleBtn i');
    const label = document.getElementById('themeToggleLabel');

    if (icon) icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
}

// ============================================================================
// QUICK DEMO ACCOUNTS 1-CLICK SWITCHER
// ============================================================================

const DEMO_STUDENT_CREDS = {
    alex: { email: 'a.rivera@university.edu', password: 'Password2026!' },
    sarah: { email: 's.chen@university.edu', password: 'Password2026!' },
    marcus: { email: 'm.vance@university.edu', password: 'Password2026!' }
};

function quickLoginDemo(studentKey) {
    const creds = DEMO_STUDENT_CREDS[studentKey];
    if (!creds) return;

    switchAuthView('login');

    const emailInput = document.getElementById('loginEmail');
    const pwdInput = document.getElementById('loginPassword');

    if (emailInput) emailInput.value = creds.email;
    if (pwdInput) pwdInput.value = creds.password;

    localStorage.setItem(AuthConfig.ACTIVE_STUDENT_KEY, studentKey);
    showAuthToast(`Loaded credentials for ${studentKey.toUpperCase()}. Signing in...`, 'info', 1500);

    const btn = document.getElementById('loginSubmitBtn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    }

    setTimeout(() => {
        sessionStorage.setItem(AuthConfig.SESSION_KEY, JSON.stringify({
            email: creds.email,
            userKey: studentKey,
            loginTime: Date.now()
        }));

        showAuthToast('Authentication verified! Launching Portal...', 'success', 1500);

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 600);
    }, 800);
}

// ============================================================================
// AUTH VIEW SWITCHER
// ============================================================================

function switchAuthView(viewName) {
    document.querySelectorAll('.form-view').forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`${viewName}FormView`);
    if (targetView) {
        targetView.classList.add('active');
    }

    document.querySelectorAll('.input-error-text').forEach(el => el.textContent = '');

    if (viewName === 'twoFactor') {
        setTimeout(() => {
            const firstPin = document.querySelector('.pin-digit');
            if (firstPin) firstPin.focus();
        }, 150);
    }
}

// ============================================================================
// 2FA PIN INPUT AUTOMATION
// ============================================================================

function setup2FAPinInputs() {
    const pinDigits = document.querySelectorAll('.pin-digit');
    if (!pinDigits.length) return;

    pinDigits.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val.length === 1 && index < pinDigits.length - 1) {
                pinDigits[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                pinDigits[index - 1].focus();
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = (e.clipboardData || window.clipboardData).getData('text').trim();
            if (/^\d{6}$/.test(pasteData)) {
                pasteData.split('').forEach((digit, i) => {
                    if (pinDigits[i]) pinDigits[i].value = digit;
                });
                pinDigits[pinDigits.length - 1].focus();
                showAuthToast('Verification code pasted.', 'info');
            }
        });
    });
}

function resend2FACode() {
    showAuthToast('New 6-digit verification code dispatched.', 'info');
}

// ============================================================================
// PASSWORD STRENGTH & CRITERIA CHECKER
// ============================================================================

function setupSignupPasswordCriteria() {
    const pwdInput = document.getElementById('regPassword');
    const fillBar = document.getElementById('pwdStrengthFill');

    if (!pwdInput || !fillBar) return;

    const critLen = document.getElementById('crit-len');
    const critUpper = document.getElementById('crit-upper');
    const critNum = document.getElementById('crit-num');
    const critSym = document.getElementById('crit-sym');

    pwdInput.addEventListener('input', () => {
        const val = pwdInput.value;
        let score = 0;

        const hasLen = val.length >= 8;
        if (critLen) critLen.classList.toggle('valid', hasLen);
        if (hasLen) score += 25;

        const hasUpper = /[A-Z]/.test(val);
        if (critUpper) critUpper.classList.toggle('valid', hasUpper);
        if (hasUpper) score += 25;

        const hasNum = /[0-9]/.test(val);
        if (critNum) critNum.classList.toggle('valid', hasNum);
        if (hasNum) score += 25;

        const hasSym = /[^A-Za-z0-9]/.test(val);
        if (critSym) critSym.classList.toggle('valid', hasSym);
        if (hasSym) score += 25;

        fillBar.style.width = `${score}%`;
    });
}

// ============================================================================
// PASSWORD VISIBILITY TOGGLE
// ============================================================================

function setupPasswordToggles() {
    document.querySelectorAll('.toggle-pwd-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            const icon = this.querySelector('i');

            if (input && icon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'fas fa-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'fas fa-eye';
                }
            }
        });
    });
}

// ============================================================================
// FORM SUBMISSION HANDLERS
// ============================================================================

function setupFormSubmissions() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail')?.value.trim();
            const password = document.getElementById('loginPassword')?.value;
            const emailErr = document.getElementById('loginEmailError');
            const pwdErr = document.getElementById('loginPasswordError');

            if (emailErr) emailErr.textContent = '';
            if (pwdErr) pwdErr.textContent = '';

            let hasErr = false;
            if (!email) {
                if (emailErr) emailErr.textContent = 'Please provide your university email.';
                hasErr = true;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                if (emailErr) emailErr.textContent = 'Invalid email address format.';
                hasErr = true;
            }

            if (!password) {
                if (pwdErr) pwdErr.textContent = 'Password is required.';
                hasErr = true;
            } else if (password.length < 6) {
                if (pwdErr) pwdErr.textContent = 'Password must be at least 6 characters.';
                hasErr = true;
            }

            if (hasErr) return;

            const submitBtn = document.getElementById('loginSubmitBtn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying Credentials...';
            }

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span>Sign In to Portal</span> <i class="fas fa-arrow-right"></i>';
                }
                showAuthToast('Credentials approved. Please complete 2FA verification.', 'info');
                switchAuthView('twoFactor');
            }, 800);
        });
    }

    const twoFactorForm = document.getElementById('twoFactorForm');
    if (twoFactorForm) {
        twoFactorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pinInputs = document.querySelectorAll('.pin-digit');
            const code = Array.from(pinInputs).map(inp => inp.value).join('');
            const errEl = document.getElementById('twoFactorError');

            if (errEl) errEl.textContent = '';

            if (code.length < 6) {
                if (errEl) errEl.textContent = 'Please enter all 6 digits.';
                return;
            }

            const btn = document.getElementById('twoFactorSubmitBtn');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authorizing...';
            }

            setTimeout(() => {
                sessionStorage.setItem(AuthConfig.SESSION_KEY, JSON.stringify({
                    email: document.getElementById('loginEmail')?.value || 'student@university.edu',
                    loginTime: Date.now()
                }));

                showAuthToast('2FA Verification successful! Welcome to the portal.', 'success');

                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 600);
            }, 800);
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const first = document.getElementById('regFirstName')?.value.trim();
            const last = document.getElementById('regLastName')?.value.trim();
            const pwd = document.getElementById('regPassword')?.value;
            const confirm = document.getElementById('regConfirmPassword')?.value;
            const terms = document.getElementById('regTerms')?.checked;

            if (pwd !== confirm) {
                showAuthToast('Passwords do not match.', 'error');
                return;
            }

            if (!terms) {
                showAuthToast('Please accept the University Honor Code.', 'error');
                return;
            }

            const submitBtn = document.getElementById('signupSubmitBtn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
            }

            setTimeout(() => {
                showAuthToast(`Account registered for ${first} ${last}!`, 'success');
                setTimeout(() => {
                    switchAuthView('login');
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<span>Register Student Account</span> <i class="fas fa-user-check"></i>';
                    }
                }, 1200);
            }, 1000);
        });
    }

    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('forgotEmail')?.value.trim();

            if (!email) {
                showAuthToast('Please enter your email address.', 'error');
                return;
            }

            const btn = document.getElementById('forgotSubmitBtn');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Link...';
            }

            setTimeout(() => {
                showAuthToast(`Reset instructions sent to ${email}!`, 'success');
                setTimeout(() => {
                    switchAuthView('login');
                    if (btn) {
                        btn.disabled = false;
                        btn.innerHTML = '<span>Send Recovery Link</span> <i class="fas fa-paper-plane"></i>';
                    }
                }, 1200);
            }, 1000);
        });
    }
}

function handleSSOLogin(provider) {
    showAuthToast(`Connecting to ${provider}...`, 'info');
    setTimeout(() => {
        showAuthToast(`${provider} token verified!`, 'success');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 800);
    }, 1000);
}

function showAuthToast(message, type = 'info', duration = 3000) {
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
