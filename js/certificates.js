/* ===== CERTIFICATES DATA + SEARCH/FILTER ===== */

const CERTIFICATES = [
  // Programming Languages
  { name: 'C Programming', cat: 'Programming Languages', date: 'Jul 4, 2024', id: '1720080366600', verify: 'https://www.programminghub.io/certificate?id=1720080366600' },
  { name: 'C++ Programming', cat: 'Programming Languages', date: '2024', id: 'cpp-2024', verify: '#' },
  { name: 'Java Programming', cat: 'Programming Languages', date: '2024', id: 'java-2024', verify: '#' },
  { name: 'Kotlin Programming', cat: 'Programming Languages', date: '2024', id: 'kotlin-2024', verify: '#' },
  { name: 'Python Programming', cat: 'Programming Languages', date: '2024', id: 'python-2024', verify: '#' },
  { name: 'JavaScript Fundamentals', cat: 'Programming Languages', date: '2024', id: 'js-2024', verify: '#' },
  { name: 'TypeScript Basics', cat: 'Programming Languages', date: '2024', id: 'ts-2024', verify: '#' },
  { name: 'Go Programming', cat: 'Programming Languages', date: '2024', id: 'go-2024', verify: '#' },
  { name: 'Rust Basics', cat: 'Programming Languages', date: '2024', id: 'rust-2024', verify: '#' },
  { name: 'Dart Programming', cat: 'Programming Languages', date: '2024', id: 'dart-2024', verify: '#' },
  { name: 'Ruby Programming', cat: 'Programming Languages', date: '2024', id: 'ruby-2024', verify: '#' },
  { name: 'Swift Basics', cat: 'Programming Languages', date: '2024', id: 'swift-2024', verify: '#' },
  { name: 'Data Structures & Algorithms', cat: 'Programming Languages', date: '2024', id: 'dsa-2024', verify: '#' },

  // Web Development
  { name: 'HTML5 & CSS3', cat: 'Web Development', date: '2024', id: 'html-css', verify: '#' },
  { name: 'Responsive Web Design', cat: 'Web Development', date: '2024', id: 'rwd', verify: '#' },
  { name: 'React Fundamentals', cat: 'Web Development', date: '2024', id: 'react', verify: '#' },
  { name: 'Next.js Basics', cat: 'Web Development', date: '2024', id: 'nextjs', verify: '#' },
  { name: 'Vue.js Essentials', cat: 'Web Development', date: '2024', id: 'vue', verify: '#' },
  { name: 'Angular Basics', cat: 'Web Development', date: '2024', id: 'angular', verify: '#' },
  { name: 'Node.js & Express', cat: 'Web Development', date: '2024', id: 'node', verify: '#' },
  { name: 'REST API Design', cat: 'Web Development', date: '2024', id: 'rest', verify: '#' },
  { name: 'GraphQL Basics', cat: 'Web Development', date: '2024', id: 'graphql', verify: '#' },
  { name: 'Web Performance', cat: 'Web Development', date: '2024', id: 'perf', verify: '#' },
  { name: 'PWA Development', cat: 'Web Development', date: '2024', id: 'pwa', verify: '#' },
  { name: 'Frontend Architecture', cat: 'Web Development', date: '2024', id: 'fe-arch', verify: '#' },
  { name: 'CSS Animations & Effects', cat: 'Web Development', date: '2024', id: 'css-anim', verify: '#' },

  // Mobile & App Dev
  { name: 'Android Development', cat: 'Mobile & App Dev', date: '2024', id: 'android-dev', verify: '#' },
  { name: 'Kotlin for Android', cat: 'Mobile & App Dev', date: '2024', id: 'kotlin-android', verify: '#' },
  { name: 'Jetpack Compose', cat: 'Mobile & App Dev', date: '2024', id: 'compose', verify: '#' },
  { name: 'Jetpack / Android Architecture', cat: 'Mobile & App Dev', date: '2024', id: 'jetpack', verify: '#' },
  { name: 'Flutter Development', cat: 'Mobile & App Dev', date: '2024', id: 'flutter', verify: '#' },
  { name: 'React Native', cat: 'Mobile & App Dev', date: '2024', id: 'rn', verify: '#' },
  { name: 'Firebase for Mobile', cat: 'Mobile & App Dev', date: '2024', id: 'firebase-mobile', verify: '#' },
  { name: 'iOS App Development Basics', cat: 'Mobile & App Dev', date: '2024', id: 'ios', verify: '#' },
  { name: 'Ionic Framework', cat: 'Mobile & App Dev', date: '2024', id: 'ionic', verify: '#' },

  // Databases
  { name: 'SQL Fundamentals', cat: 'Databases', date: '2024', id: 'sql', verify: '#' },
  { name: 'PostgreSQL', cat: 'Databases', date: '2024', id: 'postgres', verify: '#' },
  { name: 'MongoDB Basics', cat: 'Databases', date: '2024', id: 'mongo', verify: '#' },
  { name: 'Room Database', cat: 'Databases', date: '2024', id: 'room', verify: '#' },
  { name: 'Redis Basics', cat: 'Databases', date: '2024', id: 'redis', verify: '#' },
  { name: 'Database Design', cat: 'Databases', date: '2024', id: 'db-design', verify: '#' },

  // AI & Data Science
  { name: 'Machine Learning Basics', cat: 'AI & Data Science', date: '2024', id: 'ml', verify: '#' },
  { name: 'TensorFlow Lite', cat: 'AI & Data Science', date: '2024', id: 'tflite', verify: '#' },
  { name: 'Python for Data Science', cat: 'AI & Data Science', date: '2024', id: 'py-ds', verify: '#' },
  { name: 'Neural Networks Intro', cat: 'AI & Data Science', date: '2024', id: 'nn', verify: '#' },
  { name: 'Computer Vision Basics', cat: 'AI & Data Science', date: '2024', id: 'cv', verify: '#' },
  { name: 'NLP Fundamentals', cat: 'AI & Data Science', date: '2024', id: 'nlp', verify: '#' },
  { name: 'On-Device ML', cat: 'AI & Data Science', date: '2024', id: 'ondevice', verify: '#' },
  { name: 'Claude API Integration', cat: 'AI & Data Science', date: '2024', id: 'claude', verify: '#' },
  { name: 'Data Visualization', cat: 'AI & Data Science', date: '2024', id: 'dataviz', verify: '#' },
  { name: 'Pandas & NumPy', cat: 'AI & Data Science', date: '2024', id: 'pandas', verify: '#' },
  { name: 'AI Ethics & Responsible AI', cat: 'AI & Data Science', date: '2024', id: 'ai-ethics', verify: '#' },

  // Security & DevOps
  { name: 'Ethical Hacking Basics', cat: 'Security & DevOps', date: '2024', id: 'eh', verify: '#' },
  { name: 'Cybersecurity Fundamentals', cat: 'Security & DevOps', date: '2024', id: 'cyber', verify: '#' },
  { name: 'Linux Administration', cat: 'Security & DevOps', date: '2024', id: 'linux', verify: '#' },
  { name: 'Kali Linux Essentials', cat: 'Security & DevOps', date: '2024', id: 'kali', verify: '#' },
  { name: 'Git & GitHub Professional', cat: 'Security & DevOps', date: '2024', id: 'git', verify: '#' },
  { name: 'GitHub Actions CI/CD', cat: 'Security & DevOps', date: '2024', id: 'gha', verify: '#' },
  { name: 'Docker Basics', cat: 'Security & DevOps', date: '2024', id: 'docker', verify: '#' },
  { name: 'Azure DevOps Intro', cat: 'Security & DevOps', date: '2024', id: 'azure-devops', verify: '#' },
  { name: 'Network Security Basics', cat: 'Security & DevOps', date: '2024', id: 'netsec', verify: '#' },
  { name: 'OWASP Top 10', cat: 'Security & DevOps', date: '2024', id: 'owasp', verify: '#' },

  // Blockchain
  { name: 'Blockchain Fundamentals', cat: 'Blockchain', date: '2024', id: 'bc', verify: '#' },
  { name: 'Smart Contracts Intro', cat: 'Blockchain', date: '2024', id: 'sc', verify: '#' },
  { name: 'Cryptocurrency Basics', cat: 'Blockchain', date: '2024', id: 'crypto', verify: '#' },
  { name: 'Web3 Concepts', cat: 'Blockchain', date: '2024', id: 'web3', verify: '#' },

  // Software Engineering
  { name: 'Clean Architecture', cat: 'Software Engineering', date: '2024', id: 'clean', verify: '#' },
  { name: 'SOLID Principles', cat: 'Software Engineering', date: '2024', id: 'solid', verify: '#' },
  { name: 'Design Patterns', cat: 'Software Engineering', date: '2024', id: 'dp', verify: '#' },
  { name: 'Agile & Scrum', cat: 'Software Engineering', date: '2024', id: 'agile', verify: '#' },
  { name: 'Unit Testing', cat: 'Software Engineering', date: '2024', id: 'unit', verify: '#' },
  { name: 'System Design Basics', cat: 'Software Engineering', date: '2024', id: 'sysdesign', verify: '#' },
  { name: 'Code Review Best Practices', cat: 'Software Engineering', date: '2024', id: 'review', verify: '#' },

  // Marketing & Business
  { name: 'Digital Marketing Basics', cat: 'Marketing & Business', date: '2024', id: 'dm', verify: '#' },
  { name: 'SEO Fundamentals', cat: 'Marketing & Business', date: '2024', id: 'seo', verify: '#' },
  { name: 'Product Management Intro', cat: 'Marketing & Business', date: '2024', id: 'pm', verify: '#' },
  { name: 'Startup Fundamentals', cat: 'Marketing & Business', date: '2024', id: 'startup', verify: '#' },
  { name: 'UI/UX Principles', cat: 'Marketing & Business', date: '2024', id: 'ux', verify: '#' },
  { name: 'Personal Branding', cat: 'Marketing & Business', date: '2024', id: 'brand', verify: '#' },
  { name: 'Technical Writing', cat: 'Marketing & Business', date: '2024', id: 'techwrite', verify: '#' },
  { name: 'Project Management', cat: 'Marketing & Business', date: '2024', id: 'projmgmt', verify: '#' },
  { name: 'Business Communication', cat: 'Marketing & Business', date: '2024', id: 'bizcomm', verify: '#' },
  { name: 'Freelancing Essentials', cat: 'Marketing & Business', date: '2024', id: 'freelance', verify: '#' },
  { name: 'Open Source Contribution', cat: 'Marketing & Business', date: '2024', id: 'oss', verify: '#' },
];

const CATEGORIES = [
  'all',
  'Programming Languages',
  'Web Development',
  'Mobile & App Dev',
  'Databases',
  'AI & Data Science',
  'Security & DevOps',
  'Blockchain',
  'Software Engineering',
  'Marketing & Business'
];

function renderCerts(filterCat = 'all', search = '') {
  const container = document.getElementById('certContainer');
  if (!container) return;

  const q = search.toLowerCase().trim();
  let list = CERTIFICATES.filter(c => {
    const matchCat = filterCat === 'all' || c.cat === filterCat;
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.cat.toLowerCase().includes(q) || c.id.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  document.getElementById('certCount').textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = '<p class="no-results">No certificates match your search.</p>';
    return;
  }

  // Group by category
  const groups = {};
  list.forEach(c => {
    if (!groups[c.cat]) groups[c.cat] = [];
    groups[c.cat].push(c);
  });

  let html = '';
  Object.keys(groups).forEach(cat => {
    html += `
      <div class="cert-category fade-up" data-category="${cat}">
        <div class="cert-cat-header">
          <span class="cert-cat-name">${cat}</span>
          <span class="cert-cat-count">${groups[cat].length}</span>
        </div>
        <div class="cert-grid">
          ${groups[cat].map(c => `
            <div class="cert-card hologram" data-name="${c.name.toLowerCase()}">
              <div class="cert-name">${c.name}</div>
              <div class="cert-date">📅 ${c.date}</div>
              <div class="cert-id">${c.id}</div>
              <a href="${c.verify}" target="_blank" rel="noopener" class="cert-verify">✓ Verify ↗</a>
            </div>
          `).join('')}
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('certContainer')) return;

  let activeCat = 'all';
  renderCerts(activeCat, '');

  // Search
  document.getElementById('certSearch')?.addEventListener('input', e => {
    renderCerts(activeCat, e.target.value);
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.cat || 'all';
      renderCerts(activeCat, document.getElementById('certSearch')?.value || '');
    });
  });
});
