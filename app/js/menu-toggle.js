(function BurgerMenu() {
  let toggleButton = document.querySelector(".cmn-toggle-switch__htx");
  toggleButton.addEventListener("click", toggleMenu);



  function toggleMenu() {

    let logoElement = document.querySelector(".logo");
    let overlayElement = document.querySelector(".site-overlay");
    let bodyElement = document.body;
    
    function menuSwitchOn() {
      toggleButton.classList.add("active");   //change button to cross
      logoElement.classList.add("noActive");  //hide logo
      overlayElement.classList.remove("noActive");  //show overlay  
      overlayElement.addEventListener("click", handleOverlay);      
      bodyElement.classList.add("stop-scrolling"); // stop scrolling       
    }
    
    function menuSwithOff() {
      toggleButton.classList.remove("active");  //change button to normal 
      logoElement.classList.remove("noActive");  //show logo
      overlayElement.removeEventListener("click", handleOverlay);      
      overlayElement.classList.add("noActive");  //hide overlay 
      bodyElement.classList.remove("stop-scrolling"); // stop scrolling   
    }
    
    function handleOverlay() {
        menuSwithOff();  
    }

    if(toggleButton.classList.contains("active")) {
        menuSwithOff();

    } else {
        menuSwitchOn();
    }
  } 
})();