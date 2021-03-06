function XPathKit(myXmlObject,myPath){
	//---------------------------------------------------------PROPERTIES
	this.path = myPath;
	this.xmlObject = myXmlObject;
	this.count = 0;
	this.nodes;

	var i = -1;
	if(window.ActiveXObject){//activexobject doesnt exist unless it;s ie
		this.xmlObject.setProperty("SelectionLanguage","XPath"); // xpath sorts through arrays starting at one this sets it so ie works that way too
		this.nodes = this.xmlObject.selectNodes(path);
		this.count = nodes.length;
	}else{
		//evaluate the xpath xpression
		this.count = this.xmlObject.evaluate("count("+path+")",this.xmlObject,null,XPathResult.ANY_TYPE,null).numberValue;
		//returns an xpath result object
		this.nodes = this.xmlObject.evaluate(path,this.xmlObject,null,XPathResult.ANY_TYPE,null);
	}

	//---------------------------------------------------------METHODS

	this.read = function(){

		if(window.ActiveXObject){//activexobject doesnt exist unless it;s ie
			i+=1;
			if(!(i >= this.count)){
				return this.nodes[i].childNodes[0].nodeValue;
			}else{
				i = 0;
			}
		}else{
			var result = this.nodes.iterateNext();
			//interateNext() will return a false when there are no more nodes left 
			return result.childNodes[0].nodeValue;
			result = this.nodes.iterateNext();
		}
		return false;
	}

	this.newQuery = function(myPath){
		this.path = myPath;
		var i = -1;
		if(window.ActiveXObject){//activexobject doesnt exist unless it;s ie
			this.xmlObject.setProperty("SelectionLanguage","XPath"); // xpath sorts through arrays starting at one this sets it so ie works that way too
			this.nodes = this.xmlObject.selectNodes(myPath);
			this.count = this.nodes.length;
		}else{
			//evaluate the xpath xpression
			this.count = this.xmlObject.evaluate("count("+myPath+")",this.xmlObject,null,XPathResult.ANY_TYPE,null).numberValue;
			//returns an xpath result object
			this.nodes = this.xmlObject.evaluate(myPath,this.xmlObject,null,XPathResult.ANY_TYPE,null);
		}
	}

}

function query(myPath){
		this.path = myPath;
		var i = -1;
		if(window.ActiveXObject){//activexobject doesnt exist unless it;s ie
			this.xmlObject.setProperty("SelectionLanguage","XPath"); // xpath sorts through arrays starting at one this sets it so ie works that way too
			this.nodes = this.xmlObject.selectNodes(myPath);
			this.count = this.nodes.length;
		}else{
			//evaluate the xpath xpression
			this.count = this.xmlObject.evaluate("count("+myPath+")",this.xmlObject,null,XPathResult.ANY_TYPE,null).numberValue;
			//returns an xpath result object
			return this.nodes = this.xmlObject.evaluate(myPath,this.xmlObject,null,XPathResult.ANY_TYPE,null);
		}
	}