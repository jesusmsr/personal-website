import './style.css'
import $ from 'jquery';

$(document).ready(function () {
  var scroll_pos = 0;
  window.addEventListener("scroll", function(){
    
    console.log(window.scrollY);
    if (this.window.scrollY > 300){
      
    }
  })

  
  /*
  $(document).scroll(function () {
    
    scroll_pos = $(this).scrollTop();

    const step = 255 / $('.bottom-section').height();
    const multiplier = Math.round(
      $('.bottom-section').height() /
      $('.bottom-section').parent().height()
    );

    const currentStyle = $('.bottom-section').css('backgroundColor');
    const rgbValues = currentStyle.substring(
      currentStyle.lastIndexOf("(") + 1,
      currentStyle.lastIndexOf(")")
    );

    const newValue = step * scroll_pos * multiplier;

    $('.bottom-section').css('background-color',`rgb(${newValue}, ${newValue}, ${newValue})`);
    
  })
  */
});