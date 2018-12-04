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


display(){

if (this.icon.getFrame() == this.icon.getLastFrame())
	this.icon.changeFrame (this.slide);

animation (this.icon, this.iconX, this.iconY);


if (mouseIsPressed){

	this.icon.rewind();


}



}