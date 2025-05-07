import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validar el formato del correo electrónico
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validar el formulario de inicio de sesión
  const validateLoginForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "El correo electrónico es obligatorio.";
    else if (!validateEmail(email))
      newErrors.email = "El formato del correo electrónico no es válido.";
    if (!password) newErrors.password = "La contraseña es obligatoria.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validar el formulario de registro
  const validateRegisterForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "El nombre es obligatorio.";
    if (!email) newErrors.email = "El correo electrónico es obligatorio.";
    else if (!validateEmail(email))
      newErrors.email = "El formato del correo electrónico no es válido.";
    if (!password) newErrors.password = "La contraseña es obligatoria.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateLoginForm()) return;

    try {
      const response = await fetch("http://localhost:5000/users");

      if (!response.ok) {
        throw new Error("Error al obtener los usuarios. Intenta nuevamente.");
      }

      const users = await response.json();

      const user = users.find(
        (u) => u.username === email && u.password === password
      );

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/products");
        }
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema al iniciar sesión. Intenta nuevamente.");
    }
  };

  // Manejar el registro
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateRegisterForm()) return;

    try {
      const newUser = {
        username: email,
        password,
        role: "user",
      };

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario. Intenta nuevamente.");
      }

      alert("Usuario registrado con éxito.");
      setActiveTab("login");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un problema al registrar el usuario. Intenta nuevamente.");
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
                {errors.email && <p className="error">{errors.email}</p>}
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
                {errors.password && <p className="error">{errors.password}</p>}
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
                {errors.name && <p className="error">{errors.name}</p>}
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
                {errors.email && <p className="error">{errors.email}</p>}
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
                {errors.password && <p className="error">{errors.password}</p>}
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
