   
      var bodyElement = document.body;   
      var outer;
      var modalOverlay;
      var modal;
      var innerText;
      var modalButton;
      var text;
  
      function createModalWindow(text) {

        var fragment = document.createDocumentFragment();

        outer = document.createElement("div");
        outer.classList.add("modal__window_outer");         

        modalOverlay = document.createElement("div");
        modalOverlay.id = "modal__window_overlay";        

        modal = document.createElement("div");
        modal.classList.add("modal__window_frame");

       innerText = document.createElement("div");
       innerText.classList.add("modal__window_text"); 
       innerText.innerHTML = text;     


        modalButton = document.createElement("button");
        modalButton.classList.add("cross");
        modalButton.classList.add("modal__window__cross");
        modalButton.classList.add("cross__htx");
        modalButton.innerHTML = "<span></span>";

   
        modal.appendChild(modalButton);
        modal.appendChild(innerText); 
        outer.appendChild(modalOverlay);      
        outer.appendChild(modal);
        fragment.appendChild(outer); 
        bodyElement.appendChild(fragment);
        
             
    }
  
      function closeModal(event) {
        modalOverlay.removeEventListener("click", closeModal); 
        modalButton.removeEventListener("click", closeModal); 
        
        modalButton.classList.add("clossed");
        
        setTimeout(function(){
          modalButton.style.display = "none"; 
          modalOverlay.style.display = "none";     
          bodyElement.classList.remove("stop-scrolling");
          outer.remove();
      },600);         
        
      }  
  
  
  function showModal(text) {

      createModalWindow(text);
    

      modalOverlay.style.display = "block";    
      modalButton.style.display = "block"; 
      modalButton.classList.remove("clossed");      
      bodyElement.classList.add("stop-scrolling");    
    
      modalOverlay.addEventListener("click", closeModal); 
      modalButton.addEventListener("click", closeModal);      

  }


      function startModal(text) {
        var startButton = document.querySelectorAll('.start-modal')[0];

        startButton.addEventListener("click", function() {      showModal(text);
        });  

    }
  

  


