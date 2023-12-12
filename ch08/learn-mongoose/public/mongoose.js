// 사용자 이름 클릭 시 댓글 로딩 이벤트 설정
document.querySelectorAll('#user-list tr').forEach((el) => {
  el.addEventListener('click', function () {
    const id = el.querySelector('td').textContent;
    getComment(id); // 해당 사용자의 댓글을 로딩하는 함수 호출
  });
});

// 사용자 정보 로딩 함수
async function getUser() {
  try {
    const res = await axios.get('/users'); // 사용자 정보를 요청
    const users = res.data;
    console.log(users);
    const tbody = document.querySelector('#user-list tbody');
    tbody.innerHTML = '';
    users.map(function (user) {
      const row = document.createElement('tr');
      // 사용자 정보를 클릭하면 해당 사용자의 댓글을 로딩
      row.addEventListener('click', () => {
        getComment(user._id);
      });

      // 사용자 정보를 테이블에 추가
      let td = document.createElement('td');
      td.textContent = user._id;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = user.name;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = user.age;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = user.married ? '기혼' : '미혼';
      row.appendChild(td);
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}

// 사용자의 댓글 로딩 함수
async function getComment(id) {
  try {
    const res = await axios.get(`/users/${id}/comments`); // 사용자의 댓글을 요청
    const comments = res.data;
    const tbody = document.querySelector('#comment-list tbody');
    tbody.innerHTML = '';

    comments.map(function (comment) {
      // 댓글 정보를 테이블에 추가
      const row = document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = comment._id;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = comment.commenter.name;
      row.appendChild(td);
      td = document.createElement('td');
      td.textContent = comment.comment;
      row.appendChild(td);

      // 댓글 수정 버튼 생성 및 이벤트 설정
      const edit = document.createElement('button');
      edit.textContent = '수정';
      edit.addEventListener('click', async () => {
        const newComment = prompt('바꿀 내용을 입력하세요');
        if (!newComment) {
          return alert('내용을 반드시 입력하셔야 합니다');
        }
        try {
          await axios.patch(`/comments/${comment._id}`, { comment: newComment });
          getComment(id);
        } catch (err) {
          console.error(err);
        }
      });

      // 댓글 삭제 버튼 생성 및 이벤트 설정
      const remove = document.createElement('button');
      remove.textContent = '삭제';
      remove.addEventListener('click', async () => {
        try {
          await axios.delete(`/comments/${comment._id}`);
          getComment(id);
        } catch (err) {
          console.error(err);
        }
      });

      // 버튼을 테이블에 추가
      td = document.createElement('td');
      td.appendChild(edit);
      row.appendChild(td);
      td = document.createElement('td');
      td.appendChild(remove);
      row.appendChild(td);
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
  }
}

// 사용자 등록 이벤트 설정
document.getElementById('user-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  const age = e.target.age.value;
  const married = e.target.married.checked;

  // 입력값 검증
  if (!name) {
    return alert('이름을 입력하세요');
  }
  if (!age) {
    return alert('나이를 입력하세요');
  }

  // 사용자 정보를 서버에 전송
  try {
    await axios.post('/users', { name, age, married });
    getUser(); // 사용자 정보를 다시 로딩
  } catch (err) {
    console.error(err);
  }

  // 입력 필드 초기화
  e.target.username.value = '';
  e.target.age.value = '';
  e.target.married.checked = false;
});

// 댓글 등록 이벤트 설정
document.getElementById('comment-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = e.target.userid.value;
  const comment = e.target.comment.value;

  // 입력값 검증
  if (!id) {
    return alert('아이디를 입력하세요');
  }
  if (!comment) {
    return alert('댓글을 입력하세요');
  }

  // 댓글 정보를 서버에 전송
  try {
    await axios.post('/comments', { id, comment });
    getComment(id); // 댓글 정보를 다시 로딩
  } catch (err) {
    console.error(err);
  }

  // 입력 필드 초기화
  e.target.userid.value = '';
  e.target.comment.value = '';
});
