import Header from "../components/Header";
import "../css/OrderSuccess.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  // Cargar el pedido confirmado desde localStorage
  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder"));
    if (savedOrder) {
      setOrder(savedOrder);
    } else {
      // Si no hay pedido, redirige a la página de productos
      alert("No se encontró un pedido confirmado.");
      navigate("/products");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const address = formData.get("address");
    const phone = formData.get("phone");

    if (!name || !address || !phone) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("El número de teléfono debe tener 10 dígitos.");
      return;
    }

    // Guardar los datos del cliente junto con el pedido
    const updatedOrder = { ...order, cliente: { name, address, phone } };
    localStorage.setItem("lastOrder", JSON.stringify(updatedOrder));

    alert("¡Datos de envío guardados con éxito! 🚀");
    navigate("/products");
  };

  return (
    <section className="order_content">
      <Header />
      <div className="content_container">
        <img src="/public/pedidos.png" alt="Pedido confirmado" />

        <div className="form_container">
          <h2>🥑 ¡Pedido confirmado con éxito! 📦</h2>
          <p>Gracias por tu compra. Aquí tienes el resumen de tu pedido:</p>

          {/* Resumen del pedido */}
          {order ? (
            <div className="order_summary">
              <h3>Resumen del Pedido</h3>
              <ul>
                {order.productos.map((producto, index) => (
                  <li key={index}>
                    {producto.nombre} - {producto.cantidad} × ${producto.precio}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total:</strong> ${order.total}
              </p>
              <p>
                <strong>Fecha:</strong>{" "}
                {new Date(order.fecha).toLocaleString()}
              </p>
            </div>
          ) : (
            <p>No hay información del pedido.</p>
          )}

          {/* Formulario para datos de envío */}
          <h3>Datos de Envío</h3>
          <form className="order_form" onSubmit={handleSubmit}>
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
            <button type="submit" className="confirm_button">
              🚀 Guardar Datos de Envío
            </button>
          </form>

          {/* Botón para volver a la página de productos */}
          <button
            className="back_to_products_button"
            onClick={() => navigate("/products")}
          >
            🛒 Volver a Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
