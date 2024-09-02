const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { name, birth_date, gender, phone_number, emergency_contact, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({ name, birth_date, gender, phone_number, emergency_contact, password: hashedPassword });
        res.status(201).json({ message: 'User created', user });
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { phone_number, password } = req.body;

    try {
        const user = await User.findOne({ where: { phone_number } });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            req.session.user = user;
            res.json({ message: 'Login successful' });
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

// Logout User
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ error: 'Error logging out' });
        res.json({ message: 'Logout successful' });
    });
});

// Get User Info
router.get('/info', (req, res) => {
    if (!req.session.user) return res.status(401).json({ error: 'Unauthorized' });

    res.json(req.session.user);
});

module.exports = router;
