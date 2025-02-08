import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userLS = localStorage.getItem('user');
    const user = JSON.parse(userLS);
    if (user) {
      setUser(user);
    }
  }, []);

  const login = (email, password) => {
    if (email !== 'diego@diego.com' || password !== '123456') {
      toast.error('Credenciales incorrectas');
    } else {
      const user = {
        email,
        name: 'Diego',
      };
      toast.success(`Bienvenido ${user.name}`);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
