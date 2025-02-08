import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Login from './views/Login';
import { Route, Routes } from 'react-router-dom';
function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>TIENDA DE ROPA</h1>
      <h2>{user ? `Bienvenido ${user.name}` : ''}</h2>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
