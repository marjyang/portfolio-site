const text=  document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');

// see if i can create an array of elements and then do a nested for loop to create concentric circles

for (let i = 0; i < element.length; i++){
    element[i].style.transform = "rotate(" + i * 20 + "deg)";
}

// document.addEventListener("mousemove", function(e){
//     text.style.left = e.pageX + 'px';
//     text.style.top = e.pageY + 'px';
// });