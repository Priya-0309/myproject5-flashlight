let mouseX = 0;
let mouseY = 0;
let flashlight=document.getElementById("flashlight");

const istouchdevice =() =>{
    try{
        document.createEvent("TouchEvent");
        return true
    }
    catch(e){
        return false
    }
};

function getmouseposition(e){

    mouseX = !istouchdevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !istouchdevice() ? e.pageY : e.touches[0].pageY;

    flashlight.style.setProperty("--Xpos", mouseX + "px");
    flashlight.style.setProperty("--Ypos", mouseY + "px");

}

document.addEventListener("mousemove",getmouseposition );
// document.addEventListener("touchmove",getmouseposition );

