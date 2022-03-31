/** swiper-about (для секции: Несколько слов о нас (about))
 * --- НАЧАЛО КОДА ----
*/
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },

  loop: true,

  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
/** swiper-about (для секции Несколько слов о нас (about))
 * --- КОНЕЦ КОДА --- */
