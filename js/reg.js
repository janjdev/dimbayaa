
var n;
var o;
document.addEventListener("DOMContentLoaded", function(){
   // Handler when all assets (including images) are loaded
  //Create variables for registration form
    var selectors = document.getElementsByClassName('selector');
    var i;
    var reg_btn = document.getElementById("btn");
    var form = document.getElementById("registrations_forms");
    var a = form.className;
    var Gfm = document.getElementById('gaurdian');
    var Afm = document.getElementById('adforms');
    var Cfm = document.getElementById('chforms');
    var fm = document.getElementById('reg_info');
    var j;
    var k;
    var t;
    var b;
    var addAdult;
    var removeAdult;
    var addChild;
    var removeChild;
    var z;
    var p;
    var v;
    var r;
    var cpQuantity =  document.getElementById('qty-2');
    var apQuantity = document.getElementById('qty-1');
    var counterAdult;
    var counterChild;
    var parentCheck;
    var h = document.getElementById('chforms').firstElementChild;
    var hh = document.getElementById('adforms').firstElementChild;
    var basic_form = "<div class='col-xs-4 col-md-4'><input name='fname' type='text' placeholder='First Name' class='col-xs-12 inputs name' data-type='string' data-message='This field cannot be empty'/></div> " +  "<div class='col-xs-4 col-md-4'>  <input name='lname' type='text' placeholder='Last Name' class='col-xs-12 inputs name' data-type='string' data-message='This field cannot be empty'/></div> " + "<div class='col-xs-4 col-md-4'><input name='email' type='email' placeholder='email' class='col-xs-12 inputs' data-type='expression' data-message='This field cannot be empty'/></div>";
    var ch_form = "<div class='col-xs-4 col-md-4'><input name='fname' type='text' placeholder='First Name' class='col-xs-12 inputs name'/></div> " +  "<div class='col-xs-4 col-md-4'>  <input name='lname' type='text' placeholder='Last Name' class='col-xs-12 inputs name'/></div> " + "<div class='col-xs-4 col-md-4'><input name='age' type='text' placeholder='age' class='col-xs-12 inputs'/>";


  // Choose number of participants load participant information forms
    reg_btn.addEventListener('click', function() {
    if(selectors[0].value == 0 && selectors[1].value == 0){
      for(i = 0;  i < selectors.length; i++){
        selectors[i].style.borderColor = "red";
      }
    }
    else if (selectors[0].value != "" || selectors[1].value != "") {
      for(i = 0;  i < selectors.length; i++){
        selectors[i].style.borderColor = "rgb(169, 169, 169)";
        this.disabled = true;
      }
      //show forms
      form.style.display = "block";
      form.className = a + " animated flipInX";
      fm.classList.remove('hidden');
      //get the number of adult and child participants
      j = document.getElementById('ap').value;
      k = document.getElementById('cp').value;
      // update quantity
        cpQuantity.value = k;
        apQuantity.value = j;


      //Generate Adult participant information form(s)
        for(p = 0; p < j; p++){
        t = document.createElement('div');
        t.setAttribute('id', 'adultForm' + p);
        t.setAttribute('class', 'ap input_group');
        //append particpant counter
        counterAdult = p +1;
        t.innerHTML ="<span>Participant "+ counterAdult + "."+"</span>" + basic_form +"<span class='float'></span>";
        hh.innerText = "Adults Participants";
        Afm.appendChild(t)
       }

      //Create Legal Guardian form
        var gh3 = document.getElementById('gaurdian').firstElementChild;
        gh3.innerText = "Parent or Legal Guardian Information";
         var m = document.createElement('div');
         m.setAttribute('id', 'gaurdianForm');
         m.setAttribute('class', 'gaurdian input_group');
         //check if same as billing information
         m.innerHTML = "<span>Same as above <input type='checkbox' class='parent-check'></span> " + basic_form +"<span class='float'></span>";
         Gfm.appendChild(m);

      // create label for children form section
      if(k > 0){
        h.innerHTML="Child Participants";
      }

        //Generate Child participant information form(s)
       for(var q = 0; q < k; q++){
         z = document.createElement('div');
         z.setAttribute('id', 'childForm' + q);
         z.setAttribute('class', 'cp input_group');
         counterChild = q +1;
           z.innerHTML = "<span>Participant " + counterChild  + "." +"</span>" + ch_form +"<span class='float'></span>";
         Cfm.appendChild(z);
       }
         v = document.getElementsByClassName('ap');
         r = document.getElementsByClassName('cp');
         n = v.length;
         o = r.length;
    }

  });
  document.querySelector('body').addEventListener('click', function(event) {
    //Add and remove participants function




    // Add/remove adult participants
      if (event.target.className === 'ad fa fa-plus') {
        var newAd = document.createElement('div');
        newAd.setAttribute('id', 'adultForm' + n);
        newAd.setAttribute('class', 'ap input_group');
        n+=1;
        newAd.innerHTML ="<span>Participant "+ n + "."+"</span>" + basic_form +"<span class='float'></span>";
        Afm.appendChild(newAd);
        apQuantity.value = n;
        if(hh.innerText == ""){
          hh.innerText = "Adults Participants";
        }
      }
      if(event.target.className === 'ad fa fa-minus'){
        Afm.removeChild(v[n-1]);
        n-=1
        apQuantity.value = n;
        if(n < 1){
          hh.innerText = ""
        }
      }

    // Add/remove child participants
      if(event.target.className === 'ch fa fa-plus'){
        var newCh = document.createElement('div');
        newCh.setAttribute('id', 'childForm' + o);
        newCh.setAttribute('class', 'cp input_group');
        o+=1;
        newCh.innerHTML = "<span>Participant " + o + "." +"</span>" + ch_form +"<span class='float'></span>";
        Cfm.appendChild(newCh);
        cpQuantity.value = o;
        if(h.innerText == "" ){
          h.innerText="Child Participants";
        }
      }
      if(event.target.className === 'ch fa fa-minus'){
        Cfm.removeChild(r[o-1]);
        o-=1;
        cpQuantity.value = o;
        if(o < 1 ){
          h.innerText = "";
        }
      }
    //Copy billing information to gaurdian fields
      if(event.target.className === 'parent-check'){
        parentCheck = event.target;
        var pEmail = document.querySelector('.billing_group input[name^="email"]').value;
        var pLname = document.querySelector('.billing_group input[name^="lname"]').value;
        var pFname = document.querySelector('.billing_group input[name^="fname"]').value;

        if(parentCheck.checked){
        document.querySelector('.gaurdian input[name^="email"]').value = pEmail;
        document.querySelector('.gaurdian input[name^="fname"]').value = pFname;
        document.querySelector('.gaurdian input[name^="lname"]').value = pLname;
      }
      else{
        document.querySelector('.gaurdian input[name^="email"]').value = "";
        document.querySelector('.gaurdian input[name^="fname"]').value = "";
        document.querySelector('.gaurdian input[name^="lname"]').value = "";
      }
    }

  });
});
