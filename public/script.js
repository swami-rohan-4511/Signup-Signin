// Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            messageElement.style.color = '#28a745';
            messageElement.textContent = 'Account created successfully! You can now sign in.';
            document.getElementById('signupForm').reset();
        } else {
            messageElement.style.color = '#dc3545';
            messageElement.textContent = data.error || 'An error occurred during signup.';
        }
    } catch (error) {
        messageElement.style.color = '#dc3545';
        messageElement.textContent = 'Network error. Please try again.';
    }
});

// Handle signin form submission
document.getElementById('signinForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Store user info in localStorage (in a real app, use secure tokens)
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = 'welcome.html';
        } else {
            messageElement.style.color = '#dc3545';
            messageElement.textContent = data.error || 'Invalid email or password.';
        }
    } catch (error) {
        messageElement.style.color = '#dc3545';
        messageElement.textContent = 'Network error. Please try again.';
    }
});

// Logout function
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'signin.html';
}

// Check if user is logged in on welcome page
if (window.location.pathname.endsWith('welcome.html')) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'signin.html';
    }
}