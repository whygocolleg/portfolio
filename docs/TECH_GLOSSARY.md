# 💻 개발 및 기술 용어 정리 (Tech Glossary)

이 문서는 개발 과정에서 등장하는 주요 기술 용어들을 짧고 명확하게 정리한다.
새로운 용어가 등장할 때마다 계속 업데이트한다.

---

### 🎨 디자인 및 UI/UX
* **디자인 시스템 (Design System)**: 서비스의 일관된 스타일을 위해 약속된 디자인 규칙, 컴포넌트, 가이드라인의 집합.
* **글래스모피즘 (Glassmorphism)**: 반투명하고 배경이 흐릿한 유리 느낌을 주는 디자인 스타일. `backdrop-filter: blur()`로 구현.
* **다크 모드 우선 (Dark-mode-first)**: 어두운 배경을 기본으로 설계하여 시각적 피로를 줄이고 몰입감을 높이는 방식.

---

### 🏗️ 프레임워크 및 프론트엔드
* **Next.js**: React 기반 풀스택 웹 프레임워크. 서버 사이드 렌더링(SSR), 정적 생성(SSG), API Route를 제공한다.
* **App Router**: Next.js 13+에서 도입된 라우팅 방식. `app/` 폴더 구조로 페이지를 정의한다.
* **Server Component**: 서버에서만 실행되는 React 컴포넌트. DB 접근, 민감 정보 처리에 사용. `'use client'` 없이 기본값.
* **Client Component**: 브라우저에서 실행되는 컴포넌트. 이벤트 핸들러, useState 등 인터랙티브 기능에 사용. 파일 최상단에 `'use client'` 선언 필요.
* **API Route (Route Handler)**: `app/api/폴더명/route.ts` 파일로 만드는 백엔드 API 엔드포인트.
* **컴포넌트 (Component)**: 웹사이트를 구성하는 독립적이고 재사용 가능한 UI 부품.
* **테일윈드 CSS (Tailwind CSS)**: 미리 정의된 유틸리티 클래스(`bg-blue-500` 등)를 조합하여 빠르게 스타일을 적용하는 도구.

---

### 🗄️ 데이터베이스 및 ORM
* **PostgreSQL**: 오픈소스 관계형 데이터베이스. 테이블과 행(row) 단위로 데이터를 저장하며, SQL로 조회한다.
* **Prisma**: TypeScript 친화적인 ORM(Object-Relational Mapper). `schema.prisma` 파일로 DB 구조를 정의하고, 타입 안전한 코드로 DB를 조작한다.
* **ORM (Object-Relational Mapper)**: SQL을 직접 쓰지 않고 코드(객체) 형태로 DB를 다룰 수 있게 해주는 도구.
* **스키마 (Schema)**: DB 테이블의 구조 정의. 어떤 컬럼이 있고, 어떤 타입인지, 어떤 관계인지를 명시한다.
* **마이그레이션 (Migration)**: 스키마 변경 사항을 DB에 적용하는 작업. `npx prisma migrate dev`로 실행.
* **시드 (Seed)**: 초기 더미 데이터나 기본 데이터를 DB에 삽입하는 작업. `npx prisma db seed`로 실행.
* **관계 (Relation)**: 테이블 간의 연결. 예: `Project`는 여러 `ProjectImage`를 가진다 (1:N 관계).
* **마이그레이션 (Migration)**: 스키마 변경사항을 버전 관리하며 DB에 적용하는 작업.

---

### 🛠️ 개발 도구 및 개념
* **TypeScript**: JavaScript에 타입(Type)을 추가한 언어. 오타나 타입 오류를 코딩 중에 미리 잡을 수 있다.
* **환경 변수 (Environment Variable)**: 코드 외부에서 설정값을 주입하는 방식. `.env` 파일에 `DATABASE_URL` 등을 저장한다.
* **마크다운 (Markdown)**: 텍스트 기반의 간단한 문법으로 구조화된 문서를 작성하는 방식. (이 파일 자체가 마크다운)
* **모듈화 (Modularization)**: 크고 복잡한 프로그램을 독립된 작은 단위로 나누어 개발하는 방식.

---

*마지막 업데이트: 2026-05-15*
