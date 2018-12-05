/*

Time as a health bar
8 social media accounts
the user doesnt know what is the purpose of the game until the health bar ends
each notification pops up reveals a surpise 
the more notifications it gets the more surprises it gets
the more time the user leaves the notifications the user will have an eerie aura
at the end it will reveal the purpose of the game.


Parts
Time: 16 hours a day- the time will slowly go down

Random notifications number
1Instagram: 2-35 notifications and pop up twice
2Facetime: 1-2 calls and pop up twice
3iMessages 2-128 messages
4Facebook: 10-30 notifications
5SnapChat: 5-10 snaps and pop up twice
6Email: 5-60 emails
7Twitter: 4-10 notifications and pop up twice
8Slack: 3-40 notifications 

When Clicked
Insta- 32 minutes 
Facetime-5-10 minutes per call
iMessage- 1 minute per notification
Facebook- 32 minutes
SnapChat- 30 minutes
Email- 1 minute per email
Twitter- 6 minutes
Slack- 126.72 minutes

number of clicks (from the notifications to add up) to calculate the time wasted




Background and surprises
Opening---> try not to click on the notifications
Ending --->  you could had read a book and a half (ten hours to read a 300 page book) 
(36,000 minutes for one book) --> convert to percentage when explicit the time

If they dont touch any notifications- don't play this game, go outside or read a book

Spectrum of feelings
-drawing machine algortithm: reference to aura like perlin noise or sin/cos 
Starts netural (white-light grey)
the longer the notifications don't touch (the black eerieness will arise)
everytime the notifications are clicked:
(the colorfulness will replace or randomly generates) then neturalness will fades in




*/


//---> global variables

//Healthbar&Timer variables


/*It will continuously count down by the second

decimal point counts down by minutes
counts by 1 second is 1 minute


960 minutes = 16 hours in a day, as the remaining hours is to sleep
maximum length of time at 960

current time should be divided by the max time

connecting the healthbar and the timer

intial timer at what seconds should it be
57,600 seconds is 960
*/


var maxHealth = 500; //max length of the timer/health bar 
var healthLength = 500; //full length of the timer/health bar 
var countDown; // countdown variable
var consumedTime =0; //intial at 0
var s ; //to map out the variable between real time countdown and the length of the timer/health bars

//Notification Variable 
var popUp;
var email;
var insta;
var snapchat;
var facetime;
var facebook;
var imessage;
var slack;
var twitter;




//phrase 1
//goal 1: figure out the alogrithm to generate notifications and when clicked on it will indepdently decrease the time
//goal 2: how to add up the times
//make the backgrounds for the beginning and ending

//phrase 2 
//add music 
//add background effects




//----->Preload Function
function preload (){



	//notification image upload
	email = loadAnimation ('asset/email/email_01.png','email_20.png')
	email.looping = false;

	insta = loadAnimation ('asset/instagram_01.png', 'asset/instagram_013.png')
	insta.looping = false;
	
	snapchat = loadAnimation ('snapchat_01.png', 'snapchat_09.png')
	snapchat.looping = false;
	
	facebook = loadAnimation ('facebook_01.png', 'facebook_07.png')
	facebook.looping = false;
	
	facetime = loadAnimation ('facetime_01.png', 'facetime_05.png')
	facetime.looping = false;
	
	imessage = loadAnimation ('imessage_01.png', 'imessage_05.png')
	imessage.looping = false;
	
	slack = loadAnimation ('slack_01.png', 'slack_05.png')
	slack.looping = false;
	
	twitter = loadAnimation ('twitter_01.png', 'twitter_04.png')
	twitter.looping = false;


}

//----->Setup Function
function setup() {

	createCanvas(windowWidth, windowHeight); // size of the window
	background(255); //background color


	//arrays for the values for the notifications
	var slide = [19, 12, 8, 6, 4, 4, 4, 3];
	var iconX = [1200, 200, 400, 500, 900, 900, 100, 800]; 
	var iconY = [500, 200, 400, 100, 300, 600, 500, 100];
	var icon = [email, insta, snapchat, facebook, facetime, imessage, slack, twitter];



	for (var i = 0; i<slide.length[i]; i++){

		popUp = new Notification (icon[i],slide[i],iconX[i], iconY[i])


	}



}


//----->MousePressed Function
function mousePressed(){
	consumedTime-=10*60
}


//----->Draw Function
function draw() {
	background(255)

	healthTimer(); //health timer function added



}


//-----> Custom Function 
//-----> Health Timer
function healthTimer(){



	// variable about having the time count down in real time
	// (hour (24) subtract 10 to get to 14 hours) multiply 60 to get minutes then multiply 60 to get seconds follow by minutes and seconds
	s= (hour()-10)*60*60+minute()*60+second();
	
	// if the hour is less than 0, the variable will be 0
	if (hour()-10<0){
		s=0
		ending();
		//ending display
		//how to connect notifications class with the timer


	}

	//s variable will be affected by the time consumed going down
	s-=consumedTime
	// s=frameCount*100
	console.log(s)

	//healthbar

	//TEXT 
	textSize (15);
	text ('Time Remaining', 50,40);



	//map out the full 57,600 seconds into the full length of the healthbar
	var countDown = map(s,57600,0,0,500);


	//countDown over the maxHealth multiply by the lenght of the healthbar
	var healthInProcess = (countDown/maxHealth)*healthLength;



	//the boundary of the timer 
	stroke(2);
	noFill();
	rect(50,50,500,30);


	//the inside of the timer
	fill(0,255,0);
	rect(50,50,countDown,30);





}


function beginning(){

	
	background(255,195,254)
	textSize(20)
	text ('Try Not to Click on the Notifications', windowWidth/2, windowHeight/2)


}

function mouseClicked(){


		beginning() == false
	

}

function ending (){

	var conclusion = consumedTime 'minutes could had been spent on reading books instead of social media'
 	background(255,195,254)
	textSize(20)
	text(conclusion,windowWidth/2,windowHeight/2)


}


