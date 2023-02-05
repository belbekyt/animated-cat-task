//dom elements
const firstLi = $('#li1');
const secondLi = $('#li2');
const thirdLi = $('#li3');

const allLinks = [firstLi, secondLi, thirdLi];

const showMenu = () => {
    firstLi.animate({
        top:'45%',
        left: '50%'
    }, 850)

    secondLi.animate({
        top:'51%',
        left: '50%'
    }, 1100)

    thirdLi.animate({
        top:'57%',
        left: '50%'
    }, 1320)
}

//Onload menu animation
$(document).ready(() => {
    showMenu();
})

//menu handler
const showItem = (id) => {
    switch(id){
        case 'li1':
            $('#cat1').css('z-index', '5');
            break;
        case 'li2':
            $('#cat2').css('z-index', '5');
            break;
        case 'li3':
            $("#first-eye").addClass('animated');
            $("#second-eye").addClass('animated');
            $('#cat3').css('z-index', '5');
            break;
    }

    $('#menu-card').animate({
        marginTop: '-200%'
    }, 800);

    firstLi.animate({
        top: '55%',
        left: '-40%'
    }, 200)

    secondLi.animate({
        top: '61%',
        left: '110%'
    }, 200)

    thirdLi.animate({
        top: '-20%',
        left: '40%'
    }, 200)
}

allLinks.forEach(element => {
    element.click((e) => {
        showItem(e.target.id);
    })
});

$('#menu-show').click(() => {
    $('#menu-card').animate({
        marginTop: '0'
    }, 600, () => {
        $('#cat1').css('z-index', '0');
        $('#cat2').css('z-index', '0');
        $("#first-eye").removeClass('animated');
        $("#second-eye").removeClass('animated');
        $('#cat3').css('z-index', '0');
        $('#cat1-mug').removeClass('cat1-animated-mug');
        $('#cat1-cat').removeClass('cat1-animated-cat');
        showMenu();
    });
})