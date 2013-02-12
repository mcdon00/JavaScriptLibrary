//2d canvas spritesheet creator and animator
function Spritesheet(myWidth,myHeight,myX,myY,myContext,myImage,myColumns,myRows,myNumOfFrames){
	//---------------------------------------------------------PROPERTIES
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

	var frameX = 0;
	var frameY = 0;
	var frame = 1;
	
	//---------------------------------------------------------METHODS
	this.loadImage = function(){

		this.image.src = this.imageSrc;
		if(this.image.complete){
			this.imageLoaded = true;
		}
	};	

	this.play = function(){
		
		if(this.imageLoaded){
			this.ctx.drawImage(this.image, frameX*this.width, frameY*this.height, this.width, this.height, this.x, this.y, this.width, this.height);	
			
			frame++;

			if(!(frame >= this.totalFrames)){
				frameX++;
				if(frameX >= myColumns){
					frameX = 0;
					frameY++;
					if(frameY >= myRows){
						frameY = 0;
					}
				}
			}else{
				if(this.isLoop){
					frame=1;
					frameX=0;
					frameY=0;
				}else{
					frame=this.totalFrames;	
				}
			}
		}
	};
	this.resetFrames = function(){
		frameX = 0;
		frameY = 0;
		frame = 1;
	};
}