import "../css/Header.css";
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <header className="">
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
            <Link to="/cart">Carrito</Link>
          </li>
          <li className="header__nav-item">
            <Link to="/login">Ingresar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
