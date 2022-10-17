const text1=  document.querySelector('#t1');
text1.innerHTML = text1.textContent.replace(/\S/g, "<span class ='circle1'>$&</span>");

const element1 = document.querySelectorAll('.circle1');

for (let i = 0; i < element1.length; i++){
    element1[i].style.transform = "rotate(" + i * 14 + "deg)";
}

const text2 =  document.querySelector('#t2');
text2.innerHTML = text2.textContent.replace(/\S/g, "<span class ='circle2'>$&</span>");

const element2 = document.querySelectorAll('.circle2');

for (let i = 0; i < element2.length; i++){
    element2[i].style.transform = "rotate(" + i * 13 + "deg)";
}

const text3 =  document.querySelector('#t3');
text3.innerHTML = text3.textContent.replace(/\S/g, "<span class ='circle3'>$&</span>");

const element3 = document.querySelectorAll('.circle3');

for (let i = 0; i < element3.length; i++){
    element3[i].style.transform = "rotate(" + i * 12 + "deg)";
}

const text4 =  document.querySelector('#t4');
text4.innerHTML = text4.textContent.replace(/\S/g, "<span class ='circle4'>$&</span>");

const element4 = document.querySelectorAll('.circle4');

for (let i = 0; i < element4.length; i++){
    element4[i].style.transform = "rotate(" + i * 11 + "deg)";
}

const text5 =  document.querySelector('#t5');
text5.innerHTML = text5.textContent.replace(/\S/g, "<span class ='circle5'>$&</span>");

const element5 = document.querySelectorAll('.circle5');

for (let i = 0; i < element5.length; i++){
    element5[i].style.transform = "rotate(" + i * 10 + "deg)";
}

const text6 =  document.querySelector('#t6');
text6.innerHTML = text6.textContent.replace(/\S/g, "<span class ='circle6'>$&</span>");

const element6 = document.querySelectorAll('.circle6');

for (let i = 0; i < element6.length; i++){
    element6[i].style.transform = "rotate(" + i * 9 + "deg)";
}

const text7 =  document.querySelector('#t7');
text7.innerHTML = text7.textContent.replace(/\S/g, "<span class ='circle7'>$&</span>");

const element7 = document.querySelectorAll('.circle7');

for (let i = 0; i < element7.length; i++){
    element7[i].style.transform = "rotate(" + i * 8 + "deg)";
}

const text8 =  document.querySelector('#t8');
text8.innerHTML = text8.textContent.replace(/\S/g, "<span class ='circle8'>$&</span>");

const element8 = document.querySelectorAll('.circle8');

for (let i = 0; i < element8.length; i++){
    element8[i].style.transform = "rotate(" + i * 7 + "deg)";
}

const text9 =  document.querySelector('#t9');
text9.innerHTML = text9.textContent.replace(/\S/g, "<span class ='circle9'>$&</span>");

const element9 = document.querySelectorAll('.circle9');

for (let i = 0; i < element7.length; i++){
    element9[i].style.transform = "rotate(" + i * 6 + "deg)";
}

const text10 =  document.querySelector('#t10');
text10.innerHTML = text10.textContent.replace(/\S/g, "<span class ='circle10'>$&</span>");

const element10 = document.querySelectorAll('.circle10');

for (let i = 0; i < element10.length; i++){
    element10[i].style.transform = "rotate(" + i * 5 + "deg)";
}

// document.addEventListener("mousemove", function(e){
//     text.style.left = e.pageX + 'px';
//     text.style.top = e.pageY + 'px';
// });