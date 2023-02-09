// const Comment = require("./Comment.js")

document.getElementById("add_comment").addEventListener("click", function (){
var modal = document.getElementById("myModal");
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
})

document.getElementById("submit_comment").addEventListener("click", function(){
  
  console.log("in function")
  const comment = document.getElementById("comment_input").value
  
  const userId = 1
  const blogId = 1
  const myComment = new Comment(comment, userId, blogId)
  myComment.createComment()

})