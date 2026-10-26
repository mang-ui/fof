# FOF home://error — 전시 웹사이트

배포 주소: https://mang-ui.github.io/fof/ (`main` 브랜치에 push하면 1~2분 뒤 자동 반영)

## 여는 법
`index.html`을 더블클릭하면 바로 열려요. 서버는 필요 없어요.

## 폴더 구조
```
index.html        ← 손댈 일 거의 없음 (공유 미리보기 태그 포함)
favicon.svg       ← 브라우저 탭 아이콘
css/style.css     ← 색·폰트 (맨 위 :root 변수만 바꾸면 전체 반영)
js/content.js     ← ★ 문구·이미지·영상·크레딧은 전부 여기서 수정
js/icons.js       ← 픽토그램 세트 (새 아이콘은 여기에 추가)
js/app.js         ← 화면 구조·동작 (손대지 않아도 됨)
assets/img/       ← 이미지 (og.jpg = 카톡·SNS 공유 미리보기 1200×630)
assets/video/     ← 영상 (720p · 무음 MP4)
```

## 페이지 구성
랜딩(첫 화면) → 아래로 스크롤하면 본지로 이어진다. `#/game`은 같은 페이지를 본지 위치에서 연다.

본지: 커버(유튜브 플레이 영상) → 목차 → 게임 소개 → 세계관 → 플레이 방법(탐색·협력·수집) → 등장인물 → 더 깊이 읽기 → 팀

더 깊이 읽기는 `articles`의 `track`으로 나뉜다.
- `inside` — Inside the Game (탐색 · 협력 · 수집 기사, 슬라이드 카드)
- `behind` — Documentation (시네마틱 · AI NPC/시스템 기사)

플레이 방법 카드의 `go`는 기사 `id`를 가리키고, 기사 `keys`에 같은 키워드를 넣으면 칩으로 표시된다.

## 이미지·영상 넣기
1. 파일을 `assets/img/` 또는 `assets/video/`에 넣는다
2. `content.js`에서 해당 칸에 경로를 쓴다 (예: `img: "assets/video/turntable-ron.mp4"`)
3. 영상이면 `poster`에 대기 화면용 이미지를 같이 넣는다
4. 유튜브는 `https://youtu.be/영상ID` 형태로 넣으면 자동 임베드
5. 비워두면(`""`) 자리표시 박스가 나온다

영상은 화면에 들어올 때만 받아서 재생하고, 벗어나면 멈춘다. 그래도 파일은 작게:
720p · 무음 · 10~20초 · 파일당 10MB 이하를 권장한다.

```
ffmpeg -ss 00:00:40 -t 20 -i 원본.mp4 -vf "scale=-2:720,fps=30" -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart -an 결과.mp4
```

## 기사 본문 블록
`content.js`의 각 기사 `blocks` 배열에 위에서부터 쌓는다.

| 블록 | 쓰임 |
|---|---|
| `p` | 문단 |
| `h` | 소제목 |
| `img` / `video` | 사진 · 영상 한 장 (원본 비율 그대로) |
| `pair` | 두 장 나란히 (`items: [{ src, cap }, { src, cap }]`) |
| `pull` | 큰 인용문 |
| `compare` | A / B 비교 (`a: { src, cap }, b: { src, cap }`) |
| `pictos` | 픽토그램 카드 |
| `workflow` | 단계도 |

## 크레딧
기사마다 `credits`에 파트별로 적는다. 기사 상단 바이라인은 MAIN으로 자동 생성된다.

```js
credits: [
  { part: "AI NPC", main: [ { n: "윤동혁", w: "AI 다이얼로그 시스템" } ],
                    sub:  [ { n: "김영은", w: "캐릭터 디자인" } ] },
  { part: "플레이테스트", sub: [ { n: "이정희", w: "전시 플레이테스트" } ] }   // SUB만 있어도 된다
]
```
파트 순서는 제작 파이프라인 순으로 맞춘다: 기획 → 시나리오 → 아트 → 레벨 → AI NPC → 시네마틱

## 표기 규칙
- 장르: `content.js` 맨 위 `GENRE` 한 줄만 고치면 커버·게임 소개에 같이 반영
- 수리 로봇: 이름은 **Fix**, 일련번호가 **F-404** (본문에서는 Fix로 부른다)
- 층 구성: 1F · 1.5F · 2F (3F는 이전 시나리오 버전)

## 권장 비율
| 위치 | 비율 |
|---|---|
| 랜딩 시네마틱 | 21:9 이상 (화면에 맞춰 좌우가 잘림) |
| 커버 · 기사 히어로 · 카드 | 16:9 |
| 세계관 | 16:9 |
| 캐릭터 | 3:4 (턴테이블 영상은 잘리지 않고 검은 여백) |
| 팀원 포트레이트 | 3:4 |
| 서브 캐릭터 | 1:1 (원형) |
| 기사 본문 사진 | 자유 (원본 비율 그대로, 세로 사진은 `pair`로 두 장씩) |

## 배포할 때 (캐시)
GitHub Pages는 CSS · JS를 브라우저에 10분간 저장한다. 고친 내용이 바로 보이도록
`index.html`의 `?v=숫자`를 올릴 때마다 바꾼다:
```
V=$(date +%y%m%d%H%M); sed -i -E "s#(css/style\.css|js/(content|icons|app)\.js)(\?v=[0-9]+)?\"#\1?v=$V\"#g" index.html
```
