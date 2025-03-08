import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/actions/";

export const getActions = async () => {
  return await axios.get(API_URL);
};

export const addAction = async (action) => {
  return await axios.post(API_URL, action);
};

export const updateAction = async (id, action) => {
  return await axios.put(`${API_URL}${id}/`, action);
};

export const deleteAction = async (id) => {
  return await axios.delete(`${API_URL}${id}/`);
};
