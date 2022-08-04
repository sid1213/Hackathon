



AOS.init();
$(document).ready(function() {
    console.log( "ready!" );
    //counter
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});


$(".hide").click(function(){
$(".notification").hide();
});

$(".bar").click(function(){
$(".navigation_list").toggle();
});

//toggle the password
$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } 
    else {
      input.attr("type", "password");
    }
  });
var lottie_post= lottie.loadAnimation({
    container: document.getElementById("lottie_container"), // container for the lotties
    renderer: "svg",
    path: `./assets/json/lf30_editor_r4n1ukvg.json`, // path of animation (json)
    autoplay: true,
    loop: true,
  });
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    cssEase: "ease-in-out",
    prevArrow: $('.our_mentors .next'),
    nextArrow: $('.our_mentors .prev'),
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },

   {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 400,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
      ]
});
$(".slider_2").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  cssEase: "ease-in-out",

  responsive: [{
      breakpoint: 1025,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1
      }
  },

 {
      breakpoint: 768,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1
      }
  },
  {
      breakpoint: 400,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1
      }
  },
    ]
});
$('.slider_2').slick('setPosition').slick();

$(window).on('load', function() {
    console.log("zccv");
    $('.slider_2').slick('setPosition').slick();
 });
 
// toggle the title 
let title_chang=2;
setInterval(() => {
    title_chang++;
    if(title_chang%2==0){
        document.title="1 new message";
    }
    else
    document.title="Affordable & Competent Courses | iNeuron.ai";
}, 800);

