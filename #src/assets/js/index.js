"use strict";

document.addEventListener('DOMContentLoaded', function(){
   let navList = document.querySelector('.nav__list');

   console.log(navList);
   
   document.querySelector('.menu-icon-wrapper').onclick = function(){
      document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  }

  document.querySelector('.menu-icon-wrapper').addEventListener('click', () => {
      navList.classList.toggle('active');
  });
});

 