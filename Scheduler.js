var todo = [{
    "9am": "",
    "10am": "",
    "11am": "",
    "12am": "",
    "1pm": "",
    "2pm": "",
    "3pm": "",
    "4pm": "",
    "5pm": "",
    "6pm": "",
    "7pm": "",
    "8pm": "",
    "9pm": "",
}]

//user types task
var userInput1 = document.getElementById("textCol1");
var saveInput1 = localStorage.getItem("textCol1");


//clicks save and input gets saved to storage


$("button").click(function () {
    $(this).click();
    // var userInput1 = document.getElementById("textCol1");
    var userInput1 = $("#textCol1")
    console.log("userInput1.val()", userInput1.val())
    // localStorage.setItem("userInput1", userInput1.value);
    localStorage.setItem("userInput1", userInput1.val());
  
});

  
    if (localStorage.getItem("textCol1") || JSON.parse(localStorage.getItem("textCol")).length === 0) {
    $window.localStorage.setItem("textCol1", JSON.stringify($scope.textCol1));}
    




console.log(userInput1)
//time clock



