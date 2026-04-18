"use strict";

document.querySelector(".hamburger").onclick = function () {
  this.classList.add("is-active");
  document.body.classList.add('show');
};

document.querySelector('.overlay').onclick = function () {
  document.querySelector(".hamburger").classList.remove('is-active');
  document.body.classList.remove("show");
};