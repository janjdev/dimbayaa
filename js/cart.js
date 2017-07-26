document.addEventListener("DOMContentLoaded", function(){



  // get the order details
  var cartPrefix = "Dimbayaa Arts SummerWorkshop-"; // Prefix string to be prepended to the cart's name in the session storage
  var cartName = cartPrefix + "cart"; // Cart name in the session storage
  var subTotalName = cartPrefix + "total"; // Total key in the session storage
  var storage = sessionStorage; // shortcut to the sessionStorage object
  var subtotal = 0;


  var form = document.querySelector('form#reg_info');
  var products;
  var quantity;
  var product_price

  form.addEventListener('submit', function(){

    var fname = document.querySelector( "input.billing_input[name='fname']" ).value;
    var lname = document.querySelector( "input.billing_input[name='lname']" ).value;
    var email = document.querySelector( "input.billing_input[name='email']" ).value;
    var street = document.querySelector( "input.billing_input[name='street']").value;
    var apt = document.querySelector( "input.billing_input[name='apt']").value;
    var city = document.querySelector( "input.billing_input[name='city']").value;
    var state = document.querySelector( "select#state").value;
    var zip = document.querySelector( "input.billing_input[name='zipcode']").value;
    var phone = document.querySelector( "input.billing_input[name='phone']").value;


    storage.setItem( "billingfname", fname );
    storage.setItem( "billinglname", lname );
    storage.setItem( "billingemail", email );
    storage.setItem( "billingphone", phone );
    storage.setItem( "billingcity", city );
    storage.setItem( "billingstreet", street );
    storage.setItem( "billingapt", apt );
    storage.setItem( "billingzip", zip );
    storage.setItem( "billingstate", state );
    storage.setItem('cartName', JSON.stringify(cartName));
    storage.setItem('subTotalName', JSON.stringify(subTotalName));

    // get products quantity and price, total
    product ={
      productsName: {ap:"Adult Workshop", cp:"Childrens Workshop"}
    };
    quantity = {
      productAmount: {ap: 0, cp: 0 }
    };
    price = {
      productCost: {ap: 30, cp: 18}
    };
    cartItems = [];

    if(n > 0){
      quantity.productAmount.ap = n;
      subtotal = subtotal + (price.productCost.ap * n)
      var items = {Name: product.productsName.ap, quantity: quantity.productAmount.ap, price: price.productCost.ap };
      cartItems.push(items);

    }
    if(o > 0){
      quantity.productAmount.cp = o;
      subtotal = subtotal + (price.productCost.cp * o);
      var item = {Name: product.productsName.cp, quantity: quantity.productAmount.cp, price: price.productCost.cp};
      cartItems.push(item);
    }

    storage.setItem('products', JSON.stringify(cartItems));
    storage.setItem('subtotal', JSON.stringify(subtotal) );



  });




})
