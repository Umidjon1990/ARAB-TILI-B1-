/* ============================================================
   O'yin logikasi — render, holat, ballar, yuraklar, kombo
   ============================================================ */

const App = (() => {
  const el = (id) => document.getElementById(id);
  const root = () => el("screen-root");

  const state = {
    lesson: null,
    queue: [],        // joriy o'yindagi savollar ro'yxati
    idx: 0,
    hearts: 5,
    maxHearts: 5,
    xp: 0,
    streak: 0,        // ketma-ket to'g'ri javoblar (kombo)
    correctCount: 0,
    total: 0,
    answered: false,
    sectionName: ""
  };

  /* ---------- yordamchilar ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function renderTop() {
    const hearts = el("hearts");
    hearts.innerHTML = "";
    for (let i = 0; i < state.maxHearts; i++) {
      const s = document.createElement("span");
      s.className = "heart" + (i >= state.hearts ? " lost" : "");
      s.textContent = "❤️";
      hearts.appendChild(s);
    }
    el("xp-val").textContent = state.xp;
    el("streak-val").textContent = state.streak;
  }

  function setProgress() {
    const pct = state.total ? (state.idx / state.total) * 100 : 0;
    el("progress").style.width = pct + "%";
  }

  function transition(html) {
    const r = root();
    r.classList.add("out");
    setTimeout(() => {
      r.classList.remove("out");
      r.innerHTML = html;
      r.classList.remove("screen");
      void r.offsetWidth;
      r.classList.add("screen");
    }, 180);
  }

  /* ================= HOME ================= */
  function home() {
    state.lesson = GAME_DATA.lessons[0];
    const L = state.lesson;
    el("topbar").style.visibility = "hidden";
    el("progress-wrap").style.visibility = "hidden";

    const cards = L.sections.map((s, i) => `
      <div class="section-card" data-sec="${i}" style="border-inline-start:5px solid ${s.color}">
        <div class="sec-icon" style="background:${s.color}33">${s.icon}</div>
        <div class="sec-meta">
          <h3>${s.name} <span class="ar">${s.arName}</span></h3>
          <p>${s.desc} · ${s.questions.length} ta savol</p>
        </div>
        <div class="sec-go">›</div>
      </div>`).join("");

    transition(`
      <div class="hero">
        <h1>Bosqichli Arab tili B1</h1>
        <div class="ar-title">اللُّغَةُ العَرَبِيَّةُ</div>
        <p>${L.title} — ${L.subtitle}</p>
      </div>
      <div class="section-list">
        ${cards}
        <button class="start-all" id="start-all">🚀 To'liq darsni boshlash (barchasi)</button>
      </div>
    `);

    setTimeout(() => {
      document.querySelectorAll(".section-card").forEach(c => {
        c.onclick = () => { SFX.whoosh(); startSection(+c.dataset.sec); };
      });
      el("start-all").onclick = () => { SFX.whoosh(); startAll(); };
    }, 200);
  }

  /* ---------- o'yin boshlash ---------- */
  function buildQueue(questions, secName) {
    state.queue = questions.map(q => ({ ...q, sec: secName }));
    state.idx = 0;
    state.total = state.queue.length;
    state.hearts = state.maxHearts;
    state.xp = state.xp; // jami xp saqlanadi
    state.streak = 0;
    state.correctCount = 0;
    el("topbar").style.visibility = "visible";
    el("progress-wrap").style.visibility = "visible";
    renderTop();
    setProgress();
    showQuestion();
  }

  function startSection(i) {
    const s = state.lesson.sections[i];
    state.sectionName = s.name;
    // matn bo'limidagi har bir savolga o'qish matnini biriktiramiz
    const qs = s.questions.map(q => ({ ...q, _reading: s.reading, _readingTitle: s.readingTitle }));
    buildQueue(qs, s.name);
  }

  function startAll() {
    let all = [];
    state.lesson.sections.forEach(s => {
      s.questions.forEach(q => all.push({ ...q, sec: s.name, _reading: s.reading, _readingTitle: s.readingTitle }));
    });
    state.sectionName = "To'liq dars";
    state.queue = all;
    state.idx = 0;
    state.total = all.length;
    state.hearts = state.maxHearts;
    state.streak = 0;
    state.correctCount = 0;
    el("topbar").style.visibility = "visible";
    el("progress-wrap").style.visibility = "visible";
    renderTop();
    setProgress();
    showQuestion();
  }

  /* ================= SAVOLNI KO'RSATISH ================= */
  function showQuestion() {
    if (state.idx >= state.queue.length) return finish(true);
    state.answered = false;
    const q = state.queue[state.idx];
    setProgress();

    const tag = `<div class="q-tag">${q.sec} · ${state.idx + 1}/${state.total}</div>`;
    let body = "";
    if (q.type === "mcq" || q.type === "fill") body = renderMCQ(q);
    else if (q.type === "truefalse") body = renderTF(q);
    else if (q.type === "match") body = renderMatch(q);

    const reading = q.reading || q._reading
      ? `<div class="reading-box"><h4>${q.readingTitle || q._readingTitle || ""}</h4>${q.reading || q._reading}</div>`
      : "";

    transition(`
      <div class="card">
        ${tag}
        ${reading}
        ${body}
      </div>
      <div class="feedback" id="feedback"></div>
    `);
    setTimeout(() => bindHandlers(q), 200);
  }

  function renderMCQ(q) {
    const keys = ["A", "B", "C", "D", "E"];
    const promptAr = q.arabic ? "" : "";
    const sentence = q.sentence
      ? `<div class="q-prompt ar" style="margin-bottom:14px">${q.sentence}</div>` : "";
    const opts = q.options.map((o, i) =>
      `<button class="opt ${q.arabic ? "ar" : ""}" data-i="${i}">
        <span class="opt-key">${keys[i]}</span><span>${o}</span>
      </button>`).join("");
    return `
      <div class="q-prompt">${q.prompt}</div>
      ${sentence}
      <div class="options">${opts}</div>`;
  }

  function renderTF(q) {
    return `
      <div class="q-prompt ar">${q.prompt}</div>
      <div class="q-sub">To'g'ri yoki noto'g'ri? — صواب أم خطأ؟</div>
      <div class="tf-row">
        <button class="tf-btn" data-v="true">✅ صَوَاب<span class="lbl">To'g'ri</span></button>
        <button class="tf-btn" data-v="false">❌ خَطَأ<span class="lbl">Noto'g'ri</span></button>
      </div>`;
  }

  function renderMatch(q) {
    const left = q.pairs.map((p, i) => `<div class="match-item ar" data-side="L" data-i="${i}">${p.ar}</div>`).join("");
    const rightItems = shuffle(q.pairs.map((p, i) => ({ i, t: p.uz })));
    const rightCls = q.arabicBoth ? "match-item ar" : "match-item";
    const right = rightItems.map(r => `<div class="${rightCls}" data-side="R" data-i="${r.i}">${r.t}</div>`).join("");
    return `
      <div class="q-prompt">${q.prompt}</div>
      <div class="q-sub">Juftliklarni tanlab moslang</div>
      <div class="match-grid">
        <div class="match-col"><h5>عربي</h5>${left}</div>
        <div class="match-col"><h5>${q.arabicBoth ? "جواب" : "o'zbekcha"}</h5>${right}</div>
      </div>`;
  }

  /* ================= HANDLERLAR ================= */
  function bindHandlers(q) {
    if (q.type === "mcq" || q.type === "fill") {
      document.querySelectorAll(".opt").forEach(b => {
        b.onclick = () => answerMCQ(q, +b.dataset.i, b);
      });
    } else if (q.type === "truefalse") {
      document.querySelectorAll(".tf-btn").forEach(b => {
        b.onclick = () => answerTF(q, b.dataset.v === "true", b);
      });
    } else if (q.type === "match") {
      bindMatch(q);
    }
  }

  function answerMCQ(q, i, btn) {
    if (state.answered) return;
    state.answered = true;
    const correct = i === q.answer;
    document.querySelectorAll(".opt").forEach(b => b.classList.add("locked"));
    if (correct) {
      btn.classList.add("correct");
      onCorrect(q);
    } else {
      btn.classList.add("wrong");
      const right = document.querySelector(`.opt[data-i="${q.answer}"]`);
      if (right) right.classList.add("correct");
      onWrong(q);
    }
  }

  function answerTF(q, val, btn) {
    if (state.answered) return;
    state.answered = true;
    document.querySelectorAll(".tf-btn").forEach(b => b.classList.add("locked"));
    const correct = val === q.answer;
    if (correct) { btn.classList.add("correct"); onCorrect(q); }
    else {
      btn.classList.add("wrong");
      const rb = document.querySelector(`.tf-btn[data-v="${q.answer}"]`);
      if (rb) rb.classList.add("correct");
      onWrong(q);
    }
  }

  function bindMatch(q) {
    let sel = null;
    let solved = 0;
    let mistakes = 0;
    document.querySelectorAll(".match-item").forEach(it => {
      it.onclick = () => {
        if (it.classList.contains("done")) return;
        SFX.click();
        if (!sel) {
          clearSel();
          sel = it; it.classList.add("sel"); return;
        }
        if (sel === it) { it.classList.remove("sel"); sel = null; return; }
        if (sel.dataset.side === it.dataset.side) { // bir tomon — tanlovni almashtir
          clearSel(); sel = it; it.classList.add("sel"); return;
        }
        // juftlikni tekshir
        if (sel.dataset.i === it.dataset.i) {
          sel.classList.remove("sel"); sel.classList.add("done"); it.classList.add("done");
          sel = null; solved++;
          SFX.combo(solved);
          if (solved === q.pairs.length) {
            state.answered = true;
            const perfect = mistakes === 0;
            setTimeout(() => { if (perfect) onCorrect(q); else onWrong(q, true); }, 350);
          }
        } else {
          mistakes++;
          const a = sel, b = it;
          a.classList.add("miss"); b.classList.add("miss");
          SFX.wrong();
          if (state.hearts > 1 || true) { /* match faqat 1 yurak yo'qotadi oxirida */ }
          setTimeout(() => { a.classList.remove("miss", "sel"); b.classList.remove("miss"); }, 420);
          sel = null;
        }
      };
    });
    function clearSel() { document.querySelectorAll(".match-item.sel").forEach(x => x.classList.remove("sel")); }
  }

  /* ================= NATIJA ISHLOVI ================= */
  function onCorrect(q) {
    state.streak++;
    state.correctCount++;
    let gain = 10 + Math.min(state.streak - 1, 5) * 2; // kombo bonusi
    state.xp += gain;
    SFX.correct();
    if (state.streak >= 3) {
      SFX.combo(state.streak);
      flashCombo(state.streak);
    }
    renderTop();
    showFeedback(true, q, gain);
  }

  function onWrong(q, isMatch) {
    state.streak = 0;
    state.hearts--;
    SFX.wrong();
    SFX.heartLost();
    popLastHeart();
    renderTop();
    if (state.hearts <= 0) {
      showFeedback(false, q, 0, true);
    } else {
      showFeedback(false, q, 0);
    }
  }

  function popLastHeart() {
    const hearts = document.querySelectorAll("#hearts .heart");
    const idx = state.hearts; // endi yo'qolgan
    if (hearts[idx]) { hearts[idx].classList.add("pop"); }
  }

  function flashCombo(n) {
    let f = el("combo-flash");
    f.textContent = `🔥 ${n}x Kombo!`;
    f.classList.remove("show"); void f.offsetWidth; f.classList.add("show");
  }

  function showFeedback(good, q, gain, dead) {
    const fb = el("feedback");
    fb.className = "feedback show " + (good ? "good" : "bad");
    const title = good
      ? `✅ To'g'ri!  +${gain} XP${state.streak >= 3 ? `  🔥${state.streak}x` : ""}`
      : (dead ? "💔 Yuraklar tugadi!" : "❌ Noto'g'ri");
    fb.innerHTML = `
      <div class="fb-title">${title}</div>
      <div class="fb-explain">${q.explain || ""}</div>
      <button class="next-btn ${good ? "" : "bad"}" id="next-btn">
        ${dead ? "Natijani ko'rish" : (state.idx + 1 >= state.total ? "Yakunlash 🎉" : "Davom etish →")}
      </button>`;
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    el("next-btn").onclick = () => {
      SFX.click();
      if (dead) return finish(false);
      state.idx++;
      setProgress();
      showQuestion();
    };
  }

  /* ================= YAKUN ================= */
  function finish(won) {
    el("topbar").style.visibility = "hidden";
    el("progress-wrap").style.visibility = "hidden";
    const pct = state.total ? Math.round((state.correctCount / state.total) * 100) : 0;
    let stars = pct >= 90 ? 3 : pct >= 60 ? 2 : pct >= 30 ? 1 : 0;
    const starStr = "⭐".repeat(stars) + "✩".repeat(3 - stars);
    let emoji, head;
    if (!won) { emoji = "💪"; head = "Mashq qilishda davom et!"; }
    else if (pct >= 90) { emoji = "🏆"; head = "Mukammal! ماشاء الله"; }
    else if (pct >= 60) { emoji = "🎉"; head = "Ajoyib natija!"; }
    else { emoji = "🙂"; head = "Yaxshi boshlanish!"; }

    if (won && pct >= 60) { SFX.finish(); Confetti.burst(); }
    else SFX.levelUp();

    transition(`
      <div class="card result">
        <div class="big">${emoji}</div>
        <h2>${head}</h2>
        <div class="stars">${starStr}</div>
        <div class="stat-row">
          <div class="stat"><div class="v">${state.correctCount}/${state.total}</div><div class="l">To'g'ri javob</div></div>
          <div class="stat"><div class="v">${pct}%</div><div class="l">Aniqlik</div></div>
          <div class="stat"><div class="v">${state.xp}</div><div class="l">Jami XP</div></div>
        </div>
        <button class="start-all" id="retry">🔁 Qaytadan</button>
        <button class="next-btn" id="back-home" style="margin-top:12px">🏠 Bo'limlarga qaytish</button>
      </div>
    `);
    setTimeout(() => {
      el("retry").onclick = () => { SFX.whoosh(); restartSame(); };
      el("back-home").onclick = () => { SFX.whoosh(); home(); };
    }, 200);
  }

  function restartSame() {
    state.idx = 0;
    state.hearts = state.maxHearts;
    state.streak = 0;
    state.correctCount = 0;
    // savollarni aralashtirib qayta beramiz
    state.queue = shuffle(state.queue);
    el("topbar").style.visibility = "visible";
    el("progress-wrap").style.visibility = "visible";
    renderTop();
    setProgress();
    showQuestion();
  }

  /* ---------- init ---------- */
  function init() {
    el("mute-btn").onclick = () => {
      const m = !SFX.isMuted();
      SFX.setMuted(m);
      el("mute-btn").textContent = m ? "🔇" : "🔊";
    };
    el("home-btn").onclick = () => { SFX.click(); home(); };
    home();
  }

  return { init };
})();

window.addEventListener("DOMContentLoaded", App.init);
