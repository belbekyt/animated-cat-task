//dom elements
const firstLi = $('#li1');
const secondLi = $('#li2');
const thirdLi = $('#li3');
const fourthLi = $('#li4');

const cat1 = $('#cat1');
const cat2 = $('#cat2');
const cat3 = $('#cat3');
const cat4 = $('#cat4');

const eye1 = $("#first-eye");
const eye2 = $("#second-eye");

const menuCard = $('#menu-card');

const allLinks = [firstLi, secondLi, thirdLi, fourthLi];

//Onload menu animation
$(document).ready(() => {
    firstLi.animate({
        top: '39%',
        left: '50%'
    }, 600)

    secondLi.animate({
        top:'45%',
        left: '50%'
    }, 850)

    thirdLi.animate({
        top:'51%',
        left: '50%'
    }, 1100)

    fourthLi.animate({
        top:'57%',
        left: '50%'
    }, 1320)
})

//menu handler
const showItem = (id) => {
    switch(id){
        case 'li1':
            cat1.css('z-index', '5');
            break;
        case 'li2':
            cat2.css('z-index', '5');
            break;
        case 'li3':
            cat3.css('z-index', '5');
            break;
        case 'li4':
            eye1.addClass('animated');
            eye2.addClass('animated');
            cat4.css('z-index', '5');
            break;
    }

    menuCard.animate({
        marginTop: '-200%'
    }, 1250);

    firstLi.animate({
        top: '-10%',
        left: '30%'
    }, 200)

    secondLi.animate({
        top: '55%',
        left: '-10%'
    }, 200)

    thirdLi.animate({
        top: '61%',
        left: '110%'
    }, 200)

    fourthLi.animate({
        top: '110%',
        left: '40%'
    }, 200)
}

allLinks.forEach(element => {
    element.click((e) => {
        showItem(e.target.id);
    })
});