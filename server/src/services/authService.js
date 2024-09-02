const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register a new user
exports.registerUser = async ({ name, birth_date, gender, phone_number, emergency_contact, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({
        name, birth_date, gender, phone_number, emergency_contact, password: hashedPassword
    });
};

// Authenticate user by phone number and password
exports.authenticateUser = async (phone_number, password) => {
    const user = await User.findOne({ where: { phone_number } });
    if (user && await bcrypt.compare(password, user.password)) {
        return user;
    }
    return null;
};
