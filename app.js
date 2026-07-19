// ==========================================================
// Oorlogsdagboek François Stevens — interactie
// ==========================================================

// ---------- typemachine in de hero ----------
(function typewriter() {
  const el = document.getElementById('typewriter');
  const text = "Oorlogsdagboek van\nFrançois Stevens";
  let i = 0;
  function tick() {
    if (i <= text.length) {
      el.innerHTML = text.slice(0, i).replace(/\n/g, '<br>');
      i++;
      setTimeout(tick, text[i - 2] === '\n' ? 350 : 65 + Math.random() * 70);
    }
  }
  setTimeout(tick, 600);
})();

// ---------- tijdlijn opbouwen ----------
(function buildTimeline() {
  const wrap = document.getElementById('timeline');

  // voortgangslijn die meegroeit met het scrollen
  const fill = document.createElement('div');
  fill.className = 'tl-fill';
  wrap.appendChild(fill);

  DIARY.forEach((d, idx) => {
    const side = idx % 2 === 0 ? 'left' : 'right';
    const special = d.day >= 19;
    const badgeLbl = d.dayLabel ? d.dayLabel : 'dag';
    const badgeNum = d.dayLabel ? '✦' : d.day;

    const entry = document.createElement('article');
    entry.className = `entry ${side}`;
    entry.dataset.day = badgeNum;
    entry.dataset.date = d.date;
    entry.dataset.lbl = badgeLbl;
    entry.innerHTML = `
      <div class="entry-badge${special ? ' special' : ''}">
        <span class="b-num">${badgeNum}</span>
        <span class="b-lbl">${badgeLbl}</span>
      </div>
      <div class="entry-card">
        <p class="entry-date">${d.date}</p>
        <h3 class="entry-title">${d.title}</h3>
        <p class="entry-place">${d.place}</p>
        <div class="entry-text">${d.text.split(/\n\n+/).map(p => `<p>${p}</p>`).join('')}</div>
        ${HIST[d.day] ? `<aside class="hist-note">
          <p class="hist-head"><span class="hist-flag"></span>Historische duiding</p>
          <p class="hist-body">${HIST[d.day].text}</p>
          <p class="hist-bron">Bron: ${HIST[d.day].bron}</p>
        </aside>` : ''}
      </div>
      <div class="entry-feature${d.photos.length > 2 ? ' many' : ''}">
        ${d.photos.map((n, i) => {
          const rot = ((i % 2 === 0 ? -1 : 1) * (1.2 + (i % 3) * 0.9)).toFixed(1);
          return `<figure class="feat" style="--rot:${rot}deg">
            <img src="img/stevens-${n}.jpg" loading="lazy"
                 alt="Dagboekpagina, foto ${n}" data-photo="${n}"
                 data-caption="${d.date} — dagboekpagina ${n}">
            <figcaption>Dagboekpagina ${n}</figcaption>
          </figure>`;
        }).join('')}
      </div>`;
    wrap.appendChild(entry);
  });

  // voortgangslijn volgt het midden van het scherm
  function updateFill() {
    const r = wrap.getBoundingClientRect();
    const h = Math.max(0, Math.min(innerHeight * .5 - r.top, r.height));
    fill.style.height = h + 'px';
  }
  addEventListener('scroll', updateFill, { passive: true });
  addEventListener('resize', updateFill);
  updateFill();
})();

// ---------- zwevende dag-indicator ----------
(function dayChip() {
  const chip = document.createElement('div');
  chip.className = 'day-chip';
  chip.innerHTML = '<span class="dc-day"></span><span class="dc-date"></span>';
  document.body.appendChild(chip);
  const dcDay = chip.querySelector('.dc-day');
  const dcDate = chip.querySelector('.dc-date');
  let inTimeline = false;

  // welke dag staat in het midden van het scherm?
  const centerIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const d = en.target.dataset;
      dcDay.textContent = d.lbl === 'dag' ? 'Dag ' + d.day : d.lbl;
      dcDate.textContent = d.date;
      if (inTimeline) chip.classList.add('show');
    });
  }, { rootMargin: '-40% 0px -40%', threshold: 0 });
  document.querySelectorAll('.entry').forEach(el => centerIO.observe(el));

  // enkel tonen zolang de tijdlijn in beeld is
  const sectionIO = new IntersectionObserver(([en]) => {
    inTimeline = en.isIntersecting;
    if (!inTimeline) chip.classList.remove('show');
    else if (dcDay.textContent) chip.classList.add('show');
  }, { threshold: 0 });
  sectionIO.observe(document.getElementById('timeline'));
})();

// ---------- 3D-tilt op de grote foto's ----------
(function tilt() {
  document.querySelectorAll('.feat').forEach(f => {
    f.addEventListener('mousemove', e => {
      const r = f.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      f.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) scale(1.02)`;
    });
    f.addEventListener('mouseleave', () => { f.style.transform = ''; });
  });
})();

// ---------- reveal-animaties ----------
(function reveals() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .entry').forEach(el => io.observe(el));
})();

// ---------- tellers ----------
(function counters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target, target = +el.dataset.count, dur = 1600, t0 = performance.now();
      (function step(t) {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat-num').forEach(el => io.observe(el));
})();

// ---------- scroll-voortgang in nav ----------
(function progress() {
  const bar = document.getElementById('navProgress');
  addEventListener('scroll', () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  }, { passive: true });
})();

// ---------- kaart ----------
(function buildMap() {
  // ruime render-marge: zo blijven de routelijnen ook ver buiten beeld
  // getekend en verschijnt de oude route niet "opnieuw" na het panverschuiven
  const map = L.map('map', {
    scrollWheelZoom: false,
    renderer: L.svg({ padding: 4 })
  });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 17
  }).addTo(map);

  const retreatLatLngs = ROUTE_RETREAT.map(p => [p.lat, p.lng]);
  const returnLatLngs  = ROUTE_RETURN.map(p => [p.lat, p.lng]);

  const retreatLine = L.polyline(retreatLatLngs, {
    color: '#b03a26', weight: 4, opacity: .85, dashArray: '10 7'
  }).addTo(map);
  const returnLine = L.polyline(returnLatLngs, {
    color: '#2c5e28', weight: 4, opacity: .85, dashArray: '2 8'
  }).addTo(map);

  function addMarkers(list, cls) {
    list.forEach(p => {
      if (!p.note && cls === 'return' && p.day === 19 && p.name !== 'Deinze') {
        // tussenstops op de terugweg zonder anekdote: klein puntje
      }
      const icon = L.divIcon({
        className: '',
        html: `<div class="day-marker ${cls}">${p.day}</div>`,
        iconSize: [26, 26], iconAnchor: [13, 13]
      });
      L.marker([p.lat, p.lng], { icon })
        .addTo(map)
        .bindPopup(`
          <span class="popup-day">${p.day <= 19 ? 'Oorlogsdag ' + p.day : (p.day === 20 ? 'Terugkeer · 29 mei' : 'Thuiskomst · 30 mei')}</span>
          <div class="popup-name">${p.name}</div>
          ${p.note ? `<div class="popup-note">«${p.note}»</div>` : ''}`);
    });
  }
  addMarkers(ROUTE_RETREAT, 'retreat');
  addMarkers(ROUTE_RETURN.filter(p => p.note || ['Lier','Aarschot','Diest'].includes(p.name)), 'return');

  const fullBounds = retreatLine.getBounds().extend(returnLine.getBounds());
  map.fitBounds(fullBounds, { padding: [36, 36] });

  // ---- route-animatie: ingezoomd meereizen, met dagboekfragmenten bij de haltes ----
  const playBtn = document.getElementById('playRoute');
  const PLAY_ZOOM = 11;

  // eerste dagboekfoto per dag, voor de fragmenten onderweg
  const dayPhoto = {};
  DIARY.forEach(d => { dayPhoto[d.day] = d.photos[0]; });

  const allPoints = [
    ...ROUTE_RETREAT.map(p => ({ p, line: retreatLine })),
    ...ROUTE_RETURN.map(p => ({ p, line: returnLine }))
  ];

  let playing = false, timer = null, walker = null, popup = null;

  function dayLabel(day) {
    return day <= 19 ? 'Oorlogsdag ' + day : (day === 20 ? 'Terugkeer · 29 mei' : 'Thuiskomst · 30 mei');
  }

  function stopPlayback() {
    playing = false;
    clearTimeout(timer);
    if (walker) { map.removeLayer(walker); walker = null; }
    if (popup) { map.closePopup(popup); popup = null; }
    retreatLine.setLatLngs(retreatLatLngs);
    returnLine.setLatLngs(returnLatLngs);
    map.flyToBounds(fullBounds, { padding: [36, 36], duration: 1.2 });
    playBtn.textContent = '▶ Speel de route af';
  }

  playBtn.addEventListener('click', () => {
    if (playing) { stopPlayback(); return; }
    playing = true;
    playBtn.textContent = '◼ Stop';
    retreatLine.setLatLngs([]);
    returnLine.setLatLngs([]);

    // DOM-marker i.p.v. circleMarker: blijft constant van grootte tijdens het zoomen
    walker = L.marker([allPoints[0].p.lat, allPoints[0].p.lng], {
      icon: L.divIcon({
        className: '',
        html: '<div class="walker-dot"></div>',
        iconSize: [16, 16], iconAnchor: [8, 8]
      }),
      zIndexOffset: 1000, interactive: false
    }).addTo(map);

    // eerst inzoomen op het vertrekpunt, dan pas vertrekken
    map.flyTo([allPoints[0].p.lat, allPoints[0].p.lng], PLAY_ZOOM, { duration: 1.6 });

    let i = 0;
    function step() {
      if (!playing) return;
      if (i >= allPoints.length) {
        // even blijven staan op het eindpunt, dan uitzoomen naar het overzicht
        timer = setTimeout(stopPlayback, 2200);
        return;
      }
      const { p, line } = allPoints[i];
      const ll = [p.lat, p.lng];
      line.addLatLng(ll);
      walker.setLatLng(ll);
      map.panTo(ll, { animate: true, duration: .7, easeLinearity: .3 });

      let delay = 850;
      if (p.note) {
        // halte: toon het bijhorende dagboekfragment in het klein
        const ph = dayPhoto[p.day];
        popup = L.popup({ offset: [0, -12], closeButton: false, autoPan: false, className: 'route-popup' })
          .setLatLng(ll)
          .setContent(`<div class="rp">
              ${ph ? `<img src="img/stevens-${ph}.jpg" alt="Dagboekpagina ${ph}">` : ''}
              <div>
                <span class="popup-day">${dayLabel(p.day)}</span>
                <div class="popup-name">${p.name}</div>
                <div class="popup-note">«${p.note}»</div>
              </div>
            </div>`)
          .openOn(map);
        delay = 2800;
      } else if (popup) {
        map.closePopup(popup);
        popup = null;
      }
      i++;
      timer = setTimeout(step, delay);
    }
    timer = setTimeout(step, 1800);
  });
})();

// ---------- 3D bladerboek ----------
(function flipbook() {
  // volgorde: de kaft (foto 65) eerst, daarna pagina 1 t/m 64
  const SEQ = [65, ...Array.from({ length: 64 }, (_, i) => i + 1)];
  const view = document.getElementById('bookview');
  const book = document.getElementById('book');
  const baseL = document.getElementById('baseL');
  const baseR = document.getElementById('baseR');
  const leaf = document.getElementById('leaf');
  const front = leaf.querySelector('.face.front');
  const back = leaf.querySelector('.face.back');
  const cap = document.getElementById('bvCaption');
  const btnPrev = document.getElementById('bvPrev');
  const btnNext = document.getElementById('bvNext');

  let pos = 0;
  let flipping = false;

  const url = n => `img/stevens-${n}.jpg`;
  const bg = n => `url("${url(n)}")`;

  // helpers: een helft van een spread, de (staande) kaft onvervormd, of leeg
  function setHalf(el, n, side) {
    el.style.backgroundImage = bg(n);
    el.style.backgroundSize = '200% 100%';
    el.style.backgroundPosition = side === 'l' ? '0 0' : '100% 0';
  }
  function setCover(el) {
    el.style.backgroundImage = bg(65);
    el.style.backgroundSize = 'contain';
    el.style.backgroundPosition = 'center';
  }
  function setEmpty(el) {
    el.style.backgroundImage = 'none';
  }

  function caption() {
    const n = SEQ[pos];
    const label = pos === 0 ? 'De kaft — 10 mei · 28 mei 1940' : `Dagboekpagina ${n}`;
    cap.innerHTML = `${label}<span class="bv-count">${pos + 1} / ${SEQ.length}</span>`;
    btnPrev.disabled = pos === 0;
    btnNext.disabled = pos === SEQ.length - 1;
    book.classList.toggle('cover-mode', pos === 0);
  }

  function render() {
    const n = SEQ[pos];
    if (pos === 0) {
      // gesloten boek: kaft onvervormd op de rechterhelft, links niets
      setEmpty(baseL);
      setCover(baseR);
    } else {
      setHalf(baseL, n, 'l');
      setHalf(baseR, n, 'r');
    }
    leaf.style.display = 'none';
    leaf.classList.remove('animate');
    leaf.style.transform = '';
    caption();
    // buurpagina's voorladen zodat het omslaan vlot blijft
    [pos - 1, pos + 1].forEach(p => {
      if (p >= 0 && p < SEQ.length) { const im = new Image(); im.src = url(SEQ[p]); }
    });
  }

  function finishFlip(nextPos) {
    leaf.removeEventListener('transitionend', onEnd);
    pos = nextPos;
    // eerst de onderliggende pagina's definitief zetten, pas het frame
    // daarna het blad verbergen — zo is er geen zichtbare wissel
    const n = SEQ[pos];
    if (pos === 0) {
      setEmpty(baseL);
      setCover(baseR);
    } else {
      setHalf(baseL, n, 'l');
      setHalf(baseR, n, 'r');
    }
    requestAnimationFrame(() => {
      leaf.style.display = 'none';
      leaf.classList.remove('animate');
      leaf.style.transform = '';
      caption();
      flipping = false;
      [pos - 1, pos + 1].forEach(p => {
        if (p >= 0 && p < SEQ.length) { const im = new Image(); im.src = url(SEQ[p]); }
      });
    });
  }
  let onEnd = null;

  function flip(dir) {
    if (flipping) return;
    const target = pos + dir;
    if (target < 0 || target >= SEQ.length) return;
    flipping = true;
    const cur = SEQ[pos], nxt = SEQ[target];

    if (dir > 0) {
      // vooruit: rechterblad slaat naar links om
      leaf.className = 'leaf on-right';
      if (pos === 0) {
        // het boek openslaan: de volledige kaft draait om
        setEmpty(baseL);
        setHalf(baseR, nxt, 'r');
        setCover(front);
        setHalf(back, nxt, 'l');
      } else {
        setHalf(baseL, cur, 'l');
        setHalf(baseR, nxt, 'r');
        setHalf(front, cur, 'r');
        setHalf(back, nxt, 'l');
      }
      leaf.style.display = 'block';
      leaf.style.transform = 'rotateY(0deg)';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        leaf.classList.add('animate');
        // net geen 180°: het blad valt zo nooit exact samen met de pagina eronder
        leaf.style.transform = 'rotateY(-179.6deg)';
      }));
    } else {
      // terug: linkerblad slaat naar rechts om
      leaf.className = 'leaf on-left';
      if (target === 0) {
        // terug naar de gesloten kaft
        setEmpty(baseL);
        setHalf(baseR, cur, 'r');
        setHalf(front, cur, 'l');
        setCover(back);
      } else {
        setHalf(baseL, nxt, 'l');
        setHalf(baseR, cur, 'r');
        setHalf(front, cur, 'l');
        setHalf(back, nxt, 'r');
      }
      leaf.style.display = 'block';
      leaf.style.transform = 'rotateY(0deg)';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        leaf.classList.add('animate');
        leaf.style.transform = 'rotateY(179.6deg)';
      }));
    }

    onEnd = () => finishFlip(target);
    leaf.addEventListener('transitionend', onEnd, { once: true });
    // vangnet voor het geval transitionend niet vuurt
    setTimeout(() => { if (flipping) finishFlip(target); }, 1400);
  }

  function open(photoN) {
    pos = Math.max(0, SEQ.indexOf(photoN));
    flipping = false;
    render();
    view.classList.add('open');
    view.setAttribute('aria-hidden', 'false');
  }
  function close() {
    view.classList.remove('open');
    view.setAttribute('aria-hidden', 'true');
  }

  // openen: via kaft-knop of via eender welke dagboekfoto
  document.getElementById('openBookBtn').addEventListener('click', () => open(65));
  document.addEventListener('click', e => {
    if (e.target.matches('img[data-photo]')) open(+e.target.dataset.photo);
  });

  document.getElementById('hzR').addEventListener('click', () => flip(1));
  document.getElementById('hzL').addEventListener('click', () => flip(-1));
  btnNext.addEventListener('click', () => flip(1));
  btnPrev.addEventListener('click', () => flip(-1));
  document.getElementById('bvClose').addEventListener('click', close);
  view.addEventListener('click', e => { if (e.target === view) close(); });
  document.addEventListener('keydown', e => {
    if (!view.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') flip(1);
    if (e.key === 'ArrowLeft') flip(-1);
  });
})();
