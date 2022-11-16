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



// take user back to top
const buttonToTop = document.querySelector('#scrollToTop');

buttonToTop.addEventListener('click', () =>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
});


//heyzine api



// //lightbox
const lightbox = document.querySelector('#lightbox');
const images = document.querySelectorAll('.sketch-image');

images.forEach(i => {
    i.addEventListener('click', e => {
        lightbox.classList.add('lightbox-active');
        const img = document.createElement('img');
        img.src = i.src;
        lightbox.appendChild(img);
    });
});