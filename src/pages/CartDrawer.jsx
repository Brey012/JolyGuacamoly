import "../css/CartDrawer.css";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const CartDrawer = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // Calcular el total del carrito
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const handleConfirmOrder = async () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de confirmar el pedido.");
      return;
    }

    try {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      const order = {
        cliente: loggedInUser ? loggedInUser.username : "Cliente Anónimo",
        productos: cartItems,
        total,
        fecha: new Date().toISOString(),
      };

      // Enviar el pedido al servidor
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Error al confirmar el pedido. Intenta nuevamente.");
      }

      // Guardar el pedido en localStorage para la página de éxito
      localStorage.setItem("lastOrder", JSON.stringify(order));

      // Limpia el carrito
      localStorage.removeItem("cartItems");
      setCartItems([]);

      // Redirige a la página de éxito del pedido
      navigate("/order-success");
    } catch (error) {
      console.error("Error al confirmar el pedido:", error);
      alert("Hubo un problema al confirmar el pedido. Intenta nuevamente.");
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
        <p><strong>Total:</strong> ${total}</p>
        <button className="checkout-btn" onClick={handleConfirmOrder}>
          Confirmar Pedido
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
