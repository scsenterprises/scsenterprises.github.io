
 $(document).ready(function(){
    $('.sidenav').sidenav();
 });

 $(document).ready(function(){
    $('.carousel').carousel();

  });
      
 $('.carousel').carousel({
    padding: 200    
});
setTimeout(autoplay, 2500);
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2500);
}
        
 $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators:true

  });
$(document).ready(function(){
    $('.collapsible').collapsible();
  });