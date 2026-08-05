/* ===== CYBERPUNK PORTFOLIO JS — Moe Kyaw Aung ===== */

// ---------- Particles ----------
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
const PARTICLE_COUNT = 80;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 240, 255, ${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Grid
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)';
  ctx.lineWidth = 1;
  const grid = 60;
  for (let x = 0; x < canvas.width; x += grid) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += grid) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }
  particles.forEach(p => { p.update(); p.draw(); });
  // Connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 * (1 - dist / 120)})`;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ---------- Typing ----------
const phrases = [
  'Senior Android Developer',
  'Kotlin · Jetpack Compose',
  'Clean Architecture · Offline-First',
  'Firebase · CI/CD · Azure',
  'မိုးကျော်အောင် · Moe Kyaw Aung',
  'Code with culture. Build with purpose.'
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById('typing');

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ---------- Counter animation ----------
function animateCounters() {
  document.querySelectorAll('.stat-n[data-count]').forEach(el => {
    const target = +el.dataset.count;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target + (target >= 10 ? '+' : '');
        clearInterval(timer);
      } else {
        el.textContent = current;
      }
    }, 40);
  });
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });
const stats = document.querySelector('.hero-stats');
if (stats) observer.observe(stats);

// ---------- Apps data ----------
const apps = [
  { emoji: '📱', name: 'Social Dashboard', desc: 'Real-time social analytics & feed', link: 'https://github.com/moekyawaung-tech/social-dashboard' },
  { emoji: '📱', name: 'PWA App', desc: 'Installable progressive web app', link: 'https://github.com/moekyawaung-tech/pwa-app' },
  { emoji: '📊', name: 'Admin Dashboard', desc: 'Full admin control panel', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '📈', name: 'Stock Market', desc: 'Market data & charts', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '🎮', name: 'Game Collection', desc: 'Multi-game hub', link: 'https://github.com/moekyawaung-tech/game-collection' },
  { emoji: '🎵', name: 'Music Player', desc: 'Local & streaming player', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '💬', name: 'Chat App', desc: 'Real-time messaging', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '⚽', name: 'World Cup', desc: 'Tournament tracker', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '🛒', name: 'E-commerce', desc: 'Shopping experience', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '💼', name: 'Portfolio', desc: 'This cyberpunk portfolio', link: 'https://github.com/Dev-moe-kyawaung/' },
  { emoji: '💰', name: 'Money Tracker', desc: 'Personal finance', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '🌤️', name: 'Weather', desc: 'Forecasts & alerts', link: 'https://github.com/moekyawaung-tech/Weather-app' },
  { emoji: '💸', name: 'Crypto', desc: 'Crypto portfolio tracker', link: 'https://github.com/moekyawaung-tech' },
  { emoji: '📝', name: 'Todo', desc: 'Task management', link: 'https://github.com/moekyawaung-tech/javascript-todo' },
  { emoji: '🎯', name: 'Video Player', desc: 'Advanced media player', link: 'https://github.com/moekyawaung-tech/video-player' },
  { emoji: '🎯', name: 'LEGEND!', desc: 'Signature showcase project', link: 'https://github.com/Dev-moe-kyawaung/' },
  { emoji: '🛒', name: 'POS Full Version', desc: 'Point of sale system', link: 'https://github.com/moekyawaung-tech/POS-Full-Version' },
  { emoji: '💰', name: 'POS Ultimate Pro Max', desc: 'Enterprise POS', link: 'https://github.com/moekyawaung-tech/POS-Ultimate-Pro-Max' },
  { emoji: '🐍', name: 'Snake Game', desc: 'Classic with Compose UI', link: 'https://github.com/moekyawaung-tech/Snake-Game-App' },
  { emoji: '📷', name: 'Lens Lite', desc: 'Camera utilities', link: 'https://github.com/moekyawaung-tech/Lens-lite' },
  { emoji: '✈️', name: 'Thailand Travel', desc: 'Travel guide', link: 'https://github.com/moekyawaung-tech/thailand-travel' },
  { emoji: '🏥', name: 'Hospital Lists', desc: 'Healthcare directory', link: 'https://github.com/Moekyawaung-cyber/Hospital-Lists' },
  { emoji: '📍', name: 'Postcode Web', desc: 'Location tools', link: 'https://github.com/Moekyawaung-cyber/My_postcode-My-web_project' },
  { emoji: '💼', name: 'Job Portal', desc: 'Job listings & apply', link: 'https://github.com/moekyawaung-tech/Job-Portal-App' },
  { emoji: '🎰', name: 'Casino App', desc: 'Entertainment demo', link: 'https://github.com/moekyawaung-tech/casino-app' },
];

const appsGrid = document.getElementById('appsGrid');
if (appsGrid) {
  apps.forEach(a => {
    const el = document.createElement('a');
    el.href = a.link;
    el.target = '_blank';
    el.rel = 'noopener';
    el.className = 'app-card hologram';
    el.innerHTML = `<div class="app-emoji">${a.emoji}</div><h3>${a.name}</h3><p>${a.desc}</p><span class="app-link">View on GitHub ↗</span>`;
    appsGrid.appendChild(el);
  });
}

// ---------- GitHub Pages ----------
const ghPages = [
  'https://moekyawaung-china.github.io/',
  'https://moekyawaung-developer.github.io/',
  'https://moekyawaungvivov30pro-design.github.io/',
  'https://moekyaw-aung-mm.github.io/',
  'https://moekyawaung-mk.github.io/',
  'https://moekyawaung-microsoft.github.io/',
  'https://moekyawaung-cyber.github.io/',
  'https://moekyawaung-bangkok.github.io/',
  'https://moekyawaung-micro.github.io/',
  'https://moekyawaungmka2032-boop.github.io/',
  'https://moekyawaung-dev-mm.github.io/',
  'https://moekyaw-developer.github.io/',
  'https://moekyawaung.github.io/',
  'https://Moekyawaung-mm.github.io/',
  'https://moekyawaung-tech.github.io/',
  'https://moekyawaung-hack.github.io/',
  'https://moekyawaung-graduate.github.io/',
  'https://Moekyawaung-Linux.github.io/',
  'https://Moekyawaung-coder.github.io/',
  'https://moekyawaung-designer.github.io/',
  'https://Moekyawaung2026.github.io/',
  'https://moekyawaungmka2034-coder.github.io/',
  'https://moekyawaung-web.github.io/',
  'https://Moekyawaung-dev.github.io/',
  'https://MoeKyawAung-code.github.io/',
  'https://moekyawaung-creator.github.io/',
  'https://moekyawaung-webdeveloper.github.io/',
  'https://Moekyawaung-co.github.io/',
  'https://moekyawaung-edu.github.io/',
  'https://moekyawaung-senior.github.io/',
  'https://Moekyawaung-Development.github.io/',
  'https://moekyawaung-google.github.io/',
  'https://Moe-KyawAung.github.io/',
];
const ghEl = document.getElementById('ghPages');
if (ghEl) {
  ghPages.forEach(url => {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'link-item hologram';
    a.textContent = url.replace('https://', '');
    ghEl.appendChild(a);
  });
}

// ---------- Lovable ----------
const lovable = [
  'https://happy-cv-creator.lovable.app',
  'https://moekyawaung.lovable.app',
  'https://moekyawaungmybio.lovable.app/',
  'https://the-cv-palette.lovable.app',
  'https://moekyaw-url.lovable.app',
  'https://moekyawaung-dev.lovable.app',
  'https://moe-kyaw-aung.lovable.app',
  'https://moekyawaungmka.lovable.app',
  'https://moekyaw.lovable.app',
  'https://m-moekyaw.lovable.app',
  'https://dev-moekyawaung.lovable.app',
  'https://dev-moekyaw.lovable.app',
  'https://cv-beacon.lovable.app/',
  'https://moekyawaungmkamka.lovable.app',
  'https://pixel-perfect-snap-39.lovable.app',
  'https://devmoekyaw.lovable.app',
  'https://profile-persuasion-hub.lovable.app',
  'https://friendly-haven-io.lovable.app',
  'https://moekyawaung-github.lovable.app',
  'https://moekyawgithub.lovable.app',
  'https://joy-codify-life.lovable.app/',
  'https://mmoekyaw.lovable.app',
  'https://color-code-chronicles.lovable.app',
  'https://moekyawaung-free.lovable.app',
  'https://app-skill-gallery.lovable.app',
  'https://spark-coach-create.lovable.app',
  'https://moekyaw-mk.lovable.app',
  'https://moekyawaung-myanmar.lovable.app',
  'https://mmoe.lovable.app',
  'https://moekyaw-dev.lovable.app',
];
const lovEl = document.getElementById('lovableLinks');
if (lovEl) {
  lovable.forEach(url => {
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'link-item hologram';
    a.textContent = url.replace('https://', '').replace(/\/$/, '');
    lovEl.appendChild(a);
  });
}

// ---------- Emails ----------
const emails = [
  'moekyawaung@programmer.net',
  'moekyawaung@collector.org',
  'moekyawaung@technologist.com',
  'moekyawaung@techie.com',
  'moekyawaung@graphic-designer.com',
  'moekyawaung@cybergal.com',
  'moekyawaung@webname.com',
  'moekyawaung@hackermail.com',
  'moekyawaung@graduate.org',
  'moekyawaung@engineer.com',
  'moekyawaung@asia.com',
  'moekyawaung@contractor.net',
  'moekyawaung@linuxmail.org',
  'moekyawaung@usa.com',
  'moekyawaung@europe.com',
  'moekyawaung@mail.com',
  'moekyawaung@iname.com',
  'moekyawaung@socialogist.com',
  'moekyawaung@secretary.net',
  'moekyawaung@publicist.com',
];
const emailEl = document.getElementById('emailGrid');
if (emailEl) {
  emails.forEach(e => {
    const a = document.createElement('a');
    a.href = 'mailto:' + e;
    a.className = 'email-item hologram';
    a.textContent = e;
    emailEl.appendChild(a);
  });
}

// ---------- Language toggle ----------
const langBtn = document.getElementById('langToggle');
let currentLang = 'en';
langBtn?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'my' : 'en';
  document.documentElement.setAttribute('data-lang', currentLang);
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + currentLang);
    if (val !== null) {
      if (val.includes('<br')) el.innerHTML = val;
      else el.textContent = val;
    }
  });
  langBtn.textContent = currentLang === 'en' ? 'EN / မြန်မာ' : 'မြန်မာ / EN';
});

// ---------- Theme toggle ----------
const themeBtn = document.getElementById('themeToggle');
themeBtn?.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
});

// ---------- Mobile menu ----------
document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});

// ---------- AI Assistant ----------
const aiPanel = document.getElementById('aiPanel');
const aiMessages = document.getElementById('aiMessages');
const aiInput = document.getElementById('aiInput');

document.getElementById('aiToggle')?.addEventListener('click', () => {
  aiPanel?.classList.toggle('open');
});
document.getElementById('aiClose')?.addEventListener('click', () => {
  aiPanel?.classList.remove('open');
});

const knowledge = {
  kotlin: 'Moe specializes in modern Kotlin: coroutines, Flow, sealed classes, multi-module projects, and idiomatic Android patterns.',
  compose: 'Jetpack Compose is a core strength — declarative UI, Material 3, Navigation Compose, performance optimization, and production apps.',
  architecture: 'Clean Architecture + MVVM/MVI, offline-first with Room as source of truth, WorkManager sync, multi-module boundaries, Hilt/Koin DI.',
  firebase: 'Full Firebase suite: Auth, Firestore, Cloud Messaging, Crashlytics, Storage — integrated into production Android apps.',
  experience: 'Senior Android Engineer with 10+ years focus, 82+ certificates, 40+ public repos, bridging Myanmar and Thailand tech scenes.',
  projects: 'Featured apps include Video Player, Social Dashboard, Game Collection, multiple POS systems, Weather, Job Portal, and PulseSync-style offline-first platforms.',
  location: 'Based in Tachileik, Myanmar 🇲🇲 with strong ties to Bangkok, Thailand 🇹🇭.',
  contact: 'Phone: +95 9 889 000 889 / +959 666 000 050 · Email: moekyawaung@asia.com · GitHub: Dev-moe-kyawaung',
  philosophy: '"Code with culture. Build with purpose." — မိုးကျော်အောင်',
  default: 'Ask me about Kotlin, Jetpack Compose, Clean Architecture, offline-first design, Firebase, projects, experience, or contact info. I can answer in English or Burmese context.'
};

function aiReply(text) {
  const q = text.toLowerCase();
  let reply = knowledge.default;
  if (q.includes('kotlin')) reply = knowledge.kotlin;
  else if (q.includes('compose') || q.includes('jetpack')) reply = knowledge.compose;
  else if (q.includes('architect') || q.includes('offline') || q.includes('mvvm') || q.includes('clean')) reply = knowledge.architecture;
  else if (q.includes('firebase') || q.includes('backend')) reply = knowledge.firebase;
  else if (q.includes('experience') || q.includes('year') || q.includes('senior')) reply = knowledge.experience;
  else if (q.includes('project') || q.includes('app') || q.includes('repo')) reply = knowledge.projects;
  else if (q.includes('where') || q.includes('location') || q.includes('myanmar') || q.includes('bangkok')) reply = knowledge.location;
  else if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire')) reply = knowledge.contact;
  else if (q.includes('philosophy') || q.includes('quote') || q.includes('culture')) reply = knowledge.philosophy;
  return reply;
}

function addMsg(text, type) {
  const div = document.createElement('div');
  div.className = 'ai-msg ' + type;
  div.textContent = text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

function sendAI() {
  const text = aiInput.value.trim();
  if (!text) return;
  addMsg(text, 'user');
  aiInput.value = '';
  setTimeout(() => addMsg(aiReply(text), 'bot'), 400);
}

document.getElementById('aiSend')?.addEventListener('click', sendAI);
aiInput?.addEventListener('keydown', e => { if (e.key === 'Enter') sendAI(); });

// ---------- Contact form ----------
function handleContact(e) {
  e.preventDefault();
  alert('Thank you! Message received. (Demo form — connect to your backend or Formspree for production.)\n\nကျေးဇူးတင်ပါသည်။');
  e.target.reset();
  return false;
}

// ---------- Smooth nav close on mobile ----------
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.remove('open');
  });
});

console.log('%c MKA.DEV · Cyberpunk Portfolio Online ', 'background:#00f0ff;color:#05050a;font-weight:bold;padding:4px 8px;');
console.log('Moe Kyaw Aung · Senior Android Developer · Tachileik ↔ Bangkok');
