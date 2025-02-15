import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {user && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}
      </ul>

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
