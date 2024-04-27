// const {getBlogPosts} = require("./blog.js");

const themeButtonEl = $('#theme-btn');
const username = document.getElementById('username')
const blogTitle = document.getElementById("blogTitle")
const content = document.getElementById("content")
const blogForm = document.getElementById("blogForm")
const submitBtn = document.getElementById("submitBtn")
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

  function fetchBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    console.log(blogPosts)
    return blogPosts
}

  function handleSubmit() {
    event.preventDefault()
    console.log("Submit button clicked")
    const blogPosts = fetchBlogPosts()
    const blogPost = {
        username: username.value,
        blogTitle: blogTitle.value,
        content: content.value
      };
      blogPosts.push(blogPost)
    
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
   location.href = "./blog.html"
  }
  submitBtn.addEventListener('click', handleSubmit)

  
  

