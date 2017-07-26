document.addEventListener("DOMContentLoaded", function(){
    var fields,
    gaurdianFields,
    adultFields,
    chFields,
    isValid,
     re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  document.querySelector('#order-button').addEventListener('click', function(e) {

       fields = document.querySelectorAll('#reg_info input');
       gaurdianFields = document.querySelectorAll('#gaurdian input.name');
       adultFields = document.querySelectorAll('#adforms input.name');
       chFields = document.querySelectorAll('#chforms input.name');


      //Form validation
        //input fields are not blank on Keyup
            Array.prototype.forEach.call(fields, function(field) {
              field.addEventListener('keyup', function(){
                if(field.dataset.type == "string"){
                    console.log(field.value);
                  if(field.value != null && /\S/.test(field.value)){
                    field.style.borderColor = "rgb(169, 169, 169)";
                    //reg_btn.disabled = false;
                    if(field.previousSibling.className =="message"){
                    field.previousSibling.remove();
                  }

                  }
                  else{
                    field.style.borderColor = "red";
                      isValid = false;
                  }
                }else if(field.dataset.type == "expression"){
                  if((re.test(field.value))){
                    this.style.borderColor = "rgb(169, 169, 169)";
                    //reg_btn.disabled = false;
                    if(field.previousSibling.className =="message"){
                    field.previousSibling.remove();
                  }

                }else{
                  isValid = false;
                }
              }
            });
                field.addEventListener('click', function(){
                  if(field.dataset.type == "string"){
                    if(field.value != null && /\S/.test(field.value)){
                      field.style.borderColor = "rgb(169, 169, 169)";
                      //reg_btn.disabled = false;
                      if(field.previousSibling.className =="message"){
                      field.previousSibling.remove();
                    }

                  }else{
                      field.style.borderColor = "red";
                      isValid = false;
                    }
                  }else if(field.dataset.type == "expression"){
                    if((re.test(field.value))){
                      this.style.borderColor = "rgb(169, 169, 169)";
                      //reg_btn.disabled = false;
                      if(field.previousSibling.className =="message"){
                      field.previousSibling.remove();
                    }
                  }else{
                    isValid = false;
                  }
                }
            });
          });

      Array.prototype.forEach.call(chFields, function(field) {
        field.addEventListener('keyup', function(){
          if(field.dataset.type == "string"){
              console.log(field.value);
            if(field.value != null && /\S/.test(field.value)){
              field.style.borderColor = "rgb(169, 169, 169)";
              //reg_btn.disabled = false;
              if(field.previousSibling.className =="message"){
              field.previousSibling.remove();
            }
          }
          else{
              field.style.borderColor = "red";
            }
          }else if(field.dataset.type == "expression"){
            if((re.test(field.value))){
              this.style.borderColor = "rgb(169, 169, 169)";
              //reg_btn.disabled = false;
              if(field.previousSibling.className =="message"){
              field.previousSibling.remove();
            }
          }else{
            isValid = false;
          }
        }
      });
          field.addEventListener('click', function(){
            if(field.dataset.type == "string"){
              if(field.value != null && /\S/.test(field.value)){
                field.style.borderColor = "rgb(169, 169, 169)";
                //reg_btn.disabled = false;
                if(field.previousSibling.className =="message"){
                field.previousSibling.remove();
              }
            }
            else{
                field.style.borderColor = "red";
                isValid = false;
              }
            }else if(field.dataset.type == "expression"){
              if((re.test(field.value))){
                this.style.borderColor = "rgb(169, 169, 169)";
                //reg_btn.disabled = false;
                if(field.previousSibling.className =="message"){
                field.previousSibling.remove();
              }
            }else{
              isValid = false;
            }
          }
        });
    });

    });



});
