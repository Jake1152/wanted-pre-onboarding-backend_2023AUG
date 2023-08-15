const express = require('express');
const app = express();
const PORT = 4242;

// To be added logger
app.get('/', (req, res) => {
   console.log("route");
   res.send('Route');
});

/** 1. 회원가입 엔드포인트
 * req에서 email, pwd 확인
 * email 중복여부, 유효성 검사('@'이 있는가?)
 * pwd 길이
 * JWT 제공
 ** 어떻게해야 보안적으로 좀더 안정적인가
 */
app.post('/user/signup', (req, res) => {
   // req.
});

/** 2. login endpoint
 * req에서 email, pwd 확인
 * email 중복여부, 유효성 검사('@'이 있는가?)
 * pwd 길이
 * JWT 제공
 ** 어떻게해야 보안적으로 좀더 안정적인가
 */
app.get('/user/login', (req, res) => {
   
});

/** 3. 새로운 게시글 생성하는 엔드포인트
 * 게시글 ID와 유저 ID 연결
 * boards or /board/list
 */
// /boards/1
app.post('/boards/1', (req, res) => {
     /board/list/42

});

/** 4. 게시글 목록 조회 엔드포인트
 * pagination 기능 구현 (query String)
 * query String '?'
 *    - & 로 나눈다
 * https://www.gilbut.co.kr/?page=3&limit=10
 *    - limit
 * 
 */
// /boards?1
app.get('/boards', (req, res) => {

});

/** 5. 특정 게시글을 조회하는 엔드포인트
 * 게시글 ID를 기반으로 게시글을 가져온다
 * DB에서의 의미
 * 조회
 *    DB에서 찾는다
 *    - 1개만
 *    - 전체조회
 *       SELECT * 
 *       FROM   TABLE;
 * 검색
 *    DB
 *    1개만 
 *    select * from table where sdfjklsdfjkl and  and and ;
 *    Like
 *    여러개 포함될 수 있다.
 *   로그인을 하지 않았더라도 조회는 가능
 *   보안 검사정도만 진행
 */
app.get('/board/:board_id', (req, res) => {
   
});

/** 6. 특정 게시글을 수정하는 엔드포인트
 *    404 ERROR
 * - 게시글을 작성자만 수정가능하므로 게시글 작성자인지 확인
 * DB에서 확인
 */
app.put('/boards/board_id', (req, res) => {
   
});

/** 7. 특정 게시글 삭제하는 엔드포인트
 * - 게시글을 작성자만 삭제가능하므로 게시글 작성자인지 확인
 */
app.delete('/board/detail/:board_id', (req, res) => {

});

// To be added logger
app.listen(PORT, () => {
   // console.log("Hello world 4242");
   // console.log(`${PORT} port listen`);
});