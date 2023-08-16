# Wanted pre-onboarding backend internship

## Name
임진호

## How to execute program
1. install mysql
2. start mysql
3. create mysql database
4. .env setting 
```
DB_HOST=...
DB_USER=...
DB_PASSWORD=...
DB_NAME=...
ACCESS_TOKEN_SECRET=...
REFRESH_TOKEN_SECRET=...
```
5. npm i
6. npm start
7. endpoint 호출방법
- http://localhost:{4242}/

## DB table structure
![image](https://github.com/Jake1152/wanted-pre-onboarding-backend/assets/74135462/23d67558-4747-4063-8a32-91026b9628cf)
- URL
  - https://www.erdcloud.com/p/4ouaNgGNEtBu4Zd7y

## API action mode video link


## Implement way and reason
### 회원가입
- 아이디 (이메일) 중복검사, 유효성 검사 '@'가 있는지 없는지 확인
- 비밀번호 유효성 검사 8자 이상인지, 비밀번호는 hash로 변환하여 DB에 저장한다.

### 로그인
- 로그인 성공시 id를 이용해서 JWT 발급하여 반환



## API specification 
- 회원가입
  - POST /signup
- 로그인
  - POST /login
- 게시판 생성
  - POST /boards
- 게시판 조회
  - GET /boards
- 특정 게시글 조회
  - GET /boards/:id
- 특정 게시글 수정
  - PUT /boards/:id
- 특정 게시글 조회
  - DELETE /boards/:id


