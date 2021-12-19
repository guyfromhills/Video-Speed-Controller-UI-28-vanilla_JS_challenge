





//grab video 
const video = document.querySelector(".flex");

//grab speed
const speed = document.querySelector(".speed");

//grab bar 
const bar = document.querySelector(".speed-bar");

function handleMove(e)
{
    //grab ordinate of speed, also subtract any element's height that is before speed element
    const y = e.pageY - this.offsetTop;

    //get relative change
    const relativeChange = y / this.offsetHeight;

    //get height percentage
    const heightPercentage = Math.round(relativeChange*100) + '%'; 

    //setting min and max values of playback
    const min = 0.4;
    const max = 4;

    //set playBackRate 
    const playBackRate = relativeChange*(max - min) + min;


    //set video's playbackRate to platBackRate
    video.playbackRate = playBackRate;

    //styling 

    bar.style.height = heightPercentage;
    bar.textContent = Math.round(playBackRate.toFixed(2)) + 'x';

}

//if mousemove over speed, call func handleMove
speed.addEventListener("mousemove", handleMove);