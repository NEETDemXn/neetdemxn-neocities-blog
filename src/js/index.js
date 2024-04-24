(async () => {
    const latestBlogList = document.querySelector("#list-disc");
    const getAllBlogPosts = await fetch("https://raw.githubusercontent.com/NEETdemon/neetdemon-blog-data/main/index.xml");
    const parser = new DOMParser();

    if (getAllBlogPosts.status !== 200) {
        alert("RUH ROH! There was an error retrieving all the blogs! Please try again later.");
        return;
    }

    const allBlogPosts = await getAllBlogPosts.text();
    const xmlDoc = parser.parseFromString(allBlogPosts, "text/xml");
    const blogPosts = xmlDoc.getElementsByTagName("blogposts")[0].children;

    for(let i = 0; i < 4; i++) {
        const listElement = document.createElement("li");
        const postLink = document.createElement("a");

        const postTitle = blogPosts[i].children[0].innerHTML;
        const postFileName = blogPosts[i].children[2].innerHTML;

        postLink.href = `/blog/post.html?title=${postFileName}`;
        postLink.innerHTML = `> ${postTitle}`;
        listElement.appendChild(postLink);
        listElement.classList.add("blog-post-title");

        latestBlogList.appendChild(listElement);
    }
})();