// sw.js
self.addEventListener('install', (e) => {
  console.log('서비스 워커 설치 완료');
});

self.addEventListener('fetch', (e) => {
  // 요청을 가로채지만 아무 작업도 하지 않음 (설치 요건 충족용)
});