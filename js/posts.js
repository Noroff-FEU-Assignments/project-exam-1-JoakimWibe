const url = 'http://localhost:8888/travel-abroad/wp-json/wp/v2/posts';
const postsContainer = document.querySelector('.posts');

async function getPosts() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        postsContainer.innerHTML = '';

        console.log(posts);

        createHTML(posts)
    }
    catch (error) {
        postsContainer.innerHTML = error;
    }
}

getPosts();

function createHTML(posts) {
   
    for (let i = 0; i < posts.length; i++) {
        
        postsContainer.innerHTML += `<a href="spesific-post.html?id=${posts[i].id}" class="card">
                                        <h1 class="title">${posts[i].title.rendered}</h1>
                                        <div class="image" style="background-image: url(${posts[i].better_featured_image.source_url})"></div>
                                        <div class="preview-text">
                                            <p>${posts[i].excerpt.rendered}</p>
                                        </div>
                                        <h2 class="date">${posts[i].better_featured_image.description}</h2>
                                        <p class="read-more">Read more</p>
                                    </a>`;
    }
}