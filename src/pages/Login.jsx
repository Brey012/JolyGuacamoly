import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.username === email && u.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Guarda el usuario en localStorage
        if (user.role === "admin") {
          navigate("/admin"); // Redirige al panel de administración
        } else {
          navigate("/products"); // Redirige a la página de productos
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Función para manejar el registro
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        username: email,
        password,
        role: "user", // Por defecto, los nuevos usuarios serán "user"
      };

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("Usuario registrado con éxito");
        setActiveTab("login"); // Cambia a la pestaña de inicio de sesión
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

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
            <form className="form bounce-in" onSubmit={handleLogin}>
              <div className="form__container--input">
                <label htmlFor="email">📧 Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form__container--input">
                <label htmlFor="password">🔒 Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">¡Entrar!</button>
            </form>
          )}

          {activeTab === "register" && (
            <form className="form bounce-in" onSubmit={handleRegister}>
              <div className="form__container--input">
                <label htmlFor="name">🧑 Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form__container--input">
                <label htmlFor="email">📧 Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form__container--input">
                <label htmlFor="password">🔒 Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
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
