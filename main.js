const text=  document.querySelector('#t1');
text.innerHTML = text.textContent.replace(/\S/g, "<span class ='circle1'>$&</span>");

const element = document.querySelectorAll('.circle1');

for (let i = 0; i < element.length; i++){
    element[i].style.transform = "rotate(" + i * 20 + "deg)";
}

const text1 =  document.querySelector('#t2');
text1.innerHTML = text1.textContent.replace(/\S/g, "<span class ='circle2'>$&</span>");

const element1 = document.querySelectorAll('.circle2');

for (let i = 0; i < element1.length; i++){
    element1[i].style.transform = "rotate(" + i * 20 + "deg)";
}

// document.addEventListener("mousemove", function(e){
//     text.style.left = e.pageX + 'px';
//     text.style.top = e.pageY + 'px';
// });