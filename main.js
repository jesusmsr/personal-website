import './style.css'
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';

$(document).ready(function () {

  AOS.init();

  function parallax(element, distance, speed) {
    const item = document.querySelector(element);


    item.style.transform = `translateY(${distance * speed}px)`;
  }

  window.addEventListener("scroll", function (e) {
    parallax('.scroll', window.scrollY, 1);
  });

});

