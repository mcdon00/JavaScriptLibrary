function TextFieldValidator(myTarget,myColor) {
    /**regular expression to be used */
    this.regex = /^(\d)$/;
    /**color of the text field if regex does not match */
    this.strErrorColor = myColor;
    /**text field object to be validated */
    this.txtTextField = myTarget;
    /**input from the text field to be checked against the regex */
    this.strInput = this.txtTextField.value;

    /**current border of the textfield*/
    //this.border;

    if(myColor == null){
        this.strErrorColor = "red";
    }
    
    //---------------------------------------------------------------SET/GET METHODS
    this.setRegExp = function(myRegExp){
        this.regex = myRegExp;
    }

    this.setErrorColor = function(myColor){
        this.strErrorColor = myColor;
    }
    
    //---------------------------------------------------------------PUBLIC METHODS
    this.check = function(){
        isMatch = false;
        
        this.strInput = this.txtTextField.value;
        
        if (!this.regex.test(this.strInput)){
            this.txtTextField.style.borderColor = this.strErrorColor;
        }else{
            this.txtTextField.style.borderColor = "";
           isMatch = true;
           
        }
        return isMatch;
    }
    
    
}
