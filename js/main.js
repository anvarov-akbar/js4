var elForm = document.querySelector(".form");
var formInput = Number(document.querySelector(".form__input"));
var personResult = document.querySelector(".person__result");
var bikeResult= document.querySelector(".bike__result");
var carResult = document.querySelector(".car__result");
var planeResult = document.querySelector(".plane__result");



var speedPerson = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;

function time(num) {
    var hour = Math.floor(num);
    var minute = Math.floor((num - hour) * 60);
  
    if (hour > 0 && minute > 0) {
      return `${hour} soat ${minute} minut`;
    } else if (hour > 0) {
      return `${hour} soat`;
    } else if (minute > 0) {
      return `${minute} minut`;
    } else {
      return "";
    }
  }


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    
    var formInput = Number(document.querySelector(".form__input").value);
    
    formInput.value = null;
    
    var resultPerson = time(formInput / speedPerson);
    var resultBike = time(formInput / speedBike);
    var resultCar= time(formInput / speedCar);
    var resultPlane = time(formInput / speedPlane);
    
    personResult.textContent = resultPerson;
    bikeResult.textContent = resultBike;
    carResult.textContent = resultCar;
    planeResult.textContent = resultPlane;
});
