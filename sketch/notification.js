class Notification{
	
	//setting the parameters for the notifications
	constructor(labelTemp, iconTemp, slideTemp, iconXTemp, iconYTemp, unitCounsumeTemp, freqTemp){

	//matching class variables to input variables
			this.label = labelTemp;
			this.icon = iconTemp;
			this.slide = slideTemp;
			this.iconX = iconXTemp;
			this.iconY = iconYTemp;
		  this.unitConsume = unitCounsumeTemp;
			this.clicked=false
			this.freq = freqTemp;

		//notification number varies
			this.counter = int(random(1,35));


			//stops the loop until it is mouse pressed
			this.icon.looping = false;

		}
	
	//--->display function 
	display(){
		
		//if this is mousePressed the framecount of the pops will start increasing
		if (this.clicked){
			if (frameCount % this.freq==0){
				//modular frame countinue to count if the freq is zero
				this.counter++ //continue to add on
			}
		}
		
		//push and pull to contain the graphics
		push()
		
		//notification number varies
			var generatedStarter = random (1,35) 

		//type setup
			textFont(rubikR)
			fill (255)
			text(generatedStarter,this.iconX,this.iconY) //show the number based on the random generator
			fill (255,0,0)


		//referenced to the p5 playlibrary to implement this
			if (this.icon.getFrame() == this.icon.getLastFrame()){
				this.icon.changeFrame (this.slide);
			}
		
		//translate the visuals of the notifications to match the location of icons
			translate(this.iconX, this.iconY) 
		
			//matching the width and height of the popups
			var w = popUps[0].icon.getWidth()
			var h = popUps[0].icon.getHeight()
			animation (this.icon, w/2,h/2); //animate the icons (reference from p5 library

		//visuals of the notification
			noStroke()
			fill(255,76,71)
			ellipse(170, 15, 40,40)
			fill(255)
			textSize(20)
			text(this.counter, 160,23);


		
		pop()
		




	}
	
	//function of clicking on the notifications
	handleClick(){
		console.log("handle"); //count the handles
		
		var w = popUps[0].icon.getWidth()
		var h = popUps[0].icon.getHeight()
		
		// if mousex is more than iconX and more than iconX w. width and 
		//mouseY is more than iconY and more than iconY w. height 
		//in other words within the promixity of the icon
		if (mouseX> this.iconX && mouseX<this.iconX+w &&
				mouseY> this.iconY && mouseY<this.iconY+h){
			
			console.log(this.label) //console the label
			this.icon.rewind(); //restart the animation
			var result = this.unitConsume*this.counter //results shows with unit and the counter of the notifications
			this.counter=0 //counter variable is zero
			this.clicked=true //than the click is true (mousePressed)
			
			
			
			
			return result //goes refering to the results
			
			
			
		}
		
		return 0 //return to zero
		
	
		
		
		
	}
}