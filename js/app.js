let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".header__btn-hamburger");
let headerList = document.querySelector(".header__list");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})

let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
  let currentTime = new Date();

  hrs.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
},1000)

let hrs2 = document.getElementById("hrs2")
let min2 = document.getElementById("min2")
let sec2 = document.getElementById("sec2")
setInterval(()=>{
    let currentTime2 = new Date();
  
    hrs2.innerHTML = currentTime2.getHours();
    min2.innerHTML = currentTime2.getMinutes();
    sec2.innerHTML = currentTime2.getSeconds();
  },1000)
