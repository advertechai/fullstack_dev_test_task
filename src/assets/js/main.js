(function ($) {
  ("use strict");
  // Page loading
  $(window).on("load", function () {
    $("#preloader-active").fadeOut("slow");
  });
  /*-----------------
        Menu Stick
    -----------------*/
  var header = $(".sticky-bar");
  var win = $(window);
  win.on("scroll", function () {
    var scroll = win.scrollTop();
    if (scroll < 200) {
      header.removeClass("stick");
      $(".header-style-2 .categories-dropdown-active-large").removeClass(
        "open"
      );
      $(".header-style-2 .categories-button-active").removeClass("open");
    } else {
      header.addClass("stick");
    }
  });
  /*------ ScrollUp -------- */
  $.scrollUp({
    scrollText: '<i class="fi-rr-arrow-small-up"></i>',
    easingType: "linear",
    scrollSpeed: 900,
    animation: "fade",
  });
  /*------ Wow Active ----*/
  new WOW().init();
  //sidebar sticky
  if ($(".sticky-sidebar").length) {
    $(".sticky-sidebar").theiaStickySidebar();
  }
  /*----------------------------
        Category toggle function
    ------------------------------*/
  if ($(".categories-button-active").length) {
    var searchToggle = $(".categories-button-active");
    searchToggle.on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this)
          .siblings(".categories-dropdown-active-large")
          .removeClass("open");
      } else {
        $(this).addClass("open");
        $(this).siblings(".categories-dropdown-active-large").addClass("open");
      }
    });
  }
  /*---------------------
        Select active
    --------------------- */
  if ($(".select-active").length) {
    $(".select-active").select2();
  }
  /*---- CounterUp ----*/
  if ($(".count").length) {
    $(".count").counterUp({
      delay: 10,
      time: 600,
    });
  }
  // Isotope active
  if ($(".grid").length) {
    $(".grid").imagesLoaded(function () {
      // init Isotope
      var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        layoutMode: "masonry",
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: ".grid-item",
        },
      });
    });
  }
  /*====== SidebarSearch ======*/
  function sidebarSearch() {
    var searchTrigger = $(".search-active"),
      endTriggersearch = $(".search-close"),
      container = $(".main-search-active");
    searchTrigger.on("click", function (e) {
      e.preventDefault();
      container.addClass("search-visible");
    });
    endTriggersearch.on("click", function () {
      container.removeClass("search-visible");
    });
  }
  sidebarSearch();
  /*====== Sidebar menu Active ======*/
  function mobileHeaderActive() {
    var navbarTrigger = $(".burger-icon"),
      endTrigger = $(".mobile-menu-close"),
      container = $(".mobile-header-active"),
      wrapper4 = $("body");
    wrapper4.prepend('<div class="body-overlay-1"></div>');
    navbarTrigger.on("click", function (e) {
      navbarTrigger.toggleClass("burger-close");
      e.preventDefault();
      container.toggleClass("sidebar-visible");
      wrapper4.toggleClass("mobile-menu-active");
    });
    endTrigger.on("click", function () {
      container.removeClass("sidebar-visible");
      wrapper4.removeClass("mobile-menu-active");
    });
    $(".body-overlay-1").on("click", function () {
      container.removeClass("sidebar-visible");
      wrapper4.removeClass("mobile-menu-active");
      navbarTrigger.removeClass("burger-close");
    });
  }
  mobileHeaderActive();
  /*---------------------
        Mobile menu active
    ------------------------ */
  var $offCanvasNav = $(".mobile-menu"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend(
      '<span class="menu-expand"><i class="fi-rr-angle-small-down"></i></span>'
    );
  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();
  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });
  /*--- language currency active ----*/
  $(".mobile-language-active").on("click", function (e) {
    e.preventDefault();
    $(".lang-dropdown-active").slideToggle(900);
  });
  /*--- categories-button-active-2 ----*/
  $(".categories-button-active-2").on("click", function (e) {
    e.preventDefault();
    $(".categori-dropdown-active-small").slideToggle(900);
  });
  /*--- Mobile demo active ----*/
  var demo = $(".tm-demo-options-wrapper");
  $(".view-demo-btn-active").on("click", function (e) {
    e.preventDefault();
    demo.toggleClass("demo-open");
  });
  /*-----More Menu Open----*/
  $(".more_slide_open").slideUp();
  $(".more_categories").on("click", function () {
    $(this).toggleClass("show");
    $(".more_slide_open").slideToggle();
  });
  /* --- SwiperJS --- */
  $(".swiper-group-6").each(function () {
    var swiper_6_items = new Swiper(this, {
      spaceBetween: 30,
      slidesPerView: 6,
      slidesPerGroup: 2,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 10000,
      },
      breakpoints: {
        1199: {
          slidesPerView: 6,
        },
        800: {
          slidesPerView: 4,
        },
        400: {
          slidesPerView: 2,
        },
        350: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 15,
        },
      },
    });
  });
  $(".swiper-group-4").each(function () {
    var swiper_4_items = new Swiper(this, {
      spaceBetween: 20,
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-4",
        prevEl: ".swiper-button-prev-4",
      },

      autoplay: {
        delay: 10000,
      },
      breakpoints: {
        1299: {
          slidesPerView: 4,
        },
        1150: {
          slidesPerView: 4,
        },
        750: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 1,
        },
        300: {
          slidesPerView: 1,
        },
        200: {
          slidesPerView: 1,
        },
      },
    });
  });
  $(".swiper-group-3").each(function () {
    var swiper_3_items = new Swiper(this, {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-3",
        prevEl: ".swiper-button-prev-3",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          var customPaginationHtml = "";
          for (var i = 0; i < total; i++) {
            //Determine which pager should be activated at this time
            if (i == current - 1) {
              customPaginationHtml +=
                '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
              customPaginationHtml +=
                '<span class="swiper-pagination-customs"></span>';
            }
          }
          return customPaginationHtml;
        },
      },
      autoplay: {
        delay: 10000,
      },
      breakpoints: {
        1199: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1,
        },
        310: {
          slidesPerView: 1,
        },
        200: {
          slidesPerView: 1,
        },
      },
    });
  });
  $(".swiper-group-2").each(function () {
    var swiper_2_items = new Swiper(this, {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
          var customPaginationHtml = "";
          for (var i = 0; i < total; i++) {
            //Determine which pager should be activated at this time
            if (i == current - 1) {
              customPaginationHtml +=
                '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
              customPaginationHtml +=
                '<span class="swiper-pagination-customs"></span>';
            }
          }
          return customPaginationHtml;
        },
      },
      autoplay: {
        delay: 10000,
      },
      breakpoints: {
        1199: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 1,
        },
        350: {
          slidesPerView: 1,
        },
      },
    });
  });
  $(".swiper-group-1").each(function () {
    var swiper_2_items = new Swiper(this, {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-5",
        prevEl: ".swiper-button-prev-5",
      },
      autoplay: {
        delay: 10000,
      },
    });
  });
  //Dropdown selected item
  $(".dropdown-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this)
      .parents(".dropdown")
      .find(".btn span")
      .html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
  });
  $(".list-tags-job .remove-tags-job").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".job-tag").remove();
  });
  // Video popup
  if ($(".popup-youtube").length) {
    $(".popup-youtube").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }
  $(".block-price-item").on("click", function () {
    $(".block-price-item").removeClass("active");
    $(this).addClass("active");
    var package = $(this).attr("data-package");
    if (typeof package !== "undefined") {
      var li = $(".list-package-feature li");
      li.removeClass("active");
      for (var i = 0; i < package; i++) {
        li.eq(i).addClass("active");
      }
    }
  });
  // SLick
  $(".product-image-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: ".slider-nav-thumbnails",
  });

  if ($(window).width() > 768) {
    $(".slider-nav-thumbnails").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".product-image-slider",
      dots: false,
      focusOnSelect: true,
      vertical: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fi-rs-arrow-small-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fi-rs-arrow-small-right"></i></button>',
    });
  } else {
    $(".slider-nav-thumbnails").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".product-image-slider",
      dots: false,
      focusOnSelect: true,
      vertical: false,
      adaptiveHeight: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fi-rs-arrow-small-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fi-rs-arrow-small-right"></i></button>',
    });
  }

  /*------ Timer Countdown ----*/

  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    $this.countdown(finalDate, function (event) {
      $(this).html(
        event.strftime(
          "" +
            '<span class="countdown-section"><span class="countdown-amount hover-up">%D</span><span class="countdown-period"> days </span></span>' +
            '<span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> hours </span></span>' +
            '<span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> mins </span></span>' +
            '<span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period"> sec </span></span>'
        )
      );
    });
  });

  // Remove active class from all thumbnail slides
  $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");

  // Set active class to first thumbnail slides
  $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

  // On before slide change match active thumbnail to current slide
  $(".product-image-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var mySlideNumber = nextSlide;
      $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
      $(".slider-nav-thumbnails .slick-slide")
        .eq(mySlideNumber)
        .addClass("slick-active");
    }
  );

  $(".product-image-slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var img = $(slick.$slides[nextSlide]).find("img");
      $(".zoomWindowContainer,.zoomContainer").remove();
      $(img).elevateZoom({
        zoomType: "inner",
        cursor: "crosshair",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750,
      });
    }
  );
  //Elevate Zoom
  if ($(".product-image-slider").length) {
    $(".product-image-slider .slick-active img").elevateZoom({
      zoomType: "inner",
      cursor: "crosshair",
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 750,
    });
  }

  //Qty Up-Down
  $(".detail-qty").each(function () {
    var qtyval = parseInt($(this).find(".qty-val").val(), 10);

    $(".qty-up").on("click", function (event) {
      event.preventDefault();
      qtyval = qtyval + 1;
      $(this).prev().val(qtyval);
    });

    $(".qty-down").on("click", function (event) {
      event.preventDefault();
      qtyval = qtyval - 1;
      if (qtyval > 1) {
        $(this).next().val(qtyval);
      } else {
        qtyval = 1;
        $(this).next().val(qtyval);
      }
    });
  });
  
  // Init function billed
  checkBilled();
  checkBilled2();
})(jQuery);
// Check billed
function checkBilled() {
  var checkBox = $("#cb_billed_type");
  var forMonth = $(".for-month");
  var forYear = $(".for-year");
  for (var i = 0; i < forMonth.length; i++) {
    if (checkBox.is(":checked")) {
      forYear.eq(i).addClass("display-year");
      forMonth.eq(i).removeClass("display-month");
    } else {
      forYear.eq(i).removeClass("display-year");
      forMonth.eq(i).addClass("display-month");
    }
  }
}
// Check billed Pricing 2
function checkBilled2() {
    var checkBox = $("#cb_billed_type");
    var forMonth = $(".for-month");
    var forYear = $(".for-year");
    var billMonth = $('.text-billed-month');
    var billYear = $('.text-billed-year');
    for (var i = 0; i < forMonth.length; i++) {
        if (checkBox.is(":checked")) {
            forYear.eq(i).addClass("display-year");
            billYear.addClass('active');
            billMonth.removeClass('active');
            forMonth.eq(i).removeClass("display-month");
        } else {
            forYear.eq(i).removeClass("display-year");
            billMonth.addClass('active');
            billYear.removeClass('active');
            forMonth.eq(i).addClass("display-month");
        }
    }
}
//Perfect Scrollbar
if ($(".mobile-header-wrapper-inner").length) {
  const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");
}
