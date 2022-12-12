const forwardBtn = document.getElementById('forward-button');
const backBtn = document.getElementById('back-button');
const artSection = document.getElementById('art');
let verticalLine1 = document.getElementById("vertical1");
let verticalLine2 = document.getElementById("vertical2");


let count = 0;
loadImage();

forwardBtn.addEventListener("click", () =>{
    if (count >= 5){
        count = 5;
        console.log("reached max");
        console.log(`count: ${count}`);
        loadImage();
    }else{
        count += 1;
        console.log("forward");
        console.log(`count: ${count}`);
        loadImage();
    }
});

backBtn.addEventListener("click", () =>{
    if (count <= 0){
        leftCount = 0;
        console.log("reached min");
        console.log(`count: ${count}`); 
        loadImage();
    }else{
        count -= 1;
        console.log("backward");
        console.log(`count: ${count}`);
        loadImage();
    }
});

function loadImage(){
    let flipbook = document.getElementById("flipbook");
    let images = flipbook.querySelectorAll("div");

    //make sure none are showing
    for (let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    let leftPage = document.getElementById(`page${count+1}`);
    let rightPage = document.getElementById(`page${count+7}`);

    let isShowing = false;
    if (!isShowing){
        leftPage.style.display = "block";
        rightPage.style.display = "block";

        isShowing = true;
    }else{
        leftPage.style.display = "none";
        rightPage.style.display = "none";

        isShowing = false;
    }
}


function mediaQuery1(x) {
    if (x.matches) { // If media query matches
        artSection.style.height = "70vh";
        verticalLine1.style.height = "170vh";
        verticalLine2.style.height = "170vh";

    } else {
        artSection.style.height = "100vh";
        verticalLine1.style.height = "200vh";
        verticalLine2.style.height = "200vh";
    }
  }
  
  var x = window.matchMedia("(max-width: 1000px)");
  mediaQuery1(x);
  x.addListener(mediaQuery1);