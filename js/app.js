// ========================================================
// WOMEN, POWER & PERSONALITY — APPLICATION CONTROLLER
// Interactive Logic, Filter Engine, Radar Charts & Modals
// ========================================================

let currentLang = "fa";
let selectedFigureId = "cleopatra";
let activeThemeFilter = "All";
let activePeriodFilter = "All";
let activeSearchQuery = "";
let highlightedTrait = null;
let searchDebounceTimer = null;

    function initArchive() {
      // Apply initial language (Persian default as requested, with 1-click English toggle)
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

      // Modal backdrop click handlers (close modal when clicking outside dialog card)
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

      // Global Keyboard Navigation (Arrow Keys for Timeline, Escape to dismiss modals)
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

    // ================= RENDER RIGHT SIDEBAR FILTERS =================
    function renderFilters() {
      const themeList = document.getElementById('themeFilterList');
      const periodList = document.getElementById('periodFilterList');

      themeList.innerHTML = THEMES.map(theme => {
        const isActive = activeThemeFilter === theme.id;
        const label = currentLang === 'fa' ? theme.labelFa : theme.labelEn;
        return `
          <li>
            <button 
              onclick="filterByTheme('${theme.id}')"
              class="w-full flex items-center gap-2.5 px-2 py-1 rounded-lg transition text-left ${isActive ? 'bg-antiqueGold/20 text-paleGold font-medium' : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.03]'}"
            >
              <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" style="background:${theme.color}; box-shadow: 0 0 8px ${theme.color}"></span>
              <span class="truncate">${label}</span>
            </button>
          </li>
        `;
      }).join('');

      periodList.innerHTML = PERIODS.map(period => {
        const isActive = activePeriodFilter === period.id;
        const label = currentLang === 'fa' ? period.labelFa : period.labelEn;
        return `
          <li>
            <button 
              onclick="filterByPeriod('${period.id}')"
              class="w-full flex items-center gap-2.5 px-2 py-1 rounded-lg transition text-left ${isActive ? 'bg-antiqueGold/20 text-paleGold font-medium' : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.03]'}"
            >
              <span class="w-2.5 h-2.5 rounded-full border ${isActive ? 'border-antiqueGold bg-antiqueGold' : 'border-stone-500'} flex-shrink-0"></span>
              <span class="truncate">${label}</span>
            </button>
          </li>
        `;
      }).join('');
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

      // Move graph marker
      const foundPeriod = PERIODS.find(p => p.id === periodId);
      if (foundPeriod) {
        document.getElementById('activeGraphMarker').setAttribute('transform', `translate(${foundPeriod.graphX}, ${foundPeriod.graphY})`);
      }
    }

    function resetFilters() {
      activeThemeFilter = 'All';
      activePeriodFilter = 'All';
      activeSearchQuery = '';
      document.getElementById('searchInput').value = '';
      renderFilters();
      renderTimeline();
    }

    // ================= RENDER HORIZONTAL TIMELINE CARDS =================
    function renderTimeline() {
      const container = document.getElementById('timelineContainer');

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

        // Render colored theme dots matching the mockup
        const dotsHtml = fig.themes.slice(0, 3).map(tId => {
          const tObj = THEMES.find(t => t.id === tId);
          const color = tObj ? tObj.color : '#c9a66b';
          return `<span class="w-2 h-2 rounded-full inline-block" style="background:${color}" title="${tId}"></span>`;
        }).join('');

        return `
          <article 
            data-id="${fig.id}"
            onclick="selectFigure('${fig.id}')"
            class="arch-card cursor-pointer w-[176px] sm:w-[192px] flex-shrink-0 flex flex-col justify-between p-2.5 relative ${isSelected ? 'active-card' : ''}"
          >
            <!-- Top Arch Portrait -->
            <div>
              <div class="arch-image-wrapper h-[132px] w-full bg-obsidian mb-3">
                <img 
                  src="${fig.thumbWebp || fig.portrait}" 
                  onerror="this.onerror=null;this.src='${fallback}';"
                  alt="${name}" 
                  width="176"
                  height="132"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover object-top painterly-img"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80"></div>
              </div>

              <!-- Glowing Timeline Node sitting directly on the horizontal axis -->
              <div class="flex justify-center -mt-4 mb-2 relative z-20">
                <div class="timeline-node"></div>
              </div>

              <!-- Bilingual Name & Dates -->
              <div class="px-1 space-y-0.5">
                <h3 class="font-serif text-base text-stone-100 font-semibold leading-snug truncate">${name}</h3>
                <p class="text-[10px] text-stone-400 truncate">${secondaryName}</p>
                <p class="text-[10px] text-antiqueGold/90 font-mono">${dates}</p>
                <p class="text-[11px] text-stone-400 line-clamp-2 leading-relaxed pt-1 font-light">${keywords}</p>
              </div>
            </div>

            <!-- Card Footer: Theme Dots & Action Arrow -->
            <div class="px-1 pt-3 mt-2 flex items-center justify-between border-t border-white/[0.06]">
              <div class="flex items-center gap-1.5">
                ${dotsHtml}
              </div>
              <span class="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-stone-300 group-hover:border-antiqueGold group-hover:text-paleGold transition">
                <svg class="w-3 h-3 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </article>
        `;
      }).join('');
    }

    // ================= SELECT FIGURE & UPDATE HERO SPOTLIGHT =================
    function selectFigure(figureId, shouldCenter = false) {
      selectedFigureId = figureId;
      const container = document.getElementById('timelineContainer');
      const prevScroll = container ? container.scrollLeft : 0;

      renderTimeline();

      if (container) {
        // Prevent innerHTML rewrite from resetting horizontal scroll to 0
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

      // Adjacent figures for double-exposure ghost portraits
      const prevFig = FIGURES_DATA[(index - 1 + FIGURES_DATA.length) % FIGURES_DATA.length];
      const nextFig = FIGURES_DATA[(index + 1) % FIGURES_DATA.length];

      document.getElementById('heroSelectedEra').textContent = currentLang === 'fa' ? fig.eraTagFa : fig.eraTagEn;
      document.getElementById('heroSelectedName').textContent = currentLang === 'fa' ? fig.nameFa : fig.nameEn;
      document.getElementById('heroSelectedArchetype').textContent = currentLang === 'fa' ? fig.archetypeFa : fig.archetypeEn;
      document.getElementById('heroSelectedBio').textContent = currentLang === 'fa' ? fig.bioFa : fig.bioEn;
      document.getElementById('heroPortraitTag').textContent = fig.archiveNo;

      // Update Quotes
      const currentQuote = currentLang === 'fa' ? fig.quoteFa : fig.quoteEn;
      const cleanQuoteText = currentQuote ? currentQuote.replace(/^[«“"'\s]+|[»”"'\s]+$/g, '').trim() : '';
      
      const heroQuoteTextEl = document.getElementById('heroQuoteText');
      if (heroQuoteTextEl) heroQuoteTextEl.textContent = cleanQuoteText;

      const openMark = document.getElementById('heroQuoteOpenMark');
      const closeMark = document.getElementById('heroQuoteCloseMark');
      if (openMark && closeMark) {
        openMark.textContent = currentLang === 'fa' ? '«' : '“';
        closeMark.textContent = currentLang === 'fa' ? '»' : '”';
      }

      const heroCardQuoteEl = document.getElementById('heroCardQuote');
      if (heroCardQuoteEl) heroCardQuoteEl.textContent = currentQuote;

      // Update Portraits
      const mainImg = document.getElementById('heroMainPortrait');
      const fallback = fig.fallbackPortrait || fig.portrait;
      mainImg.style.opacity = '0.3';
      setTimeout(() => {
        mainImg.onerror = function() { this.onerror = null; this.src = fig.portrait || fallback; };
        mainImg.src = fig.portraitWebp || fig.portrait;
        mainImg.style.opacity = '1';
      }, 150);

      const leftGhost = document.getElementById('heroGhostLeft');
      if (leftGhost) {
        leftGhost.onerror = function() { this.onerror = null; this.src = prevFig.portrait || fallback; };
        leftGhost.src = prevFig.portraitWebp || prevFig.portrait;
      }

      const rightGhost = document.getElementById('heroGhostRight');
      if (rightGhost) {
        rightGhost.onerror = function() { this.onerror = null; this.src = nextFig.portrait || fallback; };
        rightGhost.src = nextFig.portraitWebp || nextFig.portrait;
      }

      // Background Preload of adjacent figures for instant carousel switching
      if (nextFig) {
        const pNext = new Image();
        pNext.src = nextFig.portraitWebp || nextFig.portrait;
      }
      if (prevFig) {
        const pPrev = new Image();
        pPrev.src = prevFig.portraitWebp || prevFig.portrait;
      }

      // Render Trait Pills in Hero
      const pillsContainer = document.getElementById('heroTraitPills');
      pillsContainer.innerHTML = fig.traits.map(t => {
        const label = currentLang === 'fa' ? t.nameFa : t.nameEn;
        return `
          <span class="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-stone-200 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full" style="background:${t.color}"></span>
            <span>${label}</span>
            <strong class="text-paleGold font-mono">${t.score}%</strong>
          </span>
        `;
      }).join('');

      // Update Slide Indicator & Graph Marker
      const slideNum = String(index + 1).padStart(2, '0');
      const totalNum = String(FIGURES_DATA.length).padStart(2, '0');
      document.getElementById('activeSlideIndicator').textContent = `${slideNum} ————— ${totalNum}`;

      const periodObj = PERIODS.find(p => p.id === fig.period);
      if (periodObj) {
        document.getElementById('activeGraphMarker').setAttribute('transform', `translate(${periodObj.graphX}, ${periodObj.graphY})`);
      }
    }

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

      // Fallback for Safari/WebKit RTL scrollLeft behavior:
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

    // ================= INTERACTIVE GRAPH TRAIT HIGHLIGHT =================
    function toggleTraitCurve(traitKey) {
      const allTraits = ['neurosis', 'histrionic', 'borderline', 'narcissistic', 'antisocial'];
      highlightedTrait = highlightedTrait === traitKey ? null : traitKey;

      allTraits.forEach(t => {
        const path = document.getElementById(`curve-${t}`);
        if (!path) return;
        if (!highlightedTrait) {
          path.setAttribute('opacity', '0.85');
          path.setAttribute('stroke-width', t === 'borderline' ? '2.2' : '1.8');
        } else if (t === highlightedTrait) {
          path.setAttribute('opacity', '1');
          path.setAttribute('stroke-width', '3.5');
        } else {
          path.setAttribute('opacity', '0.18');
          path.setAttribute('stroke-width', '1.2');
        }
      });

      const tooltip = document.getElementById('graphTooltipText');
      if (highlightedTrait && TRAIT_CURVE_INFO[highlightedTrait]) {
        tooltip.textContent = currentLang === 'fa' ? TRAIT_CURVE_INFO[highlightedTrait].fa : TRAIT_CURVE_INFO[highlightedTrait].en;
      } else {
        tooltip.textContent = UI_TEXT[currentLang].graphDefaultSub;
      }
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

      // Render Trait Spectrum Bars
      const barsContainer = document.getElementById('modalTraitBars');
      barsContainer.innerHTML = fig.traits.map(t => {
        const label = currentLang === 'fa' ? t.nameFa : t.nameEn;
        return `
          <div>
            <div class="flex justify-between text-xs mb-1">
              <span class="text-stone-200">${label}</span>
              <span class="text-paleGold font-mono">${t.score}/100</span>
            </div>
            <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div class="h-full rounded-full transition-all duration-700" style="width:${t.score}%; background:${t.color}"></div>
            </div>
          </div>
        `;
      }).join('');

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

    // ================= ADD NEW RESEARCH ENTRY =================
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
        archiveNo: `ARCHIVE NO. ${String(FIGURES_DATA.length + 1).padStart(2, '0')}`,
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
        bioEn: bio,
        bioFa: bio,
        psychEn: 'Custom research entry added to the psychobiographical timeline archive.',
        psychFa: 'مدخل پژوهشی اضافه‌شده توسط پژوهشگر به آرشیو روان‌شناختی-تاریخی.',
        biasEn: 'Requires primary source cross-verification to separate historical bias from behavioral traits.',
        biasFa: 'نیازمند بررسی تطبیقی منابع اولیه برای تفکیک سوگیری مورخان از ویژگی‌های شخصیتی.',
        traits: [
          { nameEn: 'Strategic Agency', nameFa: 'عاملیت استراتژیک', score: 88, color: '#e8a856' },
          { nameEn: 'Emotional Resilience', nameFa: 'تاب‌آوری روانی', score: 85, color: '#3dd6c6' }
        ],
        eventsEn: ['Documented in Historical Archive', keywords],
        eventsFa: ['ثبت‌شده در آرشیو پژوهشی', keywords],
        sources: ['User Research Contribution — MentalDisorders Archive']
      };

      FIGURES_DATA.push(newEntry);
      closeAddCaseModal();
      selectFigure(newId);
      document.getElementById('addCaseForm').reset();
    }

    // ================= EXPORT ARCHIVE JSON FOR GITHUB REPO =================
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
        btnFa.className = 'px-2.5 py-1 rounded-full transition font-medium bg-antiqueGold text-obsidian font-persian';
        btnEn.className = 'px-2.5 py-1 rounded-full transition font-medium text-stone-300 hover:text-white';
        document.getElementById('mainArchiveHeading').innerHTML = `زنان، قدرت و<br/><span class="text-paleGold italic font-normal">شخصیت در تاریخ</span>`;
      } else {
        htmlEl.setAttribute('lang', 'en');
        htmlEl.setAttribute('dir', 'ltr');
        btnEn.className = 'px-2.5 py-1 rounded-full transition font-medium bg-antiqueGold text-obsidian';
        btnFa.className = 'px-2.5 py-1 rounded-full transition font-medium text-stone-300 hover:text-white font-persian';
        document.getElementById('mainArchiveHeading').innerHTML = `Women, Power &<br/><span class="text-paleGold italic font-normal">Personality</span>`;
      }

      // Update static elements with data-i18n
      const dict = UI_TEXT[currentLang];
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });

      document.getElementById('searchInput').placeholder = dict.searchPlaceholder;
      document.getElementById('mainArchiveSub').textContent = dict.mainArchiveSub;

      renderFilters();
      renderTimeline();
      updateHeroSection(selectedFigureId);
    }

    function toggleLanguage() {
      setLanguage(currentLang === 'en' ? 'fa' : 'en');
    }

// Global initialization
window.addEventListener("DOMContentLoaded", initArchive);
