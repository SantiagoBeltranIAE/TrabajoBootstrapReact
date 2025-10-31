import { useCarrito } from "../Context/CarritoContext";

function CarritoComponent() {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  if (carrito.length === 0) {
    return <p className="text-center mt-4">Tu carrito está vacío.</p>;
  }



  return (
    <div className="container mt-4">
      <h2>Tu Carrito</h2>
      {carrito.map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="card-body">
            <h5>{item.title}</h5>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.price}</p>
            <button
              onClick={() => eliminarDelCarrito(item.id)}
              className="btn btn-danger"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <button onClick={vaciarCarrito} className="btn btn-warning mt-3">
        Vaciar carrito
      </button>
    </div>
    
  );
}

export default CarritoComponent;
