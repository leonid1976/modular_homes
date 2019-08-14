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