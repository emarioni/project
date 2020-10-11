function display() 
{
  var amount = document.getElementById("amount").value;
  var term = document.getElementById("term").value;
  var interest = document.getElementById("interest").value;
  var payment = document.getElementById("payment").value;

  document.getElementById("amountDisplay").innerHTML = amount;
  document.getElementById("termDisplay").innerHTML = term;
  document.getElementById("interestDisplay").innerHTML = interest;
  document.getElementById("paymentDisplay").innerHTML = payment;
}
