// ==========================================================
// i18n — Nederlands · Français · English · Deutsch
// ==========================================================

const I18N = (() => {
  const SUPPORTED = ['nl', 'fr', 'en', 'de'];
  const STORAGE_KEY = 'oorlogsdagboek-lang';

  const ui = {
    nl: {
      metaTitle: 'Oorlogsdagboek François Stevens — 10 mei · 28 mei 1940',
      metaDescription: 'Interactieve website rond het handgeschreven oorlogsdagboek van soldaat François Stevens tijdens de Achttiendaagse Veldtocht (10–28 mei 1940).',
      heroKicker: 'Oorlogsdagboek · De Achttiendaagse Veldtocht',
      typewriter: 'Oorlogsdagboek van\nFrançois Stevens',
      heroSubHtml: 'Soldaat <strong>François Stevens</strong> — Milicien der klas 1938<br>1<sup>e</sup> Regiment Artillerie · III<sup>e</sup> Groep · 7<sup>e</sup> Batterij · Kanon n° 211<br><span class="stamnr">Stamnummer 151/41689</span>',
      heroDatesHtml: '10 MEI <span class="dash">—</span> 28 MEI 1940',
      scrollAria: 'Scroll naar beneden',
      navDiary: 'Het dagboek',
      navMap: 'De kaart',
      navTimeline: 'De tijdlijn',
      navEpilogue: 'Epiloog',
      portraitCaption: 'Soldaat François Stevens — portret en identiteitspagina',
      portraitAlt: 'Portret van soldaat François Stevens in overjas, met zijn Adrianhelm op een sokkel, 1940',
      portraitFig: 'François Stevens, schrijver van dit dagboek (mei 1940)',
      introTitleHtml: 'Een klein schriftje,<br>een grote geschiedenis',
      introP1Html: 'Na een mobilisatie van <strong>259 dagen</strong> wordt het Belgische leger op 10 mei 1940 in de oorlog tegen Duitsland betrokken. François Stevens, kleermaker en magazijnier van zijn batterij, dient aan het kanon T.R.A. 75 — <em>n° 211</em>.',
      introP2: 'In een geruit schoolschriftje, versierd met de Belgische driekleur, hield hij dag na dag bij wat zijn batterij overkwam: van de eerste Duitse verkenningsvliegtuigen boven Diepenbeek tot de capitulatie, de krijgsgevangenschap en zijn ontsnapping — in burgerkleren, met een geleende kinderwagen, terug naar huis.',
      introQuote: '«Samen met de geallieerde legers zullen wij den vijand bestrijden.»',
      bookCoverAlt: 'De kaft van het dagboek',
      bookBtnHtml: 'Blader door het boekje<br><small>alle 65 pagina\'s, blad per blad</small>',
      statWarDays: 'oorlogsdagen',
      statMobilisation: 'dagen mobilisatie',
      statShots: 'schoten op één dag',
      statKmHome: 'km terug naar huis',
      mapTitle: 'De route van de batterij',
      mapSub: 'Van Diepenbeek tot Hooglede — en te voet, per fiets en op Duitse camions weer naar huis. Wissel rechtsboven naar de NGI-kaart van 1939 voor het wegennet van toen.',
      legendRetreat: '— De terugtocht (10–27 mei)',
      legendReturn: '— De terugkeer naar huis (28–30 mei)',
      basemapHistoric: 'Kaart 1939 (NGI)',
      basemapModern: 'Moderne kaart',
      mapHintBefore: 'Klik op de punten voor een fragment uit het dagboek. ',
      playRoute: '▶ Speel de route af',
      stopRoute: '◼ Stop',
      timelineTitle: 'Dag na dag',
      timelineSub: 'De volledige transcriptie, in de woorden en de spelling van 1940.',
      timelineSubTranslated: 'Vertaling van de transcriptie; het Nederlands origineel behoudt de spelling van 1940.',
      histHead: 'Historische duiding',
      histSource: 'Bron',
      dayPrefix: 'Dag ',
      dayBadge: 'dag',
      warDay: 'Oorlogsdag ',
      returnDay20: 'Terugkeer · 29 mei',
      returnDay21: 'Thuiskomst · 30 mei',
      pageAlt: 'Dagboekpagina, foto ',
      pageCaption: ' — dagboekpagina ',
      pageFig: 'Dagboekpagina ',
      epilogueTitle: 'Epiloog',
      epilogueQuote: '«Helaas, deze tehuiskomst zal de grootste teleurstelling zijn die ik tot hiertoe meemaakte. Ik vind de deuren gesloten en niemand tehuis.»',
      epilogueDetail: 'In drie dagen legde François Stevens zo\'n 210 kilometer af — per fiets, op een koolkar, te voet en op Duitse vrachtwagens. Achteraan in het schriftje plakte hij een portret van koning Leopold III, met daaronder één zin:',
      epilogueToll: '5.882 Belgische militairen sneuvelden',
      epiloguePhotoAlt: 'Laatste pagina van het dagboek met portret van Leopold III',
      epiloguePhotoFig: 'De laatste pagina van het dagboek',
      footerHtml: 'Oorlogsdagboek van François Stevens · 1<sup>e</sup> Regiment Artillerie · 10 – 28 mei 1940',
      footerSmall: 'Transcriptie van het originele handschrift. Onleesbare passages zijn aangeduid met [onleesbaar].',
      closeAria: 'Sluiten',
      prevPage: 'Vorige pagina',
      nextPage: 'Volgende pagina',
      bookHint: 'Klik op de rechter- of linkerhelft om te bladeren · pijltjestoetsen werken ook',
      bookCoverLabel: 'De kaft — 10 mei · 28 mei 1940',
      langLabel: 'Taal'
    },
    fr: {
      metaTitle: 'Journal de guerre de François Stevens — 10 mai · 28 mai 1940',
      metaDescription: 'Site interactif autour du journal de guerre manuscrit du soldat François Stevens pendant la Campagne des Dix-huit Jours (10–28 mai 1940).',
      heroKicker: 'Journal de guerre · La Campagne des Dix-huit Jours',
      typewriter: 'Journal de guerre de\nFrançois Stevens',
      heroSubHtml: 'Soldat <strong>François Stevens</strong> — Milicien de la classe 1938<br>1<sup>er</sup> Régiment d\'Artillerie · III<sup>e</sup> Groupe · 7<sup>e</sup> Batterie · Canon n° 211<br><span class="stamnr">Matricule 151/41689</span>',
      heroDatesHtml: '10 MAI <span class="dash">—</span> 28 MAI 1940',
      scrollAria: 'Défiler vers le bas',
      navDiary: 'Le journal',
      navMap: 'La carte',
      navTimeline: 'La chronologie',
      navEpilogue: 'Épilogue',
      portraitCaption: 'Soldat François Stevens — portrait et page d\'identité',
      portraitAlt: 'Portrait du soldat François Stevens en manteau, avec son casque Adrian sur un socle, 1940',
      portraitFig: 'François Stevens, auteur de ce journal (mai 1940)',
      introTitleHtml: 'Un petit cahier,<br>une grande histoire',
      introP1Html: 'Après une mobilisation de <strong>259 jours</strong>, l\'armée belge est engagée le 10 mai 1940 dans la guerre contre l\'Allemagne. François Stevens, tailleur et magasinier de sa batterie, sert au canon T.R.A. 75 — <em>n° 211</em>.',
      introP2: 'Dans un cahier d\'écolier quadrillé, orné du drapeau belge, il nota jour après jour ce qui arrivait à sa batterie : des premiers avions de reconnaissance allemands au-dessus de Diepenbeek jusqu\'à la capitulation, la captivité et son évasion — en civil, avec une poussette empruntée, jusqu\'à la maison.',
      introQuote: '« Ensemble avec les armées alliées, nous combattrons l\'ennemi. »',
      bookCoverAlt: 'La couverture du journal',
      bookBtnHtml: 'Feuilleter le carnet<br><small>les 65 pages, feuille par feuille</small>',
      statWarDays: 'jours de guerre',
      statMobilisation: 'jours de mobilisation',
      statShots: 'coups en un jour',
      statKmHome: 'km pour rentrer',
      mapTitle: 'L\'itinéraire de la batterie',
      mapSub: 'De Diepenbeek à Hooglede — puis à pied, à vélo et sur des camions allemands, le chemin du retour. Passez en haut à droite à la carte IGN de 1939 pour le réseau routier d\'alors.',
      legendRetreat: '— La retraite (10–27 mai)',
      legendReturn: '— Le retour à la maison (28–30 mai)',
      basemapHistoric: 'Carte 1939 (IGN)',
      basemapModern: 'Carte moderne',
      mapHintBefore: 'Cliquez sur les points pour un extrait du journal. ',
      playRoute: '▶ Lire la route',
      stopRoute: '◼ Stop',
      timelineTitle: 'Jour après jour',
      timelineSub: 'La transcription complète, dans les mots et l\'orthographe de 1940.',
      timelineSubTranslated: 'Traduction de la transcription ; l\'original néerlandais conserve l\'orthographe de 1940.',
      histHead: 'Éclairage historique',
      histSource: 'Source',
      dayPrefix: 'Jour ',
      dayBadge: 'jour',
      warDay: 'Jour de guerre ',
      returnDay20: 'Retour · 29 mai',
      returnDay21: 'Retour au foyer · 30 mai',
      pageAlt: 'Page du journal, photo ',
      pageCaption: ' — page du journal ',
      pageFig: 'Page du journal ',
      epilogueTitle: 'Épilogue',
      epilogueQuote: '« Hélas, ce retour au foyer sera la plus grande déception que j\'aie connue jusqu\'ici. Je trouve les portes fermées et personne à la maison. »',
      epilogueDetail: 'En trois jours, François Stevens parcourut quelque 210 kilomètres — à vélo, sur une charrette à charbon, à pied et sur des camions allemands. À la fin du carnet, il colla un portrait du roi Léopold III, avec en dessous une seule phrase :',
      epilogueToll: '5 882 militaires belges tombèrent',
      epiloguePhotoAlt: 'Dernière page du journal avec le portrait de Léopold III',
      epiloguePhotoFig: 'La dernière page du journal',
      footerHtml: 'Journal de guerre de François Stevens · 1<sup>er</sup> Régiment d\'Artillerie · 10 – 28 mai 1940',
      footerSmall: 'Transcription du manuscrit original. Les passages illisibles sont indiqués par [illisible].',
      closeAria: 'Fermer',
      prevPage: 'Page précédente',
      nextPage: 'Page suivante',
      bookHint: 'Cliquez sur la moitié droite ou gauche pour tourner les pages · les flèches du clavier fonctionnent aussi',
      bookCoverLabel: 'La couverture — 10 mai · 28 mai 1940',
      langLabel: 'Langue'
    },
    en: {
      metaTitle: 'War diary of François Stevens — 10 May · 28 May 1940',
      metaDescription: 'Interactive site about the handwritten war diary of soldier François Stevens during the Eighteen Days\' Campaign (10–28 May 1940).',
      heroKicker: 'War diary · The Eighteen Days\' Campaign',
      typewriter: 'War diary of\nFrançois Stevens',
      heroSubHtml: 'Soldier <strong>François Stevens</strong> — Militia class of 1938<br>1<sup>st</sup> Artillery Regiment · III<sup>rd</sup> Group · 7<sup>th</sup> Battery · Gun n° 211<br><span class="stamnr">Service number 151/41689</span>',
      heroDatesHtml: '10 MAY <span class="dash">—</span> 28 MAY 1940',
      scrollAria: 'Scroll down',
      navDiary: 'The diary',
      navMap: 'The map',
      navTimeline: 'The timeline',
      navEpilogue: 'Epilogue',
      portraitCaption: 'Soldier François Stevens — portrait and identity page',
      portraitAlt: 'Portrait of soldier François Stevens in an overcoat, with his Adrian helmet on a pedestal, 1940',
      portraitFig: 'François Stevens, author of this diary (May 1940)',
      introTitleHtml: 'A small notebook,<br>a great history',
      introP1Html: 'After <strong>259 days</strong> of mobilisation, the Belgian army is drawn into war against Germany on 10 May 1940. François Stevens, tailor and quartermaster of his battery, serves on the T.R.A. 75 gun — <em>n° 211</em>.',
      introP2: 'In a checked school exercise book decorated with the Belgian tricolour, he recorded day by day what happened to his battery: from the first German reconnaissance aircraft over Diepenbeek to the capitulation, captivity and his escape — in civilian clothes, with a borrowed pram, all the way home.',
      introQuote: '«Together with the Allied armies we shall fight the enemy.»',
      bookCoverAlt: 'The diary cover',
      bookBtnHtml: 'Browse the notebook<br><small>all 65 pages, leaf by leaf</small>',
      statWarDays: 'days of war',
      statMobilisation: 'days of mobilisation',
      statShots: 'rounds in one day',
      statKmHome: 'km home',
      mapTitle: 'The battery\'s route',
      mapSub: 'From Diepenbeek to Hooglede — and home again on foot, by bicycle and on German lorries. Switch top-right to the 1939 NGI map for the roads of that time.',
      legendRetreat: '— The retreat (10–27 May)',
      legendReturn: '— The journey home (28–30 May)',
      basemapHistoric: '1939 map (NGI)',
      basemapModern: 'Modern map',
      mapHintBefore: 'Click the markers for a diary excerpt. ',
      playRoute: '▶ Play the route',
      stopRoute: '◼ Stop',
      timelineTitle: 'Day by day',
      timelineSub: 'The full transcription, in the words and spelling of 1940.',
      timelineSubTranslated: 'Translation of the transcription; the Dutch original keeps the spelling of 1940.',
      histHead: 'Historical context',
      histSource: 'Source',
      dayPrefix: 'Day ',
      dayBadge: 'day',
      warDay: 'War day ',
      returnDay20: 'Return · 29 May',
      returnDay21: 'Homecoming · 30 May',
      pageAlt: 'Diary page, photo ',
      pageCaption: ' — diary page ',
      pageFig: 'Diary page ',
      epilogueTitle: 'Epilogue',
      epilogueQuote: '«Alas, this homecoming will be the greatest disappointment I have met so far. I find the doors locked and nobody home.»',
      epilogueDetail: 'In three days François Stevens covered some 210 kilometres — by bicycle, on a coal cart, on foot and on German lorries. At the back of the notebook he pasted a portrait of King Leopold III, with a single sentence beneath:',
      epilogueToll: '5,882 Belgian soldiers were killed',
      epiloguePhotoAlt: 'Last page of the diary with a portrait of Leopold III',
      epiloguePhotoFig: 'The last page of the diary',
      footerHtml: 'War diary of François Stevens · 1<sup>st</sup> Artillery Regiment · 10 – 28 May 1940',
      footerSmall: 'Transcription of the original manuscript. Illegible passages are marked [illegible].',
      closeAria: 'Close',
      prevPage: 'Previous page',
      nextPage: 'Next page',
      bookHint: 'Click the right or left half to turn pages · arrow keys work too',
      bookCoverLabel: 'The cover — 10 May · 28 May 1940',
      langLabel: 'Language'
    },
    de: {
      metaTitle: 'Kriegstagebuch François Stevens — 10. Mai · 28. Mai 1940',
      metaDescription: 'Interaktive Website rund um das handgeschriebene Kriegstagebuch des Soldaten François Stevens während des Achtzehntagefeldzugs (10.–28. Mai 1940).',
      heroKicker: 'Kriegstagebuch · Der Achtzehntagefeldzug',
      typewriter: 'Kriegstagebuch von\nFrançois Stevens',
      heroSubHtml: 'Soldat <strong>François Stevens</strong> — Miliz der Klasse 1938<br>1. Artillerieregiment · III. Gruppe · 7. Batterie · Geschütz n° 211<br><span class="stamnr">Stammnummer 151/41689</span>',
      heroDatesHtml: '10. MAI <span class="dash">—</span> 28. MAI 1940',
      scrollAria: 'Nach unten scrollen',
      navDiary: 'Das Tagebuch',
      navMap: 'Die Karte',
      navTimeline: 'Die Zeitleiste',
      navEpilogue: 'Epilog',
      portraitCaption: 'Soldat François Stevens — Porträt und Identitätsseite',
      portraitAlt: 'Porträt des Soldaten François Stevens im Mantel, mit seinem Adrian-Helm auf einem Sockel, 1940',
      portraitFig: 'François Stevens, Verfasser dieses Tagebuchs (Mai 1940)',
      introTitleHtml: 'Ein kleines Heft,<br>eine große Geschichte',
      introP1Html: 'Nach einer Mobilmachung von <strong>259 Tagen</strong> wird die belgische Armee am 10. Mai 1940 in den Krieg gegen Deutschland verwickelt. François Stevens, Schneider und Quartiermeister seiner Batterie, dient am Geschütz T.R.A. 75 — <em>n° 211</em>.',
      introP2: 'In einem karierten Schulheft, verziert mit der belgischen Trikolore, hielt er Tag für Tag fest, was seiner Batterie widerfuhr: von den ersten deutschen Aufklärungsflugzeugen über Diepenbeek bis zur Kapitulation, der Kriegsgefangenschaft und seiner Flucht — in Zivilkleidung, mit einem geliehenen Kinderwagen, zurück nach Hause.',
      introQuote: '«Zusammen mit den alliierten Armeen werden wir den Feind bekämpfen.»',
      bookCoverAlt: 'Der Umschlag des Tagebuchs',
      bookBtnHtml: 'Das Heft durchblättern<br><small>alle 65 Seiten, Blatt für Blatt</small>',
      statWarDays: 'Kriegstage',
      statMobilisation: 'Tage Mobilmachung',
      statShots: 'Schüsse an einem Tag',
      statKmHome: 'km zurück nach Hause',
      mapTitle: 'Die Route der Batterie',
      mapSub: 'Von Diepenbeek bis Hooglede — und zu Fuß, per Fahrrad und auf deutschen Lastwagen wieder nach Hause. Oben rechts zur NGI-Karte von 1939 wechseln für das Straßennetz von damals.',
      legendRetreat: '— Der Rückzug (10.–27. Mai)',
      legendReturn: '— Die Heimkehr (28.–30. Mai)',
      basemapHistoric: 'Karte 1939 (NGI)',
      basemapModern: 'Moderne Karte',
      mapHintBefore: 'Klicken Sie auf die Punkte für einen Auszug aus dem Tagebuch. ',
      playRoute: '▶ Route abspielen',
      stopRoute: '◼ Stopp',
      timelineTitle: 'Tag für Tag',
      timelineSub: 'Die vollständige Transkription, in den Worten und der Schreibweise von 1940.',
      timelineSubTranslated: 'Übersetzung der Transkription; das niederländische Original behält die Schreibweise von 1940.',
      histHead: 'Historische Einordnung',
      histSource: 'Quelle',
      dayPrefix: 'Tag ',
      dayBadge: 'Tag',
      warDay: 'Kriegstag ',
      returnDay20: 'Rückkehr · 29. Mai',
      returnDay21: 'Heimkehr · 30. Mai',
      pageAlt: 'Tagebuchseite, Foto ',
      pageCaption: ' — Tagebuchseite ',
      pageFig: 'Tagebuchseite ',
      epilogueTitle: 'Epilog',
      epilogueQuote: '«Leider wird diese Heimkehr die größte Enttäuschung sein, die ich bisher erlebt habe. Ich finde die Türen verschlossen und niemanden zu Hause.»',
      epilogueDetail: 'In drei Tagen legte François Stevens etwa 210 Kilometer zurück — per Fahrrad, auf einem Kohlewagen, zu Fuß und auf deutschen Lastwagen. Hinten im Heft klebte er ein Porträt von König Leopold III., mit einem einzigen Satz darunter:',
      epilogueToll: '5.882 belgische Soldaten fielen',
      epiloguePhotoAlt: 'Letzte Seite des Tagebuchs mit Porträt von Leopold III.',
      epiloguePhotoFig: 'Die letzte Seite des Tagebuchs',
      footerHtml: 'Kriegstagebuch von François Stevens · 1. Artillerieregiment · 10. – 28. Mai 1940',
      footerSmall: 'Transkription der Originalhandschrift. Unleserliche Passagen sind mit [unleserlich] gekennzeichnet.',
      closeAria: 'Schließen',
      prevPage: 'Vorherige Seite',
      nextPage: 'Nächste Seite',
      bookHint: 'Klicken Sie auf die rechte oder linke Hälfte zum Blättern · Pfeiltasten funktionieren ebenfalls',
      bookCoverLabel: 'Der Umschlag — 10. Mai · 28. Mai 1940',
      langLabel: 'Sprache'
    }
  };

  let current = 'nl';

  function detect() {
    const params = new URLSearchParams(location.search);
    const fromUrl = (params.get('lang') || '').toLowerCase();
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(stored)) return stored;
    } catch (_) { /* ignore */ }
    const nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('fr')) return 'fr';
    if (nav.startsWith('en')) return 'en';
    if (nav.startsWith('de')) return 'de';
    return 'nl';
  }

  function t(key) {
    return (ui[current] && ui[current][key]) || ui.nl[key] || key;
  }

  const SITE_ORIGIN = 'https://tom-michiels.github.io/oorlogsdagboek-francois-stevens';
  const OG_LOCALES = { nl: 'nl_BE', fr: 'fr_BE', en: 'en_GB', de: 'de_DE' };

  function setMetaByAttr(attr, key, content) {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function applyChrome() {
    document.documentElement.lang = current;
    document.title = t('metaTitle');
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', t('metaDescription'));

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        current === 'nl' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/?lang=${current}`
      );
    }

    setMetaByAttr('property', 'og:title', t('metaTitle'));
    setMetaByAttr('property', 'og:description', t('metaDescription'));
    setMetaByAttr('property', 'og:locale', OG_LOCALES[current] || 'nl_BE');
    setMetaByAttr('property', 'og:url', current === 'nl' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/?lang=${current}`);
    setMetaByAttr('name', 'twitter:title', t('metaTitle'));
    setMetaByAttr('name', 'twitter:description', t('metaDescription'));

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (!key) return;
      el.setAttribute('aria-label', t(key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (!key) return;
      el.setAttribute('title', t(key));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (!key) return;
      el.setAttribute('alt', t(key));
    });
    document.querySelectorAll('[data-i18n-caption]').forEach(el => {
      const key = el.getAttribute('data-i18n-caption');
      if (!key) return;
      el.setAttribute('data-caption', t(key));
    });

    // timeline subtitle: original spelling note only for NL
    const tlSub = document.querySelector('[data-i18n-timeline-sub]');
    if (tlSub) {
      tlSub.textContent = current === 'nl' ? t('timelineSub') : t('timelineSubTranslated');
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const active = btn.dataset.lang === current;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function setLang(lang, { reload = true } = {}) {
    if (!SUPPORTED.includes(lang)) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* ignore */ }
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    if (reload) {
      location.href = url.pathname + url.search + location.hash;
    } else {
      history.replaceState(null, '', url.pathname + url.search + location.hash);
      applyChrome();
    }
  }

  function init() {
    current = detect();
    // keep URL in sync without forcing a reload loop
    const url = new URL(location.href);
    if (url.searchParams.get('lang') !== current) {
      url.searchParams.set('lang', current);
      history.replaceState(null, '', url.pathname + url.search + location.hash);
    }
    applyChrome();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang && lang !== current) setLang(lang, { reload: true });
      });
    });
  }

  function dayLabelFor(day) {
    if (day <= 19) return t('warDay') + day;
    if (day === 20) return t('returnDay20');
    return t('returnDay21');
  }

  return {
    get current() { return current; },
    SUPPORTED,
    t,
    init,
    setLang,
    applyChrome,
    dayLabelFor
  };
})();
