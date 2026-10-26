/* =========================================================
   FOF 사이트 콘텐츠 — 문구·이미지는 전부 이 파일에서만 수정
   ---------------------------------------------------------
   · 이미지: "assets/img/파일명.jpg" 처럼 경로를 넣는다. 비워두면("") 자리표시 박스.
   · 영상:   "assets/video/파일명.mp4"  또는 유튜브 링크(자동 임베드)
   · 아이콘: icon 값은 js/icons.js 에 있는 이름 중 하나
   · <br> 은 줄바꿈, <em>글자</em> 는 강조색
   · [출처] 주석 = 드라이브 Five Guys Team Project 안의 원본 문서
   ========================================================= */
// 장르 표기 — 바뀌면 여기 한 줄만 고치면 커버·게임 소개에 같이 반영된다
const GENRE = "인터랙티브 시네마틱 게임";

window.SITE = {

  /* ---------- 기본 정보 ---------- */
  version: "v4",                            // 배포 버전 (zip 번호와 동일)
  title: "FOF",
  subtitle: "home://error",
  issue: "Exhibition Issue · 2026",
  exhibit: "2026 전시 · 부스 A-00",          // TODO: 코엑스/킨텍스 확정되면 수정
  siteUrl: "",                               // 배포 주소 확정되면 입력
  credit: "© 2026 TEAM FIVEGUYS. All Rights Reserved.",
  links: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Contact", href: "#" }
  ],

  /* ---------- 랜딩 ---------- */
  landing: {
    deck: "기억, 유대, 그리고 가족.",          // [출처] 다큐멘테이션용 시트 > 한줄글
    shots: [
      { cap: "FLASHBACK — 지구의 밤", src: "assets/img/shot-earth-1.jpg", poster: "" },
      { cap: "WEAVER — 1F", src: "assets/img/shot-ron-run.jpg", poster: "" },
      { cap: "WEAVER — CORRIDOR", src: "assets/img/shot-corridor.jpg", poster: "" },
      { cap: "FLASHBACK — 올리와 론", src: "assets/img/shot-earth-2.jpg", poster: "" }
    ]
  },

  /* ---------- 본지 커버 ---------- */
  cover: {
    title: "기억, 유대,<br>그리고 <em>가족</em>",
    deck: `로봇의 시선과 망가진 우주선이라는 낯선 공간을 통해 기억·유대·가족을 되짚어보는 ${GENRE}.`,
    trailer: { src: "https://youtu.be/davKGqPsXQQ", poster: "", cap: "FOF home://error — 인게임 플레이 영상" }
  },

  /* ---------- 게임 소개 ---------- */
  intro: {
    head: "게임 소개",
    // [출처] 텍스트 뭉치 1026 > 게임 소개 · 기획의도 · 게임 특징 ① 탐험 내러티브
    text: [
      `〈FOF home://error〉는 우주선에 홀로 남겨진 반려로봇 ‘론’의 이야기를 담은 ${GENRE}이다. 플레이어는 폭풍으로 부서진 우주선을 탐험하며 흩어진 가족의 기억을 하나씩 되찾아 가고, 그 과정에서 가족의 부재를 마주한 론이 기억과 유대를 통해 다시 앞으로 나아가는 모습을 함께하게 된다.`,
      "플레이어는 수리 로봇 Fix와 반려로봇 Ron을 번갈아 조작하며 함선을 탐색하고, AI 동료 레프가 그 곁을 함께한다. 탐색 자체가 인물의 과거와 관계를 이해하는 과정이 된다.",
      "이야기는 정해진 순서대로 보여 주는 것이 아니라, 플레이어가 직접 공간을 탐험하며 찾아낸다. 부서진 위버호의 1층, 1.5층, 2층을 오가며 가족이 남긴 흔적을 발견하고, 특정 장소에 닿거나 물건을 찾을 때마다 홀로그램 기억과 시네마틱이 열린다. 조각난 기억이 하나둘 모여 비로소 하나의 이야기가 완성된다."
    ],
    pull: "“맞아! 론은 내 동생이야.”<br><small style=\"font:500 13px var(--mono);color:var(--muted)\">— 올리, 프롤로그</small>"
  },

  /* ---------- 세계관 ---------- */
  // [출처] Full_ver_scenario_260620.pdf > 작품배경
  world: {
    head: "세계관",
    year: "2126",
    // [출처] 텍스트 뭉치 1026 > 세계관
    text: [
      "2126년, 회복할 수 없을 만큼 망가진 지구를 떠나기 위해 인류는 타우세티 항성계에서 새로운 터전을 찾아낸다. 그곳을 사람이 살 수 있는 땅으로 바꾸는 테라포밍 사업은 거대 기업 프런티어 엔터프라이스가 맡게 되고, 사업 책임자인 과학자 헨리 위버는 가족과 함께 선발 이주선 위버호에 올라 30년의 긴 항해를 시작한다.",
      "항해 동안 인간은 모두 냉동 수면에 들어가야 하지만, 위버 가족의 반려로봇 론은 홀로 깨어 함선을 지켜야 한다. 오랜 시간 혼자 남겨질 론을 걱정한 헨리는 가족의 기억과 말투, 습관을 학습해 홀로그램으로 되살려 주는 판타스마 에센스를 함선 곳곳에 설치하고, 론은 그 덕분에 항해 내내 가족과 함께 있다고 믿으며 지낸다.",
      "하지만 이 기술을 바라보는 프런티어의 시선은 다르다. 헨리에게 판타스마 에센스는 가족의 기억을 지키는 방법이었지만, 프런티어에게는 회수하고 복제할 수 있는 회사의 자산이다.",
      "그러던 중 위버호는 예기치 못한 항성 폭풍에 휘말려 항로를 벗어나고, 가족의 홀로그램이 깨져 사라지는 사이 론도 함선 어딘가에 쓰러져 멈춰 버린다. 그 뒤 프런티어 관제센터가 구조를 명목으로 보낸 두 로봇이 부서진 위버호 안으로 들어서면서 이야기가 시작된다."
    ],
    facts: [
      { k: "YEAR", v: "2126" },
      { k: "DESTINATION", v: "타우세티 항성계" },
      { k: "SHIP", v: "위버호 · 30년 항해" },
      { k: "OPERATOR", v: "프런티어 엔터프라이스" }
    ],
    img: "assets/video/world.mp4", poster: "assets/img/earth-catchball.jpg"
  },

  /* ---------- 플레이 방법 (픽토그램) ---------- */
  // 플레이 루프 키워드 3개 = 탐색 · 협력 · 수집
  // go: 누르면 열리는 Inside the Game 기사 id / 같은 키워드가 기사 keys에도 들어간다
  // [출처] 텍스트 뭉치 1026 > 게임 특징 ② 코어루프
  howToPlay: {
    head: "플레이 방법",
    items: [
      { icon: "compass", t: "탐색", d: "폭풍으로 무너진 함선을 돌아다니며 길과 단서를 찾는다. 레프가 띄우는 함선 도면과 푸른 홀로그램 나비가 다음 목적지를 알려준다.", go: "explore" },
      { icon: "swap", t: "협력", d: "F-404는 힘으로 구조물을 들어 길을 만들고, 레프는 스캔과 지도로 길을 안내하며, 작은 몸집의 론은 환풍구처럼 좁은 곳에 들어간다. 혼자서는 열 수 없는 문과 장치도 셋이 힘을 합치면 열린다.", go: "cooperate" },
      { icon: "memory", t: "수집", d: "함선 곳곳에 남겨진 가족의 물건을 찾으면 그 물건에 담긴 기억이 홀로그램으로 재생된다.", go: "collect" }
    ],
    // 픽토그램 아래 한 줄 — 루프 구조
    loop: "탐색으로 단서를 찾고, 협력으로 길을 열고, 수집으로 기억을 되찾으면 다음 구역이 열린다. 이 과정을 반복하며 론은 잃어버린 가족의 기억과 함께 자신이 누구였는지를 되찾아 간다."
  },

  /* ---------- 캐릭터 ---------- */
  // [출처] 텍스트 뭉치 1026 > 캐릭터
  characters: [
    { name: "Ron", kr: "론", role: "COMPANION ROBOT",
      desc: "지구에서부터 위버 가족과 함께 살아온 작은 반려로봇. 폭풍 사고로 기억 일부를 잃었지만 올리를 지켜야 한다는 마음만은 남아 있으며, 가슴의 푸른 LED 모듈 안에는 가족의 기억이 담겨 있다.", img: "assets/video/turntable-ron.mp4", poster: "assets/img/char-ron.jpg" },
    { name: "Fix", kr: "F-404", role: "EXPLORATION & REPAIR",
      desc: "프런티어 관제센터가 위버호에 보낸 대형 수리 로봇. 말수는 적지만 다정한 성격으로, 강한 힘으로 무너진 길을 열어 동료를 돕는다. 명령에 따라 움직이던 로봇에서 점차 스스로 판단해 론을 지키는 존재로 변해 간다.", img: "assets/video/turntable-fix.mp4", poster: "assets/img/char-fix.jpg" },
    { name: "Lef", kr: "레프", role: "SUPPORT UNIT",
      desc: "F-404와 함께 파견된 작고 빠른 드론형 보조 로봇. 스캔과 통신, 지도 투사에 능하지만 손이 없어 늘 F-404에게 의지한다. 말이 많고 툴툴대지만, 결국 론을 회수품이 아닌 동료로 받아들인다.", img: "assets/video/turntable-lef.mp4", poster: "assets/img/char-lef.jpg" }
  ],
  subCharacters: [
    { name: "헨리 위버", role: "FATHER · SCIENTIST", desc: "테라포밍 계획과 판타스마 에센스 기술을 이끈 과학자. 홀로 남을 론이 외롭지 않도록, 가족의 기억을 론과 함께 완성되는 형태로 남겼다.", img: "assets/video/sub-henry.mp4", poster: "assets/img/sub-henry.jpg" },
    { name: "캐서린 위버", role: "MOTHER", desc: "론을 로봇이 아닌 가족의 일원으로 대하는 따뜻한 사람. 론이 혼자 남겨졌다고 느끼지 않기를 누구보다 바랐다.", img: "assets/video/sub-catherine.mp4", poster: "assets/img/sub-catherine.jpg" },
    { name: "올리 위버", role: "SON", desc: "장난기 많고 순수한 여섯 살. 론을 처음부터 동생으로 받아들였고, 론에게 ‘가족’이라는 감각을 가장 가까이에서 남겼다.", img: "assets/video/sub-ollie.mp4", poster: "assets/img/sub-ollie.jpg" }
  ],

  /* ---------- 더 깊이 읽기 (기사) ----------
     블록 종류: p · h · img · video · pair(세로 사진 2장) · pull · compare · pictos · workflow
     (형식은 README.md 참고)
  */
  // inside = 인게임 3개 (탐색 · 협력 · 수집) → 슬라이드 카드 / behind = 다큐멘테이션 1개 → 넓은 카드
  // thumb/hero 가 영상이면 poster 이미지가 로딩 전 대기 화면이 된다
  // credits: 파트별 MAIN(주 담당) / SUB(참여). 기사 상단 바이라인은 MAIN으로 자동 생성
  //          main 없이 sub만 있는 파트도 된다 (바이라인에는 안 나옴)
  //          파트 순서는 제작 파이프라인 순 — 기획 → 시나리오 → 아트 → 레벨 → AI NPC → 시네마틱
  tracks: { inside: "Inside the Game", behind: "Documentation" },
  articles: [
    {
      // [출처] FG_퀘스트리스트 > 퀘스트_세부정리 (인게임 기준. 3F가 있던 시나리오는 이전 버전)
      id: "explore", track: "inside", sub: "Explore", keys: ["탐색"],
      t: "부서진 위버호를 걷다", d: "1층 엔진실에서 2층 기계실까지. 무너진 함선을 누비며 길과 단서를 찾는다.",
      thumb: "assets/video/loop-explore.mp4", hero: "assets/video/loop-explore.mp4", poster: "assets/img/shot-corridor.jpg",
      credits: [
        { part: "플레이 흐름 · UX", main: [ { n: "이정희", w: "튜토리얼 · 레벨 진행 구조 · 목표 안내 · 플레이어 동선 설계" } ],
          sub: [ { n: "김영은", w: "마그네틱 시스템 제작 · 홀로그램 시스템 제작 · 대화 NPC 배치" } ] },
        { part: "레벨 디자인", main: [ { n: "윤동혁", w: "레벨 구성 · 디테일" } ] }
      ],
      readTime: "5분",
      facts: [ { k: "FLOORS", v: "1F · 1.5F · 2F" }, { k: "GOAL", v: "함선 전력 복구" }, { k: "PLAY TIME", v: "약 15분" }, { k: "ENGINE", v: "Unreal Engine 5" } ],
      blocks: [
        { type: "p", text: "항성 폭풍으로 항로를 이탈한 위버호. 붉은 비상등과 꺼져가는 차폐막의 푸른빛만이 어둠 속에서 깜빡인다. 플레이어는 무너진 함선을 돌아다니며 길과 단서를 찾고, 레프가 띄우는 함선 도면과 푸른 홀로그램 나비가 다음 목적지를 알려준다." },
        { type: "p", text: "레벨은 시나리오와 컨셉아트의 분위기에 맞춰 구성하되, 너무 인위적이지 않으면서도 플레이어가 목표를 쉽게 찾을 수 있도록 설계했다." },
        { type: "h", text: "층별 구조" },
        { type: "pictos", items: [
          { icon: "door", t: "1F", d: "엔진실 · 엔진 코어 — 쓰러진 론을 만나는 곳" },
          { icon: "layers", t: "1.5F", d: "1층과 2층을 잇는 구역 — 마지막에 되살릴 전력" },
          { icon: "power", t: "2F", d: "복도 · 기계실 · 테라리움 · 생활공간 · 환풍구 파이프" }
        ] },
        { type: "img", src: "assets/img/shot-ron-run.jpg", cap: "위버호 1F — 앞서 달리는 론과 뒤따르는 Fix" },
        { type: "workflow", title: "진행 흐름", steps: [
          { icon: "compass", tool: "1F · 탐색", t: "회수품을 찾아서", d: "F-404와 레프가 회수품을 찾아 1층 엔진실로 들어선다." },
          { icon: "wrench", tool: "1F · 협력", t: "신원 불명의 로봇", d: "쓰러져 있던 작은 로봇의 팔을 찾아 고쳐 준다. 다시 움직이기 시작한 로봇이 론이다." },
          { icon: "robot", tool: "1F → 1.5F · 탐색", t: "론을 따라서", d: "앞서 달리는 론을 따라 1.5층으로 올라간다." },
          { icon: "power", tool: "1.5F → 2F · 탐색", t: "전력을 복구하라", d: "멈춘 전력을 살리려 2층 기계실로 향하지만, 길이 막혀 우회로를 찾는다." },
          { icon: "rabbit", tool: "2F · 수집", t: "흩어진 장난감 네 개", d: "테라리움과 생활공간에서 로봇 · 기차 · 토끼 · 비행기를 모으면 환풍구 열쇠가 손에 들어온다." },
          { icon: "bug", tool: "2F · 탐색", t: "환풍구 속으로", d: "작은 몸집의 론이 열쇠로 환풍구에 들어가고, 파이프 속에서 외계 벌레에게 쫓긴다." },
          { icon: "swap", tool: "2F · 협력", t: "다시 만난 Fix", d: "기계실 문 옆 레버를 열어 Fix와 다시 만나고, 각자 콘솔을 조작해 1.5층 전력을 되살린다." },
          { icon: "film", tool: "ENDING", t: "엔딩 시퀀스", d: "[엔딩 퀘스트 확정 후 작성]" }
        ] },
        { type: "p", text: "[본문 이어서 — 레벨 제작 과정, 모듈러 구성, 라이팅 등]" }
      ]
    },
    {
      id: "cooperate", track: "inside", sub: "Cooperate", keys: ["협력"],
      t: "셋이어야 열리는 문", d: "힘의 F-404, 길잡이 레프, 작은 몸집의 론. 혼자서는 열 수 없는 길을 함께 연다.",
      thumb: "assets/video/loop-cooperate.mp4", hero: "assets/video/loop-cooperate.mp4", poster: "assets/img/lef-wide.jpg",
      credits: [
        { part: "게임 시스템", main: [ { n: "이정희", w: "캐릭터 전환 · AI 추적 시스템 · 오브젝트 상호작용" } ] },
        { part: "AI NPC", main: [ { n: "윤동혁", w: "AI 다이얼로그 시스템" } ],
          sub: [ { n: "김영은", w: "캐릭터 디자인" } ] }
      ],
      readTime: "5분",
      facts: [ { k: "ROBOTS", v: "F-404 · 레프 · 론" }, { k: "CONTROL", v: "Fix · Ron 번갈아 조작" }, { k: "COMPANION", v: "레프 — AI 다이얼로그" } ],
      blocks: [
        { type: "p", text: "세 로봇은 서로 다른 능력으로 함께 문제를 푼다. 플레이어는 Fix와 Ron을 번갈아 조작하고, 레프는 AI 동료로 곁을 지킨다. 혼자서는 열 수 없는 문과 장치도 셋이 힘을 합치면 열린다." },
        { type: "pictos", items: [
          { icon: "wrench", t: "F-404", d: "힘으로 무너진 구조물을 들어 올려 길을 만든다." },
          { icon: "eye", t: "레프", d: "스캔과 지도 투사로 길을 안내하고, 상황에 맞춰 말을 건다." },
          { icon: "robot", t: "론", d: "작은 몸집으로 환풍구처럼 좁은 곳에 들어간다." }
        ] },
        { type: "h", text: "함께 푸는 순간들" },
        { type: "pictos", items: [
          { icon: "wrench", t: "론을 고치다", d: "1층에서 쓰러진 론의 팔을 찾아 다시 움직이게 한다." },
          { icon: "bug", t: "혼자 들어간 환풍구", d: "론만 들어갈 수 있는 파이프 속, 외계 벌레를 피해 기계실로." },
          { icon: "swap", t: "다시 만나 켜는 불", d: "레버로 Fix와 합류하고, 각자 콘솔을 맡아 1.5층 전력을 되살린다." }
        ] },
        { type: "h", text: "말을 거는 동료, 레프" },
        { type: "p", text: "플레이어와 동행하는 NPC 레프에 AI 다이얼로그 시스템을 적용해, 플레이 상황에 맞는 다양한 대사를 생성하도록 했다. 같은 공간에서도 플레이어마다 서로 다른 경험을 하게 되고, 기존 게임의 결정론적 대사보다 생동감 있는 반응을 느낄 수 있다." },
        { type: "video", src: "assets/video/npc-ai.mp4", cap: "AI NPC 레프 — 인게임 시연" },
        { type: "p", text: "[본문 이어서 — 레프의 성격 설계, 전시 환경(네트워크 불안정) 대응 등]" }
      ]
    },
    {
      id: "collect", track: "inside", sub: "Collect", keys: ["수집"],
      t: "흩어진 기억을 줍다", d: "함선 곳곳에 남은 가족의 물건. 하나를 찾을 때마다 기억 하나가 홀로그램으로 깨어난다.",
      thumb: "assets/video/loop-collect.mp4", hero: "assets/video/loop-collect.mp4", poster: "assets/img/family-photo.jpg",
      credits: [
        { part: "시나리오", main: [ { n: "김지숙", w: "시나리오" } ] },
        { part: "상호작용", main: [ { n: "이정희", w: "오브젝트 상호작용 구현 · 시스템 간 연계" } ] }
      ],
      readTime: "4분",
      facts: [ { k: "ITEMS", v: "장난감 4개 → 환풍구 열쇠" }, { k: "THEME", v: "기억 · 가족 · 유대" } ],
      blocks: [
        { type: "p", text: "함선 곳곳에 남겨진 가족의 물건을 찾으면 그 물건에 담긴 기억이 홀로그램으로 재생된다. 여정의 끝에서 가족의 기억을 함께 지켜낸 Fix와 Ron은 서로에게 새로운 유대를 맺고, 사라진 기억을 매개로 두 로봇 사이에 새로운 형태의 가족이 생겨난다." },
        { type: "h", text: "2층에 흩어진 장난감" },
        { type: "pictos", items: [
          { icon: "robot", t: "로봇", d: "첫 번째 장난감 — 시퀀스가 함께 재생된다." },
          { icon: "train", t: "기차", d: "두 번째 장난감." },
          { icon: "rabbit", t: "토끼", d: "생활공간에서 찾는 세 번째 장난감." },
          { icon: "plane", t: "비행기", d: "마지막 장난감 — 환풍구 열쇠로 이어진다." }
        ] },
        { type: "p", text: "장난감 네 개를 모두 모아야 환풍구 열쇠가 손에 들어오고, 다음 구역으로 가는 길이 열린다." },
        { type: "pair", items: [
          { src: "assets/img/family-photo.jpg", cap: "가족사진 — 헨리 · 캐서린 · 올리 · 론" },
          { src: "assets/img/ron-certificate.jpg", cap: "론의 활성화 인증서 — 올리의 낙서가 남아 있다" }
        ] },
        { type: "pull", text: "“이렇게 잡고 던지면 돼. 한번 던져봐!”<br><small style=\"font:500 13px var(--mono);color:var(--muted)\">— 캐서린, 캐치볼 플래시백</small>" },
        { type: "p", text: "[본문 이어서 — 희미한 홀로그램(론의 손상된 기억)과 지구 플래시백(기억 회수)의 연출 구분 등]" }
      ]
    },
    {
      id: "making", track: "behind", sub: "Documentation",
      t: "실시간 엔진 × AI 하이브리드", d: "언리얼 엔진 화면과 AI로 찍은 시네마틱, AI로 말하는 NPC까지. 네 명이 위버호를 만든 방법.",
      thumb: "assets/video/cine-ai.mp4", hero: "assets/video/cine-ai.mp4", poster: "assets/img/shot-earth-1.jpg",
      credits: [
        { part: "게임 시스템 · UX", main: [ { n: "이정희", w: "핵심 플레이 루프 · 퀘스트 시스템 · 시스템 통합 (Blueprint · Story Framework)" } ] },
        { part: "아트 · TA", main: [ { n: "김영은", w: "컨셉아트 · 캐릭터 디자인 · 플레이어 인터랙션" } ],
          sub: [ { n: "이정희", w: "Ron 3D 모델링 · 리토폴로지 · Substance Painter 텍스처" } ] },
        { part: "레벨", main: [ { n: "윤동혁", w: "레벨 디자인" } ] },
        { part: "AI NPC", main: [ { n: "윤동혁", w: "AI NPC 제작 · 시스템 연동" } ],
          sub: [ { n: "김영은", w: "캐릭터 디자인" } ] },
        { part: "AI 시네마틱", main: [ { n: "김지숙", w: "시나리오 · 시네마틱 연출 · AI 영상 · 편집" } ],
          sub: [ { n: "김영은", w: "레벨 디자인 · 시네마틱 시퀀스 (수리, 환풍구)" },
                 { n: "이정희", w: "사운드 적용 · 시퀀서 연출 지원" } ] },
        { part: "플레이테스트", sub: [ { n: "이정희", w: "전시 플레이테스트로 UX 문제 파악 · 개선" } ] }
      ],
      readTime: "8분",
      facts: [ { k: "ENGINE", v: "Unreal Engine 5" }, { k: "DCC", v: "Blender" }, { k: "VIDEO", v: "Higgsfield" }, { k: "MUSIC", v: "Suno" }, { k: "NPC", v: "AI 다이얼로그" }, { k: "TEAM", v: "4명" }, { k: "EXHIBITION", v: "2026 NCA 쇼케이스" } ],
      blocks: [
        { type: "video", src: "https://youtu.be/bSGboK4WxNQ", cap: "FOF home://error — 다큐멘테이션 영상" },
        { type: "p", text: "언리얼 엔진 5와 AI를 결합한 하이브리드 시네마틱 제작 방식을 썼다. 언리얼 엔진에서 카메라 구도와 장면을 구성한 뒤, 이를 스틸컷으로 추출해 AI 영상으로 생성한다. 시네마틱 제작 효율을 높이는 동시에, 실제 게임 플레이 화면과 시네마틱 영상 사이의 시각적 이질감을 줄이기 위해서다. 여기에 NPC 대사까지 AI로 연동했다." },
        { type: "workflow", title: "파이프라인 개요", steps: [
          { icon: "edit", tool: "PLANNING", t: "기획 · 시나리오", d: "플레이 흐름과 레벨 루프, 장면 구성을 설계한다." },
          { icon: "image", tool: "Blender", t: "컨셉아트 · 캐릭터", d: "세계관 디자인 시트, 캐릭터 모델링과 턴테이블." },
          { icon: "layers", tool: "UE5", t: "레벨 · 인터랙션", d: "레벨 구성, 퍼즐과 캐릭터 조작 피드백 구현." },
          { icon: "nodes", tool: "UE5 + AI", t: "AI NPC 연동", d: "플레이 상황에 맞는 대사를 생성하는 다이얼로그 시스템." },
          { icon: "camera", tool: "UE5 + AI VIDEO", t: "시네마틱 통합", d: "엔진 시퀀스와 AI 영상을 하나의 흐름으로 잇는다." }
        ] },
        { type: "h", text: "AI로 찍은 시네마틱" },
        { type: "p", text: "많은 시간이 소요되는 시네마틱 제작 과정에 AI 영상 생성 도구를 적극적으로 도입했다. 카메라의 앵글과 조명, 인물의 동작까지 프롬프트로 세밀하게 디렉팅하며 장면을 구현했고, 언리얼 엔진으로 만든 게임 화면과 시네마틱이 하나의 작품처럼 느껴지도록 톤앤매너를 맞추는 데 집중했다." },
        { type: "workflow", title: "시네마틱 제작 워크플로우", steps: [
          { icon: "edit", tool: "SCENARIO", t: "시나리오", d: "장면이 관객에게 어떤 감정으로 전달될지 설계한다." },
          { icon: "film", tool: "STORYBOARD", t: "스토리보드", d: "샷마다 시간 · 화면 사이즈 · 대사 · 감정을 정리한다." },
          { icon: "camera", tool: "Higgsfield", t: "AI 영상 생성", d: "카메라 · 조명 · 동작을 프롬프트로 디렉팅한다." },
          { icon: "mic", tool: "Suno", t: "사운드", d: "환경음과 사운드트랙 프로토타입을 만든다." },
          { icon: "sparkle", tool: "EDIT", t: "편집 · 톤 매칭", d: "엔진 화면과 이질감이 없도록 톤앤매너를 맞춘다." }
        ] },
        { type: "h", text: "컷신의 네 가지 종류" },
        { type: "pictos", items: [
          { icon: "film", t: "CC", d: "시네마틱 컷신 — 플레이 없이 감상하는 영상." },
          { icon: "tap", t: "PC / IC", d: "플레이어블 컷신 + 인게임 — 조작하며 이어지는 장면." },
          { icon: "power", t: "TC", d: "트리거 컷신 — 특정 행동에 반응해 재생." },
          { icon: "branch", t: "분기", d: "UI 선택지에 따라 갈리는 장면." }
        ] },
        { type: "compare", a: { src: "", cap: "STORYBOARD" }, b: { src: "", cap: "AI GENERATED" } },
        { type: "h", text: "AI NPC 다이얼로그" },
        { type: "pictos", items: [
          { icon: "eye", t: "관찰", d: "플레이어의 행동과 위치를 상태값으로 읽는다." },
          { icon: "nodes", t: "판단", d: "상태에 맞는 질문 세트를 골라 AI에 보낸다." },
          { icon: "chat", t: "발화", d: "상황에 맞는 대사로 플레이어에게 말을 건다." }
        ] },
        { type: "video", src: "assets/video/npc-dialogue.mp4", cap: "상황에 따라 달라지는 NPC 대사" },
        { type: "img", src: "", cap: "컨트롤 리그 세팅 / 블루프린트 화면 자리" },
        { type: "h", text: "네 명이 만든 위버호" },
        { type: "p", text: "[본문 자리 — 시행착오와 팀 이야기, 개발 현황 영상, 회의, 전시 현장 이야기]" },
        { type: "video", src: "", cap: "LV1 · LV2 개발 현황" }
      ]
    }
  ],

  /* ---------- 팀 ---------- */
  // [출처] 다큐멘테이션용 시트 > 팀원 인터뷰 (자기소개 나레이션)
  team: {
    name: "FIVEGUYS",
    intro: "네 명이 만들고, 다섯 번째가 완성하는 팀.",
    members: [
      {
        id: "youngeun", n: "김영은", r: "Leader · PM · Art Director · TA", img: "",
        parts: ["컨셉아트", "캐릭터 디자인", "플레이어 인터랙션", "시네마틱 시퀀스", "마그네틱 · 홀로그램 시스템"],
        quote: "“두 캐릭터의 개성과 세계관이 시각적으로 선명하게 전달될 수 있도록.”",
        body: [
          "팀의 리더이자 PM으로서 프로젝트의 전체 타임라인을 조율하고 방향성을 이끄는 동시에, 아트 디렉터와 테크니컬 아티스트 역할을 겸임했다. 컨셉아트와 캐릭터 디자인을 중점적으로 작업하며 게임의 전반적인 시각적 분위기를 정의했다.",
          "테크니컬 아티스트로서는 디자인된 에셋이 실제 엔진 안에서 플레이어와 어떻게 상호작용할지 설계했다. 캐릭터를 조작할 때 느끼는 물리적인 움직임, 퍼즐과 상호작용할 때의 피드백 같은 인터랙션을 기술적으로 구현했다."
        ],
        works: ["", "", ""],
        links: [ { label: "포트폴리오", href: "#" }, { label: "Email", href: "#" } ]
      },
      {
        id: "jisook", n: "김지숙", r: "Scenario Writer · Cinematic Director", img: "",
        parts: ["시나리오", "시네마틱 연출", "AI 영상 제작", "편집"],
        quote: "“카메라의 앵글과 조명, 인물의 동작까지 프롬프트로.”",
        body: [
          "이야기의 뼈대가 되는 시나리오를 쓰고, 각 장면이 관객에게 어떤 감정으로 전달될지를 설계하는 데 집중했다.",
          "AI 영상 생성 도구로 시네마틱 컷을 제작하며 카메라 앵글과 조명, 인물의 동작까지 프롬프트로 세밀하게 디렉팅했다. 언리얼 엔진으로 만든 게임 화면과 시네마틱 영상이 하나의 작품처럼 느껴지도록 톤앤매너를 조율했다."
        ],
        works: ["", "", ""],
        links: [ { label: "포트폴리오", href: "#" }, { label: "Email", href: "#" } ]
      },
      {
        id: "donghyeok", n: "윤동혁", r: "Level Designer · AI NPC Programmer", img: "",
        parts: ["레벨 디자인", "AI NPC 제작", "시스템 연동"],
        quote: "“너무 인위적이지 않으면서도, 목표는 쉽게 찾을 수 있도록.”",
        body: [
          "시나리오와 컨셉아트의 분위기에 맞춰 전반적인 레벨 구성과 디테일을 구현하며, 공간이 시각적으로 설득력 있게 느껴지도록 만드는 데 집중했다.",
          "AI NPC는 기존 게임의 결정론적 경험보다 더 풍부하고 생동감 있는 반응을 느낄 수 있도록 제작했다."
        ],
        works: ["", "", ""],
        links: [ { label: "포트폴리오", href: "#" }, { label: "Email", href: "#" } ]
      },
      {
        id: "jeonghee", n: "이정희", r: "Game Designer · UI/UX Designer", img: "",
        parts: ["게임 시스템", "플레이 흐름 · UX", "상호작용 · 시스템 통합", "Ron 모델링 · 텍스처"],
        quote: "“각자 만든 레벨과 시네마틱, 인터랙션을 하나의 플레이 흐름으로.”",
        body: [
          "전체적인 게임 플레이 흐름과 레벨 루프를 설계하고, 플레이어의 진행을 돕는 시스템을 제작했다.",
          "캐릭터 인터랙션과 수집 요소 등 게임 내 상호작용을 기획·구현했으며, 각 팀원이 제작한 레벨과 시네마틱, 인터랙션 요소를 하나의 플레이 흐름으로 연결하는 작업을 담당했다."
        ],
        works: ["", "", ""],
        links: [ { label: "포트폴리오", href: "#" }, { label: "Email", href: "#" } ]
      },
      {
        // 5번째 멤버 = 플레이어
        id: "you", n: "당신", r: "Player", you: true,
        parts: ["탐색", "발견", "선택"],
        quote: "“유저의 선택과 탐색이라는 행위 그 자체가 곧 하나의 이야기를 완성한다.”",
        body: ["FIVEGUYS의 마지막 멤버는 이 게임을 플레이하는 사람이다. 네 명이 위버호를 만들었고, 그 안에 흩어진 기억을 발견해 이야기를 완성하는 건 다섯 번째 멤버의 몫이다."],
        now: { t: "부스에서 플레이하기", d: "현장 안내 문구 자리 (부스 위치, 대기 방법 등)" },
        later: { t: "방명록에 이름 남기기", d: "서버 연결 후 활성화 예정" }
      }
    ]
  }
};
