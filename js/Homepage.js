var pwd_change=document.getElementById('pwd_change');
pwd_change.onclick=function(){
    var oldPwd=prompt('Please input your original password:');
    var newPwd=prompt('Please set your new password:');
    var result=alert('Change succeeds!');
}
var submit=document.getElementsByClassName('submit');
submit[0].onclick=function(){
    alert('Submit succeeds!Thank you for your letter!');
}
submit[1].onclick=function(){
    alert('Submit succeeds!Thank you for your letter!');
}
var save=document.getElementById('save');
save.onclick=function(){
    var result=alert('Update information succeeds!');
}

var sidebar=document.querySelectorAll('.select_sidebar');
var change_content=document.querySelectorAll('.change_content');
var navi_feedback=document.querySelectorAll('.navi_feedback');
var content_feedback=document.querySelectorAll('.content_feedback');
var navi_individual_recommendation=document.querySelectorAll('.navi_individual_recommendation');
var content_individual_recommendation=document.querySelectorAll('.content_individual_recommendation');

sidebar[0].onclick=function(){
    for(var i=0;i<sidebar.length;i++){
        if(i==0){
            sidebar[i].style.backgroundColor='gray';
            sidebar[i].style.borderLeft='black solid';
            change_content[i].style.display='block';
        }
        else{
            sidebar[i].style.backgroundColor='#f1f1f1';
            change_content[i].style.display='none';
            sidebar[i].style.borderLeft='none';
        }
    }
}
sidebar[1].onclick=function(){
    for(var i=0;i<sidebar.length;i++){
        if(i==1){
            sidebar[i].style.backgroundColor='gray';
            sidebar[i].style.borderLeft='black solid';
            change_content[i].style.display='block';
        }
        else{
            sidebar[i].style.backgroundColor='#f1f1f1';
            change_content[i].style.display='none';
            sidebar[i].style.borderLeft='none';
        }
    }
}
sidebar[2].onclick=function(){
    for(var i=0;i<sidebar.length;i++){
        if(i==2){
            sidebar[i].style.backgroundColor='gray';
            change_content[i].style.display='block';
            sidebar[i].style.borderLeft='black solid';
        }
        else{
            sidebar[i].style.backgroundColor='#f1f1f1';
            change_content[i].style.display='none';
            sidebar[i].style.borderLeft='none';
        }
    }
}
sidebar[3].onclick=function(){
    for(var i=0;i<sidebar.length;i++){
        if(i==3){
            sidebar[i].style.backgroundColor='gray';
            change_content[i].style.display='block';
            sidebar[i].style.borderLeft='black solid';
        }
        else{
            sidebar[i].style.backgroundColor='#f1f1f1';
            change_content[i].style.display='none';
            sidebar[i].style.borderLeft='none';
        }
    }
}
sidebar[4].onclick=function(){
    for(var i=0;i<sidebar.length;i++){
        if(i==4){
            sidebar[i].style.backgroundColor='gray';
            change_content[i].style.display='block';
            sidebar[i].style.borderLeft='black solid';
        }
        else{
            sidebar[i].style.backgroundColor='#f1f1f1';
            change_content[i].style.display='none';
            sidebar[i].style.borderLeft='none';
        }
    }

    navi_feedback[0].onclick=function(){
        navi_feedback[0].style.backgroundColor='gray';
        navi_feedback[1].style.backgroundColor='#f1f1f1';
        content_feedback[0].style.display='block';
        content_feedback[1].style.display='none';
    }
    navi_feedback[1].onclick=function(){
        navi_feedback[1].style.backgroundColor='gray';
        navi_feedback[0].style.backgroundColor='#f1f1f1';
        content_feedback[1].style.display='block';
        content_feedback[0].style.display='none';
    }
}
sidebar[5].onclick=function(){
    for(var i=0;i<sidebar.length;i++){
        if(i==5){
            sidebar[i].style.backgroundColor='gray';
            change_content[i].style.display='block';
            sidebar[i].style.borderLeft='black solid';
        }
        else{
            sidebar[i].style.backgroundColor='#f1f1f1';
            change_content[i].style.display='none';
            sidebar[i].style.borderLeft='none';
        }
    }

    navi_individual_recommendation[0].onclick=function(){
        navi_individual_recommendation[0].style.backgroundColor='gray';
        navi_individual_recommendation[1].style.backgroundColor='#f1f1f1';
        content_individual_recommendation[0].style.display='block';
        content_individual_recommendation[1].style.display='none';
    }
    navi_individual_recommendation[1].onclick=function(){
        navi_individual_recommendation[1].style.backgroundColor='gray';
        navi_individual_recommendation[0].style.backgroundColor='#f1f1f1';
        content_individual_recommendation[1].style.display='block';
        content_individual_recommendation[0].style.display='none';
    }
}