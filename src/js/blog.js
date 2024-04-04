(async () => {
  const getAllBlogs = await fetch("https://raw.githubusercontent.com/NEETdemon/neocities/dynamic_blog/blog/posts_1/dynamic_blog_test_1.md") // CHANGE ME TO THE `main` BRANCH WHEN READY
  const allBlogs = await getAllBlogs.text();

  console.log(allBlogs)
})();