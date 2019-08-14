(function mySlider() {
  
  document.addEventListener('DOMContentLoaded', handleSlider, false);
  
    function handleSlider() {

      let sliders = document.getElementsByClassName("mySlider");
      sliders[0].style.display = "block" 
      sliders[0].style.opacity = 1;      
      let i = 1;
      sliders[i].style.display = "block"       
      let delay = setInterval(changeSlide, 2000);
 //     sliders[i].style.opacity = 1;      
      
      function changeSlide() {
            i++;
            sliders[i - 1].style.opacity = 1;
            if(i == 15) {
              i = 0; }
/*              clearInterval(delay);
              return;*/
        
              sliders[i].style.display = "block";
     
          
            
      }
    }
})();
