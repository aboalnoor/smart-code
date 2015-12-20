console.log('dd');


function closeDialog() {
	$('.dialog').removeClass('show') ;
}

function getCost() {

var invoiceList= $('.invoice .list');
var products= $('.product');
var totalCost=0;
invoiceList.empty();
products.each(function() {
var amount= $(this).find('input[type="number"]').val();
var cost= $(this).find('.cost').html();
var name= $(this).find('.product_name').html();
if(amount > 0){
var productCost= amount*cost;
totalCost+= productCost;
invoiceList.append("<tr><td>"+name+" </td><td>"+amount+"</td> <td>"+productCost+" $</td></tr>") ;
}


});

$('.totalCost').html(totalCost + '$');

$('.dialog').addClass('show') ;
}

function validation() {
	
var name= document.getElementById("name");
var email= document.getElementById("email");

		 if (existValidation(name)) 
				if (nameValidation(name))
					if (existValidation(email))
						if(emailValidation(email))
								if(dateValidation(date))
									if(existValidation(message)) {
										alert("Sending the message ... \n validation successed");
									}
}

function existValidation(elem) {
	if (elem.value == null || elem.value == "") {
        alert("must be filled out");
        elem.focus();
        elem.select();
        return false;
    }else {
    	return true;
    }
}


function nameValidation(name) {

var pos = name.value.search(/^[A-Za-z]{1,10}$/);
if (pos != 0) {
alert("The name you entered (" + name.value +
") is not in the correct form. \n" +
"Please go back and fix your name");
name.focus();
name.select();
return false;
} else
return true;
}

function emailValidation(email) {

var pos = email.value.search(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/); 
if (pos != 0) {
alert("The name you entered (" + email.value +
") is not in the correct form. \n" +
"Please go back and fix your email");
email.focus();
email.select();
return false;
} else
return true;
}




 //checks for past date
  function dateValidation(date){ 
      var today =new Date();
      var inputDate = new Date(date.value);
      if (date.value == "" ){
      	alert("Enter the date");
      	date.focus();
					date.select();
          return false;
      } else if (inputDate < today) {
      	alert("date cant be in the past");
      		date.focus();
					date.select();
          return false;
      } else {
          return true;
      }
  }



//document.getElementById("contactForm").onsubmit=validation;
