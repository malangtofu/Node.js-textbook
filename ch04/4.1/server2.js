const http = require("http");
const fs = require("fs").promises;

// HTTP 서버 생성 및 요청 리스너 설정
http.createServer(async (req, res) => {
    try {
        // 비동기로 파일을 읽어와서 data 변수에 저장
        const data = await fs.readFile(__dirname + "/server2.html");

        // 성공적인 응답을 위한 헤더 설정
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        // 파일의 내용을 클라이언트에 응답
        res.end(data);
    } catch (err) {
        // 파일 읽기에 실패한 경우 에러 처리
        console.error(err);

        // 에러 응답을 위한 헤더 설정
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

        // 에러 메시지를 클라이언트에 응답
        res.end(err.message);
    }
}).listen(8081, () => {
    console.log("8081번 포트에서 서버 대기 중입니다!");
});