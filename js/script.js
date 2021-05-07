const url = 'https://exam-api.wibedev.com/wp-json/wp/v2/posts/';
const latestContainer = document.querySelector('.content-container');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
let length = 4;
let offset = 0;

async function getLatestPosts() {
    try {
        const response = await fetch(
            url + `?per_page=${length}&offset=${offset}&_embed`
            );
        const posts = await response.json();

        latestContainer.innerHTML = '';

        createHTML(posts)
    }
    catch (error) {
        latestContainer.innerHTML = error;
    }
}

leftBtn.addEventListener("click", () => {
    if (offset >= 4) {
        offset -= 4;
    }
    getLatestPosts(url);
});
rightBtn.addEventListener("click", () => {
    offset += 4;
    getLatestPosts(url);
});

getLatestPosts();

function createHTML(posts) {
   
    for (let i = 0; i < posts.length; i++) {

        
        latestContainer.innerHTML += `<a href="spesific-post.html?id=${posts[i].id}" class="card">
                                        <div class="image" style="background-image: url(${posts[i].better_featured_image.source_url})"></div>
                                        <h3 class="title">${posts[i].title.rendered}</h3>
                                    </a>`;
    }
}