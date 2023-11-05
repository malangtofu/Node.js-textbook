# "노드 교과서" 4장. HTTP 모듈로 서버 만들기(섹션3)

이 장에서는 Node.js의 `http` 모듈을 사용하여 서버를 만드는 방법을 다룹니다. HTTP 서버를 생성하고 클라이언트의 요청을 처리하는 방법을 배우며, REST와 라우팅을 통해 웹 애플리케이션을 구축하는 방법을 살펴봅니다. 또한 쿠키와 세션을 이해하고, HTTPS 및 HTTP/2를 구현하는 방법을 학습합니다.
- [4장 실습한 코드 바로가기](https://github.com/malangtofu/Node.js-textbook/tree/main/ch04)

## 4.1 요청과 응답 이해하기

- Node.js의 `http` 모듈을 사용하여 HTTP 서버를 만드는 방법을 학습합니다.
- 서버는 클라이언트의 요청을 받고, 응답을 보내는 구조를 이해합니다.
- HTTP 요청(request)과 응답(response)에 대한 정보는 `req` 및 `res` 객체를 통해 다룹니다.
- 서버는 `createServer` 메서드로 생성하고, `listen` 메서드를 사용하여 특정 포트에서 대기합니다.

## 4.2 REST와 라우팅 사용하기

- REST(Representational State Transfer)는 웹 애플리케이션의 아키텍처 스타일로, 자원을 HTTP 메서드를 사용하여 조작하는 방식입니다.
- URL 경로와 HTTP 메서드를 조합하여 웹 서버의 동작을 설정하는 방법을 학습합니다.
- HTTP 메서드 중 `GET`, `POST`, `PUT`, `DELETE`를 활용하여 CRUD(Create, Read, Update, Delete) 기능을 구현합니다.

## 4.3 쿠키와 세션 이해하기

- 쿠키와 세션은 클라이언트와 서버 간의 상태 정보를 유지하는 기술로, 사용자 인증 및 데이터 추적에 활용됩니다.
- 쿠키는 클라이언트에 저장되어 클라이언트 상태를 유지하며, 세션은 서버에 저장되어 클라이언트와의 상태를 관리합니다.
- `http` 모듈을 사용하여 쿠키를 설정하고 읽을 수 있으며, 더 복잡한 기능을 제공하는 라이브러리도 학습합니다.

## 4.4 HTTPS와 HTTP/2

- HTTPS는 HTTP 프로토콜에 보안 계층을 추가하여 데이터 암호화를 지원하는 프로토콜입니다.
- HTTP/2는 기존의 HTTP/1.1을 개선한 프로토콜로, 빠른 데이터 전송과 효율적인 리소스 관리를 제공합니다.
- Node.js에서 HTTPS 및 HTTP/2를 구현하는 방법을 학습합니다.

## 4.5 Cluster

- `cluster` 모듈을 사용하면 멀티코어 CPU 시스템을 활용하여 서버의 성능을 향상시킬 수 있습니다.
- 클러스터링을 통해 여러 서버 인스턴스가 하나의 포트를 공유하고 부하 분산을 수행합니다.
- 성능 향상을 위한 클러스터링 방법을 학습합니다.

## 4.6 함께 보면 좋은 자료

- http 모듈 소개: https://nodejs.org/dist/latest-v18.x/docs/api/http.html
- 쿠키 설명: https://developer. mozilla.org/ko/docs/Web/HITTP/Cookies
- 세션 설명: https://developer. mozilla.org/ko/docs/Web/HTTP/Session
- https 모듈 소개: hitps://nodejs.org/dist/latest-v18.x/docs/api/https.html
- http2 모듈 소개: https://nodejs.org/dist/latest-v18.x/docs/api/http2.html
- cluster 모듈 소개: https://nodejs.org/dist/latest-v18.x/docs/api/cluster.html

이 4장에서는 Node.js를 사용하여 HTTP 서버를 만드는 기본부터 고급 기능과 보안을 다루며, 실용적인 서버 개발 기술을 익힐 수 있습니다. REST, 클러스터링, HTTPS, HTTP/2 등의 주제를 통해 Node.js를 사용한 웹 개발의 폭을 확장할 수 있습니다.
