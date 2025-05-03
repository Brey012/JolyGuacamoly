import Header from "../components/Header";
import "../css/Products.css";

const Products = () => {
  return (
    <section className="products_container">
      <Header />
      <div className="products_content">
        <div className="products_content--container">
          <h1>¡Nuestros sabroso productos!</h1>
          <div className="products_content--cards">
            <div className="products_content--card">
              <img src="/public/Guacamole.png" alt="" />
              <div className="cards--content">
                <h2>Guacamole Tradicional</h2>
                <p>El guacamole clásico que todos aman.</p>
                <button>Agregar al carrito</button>
              </div>
            </div>
            <div className="products_content--card">
              <img src="/public/Guacamole.png" alt="" />
              <div className="cards--content">
                <h2>Guacamole Picante</h2>
                <p>Para los amantes del picante.</p>
                <button>Agregar al carrito</button>
              </div>
            </div>
            <div className="products_content--card">
              <img src="/public/Guacamole.png" alt="" />
              <div className="cards--content">
                <h2>Guacamole con Mango</h2>
                <p>Una mezcla dulce y salada que te encantará.</p>
                <button>Agregar al carrito</button>
              </div>
            </div>
            <div className="products_content--card">
              <img src="/public/Guacamole.png" alt="" />
              <div className="cards--content">
                <h2>Guacamole con Piña</h2>
                <p>Un sabor tropical que te transportará a la playa.</p>
                <button>Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
