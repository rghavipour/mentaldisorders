# Women, Power & Personality — Historical & Psychological Archive
### آرشیو پژوهشی زنان، قدرت و شخصیت در تاریخ (Bilingual EN / FA)

An interactive museum-grade single-page research archive exploring the intersection of female political/intellectual authority, statecraft, historiographical bias, and dimensional personality psychology (DSM-5-TR / ICD-11).

🌐 **Live Demo (GitHub Pages):** [https://rghavipour.github.io/mentaldisorders/](https://rghavipour.github.io/mentaldisorders/)  
📦 **Repository:** [https://github.com/rghavipour/mentaldisorders](https://github.com/rghavipour/mentaldisorders)

---

## 🎨 Overview & Artistic Direction

The project presents a digital museum gallery featuring **10 historical and intellectual eras**. Each historical figure is represented through a dedicated classical oil-painting portrait crafted with deep chiaroscuro lighting, rich impasto brushwork, and museum-grade archival aesthetics.

### Featured Figures & Eras:
1. **Hypatia of Alexandria** (370–415 AD) — *Late Antiquity Alexandria* | Intellectual Autonomy & Neoplatonism
2. **Cleopatra VII** (69–30 BC) — *Ptolemaic Egypt* | Sovereign Hegemony & Diplomatic Realpolitik
3. **Empress Wu Zetian** (624–705 AD) — *Tang / Zhou Dynasty China* | Meritocratic Autocracy & Zhou Transition
4. **Isabella I of Castile** (1451–1504) — *Renaissance Spain* | Institutional Realpolitik & Religious Consolidation
5. **Catherine de’ Medici** (1519–1589) — *Renaissance France* | Dynastic Preservation & Crisis Diplomacy
6. **Mary Shelley** (1797–1851) — *Romantic Era* | Gothic Synthesis, Sublimated Grief & Creative Resilience
7. **Queen Victoria** (1819–1901) — *Victorian Era* | Imperial Symbolism, Conscientiousness & Matriarchal Hegemony
8. **Simone de Beauvoir** (1908–1986) — *Mid-Century Existentialism* | Radical Existential Autonomy & Feminist Deconstruction
9. **Princess Diana** (1961–1997) — *Late 20th Century* | Public Affective Vulnerability, Compassion & Palace Alienation
10. **Modern & Contemporary Era** (2000–Present) — *Contemporary Inquiry* | Dimensional Trait Accuracy (DSM-5-TR / ICD-11) & De-stigmatization

---

## 🔬 Psychological & Historiographical Framework

Rather than applying retrospective diagnostic stigmatization ("Hysteria", "Witchcraft", "Madness", "Borderline"), this archive implements:
* **Alternative Model for Personality Disorders (AMPD - DSM-5-TR Section III):** Dimensional spectrums of Negative Affectivity, Detachment, Antagonism, Disinhibition, and Anankastia.
* **ICD-11 Personality Framework:** Severity scoring and contextual trait patterns.
* **Historiographical Deconstruction:** Examining how political rivals, patriarchal chroniclers (e.g., John of Nikiu, Procopius, contemporary tabloids) weaponized pathologizing rhetoric against autonomous female rulers.

---

## 📂 Project Structure & Modular Architecture

The repository is organized cleanly for immediate deployment on **GitHub Pages** without requiring build steps, bundlers, or server runtimes:

```text
mentaldisorders/
├── .nojekyll           # Bypasses Jekyll build on GitHub Pages
├── index.html          # Main HTML5 entry point (Semantic UI, Hero, Timeline, Modals, SEO/A11y)
├── css/
│   └── styles.css      # Museum styling, glowing timeline axis, arch cards, halo effects, GPU acceleration
├── js/
│   ├── data.js         # Complete bilingual (FA/EN) dataset, DSM-5 traits, WebP/JPG paths, academic sources
│   └── app.js          # Controller logic, debounced search, keyboard navigation, carousel, modals
├── images/             # Classical oil portraits (WebP 80% compression, thumbnails & JPG fallbacks)
│   ├── *.webp          # Modern compressed high-res portraits (~100-190KB)
│   ├── *_thumb.webp    # Ultra-lightweight timeline thumbnails (~18-38KB)
│   ├── *.jpg           # Progressive JPEG fallbacks
│   └── sculpture.webp  # Self-hosted classical bust visual (0 external CDN dependencies)
└── README.md           # Documentation, performance benchmarks & deployment guide
```

---

## 🚀 How to Publish & Deploy to GitHub Pages

### 1. Commit and Push to GitHub
Run the following commands in the project directory:

```bash
# Check status
git status

# Stage all files
git add .

# Create commit
git commit -m "feat: complete modular archive with classical oil portraits and bilingual UI"

# Push to your GitHub repository
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/rghavipour/mentaldisorders`
2. Click **Settings** (تنظیمات مخزن)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment > Branch**:
   - Source: **Deploy from a branch**
   - Branch: **`main`**
   - Folder: **`/ (root)`**
5. Click **Save**.
6. Within 1–2 minutes, your website will be live at:  
   👉 **`https://rghavipour.github.io/mentaldisorders/`**

---

## 🌐 Features

- **Full Bilingual Support (فارسی / English):** One-click language switch with automatic RTL/LTR layout adjustment and Vazirmatn typography.
- **Interactive Arch Timeline:** Smooth horizontal scrolling carousel with glowing timeline nodes and theme classification dots.
- **Cinematic Double-Exposure Hero:** Golden halo aura with adjacent ghost portraits and period indicators.
- **Deep-Dive Dossier Modal:** Comprehensive breakdown of biographical milestones, DSM-5-TR trait spectrums, primary sources, and chronicler bias analysis.
- **DSM-5-TR Trait Radar & Distribution:** Dynamic interactive trait distribution curves across eras.
- **JSON Export:** One-click full dataset export for researchers and students.
- **100% Responsive:** Optimized across mobile, tablet, and widescreen desktop displays.

---

## 📜 License & Citation

MIT License © 2026 rghavipour.  
Academic references sourced from: APA DSM-5-TR (2022), WHO ICD-11 (2022), and historical primary sources.
