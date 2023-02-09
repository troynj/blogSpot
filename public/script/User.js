class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  async createUser() {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        password: this.password
      })
    });

    if (response.ok) {
      const data = await response.json();
      this.id = data.id;
      console.log('User created successfully:', data);
    } else {
      console.error('Error creating user:', response.statusText);
    }
  }

  async updateUser(id) {
    const response = await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        password: this.password
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('User updated successfully:', data);
    } else {
      console.error('Error updating user:', response.statusText);
    }
  }

  async deleteUser(id) {
    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log(`User with ID ${id} deleted successfully`);
    } else {
      console.error(`Error deleting user with ID ${id}:`, response.statusText);
    }
  }
}
