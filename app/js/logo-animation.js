(function animateLogo() {
  
  document.addEventListener('DOMContentLoaded', function() {
 let timer = setTimeout(function(){ 
   animateLogo();
 },60)
}, false);

function animateLogo() {
  
  //alert("fddfdf");
  
  let logoHigh = document.getElementById('logo__high');
  logoHigh.classList.add("active");

  let logoLeft = document.getElementById('logo__left');
  logoLeft.classList.add("active");  
  
  let logoRight = document.getElementById('logo__right');
  logoRight.classList.add("active");    
  
  let logoText = document.getElementById('logo__text');
  logoText.classList.add("active");  
}

  
  
  /*let toggleButton = document.querySelector(".cmn-toggle-switch__htx");

  toggleButton.addEventListener("click", toggleMenu);





  function toggleMenu() {

    let logoElement = document.querySelector(".logo");

    if(this.classList.contains("active")) {
        this.classList.remove("active");  //change button to normal 
        logoElement.classList.remove("noActive");  //show logo  
    } else {
        this.classList.add("active");   //change button to cross
        logoElement.classList.add("noActive");  //hide logo
    }
  }*/
  
  
})();

