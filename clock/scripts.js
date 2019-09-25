'use strict';
const clock = () =>{
    var clockFrame = $('#clock');
    var secHand= $('<span />',{ 'class' : 'secHand'});
    var minHand= $('<span />',{ 'class' : 'minHand'});
    var hourHand= $('<span />',{ 'class' : 'hourHand'});
    var centerPoint= $('<span />',{ 'class' : 'centerPoint'});
    clockFrame.append(secHand, minHand, hourHand, centerPoint);
    let currentTime= new Date();
    let sec= currentTime.getSeconds()
    let minute= currentTime.getMinutes()
    let hour = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours()
    let secAngle = sec * 6;
    let minAngle = (minute * 6) + (.1*sec);
    let hourAngle = (hour * 30) + (minute * .5) + (.5*sec/60)
    // let i = currentSec;
    secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+secAngle+'deg)');
    minHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+minAngle+'deg)');
    hourHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+hourAngle+'deg)');
    console.log(secAngle, minAngle, hourAngle)
    setInterval(
        ()=> { 
            secAngle+= 6;
                secAngle === 360 ? secAngle=0 : secAngle;
            minAngle+= .1;
                minAngle === 360 ? minAngle=0 : minAngle;
            hourAngle+= .5/60;
                hourAngle === 360 ? hourAngle=0 : hourAngle

            secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+secAngle+'deg)');
            minHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+(minAngle)+'deg)');
            hourHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+(hourAngle)+'deg)');        
        } 
    , 1000);
}
clock()