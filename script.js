var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var lolcat = document.getElementById('lolcat');
 // defining your default image
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

var updateClock = function() {
	if (time == partyTime){
		image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME...";
	} else if (time == lunchTime) {
	image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
		image="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
		messageText = "Good morning!";
	} else if (time > evening) {
		messageText = "Good Evening!";
	} else {
		messageText = "Good afternoon!";
	}

	timeEvent.innerText=messageText
	lolcat.src = image;
	showCurrentTime();

};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);


var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText="Party Over";
	   // text in the button should read "Party Over"
	   partyTimeButton.style.backgroundColor = "#0A8DAB"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText="Party TIME";
	   // text in the button should read "PARTY TIME!"
	   partyTimeButton.style.backgroundColor = "#222"
      // color of the button should be "#222" (bonus!)
   }
};
partyTimeButton.addEventListener("click", partyEvent);



var wakeUpTimeSelector= document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector=document.getElementById("lunchTimeSelector");
var napTimeSelector=document.getElementById("napTimeSelector");

var wakeupEvent = function(){
	wakeupTime=wakeUpTimeSelector.value;
};

var lunchEvent = function(){
	lunchTime=lunchTimeSelector.value;
};

var napEvent= function(){
	napTime=napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change",wakeupEvent);
lunchTimeSelector.addEventListener("change",lunchEvent);
napTimeSelector.addEventListener("change",napEvent);
