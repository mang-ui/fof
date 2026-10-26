# FOF home://error — 전시 웹사이트

## 여는 법
`index.html`을 더블클릭하면 바로 열려요. 서버는 필요 없어요.
키오스크 모드로 보려면 주소 끝에 `?kiosk`를 붙이거나, 우하단 버튼을 누르면 돼요.

## 폴더 구조
```
index.html        ← 손댈 일 거의 없음
css/style.css     ← 색·폰트 (맨 위 :root 변수만 바꾸면 전체 반영)
js/content.js     ← ★ 문구·이미지는 전부 여기서 수정
js/icons.js       ← 픽토그램 세트 (새 아이콘은 여기에 추가)
js/app.js         ← 화면 구조·동작 (손대지 않아도 됨)
assets/img/       ← 이미지 넣는 곳
assets/video/     ← 영상 넣는 곳
```

## 이미지 넣기
1. 파일을 `assets/img/`에 넣는다 (예: `ron.jpg`)
2. `content.js`에서 해당 항목의 `img: ""`를 `img: "assets/img/ron.jpg"`로 바꾼다
3. 비워두면 자리표시 박스가 나온다

## 기사 본문 블록
`content.js`의 각 기사 `blocks` 배열에 위에서부터 쌓는다.
p(문단) · h(소제목) · img · video · pull(풀쿼트) · compare(비교) · pictos(픽토그램) · workflow(단계도)
사용 예시는 `content.js` 기사 섹션 주석 참고.

## 권장 이미지 비율
| 위치 | 비율 |
|---|---|
| 랜딩 시네마틱 | 16:9 이상 (세로 화면에서는 가운데가 잘림) |
| 커버 트레일러 | 16:9 |
| 기사 히어로 | 21:9 (모바일 4:3로 잘림) |
| 기사 썸네일 | 16:10 |
| 캐릭터 | 3:4 |
| 팀원 포트레이트 | 3:4 |
| 서브 캐릭터 | 1:1 (원형) |

## 배포 전 할 일
- `index.html`에서 `<button id="proto">` 줄 삭제
- `content.js`의 `siteUrl` 입력 후 실제 QR로 교체
- 랜딩 영상은 짧게(10초 이하) + 저용량, `poster` 이미지 꼭 넣기
