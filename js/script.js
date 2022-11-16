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



//contact form


// const form = document.querySelector('#form-link');
// let contactForm = document.querySelector('#contact-form');
// let shadow = document.querySelector('.shadow');

// form.addEventListener('click', () => {
//     contactForm.classList.add('display');
//     shadow.classList.add('display');
// })


// //lightbox
// const lightbox = document.querySelector('#lightbox');
// const images = document.querySelectorAll('.sketch-image');
// images.forEach(image => {
//     image.addEventListener('click', e => {
//         lightbox.classList.add('lightbox-active');
//         const img = document.createElement('img');
//         img.src = image.src;
//         lightbox.appendChild(img);
//     });
// });