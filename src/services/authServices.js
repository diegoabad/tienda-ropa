import axios from 'axios';

const authServices = {
  login: async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

export default authServices;
