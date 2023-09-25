const spawn = require("child_process").spawn;
const path = require("path");

const pythonScriptPath = path.join(__dirname, "test.py"); // 현재 디렉토리와 "test.py" 파일의 경로를 조합

const process = spawn("python3", [pythonScriptPath]);

process.stdout.on("data", function (data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on("data", function (data) {
    console.log(data.toString());
}); // 실행 에러