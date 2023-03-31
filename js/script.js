const circText = document.getElementById('circ-text');
const rotate = new CircleType(circText).radius(50);

window.addEventListener('scroll', function(){
    circText.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
});

// const flower1 = document.getElementById('petals');
// // const rotate2 = new CircleType(flower1).radius(50);
// window.addEventListener('scroll', function(){
//     flower1.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
// });

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("flower");
    image.style.transform = "rotate(" + window.pageYOffset/-40 + "deg)";
    let image2 = document.getElementById("flower2");
    image2.style.transform = "rotate(" + window.pageYOffset/-40 + "deg)";
}