// const Comment = require("./Comment.js")

document.getElementById("add_comment").addEventListener("click", function () {
  var modal = document.getElementById("commentModal");
  var span = document.getElementsByClassName("close")[0];

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

async function addComment(event) {
  event.preventDefault();

  const commentEl = document.getElementById("comment_input").value;
  const userId = 1;
  const blogId = document.getElementsByClassName("blog__content").id;
  const comment = { content: commentEl, user_id: userId, blog_id: blogId };

  console.log("adding new comment");
  console.log(comment);

  const response = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Comment added successfully:", data);
  } else {
    console.error("Error adding comment:", response.statusText);
  }

  document.location.reload();
}

document
  .getElementById("add_comment_form")
  .addEventListener("form", addComment);
