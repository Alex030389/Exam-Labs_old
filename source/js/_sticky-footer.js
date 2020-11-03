const { timers } = require("jquery");

// ///////////////////////////////////////////////////// stick footer
(function () {

  var stickFooter = function () {
    setTimeout(function() {
    var FOOTER = document.querySelector('footer');
    var MAIN = document.querySelector('.section.margin-bottom');
    var footerHeight = FOOTER.offsetHeight;
    var margin = 0;
    if($(window).width() <= 768) {
      margin = 38;
    } else {
      margin = 60;
    }
    MAIN.style.marginBottom = footerHeight + margin + 'px';
    }, 300);
    
  };

  stickFooter();
  window.addEventListener('resize', stickFooter);

})();