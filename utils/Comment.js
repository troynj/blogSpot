class Comment {
  constructor(content, userId, blogId) {
    this.content = content;
    this.userId = userId;
    this.blogId = blogId;
  }

  async createComment() {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: this.content,
        userId: this.userId,
        blogId: this.blogId
      })
    });

    if (response.ok) {
      const data = await response.json();
      this.id = data.id;
      console.log('Comment added successfully:', data);
    } else {
      console.error('Error adding comment:', response.statusText);
    }
  }

  async updateComment(id) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: this.content,
        userId: this.userId,
        blogId: this.blogId
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Comment updated successfully:', data);
    } else {
      console.error('Error updating comment:', response.statusText);
    }
  }

  async deleteComment(id) {
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
