const express = require('express');
const mysql = require('mysql2');
const Sequelize = require('sequelize');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 4242;
// const SALT_ROUNDS = 10;
// const CREATED = 201;
const BAD_REQUEST = 400;
// const INTERNAL_SERVER_ERROR = 500;

app.set('port', process.env.PORT || PORT);


// const sequelize = new Sequelize(process.env.DB_NAME,
//                                 process.env.DB_USER, 
//                                 process.DB_PASSWORD, {
//                                     host: process.env.DB_HOST,
//                                     dialect: 'mysql',
//                                 }
//                         );

// const User = sequelize.define('User', {
//                                     email: {
//                                         type: Sequelize.STRING,
//                                         unique: true,
//                                         allwoNull: false,
//                                     },
//                                     password: {
//                                         type: Sequelize.STRING,
//                                         allowNull: false,
//                                     },
//                                 });

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.post('/signup', async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !email.includes('@')) {
//         return res.status(BAD_REQUEST).json({ error: 'Invalild email format' });
//     }

//     if (!password || !password.length < 8) {
//         return res.status(BAD_REQUEST).json({ error: 'Password must be at least 8 characters long' });
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
//         const newUser = await User.create({ email, password: hashedPassword });
//         const accessToken = jwt.sign({ userId: newUser.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
//         const refreshToken = jwt.sign({ userId: newUser.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

//         return res.status(CREATED).json({ message: 'Signup successful', accessToken, refreshToken });
//     } catch (error) {
//         console.error(error);
//         return res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
//     }
// });

// app.use((req, res, next) => {
//     console.log("everything will be in here\n");
//     next();
// });

app.get('/', (req, res) => {
    res.send("Hello");
});

/**
 * error handle
 */
app.use((err, req, res, next) => {
    console.error(err);
    res.status(BAD_REQUEST).send('error handle in error middle-ware');
});

app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
});