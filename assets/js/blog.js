const themeButtonEl = $('#theme-btn');
const post = $('#postsContainer')
const backButton = $('#backBtn')

//set theme to dark
let isDark = false
//manage theme based on button click
themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': 'white', color: '#1a1a1a' });
      isDark = !isDark;
      themeButtonEl.text('Dark Mode!')
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: 'white' });
      isDark = !isDark;
      themeButtonEl.text('Light Mode!')
    }
  });

  //function to incorporate a back Button after page loads
  function handleBackButton() {
    location.href='./index.html'
};

backButton.on("click", handleBackButton);

//Parse information from localStorage on page load.
window.onload = function() {
  renderData() 
}

function fetchBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    console.log(blogPosts)
    return blogPosts
}

function renderData() {
   const blogPosts = fetchBlogPosts()
   const postsContainer = $('#postsContainer')
   if (blogPosts) {
    // postsContainer.empty(); // Clear previous posts
    blogPosts.forEach(function(post) {
        // Create elements for each post
        const postElement = $('<div class="post"></div>');
            
        // Create and append elements for title and content
        const titleElement = $('<h2></h2>').text(post.blogTitle);
        const contentElement = $('<p></p>').text(post.content);
        const authorElement = $('<p></p>').text('Author: ' + post.username);
        postElement.append(titleElement, contentElement, authorElement);
        
        // Append the post element to the container
        postsContainer.append(postElement);
    });
} else {
    postsContainer.text('No blog posts available.');
}
}
   







// module.exports = {fetchBlogPosts}

//loop over localStorage array - grab values from array in localStorage - create elements and asign values to the created element.