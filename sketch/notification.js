class Notification{
	constructor(labelTemp, iconTemp, slideTemp, iconXTemp, iconYTemp, unitCounsumeTemp, freqTemp){

			this.label = labelTemp;
			this.icon = iconTemp;
			this.slide = slideTemp;
			this.iconX = iconXTemp;
			this.iconY = iconYTemp;
		  this.unitConsume = unitCounsumeTemp;
			this.clicked=false
			this.freq = freqTemp;

			this.counter = int(random(1,35));


			// this.icon = loadAnimation ()
			this.icon.looping = false;

		}
	display(){
		if (this.clicked){
			if (frameCount % this.freq==0){
				this.counter++
			}
		}
		push()
			var generatedStarter = random (1,35) 

			textFont(rubikR)
			fill (255)
			text(generatedStarter,this.iconX,this.iconY)
			fill (255,0,0)


			if (this.icon.getFrame() == this.icon.getLastFrame()){
				this.icon.changeFrame (this.slide);
			}

			translate(this.iconX, this.iconY)
			
			var w = popUps[0].icon.getWidth()
			var h = popUps[0].icon.getHeight()
			animation (this.icon, w/2,h/2);

		
			noStroke()
			fill(255,76,71)
			ellipse(170, 15, 40,40)
			fill(255)
			textSize(20)
			text(this.counter, 160,23);


		
		pop()
		




	}
	handleClick(){
		console.log("handle");
		var w = popUps[0].icon.getWidth()
		var h = popUps[0].icon.getHeight()
		
		if (mouseX> this.iconX && mouseX<this.iconX+w &&
				mouseY> this.iconY && mouseY<this.iconY+h){
			console.log(this.label)
			this.icon.rewind();
			var result = this.unitConsume*this.counter
			this.counter=0
			this.clicked=true
			
			
			
			
			return result
			
			
			
		}
		
		return 0
		
	
		
		
		
	}
}