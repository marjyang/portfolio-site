const circText = document.getElementById('circ-text');
const rotate = new CircleType(circText).radius(50);

window.addEventListener('scroll', function(){
    circText.style.transform = 'rotate(' + (window.scrollY * 0.15) + 'deg)'
});