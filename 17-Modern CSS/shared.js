// backdrop element
let backdrop = document.querySelector('.backdrop');
// modal element
let modal = document.querySelector('.modal');
// choose plan button array
let selectPlanButton = document.querySelectorAll('.plan button');
// no button element
let noButton = document.querySelector('.modal__actions button');
// toggle button
let toggleButton = document.querySelector('.toggle-button');
// mobile nav
let mobileNav = document.querySelector('.mobile-nav');
// start hosting cta button
let ctaButton = document.querySelector(".main-nav__item__cta")

// show backdrop and modal function
const showOverlay = () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
}

// hide backdrop and modal function and side nav
const hideOverlay = () => {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none';
    if(modal) {
        modal.classList.remove('open');
    }
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    setTimeout(function() {
        backdrop.style.display = "none";
    }, 200);
    
}

// event listeners to 'choose plan' buttons to show overlay
for(let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', showOverlay);
}

// event listener to no button and backdrop to remove overlay
backdrop.addEventListener('click', hideOverlay);
if(noButton) {
    noButton.addEventListener('click', hideOverlay);
}

// event listener to open side nav
toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
});


// Start Hosting Button Animation
ctaButton.addEventListener("animationstart", function(event) {
    console.log("Animation Started", event);
})
ctaButton.addEventListener("animationend", function(event) {
    console.log("Animation Ended", event);
})
ctaButton.addEventListener("animationiteration", function(event) {
    console.log("Animation Iteration", event);
})