var date = new Date();
var weekday = date.getUTCDay();
var month = date.getMonth();
var year = date.getFullYear();
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();

function enter(event) {
  var x = event.keyCode;
  console.log(x);
  if (x == 13){
    askQuestion();
  }

}


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
var responses = {
 " how are you"  : "         did you just assume my gender",
 "how old are you" : "ugh i have a   boyfriend",
 "what is your age " : "i havvvvve no age ",

"do u like chocolate": "yea i like dark chocolate",

"what day is it": "The day today is " + weekDayConversion[weekday],
"what month are we in" : "we are in " + monthConversion[month],
"what year is it": "i think it is " + [year],
"what date is it " : "the day is " + [day] + "of " + " "+ monthConversion[month],
"what time is it" : "its currently" + " " + [hour] + ":" + [minute],
"hello" : "hi my name is cortana hernadez the third"
}
var fallback = ["thats not what you asked before", "my creator doesnt allow me to answer that question", "what", "Sorry I dont know you or what you are saying"];






function askQuestion(){
  var input = document.getElementById("input").value;
  console.log(input);
  input = input.toLowerCase();
  var giveresponse = responses[input]


  if  (responses[input] == undefined) {
    var rand = Math.floor((Math.random() * fallback.length));
     var fallbackAnswer = fallback[rand];
       document.getElementById("chat-area").innerHTML += input + ": " + fallbackAnswer + "<br>";
  }
  else {
    console.log("in the else statement");
    console.log("giveresponse is " + giveresponse);
    document.getElementById("chat-area").innerHTML += input + ": " + giveresponse + "<br>";
  }

}
