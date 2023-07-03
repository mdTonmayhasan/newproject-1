

 window.onscroll = () =>{
   let header = document.querySelector("header");
   header.classList.toggle('sticky',  window.scrollY > 100);
   navBar.classList.remove("active");
   menuIcon.classList.remove("bi-x");
 }

// nav icon change and click to come navbar 
let menuIcon = document.querySelector("#icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
 menuIcon.classList.toggle("bi-x");
 navBar.classList.toggle("active");
}

// data counts low and height 
let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;

valueDisplay.forEach(valueDisplay => {
  let stratValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  
  let duration = Math.floor(interval / endValue );
  let counter = setInterval(function (){
    stratValue += 1;
    valueDisplay.textContent = stratValue;

    if(stratValue == endValue){
      clearInterval(counter);
    }
  },duration);
});


// SAEPE FUGA VOLUPTATES CORRUPTI  add class 
let taps = document.querySelectorAll(".taps h4");
let tapContent = document.querySelectorAll(".tap-content div");

taps.forEach((tap, index) =>{
  tap.addEventListener("click", () =>{
    tapContent.forEach((content)=> {
       content.classList.remove("active");
    });
    taps.forEach((tap)=>{
      tap.classList.remove("active");
    });
    tapContent[index].classList.add("active");
    taps[index].classList.add("active");
  });
});

 /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e){
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });


  // testimonial section jquery fuctional

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1200:{
        slidesPerView: 3,
      },

      1280:{
        slidesPerView: 3,
      }
    }
  });

  // Our clients section and slider 
  var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
        autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
         breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 40,
        }
      }
    });