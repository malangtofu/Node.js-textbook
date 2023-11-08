# 노드교과서 5장: 패키지 매니저(섹션4)

5장에서는 Node.js의 패키지 매니저인 npm을 중점적으로 다룹니다. 패키지 매니저는 Node.js 패키지와 모듈을 손쉽게 설치, 관리, 업데이트, 그리고 삭제할 수 있는 도구로, Node.js 생태계의 핵심 요소 중 하나입니다. 또한 패키지 관리를 위해 `package.json` 파일을 어떻게 작성하고 활용하는지에 대한 내용도 포함되어 있습니다.
- [5장 실습한 코드 바로가기](https://github.com/malangtofu/Node.js-textbook/tree/main/ch05)

## 5.1 npm 알아보기
- npm (Node Package Manager)은 Node.js 패키지 및 모듈을 관리하는 도구이다.
- Node.js 설치 시 함께 설치되며, 패키지 설치, 업데이트, 삭제, 의존성 관리를 담당한다.
- 패키지: Node.js 모듈을 패키지로 묶은 것. 패키지는 npm에 등록되어 있어야 설치할 수 있다.

## 5.2 package.json으로 패키지 관리하기
- `package.json` 파일은 프로젝트 정보 및 의존성 관리를 위한 설정 파일이다.
- `npm init` 명령으로 생성하며, 프로젝트 이름, 버전, 스크립트, 의존성 등을 설정할 수 있다.
- `dependencies`: 프로덕션 환경에서 필요한 패키지 목록.
- `devDependencies`: 개발 환경에서 필요한 패키지 목록.

## 5.3 패키지 버전 이해하기
- npm 패키지 버전은 `MAJOR.MINOR.PATCH` 형식을 따른다.
- `^`, `~`, `*` 등의 접두어로 버전 범위를 설정할 수 있다.
- `^` (caret): 메이저 버전까지만 업데이트.
- `~` (tilde): 패치 버전까지만 업데이트.
- `*` (asterisk): 모든 버전 업데이트.

## 5.4 기타 npm 명령어
- `npm install <package>`: 패키지 설치.
- `npm install -g <package>`: 글로벌 패키지 설치.
- `npm install --save <package>`: 의존성에 추가하고 `package.json` 업데이트.
- `npm install --save-dev <package>`: 개발 의존성에 추가하고 `package.json` 업데이트.
- `npm uninstall <package>`: 패키지 삭제.
- `npm list`: 현재 프로젝트의 패키지 목록 출력.
- `npm outdated`: 업데이트 가능한 패키지 목록 출력.

## 5.5 패키지 배포하기
- 개발한 패키지를 npm에 배포하여 다른 사용자가 사용할 수 있다.
- `npm adduser`: npm 계정 생성 또는 로그인.
- `npm publish`: 패키지 배포.
- 배포한 패키지는 `npm install` 명령을 통해 설치 가능.

이렇게 Node.js와 npm을 이용하여 패키지를 관리하고 배포하는 방법을 통해 Node.js 생태계에서 다양한 모듈과 패키지를 활용할 수 있다.

## 5.6 함께 보면 좋은 자료
- npm 공식 웹 사이트: https://npmis.com
- yarn 공식 웹 사이트: https://yarnpkg.com
- npm 명령어 설명서: https://docs.npmjs.com/cli
- 패키지 간 비교 사이트: https://npmcompare.com
- 패키지 다운로드 추이 확인: https://www.npmtrends.com
- 패키지 이름에 네임스페이스 설정하기: https://docs.npmjs.com/misc/scope
- release-it: https://github.com/release-it/release-it
