const Blog = {
  create: async function(title, content, user_id) {
    const response = await fetch('/api/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        content,
        user_id,
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Blog created successfully:', data);
    } else {
      console.error('Error creating blog:', response.statusText);
    }
  },

  update: async function(id) {
    const response = await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.title,
        content: this.content,
        userId: this.userId
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Blog updated successfully:', data);
    } else {
      console.error('Error updating blog:', response.statusText);
    }
  },

  delete: async function(id) {
    const response = await fetch(`/api/blog/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(`Blog with ID ${id} deleted successfully`);
    } else {
      console.error(`Error deleting blog with ID ${id}:`, response.statusText);
    }
  }
}

//add blog
document.getElementById("add_blog").addEventListener("click", function () {
  var modal = document.getElementById("blogModal");
  var span = document.getElementsByClassName("close")[0];
document
  .getElementById("add_blog_form")
  .addEventListener("submit", addBlog);  

async function addBlog(event) {
  event.preventDefault();
  const titleEl = document.getElementById("title").value;
  const blogEl = document.getElementById("blog_input").value;
  const userId = 1;
  console.log( titleEl, blogEl)
  if (titleEl && blogEl) {
Blog.create(titleEl, blogEl, userId);
  document.location.reload();
  }
}

  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

//delete blog
const blogArr = document.querySelectorAll(".delete-btn");
blogArr.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    Blog.delete(event.target.getAttribute("id"));
    document.location.reload();
  });
});