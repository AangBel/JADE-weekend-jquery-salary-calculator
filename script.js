$(document).ready(onReady);

function onReady(){
     // Submit Button Listener
$('.submit-button').on('click', getTheInput);

$('#tableBody').on('click', '#tableRow', deleteRowBtn);
}//end of onREADY

function getTheInput(event){
event.preventDefault();

console.log("in the getTheInput function");  
//-----------------------------------------------Input Variables-------
let firstNameInput = $('#firstName').val();
// console.log('first name variable is working');
$('#firstName').val("");

let lastNameInput = $('#lastName').val();
// console.log('last name variable is working');
$('#lastName').val("");

let idInputVar = $('#idInput').val();
// console.log('Id variable is working');
$('#idInput').val("");

let titleInputVar = $('#titleInput').val();
// console.log('title variable is working');
$('#titleInput').val("");

let salaryInputVar = $('#annualSalaryInput').val();
// console.log('salary variable is working');
$('#annualSalaryInput').val("");

//Takes input and stores it
//-----------------------------------------------Input Variables-------

$('#tableBody').append(`<tr id="tableRow"><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInputVar}</td><td>${titleInputVar}</td><td id="moneyInput">${salaryInputVar}</td><td><button>Delete</button></td></tr>`);
//gonna try to target the data box for salary by giving it an id and using this in a function to add up costs...
}//end of get the input function

function deleteRowBtn(){
     (this).remove();
}//end of delete row btn 

let moneyArray = [];

function calculateMonthlyCosts(){
     let money = $('#moneyInput').val();
     moneyArray.push(money);
     console.log('this would be the money array push under calc monthly costs', moneyArray);
     //sum += ---money???---

}//end of calculateMonthlyCosts


//stop the page from reloading on submit❎
//the inputs are saved somewhere- in this case a variable...❎
//i want the inputs to now appear in the table❎
//i do this by tying those new variables to the jquery appending stuff to the html table 
//made delete button ❎
//make delete button delete row ❎
//make delete button delete the correct row!❎
//store the information to calculate monthly costs,
//calculate monthly costs 
//append this to the to DOM.
//If the total monthly cost exceeds $20,000
//add a red background color to the total monthly cost.


