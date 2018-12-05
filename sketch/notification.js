class notification{



constructor(iconTemp, slideTemp, iconXTemp, iconYTemp){

this.icon = iconTemp;
this.slide = slideTemp;
this.iconX = iconXTemp;
this.iconY = iconYTemp;


this.icon = loadAnimation ()
this.icon.looping = false;

}



}


//HELP HERE
update(){

var generatedStarter = random (1,35) 
var sec3 = second () //how to just place 3 seconds
var startingPoint = random (2,5) second() // start either 2-5 seconds. 
var numberOfClicks


fill (255)
text(generatedStarter,icon.x-192,icon.y)
fill (255,0,0)
ellipse(icon.x-190, icon.y, 30,30)




//need some help with time
//every 3 seconds build up to the max notification number
if (sec3) {

	generatedStarter+=1; 
}


if (mouseIsPressed) {

	//somehow notifications dissapear
	//add up the consumed time notifications here
	numberOfClicks.add(generatedStarter)
	

}



}


display(){

if (this.icon.getFrame() == this.icon.getLastFrame())
	this.icon.changeFrame (this.slide);

animation (this.icon, this.iconX, this.iconY);


	
	

if (mouseIsPressed){



	this.icon.rewind();


}



}