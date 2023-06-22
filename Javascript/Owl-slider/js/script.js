$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 2 ,
        margin : 50 , 
        loop : true,
        // autoplay : true ,
        autoplayTimeout : 2000 ,
        nav : true ,
        navText : [ "<i class='fa-solid fa-arrow-left-long text-primary'></i>" , "<i class='fa-solid fa-arrow-right-long'></i>" ],
        responsive : {
            // breakpoint from 0 up
            0 : {
               items: 1,
               autoplay: true ,
               nav : false
            },
            // breakpoint from 480 up
            // 480 : {
               
            // },
            // breakpoint from 768 up
            768 : {
               
            }
        }
    });
  });


//   <i class="fa-solid fa-arrow-right-long"></i>
//   <i class="fa-solid fa-arrow-left-long"></i>



