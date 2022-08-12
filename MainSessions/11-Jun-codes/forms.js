function formValidate(){
    var x = document.forms["signupForm"]["name"].value;
    var isValidData = true;
    let value = "Your form data is successfully submitted";
    
    if(x==""){
        alert("Name is a mandatory field")
        isValidData = false;
        
    }

    var phno = document.forms["signupForm"]["phonenumber"].value;

    if(phno==""||isNaN(phno)){
        if(phno==""){
            alert("phone number is mandatory")
            isValidData = false;
        }else{
            alert("phone number should be a numerical")
            isValidData = false;
        }
    }
    

    if(isValidData){
        alert("Congrats = "+x+" , "+value);
    }
    else{
        alert("Please fill valid data again")
    }
}