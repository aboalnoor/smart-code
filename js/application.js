console.log('dd');


function closeDialog() {
	$('.dialog').removeClass('show') ;
}

function getCost() {


// 	var x=document.getElementsByClassName("product");

// 	for (var i = x.length - 1; i >= 0; i--) {
// 		console.log(x[i]);
// 	};
// 	console.log(x);
// 	var y= $('.product');

// for (var i = 0; i < x.length; i++) {
// 	var row = y[i];
	
// 	var amount= row.children[2].children[0].value;
// 	var cost= y[i];
// 		console.log(name);
// 	};
// 	console.log(y);

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
		existValidation(name);
		existValidation(email);
    
	
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


document.getElementById("contactForm").onsubmit=validation;
