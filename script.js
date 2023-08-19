$(document).ready(onReady);

 // function to format number with Intl.NumberFormat() method.
// function formatNumberWithDollar() {
//      let formatting_options = {
//      style: 'currency',
//      currency: 'USD',
//      minimumFractionDigits: 3,
//      }
     // users can see how locale passed as a parameter.
//      let dollarString = new Intl.NumberFormat("en-US", formatting_options);
//      let finalString = dollarString.format(5323.35445);
//      let result = document.getElementById("result");
//      result.innerHTML = finalString;
// }

// let formatting_options = {
//      style: 'currency',
//      currency: 'USD',
//      minimumFractionDigits: 2,
// }
// let salaryFormatted = salarySum.toLocaleString("en-US",formatting_options);

// minimumFractionDigits: 3 

// let salaryFormatted = number.toLocaleString("en-US",formatting_options);

// let salaryFormatted = number.toLocaleString("en-US",formatNumberWithDollar);

//one google suggested using string concatenation for the $ ...

let formatting_options = {
     style: 'currency',
     currency: 'USD',
     minimumFractionDigits: 2,
}

//----------------------------------------------- ON READY-------
function onReady(){
     // Submit Button Listener
$('.submit-button').on('click', getTheInput);

$('#tableBody').on('click', '#deleteBtn', deleteRowBtn);
}//end of onREADY
//-----------------------------------------------END OF ON READY-------

let moneyArray = [];
// console.log(moneyArray);

let currentAnnualCost= 0;

let sum = 0;

//--------------------------------------------------------------------------
function getTheInput(event){
event.preventDefault();

console.log("in the getTheInput function");  

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

// let salaryInputFormattedForDom = salaryInputVar;
// console.log(salaryInputFormattedForDom);

$('#annualSalaryInput').val("");




let salaryInputFormatted = salaryInputVar.toLocaleString("en-US",formatting_options);
console.log('this is the salary input formatted', salaryInputFormatted);
console.log(formatting_options);

$('#tableBody').append(`<tr id="tableRow"><td>${firstNameInput}</td><td>${lastNameInput}</td><td>${idInputVar}</td><td>${titleInputVar}</td><td id="moneyInput">${salaryInputFormatted}</td><td><button id="deleteBtn">Delete</button></td></tr>`);
//gonna try to target the data box for salary by giving it an id and using this in a function to add up costs...

// let money = $('#moneyInput').val();
// console.log(money);

moneyArray.push(Number(salaryInputVar));
console.log('this would be the money array push under calc monthly costs', moneyArray);

const salarySum = moneyArray.reduce((accumulator, currentValue)=> {
     return (accumulator + currentValue);
}, 0);

console.log(salarySum);



// for (let i = 0; i < moneyArray.length; i++){
//      console.log('this is the for loop');
//      sum += moneyArray[i];
//      console.log(sum);
// };


let salaryFormatted = salarySum.toLocaleString("en-US",formatting_options);
$('#totalMonthlyOnDom').text(`Total Monthly: ${salaryFormatted}`);




}//end of get the input function

function deleteRowBtn(){
     $('#tableRow').remove();
     // (this).remove();
}//end of delete row btn 



 // console.log(moneyArray);
// let sum = 0;

     // for (let i = 0; i > moneyArray.length; i++){
     //      console.log('this is the for loop');
     //      sum += moneyArray[i];
     // };


// let currentAnnualCost= 0;

// let money = $('#moneyInput').val();
// console.log(money);

// const inputSalary = Number(money).val();
// console.log(inputSalary);
// let moneyArray = [];
// console.log(moneyArray);


// function calculateMonthlyCosts(){
//      let money = $('#moneyInput').val();
//      console.log(money);

//      moneyArray.push(money);
//      console.log('this would be the money array push under calc monthly costs', moneyArray);
//      //sum += ---money???---
//      //let sum = 0;
//      // for (let i = 0; i > moneyArray.length; i++){
//      //      console.log('this is the for loop');

//      } 
     ///

// }//end of calculateMonthlyCosts

// calculateMonthlyCosts();

//stop the page from reloading on submit✅
//the inputs are saved somewhere- in this case a variable...✅
//i want the inputs to now appear in the table✅
//i do this by tying those new variables to the jquery appending stuff to the html table 
//made delete button ✅
//make delete button delete row ✅
//make delete button delete the correct row!✅

//store the information to calculate monthly costs,✅
//calculate monthly costs ✅
//append this to the to DOM. ✅
//have it take the dollar sign too....✅
//or do i just tack the number in the table data and in the monthly text...
//now how to integrate the currency... so i can have the formatting for the cents and the comma...


//If the total monthly cost exceeds $20,000
//add a red background color to the total monthly cost.

//-----------------


