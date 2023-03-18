"use strict";
window.addEventListener("click", function (e) {
  //Модальное окно "Поделиться"
  if (document.querySelector('#share-modal').classList.contains('active')) {
    if(!e.target.closest('.share-modal__container__body')){
      document.querySelector(".share-modal").classList.remove("active");
    }
  }else{
    if (e.target.closest(".action__impart")) {
      document.querySelector(".share-modal").classList.add("active");
    }
  }

  if (e.target.closest(".container__cancel__icons")) {
    document.querySelector(".share-modal").classList.remove("active");
  }
});
