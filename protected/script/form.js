'use strict';

var panda_eyes = document.querySelector('.eyes');
var panda_mouth = document.querySelector('.mouth');
var panda_hands = document.querySelector('.hands');
var inputbox = document.querySelectorAll('.inputbox');
var hand = document.querySelectorAll('.hand');
var inputerrorBox = document.querySelectorAll('.inputerror');
var inputerror = document.querySelectorAll('.error');

var username = document.getElementById('fullname');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password_visibility = document.getElementById('password-visibility');

window.addEventListener('click', () =>{
    openEye();
});

username.addEventListener('input', () =>{
    var myErrorMessage = "username is too short add few more character !!!";
    var currentValue = username.value;
    if(currentValue.length < 10){
        invalidInput(username, 0, myErrorMessage);
    }
    if(currentValue.length > 10){
        validInput(username, 0);
    }

});

password.addEventListener('input', () =>{
    var myErrorMessage = "password less than 15 characters not allow !!!";
    var currentValue = password.value;
    if(currentValue.length < 15){
        closeEye();
        invalidInput(password, 2, myErrorMessage);
    }
    if(currentValue.length > 15){
        validInput(password, 2);
    }

});

var couter = 0;
password_visibility.addEventListener('click', () =>{
    couter++;
    if(couter % 2 !== 0){
        passwordIsvisible();
    }
    if(couter % 2 == 0){
        passwordIsNotvisible();
    }
})

function validInput (inputName, errorIndex){
    inputName.style.color='#00ff00';
    inputName.style.borderBottom='1px solid #00ff00';
    inputerrorBox[errorIndex].style.display='none';
}

function invalidInput (inputName, errorIndex, errorMessage){
    inputName.style.color='red';
    inputName.style.borderBottom='1px solid red';
    inputerrorBox[errorIndex].style.display='block';
    inputerror[errorIndex].textContent=`${errorMessage}`;
}

function closeEye () {
    panda_hands.classList.add('cover');
    panda_eyes.classList.add('invalid');
    panda_mouth.classList.remove('smile');
}

function openEye () {
    panda_hands.classList.remove('cover');
    panda_eyes.classList.add('valid');
    panda_mouth.classList.add('smile');
}

function passwordIsvisible(){
    password_visibility.className='fa-solid fa-eye';
    password.type='text';
}

function passwordIsNotvisible(){
    password_visibility.className='fa-solid fa-eye-slash';
    password.type='password';
}