// manage ui main functionality
// including Bulma framework elements

(function () {

  // manage main menu 'burger menu' on moble layout
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#' + burger.dataset.target);
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
  jQuery('.cc-side-menu-dropdown').on('click', function () {
    jQuery(this).toggleClass('is-active');
    jQuery(this).next('.cc-aside-menu').toggleClass('is-hidden-mobile');
  });

  // ellipsis
  jQuery('.cc-item-content .content').succinct({
    size: '160',
    omission: ' &rarr;'
  });

  // 'column-list' view trigger in products list
  jQuery('.cc-show-list').on('click', function () {
    jQuery('.cc-product-list').addClass('cc-view-list');
  });
  jQuery('.cc-show-column').on('click', function () {
    jQuery('.cc-product-list').removeClass('cc-view-list');
  });
  
})();


/*
** floating sticky header
*/
(function () {

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var headerSelector = jQuery('.cc-page-header').not('.cc-startpage');
  var navbarHeight = headerSelector.outerHeight();

  jQuery(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = jQuery(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      headerSelector.removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + jQuery(window).height() < jQuery(document).height()) {
        headerSelector.removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }

})();