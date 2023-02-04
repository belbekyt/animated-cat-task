const switchButton = $('#cat4-btn');
const mouth = $('#cat-mouth');
const shadow = $('#room-shadow');

let inProgress = false; //animation (is in progress) tracker;
let state = true; //state (if light is on) tracker;

const lightsOff = () => {
    shadow.css('backgroundColor', 'rgba(0,0,0,0.95)');

    mouth.animate({
        height: '0'
    }, 500, () => {
        inProgress = false;
    });
}

const lightsOn = () => {
    shadow.css('backgroundColor', 'rgba(0,0,0,0)');

    mouth.animate({
        height: '15px'
    }, 500, () => {
        inProgress = false;
    });
}

switchButton.click(() => {
    // Check if animation is in progress to prevent spamming animations by clicking btn
    if(!inProgress==true){
        inProgress = true;

        if(state){
            //turning OFF the light
            lightsOff()
            state = false;
        }
        else{
            //turning the light ON
            lightsOn()
            state = true;
        }
    }
})