



const grabnavlinks = document.querySelector('.navlinks');
const grabhamburger = document.querySelector('.hamburger');

grabhamburger.addEventListener('click', respond);

function respond() {
    grabnavlinks.classList.toggle('show')
}


