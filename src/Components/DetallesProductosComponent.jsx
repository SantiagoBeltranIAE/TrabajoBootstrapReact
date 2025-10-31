import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetallesProductosComponent() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!producto) {
    return <p className="text-center mt-4">Cargando producto...</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{producto.title}</h2>

      <div className="card mb-3" style={{ maxWidth: "100vw", margin: "auto" }}>
        <img
          src={producto.thumbnail}
          className="card-img-top"
          alt={producto.title}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">{producto.description}</p>

          <p><strong>Precio:</strong> ${producto.price}</p>
          <p><strong>Descuento:</strong> {producto.discountPercentage}%</p>
          <p><strong>Marca:</strong> {producto.brand}</p>
          <p><strong>Categoría:</strong> {producto.category}</p>
          <p><strong>Rating:</strong> {producto.rating}</p>
          <p><strong>Stock disponible:</strong> {producto.stock}</p>
          <p><strong>SKU:</strong> {producto.sku}</p>
          <p><strong>Peso:</strong> {producto.weight} kg</p>

          {producto.dimensions && (
            <p>
              <strong>Dimensiones:</strong>{" "}
              {producto.dimensions.width} x {producto.dimensions.height} x{" "}
              {producto.dimensions.depth} cm
            </p>
          )}

          <p><strong>Garantía:</strong> {producto.warrantyInformation || "No especificada"}</p>
          <p><strong>Envío:</strong> {producto.shippingInformation || "No especificada"}</p>
          <p><strong>Disponibilidad:</strong> {producto.availabilityStatus || "Desconocida"}</p>
          <p><strong>Política de devolución:</strong> {producto.returnPolicy || "No especificada"}</p>
          <p><strong>Cantidad mínima de pedido:</strong> {producto.minimumOrderQuantity || 1}</p>

          {producto.meta && (
            <>
              <p><strong>Código de barras:</strong> {producto.meta.barcode}</p>
              <img
                src={producto.meta.qrCode}
                alt="QR Code"
                style={{ width: "100px", marginTop: "10px" }}
              />
            </>
          )}

          {producto.tags && producto.tags.length > 0 && (
            <p><strong>Tags:</strong> {producto.tags.join(", ")}</p>
          )}

          <hr />

          <h5>Reseñas:</h5>
          {producto.reviews && producto.reviews.length > 0 ? (
            <ul>
              {producto.reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.reviewerName}:</strong> {review.comment}{" "}
                  ({review.rating}/5)
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay reseñas disponibles.</p>
          )}

          <div className="mt-4">
            <h5>Imágenes:</h5>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {producto.images &&
                producto.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${producto.title} ${index + 1}`}
                    style={{
                      width: "150px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesProductosComponent;
