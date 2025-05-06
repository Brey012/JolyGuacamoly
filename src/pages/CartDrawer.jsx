import "../css/CartDrawer.css";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
  const navigate = useNavigate(); // Inicializa el hook de navegación

  const handleConfirmOrder = () => {
    if (cartItems.length > 0) {
      navigate("/order-success"); // Redirige a la página de éxito del pedido
    } else {
      alert("El carrito está vacío. Agrega productos antes de confirmar el pedido.");
    }
  };

  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Tu Carrito</h2>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.nombre}</span>
              <span>{item.cantidad} × ${item.precio}</span>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <button className="checkout-btn" onClick={handleConfirmOrder}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
