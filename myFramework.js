//generates a random number between the rand of low and high
// Number is the number data type, when you assign a number to a varible you can call this function from that variable
// you can also call Number.protoype.randomMe()
Number.prototype.randomMe = function(low,high){
	var randomNumber;

	
	// hacking overloading
	if((low == null) || (high == null)){
		low=1;
		high=100;
	} else if((typeof low == "string") || (typeof high == "string")){
		low=1;
		high=100;
	}

	randomNumber = Math.round(Math.random() * (high-low))  + low;

	return randomNumber;
}

//----------------------encode/decode

var aryAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arySpecChars = ['!','@','$',',','.','(',')','\'','?'];
var aryEncSpecChars = ['}','[','?','.','<','&','%',':','*'];
var checkSpaces = new RegExp(/^(\s)$/);


String.prototype.encode = function(){
	var myStr = this.toLowerCase();
	var oneChar;
	var output = "";
	for (var i = 0; i <= myStr.length-1; i++) {
		oneChar = myStr.charAt(i);
		for (var y = 0; y <= aryAlphabet.length -1; y++) {
			if (oneChar == aryAlphabet[y]) {
				output += aryAlphabet[aryAlphabet.length-y-1];
				break;
			}else if(checkSpaces.test(oneChar)){
				output += "#";
				break;
			}
		}
		output+=checkSpecChar(oneChar,false);
	}
	return output;
}

String.prototype.decode = function(){
	var myStr = this.toLowerCase();
	var oneChar;
	var output = "";
	for (var i = 0; i <= myStr.length-1; i++) {
		oneChar = myStr.charAt(i);
		for (var y = 0; y <= aryAlphabet.length -1; y++) {
			if (oneChar == aryAlphabet[y]) {
				output += aryAlphabet[Math.abs(aryAlphabet.length-1 - y)];
				break;
			}else if(oneChar == "#"){
				output += " ";
				break;
			}
		}
		output+=checkSpecChar(oneChar,true);
	}
	return output;
}

function checkSpecChar(myChar,isDecode){
	for (var i = arySpecChars.length - 1; i >= 0; i--) {
		if(isDecode){
			if(myChar == aryEncSpecChars[i]){
				return arySpecChars[i];
			}
		}else{
			if(myChar == arySpecChars[i]){
				return aryEncSpecChars[i];
			}
		}
		
	}
	return "";
}

//------------------------------------------------------animation

//used to create a game loop
// call setInterval("requestAnimFrame()",1000/targetFPS)
//a function like update() would go in requestAnimFrame as a param 

window.requestAnimFrame = (function(){ 
	return window.requestAnimationFrame || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame || 
		window.oRequestAnimationFrame || 
		window.msRequestAnimationFrame ||
			function(callback){ 
				callback(); 
			}; 
})();


window.cancelRequestAnimFrame = ( function() { 
	return window.cancelAnimationFrame || 
		window.webkitCancelRequestAnimationFrame || 
		window.mozCancelRequestAnimationFrame || 
		window.oCancelRequestAnimationFrame || 
		window.msCancelRequestAnimationFrame || 
		clearTimeout 
})();
//---------------------------------------------------------------CANVAS 2D

debugObjPos(obj,objName,canvas,txtColor,x,y){
	canvas.fillStyle = txtColor;
	canvas.font = "14px Arial, sans-serif";
	canvas.fillText(objName + " X : " + obj.x, x, y );
	canvas.fillText(objName + " Y : " + obj.y, x, y+20 );
	canvas.fillText(objName +  " Height : " + obj.height, x, y+40 );	
	canvas.fillText(objName + " Width : " + obj.width, x, y+60 );	
}

function boxCollides(obj1,obj2){

	 return (obj1.x-obj1.r <= obj2.x + obj2.r && //1left is to the left 2right
        obj2.x-obj1.r <= obj1.x + obj1.r && //2left is to the left of 1 right
    	obj1.y-obj1.r <= obj2.y + obj2.r && // 1top is to the top of 2bottom
        obj2.y-obj1.r <= obj1.y + obj1.r)

}

