import Header from "../components/Header";
import "../css/AdminPanel.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  // Cargar pedidos y productos desde localStorage al montar el componente
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    const savedProducts = JSON.parse(localStorage.getItem("products"));

    if (savedOrders) {
      setOrders(savedOrders);
    }

    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  // Actualizar productos en localStorage
  const updateProducts = (updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  // Manejar el cambio de precio
  const handlePriceChange = (id, newPrice) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, precio: newPrice } : product
    );
    updateProducts(updatedProducts);
  };

  // Manejar el estado de agotado
  const handleToggleAgotado = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, agotado: !product.agotado } : product
    );
    updateProducts(updatedProducts);
  };

  return (
    <section className="admin_panel">
      <Header />
      <div className="admin_panel--container">
        <div className="admin_panel--content">
          <h1>Bienvenido, Jefe Hass 🥑💼</h1>

          {/* Gestión de productos */}
          <h2>📦 Gestión de Productos</h2>
          <div className="productos-panel">
            <table className="productos-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.nombre}</td>
                    <td>
                      <input
                        type="number"
                        value={product.precio}
                        onChange={(e) =>
                          handlePriceChange(product.id, parseFloat(e.target.value))
                        }
                      />
                    </td>
                    <td>{product.agotado ? "Agotado" : "Disponible"}</td>
                    <td>
                      <button onClick={() => handleToggleAgotado(product.id)}>
                        {product.agotado ? "Disponible" : "Agotado"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pedidos recientes */}
          <h2>📝 Pedidos Recientes</h2>
          {orders.map((order, index) => (
            <div key={index} className="pedido">
              <p>
                <strong>Cliente:</strong> {order.cliente}
              </p>
              <p>
                <strong>Fecha:</strong>{" "}
                {new Date(order.fecha).toLocaleString()}
              </p>
              <p>
                <strong>Productos:</strong>
              </p>
              <ul>
                {order.productos.map((producto, i) => (
                  <li key={i}>
                    {producto.nombre} - {producto.cantidad} × ${producto.precio}
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total:</strong> ${order.total}
              </p>
            </div>
          ))}

          <div className="admin_panel--content-home">
            <Link to="/" className="btn-volver-home">
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;

