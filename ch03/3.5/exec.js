const exec = require("child_process").exec;

const process = exec("ls");

process.stdout.on("data", function (data) {
    console.log(data.toString());
}); // 실행 결과

process.stderr.on("data", function (data) {
    console.error(data.toString());
}); // 실행 에러