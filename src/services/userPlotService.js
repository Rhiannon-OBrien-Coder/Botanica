import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;
const BASE_URL = `${BACKEND_URL}/user-plots`;

const index = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const create = async (type, name) => {
    try {
      const toSend = {"type": type, "name": name}
      const res = await axios.post(BASE_URL, toSend, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const show = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/${userPlotId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (formData, userPlotId) => {
    try {
      const res = await axios.put(`${BASE_URL}/${userPlotId}`, formData, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

const deletePlant = async (userPlotId) => {
    try {
        const res = await axios.delete(`${BASE_URL}/${userPlotId}`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
        return res.data;
    } catch (error) {
        console.log(error);
        }
};

export { index, create, show, update, deletePlant }