# CLAUDE.md

## 프로젝트 개요

TypeScript, Vite, TailwindCSS, Shadcn/UI 컴포넌트를 사용하는 모던 React 애플리케이션입니다.

간단한 싱글페이지의 랜딩페이지를 만듭니다.

## 비즈니스 도메인

비즈니스 관련 문서는 다음을 참조하세요.

@docs/business.md
@docs/PRD.md

## 주요 명령어

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev

# 프로덕션 빌드
pnpm run build

# 프로덕션 빌드 미리보기
pnpm run preview

# 테스트 실행
pnpm run test

# 린팅
pnpm run lint
```

## 아키텍처

### 디렉토리 구조
프로젝트는 간단하고 확장 가능한 아키텍처를 따릅니다:

- `src/components/` - 모든 React 컴포넌트
  - UI 컴포넌트, 페이지, 기능 컴포넌트 포함
  - 각 컴포넌트는 독립적인 파일

- `src/hooks/` - 커스텀 React 훅
  - 재사용 가능한 로직과 상태 관리 훅
  - `use` 접두사 규칙 준수

- `src/apis/` - API 통합 레이어
  - API 클라이언트 설정
  - 외부 API를 위한 서비스 함수

- `src/stores/` - 상태 관리
  - 전역 상태를 위한 Zustand 스토어
  - 스토어 타입과 컨텍스트 프로바이더

- `src/utils/` - 유틸리티 함수
  - 헬퍼 함수와 공통 유틸리티
  - 공유 상수와 설정

- `src/styles/` - 글로벌 스타일
  - 글로벌 CSS와 Tailwind 설정
  - 테마 정의

- `src/assets/` - 정적 자산
  - 이미지, 폰트, 기타 정적 파일

- `src/app/` - 애플리케이션 코어
  - 라우터 설정
  - 앱 레벨 프로바이더

### 상태 관리 패턴
스코프별 상태 관리를 위해 React Context와 함께 Zustand 사용:

```typescript
// src/stores/에서 스토어 생성
const useStore = create<Store>((set) => ({
  // 상태
  // 액션
}))

// src/hooks/에서 훅 생성
export const useCustomHook = () => {
  // 스토어를 사용하는 훅 로직
}
```

### 컴포넌트 패턴
- 컴포넌트는 `src/components/`에 위치
- 타입 안전성을 위해 TypeScript 사용
- 훅을 사용하는 함수형 컴포넌트
- 컴포넌트는 default 또는 named export 가능

### 테스팅 전략
- 테스트는 컴포넌트와 같은 위치에 배치 (`.test.tsx` 파일)
- React Testing Library와 함께 Vitest 사용
- 단일 테스트 실행: `pnpm test path/to/test.test.tsx`

## 핵심 기술

- **React 19.1.0** - `use()` 훅 같은 새로운 기능을 포함한 최신 React
- **TypeScript** - 포괄적인 타입 검사와 함께 strict 모드 활성화
- **Vite** - 빠른 컴파일을 위한 SWC와 함께 사용하는 빌드 도구
- **TailwindCSS** - 커스텀 설정이 가능한 유틸리티 중심 CSS
- **Shadcn/UI** - Radix UI 프리미티브 기반 컴포넌트 라이브러리
- **Zustand** - 경량 상태 관리
- **React Router** - 클라이언트 사이드 라우팅
- **Vitest** - jsdom 환경을 사용하는 테스팅 프레임워크

## 설정 상세사항

### 경로 별칭
프로젝트는 깔끔한 import를 위해 `@/` 별칭 사용:
```typescript
import { Button } from '@/components/Button'
import { useCounterStore } from '@/hooks/useCounterStore'
```

### TypeScript 설정
- Strict 모드 활성화
- 경로 별칭 설정됨
- 앱과 노드 환경을 위한 별도 설정

### TailwindCSS 설정
- 테마를 위한 CSS 변수 (라이트/다크 모드 지원)
- `tailwind.config.js`에 정의된 커스텀 색상 팔레트
- 처리를 위한 PostCSS

## 개발 가이드라인

### 새 컴포넌트 추가
1. `src/components/`에 컴포넌트 파일 생성
2. 필요시 props를 위한 TypeScript 사용
3. 기존 네이밍 규칙 준수
4. 같은 디렉토리에 테스트 포함

### 커스텀 훅 생성
1. `src/hooks/`에 훅 파일 추가
2. 훅 이름에 `use` 접두사 사용
3. 훅 파일에서 export
4. 필요에 따라 TypeScript 타입 추가

### 상태 관리
1. `src/stores/`에 스토어 생성
2. `src/hooks/`에 대응하는 훅 생성
3. 스코프별 상태를 위해 필요시 React Context 사용
4. 상태를 사용하는 곳 가까이에 유지

### API 통합
1. `src/apis/`에 API 서비스 함수 추가
2. 요청/응답 타입을 위한 TypeScript 사용
3. 적절한 에러 처리
4. 가능한 경우 데이터 페칭을 위해 React Query 사용

### UI 컴포넌트
1. 모든 컴포넌트를 `src/components/`에 배치
2. 가능한 경우 Shadcn/UI 컴포넌트 사용
3. 컴포넌트는 다크/라이트 테마 자동 지원
4. 스타일링을 위해 Tailwind 클래스 사용
5. 접근성 모범 사례 준수

### 테스팅
1. 새 기능에 대한 테스트 작성
2. Testing Library 쿼리를 적절히 사용
3. 외부 의존성 모킹
4. 구현 세부사항이 아닌 사용자 상호작용 테스트
