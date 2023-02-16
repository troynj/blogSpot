const Auth = {
  check: async function (name, password) {
    const response = await fetch(`/api/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("User updated successfully:", data);
    } else {
      console.error("Error updating user:", response.statusText);
    }
  },
};
