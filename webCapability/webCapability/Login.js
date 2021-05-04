function validatePhone(){
    var userName=document.getElementById("PhoneNo").value;
    var regex=new RegExp("^[6-9]\d{9}$");
    if(!(regex.test(userName))){
        alert("invalid phone number :");
    }
    
}

function password(){

        var password=document.getElementById("passwordin").value;
        var regex=new RegExp("\w{8}+");

        if(!(regex.test(password))){
            alert("invalid password should contain atleast 8 characters ");
        }


}

function emailCheck(){
    var email=document.getElementById("emailin").value;
    var regex=new RegExp("^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$");
    if(!(regex.test(email))){
        alert("Incorrect email pattern :");
    }
}