// ========================================================
// Women, Power & Personality — Archival Controller
// Theme Management, Strike-Through Rotation, Search
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSignatureRotation();
  initSearch();
});

// ── Theme Management ────────────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem('archive-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);
  }

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const isDark = current === 'reading-room' || (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
      const nextTheme = isDark ? 'paper' : 'reading-room';
      
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('archive-theme', nextTheme);
      updateThemeButtonText(nextTheme);
    });
  }
}

function updateThemeButtonText(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;
  const isDark = theme === 'reading-room';
  toggleBtn.textContent = isDark ? '☀' : '☾';
  toggleBtn.setAttribute('title', isDark ? 'حالت روشن (کاغذ) / Light Theme' : 'اتاق مطالعه (تاریک) / Dark Theme');
}

// ── Signature Strike-Through Rotation (Homepage) ─────────
const SIGNATURE_PAIRS = [
  {
    fa: { struck: 'جادوگر', replacement: 'ریاضی‌دان ✎', context: 'یوحنای نیکیو، قرن ششم میلادی، درباره هیپاتیا' },
    en: { struck: 'Witch', replacement: 'Mathematician ✎', context: 'John of Nikiu, 6th Century AD, on Hypatia' }
  },
  {
    fa: { struck: 'اغواگر شرقی', replacement: 'دیپلمات ✎', context: 'پروپاگاندای آگوستوسی روم، دهه ۳۰ پ.م.، درباره کلئوپاترا' },
    en: { struck: 'Eastern Seductress', replacement: 'Diplomat ✎', context: 'Augustan Roman propaganda, 30s BC, on Cleopatra' }
  },
  {
    fa: { struck: 'غاصب بی‌رحم', replacement: 'امپراتور ✎', context: 'مورخان سنتی نئوکنفوسیوسی، درباره وو زتیان' },
    en: { struck: 'Ruthless Usurper', replacement: 'Emperor ✎', context: 'Traditional Confucian historians, on Wu Zetian' }
  },
  {
    fa: { struck: 'ملکه سیاه', replacement: 'نایب‌السلطنه ✎', context: 'سنت رساله‌نویسی هوگنو، قرن ۱۶، درباره کاترین دو مدیچی' },
    en: { struck: 'Black Queen', replacement: 'Regent ✎', context: 'French Protestant polemics, 16th Century, on Catherine de Medici' }
  }
];

let signatureIndex = 0;
let signatureInterval = null;
let isPaused = false;

function initSignatureRotation() {
  const container = document.getElementById('signatureDisplay');
  if (!container) return;

  const pauseBtn = document.getElementById('signaturePauseBtn');
  const lang = document.documentElement.lang || 'fa';

  function renderPair(index) {
    const data = SIGNATURE_PAIRS[index][lang] || SIGNATURE_PAIRS[index]['fa'];
    container.innerHTML = `
      <div class="signature-row">
        <span class="struck signature-struck-word">
          ${data.struck}
          <svg viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M 0 12 Q 30 4 65 14 T 100 8" pathLength="1" />
          </svg>
        </span>
        <span class="signature-replacement">${data.replacement}</span>
      </div>
      <p class="signature-context">${data.context}</p>
    `;
  }

  renderPair(0);

  function startTimer() {
    if (signatureInterval) clearInterval(signatureInterval);
    signatureInterval = setInterval(() => {
      if (!isPaused) {
        signatureIndex = (signatureIndex + 1) % SIGNATURE_PAIRS.length;
        renderPair(signatureIndex);
      }
    }, 4500);
  }

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseBtn.textContent = isPaused ? (lang === 'fa' ? 'ادامه ▶' : 'Play ▶') : (lang === 'fa' ? 'توقف ❚❚' : 'Pause ❚❚');
    });
  }

  startTimer();
}

// ── Search & Filter ─────────────────────────────────────
function initSearch() {
  const searchInput = document.getElementById('archiveSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = normalizePersian(e.target.value.trim().toLowerCase());
    const rows = document.querySelectorAll('.index-row');

    rows.forEach(row => {
      const text = normalizePersian(row.textContent.toLowerCase());
      if (!q || text.includes(q)) {
        row.style.display = 'block';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

function normalizePersian(str) {
  if (!str) return '';
  return str
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[\u200C]/g, '') // ZWNJ
    .replace(/[۰-۹]/g, d => '0123456789'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)])
    .trim();
}

// Global copy citation helper
window.copyCitation = function(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btnElement.textContent;
    btnElement.textContent = '✓ کپی شد / Copied';
    setTimeout(() => {
      btnElement.textContent = original;
    }, 2000);
  });
};
