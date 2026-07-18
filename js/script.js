// BDE BAKER — script commun à toutes les pages

document.addEventListener('DOMContentLoaded', function () {
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileMenuClose = document.getElementById('mobileMenuClose');

  if (burgerBtn && mobileMenu && mobileMenuClose) {
    burgerBtn.addEventListener('click', function () {
      mobileMenu.classList.add('open');
    });
    mobileMenuClose.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
  }
});
