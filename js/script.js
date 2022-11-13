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
