
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// menubtnmobile
// === MOBILE MENU ===
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeMobileMenu?.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

// === LOGOUT CONFIRM (MOBILE DRAWER STYLE) ===
const logoutMobileBtn = document.getElementById('logoutMobileBtn');
const drawerLogoutConfirm = document.getElementById('drawerLogoutConfirm');
const cancelDrawerLogout = document.getElementById('cancelDrawerLogout');

logoutMobileBtn?.addEventListener('click', () => {
  drawerLogoutConfirm.classList.remove('hidden');
});

cancelDrawerLogout?.addEventListener('click', () => {
  drawerLogoutConfirm.classList.add('hidden');
});


// userdesktop
const userDesktop = document.getElementById('userDesktop');
const userDesktopSetting = document.getElementById('userDesktopSetting');

userDesktop?.addEventListener('click', () => {
  userDesktopSetting.classList.toggle('hidden');
});
// === MODAL LOGOUT DESKTOP ===
const logoutDesktop = document.getElementById('logoutDesktop');
const modalLogoutDesktop = document.getElementById('modalLogoutDesktop');
const cancelLogoutDesktop = document.getElementById('cancelLogoutDesktop');

logoutDesktop?.addEventListener('click', () => {
  modalLogoutDesktop.classList.remove('hidden');
});

cancelLogoutDesktop?.addEventListener('click', () => {
  modalLogoutDesktop.classList.add('hidden');
});

// faq
const faqItems = document.querySelectorAll('.faq-items');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq.answer');
  const icon = item.querySelector('.toggle-icon');

  question.addEventListener('click', () => {
    const isOpen = !answer.classList.contains('hidden');

    // Tutup semua dulu (biar cuma 1 yang buka)
    document.querySelectorAll('.faq.answer').forEach(a => a.classList.add('hidden'));
    document.querySelectorAll('.toggle-icon').forEach(i => i.classList.remove('rotate-180'));

    // Buka yang sekarang
    if (!isOpen) {
      answer.classList.remove('hidden');
      icon.classList.add('rotate-180');
    }
  });
});