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
Instagram: 2-35 notifications and pop up twice
Facetime: 1-2 calls and pop up twice
iMessages 2-128 messages
Facebook: 10-30 notifications
SnapChat: 5-10 snaps and pop up twice
Email: 5-60 emails
Twitter: 4-10 notifications and pop up twice
Slack: 3-40 notifications 

When Clicked
Insta- 32 minutes 
Facetime-5-10 minutes per call
iMessage- 1 minute per notification
Facebook- 32 minutes
SnapChat- 30 minutes
Email- 1 minute per email
Twitter- 6 minutes
Slack-126.72 minutes

Background and surprises
Spectrum of feelings
Starts netural (white-light grey)
the longer the notifications don't touch (the black eerieness will arise)
everytime the notifications are clicked:
(the colorfulness will replace or randomly generates) then neturalness will fades in




*/

var currentHealth=960;
var maxHealth = 960;
var healthLength = 980;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);

}

function draw() {
	ellipse(mouseX, mouseY, 20, 20);


//healthbar

var healthInProcess = (currentHealth/maxHealth);
rect(100,100,healthLength,300);

if(healthInProcess =<380) {

	fill(0,255,0);	

} 	else if (healthInProcess =<480) {

	fill(100,255,0);

} 
	else { 
	fill(0,255,0) 
}


//add a healthbar
//healthbar will move back based on the clicks on the notifications
//max health



}




