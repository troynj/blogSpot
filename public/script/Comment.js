const Comment = {
   create : async function (content, user_id, blog_id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content,
        user_id,
        blog_id,
      })
    });

    if (response.ok) {
      const data = await response.json();
      this.id = data.id;
      console.log('Comment added successfully:', data);
    } else {
      console.error('Error adding comment:', response.statusText);
    }
  },

  update: async function (id, content, userId, blogId) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: content,
        userId: userId,
        blogId: blogId
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Comment updated successfully:', data);
    } else {
      console.error('Error updating comment:', response.statusText);
    }
  },

  delete: async function(id) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(`Comment with ID ${id} deleted successfully`);
    } else {
      console.error(`Error deleting comment with ID ${id}:`, response.statusText);
    }
  }
}