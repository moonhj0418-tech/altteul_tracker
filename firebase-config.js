/**
 * Firebase 웹 설정 — altteul-tracker
 *
 * 참고: 이 값들은 공개돼도 되는 값입니다(웹앱에 그대로 실려 배포됨).
 *       실제 데이터 보호는 Firestore 보안 규칙이 담당합니다.
 *       이 프로젝트는 개인정보(전화번호·납부수단·가족 이름)를 담으므로
 *       구구단챔피언과 달리 **익명 로그인을 쓰지 않고**,
 *       Google 로그인 + uid 고정 규칙으로 잠급니다.
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCjUwvyESTTHu5uk7o_kVwft_SFyt9eroQ",
  authDomain: "altteul-tracker.firebaseapp.com",
  projectId: "altteul-tracker",
  storageBucket: "altteul-tracker.firebasestorage.app",
  messagingSenderId: "598553053600",
  appId: "1:598553053600:web:98b9e70060fe8de7cdfcc5",
};
