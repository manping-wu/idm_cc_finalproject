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

number of clicks to calculate the time wasted



Background and surprises
Opening---> try not to click on the notifications
Ending --->  you could had read a book and a half (ten hours to read a 300 page book) 
(36,000 minutes for one book) --> convert to percentage when explicit the time

If they dont touch anynotifications- You sh

Spectrum of feelings
Starts netural (white-light grey)
the longer the notifications don't touch (the black eerieness will arise)
everytime the notifications are clicked:
(the colorfulness will replace or randomly generates) then neturalness will fades in




*/


//---> global variables

//Healthbar&Timer variables

/*

It will continuously count down by the second

decimal point counts down by minutes
counts by 1 second is 1 minute


960 minutes = 16 hours in a day, as the remaining hours is to sleep
maximum length of time at 960

current time should be divided by the max time

connecting the healthbar and the timer

*/
var maxHealth = 500;
var healthLength = 500;

var s = second();
// intial timer at what seconds should it be
// 57,600 seconds is 960


//assets loading
var email;


function preload (){

	// bungee = loadFont('asset/fonts/Bungee-Regular.ttf');


	email = loadAnimation ('asset/email/email_01.png', 'asset/email/email_20.png');

}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

}

function draw() {



//healthbar
textSize (15);
//textFont(bungee);
text ('Time Remaining', 50,40);

var countDown = (s,0,500,57600,0);
//length of the timer and the countdown by seconds

var healthInProcess = (countdown/maxHealth)*healthLength;
//map out the timer into the length of the rect 




stroke(2);
rect(50,50,countDown,30);

//how do automatically do a countdown

animation (email, windowWidth/2, windowHeight/2);

if ( healthInProcess <=380)
		
		{

			fill(0,255,0);	

		} 
	
		else if (healthInProcess <=480)
	
		{

	fill(100,255,0);

		} 
	
	else
			
		{ 
			
	fill(0,255,0); 
}


}


