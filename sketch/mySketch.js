//---> Concept

/*
Title: Social Detox

Concept:
This piece is about people's social media addiction regarding notifications. This project is both an interactive 
and time based piece, where users test their limits by not clicking on the notifications in real time.
It's a persuasive piece to encourage users not to rely on the notifications to gain temporary satifisation, 
but using their time wisely to do something productive. 


*/




//----> Blueprint of the Final Project

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
var lastSecond = 0 //down to the last second
var secondPassCount = 0 // the next coming second


//Notification Variable 
var popUps = [];
var email;
var insta;
var snapchat;
var facetime;
var facebook;
var imessage;
var slack;
var twitter;

//mode variable
var mode = 1; //intial value of the mode is 1 and will switch between them.

//Emoji Variable 
var sillyFace;
var tongueOut;

//font variables
var rubikR //rubik regular
var rubikB //rubik bold


//----->Preload Function
function preload (){

	//font preload
	rubikR = loadFont ('asset/fonts/Rubik-Regular.ttf')
	rubikB = loadFont ('asset/fonts/Rubik-Bold.ttf')


	//notification image upload
	email = loadAnimation ('asset/email/email_01.png','asset/email/email_20.png')

	insta = loadAnimation ('asset/instagram/instagram_01.png', 'asset/instagram/instagram_13.png')
	
	snapchat = loadAnimation ('asset/snapchat/snapchat_01.png', 'asset/snapchat/snapchat_09.png')
	
	facebook = loadAnimation ('asset/facebook/facebook_01.png', 'asset/facebook/facebook_07.png')
	
	facetime = loadAnimation ('asset/facetime/facetime_01.png', 'asset/facetime/facetime_05.png')
	
	imessage = loadAnimation ('asset/imessage/imessage_01.png', 'asset/imessage/imessage_05.png')
	
	slack = loadAnimation ('asset/slack/slack_01.png', 'asset/slack/slack_05.png')
	
	twitter = loadAnimation ('asset/twitter/twitter_01.png', 'asset/twitter/twitter_04.png')


	//emoji upload
	sillyFace = loadImage ('asset/emoji/upside-down.png')
	tongueOut = loadImage ('asset/emoji/tongue_out.png')
	

}

//----->Setup Function
function setup() {

	createCanvas(windowWidth, windowHeight); // size of the window
	background(255); //background color

	//arrays for the values for the notifications

	/*I'm proud of this code, because I am getting confident with using p5,
	created a class by myself from the p5 play library code and translate all the variables 
	into arrays. Made it easier to control without hardcoding all 8 social media icons
	*/
	
	var slide = [19, 12, 8, 6, 4, 4, 4, 3];
	var iconX = [650, 150, 900, 900, 400, 150, 400, 650]; 
	var iconY = [200, 450, 450, 200, 200, 200, 450, 450];
	var labels = ["email", "insta", "snapchat", "facebook", "facetime", "imessage", "slack", "twitter"]
	var icon = [email, insta, snapchat, facebook, facetime, imessage, slack, twitter];
	var unitConsumed = [10, 11, 10, 15, 5, 12, 10, 5];
	var freq = [65, 80, 50, 220, 65, 20, 70, 90];


	//for looping the arrays through the class's constructor
	for (var i = 0; i< slide.length; i++){

		popUps.push( new Notification (labels[i],icon[i],slide[i],iconX[i], iconY[i], unitConsumed[i], freq[i]))


	}
	console.log(popUps[0])
	//console about popups logs





}

//----->Labelling the Notifications Function
function getNotibyLabel(label){

//for looping the popUps arrays the popups equals to the labels from the array
	for (var i = 0; i<popUps; i++){
		if (popUps[i].label==label){
			return popUps[i]
		}

	}
}



//----->MousePressed Function
function mousePressed(){

	if (mode==2){
		//for looping the popUps arrays with actual notifications in the corner to mousePressed on within the notification image
		for (var i = 0; i<popUps.length; i++){
			consumedTime+=popUps[i].handleClick();
		
		}
	}
	
	if (mode==1){
		mode=2 //switch to mode 2: game when mousePressed
	}

	if (mode==3){
		consumedTime=0 //resume the notifications back to zero
		mode=1 //switch to mode 1: beginning when mousePressed
	}
}






//----->Draw Function
function draw() {

	//mode 1 is the introduction
	if (mode==1){
		beginning();

	}

	//mode 2 is the game
	if(mode==2){
		

		background(255)
		
			console.log(consumedTime); //track the consumed time
			
			//display all the classes function from the arrays
				popUps[0].display()
				popUps[1].display()
				popUps[2].display()
				popUps[3].display()
				popUps[4].display()
				popUps[5].display()
				popUps[6].display()
				popUps[7].display()
			
				
				healthTimer(); //health timer function added
		
		
				var nowSecond = second() //now second is the current time
		
				if (nowSecond!=lastSecond){
					secondPassCount++
		
		
				}
		
				lastSecond = second()



	}

	//mode 3 is the end
	if (mode==3){
		ending();

	}

}


//-----> Custom Function 
//Custom Health Timer
function healthTimer(){
	
	
	
		//healthbar
	
		//TEXT and Type Setup
		textFont(rubikB)
		fill(150)
		textSize (15);
		text ('Time Remaining', 50,40);
	
	
	
		//map out the full 57,600 seconds into the full length of the healthbar
		var countDown = map(s,57600,0,0,500);
	
	
		//countDown over the maxHealth multiply by the lenght of the healthbar
		var healthInProcess = (countDown/maxHealth)*healthLength;
	
	
		var emptyHealth = countDown - consumedTime
		if(emptyHealth<=0){
			mode=3
		}
	
		//the boundary of the timer 
	
		stroke(190);
		noFill();
		rect(50,50,500,30); //1. how to stop the boundary from moving sideways.
	
	
		//the inside of the timer
		fill(45,255,111); // color of the timer
		
		// if the width of the healthbar is more than zero equal to the rect
		if (emptyHealth >0) {
			
		rect(50,50,emptyHealth,30);	
			
		} 
		
		// if the healthbar is zero is just white
		if(emptyHealth = 0){
			
		fill(255)
			
		}
	
	
		
	
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
		// console.log(s)
	
	
	
	}
//-----> Opening and Ending

//custom beginning function (mode 1)
function beginning(){

	background(245,172,255) //background of mode 1

	image (sillyFace,windowWidth/2-20 ,windowWidth/2-560) //emoji face

	//overall type setup
	fill(255) //white text
	textAlign(CENTER) //center the text
	
	//Warning
	textSize(60)
	textFont (rubikB)
	text ('WARNING',windowWidth/2+23,windowHeight/2-20) //placement of the text
	
	//instruction
	textSize(20) //text size
	textFont(rubikR)
	textAlign(CENTER) //center the text
	text ('Do Not Attempt to Click on the Notifications', windowWidth/2+30, windowHeight/2+15)//placement of the text

}


//custom ending function (mode 3)
function ending (){

	background(189,228,255) //background of mode 3

	//local variable for the text 
	var conclusion = 'could had been spent reading books instead of social media'
	 image (tongueOut,windowWidth/2-20 ,windowWidth/2-560) 

	//overall type setup
	 fill(255) //white text
	 textAlign(CENTER) //center the text
	
	//consumed time and minute
	 textSize(120)
	 textFont(rubikB)
	 text (consumedTime+ ' Minutes',windowWidth/2+20,windowHeight/2) //text and calulated time
	 textFont(rubikR)
	
	//conclusion variable
	textSize(20) //text size
	text (conclusion, windowWidth/2, windowHeight/1.8) //placement of the text
}