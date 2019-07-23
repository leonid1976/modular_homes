(function BurgerMenu() {
  let toggleButton = document.querySelector(".cmn-toggle-switch__htx");
  toggleButton.addEventListener("click", toggleMenu);



  function toggleMenu() {

    let logoElement = document.querySelector(".logo");
    let overlayElement = document.querySelector(".site-overlay");
    overlayElement.addEventListener("click", handleOverlay);
    
    let bodyElement = document.body;
    
    function menuSwitchOn {
      this.classList.add("active");   //change button to cross
      logoElement.classList.add("noActive");  //hide logo
      overlayElement.classList.remove("noActive");  //show overlay  
     // overlayElement.addEventListener("click", handleOverlay);      
      bodyElement.classList.add("stop-scrolling"); // stop scrolling       
    }
    
    function menuSwithOff {
      this.classList.remove("active");  //change button to normal 
      logoElement.classList.remove("noActive");  //show logo
   //   overlayElement.removeEventListener("click", handleOverlay);      
      overlayElement.classList.add("noActive");  //hide overlay 
      bodyElement.classList.remove("stop-scrolling"); // stop scrolling   
    }
    
    function handleOverlay {
      alert("dfdfdfd");
        menuSwithOff();  
    }

    if(this.classList.contains("active")) {
        menuSwithOff();

    } else {
        menuSwitchOn();
    }
  } 
})();