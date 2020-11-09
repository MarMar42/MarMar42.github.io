var change = 0;
var moneyInserted = 0;
var total = 0;
var msg = "";
var messageEl = document.getElementById("message");

var myTable = document.getElementById('Table');

const currency_fifty = 0.5;
const currency_one = 1;
const currency_two = 2;
const currency_five = 5;
const delay = ms => new Promise(res => setTimeout(res, ms));

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

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


function clearInput(){
	document.getElementById("paid").innerHTML = "0.00";
	document.getElementById("fifty_cent").value = 0;
	document.getElementById("one_rand").value = 0;
	document.getElementById("two_rand").value = 0;
	document.getElementById("five_rand").value = 0;
}

function clearTally(){
	getTotal();
	clearInput();
	if (total > 0){
		msg = "Transaction cancelled. R" + total.toFixed(2) + " has been returned.";
		messageEl.innerHTML = msg;
	}
	else if (total == 0){
		msg = "Insert Money First. Please Select a Drink";
		messageEl.innerHTML = msg;
	}
}

function resetProducts(){
	alert("Resetting Stock...");
	myTable.rows[1].cells[2].innerHTML = 5;
	myTable.rows[2].cells[2].innerHTML = 2;
	myTable.rows[3].cells[2].innerHTML = 12;
	myTable.rows[4].cells[2].innerHTML = 0;
}

function resetAll(){
	alert("Resetting Data...");
	resetProducts();
	clearInput();
	msg = "Insert Money First. Please Select a Drink";
	messageEl.innerHTML = msg;
}

function buyCoke(){
	var stock = Number(myTable.rows[1].cells[2].innerHTML);
	var price = Number(myTable.rows[1].cells[1].innerHTML);
	
	getTotal();
	if (stock == 0) {
		msg = "Item Out of Stock";
	}
	else if (price > total){
		msg = "Insufficient Funds. Please Add More";
	}
	else{
		msg = "Purchased " + myTable.rows[1].cells[0].innerHTML + ". " + "Change: R" + (total - price);
		myTable.rows[1].cells[2].innerHTML = stock - 1;
		clearInput();
	}
	messageEl.innerHTML = msg;
	
}

function buySprite(){
	var stock = Number(myTable.rows[2].cells[2].innerHTML);
	var price = Number(myTable.rows[2].cells[1].innerHTML);
	
	getTotal();
	if (stock == 0) {
		msg = "Item Out of Stock";
	}
	else if (price > total){
		msg = "Insufficient Funds. Please Add More";
	}
	else{
		msg = "Purchased " + myTable.rows[2].cells[0].innerHTML + ". " + "Change: R" + (total - price);
		myTable.rows[2].cells[2].innerHTML = stock - 1;
		clearInput();
	}
	messageEl.innerHTML = msg;
}


function buyWater(){
	var stock = Number(myTable.rows[3].cells[2].innerHTML);
	var price = Number(myTable.rows[3].cells[1].innerHTML);
	
	getTotal();
	if (stock == 0) {
		msg = "Item Out of Stock";
	}
	else if (price > total){
		msg = "Insufficient Funds. Please Add More";
	}
	else{
		msg = "Purchased " + myTable.rows[3].cells[0].innerHTML + ". " + "Change: R" + (total - price);
		myTable.rows[3].cells[2].innerHTML = stock - 1;
		clearInput();
	}
	messageEl.innerHTML = msg;
	
}


function buyPepsi(){
	var stock = Number(myTable.rows[4].cells[2].innerHTML);
	var price = Number(myTable.rows[4].cells[1].innerHTML);
	
	getTotal();
	if (stock == 0) {
		msg = "Item Out of Stock";
	}
	else if (price > total){
		msg = "Insufficient Funds. Please Add More";
	}
	else{
		msg = "Purchased " + myTable.rows[4].cells[0].innerHTML + ". " + "Change: R" + (total - price);
		myTable.rows[4].cells[2].innerHTML = stock - 1;
		clearInput();
	}
	messageEl.innerHTML = msg;
	
}