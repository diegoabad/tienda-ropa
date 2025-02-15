import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import { Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import About from './views/About';
import NavBar from './components/NavBar';
import ProtetedRoute from './components/ProtetedRoute';
import Products from './views/Products';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>TIENDA DE ROPA</h1>
      <h2>{user ? `Bienvenido ${user.name}` : ''}</h2>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/profile"
          element={
            <ProtetedRoute>
              <Profile />
            </ProtetedRoute>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
