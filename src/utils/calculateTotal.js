export const calculateTotal = (items) =>
  items.reduce((total, item) => total + item.precio * item.cantidad, 0);