# 문제이해
1. 사용자 회원가입 엔드포인트
    - 유효성 검사
        - 비밀번호 8자 이상
        - 이메일 @ 포함
2. 사용자 로그인 엔드포인트
3. 새로운 게시글 생성 엔드포인트
4. 게시글 목록 조회 엔드포인트
    - pagination 포함
5. 특정 게시글 조회 엔드포인트
    - 게시글 ID 이용 조회
6. 특정 게시글 수정 엔드포인트 
    - 게시글 ID 이용 수정
7. 특정 게시글 삭제 엔드포인트
    - 게시글 ID 이용 삭제
    - 작성자만이 삭제 가능


# 문제 재정의


# 문제 해결방법

## 잘개쪼갠 목표
- DB필요 
    회원 Table, 게시글 table
    - 회원 table
        - user ID    (PK)
        - Email (UNIQUE)
        - PWD
    - 게시글 table
        - 게시글 ID (PK)
        - 게시글 제목
        - 게시글 내용 6만5천자
        - 작성자 ID (FK)
        - 글 생성 시간
        - 글 수정 시간
        ++
        - 글 비밀번호
    - ORM sequelize
        - DataBase 자체를 만들어준다
            이미 있으면 안만든다.
            DB create
            DB migrate
            <!-- npm sequelize -->
        - 
    
        
1. 회원가입 엔드포인트
    - 회원가입 기능 제공 찾아보기
        - 회원가입 엔드포인트 보안 여부
        - https://lakelouise.tistory.com/232
        - https://backend-intro.vlpt.us/3/
    - 예정 endpoint
        https://localhost:4242/user/signup
        - naver, google 
            - /register/?=#ljfsdlkfjowierusdfkjglrj#=dfmlkfdjgkljdflkg

    - email, pwd validation
        - email
            - @
            - duplicate
        - pwd
            - 8자 이상
    - password 암호화하여 DB에 저장
    - JWT
        - JWT

    - security
        - spring에서는 따로 제공하는데 node에서는 어떻게 할 수 있는가?

2. 사용자 로그인 엔드포인트 
    https://localhost:4242/user/login
    - 사용자가 올바른 이메일과 비밀번호를 제공하는가
    - 사용자 인증 마친 이후 JWT를 생성하여 사용자에게 반환
    - 이메일, 비밀번호 유효성 검사

3. 새로운 게시글 생성하는 엔드포인트
    - 제목, 내용이 중복이더라도 생성
    - 생성된 데이터를 DB에 저장한다.
        DB 저장할 수 있는 최대 길이는 어떻게되는가?
        65,535 byte
        2 ^ 16

4. 게시글 목록 조회 엔드포인트
    - pagination 기능 구현
    - 구현 방법 참조
    - api
    - 예외처리 조건
        - 가장 마지막 페이지
        - 아무 페이지도 없다면?

5. 특정 게시글을 조회하는 엔드포인트
    - 게시글 ID를 토대로 검색
    - (option)게시글 제목, 내용을 토대로 검색

6. 특정 게시글을 수정하는 엔드포인트
    - 게시글의 ID와 수정 내용을 받아 해당 게시글을 수정하는 엔드포인트
        - 게시글을 작성자만 수정가능
        - HTTP PUT Method를 이용해서 수정한다.

7. 특정 게시글 삭제하는 엔드포인트
    - ID는 지정한 특정 숫자부터 시작
        - 1
        - 42
        - etc
    - 게시글 ID를 받아서 해당 개시글 삭제
        - 게시글을 작성자만 삭제가능
        - HTTP DELETE Method 이용

## naver web
- list
    https://comic.naver.com/webtoon/list?titleId=758037&page=6&sort=DESC
    - 여기서의 list는 자원
    - list들이 나오는 자원
- page
    - https://comic.naver.com/webtoon/detail?titleId=758037&no=17
        - page의 자원
    - https://www.amazon.com/Galaxy-Replacement-Samsung-Stylus-Tweezer/dp/B0BZNXGQ61/ref=sr_1_35?crid=2ZY9ADLPPC983&keywords=S8&qid=1692013735&sprefix=s%2Caps%2C692&sr=8-35

https://www.amazon.com/s?k=S8&page=3&crid=2ZY9ADLPPC983&qid=1692013726&sprefix=s%2Caps%2C692&ref=sr_pg_3


- https://aws.amazon.com/ko/what-is/restful-api/


## MVC
### Model 

### View
skip

### Controller



# 검증


# 실행 

