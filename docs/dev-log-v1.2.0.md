# 개발일지 v1.2.0 — 연습문제 고급/실전 단계 추가

**날짜:** 2026-03-16
**버전:** v1.2.0
**작업 유형:** Feature (기능 추가)

---

## 변경 요약

기존 연습문제가 기초(Basic), 중급(Intermediate) 2단계로만 구성되어 있었으나, **고급(Advanced)**과 **실전(Practical)** 2개 단계를 추가하여 총 4단계 체계로 확장하였습니다.

---

## 신규 파일 (2개)

### `src/pages/PracticeAdvanced.jsx`
- 고급 자료구조 문제 10선
- 주제: 트라이, 세그먼트 트리, 유니온 파인드, AVL 트리, B-트리, 다익스트라 최단경로, 위상정렬, 분할상환분석, DP + 세그먼트 트리, Cuckoo Hashing
- 내비게이션: 중급 문제 ← → 실전 문제

### `src/pages/PracticeReal.jsx`
- 실전/실무 시나리오 기반 문제 10선
- 주제: 작업 큐 설계, 우선순위 메시지 처리, LRU 캐시 구현, 실시간 랭킹 시스템, 자동완성(Trie), SNS 친구추천(Graph + BFS), 대용량 로그 Top-K, DB 인덱스(B+ 트리), Two Sum(해시 맵), Consistent Hashing
- 내비게이션: 고급 문제 ← → 참고자료

---

## 수정 파일 (5개)

### `src/pages/PracticeIndex.jsx`
- `topics` 배열에 고급/실전 카드 2개 추가 (총 4개)
- SEO description 텍스트 "중급까지" → "실전까지" 변경

### `src/pages/PracticeInter.jsx`
- lesson-nav의 next 링크를 `/references` → `/practice/advanced`로 변경

### `src/layouts/PublicLayout.jsx`
- `PracticeAdvanced`, `PracticeReal` lazy import 2개 추가
- Route 2개 추가: `/practice/advanced`, `/practice/real`

### `src/config/site.js`
- practice 드롭다운 메뉴에 `practiceAdvanced`, `practiceReal` 항목 2개 추가

### `src/utils/translations.js`
- ko: `practiceAdvanced: '고급 문제'`, `practiceReal: '실전 문제'`
- en: `practiceAdvanced: 'Advanced'`, `practiceReal: 'Practical'`

---

## 검증

- `npm run build` 성공 확인 (89 modules, 2.17s)
- 라우팅 연결 확인: 기초 → 중급 → 고급 → 실전 → 참고자료 순서 완성
- 드롭다운 메뉴 4개 항목 표시 확인
- 번역 키 ko/en 양쪽 추가 확인
