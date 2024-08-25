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
    "inoculations": ["adenovirus", "distemper"],
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
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
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
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]
}
const sliderElementsPets = document.querySelector('.slider-pets');

//Функция заполнения слайдера
function populateSlidesPets() {
  sliderElementsPets.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const slide = document.createElement('div');
      slide.className = 'slider-el';
      slide.innerHTML = `
      <img class="slider-img" src="${data.items[i].img}" alt="${data.items[i].name}">
      <p class="slider-name">${data.items[i].name}</p>
      <button class="our-friends-button slider-button">Learn more</button>
      `;
      sliderElementsPets.appendChild(slide);
  }
}

populateSlidesPets();


var burger = document.querySelector(".burger");
var menu = document.querySelector(".mobile-menu");
var background = document.querySelector(".no-scroll-background");
var body = document.querySelector("body");
var popap = document.querySelector(".popap");


// Функция для переключения состояния меню и фона
function toggleMenu() {
    burger.classList.toggle("rotate");
    burger.classList.toggle("change-color");
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
        body.classList.add("no-scroll");
    } else {
        body.classList.remove("no-scroll");
    }
}

// Функция для переключения состояния попапа и фона
function togglePopap() {
  popap.classList.toggle("open");
  background.classList.toggle("open");
  if (popap.classList.contains("open")) {
      body.classList.add("no-scroll");
  } else {
      body.classList.remove("no-scroll");
  }
}

// Обработчик клика по бургер-меню
burger.addEventListener("click", toggleMenu);

// Обработчик клика по фону
background.addEventListener("click", function(event) {
    // Проверяем, что клик был не на меню
    if (!menu.contains(event.target) && menu.classList.contains("open")) {
        toggleMenu();
    // Проверяем, что клик был не на попапе
    } else if (!popap.contains(event.target) && popap.classList.contains("open")) {
      togglePopap();
    }
});


var menuLinks = document.querySelectorAll(".mobile-nav-item");

// Обработчики кликов на ссылки в меню
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (menu.classList.contains("open")) {
            toggleMenu();
        }
    });
});


var slidesPets = document.querySelectorAll(".slider-pets .slider-el");

// Обработчик клика по слайдеру
slidesPets.forEach(slide => {
  slide.addEventListener('click', function(event) {
    let nameElement = slide.querySelector(".slider-name");
    let petName = nameElement.textContent;
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].name === petName) {
    popap.innerHTML = `
     <div class="popap-close"><img src="../../assets/icons/vector.png" alt="close"></div>
     <img class="popap-img" src="${data.items[i].img}" alt="${data.items[i].name}">
     <div class="popap-info">
      <h3 class="popap-name">${data.items[i].name}</h3>
      <h4 class="popap-animal">${data.items[i].breed}</h4>
      <p class="popap-description">${data.items[i].description}</p>
      <ul class="popap-list">
        <li class="popap-age"><b>Age:</b> ${data.items[i].age}</li>
        <li class="popap-inoculations"><b>Inoculations:</b> ${data.items[i].inoculations}</li>
        <li class="popap-diseases"><b>Diseases:</b> ${data.items[i].diseases}</li>
        <li class="popap-parasites"><b>Parasites:</b> ${data.items[i].parasites}</li>
      </ul>
     </div>
     `;
    }
  }
  togglePopap();
  // Обработчик клика по крестику
  var close = document.querySelector(".popap-close");
  close.addEventListener("click", togglePopap);
  });
});


function moveSlider(direction) {
    
}

document.querySelector('.next-paginator').addEventListener('click', () => {
  moveSlider('next');
 });

document.querySelector('.prev-paginator').addEventListener('click', () => {
  moveSlider('prev');
});