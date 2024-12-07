// backdrop element
let backdrop = document.querySelector('.backdrop');
// modal element
let modal = document.querySelector('.modal');
// choose plan button array
let selectPlanButton = document.querySelectorAll('.plan button');
// no button element
let noButton = document.querySelector('.modal__actions button');

// show backdrop and modal function
const showOverlay = () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

// hide backdrop and modal function
const hideOverlay = () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

// add event listeners to 'choose plan' buttons to show overlay
for(let i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', showOverlay);
}

// add event listener to no button and backdrop to remove overlay
backdrop.addEventListener('click', hideOverlay);
noButton.addEventListener('click', hideOverlay);