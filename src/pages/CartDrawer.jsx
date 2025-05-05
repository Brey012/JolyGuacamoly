import "../css/CartDrawer.css";

const CartDrawer = ({ isOpen, onClose, cartItems }) => {
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
        <button className="checkout-btn">Confirmar Pedido</button>
      </div>
    </div>
  );
};

export default CartDrawer;
