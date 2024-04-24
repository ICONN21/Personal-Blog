const themeButtonEl = $('#theme-btn');
const username = document.getElementById('username')
const blogTitle = document.getElementById("blogTitle")
const content = document.getElementById("content")
const blogForm = document.getElementById("blogForm")
const submitBtn = document.getElementById("submitBtn")
//set theme to dark
let isDark = 'true'
//manage theme based on button click
themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
      isDark = !isDark;
    }
  });


  function handleSubmit() {
    event.preventDefault()
    console.log("Submit button clicked")

    const blogPost = {
        username: username.value,
        blogTitle: blogTitle.value,
        content: content.value
      };
    
      localStorage.setItem('blogPost', JSON.stringify(blogPost));
   location.href = "./blog.html"
  }
  submitBtn.addEventListener('click', handleSubmit)
  

