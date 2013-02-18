//2d canvas spritesheet creator and animator
function Spritesheet(myWidth,myHeight,myX,myY,myContext,myImage,myColumns,myRows,myNumOfFrames){
	//---------------------------------------------------------PROPERTIES
	/*TODO animations flicker first time, something wrong with frameX Y or frame starting at 1 the 
	first time*/
	this.width = myWidth;
	this.height = myHeight;
	this.x = myX;
	this.y = myY;
	//the canvas context
	this.ctx = myContext;
	//requires an image object
	this.imageSrc = myImage;
	this.image = new Image();
	this.imageLoaded = false;

	this.columns = myColumns;
	this.rows = myRows;
	this.totalFrames = myNumOfFrames;
	this.isLoop =true;
	this.image.src = this.imageSrc;

	//sets of animations
	this.sets = {};
	//init all frames variables
	var frameX = 0;
	var frameY = 0;
	var frame = 1;
	var begin = 1;
	var beginX = 0;
	var beginY = 0;
	//variable to hold the set before it was changed in play
	var oldSet = "";
	//  variable to hold the original total number of frames 
	var origTotalFrames = myNumOfFrames;
	//---------------------------------------------------------METHODS
	//add a new set of frames to animate
	this.addSet = function(strName,beginFrame,endFrame){
		this.sets[strName] = {"pos" : [beginFrame,endFrame], "isCurrent" : false};
	}
	//method to set which frames to play
	this.setFrames = function(strSet){
		//console.log(frameY);
		for (var i = 0; i <= this.totalFrames; i++) {
			if(i == this.sets[strSet]["pos"][0]){
				beginX = frameX;
				beginY = frameY;
				
			}
			
			frameX++;
			if(frameX >= this.columns){
				frameX = beginX;
				frameY++;
				if(frameY >= this.rows){
					frameY = beginY;
				}
			}
		}
	
		this.totalFrames = this.sets[strSet]["pos"][1];
		begin = this.sets[strSet]["pos"][0];
		frameX = beginX;
		frameY = beginY;
		frame = begin;
	}	

	//method to test if image is loaded
	this.loadImage = function(){
		if(this.image.complete){
			this.imageLoaded = true;
		}
	};	

	//play the animation
	this.play = function(strSet){
		
		//correcting for no profiles set
		if(strSet == null){
			this.addSet("default",0,origTotalFrames);
			strSet = "default";
		}
		//check if set has changed
		if(oldSet != strSet){
			this.totalFrames = origTotalFrames;
			frame =1;
			frameX = 0;
			frameY = 0;
			this.setFrames(strSet);
		}
		oldSet = strSet;
		//check if image was loaded successfuly 
		
		if(this.imageLoaded){
			this.ctx.drawImage(this.image, frameX*this.width, frameY*this.height, this.width, this.height, this.x-this.width/2, this.y-this.height/2, this.width, this.height);	
			frame++;
			if(!(frame > this.totalFrames)){//may have to switch back to >=
				frameX++;
				if(frameX >= myColumns){
					frameX = beginX;
					frameY++;
					if(frameY >= myRows){
						frameY = beginY;
					}
				}
			}else{
				if(this.isLoop){
					frame=begin;
					frameX=beginX;
					frameY=beginY;

				}else{
					frame=origTotalFrames;
				}
			}
		}
	};

	this.resetFrames = function(){
		this.totalFrames = origTotalFrames;
		frameX = beginX;
		frameY = beginY;
		frame = begin;
	};

}