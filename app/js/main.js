
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




(function() {
  
  let iconsElements = document.getElementsByClassName('icon');
  window.addEventListener('scroll', handleScroll);
 // console.dir(iconsElements);
  
  let icons = Array.prototype.slice.call(iconsElements);
  let delay = 0;
  
  
  function handleScroll() { 
    
    function animateIcon(element, delay) {
      let iconFrame = element.getElementsByClassName("icon__frame")[0];
      let iconInner = element.getElementsByClassName("icon__inner")[0];

      let delayFrame = `${delay/3}s`;
      let delayInner = `${delay/3 + 0.5}s`;
      
   //   alert(delayFrame);
   //   alert(delayInner);

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
        if(aboutY < 500) {
          animateIcon(icons[i],delay);   
          if(i == 3) delay = 0;
          delay++;
          icons.splice(i, 1);
          i--;
        }
      }
    }
  }
})();




/*(function() {
  let about = document.getElementsByClassName('about')[0];
  window.addEventListener('scroll', handleScroll);
  
  function handleScroll() { 
    let aboutY = about.getBoundingClientRect().top;
    if(aboutY<0) {
      animateIcons();
      window.removeEventListener('scroll', handleScroll)
    }  
  }
})();


function animateIcons() {
  
  let iconsFrame = document.getElementsByClassName("icon__frame");
  let iconsInner = document.getElementsByClassName("icon__inner");
  
  
  let quantity = iconsFrame.length;
  for (let i = 0; i < quantity; i++) {
    let delayFrame = `${i/3}s`;
    let delayInner = `${i/3 + 0.5}s`;
    iconsFrame[i].style.transitionDelay = delayFrame;
    iconsInner[i].style.transitionDelay = delayInner;
    iconsFrame[i].classList.add("active");
    iconsInner[i].classList.add("active");    
  }  
}*/

/*document.addEventListener('readystatechange', event => {

    if (event.target.readyState === "interactive") {      //same as:  document.addEventListener("DOMContentLoaded"...   // same as  jQuery.ready
        alert("All HTML DOM elements are accessible");
    }

    if (event.target.readyState === "complete") {
        alert("Now external resources are loaded too, like css,src etc... ");
    }

});*/

/*let topSlider = document.querySelectorAll(".mySlider")[0];
alert(topSlider);
topSlider.addEventListener('onload', function() {
   alert(topSlider);
}, false);*/

/*document.addEventListener('DOMContentLoaded', function() {

   alert("ready");

}, false);*/

/*  window.onload = function() {
    alert( 'Документ и все ресурсы загружены' );
  };*/
