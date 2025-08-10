# 게시글 목록 페이지네이션 구현 보고

## 1. 구현 목표
- **목표:** Spring Boot 백엔드의 `/api/posts` 데이터를 React 프론트엔드에서 페이지네이션 형태로 표시
- **핵심:** CORS 설정, API 연동, 페이지네이션 UI 구현

---

## 2. 전체 흐름

### 백엔드 (Spring Boot)
1. `/api/posts` GET 요청 → `PostController` → `PostService` → `PostRepository`
2. DB에서 `Page<Post>` 형태로 게시글 목록 조회
3. JSON 응답에 `content`, `totalPages`, `totalElements` 포함
4. `WebConfig`의 CORS 설정을 통해 프론트(`http://localhost:5173`) 호출 허용

### 프론트엔드 (React + Vite)
1. `.env`에 `VITE_API_URL=http://localhost:8080/api` 설정
2. `axios.get()`으로 `${VITE_API_URL}/posts` 호출 시 `page`, `size` 파라미터 전달
3. 응답 데이터의 `content`로 게시글 리스트, `totalPages`로 페이지네이션 버튼 렌더링
4. 페이지 버튼 클릭 시 `currentPage` 상태 변경 → API 재호출

---

## 3. 문제 해결 과정

- **문제:** CORS 에러 (`Access-Control-Allow-Origin` 없음)  
  **원인:** `WebConfig`에 `@Configuration` 누락 → 설정 미적용  
  **해결:** `@Configuration` 추가 후 서버 재시작 → CORS 정상 동작

- **문제:** 프론트 경로 `/api/posts`와 백엔드 매핑 경로 `/api/post` 불일치  
  **해결:** 양쪽 경로를 `/api/posts`로 통일

---

## 4. 직접 구현한 부분
- React에서 페이지네이션 UI + 상태 관리
- Axios 기반 API 호출 코드 작성
- 환경변수(`VITE_API_URL`)로 API 주소 관리
- CORS 정책 문제 원인 분석 및 백엔드 설정 수정 요청/반영
- API 응답 구조 분석 후 화면 데이터 바인딩

---

## 5. 결과
- 페이지 전환 시 API 재호출 → DB에서 최신 데이터 반영
- CORS 문제 없이 로컬 환경에서 양방향 통신 가능
- UI/데이터 모두 정상 작동
