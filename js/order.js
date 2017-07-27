document.addEventListener("DOMContentLoaded", function(){
	//Populate shopping-cart table
	var ckout = document.getElementById("checkout-cart");
	var reg_summ = ckout.querySelector('tbody');
	var p = sessionStorage.getItem('products');
	var cartItems = JSON.parse(p);
	var storage = sessionStorage; // shortcut to the sessionStorage object
	var checkoutCart = window.document.querySelector( "#checkout-cart" ); // Checkout form cart
	var formCart = window.document.querySelector( "#shopping-cart" ); // Shopping cart form
	var subTotal = window.document.querySelector( "#pre-tax" ); // Element that displays the subtotal charges
	var userDetails = window.document.querySelector( "#patron-details-content" ); // Element that displays the user information
	var fname, lname, email, phone, street, apt, city, state, zip;

//Paypa form

 function populatePayPalForm () {
	 var currency = "&dollar;"; // HTML entity of the currency to be displayed in the layout
 	var currencyString = "$"; // Currency symbol as textual string
 	var paypalCurrency = "USD"; // PayPal's currency code
 	var paypalBusinessEmail = "dimbayaa@dimbayaa.art"; // Your Business PayPal's account email address
 	var paypalURL = "https://www.paypal.com/cgi-bin/webscr"; // The URL of the PayPal's form
 	var paypalForm = document.querySelector( "#paypal-form" ); // PayPal form
 	//https://www.sandbox.paypal.com/cgi-bin/webscr

	var self = window;
	if(paypalForm.length ) {
		var form = paypalForm;
		var cart = JSON.stringify(storage.getItem( 'cartName' ) );

		//form.setAttribute("action", paypalURL);
		form.querySelector("input[name='business']" ).setAttribute('value', paypalBusinessEmail);
		form.querySelector( "input[name='currency_code']" ).value =  paypalCurrency;

		for( var i = 0; i < cartItems.length; ++i ) {
			var cartItem = cartItems[i];
			var q = i + 1;
			var name = cartItem.Name;
			var price = cartItem.price;
			var qty = cartItem.quantity;
			var tax = .035;

			$( "<div/>" ).html( "<input type='hidden' name='quantity_" + q + "' value='" + qty + "'/>" ).
			insertBefore( "#paypal-button" );
			$( "<div/>" ).html( "<input type='hidden' name='item_name_" + q + "' value='" + name + "'/>" ).
			insertBefore( "#paypal-button" );
			$( "<div/>" ).html( "<input type='hidden' name='item_number_" + q + "' value='SKU " + name + "'/>" ).
			insertBefore( "#paypal-button" );
			$( "<div/>" ).html( "<input type='hidden' name='amount_" + q + "' value='" + _formatNumber( price, 2 ) + "'/>" ).
			insertBefore( "#paypal-button" );
			$( "<div/>" ).html( "<input type='hidden' name='tax_" + q + "' value='" +  tax + "'/>" ).
			insertBefore( "#paypal-button" );
		}
	}
}

		//Display Order Summary
		var ad = document.querySelector('#adwkshp');
		var ch = document.querySelector('#chwkshp');
		var sub = parseInt(storage.getItem('subtotal'));

		var tax = .035;
		var taxest = sub * tax;
		var tote = (sub + taxest);



		for(var i = 0; i < cartItems.length; i++){
		var html = "<th scope='row'>" + (i+1) + "</th>" +"<td>" + cartItems[i].Name + " </td>" + "<td>" + cartItems[i].quantity + " </td>" +"<td> "+ cartItems[i].price + " </td>";
		reg_summ.innerHTML += html;

		if(cartItems[i].Name == "Adult Workshop"){
			ad.innerText = cartItems[i].Name;
			ad.nextElementSibling.innerText = cartItems[i].quantity + "x $" + _formatNumber(cartItems[i].price, 2);
		}else{
			ch.innerText = cartItems[i].Name;
			ch.nextElementSibling.innerText = cartItems[i].quantity + "x $" +_formatNumber(cartItems[i].price, 2);
			}
		}
		var pretax=document.querySelector('#pre-tax').nextElementSibling;
		pretax.innerText ="$"+ _formatNumber(sub, 2);

		var esttax = document.querySelector('#est-tax').nextElementSibling;
		esttax.innerText="$" + _formatNumber(taxest, 2);

		var esttote = document.querySelector('#esttotal').nextElementSibling ;
		esttote.innerText="$" + _formatNumber(tote, 2);


	//Verify billing information
	 function displayUserDetails() {
		 	if(sessionStorage.getItem('billingfname') != 'undefined'){
				 fname = storage.getItem( "billingfname" );
         lname = storage.getItem( "billinglname");
         email = storage.getItem( "billingemail" );
         street = storage.getItem( "billingstreet");
				 apt = storage.getItem( "billingapt");
         city = storage.getItem( "billingcity" );
         phone = storage.getItem( "billingphone" );
         zip = storage.getItem( "billingzip" );
         state = storage.getItem( "billingstate" );
					if( userDetails != "undefined") {
							var html ="<div>";
							html += "<ul>";
							html += "<li id='fname' >" + fname + "</li>";
							html += "<li id='lname' >" + lname + "</li>";
							html += "<li id='email' >" + email + "</li>";
							html += "<li id='phone' >" + phone + "</li>";
							html += "<li id='street' >" + street + "</li>";
							html += "<li id='city' >" + city + "</li>";
							html += "<li id='apt' >" + apt + "</li>";
							html += "<li id='state' >" + state + "</li>";
							html += "<li id='zip' >" + zip + "</li>";
							html += "</ul></div>";
							html += " <div class='form-check'><label id='checklable' class='form-check-label'><input id='bcheck' type='checkbox' class='form-check-input' required='required'> My information is correct </label></div>"
							userDetails.innerHTML = html
					}
		}else
			if( userDetails != "undefined") {
				var html ="<form id='verifyB'> <div class='group-form'>";
				html += "<input type = 'text' id='fname' required='required' placeholder='First Name'>";
				html += "<input type='text' id='lname' required=required placeholder='Last Name'>" ;
				html += "<input type='email' id='email' required=required placeholder='Email'>" ;
				html += "<input type='tel' id='phone' required=required placeholder='Phone'>";
				html += "<input type='text' id='street' required=required placeholder='Street Address'>";
				html += "<input type='text' id='apt' placeholder='Apartment'>";
				html += "<input type='text' id='city' required=required placeholder='City'>";
				html += "<input type='text' id='state' required=required placeholder='State'>";
				html += "<input type='text' id='zip' required=required placeholder='Zipcode'>";
				html += " <div class='form-check'><label id='checklable' class='form-check-label'><input type='checkbox' id='bcheck' class='form-check-input' required='required'> My information is correct </label></div>"
				html += "</div></form>";
				userDetails.innerHTML = html
		}
		if(userDetails.children.length){
			document.getElementById('bcheck').addEventListener('click', function(){
					if(this.checked){
						if(sessionStorage.getItem('billingfname') == undefined){
					fname = document.getElementById( "fname" ).value;
					lname = document.getElementById( "lname").value;
					email = document.getElementById( "email" ).value;
					street = document.getElementById( "street").value;
					apt = document.getElementById( "apt").value;
					city = document.getElementById( "city" ).value;
					phone = document.getElementById( "phone" ).value;
					zip = document.getElementById( "zip" ).value;
					state = document.getElementById( "state" ).value;
				}
			}
		})
	}
}


/* Format a number by decimal places
 * @param num Number the number to be formatted
 * @param places Number the decimal places
 * @returns n Number the formatted number
 */

 function _formatNumber( num, places ) {
 	var n = num.toFixed(places)
 	return n;
 }

displayUserDetails();
populatePayPalForm();

function isValid() {
			 return document.querySelector('#bcheck').checked;
	 }

	 function onChangeCheckbox(handler) {
			 document.querySelector('#bcheck').addEventListener('change', handler);
	 }

	 function toggleValidationMessage() {
			 return isValid() ? document.querySelector('#checklable').style.border ='none' : document.querySelector('#checklable').style.border = 'solid red';
	 }

	 function toggleButton(actions) {
			 return isValid() ? actions.enable() : actions.disable();
	 }

		//PayPal Button
		paypal.Button.render({
		        env: //'production',
						 'sandbox',

						 locale: 'en_US',


						style: {
		          size: 'responsive',
		          color: 'blue',
		          shape: 'rect',
		          label: 'checkout'
		        },


		        client: {
		            production: '',
								sandbox:    '',
		        },
		        commit: true, // Show a 'Pay Now' button

						validate: function(actions) {
            toggleButton(actions);
            onChangeCheckbox(function() {
								toggleValidationMessage();
                toggleButton(actions);
            });
        },

        onClick: function() {
            toggleValidationMessage();
        },

		        payment: function(data, actions) {
		            return actions.payment.create({
		                payment: {
		                    transactions: [
		                        {
		                            amount: { total: _formatNumber(tote, 2), currency: 'USD' }
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
		        },

		    }, '#paypal-button');
});
