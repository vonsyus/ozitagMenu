let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

const body = document.querySelector('body');

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu__list');

const arrows = document.querySelectorAll('.arrow');

const arrowsArr = Array.from(arrows);
const level1 = arrowsArr.filter(function(item) {
    return item.dataset.level === "1";
});
const level2 = arrowsArr.filter(function(item) {
    return item.dataset.level === "2";
});

let checker = false;

if (isMobile.any()) {
    body.classList.add('mobile');

    burger.addEventListener('click', function() {
        menu.classList.toggle('open');

        arrows.forEach((item) => {
            closeLevelOne(item);
            closeLevelTwo(item);
        });
    });

    arrows.forEach((item) => {
        
        
        item.addEventListener('click', function() {
            closeLevelOne(item);
            closeLevelTwo(item);

            openLevel(item);
        });
    });
} else {
    body.classList.add('pc');
}

function closeLevelOne(parent) {
    if (parent.dataset.level === "1") {
        level1.forEach((item) => {
            item.nextElementSibling.classList.remove('open');
            item.classList.remove('active');
        });

        closeLevelTwo(parent);
    }
}

function closeLevelTwo(parent) {
    if (parent.dataset.level === "2") {
        level2.forEach((item) => {
            item.nextElementSibling.classList.remove('open');
            item.classList.remove('active');
        });
    }
}

function openLevel(parent) {
    let subMenu = parent.nextElementSibling;
    let currentArrow = parent;

    subMenu.classList.toggle('open');
    currentArrow.classList.toggle('active');
}