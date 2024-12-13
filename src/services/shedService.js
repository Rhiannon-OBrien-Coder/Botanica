import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;
const BASE_URL = `${BACKEND_URL}/shed`;

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
      const res = await axios.get(`${BASE_URL}/${shedId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (formData, shedId) => {
    try {
      const res = await axios.put(`${BASE_URL}/${shedId}`, formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

const deleteShed = async (shedId) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${shedId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
        return res.data;
    } catch (error) {
        console.log(error);
        }
};

export { create, show, update, deleteShed }