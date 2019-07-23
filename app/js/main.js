/*
document.addEventListener('DOMContentLoaded', function() {
 let timer = setTimeout(function(){ 
   animateLogo();
 },60)
}, false);

function animateLogo() {
  
  let logoHigh = document.getElementById('logo__high');
  logoHigh.classList.add("active");

  let logoLeft = document.getElementById('logo__left');
  logoLeft.classList.add("active");  
  
  let logoRight = document.getElementById('logo__right');
  logoRight.classList.add("active");    
  
  let logoText = document.getElementById('logo__text');
  logoText.classList.add("active");  
}
*/




(function() {
  
  let iconsElements = document.getElementsByClassName('icon');
  window.addEventListener('scroll', handleScroll);

  
  let icons = Array.prototype.slice.call(iconsElements);  
  let delay = 0;

  
  
  function handleScroll() { 
    
    function animateIcon(element, delay) {
      let iconFrame = element.getElementsByClassName("icon__frame")[0];
      let iconInner = element.getElementsByClassName("icon__inner")[0];
      
      delay = delay % 4;
      let delayFrame = `${delay/3}s`;
      let delayInner = `${delay/3 + 0.5}s`;


      iconFrame.style.transitionDelay = delayFrame;
      iconInner.style.transitionDelay = delayInner;
      iconFrame.classList.add("active");
      iconInner.classList.add("active");    

    } //-----end of animateIcon function--------------//
    
    if (icons.length == 0) {
      window.removeEventListener('scroll', handleScroll);
      return;
    } else {
        for(let i = 0; i < icons.length; i++) {
          let aboutY = icons[i].getBoundingClientRect().top;
        if(aboutY < 700) {
          animateIcon(icons[i], delay);
          delay++;
          icons.splice(i, 1);
          i--;
        }
      }
    }
  }
})();
