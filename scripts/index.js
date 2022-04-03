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
    type: 'bullets',
    clickable: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
/** swiper-about (для секции Несколько слов о нас (about))
 * --- КОНЕЦ КОДА --- */



/** карточки (для секции: Проекты (projects))
 * --- НАЧАЛО КОДА ----
*/

/** для темплейта */
const itemTemplate = document.querySelector('#template-projects-cards'); // ссылка на темплейт
const listElement = document.querySelector('.projects__cards-list'); // ссылка на родителя (куда вставить темплейт)

/** для меню (projects__menu) */
const navProjects = document.querySelector('.projects__menu');


/** функция: сгенерировать карточку из темлейта:
 * 1) клонировать темплейт из html в DOM;
 * 2) наполнить темплейт содержимым: название места, ссылка на картинку, alt к картинке;
 * 3) установить слушатели: на картинку, на кнопку лайк/дизлайк, на кнопку удаления карточки (корзинку);
 *
 * на вход функция получает объект, поэтому обращаемся к свойствам объекта можно через точку: item.name и item.link,
 * через ключ-переменную: item['name'] и item['link'] либо воспользоваться деструктуризацией: const createCard = ({name, link}) => {};
 * данная функция возвращает сгенерированную карточку;
 * для отрисовки карточки на странице используется функция renderCard();
*/
const createCard = ({logo, text, bgrImg}) => {
  // клонировал темлейт из html в DOM
  const itemElement = itemTemplate.content.cloneNode(true);
  // ввел переменную внутри функции
  const cardLogoElm = itemElement.querySelector('.projects__card-logo'); // ссылка на картинку в карточке
  // наполнил темплейт содержимым:
  itemElement.querySelector('.projects__card-text').textContent = text;
  cardLogoElm.src = logo;
  cardLogoElm.alt = `${logo}. Логотип`;
  //установил картинку в background
  itemElement.querySelector('.projects__card').style.background = `center / cover no-repeat url(${bgrImg}), #009FAC`;

  return itemElement;
};

/** функция: отрисовать карточку на странице (вставить в разметку):
 * данная функция переиспользуется для отрисовки исходного массива и для добавления новой карточки;
 * на вход функция получает 2 (два) строчных значения (текст и ссылку), которые пользователь ввел в форму;
 * эти значения присваиваются ключам-переменным (name, link);
 * затем ключи-переменные объединяем и в качестве (!)объекта передаем в функцию createCard;
*/

const renderCard = (logo, text, bgrImg) => {
  listElement.appendChild(createCard({logo, text, bgrImg}));
};

/** перебрать исходный массив, и отрисовать карточки по порядку
 * карточки должны выводиться на страницу в ограниченном количестве, в зависимости от разрешения экрана,
 * для этого вначале делим массив на несколько массивов методом slice
*/

/**Алгоритм:
 * 1) подсчитать общее количество объектов в массиве.
 * 2) поделить количество объектов на число доступных ячеек на странице (в зависимости от разрешения экрана) = число страниц.
 * 3) разбить исходный массив на несколько массивов количеством, равным числу страниц.
 * 4) каждой странице присвоить свой массив (№ страницы -- это индекс мелкого массива).
 * 5) отрисовать тот массив, номер страницы которого активен.
 */

/*
let b;

const ArrLength = () => {
if (window.innerWidth <= 768) {
  b = projectsCards.length / 4;
} else if (window.innerWidth <= 1024) {
  b = projectsCards.length / 6;
} else {
  b = projectsCards.length / 8;
};

return Math.ceil(b);// число страниц = количество элементов в массиве / число карточек на странице
// столько же цифорок нужно отрисовать в пагинации
};

const chunkArray = b => {
  ArrLength ();

  let i, newArray = [];
  for (i = 0; i < projectsCards.length; i += b) {
    newArray.push(projectsCards.slice(i, i + b));
  }
};
*/

/** Изначально отрисовать все карточки на странице */
projectsCards.forEach(item => renderCard(item.logo, item.textMain, item.bgrImgage));

/** ФУНКЦИЯ: Открыть/закрыть меню бамбургера */
const projectsBurgerElm = document.querySelector('.projects__burger');
const projectsBurgerNavBtn = projectsBurgerElm.querySelector('.projects__burger-nav-button');
const projectsBurgerNavList = projectsBurgerElm.querySelector('.projects__burger-nav-list');
const projectsBurgerNavItem = Array.from(projectsBurgerElm.querySelectorAll('.projects__burger-nav-item')); // массив со ссылками на все кнопки бургера

const allProjectsBtn = projectsBurgerElm.querySelector('#allProjects');
const govProjectsBtn = projectsBurgerElm.querySelector('#govProjects');
const specProjects = projectsBurgerElm.querySelector('#specProjects');
const inProgress = projectsBurgerElm.querySelector('#inProgress');

const toggleBurgerNav = () => {
  projectsBurgerNavList.classList.toggle('projects__burger-nav-list_opened');
};

projectsBurgerNavBtn.addEventListener('click', toggleBurgerNav);



/** функционирование выпадающего меню(бургера) */

/** Изначально заполнить название кнопки и пунктов меню */
projectsBurgerNavBtn.textContent = menuItemsArr[0].title;

allProjectsBtn.textContent = menuItemsArr[0].title;
govProjectsBtn.textContent = menuItemsArr[1].title;
specProjects.textContent = menuItemsArr[2].title;
inProgress.textContent = menuItemsArr[3].title;

/** ФУНКЦИЯ: Изменить пункты мены выпадающего списка при клике на другой пункт*/
const chooseNewNavItem = (evt) => {
  //отобразить скрытый пункт меню выпащающего списка
  projectsBurgerElm.querySelector('.projects__burger-nav-item_hidden').classList.remove('projects__burger-nav-item_hidden');
  //скрыть пункт меню, по которому кликнули
  evt.target.classList.add('projects__burger-nav-item_hidden');

  //Изменить текст кнопки выпадающего списка
  menuItemsArr.forEach(arrItem => {
    // const a = evt.target.getAttribute('id');
    if (arrItem.id === evt.target.getAttribute('id')) {
      projectsBurgerNavBtn.textContent = arrItem.title;
      };
  });
};

/** ФУНКЦИЯ: Фильтрация карточек по id */

const renderFilteredCards = (evt) => {
  // 1) переключить активную кнопку
  projectsBurgerNavItem.forEach(item => {
    if (item.classList.contains('projects__burger-nav-item_active')) {
      item.classList.remove('projects__burger-nav-item_active');
    };
    return;
  });

  evt.target.classList.add('projects__burger-nav-item_active');


  // 2) удалить все карточки со страницы
  listElement.querySelectorAll('.projects__card').forEach(item => {
    item.remove();
  });


  // 3) отрисовать на странице отфильтрованные карточки
  projectsCards.forEach(item => {

    if (item.id === evt.target.getAttribute('id') || evt.target.getAttribute('id') === 'allProjects') {
      renderCard(item.logo, item.textMain, item.bgrImgage);
    };
  });
};

// navProjects.querySelectorAll('.projects__menu-button').forEach(evt => {
//   evt.addEventListener('click', renderFilteredCards);
// });


/** Изачально скрыть из выпадающего списка пункт меню, совпадащий с названием кнопки
 * установить слушатель на пункты меню выпадающего списка для функций изменения названия кнопки и
 * фильтрации карточек по id
 */
projectsBurgerNavItem.forEach(item => {
  if (item.textContent === projectsBurgerNavBtn.textContent) {
    item.classList.add('projects__burger-nav-item_hidden');
  };

  item.addEventListener('click', evt => {
    evt.preventDefault();
    chooseNewNavItem(evt);
    renderFilteredCards(evt);
    toggleBurgerNav();
  });
});









/** Фильтрация карточек по id (для полного меню)*/

// const renderFilteredCards = (evt) => {
//   // 1) переключить активную кнопку
//   navProjects.querySelectorAll('.projects__menu-button').forEach(item => {
//     if (item.classList.contains('projects__menu-button_active')) {
//       item.classList.remove('projects__menu-button_active');
//     };
//     return;
//   });

//   evt.target.classList.add('projects__menu-button_active');


//   // 2) удалить все карточки со страницы
//   listElement.querySelectorAll('.projects__card').forEach(item => {
//     item.remove();
//   });


//   // 3) отрисовать на странице отфильтрованные карточки
//   projectsCards.forEach(item => {

//     if (item.id === evt.target.getAttribute('id') || evt.target.getAttribute('id') === 'allProjects') {
//       renderCard(item.logo, item.textMain, item.bgrImgage);
//     };
//   });
// };

// navProjects.querySelectorAll('.projects__menu-button').forEach(evt => {
//   evt.addEventListener('click', renderFilteredCards);
// });



/** карточки (для секции: Проекты (projects))
 * --- КОНЕЦ КОДА --- */
