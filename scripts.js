/* ===================================================
   KADYE & GIN — Navigation & Interaction
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.getElementById('home');
  const contentSections = Array.from(
    document.querySelectorAll('main > section[id]')
  ).filter(s => s.id !== 'home');

  const navLinks = document.querySelectorAll('.nav-link[data-target]');
  const regionButtons = document.querySelectorAll('.region-btn[data-target]');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks_container = document.querySelector('.nav-links');

  // ---- Menu toggle (mobile) ----
  if (menuToggle && navLinks_container) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks_container.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navLinks_container.contains(e.target)) {
        navLinks_container.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- Navigation logic ----
  function showHome() {
    homeSection?.classList.remove('js-hidden');
    contentSections.forEach(s => s.classList.add('js-hidden'));
    navLinks.forEach(a => a.classList.remove('active'));
    navLinks_container?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    history.replaceState(null, '', location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showSection(id) {
    const target = document.getElementById(id);
    if (!target) return;

    homeSection?.classList.add('js-hidden');
    contentSections.forEach(s => {
      s.classList.toggle('js-hidden', s.id !== id);
    });
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.target === id));
    navLinks_container?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Back buttons ----
  contentSections.forEach(section => {
    let header = section.querySelector('.section-header');
    if (!header) {
      header = document.createElement('div');
      header.className = 'section-header';
      section.insertBefore(header, section.firstChild);
    }

    if (!section.querySelector('.back-btn')) {
      const back = document.createElement('button');
      back.className = 'back-btn';
      back.innerHTML = '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back to Home';
      back.addEventListener('click', showHome);
      header.insertBefore(back, header.firstChild);
    }
  });

  // ---- Nav link clicks ----
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      if (target === 'home' || !target) {
        showHome();
      } else {
        showSection(target);
      }
    });
  });

  // ---- Home region/explore button clicks ----
  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target) showSection(target);
    });
  });

  // ---- Brand link ----
  const brandLink = document.querySelector('.brand-home, .nav-brand');
  brandLink?.addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
  });

  // ---- Handle URL hash on load ----
  const initialHash = location.hash.replace('#', '');
  if (initialHash && document.getElementById(initialHash)) {
    showSection(initialHash);
  } else {
    showHome();
  }
});
