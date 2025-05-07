import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CartDrawer from "./CartDrawer";
import "../css/Products.css";

const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  // Cargar productos desde el servidor al montar el componente
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error("Error al cargar los productos.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        alert("Hubo un problema al cargar los productos. Intenta nuevamente.");
      }
    };

    fetchProducts();
  }, []);

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
      alert("Este producto está agotado y no se puede agregar al carrito.");
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
              <div
                key={product.id}
                className={`products_content--card ${
                  product.agotado ? "agotado" : ""
                }`}
              >
                <img src="/public/Guacamole.png" alt={product.nombre} />
                <div className="cards--content">
                  <h2>{product.nombre}</h2>
                  <p>Precio: ${product.precio}</p>
                  {product.agotado ? (
                    <p className="agotado-text">Producto agotado</p>
                  ) : (
                    <button onClick={() => addToCart(product)}>
                      Agregar al carrito
                    </button>
                  )}
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
