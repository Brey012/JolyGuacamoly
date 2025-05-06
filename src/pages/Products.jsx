import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CartDrawer from "./CartDrawer";
import "../css/Products.css";

const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, nombre: "Guacamole Tradicional", precio: 10 },
    { id: 2, nombre: "Guacamole Picante", precio: 12 },
    { id: 3, nombre: "Guacamole con Mango", precio: 15 },
    { id: 4, nombre: "Guacamole con Piña", precio: 18 },
  ];

  // Cargar el carrito desde localStorage al montar el componente
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    if (product.agotado) {
      alert("Este producto está agotado.");
      return;
    }

    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, cantidad: 1 }];
    }

    setCartItems(updatedCart);
  };

  return (
    <section className="products_container">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <div className="products_content">
        <div className="products_content--container">
          <h1>¡Nuestros sabrosos productos!</h1>
          <div className="products_content--cards">
            {products.map((product) => (
              <div key={product.id} className="products_content--card">
                <img src="/public/Guacamole.png" alt={product.nombre} />
                <div className="cards--content">
                  <h2>{product.nombre}</h2>
                  <p>Precio: ${product.precio}</p>
                  <button onClick={() => addToCart(product)}>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </section>
  );
};

export default Products;
