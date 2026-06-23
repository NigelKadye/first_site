document.addEventListener('DOMContentLoaded', function () {
  const home = document.getElementById('home');
  const regionSections = Array.from(document.querySelectorAll('main > section[id]')).filter(s => s.id !== 'home');
  const navLinks = document.querySelectorAll('.nav-link');
  const regionButtons = document.querySelectorAll('.region-btn');

  function showHome() {
    if (home) home.classList.remove('js-hidden');
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
        s.scrollIntoView({behavior: 'smooth'});
      } else {
        s.classList.add('js-hidden');
      }
    });
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.target === id));
    history.replaceState(null, '', `#${id}`);
  }

  navLinks.forEach(link => {
    const target = link.dataset.target || link.getAttribute('href')?.replace('#','');
    link.addEventListener('click', (e) => {
      if (target) { e.preventDefault(); showRegion(target); }
    });
  });
  regionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.target;
      if (t) showRegion(t);
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
      back.textContent = '◀ Back';
      back.style.marginBottom = '1rem';
      back.addEventListener('click', showHome);
      header.insertBefore(back, header.firstChild);
    }
  });

  const initialHash = location.hash.replace('#','');
  if (initialHash && document.getElementById(initialHash)) {
    showRegion(initialHash);
  } else {
    showHome();
  }
});
