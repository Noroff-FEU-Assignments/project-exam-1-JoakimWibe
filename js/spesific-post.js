const postContainer = document.querySelector('.post-container');

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const url = 'http://localhost:8888/travel-abroad/wp-json/wp/v2/posts/' + id;

async function fetchPost() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);
    }
    catch (error) {
        postContainer.innerHTML = error;
    }
}

fetchPost();

function createHTML(details) {

    document.title = 'Travel Abroad | ' + details.title.rendered;

    postContainer.innerHTML = `<h1 class="title">${details.title.rendered}</h1>
                               <div class="image" style="background-image: url(${details.better_featured_image.source_url})"></div>
                               <h2 class="date">${details.better_featured_image.description}</h2>
                               <div class="content">
                                  <p>${details.content.rendered}</p>
                               </div>`;
}