/* Author: Aniket*/


var Button = document.querySelector('#submit');
  Button.addEventListener('click',function(e){
    e.preventDefault();
    getData();
  });

function getData() {
  var firstname = document.querySelector('#firstName').value;
  var lastName = document.querySelector('#lastName').value;
  var email = document.querySelector('#email').value;
  var phoneNo = document.querySelector('#phoneNo').value;
  var password = document.querySelector('#password').value;
  var confirmPassword = document.querySelector('#confirmPassword').value;
  var span = document.createElement('span');
  var inputs = document.querySelectorAll('.form-group input');
  var inputArray = Array.from(inputs);
  var formGroup = document.querySelectorAll('.form-group');
  var count = 0; 
  Validate(firstname,lastName,email,phoneNo,password,confirmPassword,inputArray);
}

  function Validate(firstname,lastName,email,phoneNo,password,confirmPassword,inputArray) {
  var makeAnAlert = false;
  inputArray.forEach(function(input) {
      var inputValue = input.value;
      if( inputValue === '' || inputValue === null) {

      }
    });
   if(password !== confirmPassword) {

  }
  var RegObject = [
    firstname = /^[A-Za-z]{2,20}$/i,
    lastname = /^[A-Za-z]{2,20}$/i,
    email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,4})?$/,
    phone = /^\d{10}$/,
    password = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})$/
  ];
  var istrue = [];
  var i = 0;
  inputArray.forEach(function(input) {
    istrue.push(RegObject[i].test(input));
    var validate = istrue[istrue.length-1];
    if( validate != true) {
      error();
    }
    i++;
  });
  function error(specificError) {
    var alert = makeAnAlert; 

  }
}
