import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import authServices from '../services/authServices';
import { jwtDecode } from 'jwt-decode';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenLS = localStorage.getItem('token');
    const token = JSON.parse(tokenLS);
    if (token) {
      setToken(token);
      const user = jwtDecode(token);
      setUser(user);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const { token } = await authServices.login(email, password);
      if (!token) return toast.error('Usuario o contraseña incorrectos');
      localStorage.setItem('token', JSON.stringify(token));
      const user = jwtDecode(token);
      setUser(user);
      setToken(token);
      toast.success(`Bienvenido ${user.name}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
