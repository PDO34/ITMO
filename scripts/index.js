/** swiper-about (для секции: Несколько слов о нас (about))
 * --- НАЧАЛО КОДА ----
*/
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

let swiper = new Swiper(".swiper-about", {
  slidesPerView: 2,
  spaceBetween: 32,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/** swiper-about (для секции Несколько слов о нас (about))
 * --- КОНЕЦ КОДА --- */
