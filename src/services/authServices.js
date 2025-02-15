import axios from 'axios';

const authServices = {
  login: async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      return err;
    }
  },
};

export default authServices;
