// Hamburger menu toggle for mobile navigation
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (!btn || !sidebar) return;

  const toggle = () => {
    sidebar.classList.toggle('open');
    overlay?.classList.toggle('open');
    btn.setAttribute('aria-expanded', sidebar.classList.contains('open'));
  };

  btn.addEventListener('click', toggle);
  overlay?.addEventListener('click', toggle);

  // Close sidebar when clicking a nav link (same-page anchors)
  sidebar.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) toggle();
    });
  });
});
