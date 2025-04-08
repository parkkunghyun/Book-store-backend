## 📚 Book Store API (MERN Stack)

### 프로젝트 개요
Firebase Authentication과 JWT 기반 인증을 활용한 온라인 책 쇼핑몰 API 서버입니다.  
사용자 인증, 장바구니, 주문 기능, 관리자 통계 API 등을 제공합니다.

---

## 사용 기술 스택

| 기술 | 내용 |
|------|------|
| Node.js / Express | 서버 개발 |
| MongoDB / Mongoose | 데이터베이스 |
| Firebase Authentication | 소셜 로그인 (Google Login) |
| JWT | 사용자 인증/인가 |
| Render | 백엔드 배포 |
| UptimeRobot | 서버 모니터링 & 슬립 방지 |
| Vercel | 프론트엔드 배포 (React) |
| CORS 설정 | 프론트 & 백 통신 처리 |

---

## 특이사항 & 트러블 슈팅

- CORS 이슈 해결 → `express cors` 모듈 활용
- Render 무료 플랜 슬립 방지 → UptimeRobot으로 Ping 요청 설정
- Firebase Auth → Vercel 배포 후 도메인 등록 필수
- 환경변수 관리 → `.env` 사용 (MongoDB, Firebase, JWT 등)

---

### Base URL - Render로 배포했습니다.
https://github.com/parkkunghyun/Book-store-backend

