import './style.css'
import $ from 'jquery';

$(document).ready(function () {
  var scroll_pos = 0;
  var fadeRatio = 0.4;
  window.addEventListener("scroll", function () {
    var value = 233 - (window.scrollY * fadeRatio);
    value <= 10 ? value = 10 : value = value;
    $('.bottom-section').css('background-color', `rgb(${value}, ${value}, ${value})`);
  });
});