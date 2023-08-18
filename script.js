$(document).ready(onReady);

function onReady(){
     // Submit Button Listener
$('.submit-button').on('click', getTheInput);

}//end of onREADY

function getTheInput(event){

event.preventDefault();
console.log("in the getTheInput function");  
//Takes input and stores it
//-----------------------------------------------Input Variables-------
let firstNameInput = $('firstName').val();
console.log('first name variable is working');

let lastNameInput = $('lastName').val();
console.log('last name variable is working');

let idInputVar = $('idInput').val();
console.log('Id variable is working');

let titleInputVar = $('titleInput').val();
console.log('title variable is working');

let salaryInputVar = $('annualSalaryInput').val();
console.log('salary variable is working');

}//end of get the input function
//-----------------------------------------------Input Variables-------




//stop the page from reloading on submit❎
//the inputs are saved somewhere- in this case a variable...❎
//grab the inputs