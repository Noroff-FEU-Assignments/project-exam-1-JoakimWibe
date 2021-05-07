const url = 'https://exam-api.wibedev.com/wp-json/wp/v2/posts/';
const postsContainer = document.querySelector('.posts');
const loadMore = document.querySelector("#moreResults");

let length = 10;
let offset = 0;

async function getPosts() {
    try {
        let response = await fetch(
            url + `?per_page=${length}&offset=${offset}&_embed`
            );

        const posts = await response.json();

        postsContainer.innerHTML = '';

        createHTML(posts)
    }
    catch (error) {
        postsContainer.innerHTML = error;
    }
}

loadMore.addEventListener("click", () => {
    length += 20;
    getPosts(url);
    window.scrollTo(0, 5500);
    loadMore.style.display = "none"; 
});

getPosts();



function createHTML(posts) {
   
    for (let i = 0; i < posts.length; i++) {

        
        postsContainer.innerHTML += `<a href="spesific-post.html?id=${posts[i].id}" class="card">
                                        <h2 class="title">${posts[i].title.rendered}</h2>
                                        <div class="preview">
                                            <div class="image" style="background-image: url(${posts[i].better_featured_image.source_url})"></div>
                                            <p class="preview-text">${posts[i].excerpt.rendered}</p>
                                            <h3 class="date">${posts[i].date}</h3>
                                            <p class="read-more">Read more</p>
                                        </div>
                                    </a>`;
    }


}