const Comment = {
  create: async function (content, user_id, blog_id) {
    console.log(content, user_id, blog_id);
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        user_id,
        blog_id,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      this.id = data.id;
      console.log("Comment added successfully:", data);
    } else {
      console.error("Error adding comment:", response.statusText);
    }
  },

  update: async function (id, content, user_id, blog_id) {
    const response = await fetch(`/api/comment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        user_id,
        blog_id,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Comment updated successfully:", data);
    } else {
      console.error("Error updating comment:", response.statusText);
    }
  },

  delete: async function (id) {
    const response = await fetch(`/api/comment/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(`Comment with ID ${id} deleted successfully`);
    } else {
      console.error(
        `Error deleting comment with ID ${id}:`,
        response.statusText
      );
    }
  },
};

//add comment
document.getElementById("add_comment").addEventListener("click", function () {
  var modal = document.getElementById("commentModal");
  var span = document.getElementsByClassName("close")[0];
  document
    .getElementById("add_comment_form")
    .addEventListener("submit", addComment);

  async function addComment(event) {
    event.preventDefault();
    const commentEl = document.getElementById("comment_input").value;
    const userId = 1;
    const blogId = document.querySelector(".content").id;
    commentEl && Comment.create(commentEl, userId, blogId);
    document.location.reload();
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

//delete comment
const commentArr = document.querySelectorAll(".delete-btn");
commentArr.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    Comment.delete(event.target.getAttribute("id"));
    document.location.reload();
  });
});
