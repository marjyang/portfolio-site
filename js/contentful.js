var client = contentful.createClient({
    space: 'o4z3qq75yqc3',
    accessToken: 'MuqbxfbvDvLwFoLQT6WzHF2XfxyWcY2jj17UF46eRD8',
});

client.getEntries().then((entries) =>{
    let projCover1 = document.getElementById('project-cover1');
    let projCover2 = document.getElementById('project-cover2');
    let projCover3 = document.getElementById('project-cover3');
    let projCover4 = document.getElementById('project-cover4');
    let projCover5 = document.getElementById('project-cover5');
    let projCover6 = document.getElementById('project-cover6');

    let project1 = document.getElementById('project1');
    let project2 = document.getElementById('project2');
    let project3 = document.getElementById('project3');
    let project4 = document.getElementById('project4');
    let project5 = document.getElementById('project5');
    let project6 = document.getElementById('project6');

    let html = [];
    let covers = [];

    entries.items.forEach((entry) => {
        
        covers[entry] = `
            <div class="image">
                <img class ="image-img" src=${entry.fields.thumbnailImage.fields.file.url}>
                <div class = "image-overlay image-overlay-blur">
                    <div class="cover-title">${entry.fields.title}</div>
                    <p class = "cover-medium">${entry.fields.medium}</p>
                    <p class = "cover-role">${entry.fields.role}</p>
                </div>
            </div>
        `;

        html[entry] = `
            <div class = "indiv-project-container">
                <div class = indiv-title>${entry.fields.title}</div>
                <div class = "indiv-medium">${entry.fields.medium}</div>
                <div class = "indiv-role">${entry.fields.role}</div>
                <img class = "indiv-thumbnail-image" src=${entry.fields.thumbnailImage.fields.file.url}>
                <div class = "indiv-background">${entry.fields.background}</div>
                <div class = "indiv-problem">${entry.fields.problem}</div>
                <div class = "indiv-step1">${entry.fields.step1}</div>
                <div class = "indiv-step2">${entry.fields.step2}</div>
                <div class = "indiv-step3">${entry.fields.step3}</div>
                <div class = "indiv-step4">${entry.fields.step4}</div>
                <div class = "indiv-step5">${entry.fields.step5}</div>
                <div class = "indiv-step6">${entry.fields.step6}</div>
                <div class = "indiv-step7">${entry.fields.step7}</div>
                <div class = "indiv-step8">${entry.fields.step8}</div>
                <div class = "indiv-step9">${entry.fields.step9}</div>
                <div class = "indiv-step10">${entry.fields.step10}</div>
            </div>
        `;
        
        console.log(entry.fields);
        html.push(html[entry]);
        covers.push(covers[entry]);
    });

    projCover1.innerHTML = covers[5];
    projCover2.innerHTML = covers[4];
    projCover3.innerHTML = covers[3];
    projCover4.innerHTML = covers[2];
    projCover5.innerHTML = covers[1];
    projCover6.innerHTML = covers[0];

    project1.innerHTML = html[5];
    project2.innerHTML = html[4];
    project3.innerHTML = html[3];
    project4.innerHTML = html[2];
    project5.innerHTML = html[1];
    project6.innerHTML = html[0];

});


let medium = document.getElementsByClassName("indiv-medium");
let role = document.getElementsByClassName("indiv-role");

let coverMedium = document.getElementsByClassName("cover-medium");
let coverRole = document.getElementsByClassName("cover-role");

function filterUndefined(){
    if (medium.innerHTML == "undefined"){
        medium.style.display = "none";
    }
    if (coverMedium.innerHTML == "undefined"){
        coverMedium.style.display = "none";
    }
}

{/* <img class = "indiv-main-image" src="${entry.fields.mainImage.fields.file.url}">
<video width="320" height="240" autoplay muted>
    <source src="${entry.fields.mainVideo.fields.file.url}" type/mp4>
</video>
<div class = "indiv-body">${entry.fields.body}</div>

<img class = "indiv-image-1" src="${entry.fields.gallery[0].fields.file.url}">
<img class = "indiv-image-2" src="${entry.fields.gallery[1].fields.file.url}">

<div class = "indiv-extended-role">${entry.fields.notable}</p>
<div class = "indiv-extended-role">${entry.fields.roleExtended}</p> */}