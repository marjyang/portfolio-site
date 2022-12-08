var client = contentful.createClient({
    accessToken: 'MuqbxfbvDvLwFoLQT6WzHF2XfxyWcY2jj17UF46eRD8',
});

client.getEntries().then((entries) =>{

    let blog = document.getElementById('blog');

    entries.items.forEach((entry) => {
        let html = `
            <h1>${entry.fields.title}</h1>
            <img class='blog-img' src='${entry.fields.image.fields.file.url}'>
            <p>${entry.fields.body}</p>
        `;
        blog.innerHTML += html;
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
        