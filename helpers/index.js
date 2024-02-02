export const addTask = async formData => {
  // Perform the mutation logic, e.g., make an API request to update the user
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/new`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

export const deleteTask = async formData => {
  // Perform the mutation logic, e.g., make an API request to update the user
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/delete`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

export const editTask = async formData => {
  // Perform the mutation logic, e.g., make an API request to update the user
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/edit`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

export const registerUser = async formData => {
  // Perform the mutation logic, e.g., make an API request to update the user
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/register`,
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

export const getTasks = async () => {
  try {
    const email = localStorage.getItem("userEmail");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/tasks/${email}`
    );
    return res.json();
  } catch (error) {
    return {
      name: error.name,
      message: error.message,
    };
  }
};
