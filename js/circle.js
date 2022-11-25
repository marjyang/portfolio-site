for (let i = 1; i < 13; i++){
    const text = document.querySelector(`#t${i}`);
    text.innerHTML = text.textContent.replace(/\S/g, `<span class ='circle${i}'>$&</span>`);

    const element = document.querySelectorAll(`.circle${i}`);

    let spacing = 2.4;
    spacing -= .130;

    for (let j = 0; j < element.length; j++){
        element[j].style.transform = "rotate(" + j * Math.exp(spacing) + "deg)";
    }
}