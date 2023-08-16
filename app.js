const express = require('express');
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = 4242;
const SALT_ROUNDS = 10;
const CREATED = 201;
const BAD_REQUEST = 400;
const INTERNAL_SERVER_ERROR = 500;

app.set('port', process.env.PORT || PORT);


const sequelize = new Sequelize(process.env.DB_NAME,
                                process.env.DB_USER, 
                                process.DB_PASSWORD, {
                                    host: process.env.DB_HOST,
                                    dialect: 'mysql',
                                }
                        );

const User = sequelize.define('User', {
                                    email: {
                                        type: Sequelize.STRING,
                                        unique: true,
                                        allwoNull: false,
                                    },
                                    password: {
                                        type: Sequelize.STRING,
                                        allowNull: false,
                                    },
                                });

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(BAD_REQUEST).json({ error: 'Invalild email format' });
    }

    if (!password || !password.length < 8) {
        return res.status(BAD_REQUEST).json({ error: 'Password must be at least 8 characters long' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const newUser = await User.create({ email, password: hashedPassword });
        const accessToken = jwt.sign({ userId: newUser.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
        const refreshToken = jwt.sign({ userId: newUser.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

        return res.status(CREATED).json({ message: 'Signup successful', accessToken, refreshToken });
    } catch (error) {
        console.error(error);
        return res.status(INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
});

app.use((req, res, next) => {
    console.log("everything will be in here\n");
    next();
});

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

// // To be added logger
// app.get('/', (req, res) => {
//    console.log("route");
//    res.send('Route');
// });

// /** 1. 회원가입 엔드포인트
//  * req에서 email, pwd 확인
//  * email 중복여부, 유효성 검사('@'이 있는가?)
//  * pwd 길이
//  * JWT 제공
//  ** 어떻게해야 보안적으로 좀더 안정적인가
//  */
// app.post('/user/signup', (req, res) => {
//    // req.
// });

// /** 2. login endpoint
//  * req에서 email, pwd 확인
//  * email 중복여부, 유효성 검사('@'이 있는가?)
//  * pwd 길이
//  * JWT 제공
//  ** 어떻게해야 보안적으로 좀더 안정적인가
//  */
// app.get('/user/login', (req, res) => {
   
// });

// /** 3. 새로운 게시글 생성하는 엔드포인트
//  * 게시글 ID와 유저 ID 연결
//  * boards or /board/list
//  */
// // /boards/1
// app.post('/boards/1', (req, res) => {

// });

// /** 4. 게시글 목록 조회 엔드포인트
//  * pagination 기능 구현 (query String)
//  * query String '?'
//  *    - & 로 나눈다
//  * https://www.gilbut.co.kr/?page=3&limit=10
//  *    - limit
//  * 
//  */
// // /boards?1
// app.get('/boards', (req, res) => {

// });

// /** 5. 특정 게시글을 조회하는 엔드포인트
//  * 게시글 ID를 기반으로 게시글을 가져온다
//  * DB에서의 의미
//  * 조회
//  *    DB에서 찾는다
//  *    - 1개만
//  *    - 전체조회
//  *       SELECT * 
//  *       FROM   TABLE;
//  * 검색
//  *    DB
//  *    1개만 
//  *    select * from table where sdfjklsdfjkl and  and and ;
//  *    Like
//  *    여러개 포함될 수 있다.
//  *   로그인을 하지 않았더라도 조회는 가능
//  *   보안 검사정도만 진행
//  */
// app.get('/board/:board_id', (req, res) => {
   
// });

// /** 6. 특정 게시글을 수정하는 엔드포인트
//  *    404 ERROR
//  * - 게시글을 작성자만 수정가능하므로 게시글 작성자인지 확인
//  * DB에서 확인
//  */
// app.put('/boards/board_id', (req, res) => {
   
// });

// /** 7. 특정 게시글 삭제하는 엔드포인트
//  * - 게시글을 작성자만 삭제가능하므로 게시글 작성자인지 확인
//  */
// app.delete('/board/detail/:board_id', (req, res) => {

// });

// // To be added logger
// app.listen(PORT, () => {
//    // console.log("Hello world 4242");
//    // console.log(`${PORT} port listen`);
// });
