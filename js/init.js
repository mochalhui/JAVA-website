



function validateForm(){
    var x=document.forms["myForm"]["username"].value;
    var y=document.forms["myForm"]["password"].value;
    if (x==null || x==""){
        alert("please input you username ");
        return false;
    } else  if (y==null || y==""){
        alert("please input you password");
        return false;
    }else{
        return window.location.href='../html/home.html';
    }
}

function forgetForm(){
    var x=document.forms["forget"]["username_forget"].value;
    if (x==null || x==""){
        alert("please input you username ");
        return false;
    } else{
        alert("you password is: 111");
        return window.location.href='../html/init.html';
    }
}

function creatForm(){
    var a=document.forms["creat"]["creatusername"].value;
    var b=document.forms["creat"]["creatpassword"].value;
    var c=document.forms["creat"]["email"].value;
    var d=document.forms["creat"]["Tele"].value;
    var e=document.forms["creat"]["qq"].value;
    if (a==null || a==""){
        alert("please input you username ");
        return false;
    } else   if (b==null || b==""){
        alert("please input you password ");
        return false;
    } else   if (c==null || c==""){
        alert("please input you email ");
        return false;
    } else   if (d==null || d==""){
        alert("please input you telephone number ");
        return false;
    } else   if (e==null || e==""){
        alert("please input you qq number ");
        return false;
    } else   {
        alert("Creat successful!\n"+"Username: "+a+"\nPassword: "+b+"\nEmail: "+c+"\nTelephone: "+d+"\n QQ: "+e);
        return window.location.href='../html/init.html';
    }






}