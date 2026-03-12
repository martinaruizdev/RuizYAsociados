    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: '#0A192F',
            charcoal: '#333333',
            gold: '#C5A059',
            silver: '#C0C0C0'
          },
          fontFamily: {
            serif: ['"Playfair Display"', 'serif'],
            sans: ['Lato', 'sans-serif'],
          }
        }
      }
    }

      const currentPage = document.body.dataset.page; // e.g. "inicio"
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });

  // --- Hamburger toggle ---
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  toggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    menuIcon.textContent = isOpen ? 'menu' : 'close';
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Cerrar menú al hacer click en un enlace
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuIcon.textContent = 'menu';
      toggle.setAttribute('aria-expanded', 'false');
    });
  });