(async () => {
  const blogPostsContainer = document.querySelector("#blog-posts-container");

  const getAllBlogPosts = await fetch("https://raw.githubusercontent.com/NEETdemon/neetdemon-blog-data/main/index.xml");
  const parser = new DOMParser();
  
  if(getAllBlogPosts.status !== 200) {
    alert("RUH ROH! There was an error retrieving all the blogs! Please try again later.");
    return;
  }

  const allBlogPosts = await getAllBlogPosts.text();
  const xmlDoc = parser.parseFromString(allBlogPosts, "text/xml");
  const blogPosts = xmlDoc.getElementsByTagName("blogposts")[0].children;

  for(let post of blogPosts) {
    const postTitle = post.children[0].innerHTML;
    const postDate = post.children[1].innerHTML;
    const postFileName = post.children[2].innerHTML;
    const postCategory = post.children[3].innerHTML;

    const postLink = document.createElement("a");
    postLink.href = `/blog/post.html?title=${postFileName}`;

    const blogPostDiv = document.createElement("div");
    blogPostDiv.classList.add("blog-post");

    const blogTitleAndDate = document.createElement("div");
    blogTitleAndDate.classList.add("blog-title-and-date");

    const blogTitleSpan = document.createElement("span");
    blogTitleSpan.classList.add("blog-title");
    blogTitleSpan.innerText = postTitle;

    const blogPostDate = document.createElement("span");
    blogPostDate.classList.add("blog-create-date");
    blogPostDate.innerText = postDate;

    blogTitleAndDate.appendChild(blogTitleSpan);
    blogTitleAndDate.appendChild(blogPostDate);

    const blogCategoryContainer = document.createElement("div");
    blogCategoryContainer.classList.add("blog-category-container");

    const categoriesSpan = document.createElement("span");
    categoriesSpan.innerText = "Categories: ";

    const categorySpan = document.createElement("span");
    categorySpan.innerText = postCategory;

    blogCategoryContainer.appendChild(categoriesSpan);
    blogCategoryContainer.appendChild(categorySpan);

    blogPostDiv.appendChild(blogTitleAndDate);
    blogPostDiv.appendChild(blogCategoryContainer);
    postLink.appendChild(blogPostDiv);

    blogPostsContainer.appendChild(postLink);
  }

})();