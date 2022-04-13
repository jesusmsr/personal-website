import './style.css'
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';

$(document).ready(function () {

  AOS.init();

  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  if (window.screen.width >= 390) {
    const item = document.querySelector('.main-container').style.position = 'fixed';
  } else {
    window.addEventListener("scroll", function (e) {
      parallax('.scroll', window.scrollY, 1);
    });
  }


});

