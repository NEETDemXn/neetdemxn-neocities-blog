(async () => {
  const getBlogPostXML = await fetch("http://localhost:5500/blog/posts_1/dynamic_blog_test.xml"); // CHANGE ME TO THE `main` BRANCH WHEN READY
  const parser = new DOMParser();

  if(getBlogPostXML.status !== 200) {
    switch(getBlogPostXML.status) {
      case 404:
        window.location.replace("https://neetdemon.neocities.org/not_found.html")
        break;
      default:
        alert("Error getting blog data! RUH ROH RAGGY!!!");
        break;
    }

    return;
  }

  const blogPostXML = await getBlogPostXML.text();
  const xmlDoc = parser.parseFromString(blogPostXML, "text/xml");
  
  const blogTitle = xmlDoc.getElementsByTagName("blogtitle")[0].innerHTML;
  const blogDate = xmlDoc.getElementsByTagName("blogdate")[0].innerHTML;
  const blogHeader = xmlDoc.getElementsByTagName("headerimg")[0].innerHTML;
  const headerAlt = xmlDoc.getElementsByTagName("headeralt")[0].innerHTML;
  const blogContent = xmlDoc.getElementsByTagName("blogcontent")[0]
                      .innerHTML
                      .replace(/&lt;/g, '<')
                      .replace(/&gt;/g, '>')
                      .trim();
  
  const mainDiv = document.getElementById("main");
  const blogPostContainerDiv = document.createElement("div");
  blogPostContainerDiv.classList.add("blog-post-container");
  
  // Begin page-title-and-date
  const pageTitleAndDateContainerDiv = document.createElement("div");
  pageTitleAndDateContainerDiv.id = "page-title-and-date-container";

  const blogTitleContainerDiv = document.createElement("div");
  const blogTitleH2 = document.createElement("h2");
  const blogTitleSpan = document.createElement("span");

  blogTitleContainerDiv.id = "page-title";
  blogTitleContainerDiv.classList.add("blog-title-container");
  blogTitleContainerDiv.classList.add("relative");

  blogTitleH2.innerText = blogTitle;
  blogTitleH2.classList.add("neetDEMXN");
  blogTitleH2.classList.add("blog-title");

  blogTitleSpan.innerText = blogTitle;
  blogTitleSpan.classList.add("neetDEMXN");
  blogTitleSpan.classList.add("blog-title");

  blogTitleContainerDiv.appendChild(blogTitleH2);
  blogTitleContainerDiv.appendChild(blogTitleSpan);
  
  for(let i = 0; i < 2; i++) {
    const blogTitleSpanClone = blogTitleSpan.cloneNode(true);
    blogTitleContainerDiv.appendChild(blogTitleSpanClone);
  }

  const dateContainerDiv = document.createElement("div");
  dateContainerDiv.classList.add("date-container");
  dateContainerDiv.classList.add("relative");

  const dateCreatedSpan = document.createElement("span");
  dateCreatedSpan.innerText = `// Date Created: ${blogDate}`;
  dateCreatedSpan.classList.add("neetDEMXN");
  dateCreatedSpan.classList.add("date-created");

  dateContainerDiv.appendChild(dateCreatedSpan);

  for(let i = 0; i < 3; i++) {
    const dateCreatedClone = dateCreatedSpan.cloneNode(true);
    dateContainerDiv.appendChild(dateCreatedClone);
  }

  pageTitleAndDateContainerDiv.appendChild(blogTitleContainerDiv);
  pageTitleAndDateContainerDiv.appendChild(dateContainerDiv);

  blogPostContainerDiv.appendChild(pageTitleAndDateContainerDiv);

  // End page-title-and-date

  // Begin blog-header-image
  const headerImageContainer = document.createElement("div");
  headerImageContainer.classList.add("blog-post-image-thumbnail-container");

  const headerImg = document.createElement("img");
  headerImg.id = "blog-post-image-thumbnail";
  headerImg.src = blogHeader;
  headerImg.alt = headerAlt;

  headerImageContainer.appendChild(headerImg);
  blogPostContainerDiv.appendChild(headerImageContainer);

  // End blog-header-image

  // Begin blog-body-content-container
  const blogBodyContentContainerDiv = document.createElement("div");
  blogBodyContentContainerDiv.id = "blog-body-content-container";

  const blogBodyContent = document.createElement("p");
  blogBodyContent.innerHTML = blogContent;

  blogBodyContentContainerDiv.appendChild(blogBodyContent);
  blogPostContainerDiv.appendChild(blogBodyContentContainerDiv);

  // End blog-body-content-container

  const endTransmission = document.createElement("span");
  endTransmission.id = "end-transmission";
  endTransmission.innerHTML = "&lt; end post &gt;";

  blogPostContainerDiv.appendChild(endTransmission);


  mainDiv.appendChild(blogPostContainerDiv);
})();