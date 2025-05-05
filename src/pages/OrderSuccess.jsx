import Header from "../components/Header";
import "../css/OrderSuccess.css";

const OrderSuccess = () => {
  return (
    <section className="order_content">
      <Header />
      <div className="content_container">
        <img src="/public/pedidos.png" alt="" />

        <div className="form_container">
          <h2>🥑 ¡Tu pedido está a punto de salir! 📦</h2>
          <p>Rellena los datos y deja que la magia del guacamole ocurra ✨</p>

          <form className="order_form">
            <div className="form_group">
              <label htmlFor="name">🧑 Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Ana Guacamolina"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="address">🏡 Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Calle del Sabor 123"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="phone">📞 Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="300 123 4567"
                required
              />
            </div>
            <div className="form_group">
              <label htmlFor="quantity">🥑 Cantidad de guacamoles</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                placeholder="¿Cuántos quieres?"
                required
              />
            </div>
            <button type="submit" className="confirm_button">
              🚀 Confirmar Pedido
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
