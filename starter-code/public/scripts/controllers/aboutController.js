'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-content').hide();
      $(`#${$(this).data('content')}`).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  module.aboutController = aboutController;
})(app);
