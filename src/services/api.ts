import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchTranserdUserData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transefered user data", error);
    throw error;
  }
};

export const fetUserData = async () => {
  try {
    const result = await axios.get(`${API_BASE_URL}/users/1`);
    return result.data;
  } catch (error) {
    console.error("Error occured while fetch user details", error);
    throw error;
  }
};
