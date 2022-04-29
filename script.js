
// // var x = document.getElementById("myDIV");
// //   if (x.style.display === "none") {
// //     x.style.display = "block";
// //   } else {
// //     x.style.display = "none";
//   }


const grabnavlinks = document.querySelector('.navlinks');
const grabhamburger = document.querySelector('.hamburger');

grabhamburger.addEventListener('click', respond);

function respond() {
    grabnavlinks.classList.toggle('show')
}