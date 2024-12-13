import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;
const BASE_URL = `${BACKEND_URL}/store`;

const index = async () => {
    try {
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const show = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${storeId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const create = async (formData) => {
    try {
      const res = await axios.post(BASE_URL, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const update = async (formData, storeId) => {
    try {
      const res = await axios.put(`${BASE_URL}/${storeId}`, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteStore = async (storeId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${storeId}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export { index, show, create, update, deleteStore };