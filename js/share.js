/* ===== SHARED UTILITIES — Cyberpunk Portfolio ===== */

// Language & Theme (shared across pages)
(function initShared() {
  const lang = localStorage.getItem('mka-lang') || 'en';
  const theme = localStorage.getItem('mka-theme') || 'dark';
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', () => {
    // Language toggle
    document.querySelectorAll('#langToggle, .lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-lang') === 'en' ? 'my' : 'en';
        document.documentElement.setAttribute('data-lang', next);
        localStorage.setItem('mka-lang', next);
        applyLang(next);
        btn.textContent = next === 'en' ? 'EN / မြန်မာ' : 'မြန်မာ / EN';
      });
      if (btn.id === 'langToggle' || btn.classList.contains('lang-toggle')) {
        btn.textContent = lang === 'en' ? 'EN / မြန်မာ' : 'မြန်မာ / EN';
      }
    });

    // Theme toggle
    document.querySelectorAll('#themeToggle, .theme-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('mka-theme', next);
      });
    });

    applyLang(lang);

    // Mobile menu
    document.getElementById('menuBtn')?.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => document.querySelector('.nav-links')?.classList.remove('open'));
    });
  });
})();

function applyLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val !== null) {
      if (val.includes('<br')) el.innerHTML = val;
      else el.textContent = val;
    }
  });
}

// Particles (shared)
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const COUNT = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class P {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.size = Math.random() * 1.4 + 0.4;
      this.alpha = Math.random() * 0.45 + 0.1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${this.alpha})`;
      ctx.fill();
    }
  }
  for (let i = 0; i < COUNT; i++) particles.push(new P());

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.025)';
    const g = 60;
    for (let x = 0; x < canvas.width; x += g) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
    for (let y = 0; y < canvas.height; y += g) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.07 * (1 - d / 110)})`;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
}

document.addEventListener('DOMContentLoaded', initParticles);

// AI Assistant (shared)
const AI_KNOWLEDGE = {
  kotlin: 'Moe specializes in modern Kotlin: coroutines, Flow, sealed classes, multi-module projects, and idiomatic Android patterns.',
  compose: 'Jetpack Compose is a core strength — declarative UI, Material 3, Navigation Compose, performance optimization, and production apps.',
  architecture: 'Clean Architecture + MVVM/MVI, offline-first with Room as source of truth, WorkManager sync, multi-module boundaries, Hilt/Koin DI.',
  firebase: 'Full Firebase suite: Auth, Firestore, Cloud Messaging, Crashlytics, Storage — integrated into production Android apps.',
  experience: 'Senior Android Engineer with deep Kotlin/Compose focus, 82+ certificates, 40+ public repos, bridging Myanmar and Thailand tech scenes.',
  projects: 'Featured apps include Video Player, Social Dashboard, Game Collection, multiple POS systems, Weather, Job Portal, and offline-first platforms.',
  location: 'Based in Tachileik, Myanmar 🇲🇲 with strong ties to Bangkok, Thailand 🇹🇭.',
  contact: 'Phone: +95 9 889 000 889 / +959 666 000 050 · Email: moekyawaung@asia.com · GitHub: Dev-moe-kyawaung',
  certificates: '82+ certificates from Programming Hub & Google Developers Launchpad covering Android, Kotlin, AI/ML, Security, Web, Blockchain and more.',
  philosophy: '"Code with culture. Build with purpose." — မိုးကျော်အောင်',
  default: 'Ask about Kotlin, Jetpack Compose, Clean Architecture, offline-first, Firebase, projects, certificates, or contact info.'
};

function initAI() {
  const panel = document.getElementById('aiPanel');
  const messages = document.getElementById('aiMessages');
  const input = document.getElementById('aiInput');
  if (!panel) return;

  document.getElementById('aiToggle')?.addEventListener('click', () => panel.classList.toggle('open'));
  document.getElementById('aiClose')?.addEventListener('click', () => panel.classList.remove('open'));

  function reply(q) {
    const t = q.toLowerCase();
    if (t.includes('kotlin')) return AI_KNOWLEDGE.kotlin;
    if (t.includes('compose') || t.includes('jetpack')) return AI_KNOWLEDGE.compose;
    if (t.includes('architect') || t.includes('offline') || t.includes('mvvm')) return AI_KNOWLEDGE.architecture;
    if (t.includes('firebase')) return AI_KNOWLEDGE.firebase;
    if (t.includes('experience') || t.includes('year') || t.includes('senior')) return AI_KNOWLEDGE.experience;
    if (t.includes('project') || t.includes('app')) return AI_KNOWLEDGE.projects;
    if (t.includes('certif')) return AI_KNOWLEDGE.certificates;
    if (t.includes('where') || t.includes('location') || t.includes('myanmar')) return AI_KNOWLEDGE.location;
    if (t.includes('contact') || t.includes('email') || t.includes('phone')) return AI_KNOWLEDGE.contact;
    if (t.includes('philosophy') || t.includes('quote')) return AI_KNOWLEDGE.philosophy;
    return AI_KNOWLEDGE.default;
  }

  function add(text, type) {
    const d = document.createElement('div');
    d.className = 'ai-msg ' + type;
    d.textContent = text;
    messages.appendChild(d);
    messages.scrollTop = messages.scrollHeight;
  }

  function send() {
    const text = input.value.trim();
    if (!text) return;
    add(text, 'user');
    input.value = '';
    setTimeout(() => add(reply(text), 'bot'), 350);
  }

  document.getElementById('aiSend')?.addEventListener('click', send);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
}
document.addEventListener('DOMContentLoaded', initAI);
