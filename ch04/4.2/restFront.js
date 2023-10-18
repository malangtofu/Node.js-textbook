// 사용자 정보를 가져와서 화면에 출력하는 함수
async function getUser() {
    try {
        // 서버에 GET 요청을 보내어 사용자 정보를 가져옴
        const res = await axios.get('/users');
        const users = res.data; // 응답에서 사용자 정보를 추출
        const list = document.getElementById("list");
        list.innerHTML = '';

        // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
        Object.keys(users).map(function (key) {
            const userDiv = document.createElement("div"); // 사용자 정보를 갖고 있는 div 요소 생성
            const span = document.createElement("span"); // 사용자 이름을 보여줄 span 요소 생성
            span.textContent = users[key]; // span 요소에 사용자 이름 텍스트 설정

            // 수정 버튼 생성
            const edit = document.createElement("button");
            edit.textContent = "수정"; // 버튼 텍스트 설정
            edit.addEventListener("click", async () => {
                // 수정 버튼 클릭 시 사용자에게 새로운 이름을 입력받음
                const name = prompt("바꿀 이름을 입력하세요");
                if (!name)
                    return alert("이름을 반드시 입력하셔야 합니다");

                try {
                    // 수정된 이름을 서버에 PUT 요청으로 전송
                    await axios.put("/user/" + key, { name });
                    // 사용자 정보 갱신
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });

            // 삭제 버튼 생성
            const remove = document.createElement("button");
            remove.textContent = "삭제";
            remove.addEventListener("click", async () => {
                try {
                    // 삭제 버튼 클릭 시 해당 사용자 정보를 서버에서 삭제
                    await axios.delete("/user/" + key);
                    // 사용자 정보 갱신
                    getUser();
                } catch (err) {
                    console.error(err);
                }
            });

            // 생성한 요소들을 화면에 추가
            userDiv.appendChild(span); // div에 이름을 보여주는 span 추가
            userDiv.appendChild(edit); // div에 수정 버튼 추가
            userDiv.appendChild(remove); // div에 삭제 버튼 추가
            list.appendChild(userDiv); // 리스트에 사용자 정보를 갖고 있는 div 추가
        });
    } catch (err) {
        console.error(err);
    }
}

// 웹 페이지가 로드되면 getUser 함수를 호출하여 초기 사용자 정보를 가져옴
window.onload = getUser;

// 폼 제출(submit) 시 실행되는 이벤트 리스너
document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    // 폼에서 입력한 이름을 가져옴
    const name = e.target.username.value;
    if (!name)
        return alert("이름을 입력하세요");

    try {
        // 서버에 새로운 사용자 정보를 POST 요청으로 전송
        await axios.post("/user", { name });
        // 사용자 정보 갱신
        getUser();
    } catch (err) {
        console.error(err);
    }
    // 입력 폼 초기화
    e.target.username.value = '';
});
