const expiress = require("express");
const path = require("path");
const app = expiress();

app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log("1 모든 요청에 실행하고싶어요");
    next();
}, (req, res, next) => {
    console.log("2 모든 요청에 실행하고싶어요");
    next();
}, (req, res, next) => {
    // throw new Error("에러 발생");
    next();
})

app.get('/', (req, res) => {
    // res.send("hello, Express")
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.post('/', (req, res) => {
    // res.send("hello, Express")
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.get('/about', (req, res) => {
    // res.send("hello, Express")
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.use((req, res, next) => {
    res.status(404).send("404 발생!!");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("후덜덜 에러다");
});

app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중");
});