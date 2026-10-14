import api from "./axios";

// Recieve user data and token from backend
export const loginUser = async (email, password) => {
  // Send a POST request to the backend with the user's email and password
  const response = await api.post("/auth/login", { email, password });

  // If the login is successful, return the response data (which includes the token and user information)
  return response.data;
};
