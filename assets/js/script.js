/* Author: Aniket*/
// Submit Button assigned a click Function
var Button = document.querySelector('#submit');
  Button.addEventListener('click',function(e){
    e.preventDefault();
    getData();
  });

// reset button assigned a click function 
var Reset = document.querySelector('#cancel');
Reset.addEventListener('click',reset);

// get form element
var form = document.querySelector('form');

// if every input is empty make error gone
var inputs = document.querySelectorAll('.form-group input');
  inputs.forEach(function(input) {
    input.addEventListener("keyup", function(){
      if(input.value == ""){
        var span = input.nextElementSibling;
        if(span.classList.contains('visible')) {
        span.classList.remove('visible');
        return false;
        }
      }
  });
});

// Declaration of getData function
//  retrieving form data on submit
function getData() {
  // Selecting Every Input field
  var inputs = {
    firstName : document.querySelector('#firstName'),
    lastName : document.querySelector('#lastName'),
    email : document.querySelector('#email'),
    phoneNo : document.querySelector('#phoneNo'),
    password : document.querySelector('#password'),
    confirmPassword : document.querySelector('#confirmPassword'), 
  };
  // Retrieving Values of every input field
  var values = {
    fname : firstName.value,
    lname : lastName.value,
    emailId : email.value,
    phoneNumber : phoneNo.value,
    passwordVal : password.value,
    confirmPasswordVal : confirmPassword.value
  };
  // Calling Validation function 
  Validate(inputs,values);
}
// Declaration of error Function
  function error(spanError,inputfield) {
    var span = inputfield.nextElementSibling;
   span.innerText = spanError;
    if(span.classList.contains('visible')) {
    span.classList.remove('visible');
    return false;
    }
  span.classList.add('visible');
  }
// Declaration of Validation Function
  function Validate(inputs,values) {
    // if both password fields doesn't match
    if(values.passwordVal !== values.confirmPasswordVal) {
      error("Password & Confirm Password Field must match.",inputs.confirmPassword);
      return false;
    } 
    // creating Regex Object
  var RegObject = [
    fnameRegex = /^[A-Za-z]{2,20}$/i,
    lnameRegex = /^[A-Za-z]{2,20}$/i,
    emailIdRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,4})?$/,
    phoneNoRegex = /^\d{10}$/,
    passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/
  ];
  // Calling Validity Fucntion for every inputs
  var firstNamevalidity = checkFirstName(values.fname,RegObject,inputs.firstName);
  var lastNameValidity =  checkLastName(values.lname,RegObject,inputs.lastName);
  var emailValidity =  checkEmail(values.emailId,RegObject,inputs.email);
  var phoneNoValidity =  checkPhoneNo(values.phoneNumber,RegObject,inputs.phoneNo);
  var passwordValidity = checkPassword(values.passwordVal,RegObject,inputs.password);
  // if form submitted successfully
  if(firstNamevalidity && lastNameValidity && emailValidity && phoneNoValidity && passwordValidity) {
    var inputs = document.querySelectorAll('.form-group input');
    inputs.forEach(function(input) {
        if(input.value == ""){
          var span = input.nextElementSibling;
        span.style.display = "none";
        }
    });
    alert("your Form has been submitted Successfully");
    form.reset();
  }
}

// Validation function of every inputs
function checkFirstName(fname,RegObject,firstName) {
  var isValid = RegObject[0].test(fname);
  if(!isValid) {
    error("FirstName Must Contains minimum 2 characters and only Alphabets.",firstName);
  } else { return true; }
}
function checkLastName(lname,RegObject,lastName) {
  var isValid = RegObject[1].test(lname);
  if(!isValid) {
    error("LastName Must Contains minimum 2 characters and only Alphabets.",lastName);
  } else { return true; }
}
function checkEmail(emailId,RegObject,email) {
  var isValid = RegObject[2].test(emailId);
  if(!isValid) {
    error("Please Enter valid Email Id.",email);
  } else { return true; }
}
function checkPhoneNo(phoneNumber,RegObject,phoneNo) {
  var isValid = RegObject[3].test(phoneNumber);
  if(!isValid) {
    error("Please Enter Valid Phone Number.",phoneNo);
  } else { return true; }
}
function checkPassword(passwordVal,RegObject,password) {
  var isValid = RegObject[4].test(passwordVal);
  if(!isValid) {
    error("Password must Contain atleast one Special Character, an uppercase letter and a Number.",password);
  } else { return true; }
}

// Declaration of Reset Function
function reset(){
  for(var everyChild in form.children) {
    if(everyChild === "length") { break; }
    var span = form.children[everyChild].children[2];
   if(span.classList.contains('visible')) {
    span.classList.remove('visible');
    return false;
    }
  }
};