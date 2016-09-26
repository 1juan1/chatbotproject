var date = new Date();
var weekday = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();

var weekDayConversion = {
0: "Sunday",
1: "Monday",
2:"Tuesday",
3:"Wednsday",
4:

}


function askQuestion(){
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + "<br>";

}



 var responses = {
  "Hey how are you?"  : "         did you just assume my gender"


}
