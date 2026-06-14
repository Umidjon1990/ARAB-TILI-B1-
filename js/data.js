/* ============================================================
   BOSQICHLI ARAB TILI B1 — O'yin savollar bazasi
   1-DARS
   Bo'limlar: Sarf | Nahv | Matn | Og'zaki
   Savol turlari:
     - mcq        : 4 variantli test
     - truefalse  : صواب / خطأ
     - fill       : bo'sh joyni to'g'ri variant bilan to'ldirish
     - match      : juftlash (so'z ↔ tarjima / savol ↔ javob)
   ============================================================ */

const LESSON1 = {
  id: 1,
  title: "1-dars",
  subtitle: "Mudoaf fe'llari · الإعراب · نوم مريح · العائلة",
  sections: [

    /* ===================== 1) SARF ===================== */
    {
      id: "sarf",
      name: "Sarf",
      arName: "الصَّرْف",
      icon: "🔤",
      color: "#6c5ce7",
      desc: "Mudoaf fe'llari — fe'l tuslash",
      questions: [
        {
          type: "mcq",
          prompt: "«Mudoaf» fe'l qanday fe'l?",
          options: [
            "2- va 3-harflari bir xil bo'lgan sulosiy mujarrad fe'l",
            "Birinchi harfi illat bo'lgan fe'l",
            "To'rt harfli mazidun fihi fe'l",
            "O'rtasi alif bo'lgan ajvaf fe'l"
          ],
          answer: 0,
          explain: "Mudoaf (مُضَاعَف) — ikkinchi va uchinchi o'zak harflari bir xil bo'lgan fe'l: ف-ع-ع."
        },
        {
          type: "mcq",
          prompt: "«مَدَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["uzatdi", "qaytardi", "o'yladi", "to'sdi"],
          answer: 0,
          explain: "مَدَّ — uzatdi, cho'zdi."
        },
        {
          type: "mcq",
          prompt: "«ظَنَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["o'yladi, deb o'yladi", "bog'ladi", "qaytardi", "uzatdi"],
          answer: 0,
          explain: "ظَنَّ — o'yladi, gumon qildi."
        },
        {
          type: "mcq",
          prompt: "«صَدَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["to'sdi", "uzatdi", "qaytardi", "mahkamladi"],
          answer: 0,
          explain: "صَدَّ — to'sdi, qaytardi (yo'lini)."
        },
        {
          type: "match",
          prompt: "Fe'llarni ma'nosi bilan juftlang",
          pairs: [
            { ar: "مَدَّ", uz: "uzatdi" },
            { ar: "شَدَّ", uz: "bog'ladi" },
            { ar: "رَدَّ", uz: "qaytardi" },
            { ar: "صَدَّ", uz: "to'sdi" }
          ],
          explain: "مَدَّ-uzatdi, شَدَّ-bog'ladi/mahkamladi, رَدَّ-qaytardi, صَدَّ-to'sdi."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» (qaytardi) — هُوَ uchun MOZIY shaklini tanlang",
          arabic: true,
          sentence: "هُوَ ＿＿",
          options: ["رَدَّ", "رَدُّوا", "رَدَدْنَا", "يَرُدُّ"],
          answer: 0,
          explain: "هُوَ + moziy = رَدَّ."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — هُوَ uchun MUZORIY shaklini tanlang",
          arabic: true,
          sentence: "هُوَ ＿＿",
          options: ["يَرُدُّ", "رَدَّ", "رُدَّ", "رَادٌّ"],
          answer: 0,
          explain: "هُوَ + muzoriy = يَرُدُّ."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — هُمْ uchun MOZIY shaklini tanlang",
          arabic: true,
          sentence: "هُمْ ＿＿",
          options: ["رَدُّوا", "رَدَّ", "رَدَدْنَا", "رَدَّتْ"],
          answer: 0,
          explain: "هُمْ (ko'plik, erkak) + moziy = رَدُّوا."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — نَحْنُ uchun MOZIY shaklini tanlang",
          arabic: true,
          sentence: "نَحْنُ ＿＿",
          options: ["رَدَدْنَا", "رَدُّوا", "رَدَّ", "نَرُدُّ"],
          answer: 0,
          explain: "نَحْنُ + moziy = رَدَدْنَا (mudoaf «nun» bilan ochiladi)."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» (qochdi) fe'lining هُوَ uchun muzoriy shakli qaysi?",
          arabic: true,
          options: ["يَفِرُّ", "يَفُرُّ", "يَفَرُّ", "يُفَرُّ"],
          answer: 0,
          explain: "فَرَّ ning o'rta unlisi «i» — shuning uchun muzoriysi يَفِرُّ (يُفَرُّ — majhul, qolganlari noto'g'ri unli)."
        }
      ]
    },

    /* ===================== 2) NAHV ===================== */
    {
      id: "nahv",
      name: "Nahv",
      arName: "النَّحْو",
      icon: "📐",
      color: "#00b894",
      desc: "الإعراب — i'rob holatlari va tarjima",
      questions: [
        {
          type: "mcq",
          prompt: "«الإعراب» nima?",
          options: [
            "Omillar ta'sirida so'z oxirining o'zgarishi",
            "So'z boshidagi harakatning o'zgarishi",
            "Fe'lning o'tgan zamonga aylanishi",
            "Ikki so'zni bir-biriga bog'lash"
          ],
          answer: 0,
          explain: "الإعراب — kelgan omilga (grammatik vazifaga) qarab so'zning oxiri o'zgarishidir."
        },
        {
          type: "mcq",
          prompt: "«جَاءَ سَعِيدٌ» — «سَعِيدٌ» so'zining i'rob holati qaysi?",
          arabic: true,
          options: ["مَرْفُوعٌ (rafʼ)", "مَنْصُوبٌ (nasb)", "مَجْرُورٌ (jarr)", "مَجْزُومٌ (jazm)"],
          answer: 0,
          explain: "U فاعل (ega) bo'lgani uchun مرفوع — oxiri «ٌ» (damma)."
        },
        {
          type: "mcq",
          prompt: "«رَأَيْتُ سَعِيدًا» — «سَعِيدًا» so'zining holati qaysi?",
          arabic: true,
          options: ["مَنْصُوبٌ (nasb)", "مَرْفُوعٌ (rafʼ)", "مَجْرُورٌ (jarr)", "مَبْنِيٌّ"],
          answer: 0,
          explain: "U مفعول به (to'ldiruvchi) bo'lgani uchun منصوب — oxiri «ً» (fatha tanvin)."
        },
        {
          type: "mcq",
          prompt: "«مَرَرْتُ بِسَعِيدٍ» — «سَعِيدٍ» so'zining holati qaysi?",
          arabic: true,
          options: ["مَجْرُورٌ (jarr)", "مَرْفُوعٌ (rafʼ)", "مَنْصُوبٌ (nasb)", "مَجْزُومٌ"],
          answer: 0,
          explain: "جarr harfi «بِـ» dan keyin kelgani uchun مجرور — oxiri «ٍ» (kasra tanvin)."
        },
        {
          type: "mcq",
          prompt: "«سَعِيدٌ» nima sababdan مرفوع bo'ldi?",
          arabic: true,
          options: [
            "Chunki u فاعل (ega)",
            "Chunki u مفعول به",
            "Chunki undan oldin جarr harfi bor",
            "Chunki u harf"
          ],
          answer: 0,
          explain: "«جاء» fe'lining فاعل-i bo'lgani uchun مرفوع bo'ldi."
        },
        {
          type: "mcq",
          prompt: "Rafʼ (raf') holatining asosiy alomati qaysi?",
          arabic: true,
          options: ["الضَّمَّة (damma)", "الفَتْحَة (fatha)", "الكَسْرَة (kasra)", "السُّكُون"],
          answer: 0,
          explain: "Rafʼ alomatlari: damma, vov, alif, nun. Asosiysi — الضمة."
        },
        {
          type: "match",
          prompt: "Arabcha gapni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "جَاءَ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ", uz: "Muhammad maktabga keldi" },
            { ar: "سَافَرَ عَلِيٌّ إِلَى الْقَاهِرَةِ", uz: "Ali Qohiraga safar qildi" },
            { ar: "رَجَعَ الْمُسَافِرُونَ مُتَأَخِّرًا", uz: "Sayohatchilar kech qaytishdi" }
          ],
          explain: "Gaplarni so'zma-so'z tahlil qilib tarjima qilamiz."
        },
        {
          type: "fill",
          prompt: "Bo'sh joyga to'g'ri i'rob alomatini qo'ying: «جَاءَ مُحَمَّد＿» (Muhammad keldi — fоil)",
          arabic: true,
          sentence: "جَاءَ مُحَمَّد ＿",
          options: ["ٌ  (damma)", "ً  (fatha)", "ٍ  (kasra)", "ْ  (sukun)"],
          answer: 0,
          explain: "Faol — مرفوع, shuning uchun «مُحَمَّدٌ» (damma tanvin)."
        }
      ]
    },

    /* ===================== 3) MATN ===================== */
    {
      id: "matn",
      name: "Matn",
      arName: "النَّصّ",
      icon: "📖",
      color: "#0984e3",
      desc: "خَمْسُ نَصَائِحَ لِنَوْمٍ مُرِيحٍ — matn va lug'at",
      readingTitle: "خَمْسُ نَصَائِحَ لِنَوْمٍ مُرِيحٍ",
      reading: "يُعَدُّ النَّوْمُ المُرِيحُ مِنْ رَكَائِزِ أُسْلُوبِ الْحَيَاةِ الصِّحِّيِّ، شَأْنُهُ فِي ذَلِكَ شَأْنُ التَّغْذِيَةِ السَّلِيمَةِ وَالْمُوَاظَبَةِ عَلَى الرِّيَاضَةِ. وَيُمْكِنُ التَّمَتُّعُ بِنَوْمٍ مُرِيحٍ مِنْ خِلَالِ اتِّبَاعِ تَدَابِيرَ سَهْلَةٍ مِنْهَا: التَّهْوِيَةُ الْجَيِّدَةُ لِغُرْفَةِ النَّوْمِ بِحَيْثُ تَتَرَاوَحُ دَرَجَةُ حَرَارَتِهَا بَيْنَ 16 و18 دَرَجَةً مِئَوِيَّةً، وَأَخْذُ قِسْطٍ مِنَ الرَّاحَةِ قَبْلَ النَّوْمِ، وَتَجَنُّبُ اسْتِخْدَامِ الْأَجْهِزَةِ الْإِلِكْتْرُونِيَّةِ، وَعَشَاءٌ خَفِيفٌ، وَمُمَارَسَةُ الرِّيَاضَةِ بِاعْتِدَالٍ.",
      questions: [
        {
          type: "truefalse",
          prompt: "التَّغْذِيَةُ السَّلِيمَةُ جُزْءٌ مِنْ أُسْلُوبِ الْحَيَاةِ الصِّحِّيِّ",
          arabic: true,
          answer: true,
          explain: "صَوَاب — matnda to'g'ri ovqatlanish sog'lom hayot ustunlaridan deyilgan."
        },
        {
          type: "truefalse",
          prompt: "النَّوْمُ الْمُرِيحُ جُزْءٌ هَامٌّ مِنْ أُسْلُوبِ الْحَيَاةِ الصِّحِّيِّ",
          arabic: true,
          answer: true,
          explain: "صَوَاب — rohatli uyqu sog'lom turmush tarzining muhim qismi."
        },
        {
          type: "truefalse",
          prompt: "الْقِيَامُ بِأَعْمَالِ الْمَنْزِلِ يُسَاعِدُ عَلَى النَّوْمِ الْهَادِئِ",
          arabic: true,
          answer: false,
          explain: "خَطَأ — aksincha, uy ishlaridan uyqudan oldin tiyilish tavsiya etiladi."
        },
        {
          type: "truefalse",
          prompt: "اسْتِخْدَامُ الْأَجْهِزَةِ الْإِلِكْتْرُونِيَّةِ يُسَاعِدُ عَلَى النَّوْمِ",
          arabic: true,
          answer: false,
          explain: "خَطَأ — elektron qurilmalardan foydalanishdan saqlanish kerak."
        },
        {
          type: "mcq",
          prompt: "قَبْلَ النَّوْمِ يَنْبَغِي أَخْذُ قِسْطٍ ＿＿",
          arabic: true,
          options: ["مِنَ الرَّاحَةِ", "مِنَ الْمَنْزِلِ", "مِنَ الرِّيَاضَةِ", "مِنَ الْعَشَاءِ"],
          answer: 0,
          explain: "Uyqudan oldin biroz «dam olish» — مِنَ الرَّاحَةِ."
        },
        {
          type: "mcq",
          prompt: "يَنْبَغِي تَوْفِيرُ تَهْوِيَةٍ جَيِّدَةٍ ＿＿",
          arabic: true,
          options: ["فِي غُرْفَةِ النَّوْمِ", "فِي وَجْبَةِ الْعَشَاءِ", "فِي أَجْهِزَةِ الْمَنْزِلِ", "فِي الرِّيَاضَةِ"],
          answer: 0,
          explain: "Yaxshi shamollatish — yotoqxonada (فِي غُرْفَةِ النَّوْمِ)."
        },
        {
          type: "mcq",
          prompt: "قَبْلَ النَّوْمِ يَنْبَغِي تَجَنُّبُ ＿＿ (qochish kerak)",
          arabic: true,
          options: ["الْوَجَبَاتِ الثَّقِيلَةِ", "الْعَشَاءِ الْخَفِيفِ", "الرَّاحَةِ", "التَّهْوِيَةِ"],
          answer: 0,
          explain: "Og'ir ovqatlardan saqlanish kerak — الْوَجَبَاتِ الثَّقِيلَةِ."
        },
        {
          type: "match",
          prompt: "So'zni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "نَوْمٌ مُرِيحٌ", uz: "rohatli uyqu" },
            { ar: "التَّهْوِيَةُ", uz: "havoni almashtirish" },
            { ar: "عَشَاءٌ خَفِيفٌ", uz: "yengil tushlik" },
            { ar: "بِاعْتِدَالٍ", uz: "o'rtacha" }
          ],
          explain: "Matn lug'atidagi asosiy so'zlar."
        },
        {
          type: "mcq",
          prompt: "«رَكِيزَةٌ» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["asos / ustun", "uyqu", "ovqat", "harorat"],
          answer: 0,
          explain: "رَكِيزَة (ko'pligi رَكَائِز) — asos, ustun, tayanch."
        }
      ]
    },

    /* ===================== 4) OG'ZAKI ===================== */
    {
      id: "ogzaki",
      name: "Og'zaki",
      arName: "الْمُحَادَثَة",
      icon: "🗣️",
      color: "#e17055",
      desc: "العَائِلَة — savol-javob namunalari",
      questions: [
        {
          type: "mcq",
          prompt: "«مَنْ أَقْرَبُ شَخْصٍ إِلَيْكَ فِي عَائِلَتِكَ؟» — namunaviy javobda kim eng yaqin shaxs deyilgan?",
          arabic: true,
          options: ["أُمِّي (onam)", "أَبِي (otam)", "أَخِي (akam)", "جَدِّي (bobom)"],
          answer: 0,
          explain: "Namunaviy javob: «أَقْرَبُ شَخْصٍ إِلَيَّ هِيَ أُمِّي»."
        },
        {
          type: "fill",
          prompt: "Javobni to'ldiring: «أَقْرَبُ شَخْصٍ إِلَيَّ هِيَ ＿＿»",
          arabic: true,
          sentence: "أَقْرَبُ شَخْصٍ إِلَيَّ هِيَ ＿＿",
          options: ["أُمِّي", "السُّوقُ", "الْمَدْرَسَةُ", "الرِّيَاضَةُ"],
          answer: 0,
          explain: "«...hِيَ أُمِّي» — eng yaqin insonim onam."
        },
        {
          type: "mcq",
          prompt: "«مَاذَا تَفْعَلُ مَعَ عَائِلَتِكَ فِي العُطْلَةِ؟» savoliga mos javob qaysi?",
          arabic: true,
          options: [
            "أَقْضِي الوَقْتَ مَعَ عَائِلَتِي",
            "أَذْهَبُ إِلَى الْعَمَلِ",
            "أَدْرُسُ النَّحْوَ وَحْدِي",
            "أَنَامُ طَوَالَ اليَوْمِ"
          ],
          answer: 0,
          explain: "Ta'tilda — «oilam bilan vaqt o'tkazaman»."
        },
        {
          type: "match",
          prompt: "Savolni javobi bilan juftlang",
          pairs: [
            { ar: "هَلْ عِنْدَكَ عَائِلَةٌ كَبِيرَةٌ؟", uz: "نَعَمْ، عِنْدِي عَائِلَةٌ كَبِيرَةٌ" },
            { ar: "مَنْ أَقْرَبُ شَخْصٍ إِلَيْكَ؟", uz: "أَقْرَبُ شَخْصٍ إِلَيَّ أُمِّي" },
            { ar: "مَاذَا تَفْعَلُ فِي العُطْلَةِ؟", uz: "أَقْضِي الوَقْتَ مَعَ عَائِلَتِي" }
          ],
          arabicBoth: true,
          explain: "Og'zaki imtihon uchun savol-javob juftliklari."
        }
      ]
    }

  ]
};

const GAME_DATA = { lessons: [LESSON1] };
