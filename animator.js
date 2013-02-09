function Animator(myId,myRate){
	//properties
	this.target = document.getElementById(myId);
	this.isMoving = false;
	//overloading
	if(myRate == null || typeof myRate == "string"){
		this.framerate = 1;
	}else{
		this.framerate = myRate;
	}

	//start the animation
	this.start = function(){
		var animator = this;
		this.timer = setInterval(function(){
			//you have to do the math on it before you add the px, otherwise your just adding on a string
			animator.target.style.left = (parseInt(animator.target.style.left)+2) + "px";
		},this.framerate * 1000);
		this.isMoving = true;
	};

	//stop the animation
	this.stop = function(){
		clearInterval(this.timer);
		this.isMoving = false;
	};

	this.toggle = function(){
		if(this.isMoving){
			this.stop();
		}else{
			this.start();
		}
	};


}

//this must be called as a string in the first param of setInterval -> "enterframe()"

// function enterFrame(){
// 	animator.target.style.left = (parseInt(animator.target.style.left)+2) + "px";
// }