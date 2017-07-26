document.addEventListener("DOMContentLoaded", function(){
    var fields,
    gaurdianFields,
    isValid = true,
    inputs,
     re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     function validatefields(x){
       Array.prototype.forEach.call(x, function(field) {
          if(field.value == null || /\S/.test(field.value) == false){
             field.style.borderColor = "red";
             isValid = false;
          }else
           if(field.dataset.type == "expression"){
            if (!(re.test(field.value))){
              field.style.borderColor = "red";
              isValid = false;
          }
        }  else {
            isValid = true;
           field.style.borderColor = "rgb(169, 169, 169)";
          }
             console.log(isValid);
           });
          }

//|| /\S/.test(field.value)
        document.querySelector('#btn').addEventListener('click', function(){
          fields = document.querySelectorAll('#reg_info input.valid');
          gaurdianFields = document.querySelectorAll('#gaurdian input.inputs');
          inputs = document.querySelectorAll('input');
        });

        //Validate of input keyup
        function keyValidate(){
          Array.prototype.forEach.call(inputs, function(input) {
            input.addEventListener('keyup', function(){
              validatefields(fields);
              if(document.getElementById('chforms').firstElementChild.nextElementSibling){
              validatefields(gaurdianFields);
              }
            });
          });
        }
        //Validate on Click
        document.querySelector('#order-button').addEventListener('click', function(e) {
          //Form validation
              //input fields are not blank on Keyup
                validatefields(fields);
                keyValidate();
            if(document.getElementById('chforms').firstElementChild.nextElementSibling){
              validatefields(gaurdianFields);
            }
            if(!isValid){
              e.preventDefault();
            }
        });

        //Validate on form focus
      document.querySelector('#reg_info').addEventListener('focus', function(){
        validatefields(fields);
        if(document.getElementById('chforms').firstElementChild.nextElementSibling){
        validatefields(gaurdianFields);
        }
      });

});
