import { useContext } from 'react';
import { useState, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, token } = useContext(AuthContext);
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/perfil', {
          headers: {
            authorization: `${token}`,
          },
        });
        setHistorial(response.data.historial);
      } catch (err) {
        toast.error(err.response.data.error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Profile</h1>
      <p>name: {user.name} </p>
      <p>email: {user.email} </p>
      {historial.map((item) => (
        <p key={item.id}>
          {item.producto} - $ {item.precio} - cant: {item.cantidad} - fecha:
          {item.fecha}
        </p>
      ))}
    </div>
  );
};

export default Profile;
