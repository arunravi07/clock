rotateSecondHand = (secHand,seconds) => {
    let i = seconds;
    i>60 ? i = 0: i = i;
    secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+i*6+'deg)');
    i++;
    window.setTimeout(function(){
        rotateSecondHand(secHand,i)
    }, 1000);
}
rotateMinHand = (secHand,mins) => {
    let i = mins;
    i>60 ? i = 0: i = i;
    secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+i*6+'deg)');
    i++;
    window.setTimeout(function(){
        rotateSecondHand(secHand,i)
    }, 60000);
}
$(document).ready(function(){
    var clockFrame = $('#clock');
    var minHand= $('<span />',{ 'class' : 'minHand'});
    var secHand= $('<span />',{ 'class' : 'secHand'});
    var hourHand= $('<span />',{ 'class' : 'hourHand'});
    var centerPoint= $('<span />',{ 'class' : 'centerPoint'});
    clockFrame.append(minHand, secHand, hourHand, centerPoint);
    let currentTime= new Date();
    let currentHour = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours()
    let currentMin = currentTime.getMinutes();
    let currentSec = currentTime.getSeconds();
    rotateSecondHand(secHand,currentSec);
    rotateMinHand(minHand,currentMin)
})