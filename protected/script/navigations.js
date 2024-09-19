'use strict';

var aside = document.querySelector('.aside');
var bar = document.querySelector('.fa-bars');
var xmark = document.querySelector('.fa-xmark');
var bottom_nav = document.querySelector('.bottom-nav');

xmark.style.display='none';

bar.addEventListener('click', ()=>{
    opensidebar();
});

xmark.addEventListener('click', ()=>{
    closesidebar();
});

function opensidebar(){
    bar.style.display='none';
    xmark.style.display='block';
    aside.classList.add('open');
    bottom_nav.classList.add('close');
}

function closesidebar(){
    bar.style.display='block';
    xmark.style.display='none';
    aside.classList.remove('open');
    bottom_nav.classList.remove('close');
}
