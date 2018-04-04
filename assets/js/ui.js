// manage ui main functionality
// including Bulma framework elements

(function () {

  // manage main menu 'burger menu' on moble layout
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#'+burger.dataset.target);
  burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });

  // manage dropdowns
  var dropdown = jQuery('.cc-dropdownmenu');
  dropdown.on('click', function () {
    event.stopPropagation();
    jQuery(this).toggleClass('is-active');
  });
  jQuery('body').on('click', function () {
    dropdown.removeClass('is-active');
  });

  // aside menu dropdown (available on mobiles)
  jQuery('.cc-side-menu-dropdown').on('click', function() {
    jQuery(this).toggleClass('is-active');
    jQuery(this).next('.cc-aside-menu').toggleClass('is-hidden-mobile');
  });

})();


(function(){

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = jQuery('.cc-page-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
    console.log('scroll', navbarHeight);
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.cc-page-header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.cc-page-header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

})();