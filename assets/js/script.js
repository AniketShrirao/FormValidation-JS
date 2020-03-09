// /* Author: Aniket*/
// // Selecting Every Input field
var inputs = [
  firstName = document.querySelector('#firstName'),
  lastName = document.querySelector('#lastName'),
  email = document.querySelector('#email'),
  phoneNo = document.querySelector('#phoneNo'),
  password = document.querySelector('#password'),
  confirmPassword = document.querySelector('#confirmPassword'), 
];
// Retrieving Values of every input field
var values = {
  fname : firstName.value,
  lname : lastName.value,
  emailId : email.value,
  phoneNumber : phoneNo.value,
  passwordVal : password.value,
  confirmPasswordVal : confirmPassword.value
};
// Regex for every input fields
var Regex = [
  firstNameRegex = /([a-zA-Z]){2,20}$/,
  lastNameRegex = /([a-zA-Z]){2,20}$/,
  emailRegex = /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]+)$/,
  phoneNoRegex = /^\d{10}$/,
  passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/,
  confirmPasswordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/
];

// selecting form element
var form = document.querySelector('form');

// Submit Button assigned a click Function
var Button = document.querySelector('#submit');
  Button.addEventListener('click',function(e){
    e.preventDefault();
    validateOnSubmit(e);
  });

// reset button assigned a click function 
var Reset = document.querySelector('#cancel');
Reset.addEventListener('click',reset);

// Keyup event on each input to check if it is valid
inputs.forEach(function (input) {
  var index = inputs.indexOf(input);
  if (input.id !== "confirmPassword") {
    input.addEventListener("keyup", function () {
      validate(Regex[index], this);
    });
  }
  else {
    //  special keyup event on confirm password to check if it matches with password field
    input.addEventListener("keyup", function (e) {
      if (inputs[4].value === inputs[5].value) {
        validate(Regex[index], this);
      } else { 
        input.nextElementSibling.classList = "helperMessage error"; 
        errors(input,input.nextElementSibling);
      }
    });
  }
});

// Defiination of Validate Function on Keyup
function validate(RegularExpression, input) {
  if(input.value == ""){
    input.nextElementSibling.classList = "helperMessage";
  }
  else if (RegularExpression.test(input.value)) {
    input.nextElementSibling.classList = "helperMessage success";
    input.nextElementSibling.innerText = "yay ! you are Correct!";
  } else {
    input.nextElementSibling.classList = "helperMessage error";
    errors(input,input.nextElementSibling);
  }
}

// Defiination of Validate Function on submitButton
function validateOnSubmit(e) {
  var allEmpty = false;
  inputs.forEach(function(input){
    if(input.value == ""){
      allEmpty = true;
    };
  });
  // If every fields are empty show error
  if(allEmpty) {
    e.preventDefault();
    inputs.forEach(function(input){
      if(input.value == ""){
        input.nextElementSibling.classList.remove('none');
        input.nextElementSibling.classList.add('error');
        errors(input,input.nextElementSibling);
      };
    });
    return false;
  }
  // If every fields are invalid show errors message
  var helperSpans = document.querySelectorAll('.helperMessage');
  var allCorrect = false;
  helperSpans.forEach(function(span){
    var AllErrorify = span.classList.contains('error');
    if(!AllErrorify) {
     allCorrect = true;
     span.classList.remove('success');
    }
  });
    // If every fields are correct alert success message
  if(allCorrect) {
    form.reset();
    alert("your Data is submitted successfully");
  }
}

// Error function Declaration for every set of errors
function errors(input,span) {
  if(input.value == "") {
    span.innerText = "Please fill the empty field!";  
    return;   
  }
switch (input.id) {
  case "firstName":
    span.innerText = "Must Contains Only Alphabets.";   
    break;
  case  "lastName":
    span.innerText = "Must Contains Only Alphabets.";   
    break;
  case "email":
    span.innerText = "Entered Email is Invalid.";   
    break;
  case "phoneNo":
    span.innerText = "Must Contains Only Digits and minimum of 10.";   
    break;
  case "password":
    span.innerText = "Must Contains One Alphabet(upperCase & LowerCase each) and a Number and Special Character.";   
    break;
  case "confirmPassword":
    span.innerText = "confirm password & password fields must match";   
    break;
  default:
    break;
  }
}

// Declaration of Reset Function make whole form reset
function reset(){
  inputs.forEach(function(input){
    var HelperClass = input.nextElementSibling.classList.contains("helperMessage");
    var successClass = input.nextElementSibling.classList.contains("success");
    var errorClass = input.nextElementSibling.classList.contains("error");
    if(input.value == ""){
      input.nextElementSibling.classList = "helperMessage none";
      input.nextElementSibling.innerText = "";
    } else if(HelperClass || successClass || errorClass ) {
      input.nextElementSibling.classList = "helperMessage  none";
      input.nextElementSibling.innerText = "";
    };
  });
};
