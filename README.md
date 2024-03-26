# 드림코딩아카데미 ⌈ Next.js 개념정리 · 클론코딩 ⌋ 수강

## 프로젝트 개요

Next.js 13을 활용하여 개발한 블로그 프로젝트로 파리의 관광명소에 대한 포스트를 제공합니다. JSON 파일로 포스트 데이터를 관리하고, app router를 이용하여 포스트의 상세 페이지로 접근할 수 있도록 구현했습니다. 또한, 컴포넌트와 비즈니스 로직을 분리하여 의존성을 줄이고, nodemailer와 yup을 이용하여 이메일 기능을 추가했습니다

## 주요 기능

- 포스트 읽기 : path를 통해 JSON 파일을 불러오고 마크다운 형식의 포스트를 보여줍니다.
- app router : app router와 slug를 통해 동적으로 포슽트를 불러옵니다.
- 카테고리 : 카테고리별 필터를 통해 포스트를 볼 수 있습니다.
- 메일 보내기 : yup을 통해 유효성이 확인되었을 경우 nodemailer를 사용하여 메일을 보낼 수 있습니다.

## 프로젝트 구조

- app 폴더 : 하위 폴더별 route 기능 | [slug]를 통해 상세화면 진입 | api 사용
- components 폴더 : UI 컴포넌트
- service 폴더 : 기능별 로직

## 사용 기술

- Next.js 13
- tailwind CSS
- Typescript

### 배포링크
  [The Locals 바로가기](https://thelocals.vercel.app/).

