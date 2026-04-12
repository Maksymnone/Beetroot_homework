"use strict";

document.getElementById("hamb-btn").onclick = function () {
  this.classList.toggle("is-active");
  document.body.classList.toggle("show-mobile");
};

document.querySelector(".overlay").onclick = function () {
  document.getElementById("hamb-btn").classList.remove("is-active");
  document.body.classList.remove("show-mobile");
};

document.querySelector(".logo-wrap").onclick = function () {
  document.getElementById("hamb-btn").classList.remove("is-active");
  document.body.classList.remove("show-mobile");
};