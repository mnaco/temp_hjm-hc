/*
 * Product Finder functionality
 */
(function () {

  // Hide 'intro' overlay
  var overlay = jQuery('.cc-producfinder-intro-layer')
  var btnOverlayOut = jQuery('#btnProductfinderOverlayOut')
  var dontShowCheckbox = jQuery('#dontShowOverlay')
  btnOverlayOut.on('click', function (event) {
    event.preventDefault()
    overlay.hide()
    // don't show layer checkbox
    if (dontShowCheckbox.is(':checked')) {
      console.log('will not show this anymore ...')
      // cookies functionality goes here ....
    }
  })

})()
