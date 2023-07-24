export const formatPrice = (price) =>
  Intl.NumberFormat("en", {
    currency: "USD",
    style: "currency",
  }).format(price);
