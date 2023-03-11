function openNav(){
    document.getElementById("mySidenav").style.width ="100%";
}

function closeNav(){
    document.getElementById("mySidenav").style.width ="0px";
}

function formValidate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = '';



    if (email.indexOf("@") == -1){
        //error
        text="Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }

    else if (password.length < 7){
        //error
        text="Please Enter Valid Password";
        error.innerHTML = text;
        return false;
    }

    else{
        alert("Done");
        return true;
    }
}

function formValidate2(){
    var first = document.getElementById("first").value;
    var sur = document.getElementById("sur").value;
    var email2 = document.getElementById("email2").value;
    var npass = document.getElementById("npass").value;
    var error2 = document.getElementById("error2");
    var text2 = '';

    if (first.length2 < 3){
        //error
        text2="Please Enter Valid First Name";
        error2.innerHTML = text2;
        return false;
    }

    else if(sur.length3 < 3){
        //error
        text2="Please Enter Valid Surname";
        error2.innerHTML = text2;
        return false;
    }

    else if(email2.indexOf2("@") == -1){
        //error
        text2="Please Enter Valid Email"
        error2.innerHTML = text2;
        return false;
    }

    else if(npass.length4 < 7){
        //error
        text2="Please Enter Valid Password"
        error2.innerHTML = text2;
        return false;
    }

    else{
        alert2("Done");
        return true;
    }
}



/////////////////////////////Average to 10 Numbers///////////////////////////
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average);




