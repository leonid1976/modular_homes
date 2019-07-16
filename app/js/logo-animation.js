(function animateLogo() {
  let toggleButton = document.querySelector(".cmn-toggle-switch__htx");

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
  } 
})();

