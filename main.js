import './style.css'
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

$(document).ready(function () {

  var scroll_pos = 0;
  var fadeRatio = 0.4;

  AOS.init();

  window.addEventListener("scroll", function (e) {
    //Fade on scroll
    var value = 233 - (window.scrollY * fadeRatio);
    value <= 10 ? value = 10 : value = value;
    $('.bottom-section').css('background-color', `rgb(${value}, ${value}, ${value})`);

    //Parallax 
    const parallaxTarget = document.querySelectorAll('.scroll');
    var scrolled = window.pageYOffset;

    var index = 0, length = parallaxTarget.length;
    for (index; index < length; index++) {
      var pos = window.pageYOffset * parallaxTarget[index].dataset.rate;
      parallaxTarget[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px';
    }

  });

});