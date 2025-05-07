// import Header from "../components/Header";
// import "../css/AdminPanel.css";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// const AdminPanel = () => {
//   const [orders, setOrders] = useState([]);
//   const [products, setProducts] = useState([]);

//   // Cargar pedidos y productos desde el servidor al montar el componente
//   useEffect(() => {
//     const fetchProductsAndOrders = async () => {
//       try {
//         const productsResponse = await fetch("http://localhost:5000/products");
//         const ordersResponse = await fetch("http://localhost:5000/orders");

//         if (!productsResponse.ok || !ordersResponse.ok) {
//           throw new Error("Error al cargar los datos. Intenta nuevamente.");
//         }

//         const productsData = await productsResponse.json();
//         const ordersData = await ordersResponse.json();

//         setProducts(productsData);
//         setOrders(ordersData);
//       } catch (error) {
//         console.error("Error al cargar los datos:", error);
//         alert("Hubo un problema al cargar los datos. Intenta nuevamente.");
//       }
//     };

//     fetchProductsAndOrders();
//   }, []);

//   // Actualizar productos en el servidor
//   const updateProducts = async (updatedProducts) => {
//     try {
//       for (const product of updatedProducts) {
//         const response = await fetch(`http://localhost:5000/products/${product.id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(product),
//         });

//         if (!response.ok) {
//           throw new Error(`Error al actualizar el producto con ID ${product.id}`);
//         }
//       }

//       setProducts(updatedProducts);
//       alert("Productos actualizados con éxito.");
//     } catch (error) {
//       console.error("Error al actualizar los productos:", error);
//       alert("Hubo un problema al actualizar los productos. Intenta nuevamente.");
//     }
//   };

//   const handlePriceChange = (id, newPrice) => {
//     const updatedProducts = products.map((product) =>
//       product.id === id ? { ...product, precio: newPrice } : product
//     );
//     updateProducts(updatedProducts);
//   };

//   const handleToggleAgotado = (id) => {
//     const updatedProducts = products.map((product) =>
//       product.id === id ? { ...product, agotado: !product.agotado } : product
//     );
//     updateProducts(updatedProducts);
//   };

//   return (
//     <section className="admin_panel">
//       <Header />
//       <div className="admin_panel--container">
//         <div className="admin_panel--content">
//           <h1>Bienvenido, Jefe Hass 🥑💼</h1>

//           {/* Gestión de productos */}
//           <h2>📦 Gestión de Productos</h2>
//           <div className="productos-panel">
//             <table className="productos-table">
//               <thead>
//                 <tr>
//                   <th>Nombre</th>
//                   <th>Precio</th>
//                   <th>Estado</th>
//                   <th>Acciones</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map((product) => (
//                   <tr key={product.id}>
//                     <td>{product.nombre}</td>
//                     <td>
//                       <input
//                         type="number"
//                         value={product.precio}
//                         onChange={(e) =>
//                           handlePriceChange(product.id, parseFloat(e.target.value))
//                         }
//                       />
//                     </td>
//                     <td>{product.agotado ? "Agotado" : "Disponible"}</td>
//                     <td>
//                       <button onClick={() => handleToggleAgotado(product.id)}>
//                         {product.agotado ? "Disponible" : "Agotado"}
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pedidos recientes */}
//           <h2>📝 Pedidos Recientes</h2>
//           <div className="admin_panel--content-pedidos">
//             {orders.map((order, index) => (
//               <div key={index} className="pedido">
//                 <p>
//                   <strong>Cliente:</strong> {order.cliente}
//                 </p>
//                 <p>
//                   <strong>Fecha:</strong>{" "}
//                   {new Date(order.fecha).toLocaleString()}
//                 </p>
//                 <p>
//                   <strong>Productos:</strong>
//                 </p>
//                 <ul>
//                   {order.productos.map((producto, i) => (
//                     <li key={i}>
//                       {producto.nombre} - {producto.cantidad} × ${producto.precio}
//                     </li>
//                   ))}
//                 </ul>
//                 <p>
//                   <strong>Total:</strong> ${order.total}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="admin_panel--content-home">
//             <Link to="/" className="btn-volver-home">
//               Volver al Inicio
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminPanel;

import Header from "../components/Header";
import "../css/AdminPanel.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsAndOrders = async () => {
      try {
        const productsResponse = await fetch("http://localhost:5000/products");
        const ordersResponse = await fetch("http://localhost:5000/orders");

        if (!productsResponse.ok || !ordersResponse.ok) {
          throw new Error("Error al cargar los datos.");
        }

        const productsData = await productsResponse.json();
        const ordersData = await ordersResponse.json();

        setProducts(productsData);
        setOrders(ordersData);
      } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al cargar los datos.");
      }
    };

    fetchProductsAndOrders();
  }, []);

  const updateProducts = async (updatedProducts) => {
    try {
      for (const product of updatedProducts) {
        const response = await fetch(`http://localhost:5000/products/${product.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });

        if (!response.ok) throw new Error(`Error al actualizar producto ID ${product.id}`);
      }

      setProducts(updatedProducts);
      alert("Productos actualizados con éxito.");
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudieron actualizar los productos.");
    }
  };

  const handlePriceChange = (id, newPrice) => {
    const updatedProducts = products.map((p) =>
      p.id === id ? { ...p, precio: newPrice } : p
    );
    updateProducts(updatedProducts);
  };

  const handleToggleAgotado = (id) => {
    const updatedProducts = products.map((p) =>
      p.id === id ? { ...p, agotado: !p.agotado } : p
    );
    updateProducts(updatedProducts);
  };

  return (
    <section className="admin_panel">
      <Header />
      <div className="admin_panel--container">
        <div className="admin_panel--content">
          <div className="admin_panel--content-bienvenida">
            <h1>Bienvenido, Jefe Hass 🥑💼</h1>
            <img src="/public/Aguacate profesional y simpático.png" alt="" />
          </div>

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
                    <td>{product.agotado ? "❌ Agotado" : "🟢 Disponible"}</td>
                    <td>
                      <button onClick={() => handleToggleAgotado(product.id)} className="btn-agotar">
                        {product.agotado ? "Marcar Disponible" : "Marcar Agotado"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>📝 Pedidos Recientes</h2>
          <div className="admin_panel--content-pedidos">
            {orders.map((order, index) => (
              <div key={index} className="pedido">
                <p><strong>Cliente:</strong> {order.cliente}</p>
                <p><strong>Fecha:</strong> {new Date(order.fecha).toLocaleString()}</p>
                <p><strong>Productos:</strong></p>
                <ul>
                  {order.productos.map((producto, i) => (
                    <li key={i}>
                      {producto.nombre} - {producto.cantidad} × ${producto.precio}
                    </li>
                  ))}
                </ul>
                <p><strong>Total:</strong> ${order.total}</p>
              </div>
            ))}
          </div>

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
