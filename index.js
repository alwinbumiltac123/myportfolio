// ============================= TOGGLE ICON NAVBAR =============================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ============================= SCROLL SELECTION ACTIVE =============================
let sections = document.querySelectorAll('.home, .about, .services, .project, .slide-show, .contact');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// ============================= STICKY NAVBAR =============================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

// ============================= REMOVE TOGGLE ICON AND NAVBAR =============================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ============================= SCROLL REVEAL =============================
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading,', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .services-container, .skills-box, .contact form, .project-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ============================= TYPES JS =============================
const typed = new Typed('.multiple-text', {
    strings: ['Junior Front End Web Developer', 'Junior Front End Mobile App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    
})

// ============================= ABOUT SECTION -- MODAL READ MORE =============================
const about = document.getElementById('about-myModal');
const aboutContent = document.querySelector('.about-modal-content');
const aboutBtn = document.getElementById('about-modalButton');
const closeContent = document.getElementsByClassName('about-close')[0];

aboutBtn.onclick = function() {
    if (about.style.display === 'block') {
        about.style.display = 'none';
        aboutContent.style.display = 'none';
        aboutBtn.textContent = 'Read More';
    } else {
        about.style.display = 'block';
        aboutContent.style.display = 'block';
        aboutBtn.textContent = 'Read Less';
    }
};

closeContent.onclick = function() {
    about.style.display = 'none';
    aboutContent.style.display = 'none';
    aboutBtn.textContent = 'Read More'; 
};

window.onclick = function(event) {
    if (event.target === about) {
        about.style.display = 'none';
        aboutContent.style.display = 'none';
        aboutBtn.textContent = 'Read More'; 
    }
};

// ============================= PROJECT SECTION -- MODAL PROJECT 4 =============================
var project4_modal = document.getElementById('project4-modal');
var project4_modalTrigger = document.getElementById('project4-modal-trigger');
var project4_closeModal = document.getElementById('project4-closeModal');

project4_modalTrigger.onclick = function() {
    project4_modal.style.display = 'block';
}

project4_closeModal.onclick = function() {
    project4_modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == project4_modal) {
        project4_modal.style.display = 'none';
    }
}


// ============================= PROJECT SECTION -- MODAL PROJECT 5 =============================
var project5_modal = document.getElementById('project5-modal');
var project5_modalTrigger = document.getElementById('project5-modal-trigger');
var project5_closeModal = document.getElementById('project5-closeModal');

project5_modalTrigger.onclick = function() {
    project5_modal.style.display = 'block';
}

project5_closeModal.onclick = function() {
    project5_modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == project5_modal) {
        project5_modal.style.display = 'none';
    }
}

// ============================= PROJECT SECTION -- MODAL PROJECT 6 =============================
var project6_modal = document.getElementById('project6-modal');
var project6_modalTrigger = document.getElementById('project6-modal-trigger');
var project6_closeModal = document.getElementById('project6-closeModal');

project6_modalTrigger.onclick = function() {
    project6_modal.style.display = 'block';
}

project6_closeModal.onclick = function() {
    project6_modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == project6_modal) {
        project6_modal.style.display = 'none';
    }
}


// ============================= SKILLS SECTION -- SLIDE SHOW =============================
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
// const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth)

carouselChildrens.slice(-cardPerview).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin",card.outerHTML);
});

carouselChildrens.slice(0, cardPerview).reverse().forEach(card => {
    carousel.insertAdjacentHTML("beforeend",card.outerHTML);
});

// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//             carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
//         });
// });

const dragStart = (e) => {
     isDragging = true;
     carousel.classList.add("dragging")
     startX = e.pageX;
     startScrollLeft = carousel.scrollLeft; 
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = stop;
    carousel.classList.remove("dragging")
}

const autoPlay = () => {
    if(window.innerWidth < 800) return;
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1000)
}

autoPlay()

const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition")
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition")
        carousel.scrollLeft = carousel.offsetWidth ;
        carousel.classList.remove("no-transition")
    }   

    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);