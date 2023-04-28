const slider=document.querySelector("input");
const bar=document.querySelector(".progress-bar");
const thumb=document.querySelector(".thumb");
const slideIcon=document.querySelector(".slide-icon");
slider.oninput=()=>{
    let value=slider.value;
    thumb.style.left=value+'%';
    bar.style.width=value+'%';
    if(value<20){
     slideIcon.style.marginTop="0px";
    }
   else if(value>=20 && value<40){
     slideIcon.style.marginTop="-150px";
    }
    else if(value>=40 && value<60){
     slideIcon.style.marginTop="-300px";
    }
    else if(value>=60 && value<80){
     slideIcon.style.marginTop="-450px";
    }
    else if(value>=80 && value<100){
     slideIcon.style.marginTop="-600px";
    }
    else if(value>=100){
     slideIcon.style.marginTop="-750px";
    }
}