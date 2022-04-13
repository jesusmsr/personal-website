import './style.css'
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import KUTE from 'kute.js'

$(document).ready(function () {

  AOS.init();

  function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
  }

  if (window.screen.width >= 320) {
    document.querySelector('.main-container').style.position = 'fixed';
    document.querySelector('.scroll').style.position = 'fixed';
  }

  const tween = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { easing: "easingCubicInOut", duration: 1500 }
  )

  const tween2 = KUTE.fromTo(
    '#blob1',
    { path: '#blob2' },
    { path: '#blob3' },
    { easing: "easingCubicInOut", duration: 2000 }
  )

  const tween3 = KUTE.fromTo(
    '#blob1',
    { path: '#blob3' },
    { path: '#blob2' },
    { easing: "easingCubicInOut", duration: 3000 }
  )

  const tween4 = KUTE.fromTo(
    '#blob1',
    { path: '#blob2' },
    { path: '#blob1' },
    { easing: "easingCubicInOut", duration: 2000 }
  )

  tween.chain(tween2);
  tween2.chain(tween3);
  tween3.chain(tween4);
  tween4.chain(tween);
  tween.start();

});

