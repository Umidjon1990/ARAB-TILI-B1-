/* Oddiy konfetti effekti — canvas */
const Confetti = (() => {
  let canvas, ctx, parts = [], raf = null;
  const colors = ["#ffd166", "#06d6a0", "#ef476f", "#00c2ff", "#7b2ff7", "#fff"];

  function ensure() {
    canvas = document.getElementById("confetti");
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
  }
  function resize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function burst() {
    if (!canvas) ensure();
    if (!canvas) return;
    for (let i = 0; i < 160; i++) {
      parts.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 120,
        y: canvas.height / 3,
        vx: (Math.random() - 0.5) * 12,
        vy: Math.random() * -14 - 4,
        g: 0.35 + Math.random() * 0.2,
        size: 5 + Math.random() * 7,
        color: colors[(Math.random() * colors.length) | 0],
        rot: Math.random() * 6.28,
        vr: (Math.random() - 0.5) * 0.3,
        life: 120 + Math.random() * 40
      });
    }
    if (!raf) loop();
  }
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    parts.forEach(p => {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    parts = parts.filter(p => p.life > 0 && p.y < canvas.height + 40);
    if (parts.length) raf = requestAnimationFrame(loop);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); raf = null; }
  }
  return { burst };
})();
