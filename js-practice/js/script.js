let x,y,z;
       x = 5;
       y = 6;
       z = x + y;
document.getElementById('statement').innerHTML = "The Value of Z is " + z + ".";


function textChange(){
    document.getElementById('tch').innerHTML= "Hi There"
}

function displayDate(){
    document.getElementById('sd').innerHTML = Date();
}
//on/off
function bulbOn(){
    document.getElementById('bulb').src ='images/on.gif';
}
function bulbOff(){
    document.getElementById('bulb').src ='images/off.gif';
}