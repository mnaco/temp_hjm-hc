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

})();