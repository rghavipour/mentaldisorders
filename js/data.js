// ========================================================
// WOMEN, POWER & PERSONALITY — ARCHIVE DATA
// Historical & Psychological Dataset (Bilingual EN / FA)
// ========================================================

const THEMES = [
  {
    "id": "Betrayal",
    "labelEn": "Betrayal",
    "labelFa": "خیانت سیاسی و شخصی",
    "color": "#e06c88"
  },
  {
    "id": "Ambition",
    "labelEn": "Ambition",
    "labelFa": "جاه‌طلبی و اراده",
    "color": "#9d75f5"
  },
  {
    "id": "Power",
    "labelEn": "Power",
    "labelFa": "قدرت و حکمرانی",
    "color": "#e8a856"
  },
  {
    "id": "Love & Relationships",
    "labelEn": "Love & Relationships",
    "labelFa": "عشق و روابط پیچیده",
    "color": "#7b8cff"
  },
  {
    "id": "Mental Health",
    "labelEn": "Mental Health",
    "labelFa": "روان و تروما",
    "color": "#f28b66"
  },
  {
    "id": "Legacy",
    "labelEn": "Legacy",
    "labelFa": "میراث فکری و تاریخی",
    "color": "#3dd6c6"
  }
];

const PERIODS = [
  {
    "id": "Ancient",
    "labelEn": "Ancient",
    "labelFa": "دوران باستان",
    "graphX": 65,
    "graphY": 50
  },
  {
    "id": "Medieval",
    "labelEn": "Medieval",
    "labelFa": "قرون وسطی",
    "graphX": 205,
    "graphY": 62
  },
  {
    "id": "Renaissance",
    "labelEn": "Renaissance",
    "labelFa": "رنسانس",
    "graphX": 345,
    "graphY": 48
  },
  {
    "id": "Early Modern",
    "labelEn": "Early Modern",
    "labelFa": "دوران مدرن متقدم",
    "graphX": 485,
    "graphY": 38
  },
  {
    "id": "Modern",
    "labelEn": "Modern",
    "labelFa": "دوران مدرن",
    "graphX": 625,
    "graphY": 52
  },
  {
    "id": "Contemporary",
    "labelEn": "Contemporary",
    "labelFa": "معاصر",
    "graphX": 755,
    "graphY": 42
  }
];

const FIGURES_DATA = [
  {
    "id": "hypatia",
    "archiveNo": "ARCHIVE NO. 01",
    "nameEn": "Hypatia of Alexandria",
    "nameFa": "هیپاتیا اسکندرانی",
    "datesEn": "370 – 415 AD",
    "datesFa": "۳۷۰ تا ۴۱۵ میلادی",
    "period": "Ancient",
    "eraTagEn": "LATE ANTIQUITY ALEXANDRIA • 370–415 AD",
    "eraTagFa": "اسکندریه دوران باستان متأخر • ۳۷۰–۴۱۵ م",
    "archetypeEn": "Intellectual Autonomy",
    "archetypeFa": "استقلال عقلانی و فلسفی",
    "keywordsEn": "Philosopher, mathematician, political martyrdom",
    "keywordsFa": "فیلسوف، ریاضی‌دان، شهادت سیاسی",
    "themes": [
      "Legacy",
      "Power",
      "Ambition"
    ],
    "portrait": "images/hypatia.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Hypatia_portrait.png/600px-Hypatia_portrait.png",
    "quoteEn": "“Reserve your right to think, for even to think wrongly is better than not to think at all.”",
    "quoteFa": "«حق اندیشیدن را برای خود محفوظ بدار؛ چرا که حتی خطا اندیشیدن بهتر از نیندیشیدن است.»",
    "bioEn": "Renowned Neoplatonist philosopher, astronomer, and mathematician in Alexandria. Navigating a volatile power struggle between Imperial Prefect Orestes and Bishop Cyril, her public authority and refusal to conform to submissive gender norms made her a target of political assassination.",
    "bioFa": "فیلسوف نوافلاطونی، ستاره‌شناس و ریاضی‌دان برجسته اسکندریه. حضور او در کانون مشاوره‌های سیاسی و امتناع از پذیرش نقش‌های جنسیتی مطیع در میانه نزاع قدرت میان اورستس و سیریل، او را به هدف ترور سیاسی تبدیل کرد.",
    "psychEn": "High openness to experience, emotional self-regulation (Stoic/Neoplatonic discipline), and fearless intellectual assertiveness. Hostile chroniclers framed her public composure as \"arrogant enchantment.\"",
    "psychFa": "گشودگی بسیار بالا به تجربه، خودتنظیمی هیجانی مبتنی بر ریاضت فلسفی، و قاطعیت کلامی در فضای عمومی. مخالفان سیاسی، استقلال فکری او را «افسونگری و غرور» نامیدند.",
    "biasEn": "6th-century chronicler John of Nikiu portrayed her astronomy as \"satanic witchcraft,\" illustrating how female scientific authority was pathologized or demonized.",
    "biasFa": "یوحنای نیکیو در قرن ششم دانش نجوم و ریاضیات او را «جادوگری و فریبندگی» خواند؛ نمونه‌ای کلاسیک از برچسب‌زنی به اقتدار علمی زنان.",
    "traits": [
      {
        "nameEn": "Intellectual Assertiveness",
        "nameFa": "قاطعیت شناختی و فکری",
        "score": 95,
        "color": "#3dd6c6"
      },
      {
        "nameEn": "Emotional Composure",
        "nameFa": "خودتنظیمی هیجانی",
        "score": 90,
        "color": "#7b8cff"
      },
      {
        "nameEn": "Social Non-Conformity",
        "nameFa": "ناهمرنگی با کلیشه‌های زمانه",
        "score": 88,
        "color": "#e8a856"
      }
    ],
    "eventsEn": [
      "Headed the Platonist school at Alexandria (~400 AD)",
      "Advised Roman Prefect Orestes during civic crisis",
      "Assassinated by a political mob in March 415 AD"
    ],
    "eventsFa": [
      "ریاست مکتب فلسفی اسکندریه (حدود ۴۰۰ میلادی)",
      "مشاوره سیاسی به اورستس، فرماندار رومی اسکندریه",
      "ترور سیاسی در مارس ۴۱۵ میلادی"
    ],
    "sources": [
      "Socrates Scholasticus, Ecclesiastical History",
      "Maria Dzielska (1995), Hypatia of Alexandria",
      "Edward Jay Watts (2017), Hypatia"
    ]
  },
  {
    "id": "cleopatra",
    "archiveNo": "ARCHIVE NO. 02",
    "nameEn": "Cleopatra VII",
    "nameFa": "کلئوپاترای هفتم",
    "datesEn": "69 – 30 BC",
    "datesFa": "۶۹ تا ۳۰ پیش از میلاد",
    "period": "Ancient",
    "eraTagEn": "PTOLEMAIC EGYPT • 69–30 BC",
    "eraTagFa": "مصر بطلمیوسی • ۶۹–۳۰ پیش از میلاد",
    "archetypeEn": "Strategic Charisma",
    "archetypeFa": "کاریزمای استراتژیک و دیپلماسی",
    "keywordsEn": "Power, seduction, polyglot politics",
    "keywordsFa": "قدرت، دیپلماسی، سیاست و کاریزما",
    "themes": [
      "Power",
      "Ambition",
      "Love & Relationships",
      "Betrayal"
    ],
    "portrait": "images/cleopatra.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cleopatra_-_John_William_Waterhouse.jpg/600px-Cleopatra_-_John_William_Waterhouse.jpg",
    "quoteEn": "“I will not be triumphed over.”",
    "quoteFa": "«من هرگز به عنوان غنیمت در رژه پیروزی دشمن به نمایش گذاشته نخواهم شد.»",
    "bioEn": "Last active pharaoh of Ancient Egypt, naval commander, and polyglot diplomat fluent in nine languages. To preserve Egyptian sovereignty against Rome’s expansion, she forged calculated political-romantic alliances with Julius Caesar and Mark Antony.",
    "bioFa": "آخرین فرعون فعال مصر باستان، فرمانده دریایی و دیپلماتی مسلط به ۹ زبان. او برای حفظ استقلال مصر در برابر امپراتوری روم، اتحادهای استراتژیک و عاطفی حساب‌شده‌ای با ژولیوس سزار و مارک آنتونی برقرار کرد.",
    "psychEn": "Retrospective writers often project Histrionic or Narcissistic traits onto Cleopatra due to her theatrical statecraft (such as her golden barge at Tarsus). However, modern historians emphasize that Hellenistic monarchy required grand theatricality as an instrument of state legitimacy.",
    "psychFa": "برخی تحلیل‌های سطحی به دلیل نمایش‌های باشکوه او (مانند ورود به طرسوس با کشتی طلایی) صفات نمایشی (Histrionic) یا خودشیفته به او نسبت داده‌اند؛ اما تاریخ‌نگاری مدرن نشان می‌دهد که تئاتر سیاسی بخش جدایی‌ناپذیر مشروعیت پادشاهی هلنیستی بوده است.",
    "biasEn": "Augustan Roman propaganda systematically reduced a shrewd head of state to a \"fatal seductress\" to frame Rome’s civil war against Mark Antony as a foreign moral threat.",
    "biasFa": "پروپاگاندای اوکتاویان (آگوستوس) در روم، یک رهبر سیاسی مسلط به اقتصاد و زبان را به «اغواگر شرقی» تقلیل داد تا جنگ داخلی روم را توجیه کند.",
    "traits": [
      {
        "nameEn": "Strategic Theatricality (Histrionic Spectrum)",
        "nameFa": "نمایشگری استراتژیک و کاریزما",
        "score": 86,
        "color": "#7b8cff"
      },
      {
        "nameEn": "Grandiose State Ambition (Narcissistic Spectrum)",
        "nameFa": "جاه‌طلبی کلان سیاسی",
        "score": 92,
        "color": "#e06c88"
      },
      {
        "nameEn": "Machiavellian Adaptability",
        "nameFa": "انعطاف‌پذیری ماکیاولیستی برای بقا",
        "score": 89,
        "color": "#9d75f5"
      }
    ],
    "eventsEn": [
      "Restored to the Egyptian throne via alliance with Julius Caesar (48 BC)",
      "Staged the Donations of Alexandria (34 BC)",
      "Naval Battle of Actium & ritual suicide (30 BC)"
    ],
    "eventsFa": [
      "بازپس‌گیری تاج‌وتخت مصر با اتحاد استراتژیک با سزار (۴۸ ق.م)",
      "بخشش‌های اسکندریه و تثبیت امپراتوری شرقی (۳۴ ق.م)",
      "نبرد دریایی آکتیوم و مرگ خودخواسته برای تن ندادن به اسارت (۳۰ ق.م)"
    ],
    "sources": [
      "Plutarch, Life of Antony",
      "Stacy Schiff (2010), Cleopatra: A Life",
      "Duane W. Roller (2010), Cleopatra: A Biography"
    ]
  },
  {
    "id": "wuzetian",
    "archiveNo": "ARCHIVE NO. 03",
    "nameEn": "Empress Wu Zetian",
    "nameFa": "امپراتریس وو زتیان",
    "datesEn": "624 – 705 AD",
    "datesFa": "۶۲۴ تا ۷۰۵ میلادی",
    "period": "Medieval",
    "eraTagEn": "TANG & ZHOU DYNASTY CHINA • 624–705 AD",
    "eraTagFa": "سلسله تانگ و ژو در چین • ۶۲۴–۷۰۵ م",
    "archetypeEn": "Autocratic Mastery",
    "archetypeFa": "اقتدار مطلقه و مهندسی قدرت",
    "keywordsEn": "Ambition, control, meritocratic reform",
    "keywordsFa": "جاه‌طلبی، کنترل اطلاعات، اصلاحات شایسته‌سالار",
    "themes": [
      "Ambition",
      "Power",
      "Betrayal",
      "Legacy"
    ],
    "portrait": "images/wuzetian.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Wu_Zetian_portrait.jpg/600px-Wu_Zetian_portrait.jpg",
    "quoteEn": "“Leaving my monument blank allows future generations to judge my reign for themselves.”",
    "quoteFa": "«لوح آرامگاهم را بی‌نوشته بگذارید تا آیندگان خود درباره کارنامه من داوری کنند.»",
    "bioEn": "The only woman in Chinese history to assume the title of Emperor (Huangdi) in her own right. Rising from low-ranking concubine to supreme ruler, she dismantled aristocratic cliques, expanded the imperial examination system, and used a ruthless secret police network to crush court conspiracies.",
    "bioFa": "تنها زن در تاریخ چین که رسماً با عنوان «امپراتور» (هوانگ‌دی) سلسله خود را بنیان گذاشت. او اشرافیت سنتی را تضعیف کرد، آزمون‌های دولتی شایسته‌سالار را گسترش داد و برای بقای خود در دربار، شبکه‌ای اطلاعاتی و بی‌رحم علیه توطئه‌گران به کار گرفت.",
    "psychEn": "High Dark Triad traits in political execution (Machiavellian calculation, low interpersonal empathy toward rivals, and hyper-vigilance), paired with exceptional administrative competence and composure under threat.",
    "psychFa": "ترکیبی از محاسبه‌گری ماکیاولیستی بسیار بالا، هوشیاری افراطی نسبت به خیانت (پارانویای سیاسی اقتضایی) و قاطعیت بی‌رحمانه در حذف رقبا، در کنار توانمندی کم‌نظیر در مدیریت کلان کشور.",
    "biasEn": "Confucian historians reviled her for violating cosmic patriarchal order, attributing crimes to her that male emperors routinely committed without moral condemnation.",
    "biasFa": "مورخان کنفوسیوسی به دلیل شکستن انحصار مردانه مقام امپراتور، اقدامات امنیتی او را هیولایی جلوه دادند؛ در حالی که خشونت‌های مشابه در بنیان‌گذاران مرد، «اقتدار لازم» شمرده می‌شد.",
    "traits": [
      {
        "nameEn": "Machiavellian Statecraft",
        "nameFa": "محاسبه‌گری سیاسی و ماکیاولیسم",
        "score": 96,
        "color": "#9d75f5"
      },
      {
        "nameEn": "Dominance & Agency",
        "nameFa": "سلطه‌گری و اراده معطوف به قدرت",
        "score": 94,
        "color": "#e06c88"
      },
      {
        "nameEn": "Threat Hyper-Vigilance",
        "nameFa": "بیش‌گوش‌به‌زنگی امنیتی",
        "score": 85,
        "color": "#e8a856"
      }
    ],
    "eventsEn": [
      "Became Empress Consort of Tang (655 AD)",
      "Proclaimed Emperor of the Zhou Dynasty (690 AD)",
      "Expanded meritocratic civil service exams across China"
    ],
    "eventsFa": [
      "رسیدن به مقام ملکه سلسله تانگ (۶۵۵ میلادی)",
      "اعلام رسمی سلطنت به عنوان امپراتور سلسله ژو (۶۹۰ میلادی)",
      "گسترش نظام شایسته‌سالاری و کاهش مالیات کشاورزان"
    ],
    "sources": [
      "Old Book of Tang (Jiu Tangshu)",
      "N. Harry Rothschild (2015), Emperor Wu Zhao and Her Pantheon",
      "Jonathan Clements (2007), Wu"
    ]
  },
  {
    "id": "isabella",
    "archiveNo": "ARCHIVE NO. 04",
    "nameEn": "Isabella I of Castile",
    "nameFa": "ایزابلای یکم کاستیل",
    "datesEn": "1451 – 1504",
    "datesFa": "۱۴۵۱ تا ۱۵۰۴ میلادی",
    "period": "Renaissance",
    "eraTagEn": "CROWN OF CASTILE • 1451–1504",
    "eraTagFa": "پادشاهی کاستیل و اسپانیا • ۱۴۵۱–۱۵۰۴ م",
    "archetypeEn": "Ideological Absolutism",
    "archetypeFa": "مطلق‌گرایی ایدئولوژیک و نظم‌آفرینی",
    "keywordsEn": "Faith, power, political cruelty, empire",
    "keywordsFa": "ایمان، تمرکز قدرت، تفتیش عقاید، امپراتوری",
    "themes": [
      "Power",
      "Ambition",
      "Legacy"
    ],
    "portrait": "images/isabella.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Isabel_la_Cat%C3%B3lica-2.jpg/600px-Isabel_la_Cat%C3%B3lica-2.jpg",
    "quoteEn": "“In the service of God and the Crown, hesitation is the gravest sin.”",
    "quoteFa": "«در خدمت به خداوند و تاج‌وتخت، تردید بزرگ‌ترین گناه است.»",
    "bioEn": "Queen of Castile whose marriage to Ferdinand of Aragon unified Spain. She centralized royal justice, financed Christopher Columbus’s 1492 voyage, completed the Reconquista, and established the Spanish Inquisition alongside the Alhambra Decree.",
    "bioFa": "ملکه کاستیل که با اتحاد با فردیناند آراگون، اسپانیای متحد را پایه‌گذاری کرد. او نرخ جرم را کاهش داد، سفر کلمب به قاره آمریکا را تأمین مالی کرد، اما هم‌زمان دادگاه‌های تفتیش عقاید و فرمان اخراج یهودیان و مسلمانان را امضا نمود.",
    "psychEn": "Marked by rigid conscientiousness, moral scrupulosity, and cognitive dogmatism—traits associated with obsessive-compulsive personality organization when fused with messianic royal ideology.",
    "psychFa": "وجدان‌مداری سخت‌گیرانه، کمال‌گرایی اخلاقی-مذهبی و جزم‌اندیشی شناختی؛ ویژگی‌هایی که نشان می‌دهد چگونه باورهای ایدئولوژیک مطلق می‌توانند بدون وجود اختلال ضداجتماعی، به تصمیم‌های سیاسی بی‌رحمانه منجر شوند.",
    "biasEn": "Depending on confessional lens, historians either canonized her as a saintly mother of nationhood or demonized her as a fanatic, overlooking her complex administrative rationality.",
    "biasFa": "نگاه‌های تاریخی به او میان «تقدیس مذهبی» و «اهریمن‌سازی مطلق» در نوسان بوده است، بدون آنکه مکانیزم روان‌شناختیِ هم‌زیستی ایمان عمیق و خشونت دولتی را تحلیل کنند.",
    "traits": [
      {
        "nameEn": "Ideological Rigidity & Control",
        "nameFa": "سخت‌گیری ایدئولوژیک و کنترل",
        "score": 93,
        "color": "#e8a856"
      },
      {
        "nameEn": "Administrative Conscientiousness",
        "nameFa": "نظم و وظیفه‌مداری سازمانی",
        "score": 91,
        "color": "#3dd6c6"
      },
      {
        "nameEn": "Machiavellian State Unification",
        "nameFa": "تمرکزگرایی دولتی",
        "score": 84,
        "color": "#9d75f5"
      }
    ],
    "eventsEn": [
      "War of the Castilian Succession (1475–1479)",
      "Establishment of the Spanish Inquisition (1478)",
      "Conquest of Granada & Columbus Expedition (1492)"
    ],
    "eventsFa": [
      "پیروزی در جنگ جانشینی کاستیل (۱۴۷۵–۱۴۷۹)",
      "تأسیس دادگاه تفتیش عقاید اسپانیا (۱۴۷۸)",
      "فتح گرانادا و حمایت مالی از سفر کریستف کلمب (۱۴۹۲)"
    ],
    "sources": [
      "Peggy K. Liss (1992), Isabel the Queen",
      "Giles Tremlett (2017), Isabella of Castile"
    ]
  },
  {
    "id": "catherine",
    "archiveNo": "ARCHIVE NO. 05",
    "nameEn": "Catherine de’ Medici",
    "nameFa": "کاترین دو مدیچی",
    "datesEn": "1519 – 1589",
    "datesFa": "۱۵۱۹ تا ۱۵۸۹ میلادی",
    "period": "Renaissance",
    "eraTagEn": "VALOIS FRANCE • 1519–1589",
    "eraTagFa": "فرانسه عصر جنگ‌های مذهبی • ۱۵۱۹–۱۵۸۹ م",
    "archetypeEn": "Dynastic Survivalist",
    "archetypeFa": "معمار بقای سلسله در بحران",
    "keywordsEn": "Intrigue, alliances, religious wars",
    "keywordsFa": "دسیسه سیاسی، اتحادها، جنگ‌های مذهبی",
    "themes": [
      "Betrayal",
      "Power",
      "Ambition"
    ],
    "portrait": "images/catherine.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Catherine_de_Medici_by_Francois_Clouet.jpg/600px-Catherine_de_Medici_by_Francois_Clouet.jpg",
    "quoteEn": "“One must sew the skin of the fox to that of the lion when strength alone fails.”",
    "quoteFa": "«هنگامی که زور بازوی شیر کافی نیست، باید پوست روباه را به آن دوخت.»",
    "bioEn": "Italian-born Queen Consort and Regent of France who fought to keep her Valois sons on the throne amid brutal civil wars between Catholics and Huguenots. Initially seeking religious compromise, desperation and fear of coup led to her entanglement in the St. Bartholomew’s Day Massacre.",
    "bioFa": "ملکه و نایب‌السلطنه ایتالیایی‌تبار فرانسه که در میانه جنگ‌های خونین مذهبی کاتولیک‌ها و پروتستان‌ها (هوگنوها) برای حفظ تاج‌وتخت فرزندانش تلاش کرد. او ابتدا سیاست مدارا را پیش گرفت اما در اوج بحران در کشتار سن‌بارتلمی نقش‌آفرین شد.",
    "psychEn": "High situational Machiavellianism driven by maternal-dynastic anxiety and early childhood trauma (held hostage in Florence as a child). Her behavior reflects crisis-driven realpolitik rather than sadism.",
    "psychFa": "ماکیاولیسم موقعیتی ناشی از اضطراب فروپاشی سلسله و ترومای کودکی (گروگان بودن در فلورانس). تحلیل روان‌شناختی نشان می‌دهد تصمیم‌های او برخاسته از سیاست واقع‌گرایانه در شرایط اضطراری بوده، نه دگرآزاری بالینی.",
    "biasEn": "Xenophobic French pamphlets invented the \"Black Legend\" of Catherine as an Italian poisoner and occultist to scapegoat a foreign woman for France’s religious wars.",
    "biasFa": "شب‌نامه‌های بیگانه‌هراسانه در فرانسه، «افسانه سیاه» کاترین به عنوان مسموم‌کننده و جادوگر ایتالیایی را ساختند تا یک زن خارجی را مقصر جنگ‌های داخلی فرانسه معرفی کنند.",
    "traits": [
      {
        "nameEn": "Tactical Realpolitik & Intrigue",
        "nameFa": "سیاست‌ورزی تاکتیکی و پنهان‌کاری",
        "score": 92,
        "color": "#9d75f5"
      },
      {
        "nameEn": "Dynastic Hyper-Protection",
        "nameFa": "محافظه‌کاری افراطی بر فرزندان و تاج",
        "score": 90,
        "color": "#e06c88"
      },
      {
        "nameEn": "Trauma-Induced Vigilance",
        "nameFa": "گوش‌به‌زنگی ناشی از ترومای کودکی",
        "score": 83,
        "color": "#e8a856"
      }
    ],
    "eventsEn": [
      "Edict of Saint-Germain promoting religious tolerance (1562)",
      "St. Bartholomew’s Day Massacre (August 1572)",
      "Patronage of Renaissance architecture at Chenonceau & Tuileries"
    ],
    "eventsFa": [
      "صدور فرمان سن‌ژرمن برای مدارا با پروتستان‌ها (۱۵۶۲)",
      "وقوع کشتار سن‌بارتلمی در پاریس (۱۵۷۲)",
      "حمایت گسترده از هنر و معماری رنسانس در فرانسه"
    ],
    "sources": [
      "Leonie Frieda (2003), Catherine de Medici",
      "R.J. Knecht (1998), Catherine de’ Medici"
    ]
  },
  {
    "id": "maryshelley",
    "archiveNo": "ARCHIVE NO. 06",
    "nameEn": "Mary Shelley",
    "nameFa": "مری شلی",
    "datesEn": "1797 – 1851",
    "datesFa": "۱۷۹۷ تا ۱۸۵۱ میلادی",
    "period": "Early Modern",
    "eraTagEn": "ROMANTIC ERA BRITAIN • 1797–1851",
    "eraTagFa": "بریتانیای عصر رمانتیسیسم • ۱۷۹۷–۱۸۵۱ م",
    "archetypeEn": "Creative Melancholia",
    "archetypeFa": "مالیخولیای خلاق و سوگ‌پردازی",
    "keywordsEn": "Creativity, rebellion, trauma, complexity",
    "keywordsFa": "خلاقیت، عصیان فکری، سوگ و تروما",
    "themes": [
      "Mental Health",
      "Legacy",
      "Love & Relationships"
    ],
    "portrait": "images/maryshelley.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mary_Wollstonecraft_Shelley_Rothwell.tif/lossy-page1-600px-Mary_Wollstonecraft_Shelley_Rothwell.tif.jpg",
    "quoteEn": "“Beware; for I am fearless, and therefore powerful.”",
    "quoteFa": "«برحذر باش؛ چرا که من بی‌باکم و از همین رو قدرتمند.»",
    "bioEn": "Daughter of feminist philosopher Mary Wollstonecraft and pioneer of science fiction with Frankenstein (written at age 18). Her life was marked by radical romantic defiance, multiple infant losses, and the drowning of Percy Bysshe Shelley, which she sublimated into psychological literature.",
    "bioFa": "فرزند فیلسوف فمینیست مری ولستون‌کرافت و خالق شاهکار «فرانکنشتاین» در ۱۸ سالگی. زندگی او با عصیان در برابر عرف ویکتوریایی، سوگ‌های مکرر ناشی از مرگ فرزندان و غرق شدن همسرش پرسی شلی گره خورد؛ ترومایی که به ادبیات روان‌شناختی والا تبدیل شد.",
    "psychEn": "Demonstrates profound psychological sublimation: transforming cumulative grief, post-traumatic depressive episodes, and existential isolation into enduring philosophical archetypes.",
    "psychFa": "نمونه برجسته سازوکار دفاعی «والایش» (Sublimation): تبدیل افسردگی پس از سوگ، اضطراب رهاشدگی و انزوای اگزیستانسیال به کهن‌الگوهای ادبی و فلسفی.",
    "biasEn": "19th-century critics initially doubted a young woman could author Frankenstein, while later biographers pathologized her grief as emotional coldness.",
    "biasFa": "منتقدان قرن نوزدهم ابتدا باور نداشتند زنی جوان نویسنده فرانکنشتاین باشد و بعدها سکوت و درون‌گرایی ناشی از سوگ او را «سردی عاطفی» تفسیر کردند.",
    "traits": [
      {
        "nameEn": "Affective Depth & Melancholia (Neuroticism)",
        "nameFa": "عمق عاطفی و حساسیت به سوگ",
        "score": 88,
        "color": "#3dd6c6"
      },
      {
        "nameEn": "Creative Sublimation & Resilience",
        "nameFa": "والایش هنری و تاب‌آوری روانی",
        "score": 96,
        "color": "#7b8cff"
      },
      {
        "nameEn": "Social & Intellectual Defiance",
        "nameFa": "عصیان فکری و اجتماعی",
        "score": 89,
        "color": "#e8a856"
      }
    ],
    "eventsEn": [
      "Conceived Frankenstein at Villa Diodati, Lake Geneva (1816)",
      "Published The Last Man, pioneering apocalyptic fiction (1826)",
      "Preserved and edited Percy Shelley’s complete poetic works"
    ],
    "eventsFa": [
      "نگارش فرانکنشتاین در ویلا دیوداتی ژنو (۱۸۱۶)",
      "انتشار رمان آخرالزمانی «آخرین انسان» (۱۸۲۶)",
      "تدوین و حفظ آثار فلسفی و شعری دوره رمانتیک"
    ],
    "sources": [
      "Mary Shelley, Journals (1814–1844)",
      "Miranda Seymour (2000), Mary Shelley"
    ]
  },
  {
    "id": "victoria",
    "archiveNo": "ARCHIVE NO. 07",
    "nameEn": "Queen Victoria",
    "nameFa": "ملکه ویکتوریا",
    "datesEn": "1819 – 1901",
    "datesFa": "۱۸۱۹ تا ۱۹۰۱ میلادی",
    "period": "Modern",
    "eraTagEn": "BRITISH EMPIRE • 1819–1901",
    "eraTagFa": "امپراتوری بریتانیا • ۱۸۱۹–۱۹۰۱ م",
    "archetypeEn": "Imperial Grief & Control",
    "archetypeFa": "سوگ مزمن، کنترل خانوادگی و امپراتوری",
    "keywordsEn": "Duty, control, emotional intensity",
    "keywordsFa": "وظیفه، کنترل شدید، سوگ طولانی‌مدت",
    "themes": [
      "Power",
      "Mental Health",
      "Love & Relationships",
      "Legacy"
    ],
    "portrait": "images/victoria.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/600px-Queen_Victoria_by_Bassano.jpg",
    "quoteEn": "“We are not interested in the possibilities of defeat; they do not exist.”",
    "quoteFa": "«ما علاقه‌ای به بررسی احتمال شکست نداریم؛ چنین چیزی وجود ندارد.»",
    "bioEn": "Monarch of the United Kingdom for 63 years and Empress of India. Raised under the isolating \"Kensington System,\" she combined intense emotional dependency on Prince Albert with formidable royal stubbornness and decades-long mourning after his death in 1861.",
    "bioFa": "ملکه بریتانیا به مدت ۶۳ سال. او که در کودکی تحت «سیستم کنزینگتون» در انزوا و کنترل شدید بزرگ شده بود، ترکیبی از وابستگی عاطفی شدید به پرنس آلبرت، کنترل‌گری بر فرزندان و سوگ ۴۰ ساله پس از مرگ همسرش را به نمایش گذاشت.",
    "psychEn": "Her diaries reveal passionate emotional volatility, fear of abandonment, prolonged complicated bereavement, and controlling maternal dynamics—contrasting sharply with her stoic public image.",
    "psychFa": "دفترچه‌های خاطرات او نشان‌دهنده نوسان‌های عاطفی شدید، ترس از تنهایی، اختلال سوگ طولانی‌مدت (Prolonged Grief) و نیاز شدید به کنترل محیط و فرزندان است.",
    "biasEn": "Court physicians and male prime ministers often attributed her political stubbornness to \"female nerves\" or hereditary Hanoverian instability whenever she resisted cabinet policy.",
    "biasFa": "نخست‌وزیران و پزشکان دربار، هرگاه ویکتوریا در برابر سیاست‌های کابینه مقاومت می‌کرد، سرسختی سیاسی او را به «اعصاب زنانه» نسبت می‌دادند.",
    "traits": [
      {
        "nameEn": "Complicated Bereavement & Attachment",
        "nameFa": "وابستگی عاطفی و سوگ مزمن",
        "score": 91,
        "color": "#3dd6c6"
      },
      {
        "nameEn": "Interpersonal & Maternal Control",
        "nameFa": "کنترل‌گری بین‌فردی و خانوادگی",
        "score": 89,
        "color": "#e06c88"
      },
      {
        "nameEn": "Emotional Intensity (Borderline Spectrum)",
        "nameFa": "شدت و نوسان هیجانی",
        "score": 82,
        "color": "#e8a856"
      }
    ],
    "eventsEn": [
      "Ascended the British throne at age 18 (1837)",
      "Death of Prince Albert & withdrawal from public life (1861)",
      "Proclaimed Empress of India (1876) & Diamond Jubilee (1897)"
    ],
    "eventsFa": [
      "جلوس بر تخت سلطنت در ۱۸ سالگی (۱۸۳۷)",
      "درگذشت پرنس آلبرت و آغاز انزوای طولانی (۱۸۶۱)",
      "اعلام عنوان امپراتریس هند (۱۸۷۶) و جشن شصتمین سال سلطنت (۱۸۹۷)"
    ],
    "sources": [
      "Queen Victoria’s Journals (Royal Archives)",
      "Lucy Worsley (2018), Queen Victoria",
      "A.N. Wilson (2014), Victoria: A Life"
    ]
  },
  {
    "id": "beauvoir",
    "archiveNo": "ARCHIVE NO. 08",
    "nameEn": "Simone de Beauvoir",
    "nameFa": "سیمون دو بووار",
    "datesEn": "1908 – 1986",
    "datesFa": "۱۹۰۸ تا ۱۹۸۶ میلادی",
    "period": "Modern",
    "eraTagEn": "20TH CENTURY PARIS • 1908–1986",
    "eraTagFa": "پاریس قرن بیستم • ۱۹۰۸–۱۹۸۶ م",
    "archetypeEn": "Existential Defiance",
    "archetypeFa": "آزادی اگزیستانسیال و ساختارشکنی",
    "keywordsEn": "Freedom, intellect, relational contradictions",
    "keywordsFa": "آزادی، روشنفکری، تناقض‌های عاطفی",
    "themes": [
      "Legacy",
      "Love & Relationships",
      "Ambition"
    ],
    "portrait": "images/beauvoir.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Simone_de_Beauvoir2.png/600px-Simone_de_Beauvoir2.png",
    "quoteEn": "“One is not born, but rather becomes, a woman.”",
    "quoteFa": "«انسان زن زاده نمی‌شود، بلکه زن می‌شود.»",
    "bioEn": "Existentialist philosopher and author of The Second Sex (1949), which revolutionized modern understandings of gender and personality construction. Her unconventional open pact with Jean-Paul Sartre and complex emotional entanglements sparked intense debate.",
    "bioFa": "فیلسوف اگزیستانسیالیست و نویسنده کتاب «جنس دوم» (۱۹۴۹) که درک مدرن از نقش جامعه در شکل‌گیری شخصیت زنان را دگرگون کرد. پیمان رابطه باز او با ژان پل سارتر و نامه‌های منتشرشده‌اش، ابعاد پیچیده‌ای از زندگی درونی او را آشکار ساخت.",
    "psychEn": "Analyzed how patriarchal structures induce what psychiatry labeled \"female neurosis\" or \"narcissism\" by denying women autonomous transcendence. Personally balanced fierce intellectual discipline with deep fear of mortality and relational tension.",
    "psychFa": "او نخستین متفکری بود که نشان داد آنچه روان‌پزشکی سنتی «روان‌نژندی زنانه» یا «خودشیفتگی» می‌نامید، در واقع واکنش طبیعی روان به محرومیت از آزادی و عاملیت اجتماعی است.",
    "biasEn": "Hostile critics upon the publication of The Second Sex resorted to ad hominem psychological attacks, labeling her \"frigid\" or \"neurotic\" rather than engaging her philosophy.",
    "biasFa": "منتقدان سنتی هنگام انتشار «جنس دوم»، به جای نقد فلسفی، به حملات روان‌شناختی شخصی روی آوردند تا جسارت نظری او را بی‌اعتبار کنند.",
    "traits": [
      {
        "nameEn": "Cognitive Autonomy & Deconstruction",
        "nameFa": "ساختارشکنی فکری و استقلال",
        "score": 97,
        "color": "#3dd6c6"
      },
      {
        "nameEn": "Existential Anxiety & Intensity",
        "nameFa": "اضطراب اگزیستانسیال و مرگ‌آگاهی",
        "score": 85,
        "color": "#7b8cff"
      },
      {
        "nameEn": "Relational Unconventionality",
        "nameFa": "ساختارشکنی در روابط بین‌فردی",
        "score": 90,
        "color": "#e06c88"
      }
    ],
    "eventsEn": [
      "Passed the philosophy agrégation at age 21 alongside Sartre (1929)",
      "Published The Second Sex (1949)",
      "Won the Prix Goncourt for The Mandarins (1954)"
    ],
    "eventsFa": [
      "کسب رتبه دوم آزمون فلسفه اگرگاسیون در ۲۱ سالگی (۱۹۲۹)",
      "انتشار شاهکار پژوهشی «جنس دوم» (۱۹۴۹)",
      "دریافت جایزه ادبی گنکور برای رمان ماندارن‌ها (۱۹۵۴)"
    ],
    "sources": [
      "Simone de Beauvoir (1949), Le Deuxième Sexe",
      "Deirdre Bair (1990), Simone de Beauvoir: A Biography",
      "Kate Kirkpatrick (2019), Becoming Beauvoir"
    ]
  },
  {
    "id": "diana",
    "archiveNo": "ARCHIVE NO. 09",
    "nameEn": "Princess Diana",
    "nameFa": "پرنسس دایانا",
    "datesEn": "1961 – 1997",
    "datesFa": "۱۹۶۱ تا ۱۹۹۷ میلادی",
    "period": "Modern",
    "eraTagEn": "LATE 20TH CENTURY BRITAIN • 1961–1997",
    "eraTagFa": "بریتانیای اواخر قرن بیستم • ۱۹۶۱–۱۹۹۷ م",
    "archetypeEn": "Empathy Under Siege",
    "archetypeFa": "همدلی کاریزماتیک در محاصره رسانه",
    "keywordsEn": "Compassion, vulnerability, media pressure",
    "keywordsFa": "همدلی، آسیب‌پذیری عاطفی، فشار رسانه‌ای",
    "themes": [
      "Mental Health",
      "Love & Relationships",
      "Betrayal",
      "Legacy"
    ],
    "portrait": "images/diana.jpg",
    "fallbackPortrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Diana%2C_Princess_of_Wales_1997_%282%29.jpg/600px-Diana%2C_Princess_of_Wales_1997_%282%29.jpg",
    "quoteEn": "“Nothing brings me more happiness than trying to help the most vulnerable people in society.”",
    "quoteFa": "«هیچ‌چیز بیش از تلاش برای یاری رساندن به آسیب‌پذیرترین انسان‌های جامعه مرا شادمان نمی‌کند.»",
    "bioEn": "Princess of Wales whose global humanitarian work (hiv/aids de-stigmatization, landmine ban) and candid public disclosures about bulimia, postpartum depression, and marital betrayal transformed the British monarchy and public discourse on mental health.",
    "bioFa": "شاهدخت ولز که فعالیت‌های بشردوستانه‌اش (شکستن انگ بیماری ایدز و مبارزه با مین‌های زمینی) و صداقت بی‌سابقه‌اش در بیان بولیمیا، افسردگی پس از زایمان و خیانت زناشویی، نگاه جهانی به سلامت روان را تغییر داد.",
    "psychEn": "Biographers and clinicians have discussed attachment trauma from early parental divorce, sensitivity to rejection, bulimia nervosa, and emotional dysregulation under palace isolation—paired with extraordinary empathic attunement to the suffering of others.",
    "psychFa": "پژوهشگران به ترومای دلبستگی در کودکی، حساسیت بالا به طرد شدن (طیف مرزی/Borderline حساسیت عاطفی) و بولیمیا در اثر انزوای کاخ اشاره کرده‌اند؛ که در عین حال به همدلی عمیق و شفقت کم‌نظیر او با رنج دیگران انجامید.",
    "biasEn": "Palace insiders leaked claims to tabloids portraying her as \"paranoid\" and \"hysterical\" to discredit her valid suspicions of surveillance and marital infidelity.",
    "biasFa": "نزدیکان دربار در رسانه‌ها او را «پارانوئید» و «هیستریک» معرفی می‌کردند تا تردیدهای واقعی او درباره خیانت و شنودهای خبری را بی‌اعتبار سازند.",
    "traits": [
      {
        "nameEn": "Empathic Resonance & Vulnerability",
        "nameFa": "همدلی عاطفی و حساسیت به طرد",
        "score": 96,
        "color": "#e8a856"
      },
      {
        "nameEn": "Affective Fragility Under Stress",
        "nameFa": "آسیب‌پذیری هیجانی در فشار محیطی",
        "score": 87,
        "color": "#3dd6c6"
      },
      {
        "nameEn": "Media & Symbolic Agency",
        "nameFa": "هوشمندی در ارتباطات نمادین و رسانه‌ای",
        "score": 92,
        "color": "#7b8cff"
      }
    ],
    "eventsEn": [
      "Opened the UK’s first HIV/AIDS unit shaking hands without gloves (1987)",
      "BBC Panorama interview speaking openly on mental health (1995)",
      "Walked through active Angola minefield with HALO Trust (1997)"
    ],
    "eventsFa": [
      "دست دادن بدون دستکش با بیماران اچ‌آی‌وی و شکستن تابوی جهانی (۱۹۸۷)",
      "مصاحبه تاریخی پانوراما و شکستن سکوت درباره افسردگی و بولیمیا (۱۹۹۵)",
      "عبور از میدان مین در آنگولا برای جلب توجه جهانی (۱۹۹۷)"
    ],
    "sources": [
      "Andrew Morton (1992), Diana: Her True Story",
      "Tina Brown (2007), The Diana Chronicles"
    ]
  },
  {
    "id": "contemporary",
    "archiveNo": "ARCHIVE NO. 10",
    "nameEn": "Modern & Contemporary Era",
    "nameFa": "عصر مدرن و معاصر",
    "datesEn": "2000 – Present",
    "datesFa": "۲۰۰۰ تا اکنون",
    "period": "Contemporary",
    "eraTagEn": "CONTEMPORARY INQUIRY • 2000–PRESENT",
    "eraTagFa": "پژوهش معاصر • ۲۰۰۰ تا اکنون",
    "archetypeEn": "Dimensional Paradigm",
    "archetypeFa": "پارادایم ابعادی و بازنگری انتقادی",
    "keywordsEn": "Identity, trauma, resilience, de-stigmatization",
    "keywordsFa": "هویت، تروما، تاب‌آوری، انگ‌زدایی علمی",
    "themes": [
      "Mental Health",
      "Legacy",
      "Power"
    ],
    "portrait": "images/contemporary.jpg",
    "quoteEn": "“Modern psychiatry moves from rigid labels to understanding the continuum of human adaptation and trauma.”",
    "quoteFa": "«روان‌پزشکی معاصر از برچسب‌های ایستا فاصله گرفته و به درک پیوستار سازگاری، تروما و قدرت نزدیک شده است.»",
    "bioEn": "In the 21st century, both ICD-11 and DSM-5-TR (Alternative Model for Personality Disorders) have shifted toward dimensional trait models—recognizing how complex PTSD, gender norms, and systemic power shape human behavior across history.",
    "bioFa": "در قرن بیست‌ویکم، نظام‌های تشخیصی DSM-5-TR و ICD-11 به سوی «مدل‌های ابعادی شخصیت» حرکت کرده‌اند؛ رویکردی که نشان می‌دهد چگونه ترومای پیچیده، ساختارهای قدرت و انتظارات جنسیتی بر رفتار انسان اثر می‌گذارند.",
    "psychEn": "Replaces stigmatizing historic labels (\"Hysteria\", \"Moral Insanity\") with evidence-based dimensions: Negative Affectivity, Detachment, Antagonism, Disinhibition, and Anankastia.",
    "psychFa": "جایگزینی برچسب‌های تاریخی و جنسیت‌زده (مانند هیستری) با پنج بُعد علمی شخصیت: عاطفه منفی، گسلش، پادگرایی، بازداری‌زدایی و کمال‌گرایی وسواسی.",
    "biasEn": "Contemporary feminist psychiatry actively audits how Borderline and Histrionic diagnoses are still disproportionately applied to women compared to men with identical trauma histories.",
    "biasFa": "روان‌پزشکی انتقادی معاصر بررسی می‌کند که چرا هنوز هم تشخیص‌های مرزی (Borderline) و نمایشی بیش از مردان به زنان دارای سابقه تروما داده می‌شود.",
    "traits": [
      {
        "nameEn": "Trauma-Informed Understanding",
        "nameFa": "رویکرد مبتنی بر شناخت تروما",
        "score": 95,
        "color": "#3dd6c6"
      },
      {
        "nameEn": "Dimensional Trait Accuracy",
        "nameFa": "دقت مدل ابعادی (DSM-5-TR / ICD-11)",
        "score": 92,
        "color": "#7b8cff"
      },
      {
        "nameEn": "Gender-Bias Deconstruction",
        "nameFa": "حذف سوگیری‌های جنسیتی در تشخیص",
        "score": 90,
        "color": "#e8a856"
      }
    ],
    "eventsEn": [
      "Introduction of DSM-5 Alternative Model for Personality Disorders (2013)",
      "WHO ICD-11 transitions fully to Dimensional Personality Framework (2022)",
      "Rise of interdisciplinary psychobiography & historical trauma studies"
    ],
    "eventsFa": [
      "معرفی مدل جایگزین و ابعادی اختلالات شخصیت در DSM-5 (۲۰۱۳)",
      "گذار کامل ICD-11 سازمان جهانی بهداشت به مدل ابعادی شخصیت (۲۰۲۲)",
      "گسترش پژوهش‌های میان‌رشته‌ای تاریخ روان‌پزشکی و جنسیت"
    ],
    "sources": [
      "APA (2022), DSM-5-TR Section III Alternative Model",
      "WHO (2022), ICD-11 Personality Disorders",
      "Elaine Showalter (1985), The Female Malady"
    ],
    "fallbackPortrait": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80"
  }
];

const UI_TEXT = {
  "en": {
    "navTimeline": "Timeline",
    "navProfiles": "Profiles & Dossier",
    "navPsychology": "Psychology",
    "navMethodology": "Methodology",
    "navAddCase": "Add Entry",
    "navGithub": "GitHub",
    "searchPlaceholder": "Search a woman, era, or trait...",
    "heroTagHistory": "HISTORY",
    "heroTagPsychology": "PSYCHOLOGY",
    "heroTagPower": "POWER",
    "mainArchiveSub": "A historical journey through the minds, choices, and contradictions of extraordinary women—examining how power, gender norms, and psychological traits shaped history.",
    "btnOpenDossier": "Examine Psychological Dossier",
    "btnNextFigure": "Next Figure",
    "filterThemesTitle": "THEMES",
    "filterPeriodsTitle": "TIME PERIODS",
    "filterReset": "Reset",
    "researchSubTag": "HISTORICAL PSYCHIATRY",
    "mindThroughTimeTitle": "Mind<br/>Through<br/>Time",
    "mindThroughTimeDesc": "From ancient humoral theories and the gendered myth of \"Hysteria\" to modern dimensional personality models (DSM-5-TR & ICD-11), explore how psychiatry interpreted female power.",
    "btnReadNote": "Scientific Note",
    "graphTitle": "THE EVOLUTION OF PERSONALITY THEORIES & TRAIT INTERPRETATION",
    "graphDefaultSub": "Click any psychological dimension on the right to highlight its historical trajectory.",
    "traitNeurosis": "Neurosis",
    "traitHistrionic": "Histrionic",
    "traitBorderline": "Borderline",
    "traitNarcissistic": "Narcissistic",
    "traitAntisocial": "Antisocial",
    "eraAncient": "Ancient",
    "eraMedieval": "Medieval",
    "eraRenaissance": "Renaissance",
    "eraEarlyModern": "Early Modern",
    "eraModern": "Modern",
    "eraContemporary": "Contemporary",
    "deepDiveTag": "CASE ANALYSIS",
    "deepDiveTitle": "Deep Dive",
    "deepDiveDesc": "Explore detailed profiles, psychological trait analysis, and historical context for each woman.",
    "btnExportJson": "Export Research JSON",
    "modalLabelEra": "Historical Era:",
    "modalLabelDates": "Lifespan:",
    "modalLabelRole": "Archetype:",
    "modalHeaderTag": "INTERDISCIPLINARY RESEARCH DOSSIER",
    "modalSec1": "1. Historical Record & Exercise of Power",
    "modalSec2": "2. Psychobiographical Trait Spectrum (Non-Diagnostic)",
    "modalSec3": "3. Historiographical Critique & Gender Bias",
    "modalEventsTitle": "Key Documented Events",
    "modalSourcesTitle": "Primary & Secondary Sources",
    "methodModalTitle": "Why \"Women, Power & Personality\"?",
    "methodP1": "Retrospective psychiatric diagnosis (assigning clinical DSM/ICD personality disorders to figures who lived centuries ago) faces severe methodological limitations due to the absence of direct clinical interviews.",
    "methodP2": "Furthermore, the history of psychiatry—most notably the construct of \"Hysteria\" in the 19th century—demonstrates that medical labels were frequently weaponized against women who exhibited political ambition or intellectual defiance.",
    "methodP3": "In this archive, we separate documented historical actions (alliances, statecraft, ruthlessness, trauma) from retrospective psychological interpretations, using modern dimensional personality theory.",
    "addModalTitle": "Add Figure to Historical Timeline"
  },
  "fa": {
    "navTimeline": "تایم‌لاین تاریخی",
    "navProfiles": "پرونده تحلیلی شخصیت‌ها",
    "navPsychology": "تکامل نظریه‌های شخصیت",
    "navMethodology": "روش‌شناسی پژوهش",
    "navAddCase": "افزودن شخصیت",
    "navGithub": "گیت‌هاب",
    "searchPlaceholder": "جستجوی نام شخصیت، دوره یا ویژگی روان‌شناختی...",
    "heroTagHistory": "تاریخ",
    "heroTagPsychology": "روان‌شناسی",
    "heroTagPower": "قدرت",
    "mainArchiveSub": "سفری تاریخی در ذهن، انتخاب‌ها و تناقض‌های زنان اثرگذار تاریخ؛ پژوهشی میان‌رشته‌ای درباره پیوند قدرت، سیاست و ابعاد روان‌شناختی شخصیت.",
    "btnOpenDossier": "مشاهده پرونده کامل روان‌شناختی و تاریخی",
    "btnNextFigure": "شخصیت بعدی",
    "filterThemesTitle": "محورهای موضوعی",
    "filterPeriodsTitle": "دوره‌های تاریخی",
    "filterReset": "نمایش همه",
    "researchSubTag": "تاریخ روان‌پزشکی",
    "mindThroughTimeTitle": "ذهن در<br/>گذر<br/>زمان",
    "mindThroughTimeDesc": "از نظریه اخلاط چهارگانه باستان و مفهوم جنسیت‌زده «هیستری» تا مدل‌های ابعادی مدرن در DSM-5-TR؛ بررسی کنید چگونه روان‌پزشکی قدرت و ناهمرنگی زنان را تفسیر کرده است.",
    "btnReadNote": "یادداشت علمی پژوهش",
    "graphTitle": "سیر تحول نظریه‌های شخصیت و تفسیرهای روان‌شناختی در تاریخ",
    "graphDefaultSub": "روی هر یک از ابعاد روان‌شناختی کلیک کنید تا تاریخچه و نمودار آن برجسته شود.",
    "traitNeurosis": "روان‌نژندی (Neurosis)",
    "traitHistrionic": "نمایشی / هیستری",
    "traitBorderline": "مرزی (Borderline)",
    "traitNarcissistic": "خودشیفته (Narcissistic)",
    "traitAntisocial": "ضداجتماعی / ماکیاولیستی",
    "eraAncient": "باستان",
    "eraMedieval": "قرون وسطی",
    "eraRenaissance": "رنسانس",
    "eraEarlyModern": "مدرن متقدم",
    "eraModern": "مدرن",
    "eraContemporary": "معاصر",
    "deepDiveTag": "لایه تحلیل عمیق",
    "deepDiveTitle": "کاوش عمیق",
    "deepDiveDesc": "بررسی جامع پرونده هر شخصیت، تحلیل ابعادی صفات شخصیت، تصمیم‌های بحث‌برانگیز و نقد منابع تاریخی.",
    "btnExportJson": "خروجی JSON پژوهش",
    "modalLabelEra": "دوره تاریخی:",
    "modalLabelDates": "سال‌های زندگی:",
    "modalLabelRole": "کهن‌الگوی رفتاری:",
    "modalHeaderTag": "پرونده پژوهشی میان‌رشته‌ای (تاریخ و روان‌شناسی)",
    "modalSec1": "۱. کارنامه تاریخی، قدرت و تصمیم‌های بحث‌برانگیز",
    "modalSec2": "۲. نیمرخ ابعادی ویژگی‌های شخصیت (تحلیل غیرتشخیصی)",
    "modalSec3": "۳. نقد تاریخ‌نگاری و سوگیری‌های جنسیتی در تشخیص",
    "modalEventsTitle": "رویدادهای کلیدی مستند",
    "modalSourcesTitle": "منابع پژوهشی و تاریخی",
    "methodModalTitle": "درباره هویت علمی پژوهش: زنان، قدرت و شخصیت",
    "methodP1": "تشخیص روان‌پزشکی گذشته‌نگر (نسبت دادن قطعی اختلالات شخصیت DSM به افرادی که قرن‌ها پیش می‌زیسته‌اند) بدون مصاحبه بالینی مستقیم با محدودیت‌های جدی علمی روبه‌روست.",
    "methodP2": "علاوه بر این، تاریخچه مفاهیمی مانند «هیستری» نشان می‌دهد که برچسب‌های پزشکی اغلب تحت تأثیر نگرش‌های جنسیتی و سیاسی علیه زنان قدرتمند یا ساختارشکن به کار رفته‌اند.",
    "methodP3": "در این پروژه، «رفتارهای سیاسی و تاریخی مستند» از «تفسیرهای روان‌شناختی ابعادی» تفکیک شده‌اند تا پژوهشی دقیق، علمی و معتبر ارائه شود.",
    "addModalTitle": "افزودن شخصیت جدید به آرشیو پژوهشی"
  }
};

const TRAIT_CURVE_INFO = {
  "neurosis": {
    "en": "Neurosis & Melancholia: From Hippocratic \"black bile\" to Freudian psychoneurosis, emotional distress in intellectual women was often framed as constitutional weakness.",
    "fa": "روان‌نژندی و مالیخولیا: از نظریه «سودا» در طب باستان تا روان‌نژندی فرویدی؛ اندوه فلسفی و حساسیت عاطفی زنان متفکر اغلب به عنوان ضعف سرشتی تفسیر می‌شد."
  },
  "histrionic": {
    "en": "Histrionic & Hysteria: Rooted in the Greek \"hystera\" (womb), dramatic statecraft or emotional expressiveness in women was medicalized for centuries until DSM-III replaced Hysteria.",
    "fa": "نمایشی و تاریخچه هیستری: برگرفته از واژه یونانی Hystera؛ قرن‌ها هرگونه ابرازگری هیجانی یا کاریزمای نمایشی در زنان با برچسب پزشکی «هیستری» توصیف می‌شد."
  },
  "borderline": {
    "en": "Borderline Spectrum: Formalized in the 20th century (DSM-III, 1980), characterized by intense affect, attachment trauma, and fear of abandonment under extreme interpersonal stress.",
    "fa": "طیف مرزی (Borderline): صورت‌بندی‌شده در قرن بیستم؛ ناظر بر شدت هیجانی بالا، ترومای دلبستگی و حساسیت شدید به طرد شدن در محیط‌های پرالتهاب."
  },
  "narcissistic": {
    "en": "Narcissistic Spectrum: Grandiosity, need for admiration, and entitlement—traits celebrated as \"greatness\" in male emperors but pathologized as vanity in female rulers.",
    "fa": "طیف خودشیفتگی: خودبزرگ‌بینی و جاه‌طلبی کلان؛ ویژگی‌هایی که در پادشاهان مرد «عظمت و اقتدار» ستوده می‌شد اما در زنان فرمانروا «غرور بیمارگونه» نام می‌گرفت."
  },
  "antisocial": {
    "en": "Antisocial & Machiavellian: Ruthless realpolitik, strategic deception, and calculation in high-stakes dynastic survival.",
    "fa": "طیف ضداجتماعی و ماکیاولیستی: بی‌رحمی سیاسی، محاسبه‌گری سرد و عبور از خطوط اخلاقی در نبردهای خونین بر سر بقا و قدرت."
  }
};
