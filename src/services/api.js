const API_URL = "http://localhost:5000";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error("Error al cargar los productos");
  return response.json();
};

export const fetchOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);
  if (!response.ok) throw new Error("Error al cargar los pedidos");
  return response.json();
};

export const updateProduct = async (product) => {
  const response = await fetch(`${API_URL}/products/${product.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error("Error al actualizar el producto");
  return response.json();
};