// var todo = [{
//     "9am": "",
//     "10am": "",
//     "11am": "",
//     "12am": "",
//     "1pm": "",
//     "2pm": "",
//     "3pm": "",
//     "4pm": "",
//     "5pm": "",
//     "6pm": "",
//     "7pm": "",
//     "8pm": "",
//     "9pm": "",
// }]

//user types task
var userInput1 = document.getElementById("textCol1");
var saveInput1 = localStorage.getItem("textCol1");



$("button").click(function () {
    
    // var userInput1 = document.getElementById("textCol1");
    var userInputArr = $(this).prev()

    console.log(userInputArr)
    // console.log("userInput1.val()", userInputArr[0].val()
    
    var userInputText = $(userInputArr[0]).val()

    console.log(userInputArr[0].id)

    var id = userInputArr[0].id
    // localStorage.setItem("userInput1", userInput1.value);
    localStorage.setItem(id, userInputText);

    sessionStorage.setItem(id, userInputText);
    
    if (sessionStorage){
        

    }
});

//Sets a Day/Time
var d = new Date();
document.getElementById("currentDay").innerHTML = d;

// console.log(JSON.parse(localStorage.getItem("textCol")))

//get the id you want to append to and get the value of the 

// console.log(userInput1)
//time clock



