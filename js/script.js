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

// Create a lightbox
// (function() {
//     var $lightbox = $("<div class='lightbox'></div>");
//     var $img = $("<img>");
  
//     // Add image and caption to lightbox
//     $lightbox
//       .append($img)
  
//     // Add lighbox to document
//     $('body').append($lightbox);
//     $('.art-container img').click(function(e) {
//       e.preventDefault();
  
//       // Get image link and description
//       var src = $(this).attr("data-image-hd");
  
//       // Add data to lighbox
  
//       $img.attr('src', src);
  
//       // Show lightbox
  
//       $lightbox.fadeIn('fast');
  
//       $lightbox.click(function() {
//         $lightbox.fadeOut('fast');
//       });
//     });
  
//   }());