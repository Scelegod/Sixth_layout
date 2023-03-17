"use strict";
window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.closest(".buttons__contact")) {
    document.querySelector(".contact-modal").classList.add("active");
  }
  if (e.target.closest(".container__cancel__icons")) {
    document.querySelector(".contact-modal").classList.remove("active");
  }
});
