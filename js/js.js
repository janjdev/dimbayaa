var  loader =  document.getElementById('loader'),
		 fill = document.getElementById('fill'),
		 loader_text = document.getElementsByClassName('loader-text')[0],
	 	video = document.getElementById('bgVid');

$(document).ready(function(){



video.onplay = function(){
		$(loader).addClass('out');
	 	$('.home-body').addClass('in');
	};



});


//PayPal Button
paypal.Button.render({

        env: //'production',
				 'sandbox',

				 locale: 'en_US',


				style: {
          size: 'dynamic',
          color: 'blue',
          shape: 'rect',
          label: 'checkout'
        },

				fundingicons: true,

        client: {
            sandbox:    'AW60FbSd2WO1UC6UjC_ce37v0d0Ydi7OUZtjKp7E0Q4HalOMpm1uoFvHO8lm4SpGZl8E0x2CXTtbmMH8',
            production: 'xxxxxxxxx'
        },

        commit: true, // Show a 'Pay Now' button

        payment: function(data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '1.00', currency: 'USD' }
                        }
                    ]
                },
								experience: {
                    input_fields: {
                        no_shipping: 1
                    }
                }
            });
        },

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function(payment) {

                // The payment is complete!
                // You can now show a confirmation message to the customer

								if (error === 'INSTRUMENT_DECLINED') {
                actions.restart();
            		}
            });
        },
				onError: function(err) {
            // Show an error page here, when an error occurs
        }

    }, '#paypal-button');




		Array.prototype.forEach.call(chFields, function(field) {

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



		Array.prototype.forEach.call(fields, function(field) {
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
						field.style.borderColor = "red";
						isValid = false;
					}
				}

	});




	else{
		isValid = true;
	 field.style.borderColor = "rgb(169, 169, 169)";
	}



	//   field.addEventListener('keyup', function(){
	//     if(field.dataset.type == "string"){
	//         console.log(field.value);
	//       if(field.value != null && /\S/.test(field.value)){
	//         field.style.borderColor = "rgb(169, 169, 169)";
	//         //reg_btn.disabled = false;
	//         if(field.previousSibling.className =="message"){
	//         field.previousSibling.remove();
	//       }
	//     }
	//     else{
	//         field.style.borderColor = "red";
	//       }
	//     }else if(field.dataset.type == "expression"){
	//       if((re.test(field.value))){
	//         field.style.borderColor = "rgb(169, 169, 169)";
	//         //reg_btn.disabled = false;
	//         if(field.previousSibling.className =="message"){
	//         field.previousSibling.remove();
	//       }
	//     }else{
	//       isValid = false;
	//     }
	//   }
	// });
	//
	//   field.addEventListener('keyup', function(){
	//     if(field.dataset.type == "string"){
	//         console.log(field.value);
	//       if(field.value != null && /\S/.test(field.value)){
	//         field.style.borderColor = "rgb(169, 169, 169)";
	//         //reg_btn.disabled = false;
	//         if(field.previousSibling.className =="message"){
	//         field.previousSibling.remove();
	//       }
	//
	//       }
	//       else{
	//         field.style.borderColor = "red";
	//           isValid = false;
	//       }
	//     }else if(field.dataset.type == "expression"){
	//       if((re.test(field.value))){
	//         field.style.borderColor = "rgb(169, 169, 169)";
	//         //reg_btn.disabled = false;
	//         if(field.previousSibling.className =="message"){
	//         field.previousSibling.remove();
	//       }
	//
	//     }else{
	//       isValid = false;
	//     }
	//   }
	// });
