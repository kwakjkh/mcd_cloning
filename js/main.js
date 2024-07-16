window.onload = function(){
    var swiper = new Swiper(".banner-inner", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      const liveButton1 = document.querySelector(".live-bt1");
      const liveButton2 = document.querySelector(".live-bt2");
      const secondLive = document.querySelector(".second-live");
      liveButton1.addEventListener("click", function(){
        secondLive.classList.add("second")
        liveButton1.classList.add("button1")
        liveButton2.classList.add("button2")
      })
      const thirdLive = document.querySelector(".third-live");
      const close = document.querySelector(".bt-box");
      liveButton2.addEventListener("click", function(){
        thirdLive.classList.add("third")
        close.classList.add("close")
      }
    )
    }