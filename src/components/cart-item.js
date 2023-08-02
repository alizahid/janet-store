export function CartItem({ product, quantity }) {
  return (
    <div>
      {product.title} x {quantity}
    </div>
  );
}
