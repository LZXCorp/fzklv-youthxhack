const authService = require('../services/authService');

// Register a new user
exports.register = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

// User login
exports.login = async (req, res) => {
    const { phone_number, password } = req.body;
    const user = await authService.authenticateUser(phone_number, password);

    if (user) {
        req.session.user = user;
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ error: 'Invalid phone number or password' });
    }
};

// User logout
exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ error: 'Error logging out' });
        res.json({ message: 'Logout successful' });
    });
};

// Get user info
exports.getUserInfo = (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
