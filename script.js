"use strict";

//Modal
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

//Popover Trigger
const popoverTriggerList = [].slice.call(
  document.querySelectorAll("[data-bs-toggle='popover']")
);
const popoverList = popoverTriggerList.map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
