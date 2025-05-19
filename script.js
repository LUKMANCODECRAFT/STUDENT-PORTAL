const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Dummy database (In real apps, use a proper database like MongoDB)
const users = [
  { username: 'student1', password: 'password123' },
  { username: 'student2', password: 'password456' }
];

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Route to login page
app.get('/', (req, res) => {
  res.render('login');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    req.session.loggedin = true;
    req.session.username = username;
    res.redirect('/dashboard');
  } else {
    res.send('Invalid credentials!');
  }
});

// Dashboard route (protected)
app.get('/dashboard', (req, res) => {
  if (req.session.loggedin) {
    res.render('dashboard', { username: req.session.username });
  } else {
    res.redirect('/');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});