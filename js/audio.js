/* ============================================================
   Sound engine — Web Audio API bilan generatsiya qilingan
   effektlar (tashqi fayl/internet talab qilmaydi).
   ============================================================ */

const SFX = (() => {
  let ctx = null;
  let muted = false;

  function ac() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  // bitta ohang (osillyator)
  function tone(freq, start, dur, type = "sine", gain = 0.25, glideTo = null) {
    const c = ac();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, c.currentTime + start);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, c.currentTime + start + dur);
    g.gain.setValueAtTime(0.0001, c.currentTime + start);
    g.gain.exponentialRampToValueAtTime(gain, c.currentTime + start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
    o.connect(g).connect(c.destination);
    o.start(c.currentTime + start);
    o.stop(c.currentTime + start + dur + 0.02);
  }

  // shovqin (noise) — buzz / whoosh uchun
  function noise(start, dur, gain = 0.15, hp = 800) {
    const c = ac();
    const buf = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filt = c.createBiquadFilter();
    filt.type = "highpass";
    filt.frequency.value = hp;
    const g = c.createGain();
    g.gain.setValueAtTime(gain, c.currentTime + start);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
    src.connect(filt).connect(g).connect(c.destination);
    src.start(c.currentTime + start);
    src.stop(c.currentTime + start + dur);
  }

  const api = {
    setMuted(v) { muted = v; },
    isMuted() { return muted; },
    click() { if (muted) return; tone(420, 0, 0.07, "triangle", 0.18); },
    select() { if (muted) return; tone(560, 0, 0.08, "sine", 0.2, 660); },
    correct() {
      if (muted) return;
      tone(660, 0, 0.12, "sine", 0.25);
      tone(880, 0.09, 0.14, "sine", 0.25);
      tone(1320, 0.18, 0.18, "triangle", 0.22);
    },
    wrong() {
      if (muted) return;
      tone(220, 0, 0.18, "sawtooth", 0.18, 130);
      noise(0, 0.18, 0.06, 500);
    },
    combo(level = 1) {
      if (muted) return;
      const base = 700 + level * 60;
      tone(base, 0, 0.1, "triangle", 0.22);
      tone(base * 1.25, 0.06, 0.12, "triangle", 0.2);
    },
    whoosh() { if (muted) return; noise(0, 0.3, 0.1, 300); },
    heartLost() {
      if (muted) return;
      tone(300, 0, 0.25, "sine", 0.22, 90);
    },
    levelUp() {
      if (muted) return;
      const notes = [523, 659, 784, 1047, 1319];
      notes.forEach((n, i) => tone(n, i * 0.1, 0.25, "triangle", 0.22));
    },
    finish() {
      if (muted) return;
      const seq = [523, 659, 784, 1047, 784, 1047, 1319];
      seq.forEach((n, i) => tone(n, i * 0.12, 0.3, "sine", 0.25));
      noise(0.1, 0.5, 0.05, 2000);
    }
  };
  return api;
})();
