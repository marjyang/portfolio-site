const forwardBtn = document.getElementById('forward-button');
const backBtn = document.getElementById('back-button');

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

    for (let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    let leftPage = document.getElementById(`page${count+1}`);
    let rightPage = document.getElementById(`page${count+7}`);
    
    let leftImage = leftPage.querySelector("img");
    let rightImage = rightPage.querySelector("img");
    let leftDesc = leftPage.querySelector("p");
    let rightDesc = rightPage.querySelector("p");

    leftImage.style.transform = "translate(253px, 12.8vh)";
    rightImage.style.transform = "translate(495px, 13.2vh)";

    leftDesc.style.transform = "translate(50px, 18vh)";
    rightDesc.style.transform = "translate(200px, 36.4vh)";

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