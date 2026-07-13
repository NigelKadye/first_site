document.addEventListener('DOMContentLoaded', function () {
  const home = document.getElementById('home');
  const regionSections = Array.from(document.querySelectorAll('main > section[id]')).filter(s => s.id !== 'home');
  const navLinks = document.querySelectorAll('.nav-link');
  const regionButtons = document.querySelectorAll('.region-btn');
  const menuToggle = document.querySelector('.menu-toggle');
  const stickyNav = document.querySelector('.sticky-nav');
  const brandHome = document.querySelector('.brand-home');

  function showHome() {
    if (home) {
      home.classList.remove('js-hidden');
      home.classList.remove('section-transition');
      requestAnimationFrame(() => home.classList.add('section-transition'));
    }
    regionSections.forEach(s => s.classList.add('js-hidden'));
    navLinks.forEach(a => a.classList.remove('active'));
    history.replaceState(null, '', '#');
  }

  function showRegion(id) {
    const section = document.getElementById(id);
    if (!section) return;
    if (home) home.classList.add('js-hidden');
    regionSections.forEach(s => {
      if (s.id === id) {
        s.classList.remove('js-hidden');
        s.classList.remove('section-transition');
        requestAnimationFrame(() => s.classList.add('section-transition'));
        s.scrollIntoView({behavior: 'smooth', block: 'start'});
      } else {
        s.classList.add('js-hidden');
      }
    });
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.target === id));
    history.replaceState(null, '', `#${id}`);
  }

  function closeMenu() {
    if (!menuToggle || !stickyNav) return;
    stickyNav.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('i').className = 'fa-solid fa-bars';
  }

  menuToggle?.addEventListener('click', () => {
    const isOpen = stickyNav.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  brandHome?.addEventListener('click', event => {
    event.preventDefault();
    showHome();
    closeMenu();
  });

  navLinks.forEach(link => {
    const target = link.dataset.target || link.getAttribute('href')?.replace('#','');
    link.addEventListener('click', (e) => {
      if (target) {
        e.preventDefault();
        showRegion(target);
        closeMenu();
      }
    });
  });
  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.target;
      if (t) {
        showRegion(t);
        closeMenu();
      }
    });
  });

  regionSections.forEach(s => {
    let header = s.querySelector('.section-header');
    if (!header) {
      header = document.createElement('div');
      header.className = 'section-header';
      s.insertBefore(header, s.firstChild);
    }
    if (!s.querySelector('.back-to-home')) {
      const back = document.createElement('button');
      back.className = 'back-to-home';
      back.innerHTML = '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back';
      back.addEventListener('click', showHome);
      header.insertBefore(back, header.firstChild);
    }
  });

  document.querySelectorAll('.gin-image').forEach(image => {
    image.addEventListener('error', () => {
      image.hidden = true;
      const placeholder = document.createElement('div');
      placeholder.className = 'gin-image-placeholder';
      placeholder.innerHTML = '<i class="fa-solid fa-bottle-droplet" aria-hidden="true"></i>';
      image.parentElement.appendChild(placeholder);
    }, { once: true });
  });

  const initialHash = location.hash.replace('#','');
  if (initialHash && document.getElementById(initialHash)) {
    showRegion(initialHash);
  } else {
    showHome();
  }
});
