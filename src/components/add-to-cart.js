import { useCallback, useState } from "react";

export function AddToCart({ productId }) {
  const [loading, setLoading] = useState(false);

  const addToCart = useCallback(async () => {
    setLoading(true);

    await fetch(`/api/add-to-cart?productId=${productId}`);

    setLoading(false);
  }, [productId]);

  return (
    <button
      disabled={loading}
      type="button"
      className="from-amber-600 to-rose-600 bg-gradient-to-br font-semibold text-white p-2 rounded-lg"
      onClick={addToCart}
    >
      {loading ? "Adding to cart" : "Add to cart"}
    </button>
  );
}
