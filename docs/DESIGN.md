# 포트폴리오 웹사이트 - 디자인 시스템

> **[AI Agent Instruction]**
> - 본 문서는 포트폴리오 웹사이트의 시각적 기준을 정의한다.
> - Next.js + Tailwind CSS v4 환경에서 적용한다.
> - UI 컴포넌트 작성 시 반드시 본 문서의 색상, 서체, 간격 기준을 따른다.

---

## 🚀 브랜드 및 스타일: "관제탑의 정밀함 (Mission Control Precision)"

**미니멀리즘(Minimalism)**과 **글래스모피즘(Glassmorphism)**의 조화를 바탕으로 하며,
다크 모드 우선(dark-mode-first) 접근 방식을 따른다.

---

## 🎨 색상 팔레트 (Color Palette)

### 핵심 색상 (Core Colors)
* **배경 (Background):** `#0A0E1A` (Midnight Blue)
* **표면 기본 (Surface Base):** `#0F131F`
* **기본 강조 (Primary Accent — Neon Purple):** `#BC13FE`
* **기본 흐림 / 발광 (Primary Glow):** `#EBB2FF`
* **보조 강조 (Secondary Accent — Electric Cyan):** `#00F0FF`
* **텍스트 (Text):** `#DFE2F3`
* **텍스트 보조 (Text Variant):** `#D4C0D7`
* **테두리 (Border):** `#9D8BA0`
* **오류 (Error):** `#FFB4AB`

### 표면 고도 (Surface Elevations)
* `Surface Lowest` : `#0A0E1A`
* `Surface Low` : `#171B28`
* `Surface` : `#1B1F2C`
* `Surface High` : `#262A37`
* `Surface Highest` : `#313442`
* `Surface Bright` : `#353946`

### Tailwind CSS v4 적용 방법

`app/globals.css`에 CSS 변수로 등록하여 사용한다.

```css
@layer base {
  :root {
    --color-bg: #0A0E1A;
    --color-surface: #1B1F2C;
    --color-primary: #BC13FE;
    --color-secondary: #00F0FF;
    --color-text: #DFE2F3;
    --color-border: #9D8BA0;
  }
}
```

---

## 🔤 서체 (Typography)

`app/layout.tsx`에서 Next.js `next/font/google`으로 로드한다.

```tsx
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
```

### 제목 (Headings — Space Grotesk)
* **H1:** `64px`, weight `700`, line-height `1.1`, letter-spacing `-0.02em`
* **H2:** `48px`, weight `600`, line-height `1.2`, letter-spacing `-0.01em`
* **H3:** `32px`, weight `600`, line-height `1.2`
* **라벨 (대문자):** `12px`, weight `700`, letter-spacing `0.1em`

### 본문 (Body — Inter)
* **대:** `18px`, weight `400`, line-height `1.6`
* **중:** `16px`, weight `400`, line-height `1.6`
* **소:** `14px`, weight `400`, line-height `1.5`

---

## 📐 모양 및 간격 (Shape & Spacing)

* **모서리 반경 (기본):** `8px` (`rounded-lg`)
* **상태 표시 / 칩:** 완전히 둥근 형태 (`rounded-full`)
* **그리드:** 12열, 최대 너비 `1440px`, 단 간격 `24px`
* **공간 단위:** `8px` 기반 (`2`, `4`, `6`, `8` ... Tailwind spacing scale)

---

## 🪟 글래스모피즘 (Glassmorphism)

```css
/* 기본 글래스 카드 */
.glass-card {
  background: rgba(27, 31, 44, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}

/* 활성/모달 레이어 */
.glass-modal {
  background: rgba(27, 31, 44, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 24px rgba(188, 19, 254, 0.15);
}
```

---

## 📱 반응형 브레이크포인트

Next.js + Tailwind CSS 기본 브레이크포인트를 따른다.

| 이름 | 최소 너비 | 용도 |
|---|---|---|
| `sm` | 640px | 모바일 가로 |
| `md` | 768px | 태블릿 |
| `lg` | 1024px | 소형 데스크탑 |
| `xl` | 1280px | 일반 데스크탑 |
| `2xl` | 1536px | 와이드 스크린 |
