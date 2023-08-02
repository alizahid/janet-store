import { getCookie } from "cookies-next";
import Head from "next/head";
import { CartItem } from "~/components/cart-item";

export default function Page({ cart }) {
  return (
    <>
      <Head>
        <title>Store</title>
      </Head>

      <main className="flex-1">
        {cart.map(({ product, quantity }) => (
          <CartItem key={product.id} product={product} quantity={quantity} />
        ))}
      </main>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const data = JSON.parse(
    getCookie("cart", {
      req,
      res,
    }) ?? "[]"
  );

  const response = await fetch("https://fakestoreapi.com/products");

  const products = await response.json();

  const cart = data.map(({ productId, quantity }) => ({
    product: products.find(({ id }) => id === productId),
    quantity,
  }));

  return {
    props: {
      cart,
    },
  };
}
