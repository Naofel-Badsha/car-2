//_______________NavBar___________Star_______________//
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
//_______________NavBar___________Star_______________//



//------------Login------------Button---------------//
document.querySelector('#loginBtn').onclick = () => {
    document.querySelector('.loginFormomContainer').classList.toggle('active')
};

document.querySelector('#CloseLoginForm').onclick = () => {
    document.querySelector('.loginFormomContainer').classList.remove('active')
};
//------------Login------------Button---------------//



//---------Home--------Parallex--------Effect-----------//
document.querySelector(".Home").onmousemove = (e) => {
    document.querySelectorAll(".homeParallexEffect").forEach((el) => {
        let Speed = el.getAttribute("data-speed")
        let X = (window.innerWidth - e.pageX * Speed) / 50;
        let Y = (window.innerHeight - e.pageY * Speed) / 50;

        el.style.transform = `translateX(${Y}px) translateY(${X}px)`;
    });
};

document.querySelector(".Home").onmouseleave = (e) => {
    document.querySelectorAll(".homeParallexEffect").forEach((el) => {
        el.style.transform = `translateX(0px) translateY(0px)`;
    });
};
//---------Home--------Parallex--------Effect-----------//



//---------Icons------------Container---------Start---------//
let valueDidplays = document.querySelectorAll(".num");
let interval = 5000;

valueDidplays.forEach((valueDidplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDidplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDidplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});
//---------Icons------------Container---------End---------//



//---------Vehicls---------Swiper--------Slider----------//
var swiper = new Swiper(".VehiclesSlider", {  
    grabCursor: true,
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        770: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
      },
    });
  //---------Vehicls---------Swiper--------Slider----------//



  //---------Clint------------Review--------Slider----------//
var swiper = new Swiper(".review-slider", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    //--------This-----Is----For-----Responsive-------//
    breakpoints: {
      640: {
          slidesPerView: 1,
      },
      770: {
          slidesPerView: 2,
      },
      1200: {
          slidesPerView: 3,
      },
    },
  });
  //---------Clint------------Review--------Slider----------//