const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0,
   yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    let speedz = el.dataset.speedz;
    let rotateSpeed = el.dataset.rotation;

    let isInLeft =
      parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue =
      (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

    el.style.transform = `perspective(2300px) translateZ(${
      zValue * speedz
    }px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${
      -xValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
}

update(0);

window.addEventListener("mousemove", (e) => {
  

  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

  update(e.clientX);
});

if (window.innerWidth >= 725) {
  main.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
  main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})
const year = document.getElementById('year');
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;


  