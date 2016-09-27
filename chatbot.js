var date = new Date();
var weekday = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();

var weekDayConversion  = {
0: "Sunday",
1: "Monday",
2:"Tuesday",
3:"Wednsday",
4:"Thursday",
5:"Friday",
6:"Saturday",


}

var monthConversion = {
  0: "January",
  1: "Febuary",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}


function askQuestion(){
  var input = document.getElementById("input").value;
  var giveresponse = responses[input]
  document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + "<br>";

}



 var responses = {
  "Hey how are you?"  : "         did you just assume my gender",
  "how old are you" : "ugh i have a   boyfriend",
  "what is your age " : "i havvvvve no age ",

"do u like chocolate": "yea i like dark chocolate",
"what is the date": "The day today is " + weekDayConversion[weekday],
"what month are we in" : "we are in " + monthConversion[month],
"what year is it": "i think it is " + [year]

}
