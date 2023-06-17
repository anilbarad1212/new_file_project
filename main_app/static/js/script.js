/* ----------------------------
  Pageloader JS
---------------------------- */
$(function () {
  setTimeout(function () { $(".web-loader").addClass("deactivate") })
})

/* ----------------------------
  Header Scrooling JS
---------------------------- */
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".main-header").addClass("scroll");
  } else {
    $(".main-header").removeClass("scroll");
  }
});

/* ----------------------------
  Responsive Menu JS
---------------------------- */
$(document).ready(function () {
  $(".close-icon, .common-overlay").on("click", function () {
    $(".menu-icon-bx").removeClass("active");
    $("#sidebar").removeClass("active");
    $(".common-overlay").removeClass("active");
  });

  $(".menu-icon-bx").on("click", function () {
    $(".menu-icon-bx").addClass("active");
    $("#sidebar").addClass("active");
    $(".common-overlay").addClass("active");
  });
});

// $(function(){
//     var lastScrollTop = 0, delta = 0;
//     $(window).scroll(function(event){
//        var st = $(this).scrollTop();

//        if(Math.abs(lastScrollTop - st) <= delta)
//           return;
// if ((st > lastScrollTop) && (lastScrollTop>0)) {
//        // downscroll code
//       $(".main-header").css("top","-80px");

//    } else {
//       // upscroll code
//       $(".main-header").css("top","0px");
//    }
//        lastScrollTop = st;
//     });
// });


$(function(){
	var navbar = $('.book-audio-left');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 200){
			navbar.removeClass('bal-scroll');
		} else {
			navbar.addClass('bal-scroll');
		}
	});
});


/* -------------------------------
  Youtube-slider
---------------------------------- */
$(document).ready(function () {
  $('.youtube-slider').owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    video: true,
    items: 1,
    autoplay: true,
    lazyLoad: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M328 112L184 256l144 144"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M184 112l144 144-144 144"/></svg>',
    ],
    responsiveClass: true,
    onTranslate: function (event) {
      var currentSlide, player, command;

      currentSlide = $('.owl-item.active');

      player = currentSlide.find(".video-slider iframe").get(0);

      command = {
        "event": "command",
        "func": "pauseVideo"
      };

      if (player != undefined) {
        player.contentWindow.postMessage(JSON.stringify(command), "*");

      }

    },
    responsive: {
      0: {
        dots: true,
        nav: true,
        margin: 0,
      },
      576: {
        nav: true,
        margin: 0,
      },
      1024: {
        nav: true,
      },
    }
  });


  // var videoSlider = $('.youtube-slider');
  // videoSlider.on('translate.owl.carousel', function (e) {
  //   $('.owl-item video').each(function () {
  //     // pause playing video - after sliding
  //     $(this).get(0).pause();
  //   });
  // });

  // videoSlider.on('translated.owl.carousel', function (e) {
  //   // check: does the slide have a video?
  //   if ($('.owl-item.active').find('video').length !== 0) {
  //     // play video in active slide
  //     $('.owl-item.active video').get(0).play();
  //   }
  // });

  
  // const video = document.getElementById("home-video");
  // const circlePlayButton = document.getElementById("play-video");

  // function togglePlay() {
  //     if (video.paused || video.ended) {
  //         video.play();
  //     } else {
  //         video.pause();
  //     }
  // }

  // circlePlayButton.addEventListener("click", togglePlay);
  // video.addEventListener("playing", function () {
  //     circlePlayButton.style.opacity = 0; 
  //     // video.muted = false;
  // });
  // video.addEventListener("pause", function () {
  //     circlePlayButton.style.opacity = 1;
  // });

  // video.addEventListener('ended', function() {
  //     video.load();
  //     video.autoplay=false;
  // });

});


/* ----------------------------
  Whatapp Icon Hover Js
---------------------------- */
$(function () {
  $('.whatapp-meg').fadeOut();
  setTimeout(function () {
    $('.whatapp-meg').delay(2000).fadeIn();
  }, 1000); // <-- time in milliseconds
  setTimeout(function () {
    $('.whatapp-meg').delay(5000).fadeOut();
  }, 1000); // <-- time in milliseconds
});

/* -------------------------------
     featured cousers slider
---------------------------------- */
$(document).ready(function () {
  $("#featuredcousersslider").owlCarousel({
    loop: false,
    margin: 20,
    smartSpeed: 500,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    autoplay: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M328 112L184 256l144 144"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M184 112l144 144-144 144"/></svg>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 2.5,
        margin: 20,
        loop: true,
      },

      576: {
        items: 3,
        margin: 20,
      },

      768: {
        items: 4,
      },

      992: {
        items: 5,
      },

      1200: {
        items: 6,
      },
    },
  });
});

/* -------------------------------
     featured cousers slider
---------------------------------- */

$(document).ready(function () {
  $("#banner-slider").owlCarousel({ // #banner-slider-two
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    dots: false,
    nav: true,
    items: 1,
    autoplay: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M328 112L184 256l144 144"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M184 112l144 144-144 144"/></svg>',
    ],
    responsiveClass: true,
  });
});

/* ----------------------------
  Reviewslider Js
---------------------------- */
$(document).ready(function () {
  $("#reviewslider").owlCarousel({
    loop: false,
    margin: 10,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    dots: false,
    nav: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M328 112L184 256l144 144"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M184 112l144 144-144 144"/></svg>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        // nav: false,
        // dots: true,
      },

      430: {
        items: 2,
        // nav: false,
        // dots: true,
      },

      768: {
        items: 3,
        // nav: false,
        // dots: true,
      },

      992: {
        // nav: false,
        // dots: true,
      },

      1024: {
        items: 4,
        // dots: false,
        // nav: true,
      }
    },
  });
});

/* ----------------------------
Certi slider Js
---------------------------- */
$(document).ready(function () {
  $("#certi-slider").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M328 112L184 256l144 144"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="34" d="M184 112l144 144-144 144"/></svg>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 2.2,
        nav: false,
        dots: true,
      },

      360: {
        items: 2.5,
        nav: false,
        dots: true,
      },

      390: {
        items: 3,
        nav: false,
        dots: true,
      },

      576: {
        items: 4,
        nav: false,
        dots: true,
      },

      768: {
        items: 5,
        nav: false,
        dots: true,
      }
    },
  });
});


/* -------------------------------
  Animation css
-------------------------------- */
// $(document).ready(function () {
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
// });

/* ----------------------------------
   password show js
----------------------------------- */
$(".view-pass").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$(document).ready(function () {
  // Tabs Action
  const tabLink = document.querySelectorAll(".trigger-btn");
  const tabContent = document.querySelectorAll(".screen-trigger");

  tabLink.forEach((el) => {
    el.addEventListener("click", activeTab);
  });

  function activeTab(el) {
    const btnTarget = el.currentTarget;
    const content = btnTarget.dataset.content;

    tabContent.forEach((el) => {
      el.classList.remove("active");
    });

    tabLink.forEach((el) => {
      el.classList.remove("active");
    });

    document.querySelector("#" + content).classList.add("active");
    btnTarget.classList.add("active");
  }
});


/* ----------------------------------------
Fullload Details js
---------------------------------------- */
$(document).ready(function () {
  $('.fld-btn').click(function () {
    $('.tbd-readmore-bx').slideDown();
    $('.this-book-detail-bx').addClass('noafter');
    $(this).addClass('d-none');
  });
});


/* ----------------------------------
  Water Ripples Js
----------------------------------- */
$(document).ready(function () {
  try {
    $('.page-inner-nav').ripples({
      resolution: 512,
      dropRadius: 20, //px
      perturbance: 0.04,
    });
  }
  catch (e) {
    $('.error').show().text(e);
  }
});

/* ----------------------------------
  Flash Message Ppopup hide show js
----------------------------------- */
$(document).ready(function () {
	$(".flash-message-popup").hide();
	$(".flash-message").hide();
	$(document).on('click', ".fmp-trigger", function () {
		$(".flash-message-popup").show();
		$(".flash-message").show();
		$(".flash-message-popup").addClass("fmp-active");
		$(".flash-message").addClass("fmp-message");
		setTimeout(function () {
			$(".flash-message .msg-close").trigger('click');
		}, 5000);
	});

	$(document).on('click', ".flash-message-popup, .flash-message .msg-close", function () {
		setTimeout(function () {
			$(".flash-message-popup").hide();
			$(".flash-message").hide();
		}, 500);
		setTimeout(function () {
			$(".flash-message-popup").removeClass("fmp-active");
		}, 250);
		$(".flash-message").removeClass("fmp-message");
	});
});



/* ----------------------------------
  moveBackground img js
----------------------------------- */

//   $(document).ready(function() {
// 	var lFollowX = 0,
// 		lFollowY = 0,
// 		x = 0,
// 		y = 0,
// 		friction = 1 / 30;

// 	function moveBackground() {
// 	  x += (lFollowX - x) * friction;
// 	  y += (lFollowY - y) * friction;

// 	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

// 	  $('.bg-tag').css({
// 		'-webit-transform': translate,
// 		'-moz-transform': translate,
// 		'transform': translate
// 	  });

// 	  window.requestAnimationFrame(moveBackground);
// 	}

// 	$(window).on('mousemove click', function(e) {

// 	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
// 	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
// 	  lFollowX = (15 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
// 	  lFollowY = (15 * lMouseY) / 100;

// 	});

// 	moveBackground();
// 	});

/* ----------------------------------
  login js
----------------------------------- */
// $(document).ready(function () {
//   // Tabs Action
//   const tabLink = document.querySelectorAll(".profile-link");
//   const tabContent = document.querySelectorAll(".student-dash-tab");

//   tabLink.forEach((el) => {
//     el.addEventListener("click", activeTab);
//   });

//   function activeTab(el) {
//     const btnTarget = el.currentTarget;
//     const content = btnTarget.dataset.content;

//     tabContent.forEach((el) => {
//       el.classList.remove("active");
//     });

//     tabLink.forEach((el) => {
//       el.classList.remove("active");
//     });

//     document.querySelector("#" + content).classList.add("active");
//     if (content == "active-video") {
//       getPurchasedVideos();
//     }
//     if (content == 'Result-bx') {
//       addActivity('CR');
//     }
//     btnTarget.classList.add("active");
//   }
// });

/* ----------------------------------
  video stop js
----------------------------------- */
// $(document).ready(function () {
//   $("#videopopup").on("hidden.bs.modal", function (e) {
//     $("#videopopup iframe").attr("src", $("#videopopup iframe").attr("src"));
//   });
// });


// $(document).ready(function () {
//   $('.dismiss').on('click', function () {
//     $('.search-modal').removeClass('active');
//     $('html').removeClass('active-search');
//   });

//   $('.search-link').on('click', function () {
//     $('.search-modal').addClass('active');
//     $('html').addClass('active-search');
//     // $('.menu-icon').toggleClass('active');
//   });
// });





// function pla_video(){
  // const video = document.getElementById("home-video");
  // const circlePlayButton = document.getElementById("play-video");

  // function togglePlay() {
  //     if (video.paused || video.ended) {
  //         video.play();
  //     } else {
  //         video.pause();
  //     }
  // }

  // circlePlayButton.addEventListener("click", togglePlay);
  // video.addEventListener("playing", function () {
  //     circlePlayButton.style.opacity = 0; 
  //     // video.muted = false;
  // });
  // video.addEventListener("pause", function () {
  //     circlePlayButton.style.opacity = 1;
  // });

  // video.addEventListener('ended', function() {
  //     video.load();
  //     video.autoplay=false;
  // });

// }