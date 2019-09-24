// rotateSecondHand = (secHand,seconds) => {
//     let i = seconds;
//     i>60 ? i = 0: i = i;
//     secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+i*6+'deg)');
//     i++;
//     window.setTimeout(function(){
//         rotateSecondHand(secHand,i)
//     }, 1000);
// }
// rotateMinHand = (secHand,mins) => {
//     let i = mins;
//     i>60 ? i = 0: i = i;
//     secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+i*6+'deg)');
//     i++;
//     window.setTimeout(function(){
//         rotateSecondHand(secHand,i)
//     }, 60000);
// }
$(document).ready(function(){
    var clockFrame = $('#clock');
    var minHand= $('<span />',{ 'class' : 'minHand'});
    var secHand= $('<span />',{ 'class' : 'secHand'});
    var hourHand= $('<span />',{ 'class' : 'hourHand'});
    var centerPoint= $('<span />',{ 'class' : 'centerPoint'});
    clockFrame.append(minHand, secHand, hourHand, centerPoint);
    let currentTime= new Date();
    let secAngle = currentTime.getSeconds() * 6;
    let minAngle = currentTime.getMinutes() * 6;
    let hourAngle = currentTime.getHours() * 30 + .5*minAngle/6;
    // let i = currentSec;
    // secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+secAngle+'deg)');
    // minHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+minAngle+'deg)');
    // hourHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+hourAngle+'deg)');
    setInterval(()=>{ 
        secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+secAngle+'deg)');
        minHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+(minAngle)+'deg)');
        hourHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+(hourAngle)+'deg)');
        secAngle+=6
        minAngle+=6/60;
        hourAngle+= .5/60
    } 
    , 1000);

})