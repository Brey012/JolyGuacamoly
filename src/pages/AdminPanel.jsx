import Header from "../components/Header";
import "../css/AdminPanel.css";
import { Link } from "react-router-dom"; // Importa Link

const AdminPanel = () => {
  return (
    <section className="admin_panel">
      {/* <Header /> */}
      <div className="admin_panel--container">
        <div className="admin_panel--content">
          {/* Bienvenida */}
          <div className="admin_panel--content-bienvenida">
            <h1>Bienvenido, Jefe Hass 🥑💼</h1>
            <img src="/public/Aguacate profesional y simpático.png" alt="Jefe Hass" />
          </div>

          {/* Gestión de Inventario */}
          <div className="admin_panel--content-inventario">
            <h2>📦 Inventario de Productos</h2>
            <div className="producto">
              <p>Guacamole Clásico</p>
              <input type="number" min="0" placeholder="Cantidad" />
              <button className="btn-agotar">Marcar como Agotado</button>
            </div>
            <div className="producto">
              <p>Guacamole Picante</p>
              <input type="number" min="0" placeholder="Cantidad" />
              <button className="btn-agotar">Marcar como Agotado</button>
            </div>
            {/* Agrega más productos aquí */}
          </div>

          {/* Gestión de Pedidos */}
          <div className="admin_panel--content-pedidos">
            <h2>📝 Pedidos Recientes</h2>
            <div className="pedido">
              <p><strong>Cliente:</strong> Juana Pérez</p>
              <p><strong>Producto:</strong> Guacamole Clásico</p>
              <p><strong>Cantidad:</strong> 3</p>
              <p><strong>Estado:</strong> En proceso</p>
              <button className="btn-completar">Marcar como Completado</button>
            </div>
            <div className="pedido">
              <p><strong>Cliente:</strong> Carlos Ramírez</p>
              <p><strong>Producto:</strong> Guacamole Picante</p>
              <p><strong>Cantidad:</strong> 1</p>
              <p><strong>Estado:</strong> Pendiente</p>
              <button className="btn-completar">Marcar como Completado</button>
            </div>
            {/* Agrega más pedidos aquí */}
          </div>

          {/* Botón para volver al Home */}
          <div className="admin_panel--content-home">
            <Link to="/" className="btn-volver-home">Volver al Inicio</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;

