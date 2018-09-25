window.addEventListener("DOMContentLoaded", function(event) {

//Show that DOM has loaded ....
console.log("DOM fully loaded and parsed.");




	
addEvents();
animateScroll();
swappActiveClass();
swapActiveClassOnscroll();
slideNav();
changeColorClick();
changeColorScroll();
changeContent();
callAccordion();
toggleSkills();
slideSlider1();
slideSlider2();
slideSlider3();


//closeMobileNav();



});



function addEvents()

 {
 
	//project click
	document.getElementById('portfolio').addEventListener("click",openModal1);
	document.getElementById('nailbar').addEventListener("click",openModal2);
	document.getElementById('skrynehill').addEventListener("click",openModal3);
	document.getElementById('trainforless').addEventListener("click",openModal4);
    //close modal click
	var close=document.getElementsByClassName('close');
	
	close[0].addEventListener("click",closeModal1);
	close[1].addEventListener("click",closeModal2);
	close[2].addEventListener("click",closeModal3);
    close[3].addEventListener("click",closeModal4);


 }
 
//script allows the named anchors or ids(html 5) on page to animate i.e. scroll down instead of jump

function animateScroll(){
	

 
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});


}


//script allows to remove active class to from one element and add it to next child element

function swappActiveClass(){
	
	
   	 $('#nav ul li a').click(function(e) {
     	   e.preventDefault();
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });


}

// script allows to remove active class to from one element and add it to next element while scrolling the page 

function swapActiveClassOnscroll(){
	
	
	$(document).on("scroll", onScroll);
		 
	$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();
	$(window).off("scroll");
		 
	$('a').each(function () {
	$(this).removeClass('active');
					
	})
	$(this).addClass('active');
					
	var target = this.hash;
	$target = $(target);

	});
	 
	
function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		console.log(scrollPosition);
		$('nav ul li a').each(function () {
		var currentLink = $(this);
		var refElement = $(currentLink.attr("href"));
		console.log(refElement);
		if (refElement.position().top <= scrollPosition && refElement.position().top + 				refElement.height() > scrollPosition) {
		$('nav ul li a').removeClass("active");
		currentLink.addClass("active");
		}
		else{
		       currentLink.removeClass("active");
		       }
		});
		}	 

}


//mobile icon click toggling navigation
function slideNav(){
 $("#mobileicon").click(function(){
 $("nav ul").slideToggle(); 
});



}


//script to append  mobileicon click to list items inside navigation
function toggleNav()
{	

	var windowSize = $(window).width(); // Could've done $(this).width()
    if(windowSize < 800){
    	
    	$("#nav ul").on("click", "li", function () 
		{
        //$("#nav").slideToggle();
        $("#mobileicon").click();
        });
    } 

}


 

// script allows navigation to change color on scroll
function changeColorScroll(){
var windowSize = $(window).width(); 
    if(windowSize > 700)	
	{
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navbar = $('.navbar-default');

    if (scrollPos > 50) {
      navbar.addClass('change-color');
        } else {
      navbar.removeClass('change-color');
    }
  });
  
  
});}
changeColorClick();
}

//script allows navigation to change color on click
function changeColorClick(){
var windowSize = $(window).width();
if (windowSize >700)
{
 $("#nav").click(function(event){
	var a_href = $(event.target).attr('href');
	console.log(a_href);
    var el = $('#nav'),
        top = $(a_href).offset().top;
    if (top > 50 && !el.is('.change-color')){
        $(el).addClass('change-color');
    }
    if (top <50 && el.is('.change-color')){
	$(el).removeClass('change-color');}
      


});
}

}



//function expand accordion on click
function callAccordion()
{
// (Optional) Active an item if it has the class "is-active"	
	$(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
	
	$(".accordion > .accordion-item").click(function() {
		// Cancel the siblings
		$(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
		// Toggle the item
		$(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
	});

}



//script allows to change content of a div on click event

function changeContent() {
$('#html').click(function() {
	restartAnimation();
	
   $('#heading').html('HTML');
  $('#text').html('I spent distinct amount of time in the past learning XHTML and HTML5. I successfully implemented best practices to my coding. I am using HTML5 tags correctly with focus on semantic meaning and I validate on regular basis. I keep in mind browser compatibility when using tags and attributes. ');
});

$('#css').click(function() {
	restartAnimation();
	
$('#heading').html('CSS');
  $('#text').html('I am comfortable coding in CSS, debugging, and searching for available work arounds when needed. I validate and prefix properties when appropriate. I am taking into account browser compatibility issues while coding. I am focusing my learning on best practices and clean code.');
});


$('#javascript').click(function() {
	restartAnimation();
	
 $('#heading').html('JavaScript');
  $('#text').html('I mastered big part of the skill during my Front End Developer Traineeship under professional supervision. I enjoy adding interactivity to my website and participate on creating exceptional user experience. I am familiar with Angular JS too.');
});

$('#other').click(function() {
	restartAnimation();
	
  $('#heading').html('Other');
  $('#text').html('I am familiar with Web Fundamentals as images optimisation, SEO, Google Analytics, Cross browser testing, Bootstrap and responsive design.  I am familiar with CMS using Drupal and WordPress. I have some basic knowledge of back end technologies.');
});

}


//script to restart animation

function restartAnimation()
{
	
	var me = document.getElementById('text');
	 
    me.style.webkitAnimation = 'none';
    setTimeout(function() {
    me.style.webkitAnimation = '';
    }, 0);
}
	
	
//script to close skill menu on mobile screens


jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 750) {
      $('.slider').removeClass('opened');
	    $('.slider').addClass('closed');
		 $('a.initial').addClass('menulink');
    } else if (ww >= 751) {
      $('.slider').removeClass('closed');
	   $('.slider').addClass('opened');
	    $('a.initial').removeClass('menulink');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});



function toggleSkills(){

var toggle1 = document.getElementById('toggle1');
var toggle2 = document.getElementById('toggle2');
var toggle3 = document.getElementById('toggle3');
var toggle4 = document.getElementById('toggle4');
var slider = document.querySelector('.slider');

toggle1.addEventListener('click', toggleSlider, false);
toggle2.addEventListener('click', toggleSlider, false);
toggle3.addEventListener('click', toggleSlider, false);
toggle4.addEventListener('click', toggleSlider, false);


var toggle = document.getElementById('closetoggle');
var slider = document.querySelector('.slider');

toggle.addEventListener('click', openSlider, false);
function toggleSlider(){
if (slider.classList.contains('closed')){
     slider.classList.remove('closed');
        slider.classList.add('opened');
		}
		
}

function openSlider()
{

     slider.classList.remove('opened');
        slider.classList.add('closed');
		
}


}



/*scripts for modals*/


// Get the modal







// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]
var span2 = document.getElementsByClassName("close")[1]
var span3 = document.getElementsByClassName("close")[2]
var span4 = document.getElementsByClassName("close")[3]


    
// When the user clicks project thumbnails, open the modal 
function openModal1() {
	var modal = document.getElementById('portfoliomodal');
    modal.style.display = "block";
}

function openModal2() {
	var modal2 = document.getElementById('nailbarmodal');
    modal2.style.display = "block";
}

function openModal3() {
	var modal3 = document.getElementById('skrynehillmodal');
    modal3.style.display = "block";
}

function openModal4() {
	var modal4 = document.getElementById('trainforlessmodal');
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal1() {
	var modal = document.getElementById('portfoliomodal');
    modal.style.display = "none";
	
}

function closeModal2() {
   var modal2 = document.getElementById('nailbarmodal');
	modal2.style.display = "none";
	
}

function closeModal3() {
   var modal3 = document.getElementById('skrynehillmodal');
	modal3.style.display = "none";
	
}

function closeModal4() {

   var modal4 = document.getElementById('trainforlessmodal');
	modal4.style.display = "none";
	
}



function slideSlider1()
{

$('.wrapper').each(function() {
  var $slider = $(this);
  var numberOfSlides = $slider.find('.panel').length;

  $slider.find('.panel:eq(0)').addClass('_active');
  $slider.find('.nav-dot:eq(0)').addClass('active');

  var $activeSlide = $slider.find('.panel._active');
  var $nextBtn = $slider.find('.next-btn');
  var $prevBtn = $slider.find('.prev-btn');

  $('.nav-dot').on('click', function() {
    var slideToGo = $(this).data('slide');
    goToSlide(slideToGo);
  });

  $slider.on('slide.changed', function() {
    console.log('slide changed !');
    $('.nav-dot').removeClass('active');
    var $activeDot = $('.nav-dot[data-slide="' + $('.panel._active').data('slide') + '"]');
    console.log();
    $activeDot.addClass('active');
  });

  $nextBtn.on('click', function(event) {
    nextSlide();
  });

  $prevBtn.on('click', function(event) {
    prevSlide();
  });

  function nextSlide() {
    $activeSlide = $slider.find('.panel._active');
    var $nextSlide = $activeSlide.next('.panel');
    $activeSlide.removeClass('_active');
    $nextSlide.addClass('_active');

    //$activeSlide = $nextSlide;

    var slideIndex = $slider.find('.panel._active').index('.panel');
    console.log(slideIndex);

    if (slideIndex >= numberOfSlides || slideIndex <= -1) {
      firstSlide();
      $slider.trigger('slide.changed');

    } else {
      $slider.trigger('slide.changed');
    }

  }

  function prevSlide() {
    $activeSlide = $slider.find('.panel._active');

    var $prevSlide = $activeSlide.prev('.panel');

    $activeSlide.removeClass('_active');
    $prevSlide.addClass('_active');

    var slideIndex = $slider.find('.panel._active').index();
    console.log(slideIndex);

    if (typeof $prevSlide === 'undefined' || $prevSlide === null || $prevSlide.length == -1 || slideIndex <= -1) {
      lastSlide();
      $slider.trigger('slide.changed');
    } else {
      $slider.trigger('slide.changed');
    }

  }

  function firstSlide() {
    $('.panel._active').removeClass('_active');
    $slider.find('.panel:eq(0)').addClass('_active');
    $activeSlide = $slider.find('.panel:eq(0)');

  }

  function lastSlide() {

    $('.panel._active').removeClass('_active');
    $slider.find('.panel').eq(numberOfSlides - 1).addClass('_active');

  }

  function goToSlide(slideToGo) {
    $('.panel._active').removeClass('_active');
    $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
    $activeSlide = $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
    $slider.trigger('slide.changed');
  }

});

}


function slideSlider2(){
$('.wrapper2').each(function() {
  var $slider2 = $(this);
  var numberOfSlides = $slider2.find('.panel2').length;

  $slider2.find('.panel2:eq(0)').addClass('_active');
  $slider2.find('.nav-dot2:eq(0)').addClass('active');

  var $activeSlide = $slider2.find('.panel2._active');
  var $nextBtn2 = $slider2.find('.next-btn2');
  var $prevBtn = $slider2.find('.prev-btn');

  $('.nav-dot2').on('click', function() {
    var slideToGo = $(this).data('slide');
    goToSlide(slideToGo);
  });

  $slider2.on('slide.changed', function() {
    console.log('slide changed !');
    $('.nav-dot2').removeClass('active');
    var $activeDot2 = $('.nav-dot2[data-slide="' + $('.panel2._active').data('slide') + '"]');
    console.log();
    $activeDot2.addClass('active');
  });

  $nextBtn2.on('click', function(event) {
    nextSlide();
  });

  $prevBtn.on('click', function(event) {
    prevSlide();
  });

  function nextSlide() {
    $activeSlide = $slider2.find('.panel2._active');
    var $nextSlide = $activeSlide.next('.panel2');
    $activeSlide.removeClass('_active');
    $nextSlide.addClass('_active');

    //$activeSlide = $nextSlide;

    var slideIndex = $slider2.find('.panel2._active').index('.panel2');
    console.log(slideIndex);

    if (slideIndex >= numberOfSlides || slideIndex <= -1) {
      firstSlide();
      $slider2.trigger('slide.changed');

    } else {
      $slider2.trigger('slide.changed');
    }

  }

  function prevSlide() {
    $activeSlide = $slider2.find('.panel2._active');

    var $prevSlide = $activeSlide.prev('.panel2');

    $activeSlide.removeClass('_active');
    $prevSlide.addClass('_active');

    var slideIndex = $slider2.find('.panel2._active').index();
    console.log(slideIndex);

    if (typeof $prevSlide === 'undefined' || $prevSlide === null || $prevSlide.length == -1 || slideIndex <= -1) {
      lastSlide();
      $slider2.trigger('slide.changed');
    } else {
      $slider2.trigger('slide.changed');
    }

  }

  function firstSlide() {
    $('.panel2._active').removeClass('_active');
    $slider2.find('.panel2:eq(0)').addClass('_active');
    $activeSlide = $slider2.find('.panel2:eq(0)');

  }

  function lastSlide() {

    $('.panel2._active').removeClass('_active');
    $slider2.find('.panel2').eq(numberOfSlides - 1).addClass('_active');

  }

  function goToSlide(slideToGo) {
    $('.panel2._active').removeClass('_active');
    $slider2.find('.panel2').eq(slideToGo - 1).addClass('_active');
    $activeSlide = $slider2.find('.panel2').eq(slideToGo - 1).addClass('_active');
    $slider2.trigger('slide.changed');
  }

});
}


function slideSlider3()
{
$('.wrapper3').each(function() {
  var $slider3 = $(this);
  var numberOfSlides = $slider3.find('.panel3').length;

  $slider3.find('.panel3:eq(0)').addClass('_active');
  $slider3.find('.nav-dot3:eq(0)').addClass('active');

  var $activeSlide = $slider3.find('.panel3._active');
  var $nextBtn3 = $slider3.find('.next-btn3');
  var $prevBtn = $slider3.find('.prev-btn');

  $('.nav-dot3').on('click', function() {
    var slideToGo = $(this).data('slide');
    goToSlide(slideToGo);
  });

  $slider3.on('slide.changed', function() {
    console.log('slide changed !');
    $('.nav-dot3').removeClass('active');
    var $activeDot3 = $('.nav-dot3[data-slide="' + $('.panel3._active').data('slide') + '"]');
    console.log();
    $activeDot3.addClass('active');
  });

  $nextBtn3.on('click', function(event) {
    nextSlide();
  });

  $prevBtn.on('click', function(event) {
    prevSlide();
  });

  function nextSlide() {
    $activeSlide = $slider3.find('.panel3._active');
    var $nextSlide = $activeSlide.next('.panel3');
    $activeSlide.removeClass('_active');
    $nextSlide.addClass('_active');

    //$activeSlide = $nextSlide;

    var slideIndex = $slider3.find('.panel3._active').index('.panel3');
    console.log(slideIndex);

    if (slideIndex >= numberOfSlides || slideIndex <= -1) {
      firstSlide();
      $slider3.trigger('slide.changed');

    } else {
      $slider3.trigger('slide.changed');
    }

  }

  function prevSlide() {
    $activeSlide = $slider3.find('.panel3._active');

    var $prevSlide = $activeSlide.prev('.panel3');

    $activeSlide.removeClass('_active');
    $prevSlide.addClass('_active');

    var slideIndex = $slider.find('.panel3._active').index();
    console.log(slideIndex);

    if (typeof $prevSlide === 'undefined' || $prevSlide === null || $prevSlide.length == -1 || slideIndex <= -1) {
      lastSlide();
      $slider3.trigger('slide.changed');
    } else {
      $slider3.trigger('slide.changed');
    }

  }

  function firstSlide() {
    $('.panel3._active').removeClass('_active');
    $slider3.find('.panel3:eq(0)').addClass('_active');
    $activeSlide = $slider3.find('.panel3:eq(0)');

  }

  function lastSlide() {

    $('.panel3._active').removeClass('_active');
    $slider3.find('.panel3').eq(numberOfSlides - 1).addClass('_active');

  }

  function goToSlide(slideToGo) {
    $('.panel3._active').removeClass('_active');
    $slider3.find('.panel3').eq(slideToGo - 1).addClass('_active');
    $activeSlide = $slider3.find('.panel3').eq(slideToGo - 1).addClass('_active');
    $slider3.trigger('slide.changed');
  }

});}

