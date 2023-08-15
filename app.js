const express = require('express');
const sequelize = require('./database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = 3000;

// Define User model
const User = require('./User');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Validate email format
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Validate password length
  if (!password || password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const newUser = await User.create({ email, password: hashedPassword });

    // Generate JWT tokens
    const accessToken = jwt.sign({ userId: newUser.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: newUser.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    return res.status(201).json({ message: 'Signup successful', accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
  await sequelize.sync(); // Sync database models with the database schema
});
