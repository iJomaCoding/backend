const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerEmployer = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the role 'employer'
    const newUser = new User({
      username,
      password: hashedPassword,
      role: role || 'employer'
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Employer registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { registerEmployer };
