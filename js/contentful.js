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
    let filteredHtml = [];
    let filteredCovers = [];

    entries.items.forEach((entry) => {
        html[entry] = `
            <h1>${entry.fields.title}</h1>
            <div class = "indiv-medium">${entry.fields.medium}</div>
            <div class = "indiv-role">${entry.fields.role}</div>
        `;
        
        covers[entry] = `
            <div class="image">
                <img class ="image-img" src=${entry.fields.thumbnailImage.fields.file.url}>
                <div class = "image-overlay image-overlay-blur">
                    <div class="image-title">${entry.fields.title}</div>
                    <p class = "image-desc">${entry.fields.medium}</p>
                    <p class = "image-desc">${entry.fields.role}</p>
                </div>
            </div>
        `;
        
        console.log(entry.fields);
        html.push(html[entry]);
        covers.push(covers[entry]);
    });

    projCover1.innerHTML = covers[1];
    projCover2.innerHTML = covers[0];
    projCover3.innerHTML = covers[5];
    projCover4.innerHTML = covers[4];
    projCover5.innerHTML = covers[3];
    projCover6.innerHTML = covers[2];

    project1.innerHTML = html[1];
    project2.innerHTML = html[0];
    project3.innerHTML = html[5];
    project4.innerHTML = html[4];
    project5.innerHTML = html[3];
    project6.innerHTML = html[2];

});


{/* <img class = "indiv-main-image" src="${entry.fields.mainImage.fields.file.url}">
<video width="320" height="240" autoplay muted>
    <source src="${entry.fields.mainVideo.fields.file.url}" type/mp4>
</video>
<div class = "indiv-body">${entry.fields.body}</div>

<img class = "indiv-image-1" src="${entry.fields.gallery[0].fields.file.url}">
<img class = "indiv-image-2" src="${entry.fields.gallery[1].fields.file.url}">

<div class = "indiv-extended-role">${entry.fields.notable}</p>
<div class = "indiv-extended-role">${entry.fields.roleExtended}</p> */}