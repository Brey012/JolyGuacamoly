import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ onCartClick }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Elimina el usuario del localStorage
    setLoggedInUser(null); // Limpia el estado
    navigate("/login"); // Redirige al inicio de sesión
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/public/JolyGuacamolyTransparentLogo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/products">Productos</Link>
          </li>
          <li className="header__nav-item">
            <button className="header__cart-btn" onClick={onCartClick}>
              Carrito
            </button>
          </li>
          <li className="header__nav-item">
            {loggedInUser ? (
              <div className="dropdown">
                <button className="dropdown__toggle">
                  {loggedInUser.username}
                </button>
                <div className="dropdown__menu">
                  <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
              </div>
            ) : (
              <Link to="/login">Ingresar</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
