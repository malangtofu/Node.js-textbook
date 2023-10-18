const http = require("http");
const { json } = require("node:stream/consumers");
const fs = require("fs").promises;
const path = require("path");

const users = {}; // 데이터 저장용 객체

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url); // 요청 메서드와 URL을 콘솔에 출력
        if (req.method === "GET") {
            if (req.url === "/") {
                // 루트 페이지인 경우 restFront.html 파일을 읽어와 응답으로 보냄
                const data = await fs.readFile(path.join(__dirname, "restFront.html"));
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                return res.end(data);
            } else if (req.url === "/about") {
                // '/about' 페이지인 경우 about.html 파일을 읽어와 응답으로 보냄
                const data = await fs.readFile(path.join(__dirname, "about.html"));
                res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                return res.end(data);
            } else if (req.url === "/users") {
                // '/users' 페이지인 경우, 사용자 정보(users 객체)를 JSON 형태로 응답으로 보냄
                res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
                return res.end(JSON.stringify(users));
            } else {
                // 위의 조건에 해당하지 않는 경우, 파일을 읽어와 해당 파일을 응답으로 보냄
                try {
                    const data = await fs.readFile(path.join(__dirname, req.url));
                    return res.end(data);
                } catch (err) {
                    // 주소에 해당하는 라우트를 찾지 못하면 404 Not Found 에러 발생
                }
            }
        } else if (req.method === "POST") {
            if (req.url === "/user") {
                // POST 메서드이며 '/user' 경로로 들어온 경우
                let body = '';
                // 요청의 body를 스트림 형식으로 받음
                req.on("data", (data) => {
                    body += data;
                });
                // 요청의 body를 다 받은 후 실행됨
                return req.on("end", () => {
                    console.log("POST 본문(Body):", body);
                    const { name } = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name; // 사용자 정보를 users 객체에 추가
                    res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });
                    res.end("등록 성공");
                });
            }
        } else if (req.method === "PUT") {
            if (req.url.startsWith("/user/")) {
                // PUT 메서드이며 '/user/:id' 형식의 경로인 경우
                const key = req.url.split('/')[2];
                let body = '';
                req.on("data", (data) => {
                    body += data;
                });
                return req.on("end", () => {
                    console.log("PUT 본문(Body):", body);
                    users[key] = JSON.parse(body).name; // 사용자 정보 업데이트
                    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
                    return res.end(JSON.stringify(users));
                });
            }
        } else if (req.method === "DELETE") {
            if (req.url.startsWith("/user/")) {
                // DELETE 메서드이며 '/user/:id' 형식의 경로인 경우
                const key = req.url.split('/')[2];
                delete users[key]; // 해당 사용자 정보 삭제
                res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
                return res.end(JSON.stringify(users));
            }
        }
        // 위 조건에 모두 해당하지 않으면 404 Not Found 응답을 보냄
        res.writeHead(404);
        return res.end("NOT FOUND");
    } catch (err) {
        console.error(err);
        res.writeHead(500);
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(err);
    }
}).listen(8082, () => {
    console.log("8082번 포트에서 서버 대기 중입니다");
});
