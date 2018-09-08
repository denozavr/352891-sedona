'use strict';

var link = document.querySelector(".button-show-form");
var searchForm = document.querySelector(".search-hotel-form");

var dateArrival = searchForm.querySelector(".search-form-arrival .search-text-input");
var dateDeparture = searchForm.querySelector(".search-form-departure .search-text-input");
var amountAdult = searchForm.querySelector("#number-adults");
var amountChildren = searchForm.querySelector("#number-children");

var isStorageSupport = true;
var storageDateArrival = "";

try {
 storageDateArrival = localStorage.getItem('dateArrival');
  var storageDateDeparture = localStorage.getItem('dateDeparture');
  var storageAmountAdults = localStorage.getItem('amountAdult');
  var storageAmountChildern = localStorage.getItem('amountChild');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click",function(event){
	event.preventDefault();
	if(searchForm.classList.contains("modal-form-show")) {
		searchForm.classList.remove("modal-form-show");
		searchForm.classList.add("modal-form-hide");
	}
	else {
		searchForm.classList.remove("modal-form-hide");
		searchForm.classList.add("modal-form-show");
	};
	dateArrival.focus();
});


searchForm.addEventListener("submit",function(event) {
  if (!dateArrival.value || !dateDeparture.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('dateArrival', dateArrival.value);
      localStorage.setItem('dateDeparture', dateDeparture.value);
      localStorage.setItem('amountAdult', amountAdult.value);
      localStorage.setItem('amountChildren', amountChildren.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) { // ESC key
    if (searchForm.classList.contains('modal-form-show')) {
      searchForm.classList.remove("modal-form-show");
      searchForm.classList.add("modal-form-hide");
    }
  }
});



