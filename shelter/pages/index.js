var burger = document.querySelector(".burger");
var menu = document.querySelector(".mobile-menu");
var background = document.querySelector(".mobile-background");
var menuLinks = document.querySelectorAll(".mobile-nav-item");
var body = document.querySelector("body");

// Функция для переключения состояния меню и фона
function toggleMenu() {
    burger.classList.toggle("rotate");
    burger.classList.toggle("change-color");
    menu.classList.toggle("open");
    background.classList.toggle("open");
    if (menu.classList.contains("open")) {
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
    }
});

// Обработчики кликов на ссылки в меню
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (menu.classList.contains("open")) {
            toggleMenu();
        }
    });
});