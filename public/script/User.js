const User = {
  create: async function(name, password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        password,
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('User created successfully:', data);
    } else {
      console.error('Error creating user:', response.statusText);
    }
  },
}
//   update: async function(id) {
//     const response = await fetch(`/api/user/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: this.name,
//         password: this.password
//       })
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log('User updated successfully:', data);
//     } else {
//       console.error('Error updating user:', response.statusText);
//     }
//   },

//   delete: async function(id) {
//     const response = await fetch(`/api/users/${id}`, {
//       method: 'DELETE'
//     });

//     if (response.ok) {
//       console.log(`User with ID ${id} deleted successfully`);
//     } else {
//       console.error(`Error deleting user with ID ${id}:`, response.statusText);
//     }
//   }
// }

//add user
// document.getElementById("su").addEventListener("click", function (event) {

// //grab data and fetch
//   event.preventDefault();
//   const nameEl = document.getElementById("su_name").value;
//   const passwordEl = document.getElementById("su_password").value;
//   const cpasswordEl = document.getElementById("su_password-confirm").value;
//   console.log(nameEl, passwordEl, cpasswordEl)
//   // if (nameEl && passwordEl && passwordEl === cpasswordEl) {
// User.create(nameEl, passwordEl);
//   //document.location.reload();
//   // }
// });