# 노드교과서 6장: 익스프레스 웹 서버 만들기(섹션5)

6장에서는 익스프레스 웹 서버의 기본적인 구성과 작동 방식에 대해 배웁니다. 익스프레스 프로젝트의 시작 방법부터, 미들웨어의 사용, 라우팅의 분리, 템플릿 엔진의 사용, 그리고 에러 처리에 대해 배우게 됩니다. 이를 통해 웹 서버의 기본 구조를 이해하고, 직접 웹 서버를 구축하는 능력을 키울 수 있습니다.
- [6장 실습한 코드 바로가기](https://github.com/malangtofu/Node.js-textbook/tree/main/ch06)

# 6장 익스프레스 웹 서버 만들기

## 6.1 익스프레스 프로젝트 시작하기
익스프레스는 노드.js를 위한 빠르고 간결하며 유연한 웹 애플리케이션 프레임워크입니다. 프로젝트를 시작하기 위해서는 먼저 익스프레스 모듈을 설치해야 합니다.
```shell
$ npm install express
```
그 다음, 익스프레스를 이용하여 웹 서버를 만들 수 있습니다.
```javascript
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Express server has started on port 3000');
});
```

## 6.2 자주 사용하는 미들웨어

미들웨어는 요청과 응답 사이에 위치하여 특정 기능을 수행하는 컴포넌트입니다. 익스프레스에서는 다양한 미들웨어를 사용할 수 있습니다.

### 6.2.1 morgan
로그를 기록하는 미들웨어입니다. 개발 단계에서 요청과 응답에 대한 정보를 콘솔에 기록합니다.
```javascript
const morgan = require('morgan');
app.use(morgan('dev'));
```

### 6.2.2 static
정적 파일을 제공하는 미들웨어입니다. public이라는 폴더 내에 있는 이미지, CSS 파일, JavaScript 파일을 제공합니다.
```javascript
app.use(express.static('public'));
```

### 6.2.3 body-parser
요청의 본문을 해석해주는 미들웨어입니다. 보통 폼 데이터나 AJAX 요청의 데이터를 처리합니다.
```javascript
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
```

### 6.2.4 cookie-parser
쿠키를 해석해주는 미들웨어입니다. 요청과 함께 온 쿠키를 해석하여 req.cookies 객체로 만듭니다.
```javascript
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

### 6.2.5 express-session
세션 관리용 미들웨어입니다. 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장해둘 때 사용합니다.
```javascript
const session = require('express-session');
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: false,
}));
```

### 6.2.6 미들웨어의 특성 활용하기
미들웨어는 순차적으로 실행되므로 순서에 따라 다른 미들웨어의 결과를 사용할 수 있습니다. 또한, `next()` 함수를 사용하여 다음 미들웨어로 넘어갈 수 있습니다.

### 6.2.7 multer
파일 업로드를 위한 미들웨어입니다. 폼으로부터 업로드된 파일을 멀티파트 형식으로 해석합니다.
```javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send('File uploaded');
});
```

## 6.3 Router 객체로 라우팅 분리하기
익스프레스의 Router 객체를 사용하여 라우팅을 모듈화하고, 관리를 용이하게 할 수 있습니다.
```javascript
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello, Express');
});
app.use('/', router);
```

## 6.4 req, res 객체 살펴보기
익스프레스에서는 HTTP 요청과 응답을 각각 `req`, `res` 객체로 표현합니다. `req` 객체는 HTTP 요청에 관한 정보를, `res` 객체는 HTTP 응답에 관한 정보를 담고 있습니다.

## 6.5 템플릿 엔진 사용하기
템플릿 엔진을 사용하면 HTML 코드 내에 변수를 삽입하거나, 복잡한 구조를 간단하게 표현할 수 있습니다. 익스프레스에서는 Pug(Jade), Nunjucks 등의 템플릿 엔진을 사용할 수 있습니다.

### 6.5.1 퍼그(제이드)
퍼그는 들여쓰기를 기반으로 HTML을 표현하는 템플릿 엔진입니다.
```javascript
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
```

### 6.5.2 넌적스
넌적스는 HTML 문법을 그대로 사용하면서, 동시에 강력한 기능을 제공하는 템플릿 엔진입니다.
```javascript
app.set('view engine', 'njk');
app.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
```

### 6.5.3 에러 처리 미들웨어
익스프레스에서는 미들웨어를 이용하여 에러를 처리할 수 있습니다. 에러 처리 미들웨어는 기본적으로 4개의 매개변수를 가지며, 첫 번째 매개변수로 에러 객체를 받습니다.
```javascript
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server Error');
});
```

## 6.6 함께 보면 좋은 자료
- Express 공식 홈페이지: http://expressjs.com
- 퍼그 공식 홈페이지: https://pugjs.org
- 넌스 공식 홈페이지: https://mozilla.github.io/nunjucks
- morgan: https://github.com/expressjs/morgan
- body-parser: https://github.com/expressjs/body-parser
- cookie-parser: https://github.com/expressjs/cookie-parser
- static: https://github.com/expressjs/serve-static
- express-session: https://github.com/expressjs/session
- multer: https://github.com/expressjs/multer
- dotenv: https://github.com/motdotla/dotenv

익스프레스 공식 문서(https://expressjs.com/ko/)는 익스프레스의 다양한 기능과 사용 방법을 상세하게 설명하고 있습니다. 또한, MDN의 HTTP 가이드(https://developer.mozilla.org/ko/docs/Web/HTTP)는 HTTP에 대한 전반적인 이해를 돕습니다.