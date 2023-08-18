$(document).ready(onReady);

function onReady(){
     // Submit Button Listener
$('.submit-button').on('click', getTheInput);

}//end of onREADY

function getTheInput(event){

}//end of get the input function

event.preventDefault();
console.log("in the getTheInput function");
  //Takes input and stores it