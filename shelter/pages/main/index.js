const data = {
  "items": [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["leptospirosis"],
    "diseases": ["deafness"],
    "parasites": ["lice", "fleas"]
  }
]
}

const sliderElements = document.querySelector('.slider-elements');
const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelectorAll(".mobile-nav-item");
const backgroundMenu = document.querySelector("header .no-scroll-background");
const backgroundPopap = document.querySelector("main .no-scroll-background");
const body = document.querySelector("body");
const popap = document.querySelector(".popap");

let step = 0;
let itemsPerPage = 3;

//Функция для определения количества слайдов на странице
function updateSlidesToShow() {
  const width = window.innerWidth;
  
  if (width <= 320) {
    itemsPerPage = 1;
  } else if (width <= 768) {
    itemsPerPage = 2;
  } else {
    itemsPerPage = 3;
  }
  //populateSlides();
}

// Функция для заполнения слайдов
function populateSlides() {
  updateSlidesToShow();
  sliderElements.innerHTML = '';

  for (let i = 0; i < itemsPerPage; i++) {
    let index = (step + i) % data.items.length;
    const slide = document.createElement('div');
    slide.className = 'slider-el';
    slide.style.left = `${i * 100}px`;
    slide.innerHTML = `
      <img class="slider-img" src="${data.items[index].img}" alt="${data.items[index].name}">
      <p class="slider-name">${data.items[index].name}</p>
      <button class="our-friends-button slider-button">Learn more</button>
    `;
    sliderElements.appendChild(slide);
  }
  populatePopap();
}

//вызов функции заполнения слайдов
populateSlides();

// Функция для переключения стрелки вправо
function sliderRight() {
  updateSlidesToShow();
  const currentSlides = document.querySelectorAll('.slider-el');

  for (let i = 0; i < currentSlides.length; i++) {
    currentSlides[i].style.left = `${(i - itemsPerPage) * 100}px`;
  }
  step = (step + itemsPerPage) % data.items.length;
  populateSlides();
}

// Функция для переключения стрелки влево
function sliderLeft() {
  updateSlidesToShow();
  const currentSlides = document.querySelectorAll('.slider-el');

  for (let i = 0; i < currentSlides.length; i++) {
    currentSlides[i].style.left = `${(i + itemsPerPage) * 100}px`;
  }
  step = (step - itemsPerPage + data.items.length) % data.items.length;
  populateSlides();
}

// Функция для переключения состояния меню и фона
function toggleMenu() {
  burger.classList.toggle("rotate");
  burger.classList.toggle("change-color");
  menu.classList.toggle("open");
  backgroundMenu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
}

// Функция для переключения состояния попапа и фона
function togglePopap() {
  popap.classList.toggle("open");
  backgroundPopap.classList.toggle("open");
  if (popap.classList.contains("open")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
}

//Функция для заполнения попап
function populatePopap() {
  const slides = document.querySelectorAll(".slider-el");
  slides.forEach(slide => {
    slide.addEventListener('click', function () {
      const nameElement = slide.querySelector(".slider-name");
      const petName = nameElement.textContent;

      for (let item of data.items) {
        if (item.name === petName) {
          popap.innerHTML = `
            <div class="popap-close"><img src="../../assets/icons/vector.png" alt="close"></div>
            <img class="popap-img" src="${item.img}" alt="${item.name}">
            <div class="popap-info">
              <h3 class="popap-name">${item.name}</h3>
              <h4 class="popap-animal">${item.type} - ${item.breed}</h4>
              <p class="popap-description">${item.description}</p>
              <ul class="popap-list">
                <li class="popap-age"><b>Age:</b> ${item.age}</li>
                <li class="popap-inoculations"><b>Inoculations:</b> ${item.inoculations.join(', ')}</li>
                <li class="popap-diseases"><b>Diseases:</b> ${item.diseases.join(', ')}</li>
                <li class="popap-parasites"><b>Parasites:</b> ${item.parasites.join(', ')}</li>
              </ul>
            </div>
          `;
        }
      }
      togglePopap();

      // Обработчик клика по крестику
      const close = document.querySelector(".popap-close");
      close.addEventListener("click", togglePopap);
    });
  });
}

// Обработчик изменения размера окна
window.addEventListener('resize', updateSlidesToShow);

// Обработчик загрузки страницы
window.addEventListener('load', updateSlidesToShow);

// Обработчик клика по стрелкам
document.querySelector('.prev-paginator').addEventListener('click', sliderLeft);
document.querySelector('.next-paginator').addEventListener('click', sliderRight);

// Обработчик клика по бургер-меню
burger.addEventListener("click", toggleMenu);

// Обработчик клика по фону
backgroundMenu.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && menu.classList.contains("open")) {
    toggleMenu();
  }
});

// Обработчик клика по фону
backgroundPopap.addEventListener("click", function (event) {
  if (!popap.contains(event.target) && popap.classList.contains("open")) {
    togglePopap();
  }
});

// Обработчики кликов на ссылки в меню
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("open")) {
      toggleMenu();
    }
  });
});
