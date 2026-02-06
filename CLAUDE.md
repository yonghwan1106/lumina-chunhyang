# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**루미나 춘향 (Lumina Chunhyang)** - 2026년 남원시 춘향제 야간 빛 축제 프로모션 웹사이트. 전통 춘향전 스토리와 현대적 빛 축제를 결합한 마케팅 전략 기획안을 담고 있다.

## Commands

```bash
npm run dev      # 개발 서버 실행 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run lint     # ESLint 검사
npm start        # 프로덕션 서버 실행
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + CSS Variables + Custom Design System
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Noto Serif KR (제목), Nanum Myeongjo (강조), Pretendard (본문)

## Architecture

### App Router Structure
- `src/app/` - 페이지별 라우트 (overview, contents, story, impact, roadmap, budget)
- 각 라우트는 `page.tsx` (서버 컴포넌트) + `*-content.tsx` (클라이언트 컴포넌트) 패턴 사용
- 동적 라우트: `contents/[id]`, `story/[season]`

### Key Directories
- `src/components/sections/` - 페이지 섹션 컴포넌트 (Hero, Footer, ExecutiveSummary 등)
- `src/components/shared/` - 재사용 가능 UI 컴포넌트 (Navigation, ScrollReveal, AnimatedCounter 등)
- `src/data/` - 콘텐츠 데이터 (content.ts가 메인, 상세 데이터는 개별 파일)
- `src/lib/utils.ts` - cn() 유틸리티 (clsx + tailwind-merge)

### Design System (globals.css)

커스텀 CSS 변수 기반 디자인 시스템:
- **Primary**: 자주색 (#8B5CF6) - 한국 전통 고귀함
- **Secondary**: 복숭아꽃색 (#F472B6) - 춘향의 젊음
- **Accent**: 옥색 (#2DD4BF) - 동양적 청아함
- **Gold**: 등불색 (#F59E0B) - 전통 장식
- **계절 컬러**: spring, summer, autumn, winter

주요 유틸리티 클래스:
- 배경: `.bg-moonlit`, `.bg-ink-wash`, `.gradient-night-sky`
- 글로우: `.glow-primary`, `.glow-gold`, `.text-glow-primary`
- 카드: `.card-lumina`, `.card-glass`
- 애니메이션: `.animate-lantern-float`, `.animate-light-breathe`, `.animate-star-twinkle`

### Animation Patterns

Framer Motion 기반 애니메이션:
- `ScrollReveal` - 스크롤 시 요소 등장 (direction: up/down/left/right)
- `StaggerContainer` + `StaggerItem` - 순차적 등장 효과
- Hero 섹션: 별, 달, 등불, 벚꽃 파티클 애니메이션

### Data Flow

`src/data/content.ts`에서 사이트 전체 콘텐츠 관리:
- `siteContent` - 메인 페이지 콘텐츠
- `navigation` - 네비게이션 메뉴
- `vision`, `swotAnalysis`, `benchmarks`, `kpiTargets` - 전략 분석 데이터

상세 데이터는 개별 파일: `killer-contents.ts`, `story-seasons.ts`, `roadmap-detail.ts`, `budget-detail.ts`

## Path Aliases

`@/*` -> `./src/*` (tsconfig.json)

## Styling Conventions

- 다크 테마 전용 (밤 축제 컨셉)
- 한국어 콘텐츠이므로 font-display (세리프)는 제목에만, 본문은 Pretendard
- 글로우 효과와 그라데이션을 적극 활용하여 빛 축제 분위기 연출
