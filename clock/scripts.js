'use strict';
const clock = () =>{
    var clockFrame = $('#clock');
    var secHand= $('<span />',{ 'class' : 'secHand'});
    var minHand= $('<span />',{ 'class' : 'minHand'});
    var hourHand= $('<span />',{ 'class' : 'hourHand'});
    var centerPoint= $('<span />',{ 'class' : 'centerPoint'});
    var dialPointCont= $('<span />',{ 'class' : 'dialPointCont'});
    clockFrame.append(secHand, minHand, hourHand, centerPoint);

    // dial points
    for(let i = 0; i<12; i++) {
        dialPointCont.append($('<span />', {
            'class' : 'dialDots',
            'style' : 'transform: rotate('+i*30+'deg) translateX(100%); transform-origin:center bottom'
        }))
        
    }
    
    clockFrame.append(dialPointCont)


    // clock functionalities
    let currentTime= new Date();
    let sec= currentTime.getSeconds()
    let minute= currentTime.getMinutes()
    let hour = currentTime.getHours() > 12 ? currentTime.getHours() - 12 : currentTime.getHours()
    let secAngle = sec * 6;
    let minAngle = (minute * 6) + (.1*sec);
    let hourAngle = (hour * 30) + (minute * .5) + (.5*sec/60)
    secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+secAngle+'deg)');
    minHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+minAngle+'deg)');
    hourHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+hourAngle+'deg)');
    // const perform360Check = value => {value== 360? value : 0}
    setInterval(
        ()=> { 
            secAngle+= 6;
            // secAngle = perform360Check(secAngle);
            minAngle+= .1;
                // perform360Check(minAngle);
            hourAngle+= .5/60;
                // perform360Check(hourAngle);
            secHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+secAngle+'deg)');
            minHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+(minAngle)+'deg)');
            hourHand.css('transform','translateX(-50%) translateY(-50%)  rotate('+(hourAngle)+'deg)');        
        } 
    , 1000);


}
clock()