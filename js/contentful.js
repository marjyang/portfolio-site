var client = contentful.createClient({
    space: 'o4z3qq75yqc3',
    accessToken: 'MuqbxfbvDvLwFoLQT6WzHF2XfxyWcY2jj17UF46eRD8',
});

client.getEntries().then((entries) =>{

    let project1 = document.getElementById('project1');
    let project2 = document.getElementById('project2');
    let project3 = document.getElementById('project3');
    let project4 = document.getElementById('project4');


    entries.items.forEach((entry) => {
        let html = `
            <h1>${entry.fields.title}</h1>
            <img class='img' src='${entry.fields.image.fields.file.url}'>
            <p>${entry.fields.body}</p>
        `;
        
        project1.innerHTML = html;
        project2.innerHTML = html;
        project3.innerHTML = html;
        project4.innerHTML = html;

    });
});


    // another way:
        // console.log(entry);
        // let title = document.createElement('h1');
        // title.textContent = entry.fields.title;
        // blog.append(title);

        // let image = document.createElement('img');
        // image.src = entry.fields.image.fields.file.url;
        // image.classList.add('blog-img');
        // blog.append(image);

        // let body = document.createElement('p');
        // body.textContent = entry.fields.body;
        // blog.append(body
        