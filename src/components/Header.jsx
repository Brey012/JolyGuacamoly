import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = ({ onCartClick }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) setLoggedInUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <header className="header" role="banner">
      <div className="header__logo">
        <Link to="/" aria-label="Logo de JolyGuacamoly">
          <img src="/public/JolyGuacamolyTransparentLogo.png" alt="Logo" />
        </Link>
      </div>

      <nav
        className="header__nav"
        role="navigation"
        aria-label="Menú principal"
      >
        <ul className="header__nav-list">
          {loggedInUser?.role === "admin" ? (
            <>
              <li className="header__nav-item">
                <Link to="/admin" aria-label="Ir al panel de administración">
                  🧑‍💼Admin
                </Link>
              </li>
              <li className="header__nav-item">
                <Link to="/" aria-label="Volver al sitio principal">
                  🏠Inicio
                </Link>
              </li>
              <li className="header__nav-item">
                <button
                  onClick={handleLogout}
                  className="header__logout-btn admin"
                  aria-label="Cerrar sesión"
                >
                  🥑 Salir como {loggedInUser.username}
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="header__nav-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/products">Productos</Link>
              </li>
              <li className="header__nav-item">
                <button onClick={onCartClick} className="header__cart-btn">
                  🛒 Carrito
                </button>
              </li>
              {loggedInUser ? (
                <li className="header__nav-item">
                  <button
                    onClick={handleLogout}
                    className="header__logout-btn user"
                  >
                    👋 {loggedInUser.username} — Cerrar sesión
                  </button>
                </li>
              ) : (
                <li className="header__nav-item">
                  <Link to="/login">Ingresar</Link>
                </li>
              )}
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
