// cursor
const cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;');
});

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseleave', () =>{
        cursor.classList.remove('link-change');
    });
    
    links[i].addEventListener('mouseover', () =>{
        cursor.classList.add('link-change');
    });
}

//flipbook


//contentful cms api


//loader
var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
        loader.style.display= "none";
    })