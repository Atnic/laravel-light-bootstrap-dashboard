window._ = require('lodash');
window.Chartist = require('chartist');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = require('jquery');

  // Popper JS
  require('popper.js');

  // Bootstrap Sass
  require('bootstrap');

  // Bootstrap Notify
  require('bootstrap-notify');

  // Bootstrap Select
  require('bootstrap-select');

  // Bootstrap Select
  require('bootstrap-switch');

  // FlatUI Radiocheck
  require('flatui-radiocheck');
} catch (e) {
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/*!

 =========================================================
 * Light Bootstrap Dashboard - v2.0.1
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;
var mobile_menu_visible = 0,
  mobile_menu_initialized = false,
  toggle_initialized = false,
  bootstrap_nav_initialized = false,
  $sidebar,
  isWindows;

$(document).ready(function() {
  window_width = $(window).width();

  // check if there is an image set for the sidebar's background
  lbd.checkSidebarImage();

  // Init navigation toggle for small screens
  if (window_width <= 991) {
    lbd.initRightMenu();
  }

  //  Activate the tooltips
  $('[rel="tooltip"]').tooltip();

  //      Activate regular switches
  if ($("[data-toggle='switch']").length != 0) {
    $("[data-toggle='switch']").bootstrapSwitch();
  }

  $('.form-control').on("focus", function() {
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function() {
    $(this).parent(".input-group").removeClass("input-group-focus");
  });

  // Fixes sub-nav not working as expected on IOS
  $('body').on('touchstart.dropdown', '.dropdown-menu', function(e) {
    e.stopPropagation();
  });
});

// activate collapse right menu when the windows is resized
$(window).resize(function() {
  if ($(window).width() <= 991) {
    lbd.initRightMenu();
  }
});

lbd = {
  misc: {
    navbar_menu_visible: 0
  },
  checkSidebarImage: function() {
    $sidebar = $('.sidebar');
    image_src = $sidebar.data('image');

    if (image_src !== undefined) {
      sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
      $sidebar.append(sidebar_container);
    } else if (mobile_menu_initialized == true) {
      // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
      $sidebar_wrapper.find('.navbar-form').remove();
      $sidebar_wrapper.find('.nav-mobile-menu').remove();

      mobile_menu_initialized = false;
    }
  },

  initRightMenu: function() {
    $sidebar_wrapper = $('.sidebar-wrapper');

    if (!mobile_menu_initialized) {

      $navbar = $('nav').find('.navbar-collapse').first().clone(true);

      nav_content = '';
      mobile_menu_content = '';

      //add the content from the regular header to the mobile menu
      $navbar.children('ul').each(function() {

        content_buff = $(this).html();
        nav_content = nav_content + content_buff;
      });

      nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

      $navbar_form = $('nav').find('.navbar-form').clone(true);

      $sidebar_nav = $sidebar_wrapper.find(' > .nav');

      // insert the navbar form before the sidebar list
      $nav_content = $(nav_content);
      $nav_content.insertBefore($sidebar_nav);
      $navbar_form.insertBefore($nav_content);

      $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
        event.stopPropagation();

      });

      mobile_menu_initialized = true;
    } else {
      console.log('window with:' + $(window).width());
      if ($(window).width() > 991) {
        // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
        $sidebar_wrapper.find('.navbar-form').remove();
        $sidebar_wrapper.find('.nav-mobile-menu').remove();

        mobile_menu_initialized = false;
      }
    }

    if (!toggle_initialized) {
      $toggle = $('.navbar-toggler');

      $toggle.click(function() {

        if (mobile_menu_visible == 1) {
          $('html').removeClass('nav-open');

          $('.close-layer').remove();
          setTimeout(function() {
            $toggle.removeClass('toggled');
          }, 400);

          mobile_menu_visible = 0;
        } else {
          setTimeout(function() {
            $toggle.addClass('toggled');
          }, 430);


          main_panel_height = $('.main-panel')[0].scrollHeight;
          $layer = $('<div class="close-layer"></div>');
          $layer.css('height', main_panel_height + 'px');
          $layer.appendTo(".main-panel");

          setTimeout(function() {
            $layer.addClass('visible');
          }, 100);

          $layer.click(function() {
            $('html').removeClass('nav-open');
            mobile_menu_visible = 0;

            $layer.removeClass('visible');

            setTimeout(function() {
              $layer.remove();
              $toggle.removeClass('toggled');

            }, 400);
          });

          $('html').addClass('nav-open');
          mobile_menu_visible = 1;

        }
      });

      toggle_initialized = true;
    }
  }
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};
