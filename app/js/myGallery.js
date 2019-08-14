(function myGallery() {
  
      var thumbnails = Array.prototype.slice.call(document.querySelectorAll('.gallery__picture'));
      var bodyElement = document.body;  
  
      function createFullGallery() {

      var fragment = document.createDocumentFragment();
      
      var outer = document.createElement("div");
      outer.classList.add("gallery__wrap__full");
      
      var galleryOverlay = document.createElement("div");
      galleryOverlay.id = "gallery-overlay";
      
      outer.appendChild(galleryOverlay);
      
      var galleryWrap = document.createElement("div");
      galleryWrap.classList.add("gallery__full_wrap");
      
      var galleryButton = document.createElement("button");
      galleryButton.classList.add("cross");
      galleryButton.classList.add("gallery__full_cross");
      galleryButton.classList.add("cross__htx");
      galleryButton.innerHTML = "<span></span>";
      
      galleryWrap.appendChild(galleryButton);
      
      var galleryInner = document.createElement("div");
      galleryInner.classList.add("gallery__wrap_inner");
      galleryInner.innerHTML = '<div class="gallery__arrow gallery__arrow-left"></div><img class="gallery__full_picture" src=""><div class="gallery__arrow gallery__arrow-right"></div>';
      
      var galleryUl = document.createElement("ul");
      galleryUl.classList.add("gallery__pointer");
      
      for (var i = 1; i <= thumbnails.length; i++) {
        var galleryLi = document.createElement("li");
        galleryLi.classList.add("pointer__item");
        galleryLi.dataset.index = i;
        galleryUl.appendChild(galleryLi);
      }
   
      
      galleryInner.appendChild(galleryUl);
      galleryWrap.appendChild(galleryInner);
  
      
      outer.appendChild(galleryWrap);
      fragment.appendChild(outer); 
      bodyElement.appendChild(fragment);
    }
  
    createFullGallery();
  
  
  document.addEventListener('DOMContentLoaded', function() {


    var thumbnails = Array.prototype.slice.call(document.querySelectorAll('.gallery__picture'));
    
    var pointerItems = Array.prototype.slice.call(document.querySelectorAll('.pointer__item '));
    
    var galleryPointer = document.querySelector(".gallery__pointer");
    
    var fullPicture = document.querySelector('.gallery__full_picture');
    var overlayElement = document.getElementById('gallery-overlay');
    
    var crossElement = document.querySelector(".cross");
    var arrowLeft = document.querySelector(".gallery__arrow-left");
    var arrowRight = document.querySelector(".gallery__arrow-right");

    var index = 0;

   
    
    function clickOnThumbnail(event) { 
        index = Number(this.dataset.index) - 1;
        fullPicture.src = this.dataset.fullUrl; 
        overlayElement.style.display = "block";
        crossElement.style.display = "block";
        arrowLeft.style.display = "block";  
        arrowRight.style.display = "block";      
        overlayElement.addEventListener("click", handleOverlay);
        crossElement.addEventListener("click", handleOverlay);
        crossElement.classList.remove("clossed"); 
        arrowLeft.addEventListener("click", handleArrowLeft);
        arrowRight.addEventListener("click", handleArrowRight);
        bodyElement.classList.add("stop-scrolling");
        galleryPointer.style.display = "flex";
        pointerItems[index].classList.add("current");
        
    }

    
    function clickOffThumbnail(event) {
      overlayElement.removeEventListener("click", handleOverlay);
      crossElement.removeEventListener("click", handleOverlay); 
      crossElement.classList.add("clossed");
      setTimeout(function(){
        crossElement.style.display = "none"; 
        fullPicture.src = ""; 
        arrowLeft.style.display = "none";  
        arrowRight.style.display = "none";  
        overlayElement.style.display = "none";     
        bodyElement.classList.remove("stop-scrolling");
        arrowLeft.removeEventListener("click", handleArrowLeft);
        arrowRight.removeEventListener("click", handleArrowRight);
        galleryPointer.style.display = "none";        
        pointerItems[index].classList.remove("current");        
      },600);        
    }
  
    
    function clickOnPointer(event) {
      pointerItems[index].classList.remove("current");         
      index = +this.dataset.index - 1;
      pointerItems[index].classList.add("current");        
      slideShow(index);
    }    
    

    function handleOverlay() {
        clickOffThumbnail(); 
    }
    
    
    function handleArrowLeft() {
      pointerItems[index].classList.remove("current");        
      index--;    
      if(index < 0) index = 0;  
      pointerItems[index].classList.add("current");        
      slideShow(index);
    }   
    
   
    function handleArrowRight() {
      pointerItems[index].classList.remove("current");         
      index++;    
      if(index >= thumbnails.length) index--;
      pointerItems[index].classList.add("current");        
      slideShow(index);      
    }   
    
    
    function slideShow(index) {
      fullPicture.classList.add("fadeOut");
      setTimeout(function() {
        fullPicture.src =  thumbnails[index].dataset.fullUrl; 
        fullPicture.classList.remove("fadeOut");                
        },1000);
    }
    
    
    
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', clickOnThumbnail);
        pointerItems[i].addEventListener('click', clickOnPointer);
    }
    
    
  })})()