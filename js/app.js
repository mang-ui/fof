/* =========================================================
   FOF 사이트 — 라우터 + 렌더러
   콘텐츠 수정은 js/content.js 에서. 이 파일은 구조/동작만.
   라우트: #/ (랜딩 → 스크롤로 본지)  ·  #/game (같은 페이지, 본지 위치)  ·  #/game/:id  ·  #/team/:id
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
    <header class="mast-bar" id="mag"><div class="wrap">
      <a class="logo" href="#/">${C.title}<small>${C.subtitle}</small></a>
      <nav>
        <a href="#/game" class="${on === "game" ? "on" : ""}">Game</a>
        <a href="#/game" class="${on === "team" ? "on" : ""}" data-scroll="team-sec">Team</a>
      </nav>
    </div></header>`;

  /* ---------- 픽토그램 그리드 ---------- */
  const Pictos = items => `
    <div class="pictos${items.length === 3 ? " three" : ""}">
      ${items.map((p, i) => p.go
        ? `<a class="picto" href="#/game/${p.go}">${icon(p.icon)}<span class="n">${pad(i + 1)}</span><b>${p.t}</b><p>${p.d}</p><span class="more">${(C.articles.find(a => a.id === p.go) || {}).t || "기사"}</span></a>`
        : `<div class="picto">${icon(p.icon)}<span class="n">${pad(i + 1)}</span><b>${p.t}</b><p>${p.d}</p></div>`).join("")}
    </div>`;

  /* ---------- 기사 카드 · 슬라이더 ---------- */
  const Story = a => `
    <a class="story" href="#/game/${a.id}">${media(a.thumb, "", a.sub.toUpperCase(), { poster: a.poster })}
    <div class="story-text"><div class="label">${a.sub}</div>${Keys(a)}<h3>${a.t}</h3><p>${a.d}</p><span class="more">기사 읽기</span></div></a>`;
  const arrow = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
  const Slider = list => `
    <div class="slider">
      <button class="sl-btn sl-prev" type="button" aria-label="이전 카드" hidden>${arrow("M15 5l-7 7 7 7")}</button>
      <div class="slides">${list.map(Story).join("")}</div>
      <button class="sl-btn sl-next" type="button" aria-label="다음 카드" hidden>${arrow("M9 5l7 7-7 7")}</button>
    </div>`;
  // 넘칠 때만 화살표를 보이고, 누르면 카드 한 장만큼 민다
  function initSliders() {
    document.querySelectorAll(".slider").forEach(sl => {
      const row = sl.querySelector(".slides"), prev = sl.querySelector(".sl-prev"), next = sl.querySelector(".sl-next");
      const step = () => (row.firstElementChild?.offsetWidth || row.clientWidth) + parseFloat(getComputedStyle(row).columnGap || 0);
      const sync = () => {
        const ph = row.querySelector(".ph");   // 화살표는 영상 박스 세로 가운데
        if (ph) prev.style.top = next.style.top = ph.offsetTop + ph.offsetHeight / 2 + "px";
        prev.hidden = row.scrollLeft <= 4;
        next.hidden = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4;
      };
      prev.onclick = () => row.scrollBy({ left: -step(), behavior: "smooth" });
      next.onclick = () => row.scrollBy({ left: step(), behavior: "smooth" });
      row.addEventListener("scroll", sync, { passive: true });
      window.addEventListener("resize", sync);
      sync();
    });
  }

  /* ---------- 크레딧: 파트별 MAIN / SUB ---------- */
  const Byline = a => (a.credits || []).map(c => `${c.part} · ${c.main.map(p => p.n).join(", ")}`).join(" / ");
  const Credits = a => !a.credits ? "" : `
    <div class="label credits-head">Credits</div>
    <div class="credits">${a.credits.map(c => `
      <div class="cr"><b>${c.part}</b>
        ${[...c.main.map(p => [p, "MAIN"]), ...(c.sub || []).map(p => [p, "SUB"])].map(([p, tag]) => `
        <p><span class="role-tag${tag === "MAIN" ? " main" : ""}">${tag}</span>${p.n}${p.w ? `<small>${p.w}</small>` : ""}</p>`).join("")}
      </div>`).join("")}
    </div>`;

  /* ---------- 플레이 루프 키워드 칩 ---------- */
  const Keys = a => a.keys && a.keys.length ? `<div class="keys">${a.keys.map(k => `<span class="key">${k}</span>`).join("")}</div>` : "";

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
      // 세로 사진 두 장을 나란히 — 원본 비율 그대로, 자르지 않는다
      case "pair":
        return `<div class="pair">${b.items.map(it => `<figure class="inline-fig">${media(it.src, "", "IMAGE")}
          ${it.cap ? `<figcaption class="figcap"><span>${it.cap}</span></figcaption>` : ""}</figure>`).join("")}</div>`;
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
          <a class="enter" href="#/game" data-scroll="mag">게임 소개 보기 <span>SCROLL ↓</span></a>
          <div class="dots" id="dots">${L.shots.map(() => "<i></i>").join("")}</div>
        </div>
        <a class="scroll-cue" href="#/game" data-scroll="mag" aria-label="아래로 스크롤해 게임 소개 보기"><span></span></a>
      </div>
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
        ${W.img !== undefined ? media(W.img, "world-img", "WORLD", { poster: W.poster }) : ""}
      </section>

      <section class="feature">
        <div class="label">How to Play</div>
        <h2>${H.head}</h2>
        ${Pictos(H.items)}
        ${H.loop ? `<p class="loop-note"><span class="label">Core Loop</span>${H.loop}</p>` : ""}
      </section>

      <section class="feature">
        <div class="label">Characters</div>
        <h2>등장인물</h2>
        <div class="chars">
          ${C.characters.map(c => `
            <article class="char">${media(c.img, "", c.name.toUpperCase(), { poster: c.poster })}
            <h3>${c.name}${c.kr ? `<small>${c.kr}</small>` : ""}</h3><div class="role">${c.role}</div><p>${c.desc}</p></article>`).join("")}
        </div>
        ${C.subCharacters.length ? `
        <div class="cast-sub">
          <div class="label">Supporting Cast</div>
          <div class="subs">
            ${C.subCharacters.map(c => `
              <div class="sub">${media(c.img, "", "", { poster: c.poster })}
              <div><div class="role">${c.role}</div><b>${c.name}</b><p>${c.desc}</p></div></div>`).join("")}
          </div>
        </div>` : ""}
      </section>

      <section class="feature">
        <div class="label">Features</div>
        <h2>더 깊이 읽기</h2>
        ${Object.entries(C.tracks).map(([key, name], ti) => {
          const list = C.articles.filter(a => a.track === key);
          return `
          <div class="track"><span class="label">Part ${"AB"[ti] || ti + 1}</span><h3>${name}</h3></div>
          ${list.length > 1 ? Slider(list) : `<div class="stories one">${list.map(Story).join("")}</div>`}`;
        }).join("")}
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
          ${Keys(a)}
          <h1>${a.t}</h1>
          <p class="deck">${a.d}</p>
          <div class="byline"><span class="label">${a.byline || Byline(a)}</span>${a.readTime ? `<span class="label">읽는 시간 ${a.readTime}</span>` : ""}</div>
        </header>
        ${media(a.hero, "art-hero", "HERO", { poster: a.poster })}
        <div class="art-body">
          <div class="body">${(a.blocks || []).map(Block).join("")}</div>
          ${(a.facts && a.facts.length) || a.credits ? `
          <aside class="aside">
            ${a.facts && a.facts.length ? `<div class="label">Fact Sheet</div>
            <dl>${a.facts.map(f => `<dt>${f.k}</dt><dd>${f.v}</dd>`).join("")}</dl>` : ""}
            ${Credits(a)}
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
    const home = isHome();
    let html;
    if (a === "game" && b) html = Article(b);
    else if (a === "team" && b) html = Member(b);
    else html = Landing() + Game();   // 랜딩과 본지는 한 페이지 — 스크롤로 이어진다
    app.innerHTML = html;
    app.style.animation = "none"; void app.offsetWidth; app.style.animation = "";
    const mag = a === "game" && document.getElementById("mag");
    window.scrollTo({ top: mag ? mag.offsetTop : 0, behavior: "instant" });
    if (home) { startReel(); initSliders(); }
  }
  const isHome = () => { const [a, b] = location.hash.replace(/^#\/?/, "").split("/"); return !a || (a === "game" && !b); };
  window.addEventListener("hashchange", route);

  /* 랜딩 스크롤 효과: 내려갈수록 랜딩이 어두워지며 글자가 올라가고,
     랜딩 중간에서 손을 떼면 본지(또는 맨 위)로 부드럽게 붙는다 */
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let snapT = null, snapping = false, lastY = 0, dir = 1;
  window.addEventListener("scroll", () => {
    const land = document.querySelector(".landing");
    if (!land) return;
    const h = land.offsetHeight, y = window.scrollY;
    if (y !== lastY) { dir = y > lastY ? 1 : -1; lastY = y; }
    land.style.setProperty("--p", Math.min(1, y / h).toFixed(3));
    if (still) return;
    clearTimeout(snapT);
    if (snapping) { snapT = setTimeout(() => { snapping = false; }, 160); return; }
    snapT = setTimeout(() => {
      if (y <= 0 || y >= h - 2) return;
      snapping = true;
      // 내리는 중이면 조금만 내려도 본지로, 올리는 중이면 조금만 올려도 맨 위로
      window.scrollTo({ top: (dir > 0 ? y > h * 0.1 : y > h * 0.9) ? h : 0, behavior: "smooth" });
    }, 140);
  }, { passive: true });

  /* 팀 섹션 스크롤 (해시 라우팅과 충돌 방지) */
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-scroll]");
    if (!el) return;
    e.preventDefault();
    const go = () => document.getElementById(el.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
    if (!isHome()) { location.hash = "#/game"; setTimeout(go, 80); }
    else go();
  });

  route();
})();
