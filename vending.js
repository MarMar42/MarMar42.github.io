var change = 0;
var moneyInserted = 0;
var total = 0;
var msg = "";
var messageEl = document.getElementById("message");

var drinks = ["Coke","Sprite","Water","Pepsi"];

const currency_fifty = 0.5;
const currency_one = 1;
const currency_two = 2;
const currency_five = 5;

function getTotal(){
	var num_fifty = Number(document.getElementById("fifty_cent").value);
	var num_one = Number(document.getElementById("one_rand").value);
	var num_two = Number(document.getElementById("two_rand").value);
	var num_five = Number(document.getElementById("five_rand").value);
	
	total = (currency_fifty*num_fifty) + (currency_one*num_one) + (currency_two*num_two) + (currency_five*num_five);
	
	return total.toFixed(2);
}

function tally(){
	moneyInserted = getTotal();
	document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally(){
	getTotal();
	if (total != 0){
		msg = "Transaction cancelled. R" + total.toFixed(2) + " has been returned.";
		document.getElementById("paid").innerHTML = "0.00";
		document.getElementById("fifty_cent").value = 0;
		document.getElementById("one_rand").value = 0;
		document.getElementById("two_rand").value = 0;
		document.getElementById("five_rand").value = 0;
		messageEl.innerHTML = msg;
	}
	else{
		msg = "Insert Money First. Please Select a Drink";
		messageEl.innerHTML = msg;
	}
}