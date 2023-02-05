const kitty = document.getElementById('base');

const eyePosition = (y) => {
    if(window.innerWidth < 600){
        setEyes(80, 30, y + 74, y + 55);
    }
    else if(window.innerWidth < 1000){
        setEyes(105, 40, y + 96, y + 75);
    }
    else if(window.innerWidth < 1400){
        setEyes(125, 50, y + 113, y + 87);
    }
    else{
        setEyes(160, 60, y + 150, y + 115);
    }
}

const setEyes = (left1, left2, top1, top2) => {
    //eye1 positioning (left)
    left1 = window.innerWidth / 2 - left1;
    const eye1 = document.querySelector('#cat2-eye1');
    eye1.style.left = `${left1}px`;
    eye1.style.top = `${top1}px`;
    
    //eye2 positioning (right)
    left2 = window.innerWidth / 2 - left2;
    const eye2 = document.querySelector('#cat2-eye2');
    eye2.style.left = `${left2}px`;
    eye2.style.top = `${top2}px`;
}

$(document).mousemove((e) => {
    //moving background
    const background = document.querySelector("#module");
    background.style.backgroundPositionX = (-e.clientX)/5 + "px";
    background.style.backgroundPositionY = (-e.clientY)/5 + "px";

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    //getting centre of image
    const rect = kitty.getBoundingClientRect();
    const baseX = (rect.left + rect.width) / 1.6;
    const baseY = (rect.top + rect.height) / 2.3;

    //getting the actual value to set the eyes in right height even after hovering
    const y = rect.top;
    eyePosition(y);

    //getting mouse angle and setting eyes to degrees from this angle
    const angleDeg = angle(mouseX, mouseY, baseX, baseY);

    const eyes = document.querySelectorAll('.eyes');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

//calc degree angle
const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;

    return deg
}