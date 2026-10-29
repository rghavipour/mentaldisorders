// ========================================================
// WOMEN, POWER & PERSONALITY — APPLICATION CONTROLLER
// Luxury Exhibition Engine, Psychobiographical Compass & Trait Stream
// ========================================================

let currentLang = "fa";
let selectedFigureId = "cleopatra";
let activeThemeFilter = "All";
let activePeriodFilter = "All";
let activeSearchQuery = "";
let highlightedTrait = null;
let searchDebounceTimer = null;

// ================= INITIALIZATION =================
function initArchive() {
  // Apply initial language
  setLanguage(currentLang);

  // Debounced search input listener
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        activeSearchQuery = e.target.value.trim().toLowerCase();
        renderTimeline();
      }, 120);
    });
  }

  // Modal backdrop click handlers
  ['dossierModal', 'methodologyModal', 'addCaseModal'].forEach(modalId => {
    const modalEl = document.getElementById(modalId);
    if (modalEl) {
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          modalEl.classList.add('hidden');
          modalEl.classList.remove('flex');
        }
      });
    }
  });

  // Global Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') {
      if (e.key === 'Escape') document.activeElement.blur();
      return;
    }

    if (e.key === 'Escape') {
      closeDossierModal();
      closeMethodologyModal();
      closeAddCaseModal();
      return;
    }

    const isDossierOpen = !document.getElementById('dossierModal').classList.contains('hidden');
    const isMethodOpen = !document.getElementById('methodologyModal').classList.contains('hidden');
    const isAddOpen = !document.getElementById('addCaseModal').classList.contains('hidden');
    if (isDossierOpen || isMethodOpen || isAddOpen) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      cycleCharacter(currentLang === 'fa' ? -1 : 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      cycleCharacter(currentLang === 'fa' ? 1 : -1);
    }
  });
}

// ================= RENDER FILTERS RIBBON =================
function renderFilters() {
  const periodContainer = document.getElementById('periodFilterRibbon');
  const themeContainer = document.getElementById('themeFilterRibbon');

  if (periodContainer) {
    const allLabel = currentLang === 'fa' ? 'تمام دوران‌ها' : 'All Eras';
    const allIsActive = activePeriodFilter === 'All';
    let html = `
      <button 
        onclick="filterByPeriod('All')" 
        class="px-3 py-1 rounded-full text-xs transition whitespace-nowrap font-medium ${allIsActive ? 'bg-antiqueGold text-obsidian shadow' : 'bg-white/[0.04] text-stone-300 hover:text-white border border-white/10'}"
      >
        ${allLabel}
      </button>
    `;

    PERIODS.forEach(period => {
      const isActive = activePeriodFilter === period.id;
      const label = currentLang === 'fa' ? period.labelFa : period.labelEn;
      html += `
        <button 
          onclick="filterByPeriod('${period.id}')" 
          class="px-2.5 py-1 rounded-full text-xs transition whitespace-nowrap ${isActive ? 'bg-antiqueGold text-obsidian font-medium shadow' : 'bg-white/[0.03] text-stone-300 hover:text-white border border-white/10'}"
        >
          ${label}
        </button>
      `;
    });
    periodContainer.innerHTML = html;
  }

  if (themeContainer) {
    const allThemesLabel = currentLang === 'fa' ? 'تمام محورها' : 'All Themes';
    const allIsActive = activeThemeFilter === 'All';
    let themeHtml = `
      <button 
        onclick="filterByTheme('All')" 
        class="px-2.5 py-1 rounded-full text-xs transition whitespace-nowrap ${allIsActive ? 'bg-antiqueGold/20 text-paleGold font-medium border border-antiqueGold/40' : 'bg-white/[0.03] text-stone-400 hover:text-stone-200 border border-white/10'}"
      >
        ${allThemesLabel}
      </button>
    `;

    THEMES.forEach(theme => {
      const isActive = activeThemeFilter === theme.id;
      const label = currentLang === 'fa' ? theme.labelFa : theme.labelEn;
      themeHtml += `
        <button 
          onclick="filterByTheme('${theme.id}')" 
          class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition whitespace-nowrap ${isActive ? 'bg-antiqueGold/25 text-paleGold font-medium border border-antiqueGold/50' : 'bg-white/[0.02] text-stone-400 hover:text-stone-200 border border-white/10'}"
        >
          <span class="w-1.5 h-1.5 rounded-full" style="background:${theme.color}"></span>
          <span>${label}</span>
        </button>
      `;
    });
    themeContainer.innerHTML = themeHtml;
  }
}

function filterByTheme(themeId) {
  activeThemeFilter = activeThemeFilter === themeId ? 'All' : themeId;
  renderFilters();
  renderTimeline();
}

function filterByPeriod(periodId) {
  activePeriodFilter = activePeriodFilter === periodId ? 'All' : periodId;
  renderFilters();
  renderTimeline();
}

function resetFilters() {
  activeThemeFilter = 'All';
  activePeriodFilter = 'All';
  activeSearchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  renderFilters();
  renderTimeline();
}

// ================= RENDER TIMELINE CARDS =================
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  const filtered = FIGURES_DATA.filter(fig => {
    const matchesTheme = activeThemeFilter === 'All' || fig.themes.includes(activeThemeFilter);
    const matchesPeriod = activePeriodFilter === 'All' || fig.period === activePeriodFilter;
    const matchesSearch = !activeSearchQuery || 
      fig.nameEn.toLowerCase().includes(activeSearchQuery) ||
      fig.nameFa.includes(activeSearchQuery) ||
      fig.keywordsEn.toLowerCase().includes(activeSearchQuery) ||
      fig.keywordsFa.includes(activeSearchQuery) ||
      fig.period.toLowerCase().includes(activeSearchQuery);
    return matchesTheme && matchesPeriod && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="w-full py-12 text-center text-stone-400 text-sm">
        ${currentLang === 'fa' ? 'شخصیتی با این فیلتر یافت نشد. فیلترها را بازنشانی کنید.' : 'No historical figures match the current filter criteria.'}
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((fig) => {
    const isSelected = fig.id === selectedFigureId;
    const name = currentLang === 'fa' ? fig.nameFa : fig.nameEn;
    const secondaryName = currentLang === 'fa' ? fig.nameEn : fig.nameFa;
    const dates = currentLang === 'fa' ? fig.datesFa : fig.datesEn;
    const keywords = currentLang === 'fa' ? fig.keywordsFa : fig.keywordsEn;
    const fallback = fig.fallbackPortrait || 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=700&q=80';

    // Theme dots
    const dotsHtml = fig.themes.slice(0, 3).map(tId => {
      const tObj = THEMES.find(t => t.id === tId);
      const color = tObj ? tObj.color : '#cda45e';
      return `<span class="w-2 h-2 rounded-full inline-block" style="background:${color}" title="${tId}"></span>`;
    }).join('');

    return `
      <article 
        data-id="${fig.id}"
        onclick="selectFigure('${fig.id}')"
        class="arch-card cursor-pointer w-[160px] sm:w-[195px] flex-shrink-0 flex flex-col justify-between p-2 sm:p-2.5 relative ${isSelected ? 'active-card' : ''}"
      >
        <div>
          <!-- Arch Top Oil Painting Frame -->
          <div class="arch-image-wrapper h-[125px] sm:h-[138px] w-full bg-[#090a0f] mb-2 sm:mb-2.5">
            <img 
              src="${fig.thumbWebp || fig.portrait}" 
              onerror="this.onerror=null;this.src='${fallback}';"
              alt="${name}" 
              width="180"
              height="138"
              loading="lazy"
              decoding="async"
              class="w-full h-full object-cover object-top painterly-img"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80"></div>
          </div>

          <!-- Timeline Axis Node -->
          <div class="flex justify-center -mt-3.5 mb-2 relative z-20">
            <div class="timeline-node"></div>
          </div>

          <!-- Identity Details -->
          <div class="px-1 space-y-0.5">
            <div class="flex items-center justify-between">
              <span class="text-[9px] font-mono text-antiqueGold/80">${fig.archiveNo}</span>
              <span class="text-[9px] text-stone-500 font-mono">${dates}</span>
            </div>
            <h3 class="font-serif text-sm sm:text-base text-stone-100 font-semibold leading-snug truncate">${name}</h3>
            <p class="text-[10px] text-stone-400 truncate">${secondaryName}</p>
            <p class="text-[11px] text-stone-300 line-clamp-2 leading-relaxed pt-1 font-light">${keywords}</p>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="px-1 pt-2.5 mt-2 flex items-center justify-between border-t border-white/[0.06]">
          <div class="flex items-center gap-1.5">
            ${dotsHtml}
          </div>
          <span class="w-5 h-5 rounded-full border border-white/15 flex items-center justify-center text-stone-400 group-hover:border-antiqueGold group-hover:text-paleGold transition text-[10px]">
            <svg class="w-2.5 h-2.5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
          </span>
        </div>
      </article>
    `;
  }).join('');
}

// ================= SELECT FIGURE & UPDATE SPOTLIGHT =================
function selectFigure(figureId, shouldCenter = false) {
  selectedFigureId = figureId;
  const container = document.getElementById('timelineContainer');
  const prevScroll = container ? container.scrollLeft : 0;

  renderTimeline();

  if (container) {
    container.scrollLeft = prevScroll;
    if (shouldCenter) {
      const activeCard = container.querySelector(`[data-id="${figureId}"]`);
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  updateHeroSection(figureId);
}

function updateHeroSection(figureId) {
  const index = FIGURES_DATA.findIndex(f => f.id === figureId);
  const fig = FIGURES_DATA[index] || FIGURES_DATA[0];

  const prevFig = FIGURES_DATA[(index - 1 + FIGURES_DATA.length) % FIGURES_DATA.length];
  const nextFig = FIGURES_DATA[(index + 1) % FIGURES_DATA.length];

  // Update Hero Titles & Bio
  const eraEl = document.getElementById('heroSelectedEra');
  if (eraEl) eraEl.textContent = currentLang === 'fa' ? fig.eraTagFa : fig.eraTagEn;

  const nameEl = document.getElementById('heroSelectedName');
  if (nameEl) nameEl.textContent = currentLang === 'fa' ? fig.nameFa : fig.nameEn;

  const datesEl = document.getElementById('heroSelectedDates');
  if (datesEl) datesEl.textContent = currentLang === 'fa' ? fig.datesFa : fig.datesEn;

  const archetypeEl = document.getElementById('heroSelectedArchetype');
  if (archetypeEl) archetypeEl.textContent = currentLang === 'fa' ? fig.archetypeFa : fig.archetypeEn;

  const bioEl = document.getElementById('heroSelectedBio');
  if (bioEl) bioEl.textContent = currentLang === 'fa' ? fig.bioFa : fig.bioEn;

  // Catalog Number
  const catalogCounter = document.getElementById('heroCatalogCounter');
  if (catalogCounter) catalogCounter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(FIGURES_DATA.length).padStart(2, '0')}`;

  const frameCatalogTag = document.getElementById('heroFrameCatalogTag');
  if (frameCatalogTag) frameCatalogTag.textContent = `${fig.archiveNo} • ${fig.period.toUpperCase()}`;

  // Next / Prev button previews
  const prevBtnPreview = document.getElementById('prevFigurePreviewName');
  if (prevBtnPreview) prevBtnPreview.textContent = currentLang === 'fa' ? prevFig.nameFa : prevFig.nameEn;

  const nextBtnPreview = document.getElementById('nextFigurePreviewName');
  if (nextBtnPreview) nextBtnPreview.textContent = currentLang === 'fa' ? nextFig.nameFa : nextFig.nameEn;

  // Update Quote & Attribution
  const currentQuote = currentLang === 'fa' ? fig.quoteFa : fig.quoteEn;
  const cleanQuoteText = currentQuote ? currentQuote.replace(/^[«“"'\s]+|[»”"'\s]+$/g, '').trim() : '';

  const heroQuoteTextEl = document.getElementById('heroQuoteText');
  if (heroQuoteTextEl) heroQuoteTextEl.textContent = cleanQuoteText;

  const quoteAttributionEl = document.getElementById('heroQuoteAttribution');
  if (quoteAttributionEl) {
    const authorText = currentLang === 'fa' ? fig.quoteAuthorFa : fig.quoteAuthorEn;
    quoteAttributionEl.textContent = authorText ? `— ${authorText}` : `— ${currentLang === 'fa' ? fig.nameFa : fig.nameEn}`;
  }

  // Update Main Portrait with fade
  const mainImg = document.getElementById('heroMainPortrait');
  if (mainImg) {
    const fallback = fig.fallbackPortrait || fig.portrait;
    mainImg.style.opacity = '0.35';
    setTimeout(() => {
      mainImg.onerror = function() { this.onerror = null; this.src = fig.portrait || fallback; };
      mainImg.src = fig.portraitWebp || fig.portrait;
      mainImg.style.opacity = '1';
    }, 120);
  }

  // Render Psychobiographical Radar & Trait Bars
  renderHeroRadar(fig);
  renderHeroTraitBars(fig);

  // Update Active Guide on Wave Graph
  updateWaveCursor(index);
}

// ================= RENDER HERO RADAR CHART (PSYCHOBIOGRAPHICAL COMPASS) =================
function renderHeroRadar(fig) {
  const svg = document.getElementById('heroRadarSvg');
  if (!svg) return;

  const cx = 100;
  const cy = 100;
  const R = 68;
  const scores = fig.radarScores || { agency: 85, realpolitik: 80, affectivity: 75, nonconformity: 80, resilience: 85 };

  const dimensions = [
    { key: 'agency', score: scores.agency || 85 },
    { key: 'realpolitik', score: scores.realpolitik || 80 },
    { key: 'affectivity', score: scores.affectivity || 75 },
    { key: 'nonconformity', score: scores.nonconformity || 80 },
    { key: 'resilience', score: scores.resilience || 85 }
  ];

  // Calculate polygon points
  const points = dimensions.map((d, i) => {
    const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
    const r = (d.score / 100.0) * R;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Concentric pentagon guide rings (25%, 50%, 75%, 100%)
  let ringsHtml = '';
  [0.25, 0.5, 0.75, 1.0].forEach(factor => {
    const ringPts = [0, 1, 2, 3, 4].map(i => {
      const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
      const r = R * factor;
      return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
    }).join(' ');
    ringsHtml += `<polygon points="${ringPts}" fill="none" stroke="rgba(205, 164, 94, 0.14)" stroke-width="0.8" stroke-dasharray="2 2" />`;
  });

  // Axis spokes
  let spokesHtml = '';
  [0, 1, 2, 3, 4].map(i => {
    const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
    const x = cx + R * Math.cos(angle);
    const y = cy + R * Math.sin(angle);
    spokesHtml += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgba(205, 164, 94, 0.2)" stroke-width="1" />`;
  });

  // Vertex dots
  const vertexDots = dimensions.map((d, i) => {
    const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
    const r = (d.score / 100.0) * R;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `<circle class="radar-vertex" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5" />`;
  }).join('');

  svg.innerHTML = `
    <defs>
      <radialGradient id="radarFillGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(205, 164, 94, 0.45)" />
        <stop offset="100%" stop-color="rgba(205, 164, 94, 0.12)" />
      </radialGradient>
    </defs>
    ${ringsHtml}
    ${spokesHtml}
    <polygon class="radar-polygon" points="${points}" fill="url(#radarFillGrad)" />
    ${vertexDots}
  `;
}

// ================= RENDER HERO TRAIT PROGRESS BARS =================
function renderHeroTraitBars(fig) {
  const container = document.getElementById('heroTraitBars');
  if (!container) return;

  const scores = fig.radarScores || { agency: 85, realpolitik: 80, affectivity: 75, nonconformity: 80, resilience: 85 };

  container.innerHTML = TRAIT_DIMENSIONS.map(dim => {
    const score = scores[dim.key] || 80;
    const label = currentLang === 'fa' ? dim.labelFa : dim.labelEn;
    return `
      <div>
        <div class="flex items-center justify-between text-[11px] mb-0.5">
          <span class="text-stone-300 flex items-center gap-1.5 font-light">
            <span class="w-2 h-2 rounded-full inline-block" style="background:${dim.color}"></span>
            <span>${label}</span>
          </span>
          <span class="font-mono text-paleGold text-[10px]">${score}%</span>
        </div>
        <div class="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
          <div class="h-full rounded-full transition-all duration-700" style="width:${score}%; background:${dim.color}"></div>
        </div>
      </div>
    `;
  }).join('');
}

// ================= RENDER DYNAMIC HISTORICAL TRAIT WAVE GRAPH =================
function renderWaveGraph() {
  const svg = document.getElementById('psychologyWaveSvg');
  if (!svg) return;

  const numFigures = FIGURES_DATA.length;
  const startX = 55;
  const endX = 745;
  const stepX = (endX - startX) / (numFigures - 1);

  // Compute X for each figure
  const figX = FIGURES_DATA.map((_, i) => startX + i * stepX);

  // Generate paths for all 5 trait dimensions
  let pathsHtml = '';
  let dotsHtml = '';

  TRAIT_DIMENSIONS.forEach(dim => {
    const points = FIGURES_DATA.map((fig, i) => {
      const score = (fig.radarScores && fig.radarScores[dim.key]) ? fig.radarScores[dim.key] : 75;
      const x = figX[i];
      const y = 125 - (score / 100.0) * 85; // Y between 40 and 125
      return [x, y];
    });

    const pathD = smoothPointsToPath(points);
    const isHighlighted = highlightedTrait === dim.key;
    const opacity = highlightedTrait ? (isHighlighted ? '1' : '0.15') : '0.85';
    const strokeWidth = highlightedTrait ? (isHighlighted ? '3.2' : '1.2') : '2';

    pathsHtml += `
      <path 
        id="curve-${dim.key}" 
        class="trait-stream-curve" 
        d="${pathD}" 
        fill="none" 
        stroke="${dim.color}" 
        stroke-width="${strokeWidth}" 
        opacity="${opacity}" 
      />
    `;

    // Add coordinate nodes on the path
    points.forEach((pt, i) => {
      const fig = FIGURES_DATA[i];
      dotsHtml += `
        <circle 
          class="trait-node-dot" 
          cx="${pt[0].toFixed(1)}" 
          cy="${pt[1].toFixed(1)}" 
          r="3.5" 
          fill="${dim.color}" 
          stroke="#090a0e" 
          stroke-width="1.5"
          onclick="selectFigure('${fig.id}', true)" 
          onmouseenter="showWaveTooltip(event, '${fig.id}', '${dim.key}')" 
          onmouseleave="hideWaveTooltip()"
        />
      `;
    });
  });

  // Vertical active cursor
  const activeIdx = FIGURES_DATA.findIndex(f => f.id === selectedFigureId);
  const activeX = (activeIdx >= 0 ? figX[activeIdx] : figX[0]).toFixed(1);

  svg.innerHTML = `
    <!-- Baseline Axis -->
    <line x1="20" y1="130" x2="780" y2="130" stroke="rgba(205, 164, 94, 0.2)" stroke-width="1" />
    
    <!-- Vertical Era Grid Lines -->
    ${figX.map(x => `<line x1="${x.toFixed(1)}" y1="20" x2="${x.toFixed(1)}" y2="130" stroke="rgba(255,255,255,0.04)" stroke-dasharray="2 3" />`).join('')}

    <!-- Trait Curves -->
    ${pathsHtml}

    <!-- Interactive Nodes -->
    ${dotsHtml}

    <!-- Active Figure Cursor -->
    <line id="waveCursorLine" class="wave-cursor-line" x1="${activeX}" y1="15" x2="${activeX}" y2="130" />
    <circle id="waveCursorHead" class="wave-cursor-head" cx="${activeX}" cy="18" r="4.5" />
  `;

  // Render Legend Buttons
  renderTraitLegend();

  // Render bottom timeline year labels
  renderWaveTimelineLabels(figX);
}

function updateWaveCursor(figureIndex) {
  const startX = 55;
  const endX = 745;
  const stepX = (endX - startX) / (FIGURES_DATA.length - 1);
  const targetX = (startX + figureIndex * stepX).toFixed(1);

  const line = document.getElementById('waveCursorLine');
  const head = document.getElementById('waveCursorHead');
  if (line) {
    line.setAttribute('x1', targetX);
    line.setAttribute('x2', targetX);
  }
  if (head) {
    head.setAttribute('cx', targetX);
  }
}

// Convert discrete points to a smooth cubic Catmull-Rom spline path
function smoothPointsToPath(points) {
  if (points.length < 2) return '';
  const d = [`M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`];

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i + 2 < points.length ? points[i + 2] : p2;

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6.0;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6.0;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6.0;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6.0;

    d.push(`C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`);
  }
  return d.join(' ');
}

// ================= RENDER TRAIT LEGEND & TOGGLE =================
function renderTraitLegend() {
  const container = document.getElementById('traitLegendContainer');
  if (!container) return;

  container.innerHTML = TRAIT_DIMENSIONS.map(dim => {
    const isHighlighted = highlightedTrait === dim.key;
    const label = currentLang === 'fa' ? dim.labelFa : dim.labelEn;
    return `
      <button 
        onclick="toggleTraitCurve('${dim.key}')" 
        class="trait-pill-badge flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] transition ${isHighlighted ? 'active-trait bg-white/10 text-white' : 'bg-white/[0.03] border-white/10 text-stone-300 hover:text-white'}"
      >
        <span class="w-2 h-2 rounded-full flex-shrink-0" style="background:${dim.color}"></span>
        <span>${label}</span>
      </button>
    `;
  }).join('');
}

function toggleTraitCurve(traitKey) {
  highlightedTrait = highlightedTrait === traitKey ? null : traitKey;
  renderWaveGraph();

  const tooltipText = document.getElementById('graphTooltipText');
  if (tooltipText) {
    if (highlightedTrait) {
      const dim = TRAIT_DIMENSIONS.find(d => d.key === highlightedTrait);
      if (dim) {
        tooltipText.textContent = currentLang === 'fa' ? dim.descFa : dim.descEn;
      }
    } else {
      tooltipText.textContent = UI_TEXT[currentLang].graphDefaultSub;
    }
  }
}

function renderWaveTimelineLabels(figX) {
  const container = document.getElementById('waveTimelineLabels');
  if (!container) return;

  container.innerHTML = FIGURES_DATA.map((fig, i) => {
    const name = currentLang === 'fa' ? fig.nameFa : fig.nameEn;
    const dates = currentLang === 'fa' ? fig.datesFa : fig.datesEn;
    const isSelected = fig.id === selectedFigureId;
    return `
      <button 
        onclick="selectFigure('${fig.id}', true)" 
        class="text-center p-1 rounded hover:bg-white/[0.04] transition truncate ${isSelected ? 'text-paleGold font-semibold' : 'text-stone-400'}"
        title="${name} (${dates})"
      >
        <span class="block truncate text-[10px]">${name}</span>
        <span class="block text-[8px] text-stone-500 font-mono truncate">${dates}</span>
      </button>
    `;
  }).join('');
}

// Tooltip for wave points
function showWaveTooltip(e, figId, traitKey) {
  const fig = FIGURES_DATA.find(f => f.id === figId);
  const dim = TRAIT_DIMENSIONS.find(d => d.key === traitKey);
  if (!fig || !dim) return;

  const score = (fig.radarScores && fig.radarScores[traitKey]) ? fig.radarScores[traitKey] : 75;
  const name = currentLang === 'fa' ? fig.nameFa : fig.nameEn;
  const traitLabel = currentLang === 'fa' ? dim.labelFa : dim.labelEn;

  const tooltip = document.getElementById('waveNodeTooltip');
  if (tooltip) {
    tooltip.innerHTML = `
      <div class="font-medium text-stone-100">${name}</div>
      <div class="text-[11px] text-antiqueGold flex items-center gap-1.5 mt-0.5">
        <span class="w-1.5 h-1.5 rounded-full" style="background:${dim.color}"></span>
        <span>${traitLabel}: <strong>${score}%</strong></span>
      </div>
    `;
    tooltip.classList.remove('hidden');

    const rect = e.target.getBoundingClientRect();
    const parentRect = document.getElementById('waveGraphContainer').getBoundingClientRect();
    tooltip.style.left = `${rect.left - parentRect.left - 40}px`;
    tooltip.style.top = `${rect.top - parentRect.top - 50}px`;
  }
}

function hideWaveTooltip() {
  const tooltip = document.getElementById('waveNodeTooltip');
  if (tooltip) tooltip.classList.add('hidden');
}

// ================= NAVIGATION CYCLE & SCROLL =================
function cycleCharacter(direction) {
  const idx = FIGURES_DATA.findIndex(f => f.id === selectedFigureId);
  const nextIdx = (idx + direction + FIGURES_DATA.length) % FIGURES_DATA.length;
  selectFigure(FIGURES_DATA[nextIdx].id, true);
}

function scrollTimeline(direction) {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  const scrollStep = 340;
  let delta = (direction === 'left' || direction < 0) ? -scrollStep : scrollStep;
  const initialScroll = container.scrollLeft;

  container.scrollBy({ left: delta, behavior: 'smooth' });

  // Fallback for Safari/WebKit RTL scrollLeft behavior
  setTimeout(() => {
    if (container.scrollLeft === initialScroll) {
      container.scrollBy({ left: -delta, behavior: 'smooth' });
    }
  }, 40);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ================= DEEP DIVE DOSSIER MODAL =================
function openDossierModal() {
  const fig = FIGURES_DATA.find(f => f.id === selectedFigureId) || FIGURES_DATA[0];
  const portraitEl = document.getElementById('modalPortrait');
  if (portraitEl) {
    portraitEl.onerror = function() { this.onerror = null; this.src = fig.portrait || fig.fallbackPortrait; };
    portraitEl.src = fig.portraitWebp || fig.portrait;
  }
  document.getElementById('modalEra').textContent = fig.period;
  document.getElementById('modalDates').textContent = currentLang === 'fa' ? fig.datesFa : fig.datesEn;
  document.getElementById('modalRole').textContent = currentLang === 'fa' ? fig.archetypeFa : fig.archetypeEn;
  document.getElementById('modalName').textContent = currentLang === 'fa' ? fig.nameFa : fig.nameEn;
  document.getElementById('modalQuote').textContent = currentLang === 'fa' ? fig.quoteFa : fig.quoteEn;
  document.getElementById('modalHistoricalText').textContent = currentLang === 'fa' ? fig.bioFa : fig.bioEn;
  document.getElementById('modalPsychText').textContent = currentLang === 'fa' ? fig.psychFa : fig.psychEn;
  document.getElementById('modalBiasText').textContent = currentLang === 'fa' ? fig.biasFa : fig.biasEn;

  // Render Modal Trait Bars
  const barsContainer = document.getElementById('modalTraitBars');
  if (barsContainer) {
    const scores = fig.radarScores || { agency: 85, realpolitik: 80, affectivity: 75, nonconformity: 80, resilience: 85 };
    barsContainer.innerHTML = TRAIT_DIMENSIONS.map(dim => {
      const score = scores[dim.key] || 80;
      const label = currentLang === 'fa' ? dim.labelFa : dim.labelEn;
      return `
        <div>
          <div class="flex justify-between text-xs mb-1">
            <span class="text-stone-200 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full" style="background:${dim.color}"></span>
              <span>${label}</span>
            </span>
            <span class="text-paleGold font-mono">${score}%</span>
          </div>
          <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div class="h-full rounded-full transition-all duration-700" style="width:${score}%; background:${dim.color}"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Events & Sources
  const events = currentLang === 'fa' ? fig.eventsFa : fig.eventsEn;
  document.getElementById('modalEventsList').innerHTML = events.map(ev => `<li>${ev}</li>`).join('');
  document.getElementById('modalSourcesList').innerHTML = fig.sources.map(src => `<li>${src}</li>`).join('');

  const modal = document.getElementById('dossierModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeDossierModal() {
  const modal = document.getElementById('dossierModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function openMethodologyModal() {
  const modal = document.getElementById('methodologyModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeMethodologyModal() {
  const modal = document.getElementById('methodologyModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function openAddCaseModal() {
  const modal = document.getElementById('addCaseModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeAddCaseModal() {
  const modal = document.getElementById('addCaseModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ================= ADD CASE =================
function handleAddCase(e) {
  e.preventDefault();
  const name = document.getElementById('newName').value.trim();
  const dates = document.getElementById('newDates').value.trim();
  const period = document.getElementById('newPeriod').value;
  const theme = document.getElementById('newTheme').value;
  const keywords = document.getElementById('newKeywords').value.trim();
  const bio = document.getElementById('newBio').value.trim();

  const newId = 'custom_' + Date.now();
  const newEntry = {
    id: newId,
    archiveNo: `CAT. ${String(FIGURES_DATA.length + 1).padStart(2, '0')}`,
    nameEn: name,
    nameFa: name,
    datesEn: dates,
    datesFa: dates,
    period: period,
    eraTagEn: `${period.toUpperCase()} • ${dates}`,
    eraTagFa: `${period} • ${dates}`,
    archetypeEn: `${theme} & Agency`,
    archetypeFa: `${theme} و عاملیت تاریخی`,
    keywordsEn: keywords,
    keywordsFa: keywords,
    themes: [theme, 'Power'],
    portrait: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80',
    quoteEn: '“History remembers those who shaped their era against the grain.”',
    quoteFa: '«تاریخ کسانی را به یاد می‌سپارد که برخلاف جریان زمانه، عصر خود را شکل دادند.»',
    quoteAuthorEn: name,
    quoteAuthorFa: name,
    bioEn: bio,
    bioFa: bio,
    psychEn: 'Custom research entry added to the psychobiographical timeline archive.',
    psychFa: 'مدخل پژوهشی اضافه‌شده توسط پژوهشگر به آرشیو روان‌شناختی-تاریخی.',
    biasEn: 'Requires primary source cross-verification to separate historical bias from behavioral traits.',
    biasFa: 'نیازمند بررسی تطبیقی منابع اولیه برای تفکیک سوگیری مورخان از ویژگی‌های شخصیتی.',
    radarScores: { agency: 88, realpolitik: 75, affectivity: 70, nonconformity: 82, resilience: 80 },
    eventsEn: ['Documented in Historical Archive', keywords],
    eventsFa: ['ثبت‌شده در آرشیو پژوهشی', keywords],
    sources: ['User Research Contribution — MentalDisorders Archive']
  };

  FIGURES_DATA.push(newEntry);
  closeAddCaseModal();
  selectFigure(newId);
  document.getElementById('addCaseForm').reset();
}

function exportArchiveJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(FIGURES_DATA, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "women_power_personality_archive.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// ================= LANGUAGE SWITCHER (EN <-> FA) =================
function setLanguage(lang) {
  currentLang = lang;
  const htmlEl = document.documentElement;
  const btnEn = document.getElementById('btnLangEn');
  const btnFa = document.getElementById('btnLangFa');

  if (currentLang === 'fa') {
    htmlEl.setAttribute('lang', 'fa');
    htmlEl.setAttribute('dir', 'rtl');
    if (btnFa) btnFa.className = 'px-2.5 py-1 rounded-full transition font-medium bg-antiqueGold text-obsidian font-persian';
    if (btnEn) btnEn.className = 'px-2.5 py-1 rounded-full transition font-medium text-stone-300 hover:text-white';
    const mainHeading = document.getElementById('mainArchiveHeading');
    if (mainHeading) mainHeading.innerHTML = `زنان، قدرت و<br/><span class="text-paleGold italic font-normal">شخصیت در تاریخ</span>`;
  } else {
    htmlEl.setAttribute('lang', 'en');
    htmlEl.setAttribute('dir', 'ltr');
    if (btnEn) btnEn.className = 'px-2.5 py-1 rounded-full transition font-medium bg-antiqueGold text-obsidian';
    if (btnFa) btnFa.className = 'px-2.5 py-1 rounded-full transition font-medium text-stone-300 hover:text-white font-persian';
    const mainHeading = document.getElementById('mainArchiveHeading');
    if (mainHeading) mainHeading.innerHTML = `Women, Power &<br/><span class="text-paleGold italic font-normal">Personality</span>`;
  }

  // Update static elements with data-i18n
  const dict = UI_TEXT[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput && dict) searchInput.placeholder = dict.searchPlaceholder;

  const mainSub = document.getElementById('mainArchiveSub');
  if (mainSub && dict) mainSub.textContent = dict.mainArchiveSub;

  renderFilters();
  renderTimeline();
  updateHeroSection(selectedFigureId);
  renderWaveGraph();
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'fa' : 'en');
}

// Global initialization
window.addEventListener("DOMContentLoaded", initArchive);
