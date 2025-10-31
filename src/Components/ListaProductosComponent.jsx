import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "../Context/CarritoContext";

function ListaProductosComponent() {
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then(res => res.json())
      .then(data => setProductos(data.products));
  }, []);

  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    setMensaje(`${producto.title} agregado al carrito correctamente.`);
    setTimeout(() => setMensaje(""), 2000); 
  };

  return (
    <div className="container mt-4">
      <h2>Laptops</h2>

      {mensaje && (
        <div className="alert alert-success text-center" role="alert">
          {mensaje}
        </div>
      )}

      <div className="row">
        {productos.map(prod => (
          <div key={prod.id} className="col-md-4">
            <div className="card mb-3">
              <img src={prod.thumbnail} className="card-img-top" alt={prod.title} />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">${prod.price}</p>
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleAgregar(prod)}
                >
                  Agregar al carrito
                </button>
                <Link to={`/product/${prod.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProductosComponent;
