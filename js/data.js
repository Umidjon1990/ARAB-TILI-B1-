/* ============================================================
   BOSQICHLI ARAB TILI B1 — O'yin savollar bazasi
   1-DARS  (kengaytirilgan)
   Bo'limlar: Sarf | Nahv | Matn | Og'zaki
   Savol turlari:
     - mcq        : 4 variantli test
     - truefalse  : صواب / خطأ
     - fill       : bo'sh joyni to'g'ri variant bilan to'ldirish
     - match      : juftlash (so'z ↔ tarjima / savol ↔ javob)
   Eslatma: variantlar o'yin paytida avtomatik aralashtiriladi (game.js).
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
            "O'rtasi alif bo'lgan ajvaf fe'l",
            "Oxirgi harfi illat bo'lgan noqis fe'l"
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
          explain: "صَدَّ — to'sdi, yo'lini qaytardi."
        },
        {
          type: "mcq",
          prompt: "«عَضَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["tishladi", "qochdi", "o'tdi", "jiringladi"],
          answer: 0,
          explain: "عَضَّ — tishladi."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["qochdi", "qaytardi", "berkitdi", "o'tdi"],
          answer: 0,
          explain: "فَرَّ — qochdi."
        },
        {
          type: "mcq",
          prompt: "«مَرَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["o'tdi", "tishladi", "uzatdi", "qochdi"],
          answer: 0,
          explain: "مَرَّ — o'tdi, o'tib ketdi."
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
          type: "match",
          prompt: "Fe'llarni ma'nosi bilan juftlang",
          pairs: [
            { ar: "عَضَّ", uz: "tishladi" },
            { ar: "فَرَّ", uz: "qochdi" },
            { ar: "مَرَّ", uz: "o'tdi" },
            { ar: "رَنَّ", uz: "jiringladi" }
          ],
          explain: "عَضَّ-tishladi, فَرَّ-qochdi, مَرَّ-o'tdi, رَنَّ-jiringladi."
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
          type: "fill",
          prompt: "«رَدَّ» — أَنْتَ uchun MOZIY shaklini tanlang",
          arabic: true,
          sentence: "أَنْتَ ＿＿",
          options: ["رَدَدْتَ", "رَدَّ", "رَدُّوا", "رَدَدْنَا"],
          answer: 0,
          explain: "أَنْتَ + moziy = رَدَدْتَ."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — نَحْنُ uchun MUZORIY shaklini tanlang",
          arabic: true,
          sentence: "نَحْنُ ＿＿",
          options: ["نَرُدُّ", "أَرُدُّ", "يَرُدُّ", "رَدَدْنَا"],
          answer: 0,
          explain: "نَحْنُ + muzoriy = نَرُدُّ."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — أَنْتَ uchun AMR (buyruq) shaklini tanlang",
          arabic: true,
          sentence: "أَنْتَ ＿＿",
          options: ["رُدَّ", "رَدَّ", "يَرُدُّ", "رَدُّوا"],
          answer: 0,
          explain: "Amr (buyruq): أَنْتَ → رُدَّ (qaytar!)."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» (qochdi) fe'lining هُوَ uchun muzoriy shakli qaysi?",
          arabic: true,
          options: ["يَفِرُّ", "يَفُرُّ", "يَفَرُّ", "يُفَرُّ"],
          answer: 0,
          explain: "فَرَّ ning o'rta unlisi «i» — shuning uchun muzoriysi يَفِرُّ (يُفَرُّ — majhul, qolganlari noto'g'ri unli)."
        },
        {
          type: "fill",
          prompt: "«عَضَّ» (tishladi) — هُوَ uchun MUZORIY shaklini tanlang",
          arabic: true,
          sentence: "هُوَ ＿＿",
          options: ["يَعَضُّ", "يَعُضُّ", "يَعِضُّ", "عَضُّوا"],
          answer: 0,
          explain: "عَضَّ ning o'rta unlisi «a» — muzoriysi يَعَضُّ."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lining MAJHUL (moziy) shakli qaysi?",
          arabic: true,
          options: ["فُرَّ", "فَرَّ", "يَفِرُّ", "فَارٌّ"],
          answer: 0,
          explain: "Majhul (moziy): فُرَّ — «qochildi»."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lidan yasalgan ISMU FOIL (qiluvchi) qaysi?",
          arabic: true,
          options: ["فَارٌّ", "مَفْرُورٌ", "مَفِرٌّ", "يُفَرُّ"],
          answer: 0,
          explain: "Ismu foil — فَارٌّ (qochuvchi). مَفْرُورٌ esa ismu maf'ul."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lidan yasalgan ISMU MAF'UL qaysi?",
          arabic: true,
          options: ["مَفْرُورٌ", "فَارٌّ", "مَفِرٌّ", "فِرَّ"],
          answer: 0,
          explain: "Ismu maf'ul — مَفْرُورٌ."
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
          explain: "Jarr harfi «بِـ» dan keyin kelgani uchun مجرور — oxiri «ٍ» (kasra tanvin)."
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
          type: "mcq",
          prompt: "Nasb (منصوب) holatining asosiy alomati qaysi?",
          arabic: true,
          options: ["الفَتْحَة (fatha)", "الضَّمَّة (damma)", "الكَسْرَة (kasra)", "السُّكُون"],
          answer: 0,
          explain: "Nasb alomatlari: fatha, alif, kasra, ya, nun tushishi. Asosiysi — الفتحة."
        },
        {
          type: "mcq",
          prompt: "Jarr (مجرور) holatining asosiy alomati qaysi?",
          arabic: true,
          options: ["الكَسْرَة (kasra)", "الفَتْحَة (fatha)", "الضَّمَّة (damma)", "السُّكُون"],
          answer: 0,
          explain: "Jarr alomatlari: kasra, ya, fatha. Asosiysi — الكسرة."
        },
        {
          type: "match",
          prompt: "Arabcha gapni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "جَاءَ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ", uz: "Muhammad maktabga keldi" },
            { ar: "سَافَرَ عَلِيٌّ وَزَيْدٌ إِلَى الْقَاهِرَةِ", uz: "Ali va Zayd Qohiraga safar qilishdi" },
            { ar: "رَجَعَ الْمُسَافِرُونَ مُتَأَخِّرًا", uz: "Sayohatchilar kech qaytishdi" }
          ],
          explain: "Qo'llanmadagi 1-mashq gaplaridan."
        },
        {
          type: "match",
          prompt: "Arabcha gapni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "مَرَرْتُ بِالْقَاضِي فِي الطَّرِيقِ", uz: "Yo'lda qozi bilan o'tdim" },
            { ar: "دَعَا الْقَاضِي إِلَى الْوَلِيمَةِ", uz: "Qozi ziyofatga chaqirdi" },
            { ar: "نَظَرْنَا إِلَى سَفِينَةٍ فِي الْبَحْرِ", uz: "Dengizdagi kemaga qaradik" }
          ],
          explain: "Qo'llanmadagi 1-mashq gaplaridan."
        },
        {
          type: "match",
          prompt: "Arabcha gapni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "كَلَّمَ الْمُدَرِّسُ التَّلَامِيذَ", uz: "O'qituvchi o'quvchilarga gapirdi" },
            { ar: "سَلَّمْتُ عَلَى الْقَاضِي فِي الْجَلْسَةِ", uz: "Majlisda qoziga salom berdim" },
            { ar: "اِجْتَمَعْنَا بِمُرْتَضَى بَعْدَ الظُّهْرِ", uz: "Peshindan keyin Murtazo bilan uchrashdik" }
          ],
          explain: "Qo'llanmadagi 1-mashq gaplaridan."
        },
        {
          type: "mcq",
          prompt: "«جَاءَ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ» — «مُحَمَّدٌ» so'zining holati?",
          arabic: true,
          options: ["مَرْفُوعٌ (فاعل)", "مَنْصُوبٌ (مفعول)", "مَجْرُورٌ", "مَجْزُومٌ"],
          answer: 0,
          explain: "«محمدٌ» — «جاء» fe'lining فاعل-i, shuning uchun مرفوع."
        },
        {
          type: "mcq",
          prompt: "«جَاءَ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ» — «الْمَدْرَسَةِ» nega مجرور bo'ldi?",
          arabic: true,
          options: [
            "«إلى» jarr harfidan keyin kelgani uchun",
            "U فاعل bo'lgani uchun",
            "U مفعول به bo'lgani uchun",
            "U fe'l bo'lgani uchun"
          ],
          answer: 0,
          explain: "«إلى» — harfu jarr, undan keyingi ism مجرور bo'ladi (kasra bilan)."
        },
        {
          type: "mcq",
          prompt: "«رَجَعَ الْمُسَافِرُونَ مُتَأَخِّرًا» — «الْمُسَافِرُونَ» holati?",
          arabic: true,
          options: ["مَرْفُوعٌ (فاعل)", "مَنْصُوبٌ", "مَجْرُورٌ", "مَجْزُومٌ"],
          answer: 0,
          explain: "Faol, jam' muzakkar solim — مرفوع, alomati «vov va nun» (الْمُسَافِرُونَ)."
        },
        {
          type: "mcq",
          prompt: "«كَلَّمَ الْمُدَرِّسُ التَّلَامِيذَ» — «التَّلَامِيذَ» holati?",
          arabic: true,
          options: ["مَنْصُوبٌ (مفعول به)", "مَرْفُوعٌ (فاعل)", "مَجْرُورٌ", "مَجْزُومٌ"],
          answer: 0,
          explain: "«التلاميذَ» — to'ldiruvchi (مفعول به), shuning uchun منصوب (fatha bilan)."
        },
        {
          type: "mcq",
          prompt: "«مَرَرْتُ بِأُسْتَاذٍ جَدِيدٍ» — «أُسْتَاذٍ» holati?",
          arabic: true,
          options: ["مَجْرُورٌ", "مَرْفُوعٌ", "مَنْصُوبٌ", "مَجْزُومٌ"],
          answer: 0,
          explain: "«بِـ» jarr harfidan keyin kelgani uchun مجرور (kasra tanvin)."
        },
        {
          type: "fill",
          prompt: "Bo'sh joyga to'g'ri i'rob alomatini qo'ying: «جَاءَ مُحَمَّد＿» (fоil)",
          arabic: true,
          sentence: "جَاءَ مُحَمَّد ＿",
          options: ["ٌ  (damma)", "ً  (fatha)", "ٍ  (kasra)", "ْ  (sukun)"],
          answer: 0,
          explain: "Faol — مرفوع, shuning uchun «مُحَمَّدٌ» (damma tanvin)."
        },
        {
          type: "fill",
          prompt: "Bo'sh joyga to'g'ri alomatni qo'ying: «نَظَرْنَا إِلَى سَفِينَةٍ فِي الْبَحْر＿»",
          arabic: true,
          sentence: "...فِي الْبَحْر ＿",
          options: ["ِ  (kasra)", "ُ  (damma)", "َ  (fatha)", "ْ  (sukun)"],
          answer: 0,
          explain: "«في» jarr harfidan keyin «الْبَحْرِ» — مجرور (kasra)."
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
          explain: "«...هِيَ أُمِّي» — eng yaqin insonim onam."
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
        },
        {
          type: "mcq",
          prompt: "«الجَدّ» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["bobo", "amaki", "aka", "ota"],
          answer: 0,
          explain: "الجَدّ — bobo, الجَدَّة — buvi."
        },
        {
          type: "mcq",
          prompt: "«الخَال» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["tog'a (ona tomondan)", "amaki (ota tomondan)", "bobo", "o'g'il"],
          answer: 0,
          explain: "الخَال — tog'a (onaning akasi/ukasi). العَمّ — amaki (otaning akasi/ukasi)."
        },
        {
          type: "mcq",
          prompt: "«العَمّ» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["amaki (ota tomondan)", "tog'a (ona tomondan)", "bobo", "kuyov"],
          answer: 0,
          explain: "العَمّ — amaki (otaning aka-ukasi)."
        },
        {
          type: "mcq",
          prompt: "«الأَقَارِب» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["qarindoshlar", "qo'shnilar", "do'stlar", "o'qituvchilar"],
          answer: 0,
          explain: "الأَقَارِب — qarindoshlar, yaqinlar."
        },
        {
          type: "mcq",
          prompt: "«زَوْجَة» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["xotin (turmush o'rtoq)", "qiz", "opa", "buvi"],
          answer: 0,
          explain: "زَوْجَة — xotin, turmush o'rtoq."
        },
        {
          type: "match",
          prompt: "Oila a'zolarini tarjimasi bilan juftlang",
          pairs: [
            { ar: "أَب", uz: "ota" },
            { ar: "أُم", uz: "ona" },
            { ar: "أَخ", uz: "aka / uka" },
            { ar: "أُخْت", uz: "opa / singil" }
          ],
          explain: "Oila a'zolari: أَب-ota, أُم-ona, أَخ-aka/uka, أُخْت-opa/singil."
        },
        {
          type: "match",
          prompt: "Oila a'zolarini tarjimasi bilan juftlang",
          pairs: [
            { ar: "جَدّ", uz: "bobo" },
            { ar: "جَدَّة", uz: "buvi" },
            { ar: "اِبْن", uz: "o'g'il" },
            { ar: "بِنْت", uz: "qiz" }
          ],
          explain: "جَدّ-bobo, جَدَّة-buvi, اِبْن-o'g'il, بِنْت-qiz."
        },
        {
          type: "mcq",
          prompt: "Matnga ko'ra, «جَدِّي وَجَدَّتِي» qayerda yashaydi?",
          arabic: true,
          options: [
            "قَرِيبًا مِنْ بَيْتِنَا (uyimizga yaqin)",
            "فِي الْقَاهِرَةِ",
            "فِي الْمَدْرَسَةِ",
            "بَعِيدًا جِدًّا"
          ],
          answer: 0,
          explain: "«جَدِّي وَجَدَّتِي يَسْكُنَانِ قَرِيبًا مِنْ بَيْتِنَا» — bobom va buvim uyimizga yaqin yashaydi."
        },
        {
          type: "mcq",
          prompt: "Namunaviy javobga ko'ra, nega u onasi bilan o'zini xotirjam his qiladi?",
          arabic: true,
          options: [
            "لِأَنَّهَا تَفْهَمُنِي جَيِّدًا (meni yaxshi tushunadi)",
            "لِأَنَّهَا بَعِيدَةٌ",
            "لِأَنَّهَا فِي السُّوقِ",
            "لِأَنَّهَا لَا تَتَحَدَّثُ"
          ],
          answer: 0,
          explain: "«أَشْعُرُ بِالرَّاحَةِ مَعَهَا لِأَنَّهَا تَفْهَمُنِي جَيِّدًا»."
        },
        {
          type: "fill",
          prompt: "Javobni to'ldiring: «هِيَ امْرَأَةٌ ＿＿ وَتُسَاعِدُنِي دَائِمًا»",
          arabic: true,
          sentence: "هِيَ امْرَأَةٌ ＿＿ وَتُسَاعِدُنِي دَائِمًا",
          options: ["طَيِّبَةٌ", "كَبِيرَةٌ", "بَعِيدَةٌ", "صَعْبَةٌ"],
          answer: 0,
          explain: "«هِيَ امْرَأَةٌ طَيِّبَةٌ» — u yaxshi (mehribon) ayol."
        },
        {
          type: "mcq",
          prompt: "Matnga ko'ra, u qachon qarindoshlar bilan o'tirishni yaxshi ko'radi?",
          arabic: true,
          options: [
            "فِي نِهَايَةِ الأُسْبُوعِ (hafta oxirida)",
            "فِي الصَّبَاحِ",
            "فِي الْمَدْرَسَةِ",
            "فِي الْعَمَلِ"
          ],
          answer: 0,
          explain: "«نُحِبُّ أَنْ نَجْلِسَ جَمِيعًا فِي نِهَايَةِ الأُسْبُوعِ مَعَ الأَقَارِبِ»."
        },
        {
          type: "fill",
          prompt: "Javobni to'ldiring: «فِي العُطْلَةِ أَقْضِي الوَقْتَ مَعَ ＿＿»",
          arabic: true,
          sentence: "فِي العُطْلَةِ أَقْضِي الوَقْتَ مَعَ ＿＿",
          options: ["عَائِلَتِي", "الْمُدِيرِ", "الْجِيرَانِ", "الطُّلَّابِ"],
          answer: 0,
          explain: "«أَقْضِي الوَقْتَ مَعَ ... عَائِلَتِي» — oilam bilan vaqt o'tkazaman."
        }
      ]
    }

  ]
};

/* ================================================================
   2-DARS
   Sarf: Mudoaf — majhul/amr/ismu foil-maf'ul + رَنَّ، مَرَّ، كَنَّ
   Nahv: عَلَامَاتُ الرَّفْعِ (damma, vov, alif, nun)
   Matn: أغذية لتقوية المناعة في الشتاء
   Og'zaki: السكن (uy-joy)
   ================================================================ */
const LESSON2 = {
  id: 2,
  title: "2-dars",
  subtitle: "Mudoaf (majhul/amr) · علامات الرفع · المناعة · السكن",
  sections: [

    /* ===================== 1) SARF ===================== */
    {
      id: "sarf",
      name: "Sarf",
      arName: "الصَّرْف",
      icon: "🔤",
      color: "#6c5ce7",
      desc: "Mudoaf — majhul, amr, ismu foil/maf'ul",
      questions: [
        {
          type: "mcq",
          prompt: "«رَنَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["jiringladi", "o'tdi", "berkitdi", "qochdi"],
          answer: 0,
          explain: "رَنَّ — jiringladi."
        },
        {
          type: "mcq",
          prompt: "«مَرَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["o'tdi", "jiringladi", "berkitdi", "tishladi"],
          answer: 0,
          explain: "مَرَّ — o'tdi, o'tib ketdi."
        },
        {
          type: "mcq",
          prompt: "«كَنَّ» fe'lining ma'nosi qaysi?",
          arabic: true,
          options: ["berkitdi (yashirdi)", "o'tdi", "jiringladi", "uzatdi"],
          answer: 0,
          explain: "كَنَّ — berkitdi, yashirdi, saqladi."
        },
        {
          type: "match",
          prompt: "Fe'llarni ma'nosi bilan juftlang",
          pairs: [
            { ar: "رَنَّ", uz: "jiringladi" },
            { ar: "مَرَّ", uz: "o'tdi" },
            { ar: "كَنَّ", uz: "berkitdi" },
            { ar: "شَدَّ", uz: "bog'ladi" }
          ],
          explain: "رَنَّ-jiringladi, مَرَّ-o'tdi, كَنَّ-berkitdi, شَدَّ-bog'ladi."
        },
        {
          type: "mcq",
          prompt: "Majhul, amr, nahiy va jahd shakllarida mudoaf fe'lda nima yuz beradi?",
          options: [
            "Nunlar tushadi yoki tashdid o'rniga sukun keladi",
            "Birinchi harf alifga aylanadi",
            "Fe'l butunlay o'zgarmaydi",
            "O'rta unli har doim «u» bo'ladi"
          ],
          answer: 0,
          explain: "Bu hollarda fe'l ochiladi: nunlar tushadi yoki tashdid (ّ) o'rniga sukun (ْ) keladi."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — أَنْتَ uchun AMR (buyruq) shaklini tanlang",
          arabic: true,
          sentence: "أَنْتَ ＿＿",
          options: ["رُدَّ", "رَدَّ", "يَرُدُّ", "رُدِّي"],
          answer: 0,
          explain: "Amr (أنتَ): رُدَّ — qaytar!"
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — أَنْتِ uchun AMR (buyruq) shaklini tanlang",
          arabic: true,
          sentence: "أَنْتِ ＿＿",
          options: ["رُدِّي", "رُدَّ", "اُرْدُدْنَ", "رَدَّتْ"],
          answer: 0,
          explain: "Amr (أنتِ, ayol): رُدِّي."
        },
        {
          type: "fill",
          prompt: "«رَدَّ» — أَنْتُنَّ uchun AMR (buyruq) shaklini tanlang",
          arabic: true,
          sentence: "أَنْتُنَّ ＿＿",
          options: ["اُرْدُدْنَ", "رُدِّي", "رُدُّوا", "رُدَّ"],
          answer: 0,
          explain: "Amr (أنتُنَّ, ayollar ko'pligi): اُرْدُدْنَ — tashdid ochiladi."
        },
        {
          type: "fill",
          prompt: "«فَرَّ» — أَنْتَ uchun AMR (buyruq) shaklini tanlang",
          arabic: true,
          sentence: "أَنْتَ ＿＿",
          options: ["فِرَّ", "فَرَّ", "يَفِرُّ", "فُرَّ"],
          answer: 0,
          explain: "Amr (أنتَ): فِرَّ — qoch!"
        },
        {
          type: "fill",
          prompt: "«فَرَّ» — أَنْتُمْ uchun AMR (buyruq) shaklini tanlang",
          arabic: true,
          sentence: "أَنْتُمْ ＿＿",
          options: ["فِرُّوا", "فِرَّ", "فِرِّي", "فَرُّوا"],
          answer: 0,
          explain: "Amr (أنتم, ko'plik): فِرُّوا."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lining MAJHUL (moziy) shakli qaysi?",
          arabic: true,
          options: ["فُرَّ", "فَرَّ", "يَفِرُّ", "فَارٌّ"],
          answer: 0,
          explain: "Majhul moziy: فُرَّ."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lining MAJHUL (muzoriy) shakli qaysi?",
          arabic: true,
          options: ["يُفَرُّ", "يَفِرُّ", "فُرَّ", "فَارٌّ"],
          answer: 0,
          explain: "Majhul muzoriy: يُفَرُّ."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lidan yasalgan ISMU FOIL (qiluvchi) qaysi?",
          arabic: true,
          options: ["فَارٌّ", "مَفْرُورٌ", "مَفِرٌّ", "يُفَرُّ"],
          answer: 0,
          explain: "Ismu foil — فَارٌّ (qochuvchi)."
        },
        {
          type: "mcq",
          prompt: "«فَرَّ» fe'lidan yasalgan ISMU MAF'UL qaysi?",
          arabic: true,
          options: ["مَفْرُورٌ", "فَارٌّ", "مَفِرٌّ", "فِرَّ"],
          answer: 0,
          explain: "Ismu maf'ul — مَفْرُورٌ."
        },
        {
          type: "fill",
          prompt: "Nahiy (taqiq): «لَا ＿＿» — (sen qochma!)",
          arabic: true,
          sentence: "لَا ＿＿ (أنتَ)",
          options: ["تَفِرَّ", "تَفِرُّ", "فِرَّ", "فُرَّ"],
          answer: 0,
          explain: "Nahiy «لا» + jazm → تَفِرَّ (oxiri ochilib fatha oladi)."
        },
        {
          type: "mcq",
          prompt: "«اُرْدُدْنَ» shakli qaysi shaxs uchun buyruq (amr)?",
          arabic: true,
          options: ["أَنْتُنَّ (ayollar ko'pligi)", "أَنْتَ (bir erkak)", "أَنْتُمْ (erkaklar ko'pligi)", "أَنْتِ (bir ayol)"],
          answer: 0,
          explain: "اُرْدُدْنَ — أَنْتُنَّ uchun amr (mudoaf ochilgan holda)."
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
      desc: "عَلَامَاتُ الرَّفْعِ — raf' alomatlari",
      questions: [
        {
          type: "mcq",
          prompt: "Raf' (الرَّفْع) alomatlari nechta?",
          arabic: true,
          options: ["4 ta: الضمة، الواو، الألف، النون", "2 ta: الضمة، الواو", "3 ta: الضمة، الفتحة، الكسرة", "5 ta"],
          answer: 0,
          explain: "عَلَامَاتُ الرَّفْعِ أَرْبَعٌ: الضَّمَّةُ، الْوَاوُ، الْأَلِفُ، النُّونُ."
        },
        {
          type: "mcq",
          prompt: "Ismi mufrad (yakka ot) ning raf' alomati qaysi?",
          arabic: true,
          options: ["الضَّمَّة", "الْوَاو", "الْأَلِف", "النُّون"],
          answer: 0,
          explain: "Ismi mufrad, jam' taksir va jam' muannas solim — الضمة bilan marfu' bo'ladi."
        },
        {
          type: "mcq",
          prompt: "Jam' muzakkar solim (الجمع المذكر السالم) ning raf' alomati qaysi?",
          arabic: true,
          options: ["الْوَاو", "الضَّمَّة", "الْأَلِف", "النُّون"],
          answer: 0,
          explain: "Masalan: الْمُعَلِّمُونَ، الْمُثَقَّفُونَ — «vov» bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "Ism musanna (الْمُثَنَّى — ikkilik) ning raf' alomati qaysi?",
          arabic: true,
          options: ["الْأَلِف", "الْوَاو", "الضَّمَّة", "النُّون"],
          answer: 0,
          explain: "Masalan: الطَّالِبَانِ، الْوَلَدَانِ — «alif» bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "Af'al xamsa (الأفعال الخمسة) ning raf' alomati qaysi?",
          arabic: true,
          options: ["النُّون", "الضَّمَّة", "الْأَلِف", "الْوَاو"],
          answer: 0,
          explain: "تَفْعَلِينَ، تَفْعَلَانِ، تَفْعَلُونَ، يَفْعَلَانِ، يَفْعَلُونَ — «nun»ning sobit bo'lishi bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "«الأَسْمَاءُ الخَمْسَةُ» (besh ism) qaysilar?",
          arabic: true,
          options: ["أَب، أَخ، حَم، فَم، ذُو", "هُوَ، هِيَ، هُمْ، أَنْتَ، أَنَا", "كَانَ، أَصْبَحَ، صَارَ، لَيْسَ، ظَلَّ", "إِنَّ، أَنَّ، لَكِنَّ، كَأَنَّ، لَيْتَ"],
          answer: 0,
          explain: "Asma xamsa: أَب، أَخ، حَم، فَم، ذُو — boshqa ismga muzof bo'lganda «vov» bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "«الْمُعَلِّمُونَ لَهُمْ كُتُبٌ» — «الْمُعَلِّمُونَ» ning raf' alomati?",
          arabic: true,
          options: ["الْوَاو (jam' muzakkar solim)", "الضَّمَّة", "الْأَلِف", "النُّون"],
          answer: 0,
          explain: "Jam' muzakkar solim — «vov» bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "«الطَّالِبَانِ يَقْرَآنِ الْكِتَابَ» — «الطَّالِبَانِ» ning raf' alomati?",
          arabic: true,
          options: ["الْأَلِف (musanna)", "الْوَاو", "الضَّمَّة", "النُّون"],
          answer: 0,
          explain: "Musanna (ikkilik) — «alif» bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "«أَنْتِ تَكْتُبِينَ الدَّرْسَ» — «تَكْتُبِينَ» ning raf' alomati?",
          arabic: true,
          options: ["النُّون (af'al xamsa)", "الضَّمَّة", "الْوَاو", "الْأَلِف"],
          answer: 0,
          explain: "تَكْتُبِينَ — af'al xamsadan, «nun» sobitligi bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "«مُحَمَّدٌ طَالِبٌ مُجْتَهِدٌ» — «مُحَمَّدٌ» ning raf' alomati?",
          arabic: true,
          options: ["الضَّمَّة (ismi mufrad)", "الْوَاو", "الْأَلِف", "النُّون"],
          answer: 0,
          explain: "Ismi mufrad — الضمة bilan marfu'."
        },
        {
          type: "mcq",
          prompt: "«أَبُو حَنِيفَةَ فَقِيهٌ» — «أَبُو» ning raf' alomati?",
          arabic: true,
          options: ["الْوَاو (asma xamsadan)", "الضَّمَّة", "الْأَلِف", "النُّون"],
          answer: 0,
          explain: "«أَبُو» — asma xamsadan, «vov» bilan marfu'."
        },
        {
          type: "match",
          prompt: "Arabcha gapni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "مُحَمَّدٌ طَالِبٌ مُجْتَهِدٌ", uz: "Muhammad tirishqoq talaba" },
            { ar: "أَحْمَدُ صَدِيقِي فِي الْمَدْرَسَةِ", uz: "Ahmad maktabdagi do'stim" },
            { ar: "زَيْدٌ يَكْتُبُ رِسَالَةً", uz: "Zayd xat yozmoqda" }
          ],
          explain: "Qo'llanmadagi mashq gaplaridan."
        },
        {
          type: "match",
          prompt: "Arabcha gapni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "الطَّالِبَانِ يَقْرَآنِ الْكِتَابَ", uz: "Ikki talaba kitob o'qimoqda" },
            { ar: "الْوَلَدَانِ يَلْعَبَانِ فِي السَّاحَةِ", uz: "Ikki bola maydonda o'ynamoqda" },
            { ar: "الْمُهَنْدِسَانِ يَعْمَلَانِ فِي الشَّرِكَةِ", uz: "Ikki muhandis kompaniyada ishlamoqda" }
          ],
          explain: "Qo'llanmadagi mashq gaplaridan (musanna)."
        },
        {
          type: "mcq",
          prompt: "Fe'l muzori' qachon الضمة bilan marfu' bo'ladi?",
          arabic: true,
          options: [
            "Oxiriga raf'ni man qiluvchi narsa ulanmasa",
            "Doim, har qanday holatda",
            "Faqat amr bo'lganda",
            "Faqat majhul bo'lganda"
          ],
          answer: 0,
          explain: "Masalan: خَالِدٌ يَتَعَلَّمُ — oxiriga hech narsa ulanmagani uchun damma bilan marfu'."
        },
        {
          type: "fill",
          prompt: "Bo'sh joyga raf' alomatini qo'ying: «الْمُوَظَّفُونَ يَعْمَلُونَ بِجِدّ＿»",
          arabic: true,
          sentence: "...بِجِدّ ＿",
          options: ["ٍ  (kasra)", "ٌ  (damma)", "َ  (fatha)", "ْ  (sukun)"],
          answer: 0,
          explain: "«بِجِدٍّ» — «بِـ» jarr harfidan keyin مجرور (kasra)."
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
      desc: "أَغْذِيَةٌ لِتَقْوِيَةِ الْمَنَاعَةِ — matn va lug'at",
      readingTitle: "أَغْذِيَةٌ لِتَقْوِيَةِ الْمَنَاعَةِ فِي الشِّتَاءِ",
      reading: "مَعَ قُدُومِ فَصْلَيِ الْخَرِيفِ وَالشِّتَاءِ تَنْتَشِرُ الْفَيْرُوسَاتُ الْمُسَبِّبَةُ لِنَزْلَاتِ الْبَرْدِ وَالْإِنْفلوَنْزَا بِسَبَبِ انْخِفَاضِ دَرَجَاتِ الْحَرَارَةِ. وَلِتَقْوِيَةِ جِهَازِ الْمَنَاعَةِ يُنْصَحُ بِتَنَاوُلِ: فِيتَامِين «سِي» (اللَّيْمُون، الْبُرْتُقَال، الْفُلْفُل الْأَحْمَر)، وَالزِّنْك (الْمَحَّار، الدَّوَاجِن، الزَّبَادِي، الْحُمُّص)، وَأُومِيغَا 3 (الْأَسْمَاك مِثْل السَّلْمُون وَالتُّونَة)، وَالْأَعْشَاب وَالتَّوَابِل مِثْل الْكُرْكُم وَالزَّنْجَبِيل الَّتِي تُدَفِّئُ الْجِسْمَ مِنَ الدَّاخِلِ.",
      questions: [
        {
          type: "truefalse",
          prompt: "الْأَطْعِمَةُ الْغَنِيَّةُ بِفِيتَامِين «سِي» تُقَوِّي مَنَاعَةَ الْجِسْمِ",
          arabic: true,
          answer: true,
          explain: "صَوَاب — vitamin C ga boy ovqatlar tananing immunitetini kuchaytiradi."
        },
        {
          type: "truefalse",
          prompt: "لِلْحُصُولِ عَلَى فِيتَامِين «سِي» يَنْبَغِي تَنَاوُلُ الْحَلِيبِ",
          arabic: true,
          answer: false,
          explain: "خَطَأ — vitamin C limon, apelsin va qalampirda bor, sutda emas."
        },
        {
          type: "truefalse",
          prompt: "الْأَطْعِمَةُ الْغَنِيَّةُ بِالزِّنْكِ تُضْعِفُ جِهَازَ الْمَنَاعَةِ",
          arabic: true,
          answer: false,
          explain: "خَطَأ — rux (zink) immun tizimini kuchaytiradi, zaiflashtirmaydi."
        },
        {
          type: "truefalse",
          prompt: "تَنْتَشِرُ الْفَيْرُوسَاتُ الْمُسَبِّبَةُ لِنَزْلَاتِ الْبَرْدِ فِي الشِّتَاءِ",
          arabic: true,
          answer: true,
          explain: "صَوَاب — shamollash keltirib chiqaruvchi viruslar qishda tarqaladi."
        },
        {
          type: "truefalse",
          prompt: "تَنْخَفِضُ دَرَجَاتُ الْحَرَارَةِ فِي فَصْلَيِ الْخَرِيفِ وَالشِّتَاءِ",
          arabic: true,
          answer: true,
          explain: "صَوَاب — kuz va qish fasllarida harorat pasayadi."
        },
        {
          type: "mcq",
          prompt: "فِي فَصْلِ الشِّتَاءِ تَنْتَشِرُ ＿＿",
          arabic: true,
          options: ["الْفَيْرُوسَاتُ", "الْأَغْذِيَةُ", "الْحَرَارَةُ", "الرِّيَاضَةُ"],
          answer: 0,
          explain: "Qishda viruslar (الْفَيْرُوسَاتُ) tarqaladi."
        },
        {
          type: "mcq",
          prompt: "تُسَبِّبُ الْفَيْرُوسَاتُ ＿＿",
          arabic: true,
          options: ["نَزْلَاتِ الْبَرْدِ", "نَزْلَاتِ الْحَرَارَةِ", "نَزْلَاتِ الْمَنَاعَةِ", "نَزْلَاتِ الْغِذَاءِ"],
          answer: 0,
          explain: "Viruslar shamollashni (نَزْلَاتِ الْبَرْدِ) keltirib chiqaradi."
        },
        {
          type: "mcq",
          prompt: "يُسَاعِدُ الزَّنْجَبِيلُ وَالْكُرْكُمُ عَلَى ＿＿",
          arabic: true,
          options: ["تَدْفِئَةِ الْجِسْمِ", "تَخْفِيضِ الْجِسْمِ", "إِضْعَافِ الْجِسْمِ", "تَبْرِيدِ الْجِسْمِ"],
          answer: 0,
          explain: "Zanjabil va zarchava tanani ichdan isitishga (تَدْفِئَةِ الْجِسْمِ) yordam beradi."
        },
        {
          type: "mcq",
          prompt: "مِنْ مَصَادِرِ فِيتَامِين «سِي»: ＿＿",
          arabic: true,
          options: ["الْبُرْتُقَالُ", "الدَّجَاجُ", "الْأَسْمَاكُ", "الْحَلِيبُ"],
          answer: 0,
          explain: "Apelsin (الْبُرْتُقَالُ) — vitamin C manbasi."
        },
        {
          type: "match",
          prompt: "So'zni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "الْفَيْرُوسَاتُ", uz: "viruslar" },
            { ar: "جِهَازُ الْمَنَاعَةِ", uz: "immun tizimi" },
            { ar: "الْأَعْشَابُ", uz: "o't-o'lanlar" },
            { ar: "التَّوَابِلُ", uz: "ziravorlar" }
          ],
          explain: "Matn lug'atidan."
        },
        {
          type: "mcq",
          prompt: "«نَزْلَةُ الْبَرْدِ» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["shamollash", "isitma", "immunitet", "harorat"],
          answer: 0,
          explain: "نَزْلَةُ الْبَرْدِ — shamollash, tumov."
        },
        {
          type: "mcq",
          prompt: "«انْخِفَاض» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["pasayish", "ko'tarilish", "tarqalish", "kuchayish"],
          answer: 0,
          explain: "انْخِفَاض — pasayish (masalan, harorat pasayishi)."
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
      desc: "السَّكَن — uy-joy haqida savol-javob",
      questions: [
        {
          type: "mcq",
          prompt: "«أَيْنَ تَسْكُنُ؟» — namunaviy javobda u qayerda yashaydi?",
          arabic: true,
          options: [
            "فِي بَيْتٍ صَغِيرٍ مَعَ عَائِلَتِي",
            "فِي فُنْدُقٍ كَبِيرٍ",
            "فِي الْمَدْرَسَةِ",
            "فِي الْقَاهِرَةِ"
          ],
          answer: 0,
          explain: "«أَسْكُنُ فِي بَيْتٍ صَغِيرٍ مَعَ عَائِلَتِي»."
        },
        {
          type: "mcq",
          prompt: "«هَلْ تُفَضِّلُ البَيْتَ أَمِ الشَّقَّةَ؟» — namunada nima afzal ko'rilgan?",
          arabic: true,
          options: ["الشَّقَّة (kvartira)", "البَيْت (uy)", "الْفُنْدُق (mehmonxona)", "الْخَيْمَة (chodir)"],
          answer: 0,
          explain: "«أُفَضِّلُ السَّكَنَ فِي شَقَّةٍ صَغِيرَةٍ»."
        },
        {
          type: "mcq",
          prompt: "Namunaga ko'ra, nega u shaqqani (kvartira) afzal ko'radi?",
          arabic: true,
          options: [
            "سَهْلَةُ التَّنْظِيفِ وَقَرِيبَةٌ مِنَ الْمَتَاجِرِ",
            "بَعِيدَةٌ عَنِ الْمَدِينَةِ",
            "كَبِيرَةٌ جِدًّا",
            "غَالِيَةُ الثَّمَنِ"
          ],
          answer: 0,
          explain: "«لِأَنَّهَا سَهْلَةُ التَّنْظِيفِ وَقَرِيبَةٌ مِنَ الْمَتَاجِرِ» — tozalash oson va do'konlarga yaqin."
        },
        {
          type: "mcq",
          prompt: "«صِفْ غُرْفَتَكَ» — namunaga ko'ra xonada nimalar bor?",
          arabic: true,
          options: [
            "سَرِيرٌ وَمَكْتَبٌ وَكُرْسِيٌّ وَخِزَانَةُ مَلَابِسَ",
            "سَيَّارَةٌ وَدَرَّاجَةٌ",
            "مَطْبَخٌ وَحَدِيقَةٌ",
            "مَسْبَحٌ وَمَلْعَبٌ"
          ],
          answer: 0,
          explain: "«فِيهَا سَرِيرٌ وَمَكْتَبٌ وَكُرْسِيٌّ وَخِزَانَةُ مَلَابِسَ»."
        },
        {
          type: "mcq",
          prompt: "«الْمَطْبَخ» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["oshxona", "hammom", "yotoqxona", "mehmonxona"],
          answer: 0,
          explain: "الْمَطْبَخ — oshxona."
        },
        {
          type: "mcq",
          prompt: "«الْحَمَّام» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["hammom (vannaxona)", "oshxona", "balkon", "shkaf"],
          answer: 0,
          explain: "الْحَمَّام — hammom, vannaxona."
        },
        {
          type: "mcq",
          prompt: "«السَّرِير» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["karavot", "stul", "stol", "shkaf"],
          answer: 0,
          explain: "السَّرِير — karavot."
        },
        {
          type: "mcq",
          prompt: "«الْخِزَانَة» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["shkaf", "stul", "karavot", "eshik"],
          answer: 0,
          explain: "خِزَانَةُ مَلَابِسَ — kiyim shkafi."
        },
        {
          type: "mcq",
          prompt: "«الشَّقَّة» so'zining ma'nosi qaysi?",
          arabic: true,
          options: ["kvartira", "uy (hovli)", "xona", "bino"],
          answer: 0,
          explain: "الشَّقَّة — kvartira."
        },
        {
          type: "mcq",
          prompt: "«الْمَكْتَب» so'zining ma'nosi qaysi (uy jihozi sifatida)?",
          arabic: true,
          options: ["yozuv stoli", "karavot", "oshxona", "stul"],
          answer: 0,
          explain: "الْمَكْتَب — yozuv stoli (shuningdek: ofis)."
        },
        {
          type: "match",
          prompt: "So'zni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "بَيْت", uz: "uy" },
            { ar: "شَقَّة", uz: "kvartira" },
            { ar: "غُرْفَة", uz: "xona" },
            { ar: "مَطْبَخ", uz: "oshxona" }
          ],
          explain: "Uy-joy lug'ati."
        },
        {
          type: "match",
          prompt: "So'zni o'zbekcha tarjimasi bilan juftlang",
          pairs: [
            { ar: "سَرِير", uz: "karavot" },
            { ar: "كُرْسِيّ", uz: "stul" },
            { ar: "مَكْتَب", uz: "yozuv stoli" },
            { ar: "خِزَانَة", uz: "shkaf" }
          ],
          explain: "Uy jihozlari lug'ati."
        },
        {
          type: "fill",
          prompt: "Javobni to'ldiring: «أَسْكُنُ فِي بَيْتٍ ＿＿ مَعَ عَائِلَتِي»",
          arabic: true,
          sentence: "أَسْكُنُ فِي بَيْتٍ ＿＿ مَعَ عَائِلَتِي",
          options: ["صَغِيرٍ", "كَبِيرٍ", "بَعِيدٍ", "قَدِيمٍ"],
          answer: 0,
          explain: "«أَسْكُنُ فِي بَيْتٍ صَغِيرٍ» — kichik uyda yashayman."
        },
        {
          type: "fill",
          prompt: "Javobni to'ldiring: «غُرْفَتِي صَغِيرَةٌ وَلَكِنَّهَا ＿＿»",
          arabic: true,
          sentence: "غُرْفَتِي صَغِيرَةٌ وَلَكِنَّهَا ＿＿",
          options: ["مُرَتَّبَةٌ", "بَعِيدَةٌ", "وَاسِعَةٌ", "قَدِيمَةٌ"],
          answer: 0,
          explain: "«وَلَكِنَّهَا مُرَتَّبَةٌ» — lekin u tartibli."
        },
        {
          type: "mcq",
          prompt: "Namunaga ko'ra, u har kuni mektab (yozuv stoli) ustida nima qiladi?",
          arabic: true,
          options: ["أَدْرُسُ كُلَّ يَوْمٍ (har kuni o'qiyman)", "أَنَامُ", "أَطْبُخُ", "أَلْعَبُ"],
          answer: 0,
          explain: "«أَدْرُسُ عَلَى الْمَكْتَبِ كُلَّ يَوْمٍ»."
        },
        {
          type: "match",
          prompt: "Savolni javobi bilan juftlang",
          pairs: [
            { ar: "أَيْنَ تَسْكُنُ؟", uz: "أَسْكُنُ فِي بَيْتٍ صَغِيرٍ" },
            { ar: "صِفْ غُرْفَتَكَ", uz: "غُرْفَتِي صَغِيرَةٌ وَمُرَتَّبَةٌ" },
            { ar: "هَلْ تُفَضِّلُ الشَّقَّةَ؟", uz: "نَعَمْ، أُفَضِّلُ الشَّقَّةَ" }
          ],
          arabicBoth: true,
          explain: "Uy-joy mavzusidagi savol-javoblar."
        }
      ]
    }

  ]
};

const GAME_DATA = { lessons: [LESSON1, LESSON2] };
