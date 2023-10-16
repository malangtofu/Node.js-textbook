const http = require("http");

// http 모듈을 불러오고, HTTP 서버를 생성합니다.
const server = http.createServer((req, res) => {
    // 클라이언트로 응답을 보낼 콜백 함수를 등록합니다.

    // 서버가 클라이언트에게 응답할 내용에 대한 헤더 정보를 설정합니다.
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });

    // 브라우저에게 전송할 HTML 문서의 내용을 작성합니다.
    res.write("<h1>hello Node!</h1>");

    // write 메서드를 통해 응답 데이터를 추가합니다.
    res.end("<p>hello Server!</p>");
    // end 메서드를 호출하여 응답을 마무리합니다.
})

// 서버를 8080 포트로 바인딩합니다.
server.listen(8080);

// 'listening' 이벤트를 사용하여 서버가 시작되면 실행할 콜백 함수를 등록합니다.
server.on("listening", () => {
    console.log("8080번 포트에서 서버 대기 중입니다!");
    // 서버가 시작되면 콘솔에 메시지를 출력합니다.
})

// 'error' 이벤트를 사용하여 서버에서 발생하는 에러를 처리합니다.
server.on("error", (error) => {
    console.error(error);
    // 에러가 발생하면 콘솔에 에러 메시지를 출력합니다.
})