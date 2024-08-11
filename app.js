let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-list ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-list ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

let typed = new Typed(".auto-input", {
    strings: ["Frontend Development", "Backend Development", "Web Designing","Web Development"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
  
  var header = document.getElementById("skills-btn");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("ac");
    current[0].className = current[0].className.replace(" ac", "");
    this.className += " ac";
    });
  }

  let fBtn = document.querySelector(".f-btn");
  let bBtn = document.querySelector(".b-btn")
  let oBtn = document.querySelector(".o-btn")
  let skills1 = document.querySelector(".skills-1");
  let skills2 = document.querySelector(".skills-2")
  let skills3 = document.querySelector(".skills-3")

  fBtn.addEventListener("click", function(){
    skills1.style.display="flex";

    skills2.style.display="none";
    skills3.style.display="none";
  })
  bBtn.addEventListener("click", function(){
    skills1.style.display="none";
    skills2.style.display="flex";
    skills3.style.display="none";
  })
  oBtn.addEventListener("click", function(){
    skills1.style.display="none";
    skills2.style.display="none";
    skills3.style.display="flex";
  })

  var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }