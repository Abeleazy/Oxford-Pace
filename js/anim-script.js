function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// HEADER SCROLL AND SCROLL INDICATOR ================================================>
let header = document.querySelector("header");
let prevScrollPosition = window.pageYOffset;

window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if(prevScrollPosition > currentScrollPosition) {
        header.style.top = "0";
        // header.style.top = "20px";
        header.classList.add('newHeaderBg');
        header.classList.remove('position-absolute');
        document.querySelector('.hamburger-logo-image').style.paddingTop = "18px";
    }else{
        header.style.top = `-${header.offsetHeight}px`;
    };
    prevScrollPosition = currentScrollPosition;

    if(prevScrollPosition === 0) {
        header.classList.remove('newHeaderBg');
        header.classList.add('position-absolute');
        header.style.top = "0px";
    };

    myFunction();
}
// HEADER SCROLL END ================================================>


// HERO SLIDER ================================================>

// MANUAL SLIDE ==========>
// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

// AUTO SLIDE ==========>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 8 seconds
}


    // var slideIndex = 0;
    // showSlides();

    // function showSlides() {
    //   var i;
    //   let mySlides = document.querySelectorAll(".mySlides");
    //   let myMarker = document.querySelectorAll(".my-marker");
    
    //   for (i = 0; i < mySlides.length; i+=1) {
    //     mySlides[i].style.display = "none";
    //   }
    //   slideIndex++;
    //   if (slideIndex > mySlides.length) {
    //     slideIndex = 1;
    //   }
    //   for (i = 0; i < myMarker.length; i+=1) {
    //     myMarker[i].className = myMarker[i].className.replace(" myActive", "");
    //   }
    //   mySlides[slideIndex-1].style.display = "block";  
    //   myMarker[slideIndex-1].className += " myActive";
    //   setTimeout(showSlides, 10000); // Change image every 10 seconds
    // }

    // let slider = document.getElementById('my-slider');
    // let line1 = document.getElementById('line1-cont');
    // let line2 = document.getElementById('line2-cont');
    // let line3 = document.getElementById('line3-cont');
    // let line4 = document.getElementById('line4-cont');
    // let active = document.getElementById('active-cont');

    // line1.onclick = () => {
    //   slider.style.transform = 'translateX(0)';
    //   active.style.top = '0px';
    // }
    // line2.onclick = () => {
    //   slider.style.transform = 'translateX(-25%)';
    //   active.style.top = '50px';
    // }
    // line3.onclick = () => {
    //   slider.style.transform = 'translateX(-50%)';
    //   active.style.top = '100px';
    // }
    // line4.onclick = () => {
    //   slider.style.transform = 'translateX(-75%)';
    //   active.style.top = '150px';
    // }
  // }
// HERO SLIDER END ================================================>


// SCROLL ANIMATION ================================================>
$(document).ready(() => {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom < docViewBottom) && (elemTop > docViewTop));
    };
    
    $(window).scroll(() => {
      // If checklist_item is scrolled into view, add animate__slideInLeft.
      $('.scroll-animations1 .animate__animated').each(function() {
        if(isScrolledIntoView(this) === true) {
          $(this).addClass('animate__slideInLeft');
        }else{
          $(this).removeClass('animate__slideInLeft');
        };
      });
    });

    $(window).scroll(() => {
      // If c-services is scrolled into view, add animate__zoomInDown.
      $('.scroll-animations2 .animate__animated').each(function() {
        if(isScrolledIntoView(this) === true) {
          $(this).addClass('animate__zoomInDown');
        }else{
          $(this).removeClass('animate__zoomInDown');
        };
      });
    });
    
    $(window).scroll(() => {
      // If impact-in-number element is scrolled into view, add animate__backInLeft.
      $('.scroll-animations3 .animate__animated').each(function() {
        if(isScrolledIntoView(this) === true) {
          $(this).addClass('animate__backInLeft');
        }else{
          $(this).removeClass('animate__backInLeft');
        };
      });
    });
});
// SCROLL ANIMATION END =============================================>


// ANIMATE ON SCROLL =============================================>
AOS.init({
  offset: 160,
  duration: 800
});
// ANIMATE ON SCROLL END =============================================>


// setInterval(function(){
//   $('ul .hero-checklist').addClass('.animate__rubberBand')
// }, 6000);


// TEXT ANIMATION

// const text = document.getElementsByTagName(".mySlides h3");
// const strText = text.textContent;
// const splitText = strText.split('');
// text.textContent = "";
// let i = 0;
// while(i < splitText.length) {
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
//   i+=1;
// }

// let char = 0;
// let timer = setInterval(onSlide, 50);

// function onSlide() {
//   const span = text.querySelectorAll("span")[char];
//   span.classList.add("hero-text-fade");
//   char+=1;
//   if(char === splitText.length) {
//     complete();
//     return;
//   }
// }
// function complete() {
//   clearInterval(timer);
// }


// var myString = "When you invest in real estate, you are buying the time you would";
// var myArray = myString.split("");
// var loopTimer;
// function frameLooper() {
// 	if(myArray.length > 0) {
// 		document.querySelector(".myTypingText").innerHTML += myArray.shift();
// 	} else {
// 		clearTimeout(loopTimer); 
//     return false;
// 	}
// 	loopTimer = setTimeout('frameLooper()',100);
// }
// frameLooper();


// var typed = new Typed(".myTypingText2", {
//   strings: [
//     "We work directly with global investors to unlock investment opportunities in Nigeria in order to help you grow your operations.",
//     "We help you prepare a better future for your kids."
//     "We work directly with global investors", 
//     "We unlock investment opportunities in Nigeria", 
//     "We are here to help you grow your operations."  
//   ],
//   startDelay: 1000,
//   // smartBackspace: true,
//   typeSpeed: 80,
//   // backSpeed: 50,
//   fadeOut: true,
//   fadeOutClass: 'typed-fade-out',
//   fadeOutDelay: 2000,
//   showCursor: false,
//   loop: true
// });

