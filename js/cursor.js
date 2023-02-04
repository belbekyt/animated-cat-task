//Cursor animation
const cursor = $('#animate-cursor');
cursor.css('display', 'none');

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.css('top', y + 'px');
    cursor.css('left', x + 'px');
    cursor.css('display', 'block');
});

document.addEventListener("mouseout", () => {
    cursor.css('display', 'none');
});