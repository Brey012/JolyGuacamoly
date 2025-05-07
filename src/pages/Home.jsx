import Header from "../components/Header";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <section className="home_container">
      <Header />
      <div className="home_content">
        <div className="home_content--container">
          <div className="home_content--text">
            <h1>¡Bienvenido a JolyGuacamoly!</h1>
            <p>
              El guacamole más fresco, natural y sabroso que vas a probar. Hecho
              con amor, sin conservantes, y con los mejores ingredientes del
              campo. De la planta a tu plato, JolyGuacamoly no solo es comida...
              ¡es felicidad untada en cada bocado!
            </p>
            <h2>
              Haz tu pedido hoy y descubre por qué todos dicen: ¡Santo
              guacamole, qué delicia!
            </h2>
            <button onClick={() => navigate("/products")}>Productos</button>
            {loggedInUser && loggedInUser.role === "admin" && (
              <button
                className="admin-panel-btn"
                onClick={() => navigate("/admin")}
              >
                Panel de Admin
              </button>
            )}
          </div>
        </div>
        <div className="home_content--img">
          <img src="/public/JolyGuacamolyTransparent.png" alt="Guacamole" />
        </div>
      </div>
    </section>
  );
};

export default Home;
