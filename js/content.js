/* =========================================================
   FOF 사이트 콘텐츠 — 문구·이미지는 전부 이 파일에서만 수정
   ---------------------------------------------------------
   · 이미지: "assets/img/파일명.jpg" 처럼 경로를 넣는다. 비워두면("") 자리표시 박스.
   · 영상:   "assets/video/파일명.mp4"  또는 유튜브 링크(자동 임베드)
   · 아이콘: icon 값은 js/icons.js 에 있는 이름 중 하나
   · <br> 은 줄바꿈, <em>글자</em> 는 강조색
   · [출처] 주석 = 드라이브 Five Guys Team Project 안의 원본 문서
   ========================================================= */
window.SITE = {

  /* ---------- 기본 정보 ---------- */
  version: "v4",                            // 배포 버전 (zip 번호와 동일)
  title: "FOF",
  subtitle: "home://error",
  issue: "Exhibition Issue · 2026",
  exhibit: "2026 전시 · 부스 A-00",          // TODO: 코엑스/킨텍스 확정되면 수정
  siteUrl: "",                               // 배포 주소 확정되면 입력
  qr: "",                                    // 실제 QR 이미지 경로 (예: "assets/img/qr.png"). 비우면 가짜 QR
  credit: "© 2026 TEAM FIVEGUYS. All Rights Reserved.",
  links: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Contact", href: "#" }
  ],

  /* ---------- 랜딩 (= 키오스크 화면) ---------- */
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
    deck: "로봇의 시선과 망가진 우주선이라는 낯선 공간을 통해 기억·유대·가족을 되짚어보는 1인 협동 어드벤처 게임.",
    trailer: { src: "assets/img/fof-logo.jpg", poster: "", cap: "FOF home://error — 플레이 영상 유튜브 링크로 교체 예정" }
  },

  /* ---------- 게임 소개 ---------- */
  // [출처] 사용자 원고 + 다큐멘테이션용 시트 > 나레이션 1·4
  intro: {
    head: "게임 소개",
    text: [
      "〈FOF home://error〉는 우주선에 홀로 남겨진 반려로봇 ‘론’의 이야기를 담은 인터랙티브 시네마틱 게임이다. 플레이어는 폭풍으로 부서진 우주선을 탐험하며 흩어진 가족의 기억을 하나씩 되찾아 가고, 그 과정에서 가족의 부재를 마주한 론이 기억과 유대를 통해 다시 앞으로 나아가는 모습을 함께하게 된다.",
      "플레이어는 수리를 담당하는 로봇 Fix와 탐색·기억을 담당하는 로봇 Ron을 번갈아 조작한다. Fix가 손상된 구역을 수리해 새로운 길을 열면, Ron은 그 공간의 오브젝트와 상호작용하며 숨겨진 가족의 기억을 깨워낸다. 동일한 공간도 어떤 캐릭터로 접근하느냐에 따라 전혀 다른 경험이 된다.",
      "FOF의 핵심 경험은 이야기를 단순히 ‘듣는’ 것이 아니라 직접 ‘발견하는’ 데 있다. 함선 곳곳에 숨겨진 기억들은 플레이어가 어느 공간으로 걸어 들어가느냐에 따라 다르게 다가온다."
    ],
    pull: "“맞아! 론은 내 동생이야.”<br><small style=\"font:500 13px var(--mono);color:var(--muted)\">— 올리, 프롤로그</small>"
  },

  /* ---------- 세계관 ---------- */
  // [출처] Full_ver_scenario_260620.pdf > 작품배경
  world: {
    head: "세계관",
    year: "2126",
    text: [
      "2126년, 지구 생태계는 회복 불가능한 단계에 접어들고, 인류는 생존을 위해 새로운 터전을 찾아 나선다. 그렇게 발견된 곳이 타우세티 항성계의 거주 가능 행성이다.",
      "인류는 행성 분산 계획(Planetary Migration Initiative)을 수립하고, 다국적 기업 프런티어 엔터프라이스가 수십 년에 걸친 대규모 테라포밍 프로젝트를 맡는다. 사업 책임자로 발탁된 헨리 위버는 가족과 함께 선발 이주선 위버호에 올라 30년의 항해를 시작한다.",
      "항해 동안 위버 가족은 냉동 수면에 든다. 하지만 반려로봇 론은 함선 안에서 홀로 깨어 있어야 한다. 헨리는 론이 고립감을 느끼지 않도록 함선 곳곳에 판타스마 에센스 시스템을 설치한다."
    ],
    facts: [
      { k: "YEAR", v: "2126" },
      { k: "DESTINATION", v: "타우세티 항성계" },
      { k: "SHIP", v: "위버호 · 30년 항해" },
      { k: "OPERATOR", v: "프런티어 엔터프라이스" }
    ],
    img: "assets/img/earth-catchball.jpg"
  },

  /* ---------- 플레이 방법 (픽토그램) ---------- */
  // [출처] 다큐멘테이션용 시트 > 나레이션 1, 시나리오 > 기억수집
  howToPlay: {
    head: "플레이 방법",
    items: [
      { icon: "wrench", t: "수리 — Fix", d: "손상된 구역을 수리해 새로운 길을 연다." },
      { icon: "robot", t: "탐색 · 기억 — Ron", d: "공간의 오브젝트와 상호작용해 숨겨진 가족의 기억을 깨운다." },
      { icon: "swap", t: "번갈아 조작", d: "같은 공간도 어떤 로봇으로 접근하느냐에 따라 다른 경험이 된다." },
      { icon: "memory", t: "기억 수집", d: "오브젝트를 발견하면 짧은 홀로그램 기억이 재생된다." }
    ]
  },

  /* ---------- 캐릭터 ---------- */
  // [출처] 시나리오 > 등장인물 (스포일러는 덜어냄)
  characters: [
    { name: "Ron", kr: "론", role: "COMPANION ROBOT",
      desc: "지구에서부터 위버 가족과 함께 살아온 반려로봇. 가족이 냉동 수면에 든 뒤에도 홀로 깨어 함선을 지킨다. 기억 일부가 손상되었지만, 올리를 지켜야 한다는 마음만은 남아 있다.", img: "assets/img/char-ron.jpg" },
    { name: "Fix", kr: "F-404", role: "EXPLORATION & REPAIR",
      desc: "프런티어 관제센터에서 파견한 대형 탐사수리 로봇. 말수가 거의 없고 행동과 제스처로 의사를 표현한다. 강한 힘으로 무너진 구조물을 들어 올려 길을 만든다.", img: "assets/img/char-fix.jpg" },
    { name: "Lef", kr: "레프", role: "SUPPORT UNIT",
      desc: "F-404와 함께 파견된 소형 보조 로봇. 말이 많고 츤데레 기질. 스캔·통신·지도 투사에 능하지만 손이 없어 늘 F-404에게 의존한다.", img: "assets/img/char-lef.jpg" }
  ],
  subCharacters: [
    { name: "헨리 위버", role: "FATHER · SCIENTIST", desc: "타우세티 이주 계획과 판타스마 에센스 기술의 핵심 과학자.", img: "assets/img/sub-henry.jpg" },
    { name: "캐서린 위버", role: "MOTHER", desc: "론을 가족의 일원으로 대하는, 위버 가족의 따뜻한 중심.", img: "assets/img/sub-catherine.jpg" },
    { name: "올리 위버", role: "SON", desc: "장난기 많은 여섯 살. 론에게는 형 같은 존재.", img: "assets/img/sub-ollie.jpg" }
  ],

  /* ---------- 더 깊이 읽기 (기사) ----------
     블록 종류: p · h · img · video · pull · compare · pictos · workflow
     (형식은 README.md 참고)
  */
  tracks: { inside: "Inside the Game", behind: "Behind the Scenes" },
  articles: [
    {
      id: "weaver", track: "inside", sub: "World & Level",
      t: "위버호, 네 개의 층", d: "항성 폭풍에 부서진 선발 이주선. 층마다 다른 기억이 잠들어 있다.",
      thumb: "assets/img/shot-corridor.jpg", hero: "assets/img/shot-corridor.jpg", byline: "레벨 · 윤동혁 / 기획 · 이정희", readTime: "4분",
      facts: [ { k: "FLOORS", v: "1F · 1.5F · 2F · 3F" }, { k: "ENGINE", v: "Unreal Engine 5" }, { k: "CREDIT", v: "윤동혁 · 이정희" } ],
      blocks: [
        { type: "p", text: "항성 폭풍으로 항로를 이탈한 위버호. 붉은 비상등과 꺼져가는 차폐막의 푸른빛만이 어둠 속에서 깜빡인다. 레벨은 시나리오와 컨셉아트의 분위기에 맞춰 구성하되, 너무 인위적이지 않으면서도 플레이어가 목표를 쉽게 찾을 수 있도록 설계했다." },
        { type: "h", text: "층별 구조" },
        { type: "pictos", items: [
          { icon: "door", t: "1F", d: "입구 · 기계실 · 테라리움" },
          { icon: "layers", t: "1.5F", d: "책장 뒤에 숨겨진 가족 수면실" },
          { icon: "power", t: "2F", d: "주 전력실 · 환풍구" },
          { icon: "heart", t: "3F", d: "가족 구역 — 부엌 · 안방 · 헨리의 작업실" }
        ] },
        { type: "img", src: "assets/img/shot-ron-run.jpg", cap: "위버호 1F — 앞서 달리는 론과 뒤따르는 Fix" },
        { type: "workflow", title: "챕터 흐름", steps: [
          { icon: "film", tool: "PROLOGUE", t: "위버호의 저녁 식사", d: "평화로운 식사 도중 항성 폭풍이 덮친다." },
          { icon: "robot", tool: "CH.1 · 1F", t: "정지된 반려로봇 론", d: "F-404와 레프가 부서진 통로에서 론을 발견하고 재가동한다." },
          { icon: "power", tool: "CH.2 · 2F", t: "전력을 복구하라", d: "환풍구를 지나 전력실로. 첫 번째 기억 조각." },
          { icon: "butterfly", tool: "CH.3 · 3F", t: "푸른 나비를 따라", d: "가장 크게 파괴된 가족 구역을 탐색한다." },
          { icon: "heart", tool: "CH.4 · 1.5F", t: "네 가슴에 있는 기억", d: "가족 수면실로 향한다." },
          { icon: "ship", tool: "CH.5 · 1F", t: "위버호를 탈출하라", d: "붕괴 경보 속에서 내리는 선택." }
        ] },
        { type: "p", text: "[본문 이어서 — 레벨 제작 과정, 모듈러 구성, 라이팅 등]" }
      ]
    },
    {
      id: "companion", track: "inside", sub: "AI Companion",
      t: "말을 거는 동료", d: "플레이 상황에 따라 대사가 달라지는 AI NPC 다이얼로그 시스템.",
      thumb: "assets/img/lef-wide.jpg", hero: "assets/img/lef-wide.jpg", byline: "AI NPC · 윤동혁", readTime: "4분",
      facts: [ { k: "SYSTEM", v: "AI 다이얼로그" }, { k: "ENGINE", v: "Unreal Engine 5" }, { k: "CREDIT", v: "윤동혁" } ],
      blocks: [
        { type: "p", text: "더 풍부한 사용자 경험을 위해, 플레이 상황에 따라 출력될 NPC 대사에 AI를 연동해 다이얼로그 시스템을 구축했다. 기존 게임의 결정론적 경험보다 더 생동감 있는 반응을 느낄 수 있도록 하는 것이 목표였다." },
        { type: "pictos", items: [
          { icon: "eye", t: "관찰", d: "플레이어의 행동과 위치를 상태값으로 읽는다." },
          { icon: "nodes", t: "판단", d: "상태에 맞는 질문 세트를 골라 AI에 보낸다." },
          { icon: "chat", t: "발화", d: "상황에 맞는 대사로 플레이어에게 말을 건다." }
        ] },
        { type: "p", text: "[본문 이어서 — 전시 환경(네트워크 불안정) 대응, 레프의 성격 설계 등]" }
      ]
    },
    {
      id: "memory", track: "inside", sub: "Narrative",
      t: "흩어진 가족의 기억", d: "오브젝트 하나가 기억 하나를 깨운다. 발견하는 서사의 구조.",
      thumb: "assets/img/family-photo.jpg", hero: "assets/img/earth-catchball.jpg", byline: "시나리오 · 김지숙 / 기획 · 이정희", readTime: "3분",
      facts: [ { k: "THEME", v: "기억 · 가족 · 유대" }, { k: "CREDIT", v: "김지숙 · 이정희" } ],
      blocks: [
        { type: "p", text: "이 게임은 기억과 가족, 그리고 유대라는 보편적인 감정을 다룬다. 여정의 끝에서 지나간 가족의 기억을 함께 지켜낸 Fix와 Ron은 서로에게 새로운 유대를 맺는다. 사라진 기억을 매개로 두 로봇 사이에 새로운 형태의 가족이 탄생하는 것 — 그것이 FOF가 전하고자 하는 메시지다." },
        { type: "h", text: "기억을 깨우는 물건들" },
        { type: "pictos", items: [
          { icon: "belt", t: "비상 벨트 끈", d: "프롤로그의 마지막 순간으로." },
          { icon: "figure", t: "목재 우주인 피규어", d: "올리의 홀로그램." },
          { icon: "pen", t: "헨리의 펜", d: "전력실에 남은 헨리의 홀로그램." },
          { icon: "book", t: "《BUILDING A HOUSE》", d: "숨겨진 문을 여는 단서." }
        ] },
        { type: "img", src: "assets/img/family-photo.jpg", cap: "가족사진 — 헨리 · 캐서린 · 올리 · 론" },
        { type: "img", src: "assets/img/ron-certificate.jpg", cap: "론의 활성화 인증서 — 올리의 낙서가 남아 있다" },
        { type: "pull", text: "“이렇게 잡고 던지면 돼. 한번 던져봐!”<br><small style=\"font:500 13px var(--mono);color:var(--muted)\">— 캐서린, 캐치볼 플래시백</small>" },
        { type: "p", text: "[본문 이어서 — 희미한 홀로그램(론의 손상된 기억)과 지구 플래시백(기억 회수)의 연출 구분 등]" }
      ]
    },
    {
      id: "cinematic", track: "behind", sub: "AI Cinematic",
      t: "AI로 찍은 시네마틱", d: "카메라 앵글, 조명, 인물의 동작까지 프롬프트로 디렉팅하다.",
      thumb: "assets/img/shot-earth-1.jpg", hero: "assets/img/shot-earth-2.jpg", byline: "시네마틱 · 김지숙", readTime: "5분",
      facts: [ { k: "VIDEO", v: "Higgsfield" }, { k: "MUSIC", v: "Suno" }, { k: "CREDIT", v: "김지숙" } ],
      blocks: [
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
        { type: "p", text: "[본문 이어서]" }
      ]
    },
    {
      id: "pipeline", track: "behind", sub: "Pipeline",
      t: "실시간 엔진 × AI 하이브리드", d: "게임 화면과 영상 사이의 이질감을 줄이는 제작 파이프라인.",
      thumb: "assets/img/char-fix.jpg", hero: "", byline: "글 · 담당자", readTime: "5분",
      facts: [ { k: "ENGINE", v: "Unreal Engine 5" }, { k: "DCC", v: "Blender" }, { k: "AI", v: "Higgsfield · Suno · AI 다이얼로그" } ],
      blocks: [
        { type: "p", text: "언리얼 엔진 5로 밀도 높은 시네마틱 비주얼을 연출하고, 시간이 많이 드는 시네마틱 제작에는 AI를 도입해 ‘실시간 엔진과 AI 간 하이브리드 작업 방식’을 채택했다. 여기에 NPC 대사까지 AI로 연동했다." },
        { type: "workflow", title: "파이프라인 개요", steps: [
          { icon: "edit", tool: "PLANNING", t: "기획 · 시나리오", d: "플레이 흐름과 레벨 루프, 장면 구성을 설계한다." },
          { icon: "image", tool: "Blender", t: "컨셉아트 · 캐릭터", d: "세계관 디자인 시트, 캐릭터 모델링과 턴테이블." },
          { icon: "layers", tool: "UE5", t: "레벨 · 인터랙션", d: "레벨 구성, 퍼즐과 캐릭터 조작 피드백 구현." },
          { icon: "nodes", tool: "UE5 + AI", t: "AI NPC 연동", d: "플레이 상황에 맞는 대사를 생성하는 다이얼로그 시스템." },
          { icon: "camera", tool: "UE5 + AI VIDEO", t: "시네마틱 통합", d: "엔진 시퀀스와 AI 영상을 하나의 흐름으로 잇는다." }
        ] },
        { type: "img", src: "", cap: "컨트롤 리그 세팅 / 블루프린트 화면 자리" },
        { type: "p", text: "[본문 이어서]" }
      ]
    },
    {
      id: "making", track: "behind", sub: "Making of",
      t: "네 명이 만든 위버호", d: "시행착오와 팀 이야기, 제작 회고.",
      thumb: "assets/img/intermission.jpg", hero: "assets/img/intermission.jpg", byline: "TEAM FIVEGUYS", readTime: "4분",
      facts: [ { k: "TEAM", v: "4명" }, { k: "EXHIBITION", v: "2026 NCA 쇼케이스" } ],
      blocks: [
        { type: "p", text: "[본문 자리 — 개발 현황 영상, 회의, 전시 현장 이야기]" },
        { type: "video", src: "", cap: "LV1 · LV2 개발 현황" },
        { type: "p", text: "[본문 이어서]" }
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
        parts: ["컨셉아트", "캐릭터 디자인", "플레이어 인터랙션"],
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
        parts: ["게임 기획", "레벨 루프", "UI · UX"],
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
