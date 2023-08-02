import Head from "next/head";
import { Product } from "~/components/product";

export default function Page({ products }) {
  return (
    <>
      <Head>
        <title>Store</title>
      </Head>

      <main className="grid grid-cols-2 gap-8 flex-1">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
