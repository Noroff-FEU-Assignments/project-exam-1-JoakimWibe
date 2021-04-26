const url = 'http://localhost:8888/travel-abroad/wp-json/wp/v2/posts/';
const latestContainer = document.querySelector('.content-container');

async function getLatestPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        latestContainer.innerHTML = '';

        console.log(posts);

        createHTML(posts)
    }
    catch (error) {
        latestContainer.innerHTML = error;
    }
}

getLatestPosts();

function createHTML(posts) {
   
    for (let i = 0; i < posts.length; i++) {

        if (i === 4) {
            break;
        }
        
        latestContainer.innerHTML += `<a href="spesific-post.html?id=${posts[i].id}" class="card">
                                        <h1 class="title">${posts[i].title.rendered}</h1>
                                        <div class="image" style="background-image: url(${posts[i].better_featured_image.source_url})"></div>
                                    </a>`;
    }
}