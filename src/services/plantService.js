import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;
const BASE_URL = `${BACKEND_URL}/plant`;

const create = async (formData) => {
    try {
      const res = await axios.post(BASE_URL, formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const show = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${plantId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (formData, plantId) => {
    try {
      const res = await axios.put(`${BASE_URL}/${plantId}`, formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

const deletePlant = async (plantId) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${plantId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
        return res.data;
    } catch (error) {
        console.log(error);
        }
};

export { create, show, update, deletePlant }