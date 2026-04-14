/* ================================================================
   QuantumDrive.io — main.js
   Theme toggle + data-driven project card renderer
   Reads from assets/data/projects.json
   Last updated: 2026-04-14
   ================================================================ */
(function () {
  'use strict';

  // --- Icon map: icon key → emoji ---
  var ICONS = {
    link:      '🔗',
    brain:     '🧠',
    ledger:    '📒',
    book:      '📖',
    newspaper: '📰',
    quill:     '🪶',
    globe:     '🌐',
    leaf:      '🌿',
    diamond:   '💎',
    hub:       '⟡'
  };

  // --- Category config ---
  var CATEGORIES = [
    { key: 'tech',       label: 'Tech & Infrastructure',   desc: 'Link infrastructure, AI memory, and loyalty systems.' },
    { key: 'publishing', label: 'Publishing & Creative',    desc: 'Books, worldbuilding, and media publishing.' },
    { key: 'services',   label: 'Professional Services',    desc: 'Web design, hosting, and holistic health.' },
    { key: 'ecosystem',  label: 'Ecosystem',                desc: 'The portfolio hub and flagship collections.' }
  ];

  // --- Status label map ---
  var STATUS_LABELS = {
    live:        'Live',
    building:    'Building',
    placeholder: 'Placeholder'
  };

  // ========================
  // Theme toggle
  // ========================
  var root = document.documentElement;
  var btn = document.getElementById('themeBtn');
  var label = document.getElementById('themeLabel');
  var themeState = document.getElementById('themeState');
  var order = ['auto', 'dark', 'light'];

  function setTheme(mode) {
    if (mode === 'auto') {
      root.removeAttribute('data-theme');
      localStorage.removeItem('qd_theme');
    } else {
      root.setAttribute('data-theme', mode);
      localStorage.setItem('qd_theme', mode);
    }
    var display = mode.charAt(0).toUpperCase() + mode.slice(1);
    if (label) label.textContent = display;
    if (themeState) themeState.textContent = display;
  }

  var saved = localStorage.getItem('qd_theme');
  setTheme((saved === 'dark' || saved === 'light') ? saved : 'auto');

  if (btn) {
    btn.addEventListener('click', function () {
      var current = localStorage.getItem('qd_theme') || 'auto';
      var idx = order.indexOf(current);
      setTheme(order[(idx + 1) % order.length]);
    });
  }

  // --- Year ---
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ========================
  // Fetch projects.json and render
  // ========================
  fetch('assets/data/projects.json')
    .then(function (res) { return res.json(); })
    .then(function (projects) {
      renderStats(projects);
      renderCategories(projects);
      updateNavCount(projects);
    })
    .catch(function (err) {
      console.error('Failed to load projects.json:', err);
      var container = document.getElementById('projectSections');
      if (container) {
        container.innerHTML = '<p style="color:var(--bad);padding:24px;">Failed to load project data.</p>';
      }
    });

  // ========================
  // Render stat sidebar
  // ========================
  function renderStats(projects) {
    var totalEl = document.getElementById('statTotal');
    var liveEl = document.getElementById('statLive');
    if (!totalEl || !liveEl) return;

    var total = projects.length;
    var live = projects.filter(function (p) { return p.status === 'live'; }).length;

    totalEl.textContent = String(total);
    liveEl.textContent = String(live);
  }

  // ========================
  // Update nav pill count
  // ========================
  function updateNavCount(projects) {
    var countEl = document.getElementById('projectCount');
    if (countEl) countEl.textContent = String(projects.length);
  }

  // ========================
  // Render category sections with cards
  // ========================
  function renderCategories(projects) {
    var container = document.getElementById('projectSections');
    if (!container) return;

    container.innerHTML = '';

    CATEGORIES.forEach(function (cat) {
      var catProjects = projects.filter(function (p) { return p.category === cat.key; });
      if (catProjects.length === 0) return;

      // Section title
      var titleDiv = document.createElement('div');
      titleDiv.className = 'sectionTitle';
      titleDiv.id = 'cat-' + cat.key;
      titleDiv.innerHTML =
        '<div>' +
          '<h2>' + escapeHtml(cat.label) + '</h2>' +
          '<p>' + escapeHtml(cat.desc) + '</p>' +
        '</div>';
      container.appendChild(titleDiv);

      // Card grid
      var grid = document.createElement('section');
      grid.className = 'cards';
      grid.setAttribute('aria-label', cat.label + ' projects');

      catProjects.forEach(function (p) {
        grid.appendChild(buildCard(p));
      });

      container.appendChild(grid);
    });
  }

  // ========================
  // Build a single project card
  // ========================
  function buildCard(p) {
    var card = document.createElement('article');
    card.className = 'card';

    // Icon + badge row
    var iconEmoji = ICONS[p.icon] || '⟡';
    var statusLabel = STATUS_LABELS[p.status] || p.status;
    var badgeClass = 'badge ' + p.status;

    var top = '<div class="cardTop">' +
      '<div class="icon" aria-hidden="true">' + iconEmoji + '</div>' +
      '<div class="' + badgeClass + '">' + escapeHtml(statusLabel) + '</div>' +
    '</div>';

    // Title + tagline
    var body = '<h3>' + escapeHtml(p.name) + '</h3>' +
      '<p>' + escapeHtml(p.tagline) + '</p>';

    // Bullets
    var bullets = '';
    if (p.bullets && p.bullets.length) {
      bullets = '<ul class="bullets">';
      p.bullets.forEach(function (b) {
        bullets += '<li>' + escapeHtml(b) + '</li>';
      });
      bullets += '</ul>';
    }

    // CTAs
    var ctas = '';
    if (p.ctas && p.ctas.length) {
      ctas = '<div class="cardCtas">';
      p.ctas.forEach(function (cta, i) {
        var isExternal = cta.url.indexOf('http') === 0;
        var cls = i === 0 ? 'btn small primary' : 'btn small linkish';
        var target = isExternal ? ' target="_blank" rel="noopener"' : '';
        var arrow = isExternal ? ' ↗' : '';
        ctas += '<a class="' + cls + '" href="' + escapeHtml(cta.url) + '"' + target + '>' +
          escapeHtml(cta.label) + arrow + '</a>';
      });
      ctas += '</div>';
    }

    card.innerHTML = top + body + bullets + ctas;
    return card;
  }

  // ========================
  // HTML escape helper
  // ========================
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

})();
