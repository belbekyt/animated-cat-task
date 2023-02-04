$(document).mousemove((e) => {
    const el = document.querySelector("#module");
    console.log(e);
    el.style.backgroundPositionX = (-e.clientX)/5 + "px";
    el.style.backgroundPositionY = (-e.clientY)/5 + "px";
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if(window.innerWidth < 1000){
        setEyes(80, 33);
    }
    else if(window.innerWidth < 1000){
        setEyes(105, 40);
    }
    else if(window.innerWidth < 1400){
        setEyes(125, 50);
    }
    else if(window.innerWidth > 1400){
        setEyes(160, 60);
    }

    //getting centre of image
    const base = document.getElementById('base');
    const rect = base.getBoundingClientRect();
    const baseX = (rect.left + rect.width) / 2;
    const baseY = (rect.top + rect.height) / 2.3;

    //getting mouse angle and setting eyes to degrees from this angle
    const angleDeg = angle(mouseX, mouseY, baseX, baseY);

    const eyes = document.querySelectorAll('.eyess');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;

    return deg
}

const setEyes = (first, second) => {
    //eye1 positioning
    eye1X = window.innerWidth / 2 - first;
    const eye1 = document.querySelector('#eye1-move');
    eye1.style.left = `${eye1X}px`;

    //eye2 positioning
    eye2X = window.innerWidth / 2 - second;
    const eye2 = document.querySelector('#eye2-move');
    eye2.style.left = `${eye2X}px`;
}