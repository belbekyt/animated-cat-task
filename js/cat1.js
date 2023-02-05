$('#cat1-start').click(() => {
    $('#cat1-mug').addClass('cat1-animated-mug');
    $('#cat1-cat').addClass('cat1-animated-cat');
})

$('#cat1-reset').click(() => {
    $('#cat1-mug').removeClass('cat1-animated-mug');
    $('#cat1-cat').removeClass('cat1-animated-cat');
})