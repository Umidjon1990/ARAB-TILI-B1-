# 🕌 Bosqichli Arab Tili B1 — Interaktiv o'yin

«Bosqichli Arab Tili B1» qo'llanmasi asosida yaratilgan, Duolingo uslubidagi
interaktiv quiz-o'yin. Brauzerda ishlaydi, **internet talab qilmaydi**
(ovoz effektlari Web Audio API bilan generatsiya qilinadi).

## ✨ Imkoniyatlari
- 🎮 Modern, animatsiyali UI (glassmorphism, gradient fon, neon effektlar)
- 🔊 Sound effektlar: to'g'ri/noto'g'ri javob, kombo, yurak yo'qotish, g'alaba
- ❤️ Yuraklar (jonlar), 💎 XP ballari, 🔥 kombo (streak), progress bar
- 🎉 G'alaba konfetti animatsiyasi va yulduzli baholash
- ✍️ Arabcha matn to'g'ri (o'ngdan-chapga, RTL) ko'rsatiladi (Amiri shrifti)

## 📚 Savol turlari
| Tur | Tavsif |
|-----|--------|
| `mcq` | 4 variantli test |
| `truefalse` | صواب / خطأ |
| `fill` | Bo'sh joyni to'g'ri shakl bilan to'ldirish (fe'l tuslash, i'rob) |
| `match` | Juftlash (so'z↔tarjima, savol↔javob) |

## 🗂 1-dars bo'limlari
- 🔤 **Sarf** — Mudoaf fe'llari (مَدَّ، رَدَّ، فَرَّ tuslash)
- 📐 **Nahv** — الإعراب (مرفوع/منصوب/مجرور) + tarjima
- 📖 **Matn** — خمس نصائح لنوم مريح + lug'at + test
- 🗣️ **Og'zaki** — العائلة savol-javob namunalari

## ▶️ Ishga tushirish
`index.html` faylini brauzerda oching. Yoki lokal server:
```bash
python3 -m http.server 8000
# brauzerda: http://localhost:8000
```

## 🛠 Tuzilma
```
index.html        — asosiy sahifa
css/styles.css    — dizayn
js/data.js        — savollar bazasi (dars/bo'lim/savollar)
js/audio.js       — ovoz effektlari (Web Audio)
js/confetti.js    — konfetti animatsiyasi
js/game.js        — o'yin logikasi
```

## ➕ Yangi dars qo'shish
`js/data.js` ichida `LESSON1` namunasiga o'xshash yangi obyekt yaratib,
`GAME_DATA.lessons` ro'yxatiga qo'shing.
