/* =========================================================
   픽토그램 세트 — 24×24 라인 아이콘, 색은 글자색을 따라감
   새 아이콘 추가: 이름: '<svg 내부 도형>' 형태로 한 줄 추가
   ========================================================= */
window.ICONS = {
  ship:    '<path d="M12 3c3 2 5 6 5 10l-2 3H9l-2-3c0-4 2-8 5-10z"/><circle cx="12" cy="10" r="1.8"/><path d="M9 16l-1 4 4-2 4 2-1-4"/>',
  robot:   '<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V5"/><circle cx="12" cy="4" r="1"/><circle cx="9.5" cy="13" r="1.2"/><circle cx="14.5" cy="13" r="1.2"/><path d="M2 12v3M22 12v3"/>',
  memory:  '<rect x="3" y="7" width="14" height="12" rx="1.5"/><path d="M7 7V5h14v12h-4"/><circle cx="8" cy="11.5" r="1.4"/><path d="M3 17l4-3 3 2 3-3 4 4"/>',
  tap:     '<path d="M5 4l6.5 16 2-6.5 6.5-2z"/>',
  heart:   '<path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  eye:     '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  door:    '<path d="M6 21V4h12v17"/><path d="M3 21h18"/><circle cx="15" cy="12.5" r=".8"/>',
  power:   '<path d="M13 3L5 13h6l-1 8 8-10h-6z"/>',
  chat:    '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
  puzzle:  '<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="14" y="14" width="6.5" height="6.5" rx="1" transform="rotate(12 17.25 17.25)"/>',
  camera:  '<rect x="3" y="7" width="13" height="10" rx="1.5"/><path d="M16 11l5-3v8l-5-3z"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/>',
  gear:    '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  nodes:   '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6h4l6 6M7 18h4l6-6"/>',
  mic:     '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
  image:   '<rect x="3" y="4" width="18" height="16" rx="1.5"/><circle cx="9" cy="10" r="1.8"/><path d="M3 18l5-5 4 4 3-3 6 6"/>',
  edit:    '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
  wrench:  '<path d="M14.5 4.5a4.5 4.5 0 00-5.6 5.6L3.5 15.5a2.1 2.1 0 003 3l5.4-5.4a4.5 4.5 0 005.6-5.6l-2.7 2.7-2.4-.6-.6-2.4z"/>',
  swap:    '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
  layers:  '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',
  film:    '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
  butterfly:'<path d="M12 7v12"/><path d="M12 10C10 5 4 3 3.5 7S7 12 12 12"/><path d="M12 10c2-5 8-7 8.5-3S17 12 12 12"/><path d="M12 12c-3 0-6 2-5 5s4 0 5-3M12 12c3 0 6 2 5 5s-4 0-5-3"/>',
  book:    '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19V5M8 7h7"/>',
  belt:    '<rect x="3" y="9" width="18" height="6" rx="1.5"/><rect x="9" y="7.5" width="6" height="9" rx="1"/><path d="M12 10.5v3"/>',
  pen:     '<path d="M15 4l5 5L9 20H4v-5z"/><path d="M13 6l5 5"/>',
  figure:  '<circle cx="12" cy="5.5" r="2.5"/><path d="M8 21v-6H6.5v-4.5a2 2 0 012-2h7a2 2 0 012 2V15H16v6"/><path d="M12 13v8"/>',
  branch:  '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="8" r="2"/><path d="M6 7v10M6 13c0-3 4-5 10-5"/>'
};

window.icon = function (name, cls) {
  const body = window.ICONS[name] || window.ICONS.sparkle;
  return `<svg class="ico ${cls || ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
};
