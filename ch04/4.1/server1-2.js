const http = require("http");

// 첫 번째 서버: 8080 포트에서 대기
http.createServer((req, res) => {
    // 클라이언트로 응답을 보내기 위한 콜백 함수 등록

    // 서버가 클라이언트에게 응답할 내용에 대한 헤더 정보 설정
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    // 응답으로 HTML 데이터 작성
    res.write("<h1>hello Node!</h1>");
    res.end("<p>hello Server!</p>");
}).listen(8080, () => {
    // 서버가 8080 포트로 바인딩되고 서버가 시작되면 실행될 콜백 함수
    console.log("8080번 포트에서 서버 대기 중입니다!");
});

// 두 번째 서버: 8081 포트에서 대기
http.createServer((req, res) => {
    // 클라이언트로 응답을 보내기 위한 콜백 함수 등록

    // 서버가 클라이언트에게 응답할 내용에 대한 헤더 정보 설정
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    // 응답으로 HTML 데이터 작성
    res.write("<h1>hello Node!</h1>");
    res.end("<p>hello Server!</p>");
}).listen(8081, () => {
    // 서버가 8081 포트로 바인딩되고 서버가 시작되면 실행될 콜백 함수
    console.log("8081번 포트에서 서버 대기 중입니다!");
});