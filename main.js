/* ============================================================
   Lukesh Murugan — portfolio
   Everything is driven from CONFIG below. Edit that object to
   change content; no other file needs touching.
   ============================================================ */

const CONFIG = {
  githubUser: 'Lukesh2006',

  // Words cycled by the typing effect in the hero
  roles: [
    'computer vision systems',
    'deep learning models in PyTorch',
    'CUDA-accelerated pipelines',
    'full-stack apps with FastAPI',
    'AI that knows when it is unsure',
  ],

  // Work history
  experience: [
    {
      role: 'Full Stack Engineer',
      type: 'Internship',
      org: 'RETECH Solutions Pvt Ltd',
      when: 'June 2025 — August 2026',
      where: 'Tambaram, Chennai · On-site',
      points: [
        'Built and shipped full-stack features end to end — responsive HTML/CSS/JavaScript front-ends against REST APIs served by FastAPI.',
        'Integrated computer-vision workloads into production services using OpenCV, bridging Python model code and application endpoints.',
        'Worked across MySQL schema design and SQL query work backing the application data layer.',
        'Applied GPGPU techniques to accelerate compute-heavy routines, alongside C++, Java and Python across the stack.',
      ],
      stack: ['Python', 'FastAPI', 'REST APIs', 'JavaScript', 'HTML', 'CSS',
              'MySQL', 'OpenCV', 'C++', 'Java', 'GPGPU', 'Git'],
    },
  ],

  skills: [
    {
      icon: '👁️', title: 'Computer Vision', level: 92,
      blurb: 'Classical image processing through to real-time detection pipelines.',
      chips: ['OpenCV', 'Edge detection', 'Hough transform', 'Morphology', 'Haar cascades', 'Thresholding'],
    },
    {
      icon: '🧠', title: 'Deep Learning', level: 88,
      blurb: 'Architectures built and trained from scratch across vision and sequence tasks.',
      chips: ['PyTorch', 'CNN', 'RNN', 'LSTM', 'Autoencoders', 'Transfer learning', 'TensorFlow', 'Keras'],
    },
    {
      icon: '⚡', title: 'GPU & Parallel Computing', level: 85,
      blurb: 'Certified in GPU programming — concurrent and parallel workloads at scale.',
      chips: ['CUDA C', 'cuBLAS', 'GPGPU', 'Unified memory', 'CUDA at scale', 'Kernel profiling'],
    },
    {
      icon: '🌐', title: 'Full-Stack Engineering', level: 82,
      blurb: 'Production web work from database schema through API to browser.',
      chips: ['FastAPI', 'REST APIs', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'C++', 'Java'],
    },
    {
      icon: '🤖', title: 'Artificial Intelligence', level: 84,
      blurb: 'Search, planning and adversarial reasoning — the classical foundations.',
      chips: ['A*', 'Minimax', 'Alpha-beta', 'Hill climbing', 'Classical planning', 'Bayesian networks'],
    },
    {
      icon: '📊', title: 'Machine Learning & Data', level: 88,
      blurb: 'End-to-end modelling: cleaning, feature work, training, evaluation.',
      chips: ['scikit-learn', 'pandas', 'NumPy', 'SVM', 'K-Means', 'Decision trees', 'Regression'],
    },
    {
      icon: '🔧', title: 'Systems & Tools', level: 78,
      blurb: 'The supporting layer — databases, hardware description, version control.',
      chips: ['SQL / MySQL', 'DBMS design', 'Verilog HDL', 'Git & GitHub', 'VS Code', 'Jupyter', 'CAD / 3D modelling'],
    },
  ],

  // Verified credentials, newest first. `link` and `id` are optional.
  certifications: [
    {
      title: 'Database Management Essentials',
      issuer: 'University of Colorado Boulder · Coursera',
      date: 'Aug 2026',
      note: 'Relational design, normalisation and SQL — the data layer beneath every project.',
      id: 'HDP7BOEENJH8',
      link: 'https://coursera.org/verify/HDP7BOEENJH8',
    },
    {
      title: 'GPU Programming Specialization',
      issuer: 'Johns Hopkins University · Coursera',
      date: 'May 2026',
      note: 'Four courses: concurrent programming with GPUs, parallel programming with CUDA, CUDA at scale, and CUDA advanced libraries.',
      id: '7IH8WTUQSJ09',
      link: 'https://coursera.org/verify/specialization/7IH8WTUQSJ09',
    },
    {
      title: 'PyTorch Ultimate 2024 — From Basics to Cutting-Edge',
      issuer: 'Packt · Coursera',
      date: 'Mar 2026',
      note: 'Three-course specialization covering CNNs, RNNs and advanced model training in PyTorch.',
      id: 'HML4MP97Z11L',
      link: 'https://coursera.org/verify/specialization/HML4MP97Z11L',
    },
    {
      title: 'AI Explorer: Ready to Discover AI',
      issuer: 'IBM SkillsBuild',
      date: 'Nov 2025',
      note: 'Foundations of artificial intelligence and its applied landscape.',
      id: 'PLAN-1837FF826ECF',
    },
  ],

  // Curated highlights. `repo` is appended to the GitHub profile URL.
  projects: [
    {
      emoji: '💬', year: '2026', cat: 'AI',
      title: 'Uncertainty-Driven Conversational Repair',
      desc: 'A dialogue system that estimates its own confidence and initiates repair — asking, clarifying or backing off — instead of answering incorrectly with certainty.',
      tags: ['NLP', 'Uncertainty', 'Dialogue'],
      repo: 'Uncertainty-Driven-Conversational-Repair-System',
    },
    {
      emoji: '🚗', year: '2026', cat: 'Vision',
      title: 'License Plate Detection',
      desc: 'Automatic number-plate localisation using a Haar cascade classifier with OpenCV pre-processing and region-of-interest extraction.',
      tags: ['OpenCV', 'Haar cascade', 'Detection'],
      repo: 'License-Plate-Detection-using-OpenCV-and-Haar-Cascade-Classifier',
    },
    {
      emoji: '🎥', year: '2026', cat: 'Vision',
      title: 'Real-Time Webcam Object Detection',
      desc: 'Live object detection over a webcam stream, handling frame capture, inference and annotated rendering in a continuous loop.',
      tags: ['Real-time', 'OpenCV', 'Detection'],
      repo: 'Object-detection-using-web-camera',
    },
    {
      emoji: '🕶️', year: '2026', cat: 'Vision',
      title: 'Real-Time Face Filters',
      desc: 'Face-landmark driven AR overlay that tracks facial geometry and composites sunglasses onto a live video feed with correct scale and alignment.',
      tags: ['Face detection', 'AR overlay', 'OpenCV'],
      repo: 'real_time_face_filter_using_opencv',
    },
    {
      emoji: '🔍', year: '2026', cat: 'Vision',
      title: 'Canny & Sobel Edge Detection',
      desc: 'Comparative implementation of gradient-based edge operators, including a CUDA-accelerated Sobel filter benchmarked against the CPU path.',
      tags: ['Canny', 'Sobel', 'CUDA'],
      repo: 'Exp3-Sobel-edge-detection-filter-using-CUDA-to-enhance-the-performance-of-image-processing-tasks.',
    },
    {
      emoji: '🪙', year: '2026', cat: 'Vision',
      title: 'Coin Detection & Counting',
      desc: 'Contour and Hough-circle based pipeline that segments overlapping coins from a background and reports an accurate count.',
      tags: ['Contours', 'Hough circles', 'Segmentation'],
      repo: 'Coin-Detection',
    },
    {
      emoji: '🖼️', year: '2025', cat: 'Deep Learning',
      title: 'Convolutional Network for Image Classification',
      desc: 'A CNN designed, trained and evaluated end to end — convolution stacks, pooling strategy, regularisation and accuracy analysis.',
      tags: ['CNN', 'TensorFlow', 'Classification'],
      repo: 'Develop-a-Convolutional-Deep-Neural-Network-for-Image-Classification',
    },
    {
      emoji: '🔁', year: '2025', cat: 'Deep Learning',
      title: 'LSTM & RNN Sequence Models',
      desc: 'Recurrent architectures for sequential data, covering vanilla RNNs, LSTM gating and the vanishing-gradient behaviour that motivates them.',
      tags: ['LSTM', 'RNN', 'Sequences'],
      repo: 'DL-LSTM',
    },
    {
      emoji: '🗜️', year: '2025', cat: 'Deep Learning',
      title: 'Denoising Autoencoder',
      desc: 'An encoder–decoder trained to reconstruct clean images from corrupted inputs, exploring latent-space compression and representation quality.',
      tags: ['Autoencoder', 'Denoising', 'Latent space'],
      repo: 'DL-Autoencoder',
    },
    {
      emoji: '🧮', year: '2025', cat: 'Parallel',
      title: 'CUDA Matrix Operations',
      desc: 'GPU kernels for matrix summation and multiplication using 2D grids, 2D blocks, unified memory and cuBLAS, with CPU-versus-GPU timing.',
      tags: ['CUDA C', 'cuBLAS', 'Unified memory'],
      repo: 'EXP-6---Matrix-multiplication-using-cuBLAS-in-CUDA-C-',
    },
    {
      emoji: '📶', year: '2025', cat: 'Parallel',
      title: 'Parallel Sorting on GPU',
      desc: 'Bubble sort and merge sort ported to CUDA, examining how thread divergence and memory access patterns shape real speed-up.',
      tags: ['CUDA', 'Sorting', 'Benchmarking'],
      repo: 'Exp-5----Bubble-Sort-and-Merge-sort-in-CUDA',
    },
    {
      emoji: '♟️', year: '2025', cat: 'AI',
      title: 'Minimax with Alpha-Beta Pruning',
      desc: 'Adversarial game search with pruning, showing how much of the tree can be discarded without changing the chosen move.',
      tags: ['Minimax', 'Alpha-beta', 'Game AI'],
      repo: '-Alpha-beta-pruning-of-Minimax-Search-Algorithm',
    },
    {
      emoji: '🗺️', year: '2025', cat: 'AI',
      title: 'A* Pathfinding & Heuristic Search',
      desc: 'Informed search implementations — A*, hill climbing and depth-first search — compared on path optimality and nodes expanded.',
      tags: ['A*', 'Heuristics', 'Search'],
      repo: 'A-STAR',
    },
    {
      emoji: '🤝', year: '2025', cat: 'AI',
      title: 'AI Chatbot',
      desc: 'A conversational assistant handling intent matching and contextual responses — the groundwork for the later uncertainty-repair research.',
      tags: ['Chatbot', 'NLP', 'Python'],
      repo: 'AI-CHATBOT',
    },
    {
      emoji: '📧', year: '2025', cat: 'Machine Learning',
      title: 'SVM Spam Mail Detection',
      desc: 'Text classification with a support vector machine — vectorisation, kernel choice and precision/recall trade-offs on spam data.',
      tags: ['SVM', 'NLP', 'scikit-learn'],
      repo: 'Implementation-of-SVM-For-Spam-Mail-Detection',
    },
    {
      emoji: '🎯', year: '2025', cat: 'Machine Learning',
      title: 'K-Means Customer Segmentation',
      desc: 'Unsupervised clustering over customer data, using the elbow method to select k and profiling each resulting segment.',
      tags: ['K-Means', 'Clustering', 'Analytics'],
      repo: 'Implementation-of-K-Means-Clustering-for-Customer-Segmentation',
    },
    {
      emoji: '🌳', year: '2025', cat: 'Machine Learning',
      title: 'Decision Tree for Employee Churn',
      desc: 'A tree classifier predicting attrition, with feature-importance analysis explaining which signals actually drive the prediction.',
      tags: ['Decision tree', 'Churn', 'Feature importance'],
      repo: 'Implementation-of-Decision-Tree-Classifier-Model-for-Predicting-Employee-Churn',
    },
    {
      emoji: '🔌', year: '2025', cat: 'Systems',
      title: 'Verilog Digital Design Suite',
      desc: 'Sequential and combinational hardware in Verilog HDL — flip-flops, ripple and synchronous counters, shift registers, adders and encoders.',
      tags: ['Verilog', 'HDL', 'Digital logic'],
      repo: '4-BIT-RIPPLE-COUNTER',
    },
  ],

  timeline: [
    {
      when: '2024 — 2028',
      title: 'B.Tech, Artificial Intelligence & Data Science',
      text: 'Saveetha Engineering College, Chennai. Currently in my third year, graduating 2028 — coursework spanning AI, machine learning, data science, computer vision, parallel computing and digital systems.',
    },
    {
      when: 'Sept 2024',
      title: 'Started building in public',
      text: 'Opened my GitHub account and began publishing every experiment — from first linear-algebra scripts to full vision pipelines. It is now 177 public repositories.',
    },
    {
      when: '2024 — 2025',
      title: 'Foundations: maths, data and hardware',
      text: 'Linear algebra in code (eigenvalues, LU and QR decomposition, matrix norms), probability and queueing models, data-science exploration, and digital design in Verilog HDL.',
    },
    {
      when: 'Nov 2025',
      title: 'IBM SkillsBuild — AI Explorer',
      text: 'Completed IBM SkillsBuild AI Explorer, formalising the foundations behind the machine-learning work I had been building repository by repository.',
    },
    {
      when: '2025',
      title: 'Machine learning and deep learning',
      text: 'Moved from regression and clustering into neural networks — CNNs, RNNs, LSTMs, autoencoders and transfer-learning workflows, plus classical AI search and planning.',
    },
    {
      when: 'Jun 2025 — Aug 2026',
      title: 'Full Stack Engineer Intern · RETECH Solutions',
      text: 'Fourteen months on-site in Tambaram building production web features — FastAPI services, REST APIs, MySQL and responsive front-ends — with OpenCV computer vision and GPGPU acceleration wired into the stack.',
    },
    {
      when: 'Mar 2026',
      title: 'PyTorch specialization — Packt',
      text: 'Completed the three-course PyTorch Ultimate specialization, moving my deep-learning work onto PyTorch across CNN, RNN and advanced training techniques.',
    },
    {
      when: 'May 2026',
      title: 'GPU Programming Specialization — Johns Hopkins',
      text: 'Four courses on concurrent GPU programming, parallel programming with CUDA, CUDA at scale for the enterprise, and CUDA advanced libraries — the theory behind the kernels I had been writing.',
    },
    {
      when: 'Aug 2026',
      title: 'Database Management Essentials — CU Boulder',
      text: 'Certified in relational design, normalisation and SQL, strengthening the data layer beneath my AI, data science and software work.',
    },
    {
      when: 'Now',
      title: 'Advanced AI and applied research',
      text: 'Bayesian networks and advanced AI coursework, and an uncertainty-driven conversational repair system exploring how dialogue agents should behave when confidence is low.',
    },
  ],
};

/* ============================================================
   Boot
   ============================================================ */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  renderSkills();
  renderCerts();
  renderExperience();
  renderProjects();
  renderTimeline();
  initReveal();
  initNav();
  initTheme();
  initTyping();
  initCursor();
  initMagnetic();
  initTilt();
  initSpotlight();
  initScrollProgress();
  initParticles();
  loadRepos();
});

window.addEventListener('load', () => {
  setTimeout(() => $('#preloader').classList.add('done'), 600);
});

/* ============================================================
   Rendering
   ============================================================ */
function renderSkills() {
  $('#skillsGrid').innerHTML = CONFIG.skills.map((s, i) => `
    <article class="skill-card reveal" style="transition-delay:${i * 70}ms">
      <span class="skill-icon">${s.icon}</span>
      <h3>${s.title}</h3>
      <p>${s.blurb}</p>
      <div class="skill-bar"><i data-level="${s.level}"></i></div>
      <div class="chips">${s.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
    </article>`).join('');
}

function renderExperience() {
  $('#experienceList').innerHTML = CONFIG.experience.map(x => `
    <article class="exp-card reveal">
      <div class="exp-head">
        <div>
          <h3>${x.role} <span class="exp-type">${x.type}</span></h3>
          <p class="exp-org">${x.org}</p>
        </div>
        <div class="exp-meta">
          <span class="exp-when">${x.when}</span>
          <span class="exp-where">${x.where}</span>
        </div>
      </div>
      <ul class="exp-points">${x.points.map(p => `<li>${p}</li>`).join('')}</ul>
      <div class="chips">${x.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
    </article>`).join('');
}

function renderCerts() {
  $('#certsList').innerHTML = CONFIG.certifications.map((c, i) => {
    const inner = `
      <span class="cert-badge">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.4L7 22l5-2.6L17 22l-1.2-8.6"/></svg>
      </span>
      <span class="cert-body">
        <strong>${c.title}</strong>
        <em>${c.issuer}</em>
        ${c.note ? `<span class="cert-note">${c.note}</span>` : ''}
        ${c.id ? `<span class="cert-id">ID ${c.id}${c.link ? ' · verify ↗' : ''}</span>` : ''}
      </span>
      <span class="cert-date">${c.date}</span>`;

    return c.link
      ? `<a class="cert-item" href="${c.link}" target="_blank" rel="noopener"
            style="transition-delay:${i * 70}ms">${inner}</a>`
      : `<div class="cert-item" style="transition-delay:${i * 70}ms">${inner}</div>`;
  }).join('');
}

function renderProjects() {
  const cats = ['All', ...new Set(CONFIG.projects.map(p => p.cat))];
  $('#filters').innerHTML = cats.map((c, i) =>
    `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${c}">${c}</button>`
  ).join('');

  $('#projectsGrid').innerHTML = CONFIG.projects.map((p, i) => `
    <article class="project-card reveal" data-cat="${p.cat}" style="transition-delay:${(i % 3) * 90}ms">
      <div class="pc-top"><span class="pc-emoji">${p.emoji}</span><span class="pc-year">${p.year}</span></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="pc-tags">${p.tags.map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
      <a class="pc-link" href="https://github.com/${CONFIG.githubUser}/${p.repo}" target="_blank" rel="noopener">
        View repository
        <svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8"/></svg>
      </a>
    </article>`).join('');

  $('#filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    $$('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
    const cat = btn.dataset.cat;
    $$('.project-card').forEach((card, i) => {
      const show = cat === 'All' || card.dataset.cat === cat;
      card.classList.toggle('hide', !show);
      if (show) {
        card.classList.remove('enter');
        void card.offsetWidth;              // restart the animation
        card.style.animationDelay = `${(i % 6) * 45}ms`;
        card.classList.add('enter');
      }
    });
  });
}

function renderTimeline() {
  $('#timeline').innerHTML = CONFIG.timeline.map(t => `
    <div class="tl-item">
      <span class="tl-when">${t.when}</span>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </div>`).join('');
}

/* ============================================================
   Scroll reveal + counters + skill bars
   ============================================================ */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');

      if (en.target.classList.contains('skill-card')) {
        const bar = $('.skill-bar i', en.target);
        setTimeout(() => { bar.style.width = bar.dataset.level + '%'; }, 220);
      }
      if (en.target.classList.contains('hero-stats')) {
        $$('.count', en.target).forEach(countUp);
      }
      io.unobserve(en.target);
    });
  }, { threshold: .15, rootMargin: '0px 0px -8% 0px' });

  $$('.reveal, .tl-item').forEach(el => io.observe(el));
}

function countUp(el) {
  const to = +el.dataset.to;
  const plain = el.dataset.plain === '1';
  if (reduced) { el.textContent = plain ? to : to + '+'; return; }
  const dur = 1500, t0 = performance.now();
  const tick = now => {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * eased) + (p === 1 && !plain ? '+' : '');
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ============================================================
   Nav: sticky state, scroll spy, mobile menu
   ============================================================ */
function initNav() {
  const nav = $('#nav'), links = $('#navLinks'), burger = $('#burger');

  addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 40), { passive: true });

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.classList.toggle('locked', open);
  });
  links.addEventListener('click', e => {
    if (e.target.tagName !== 'A') return;
    links.classList.remove('open');
    burger.classList.remove('open');
    document.body.classList.remove('locked');
  });

  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      $$('.nav-links a').forEach(a => a.classList.toggle('active', a.hash === '#' + id));
    });
  }, { threshold: .1, rootMargin: '-45% 0px -50% 0px' });

  $$('section[id]').forEach(s => spy.observe(s));
}

function initScrollProgress() {
  const bar = $('.scroll-progress span');
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
  };
  addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   Theme
   ============================================================ */
function initTheme() {
  const root = document.documentElement;
  const stored = (() => { try { return localStorage.getItem('lm-theme'); } catch { return null; } })();
  if (stored) root.dataset.theme = stored;

  $('#themeToggle').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('lm-theme', next); } catch {}
  });
}

/* ============================================================
   Hero typing effect
   ============================================================ */
function initTyping() {
  const el = $('#typed');
  if (reduced) { el.textContent = CONFIG.roles[0]; return; }

  let i = 0, char = 0, deleting = false;
  const loop = () => {
    const word = CONFIG.roles[i];
    char += deleting ? -1 : 1;
    el.textContent = word.slice(0, char);

    let wait = deleting ? 38 : 72;
    if (!deleting && char === word.length) { wait = 1900; deleting = true; }
    else if (deleting && char === 0) { deleting = false; i = (i + 1) % CONFIG.roles.length; wait = 320; }
    setTimeout(loop, wait);
  };
  setTimeout(loop, 1300);
}

/* ============================================================
   Custom cursor
   ============================================================ */
function initCursor() {
  if (matchMedia('(hover: none)').matches) return;
  const dot = $('.cursor-dot'), ring = $('.cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
  }, { passive: true });

  const follow = () => {
    rx += (mx - rx) * .16; ry += (my - ry) * .16;
    ring.style.transform = `translate3d(${rx - 17}px, ${ry - 17}px, 0)`;
    requestAnimationFrame(follow);
  };
  follow();

  document.addEventListener('mouseover', e => {
    const hot = e.target.closest('a, button, .project-card, .skill-card, .chip');
    ring.classList.toggle('grow', !!hot);
  });
}

/* ============================================================
   Magnetic buttons
   ============================================================ */
function initMagnetic() {
  if (reduced || matchMedia('(hover: none)').matches) return;
  $$('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * .25}px, ${y * .35}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ============================================================
   3D tilt on the profile card
   ============================================================ */
function initTilt() {
  if (reduced || matchMedia('(hover: none)').matches) return;
  $$('.tilt').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      el.style.transform =
        `perspective(900px) rotateY(${px * 9}deg) rotateX(${-py * 9}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ============================================================
   Cursor-following spotlight inside skill cards
   ============================================================ */
function initSpotlight() {
  document.addEventListener('mousemove', e => {
    const card = e.target.closest('.skill-card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', e.clientX - r.left + 'px');
    card.style.setProperty('--my', e.clientY - r.top + 'px');
  }, { passive: true });
}

/* ============================================================
   Particle / constellation background
   ============================================================ */
function initParticles() {
  const cv = $('#bg-canvas');
  if (reduced) { cv.style.display = 'none'; return; }

  const ctx = cv.getContext('2d');
  let w, h, dots = [], raf;
  const mouse = { x: -9999, y: -9999 };

  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr;
    h = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + 'px';
    cv.style.height = innerHeight + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(Math.round(innerWidth * innerHeight / 16000), 110);
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      vx: (Math.random() - .5) * .28,
      vy: (Math.random() - .5) * .28,
      r: Math.random() * 1.5 + .5,
    }));
  };

  const draw = () => {
    const light = document.documentElement.dataset.theme === 'light';
    const base = light ? '13,148,136' : '94,234,212';
    const link = light ? '79,70,229' : '129,140,248';
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > innerWidth)  d.vx *= -1;
      if (d.y < 0 || d.y > innerHeight) d.vy *= -1;

      // gentle repulsion from the pointer
      const dx = d.x - mouse.x, dy = d.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 130 && dist > 0) {
        d.x += (dx / dist) * 1.1;
        d.y += (dy / dist) * 1.1;
      }

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${base},${light ? .45 : .55})`;
      ctx.fill();
    });

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 16000) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(${link},${(1 - d2 / 16000) * (light ? .18 : .22)})`;
          ctx.lineWidth = .7;
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(draw);
  };

  resize();
  draw();
  addEventListener('resize', resize);
  addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  addEventListener('mouseout', () => { mouse.x = mouse.y = -9999; });

  // stop burning frames when the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(draw);
  });
}

/* ============================================================
   Live GitHub feed
   ============================================================ */
async function loadRepos() {
  const list = $('#repoList');
  const url = `https://api.github.com/users/${CONFIG.githubUser}/repos?sort=updated&per_page=8`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    const repos = (await res.json()).slice(0, 8);

    list.innerHTML = repos.map((r, i) => `
      <a class="repo-item" href="${r.html_url}" target="_blank" rel="noopener"
         style="animation-delay:${i * 60}ms">
        <span class="repo-name">${r.name}</span>
        <span class="repo-meta">
          ${r.language ? `<span class="repo-lang">${r.language}</span>` : ''}
          <span>updated ${timeAgo(r.updated_at)}</span>
        </span>
      </a>`).join('');
  } catch {
    list.innerHTML = `<p class="repo-error">
      Could not reach the GitHub API right now —
      <a href="https://github.com/${CONFIG.githubUser}?tab=repositories" target="_blank" rel="noopener">
      browse the repositories directly</a>.</p>`;
  }
}

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (days < 1)   return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30)  return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
  const years = Math.floor(months / 12);
  return `${years} year${years > 1 ? 's' : ''} ago`;
}
