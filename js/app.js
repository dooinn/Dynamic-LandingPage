/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


const topMenu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const navItems = document.getElementsByClassName("menu__link");



// build the nav

const navBuilder = () => {
    let navCode = '';
    sections.forEach(section => {
        let sectionId = section.id;
        let sectionDataNav = section.dataset.nav;
        navCode += `<li><a class="menu__link ${sectionId}" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });
    topMenu.innerHTML = navCode;
}

navBuilder();

// Add class 'active' to section when near top of viewport

function sectionActive() {
    for (const section of sections) {
        const boxPlace = section.getBoundingClientRect();

        if (boxPlace.top <= 150 && boxPlace.bottom >= 150) {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.add("active");
            section.classList.add("your-active-class");
        } else {
            const id = section.getAttribute("id");
            document.querySelector(`.${id}`).classList.remove("active");
            section.classList.remove("your-active-class");
        }
    }
}

document.addEventListener('scroll', function () {
    sectionActive();
});

// Scroll to anchor ID using scrollTO event

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/**
 * End Main Functions
 * Begin Events
 *
*/