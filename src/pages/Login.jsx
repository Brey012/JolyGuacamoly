import { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <section className="login__container">
      <img src="/login.png" alt="Aguacate feliz" />

      <div className="user__container">
        <h1>¡Bienvenido a JolyGuacamoly! 🥑</h1>
        <p>Inicia sesión o crea tu cuenta para empezar a saborear.</p>

        <div className="tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            🌮 Iniciar sesión
          </button>
          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            🥑 Crear cuenta
          </button>
        </div>

        <div className="form__container">
          {activeTab === "login" && (
            <form className="form bounce-in">
              <div className="form__container--input">
                <label htmlFor="email">📧 Correo electrónico</label>
                <input type="email" id="email" required />
              </div>
              <div className="form__container--input">
                <label htmlFor="password">🔒 Contraseña</label>
                <input type="password" id="password" required />
              </div>
              <button type="submit">¡Entrar!</button>
            </form>
          )}

          {activeTab === "register" && (
            <form className="form bounce-in">
              <div className="form__container--input">
                <label htmlFor="name">🧑 Nombre</label>
                <input type="text" id="name" required />
              </div>
              <div className="form__container--input">
                <label htmlFor="email">📧 Correo electrónico</label>
                <input type="email" id="email" required />
              </div>
              <div className="form__container--input">
                <label htmlFor="password">🔒 Contraseña</label>
                <input type="password" id="password" required />
              </div>
              <button type="submit">¡Crear mi cuenta!</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
