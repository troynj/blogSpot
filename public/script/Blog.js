class Blog {
  constructor(title, content, userId) {
    this.title = title;
    this.content = content;
    this.userId = userId;
  }

  async createBlog() {
    const response = await fetch('/api/blogs', {
      method: 'POST',
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
      this.id = data.id;
      console.log('Blog created successfully:', data);
    } else {
      console.error('Error creating blog:', response.statusText);
    }
  }

  async updateBlog(id) {
    const response = await fetch(`/api/blogs/${id}`, {
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
  }

  async deleteBlog(id) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(`Blog with ID ${id} deleted successfully`);
    } else {
      console.error(`Error deleting blog with ID ${id}:`, response.statusText);
    }
  }
}
