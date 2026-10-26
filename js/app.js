/* =========================================================
   FOF 사이트 — 라우터 + 렌더러
   콘텐츠 수정은 js/content.js 에서. 이 파일은 구조/동작만.
   라우트: #/  ·  #/game  ·  #/game/:id  ·  #/team/:id
   ========================================================= */
(function () {
  const C = window.SITE;
  const app = document.getElementById("app");
  const pad = n => String(n).padStart(2, "0");
  let reelTimer = null;
  // 드롭캡은 글자로 시작하는 문단에만 (괄호·따옴표로 시작하면 깨져 보여서 제외)
  const dc = (text, first) => first && /^[A-Za-z0-9가-힣]/.test(text.replace(/<[^>]+>/g, "")) ? "dropcap" : "";

  /* ---------- 미디어 헬퍼: 경로 있으면 이미지/영상, 없으면 자리표시 ---------- */
  function media(src, cls, label, opt) {
    opt = opt || {};
    if (!src) return `<div class="ph ${cls || ""}" ${label ? `data-l="${label}"` : ""}></div>`;
    // 유튜브 링크면 임베드 (용량 큰 플레이 영상은 유튜브에 올리고 링크만 넣는 걸 권장)
    const yt = src.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    if (yt) return `<div class="ph filled ${cls || ""}"><iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0" title="video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
    const isVideo = /\.(mp4|webm|mov)$/i.test(src);
    const inner = isVideo
      ? `<video src="${src}" ${opt.poster ? `poster="${opt.poster}"` : ""} muted playsinline loop autoplay preload="metadata"></video>`
      : `<img src="${src}" alt="${opt.alt || ""}" loading="lazy">`;
    return `<div class="ph filled ${cls || ""}">${inner}</div>`;
  }

  /* ---------- 공통 마스트헤드 ---------- */
  const Mast = on => `
    <header class="mast-bar"><div class="wrap">
      <a class="logo" href="#/">${C.title}<small>${C.subtitle}</small></a>
      <nav>
        <a href="#/game" class="${on === "game" ? "on" : ""}">Game</a>
        <a href="#/game" class="${on === "team" ? "on" : ""}" data-scroll="team-sec">Team</a>
      </nav>
    </div></header>`;

  /* ---------- 픽토그램 그리드 ---------- */
  const Pictos = items => `
    <div class="pictos">
      ${items.map((p, i) => `
        <div class="picto">${icon(p.icon)}<span class="n">${pad(i + 1)}</span><b>${p.t}</b><p>${p.d}</p></div>`).join("")}
    </div>`;

  /* ---------- 기사 본문 블록 ---------- */
  function Block(b, idx) {
    switch (b.type) {
      case "p": return `<p class="${dc(b.text, idx === 0)}">${b.text}</p>`;
      case "h": return `<h3>${b.text}</h3>`;
      case "pull": return `<div class="pull">${b.text}</div>`;
      case "img":
      case "video":
        return `<figure class="inline-fig">${media(b.src, "", b.src ? "" : (b.type === "video" ? "VIDEO" : "IMAGE"), { poster: b.poster })}
          ${b.cap ? `<figcaption class="figcap"><span>${b.cap}</span></figcaption>` : ""}</figure>`;
      case "compare":
        return `<div class="compare">
          <figure>${media(b.a.src, "", "A")}<figcaption>${b.a.cap || "BEFORE"}</figcaption></figure>
          <figure>${media(b.b.src, "", "B")}<figcaption>${b.b.cap || "AFTER"}</figcaption></figure></div>`;
      case "pictos": return Pictos(b.items);
      case "workflow":
        return `<figure class="wf"><figcaption class="label">${b.title || "Workflow"}</figcaption>
          <ol class="wf-steps">
            ${b.steps.map((s, i) => `
              <li class="wf-step">
                <div class="wf-node">${icon(s.icon)}<i>${pad(i + 1)}</i></div>
                <div>${s.tool ? `<span class="wf-tool">${s.tool}</span>` : ""}<b>${s.t}</b><p>${s.d || ""}</p></div>
              </li>`).join("")}
          </ol></figure>`;
      default: return "";
    }
  }

  /* =========================================================
     LANDING
     ========================================================= */
  function Landing() {
    const L = C.landing;
    return `
    <section class="landing">
      <div class="reel">
        ${L.shots.map(s => `<div class="shot">${media(s.src || s.poster, "", "", { poster: s.poster })}</div>`).join("")}
        <div class="l-top"><span class="label">${C.team.name}</span><span class="label">${C.exhibit}</span></div>
        <div class="l-bottom">
          <div class="l-shotcap" id="shotcap"></div>
          <div class="l-title">${C.title}</div>
          <div class="l-sub">${C.subtitle}<span class="cur">_</span></div>
          <p class="l-deck">${L.deck}</p>
          <a class="enter" href="#/game">게임 소개 보기 <span>ENTER</span></a>
          <div class="dots" id="dots">${L.shots.map(() => "<i></i>").join("")}</div>
        </div>
      </div>
      <aside class="qr-side">
        <div class="mast">${C.title}<small>${C.subtitle}</small><div class="label" style="margin-top:10px">${C.issue}</div></div>
        <div>
          <div class="qr-box">${C.qr ? `<img src="${C.qr}" alt="QR" style="width:100%;display:block;image-rendering:pixelated">` : `<canvas id="qr" width="29" height="29"></canvas>`}</div>
          <h3>폰으로 스캔하고<br>이어서 읽어보세요</h3>
          <p>게임 소개 · 캐릭터 · 제작진</p>
        </div>
        <div class="label">${C.credit}</div>
      </aside>
    </section>`;
  }
  function startReel() {
    const shots = [...document.querySelectorAll(".shot")], dots = [...document.querySelectorAll("#dots i")];
    const cap = document.getElementById("shotcap");
    let i = -1;
    const next = () => {
      i = (i + 1) % shots.length;
      shots.forEach((s, j) => s.classList.toggle("on", j === i));
      dots.forEach((d, j) => d.classList.toggle("on", j === i));
      cap.textContent = C.landing.shots[i].cap || "";
      const ph = shots[i].querySelector(".ph");
      if (ph) { ph.style.animation = "none"; void ph.offsetWidth; ph.style.animation = ""; }
    };
    next();
    reelTimer = setInterval(next, 4500);
    drawQR();
  }

  /* =========================================================
     GAME (본지)
     ========================================================= */
  function Game() {
    const I = C.intro, W = C.world, H = C.howToPlay;
    return `${Mast("game")}
    <main class="wrap">
      <section class="cover">
        <div class="issue"><span class="label">${C.issue}</span><span class="label">${C.title} ${C.subtitle}</span></div>
        <h1>${C.cover.title}</h1>
        <p class="deck">${C.cover.deck}</p>
        ${media(C.cover.trailer.src, "cover-img", "TRAILER", { poster: C.cover.trailer.poster })}
        <div class="figcap"><span>${C.cover.trailer.cap}</span><span>Fig. 01</span></div>
      </section>

      <section class="toc">
        <h2 class="label">Contents</h2>
        ${C.articles.map((a, i) => `
          <a href="#/game/${a.id}"><span class="no">${pad(i + 1)}</span>
          <span class="t">${a.t}<small>${a.sub}</small></span><span class="arr">→</span></a>`).join("")}
      </section>

      <section class="feature">
        <div class="cols">
          <div><div class="label">About the Game</div><h2 style="margin-top:10px">${I.head}</h2></div>
          <div class="body">
            ${I.text.map((p, i) => `<p class="${dc(p, i === 0)}">${p}</p>`).join("")}
            ${I.pull ? `<div class="pull">${I.pull}</div>` : ""}
          </div>
        </div>
      </section>

      <section class="feature world">
        <div class="label">World</div>
        <div class="world-grid" style="margin-top:18px">
          <div><div class="year">${W.year}</div><h2 style="margin-top:14px">${W.head}</h2></div>
          <div class="body">${W.text.map(p => `<p>${p}</p>`).join("")}</div>
        </div>
        <dl class="world-facts">${W.facts.map(f => `<div><dt>${f.k}</dt><dd>${f.v}</dd></div>`).join("")}</dl>
        ${W.img !== undefined ? media(W.img, "world-img", "WORLD") : ""}
      </section>

      <section class="feature">
        <div class="label">How to Play</div>
        <h2>${H.head}</h2>
        ${Pictos(H.items)}
      </section>

      <section class="feature">
        <div class="label">Characters</div>
        <h2>등장인물</h2>
        <div class="chars">
          ${C.characters.map(c => `
            <article class="char">${media(c.img, "", c.name.toUpperCase())}
            <h3>${c.name}${c.kr ? `<small>${c.kr}</small>` : ""}</h3><div class="role">${c.role}</div><p>${c.desc}</p></article>`).join("")}
        </div>
        ${C.subCharacters.length ? `
        <div class="cast-sub">
          <div class="label">Supporting Cast</div>
          <div class="subs">
            ${C.subCharacters.map(c => `
              <div class="sub">${media(c.img, "")}
              <div><div class="role">${c.role}</div><b>${c.name}</b><p>${c.desc}</p></div></div>`).join("")}
          </div>
        </div>` : ""}
      </section>

      <section class="feature">
        <div class="label">Features</div>
        <h2>더 깊이 읽기</h2>
        ${Object.entries(C.tracks).map(([key, name], ti) => `
          <div class="track"><span class="label">Part ${"AB"[ti] || ti + 1}</span><h3>${name}</h3></div>
          <div class="stories">
            ${C.articles.filter(a => a.track === key).map(a => `
              <a class="story" href="#/game/${a.id}">${media(a.thumb, "", a.sub.toUpperCase())}
              <div class="label">${a.sub}</div><h3>${a.t}</h3><p>${a.d}</p><span class="more">기사 읽기</span></a>`).join("")}
          </div>`).join("")}
      </section>

      <section class="feature" id="team-sec">
        <div class="team-head">
          <div><div class="label">The Team</div><h2 style="margin-top:10px">${C.team.name}</h2></div>
          <p>${C.team.intro}</p>
        </div>
        <div class="members">
          ${C.team.members.map((m, i) => `
            <a class="mcard ${m.you ? "is-you" : ""}" href="#/team/${m.id}">
              ${m.you ? `<div class="ph you" data-l="${pad(i + 1)} / ${pad(C.team.members.length)}"></div>` : media(m.img, "light", "PORTRAIT")}
              <b>${m.n}</b><span>${m.r}</span></a>`).join("")}
        </div>
      </section>

      <footer class="colophon">
        <div class="logo">${C.title}<small>${C.subtitle}</small></div>
        <div class="links">${C.links.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}</div>
        <div>${C.credit}</div>
      </footer>
    </main>`;
  }

  /* =========================================================
     ARTICLE
     ========================================================= */
  function Article(id) {
    const i = Math.max(0, C.articles.findIndex(a => a.id === id));
    const a = C.articles[i], nx = C.articles[(i + 1) % C.articles.length];
    return `${Mast("game")}
    <main>
      <div class="wrap">
        <header class="art-head">
          <a class="back" href="#/game">본지로</a>
          <div class="label">${pad(i + 1)} — ${a.sub}</div>
          <h1>${a.t}</h1>
          <p class="deck">${a.d}</p>
          <div class="byline"><span class="label">${a.byline || ""}</span>${a.readTime ? `<span class="label">읽는 시간 ${a.readTime}</span>` : ""}</div>
        </header>
        ${media(a.hero, "art-hero", "HERO")}
        <div class="art-body">
          <div class="body">${(a.blocks || []).map(Block).join("")}</div>
          ${a.facts && a.facts.length ? `
          <aside class="aside">
            <div class="label">Fact Sheet</div>
            <dl>${a.facts.map(f => `<dt>${f.k}</dt><dd>${f.v}</dd>`).join("")}</dl>
          </aside>` : ""}
        </div>
        <a class="next" href="#/game/${nx.id}"><span class="label">Next Story</span><div class="t">${nx.t}</div></a>
      </div>
    </main>`;
  }

  /* =========================================================
     MEMBER
     ========================================================= */
  function Member(id) {
    const ms = C.team.members, i = Math.max(0, ms.findIndex(m => m.id === id));
    const m = ms[i], pv = ms[(i - 1 + ms.length) % ms.length], nx = ms[(i + 1) % ms.length];
    const count = `${C.team.name} · ${pad(i + 1)}/${pad(ms.length)}`;
    const left = m.you
      ? `<div class="ph you portrait" data-l="${pad(i + 1)} / ${pad(ms.length)}"></div>`
      : media(m.img, "light portrait", "PORTRAIT");
    const right = m.you ? `
        <div class="you-cta">
          ${m.now ? `<div class="dark"><span class="label">NOW</span><b>${m.now.t}</b><p>${m.now.d}</p></div>` : ""}
          ${m.later ? `<div><span class="label">COMING SOON</span><b>${m.later.t}</b><p>${m.later.d}</p></div>` : ""}
        </div>` : `
        <div class="label" style="margin-top:20px">Selected Works</div>
        <div class="works">${(m.works || []).map((w, k) => media(w, "", `WORK ${pad(k + 1)}`)).join("")}</div>
        <div class="mem-links">${(m.links || []).map(l => `<a href="${l.href}">${l.label}</a>`).join("")}</div>`;
    return `${Mast("team")}
    <main class="wrap">
      <section class="mem">
        <div><a class="back" href="#/game" data-scroll="team-sec">팀으로</a>${left}</div>
        <div>
          <div class="label">${count}</div>
          <h1>${m.n}</h1>
          <div class="role">${m.r}</div>
          ${m.quote ? `<div class="quote">${m.quote}</div>` : ""}
          <div class="label">Parts</div>
          <div class="parts">${m.parts.map(p => `<span>${p}</span>`).join("")}</div>
          <div class="body">${(m.body || []).map(p => `<p>${p}</p>`).join("")}</div>
          ${right}
        </div>
      </section>
      <nav class="mem-nav">
        <a href="#/team/${pv.id}"><span>PREV</span>${pv.n}</a>
        <a href="#/team/${nx.id}"><span>NEXT</span>${nx.n}</a>
      </nav>
    </main>`;
  }

  /* =========================================================
     ROUTER
     ========================================================= */
  function route() {
    clearInterval(reelTimer);
    const [a, b] = location.hash.replace(/^#\/?/, "").split("/");
    let html;
    if (!a) html = Landing();
    else if (a === "game" && b) html = Article(b);
    else if (a === "team" && b) html = Member(b);
    else html = Game();
    app.innerHTML = html;
    app.style.animation = "none"; void app.offsetWidth; app.style.animation = "";
    window.scrollTo(0, 0);
    if (!a) startReel();
  }
  window.addEventListener("hashchange", route);

  /* 팀 섹션 스크롤 (해시 라우팅과 충돌 방지) */
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-scroll]");
    if (!el) return;
    e.preventDefault();
    const go = () => document.getElementById(el.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
    if (location.hash !== "#/game") { location.hash = "#/game"; setTimeout(go, 80); }
    else go();
  });

  /* 가짜 QR — siteUrl 확정되면 실제 QR 이미지로 교체 예정 */
  function drawQR() {
    const cv = document.getElementById("qr");
    if (!cv) return;
    const x = cv.getContext("2d"), N = 29;
    let s = 11;
    const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
    x.fillStyle = "#fff"; x.fillRect(0, 0, N, N); x.fillStyle = "#000";
    for (let i = 2; i < N - 2; i++) for (let j = 2; j < N - 2; j++) if (r() > .52) x.fillRect(i, j, 1, 1);
    const f = (ox, oy) => {
      x.fillStyle = "#fff"; x.fillRect(ox - 1, oy - 1, 9, 9);
      x.fillStyle = "#000"; x.fillRect(ox, oy, 7, 7);
      x.fillStyle = "#fff"; x.fillRect(ox + 1, oy + 1, 5, 5);
      x.fillStyle = "#000"; x.fillRect(ox + 2, oy + 2, 3, 3);
    };
    f(2, 2); f(N - 9, 2); f(2, N - 9);
  }

  /* 키오스크 모드: 주소 끝에 ?kiosk */
  const proto = document.getElementById("proto");
  function setKiosk(on) {
    document.body.classList.toggle("kiosk", on);
    if (proto) proto.textContent = on ? "모바일로 보기" : "키오스크 미리보기";
  }
  setKiosk(new URLSearchParams(location.search).has("kiosk"));
  if (proto) proto.onclick = () => {
    const on = !document.body.classList.contains("kiosk");
    setKiosk(on);
    if (on) location.hash = "#/";
  };

  route();
})();
