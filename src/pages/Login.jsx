import "../css/Login.css";

const Login = () => {
  return (
    <section className="login__container">
      <img src="/public/ChatGPT Image 3 may 2025, 19_15_47.png" alt="" />
      <div className="user__container">
        <h1>Bienvenido a JolyGuacamoly!</h1>
        <p>Inicia sesión o crea tu cuenta para empezar a saborear.</p>
        <div className="form__container">
          <form action="" className="login">
            <div className="form__container--input">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form__container--input">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" required />
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>

          {/* <form action="" className="register">
            <div className="form__container--input">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form__container--input">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form__container--input">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" required />
            </div>
            <button type="submit">Crear cuenta</button>
          </form> */}
        </div>
      </div>
    </section>
  );
}

export default Login;