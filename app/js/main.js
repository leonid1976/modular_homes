(function homeFilter() {
  var wrap = document.querySelector(".homes__wrap");
  var form = document.getElementById("filter");
  if(form) {
    form.addEventListener('submit',  sendRequest);  
    var ajaxUrl = window.wp_data.ajax_url; 
  }

  
  function sendRequest(event) {
        var request = new XMLHttpRequest();
        request.open("POST", ajaxUrl);    
        event.preventDefault();
        var formData = new FormData(form);
        request.send(formData);  
    
        request.onload = function() {
            if (request.status != 200) {
              alert( 'Ошибка: ' + request.status);
              return;
            }
            
            var answer = request.response;
            wrap.innerHTML = "";          
            wrap.innerHTML = answer;
            console.log(answer);

        }
    
    };
  
    
    startModal("This website is a part of porfolio. For non-commercial use");
  

})();