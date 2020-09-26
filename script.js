


function pass (){
  var number = document.getElementById("number-input").value;
  localStorage.setItem("textvalue", number);
  return false;
}
function check (){
    var nomor = document.getElementById('number-input').value;
    var pass = document.getElementById('pass-input').value;
    
    if (nomor.length > 0){
        if (nomor.startsWith('0878')){
            if(nomor.length == 12 && !isNaN(nomor)){
            if(pass.length > 5 && pass.length < 25){
            
                $("#login").attr('action', 'HOME.html')
                return true;                         
            }else{
                
                alert ('password must consist of 5 to 25 characters');
            }
            }else{
            
            alert('SL Number must consist of 12 digits');
            }
        }else{
        
        alert('SL Number must start with 0878');
        }
    }else{
        alert('SL Number Must Be Filled')
    }
    return false;
  }

  function checkAdd (email){
    let counterAdd = 0;
    let counterDots = 0;
    if (email.startsWith('@') == true){
      return false;
    }
    else if (email.startsWith('.') == true){
      return false;
    }else{
      for (let i =0; i<email.length; i++){
        if (email[i] =='@' ){
          counterAdd++;
        }if (email[i] == '.'){
          counterDots++;
        }if (email[i] == '.' &&(email[i+1] == '.' || email[i+1]=='@')){
          return false;
        }if (email[i] == '@' && (email[i+1] == '.' || email[i+1] == '@')){
          return false;
        }
      }
      if(counterAdd == 1){
        if (counterDots >= 1){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }

    }
  }

  // function checkFeedback(){
    window.addEventListener('load', function(){

      // var name;
      // var email;
      // var feedback;
      var form = document.getElementById('feedback1');
      form.addEventListener('submit', function(event){
        var name = document.getElementById('input-name').value;
        var email = document.getElementById('input-email').value;
        var feedback = document.getElementById('input-feedback').value;
        
        console.log (name.length);
        if (name.length >= 5 && name.length <= 25){
          if (email.length != 0){
            if (checkAdd (email) == true){
              if (feedback.length > 0){
                event.preventDefault();
                event.stopPropagation();
                alert ("Thank you for the feedback 😊");
                $('#input-name').val('');
                $('#input-email').val('');
                $('#input-feedback').val('');
                return false;
              }else{
                event.preventDefault();
                event.stopPropagation();
                alert ("feedback cannot be empty");
              }
            }else{
              event.preventDefault();
              event.stopPropagation();
              alert ("email format wrong");
            }
          }else{
            event.preventDefault();
            event.stopPropagation();
            alert ("email must be filled");
          }
        }else {
          event.preventDefault();
          event.stopPropagation();
          alert ("Name must be filled with 5 to 25 characters");
        }
  
        
      })
      
    })
    


  // }

  
  
  $(function() {

    $(".progress").each(function() {
      var value = $(this).attr('data-value');
      // console.log (value);
      var left = $(this).find('.progress-left .progress-bar');
      
      var right = $(this).find('.progress-right .progress-bar');
      
      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentToDegree(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentToDegree(value - 50) + 'deg)')
        }
      }
    })
  
    function percentToDegree(percentage) {
      return percentage / 100 * 360
    }
  
  });
 
  

  

  

