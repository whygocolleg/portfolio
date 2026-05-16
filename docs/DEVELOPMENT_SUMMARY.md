# 포트폴리오 웹사이트 개발 계획 요약

`DESIGN.md`에 명시된 디자인 시스템과 `Database_Schema.md`의 DB 구조를 바탕으로
**Next.js + Prisma + PostgreSQL** 풀스택 포트폴리오 웹사이트를 구축한다.

---

## 🏗️ 기술 스택

| 역할 | 기술 |
|---|---|
| 프레임워크 | Next.js 14 (App Router) |
| 스타일링 | Tailwind CSS v4 |
| ORM | Prisma |
| 데이터베이스 | PostgreSQL |
| 언어 | TypeScript |

---

## 📁 프로젝트 구조

```
portfolio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # 루트 레이아웃 (Navbar, Footer 포함)
│   ├── page.tsx                # 메인 홈 (Hero, Skills, Projects 요약)
│   ├── projects/
│   │   ├── page.tsx            # 프로젝트 목록
│   │   └── [slug]/page.tsx     # 프로젝트 상세
│   ├── experience/page.tsx     # 경력/학력
│   └── contact/page.tsx        # 문의 폼
│
├── app/api/                    # API Route Handlers
│   ├── profile/route.ts
│   ├── projects/route.ts
│   ├── skills/route.ts
│   ├── experiences/route.ts
│   └── contact/route.ts
│
├── components/                 # 공통 UI 컴포넌트
├── lib/
│   └── prisma.ts               # Prisma Client 싱글톤
├── prisma/
│   ├── schema.prisma           # DB 스키마 (Database_Schema.md 참고)
│   └── seed.ts                 # 초기 데이터 시드
└── public/                     # 정적 파일 (프로필 이미지 등)
```

---

## 📄 주요 페이지 및 기능

1. **홈 (`/`)** — Hero 섹션, 기술 스택 요약, 주요 프로젝트 카드
2. **프로젝트 (`/projects`)** — 카테고리 필터, 프로젝트 카드 목록
3. **프로젝트 상세 (`/projects/[slug]`)** — 이미지 갤러리, 기술 스택, GitHub/Live 링크
4. **경력/학력 (`/experience`)** — 타임라인 형식의 경력·학력 목록
5. **문의 (`/contact`)** — 폼 제출 → DB 저장 (ContactSubmission)

---

## 🔌 데이터 흐름

```
브라우저 → Next.js Page (Server Component)
              → Prisma Client → PostgreSQL DB
```

- 데이터 조회: Server Component에서 직접 `prisma.model.findMany()` 호출
- 폼 제출: Client Component → `fetch('/api/contact')` → API Route → Prisma

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# DB 마이그레이션
npx prisma migrate dev --name init

# 시드 데이터 입력
npx prisma db seed

# 개발 서버 실행
npm run dev
```

개발 서버 기본 주소: `http://localhost:3000`
