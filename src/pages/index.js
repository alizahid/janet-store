import Head from "next/head";
import { Product } from "~/components/product";

export default function Page({ products }) {
  return (
    <div>
      <Head>
        <title>Store</title>
      </Head>

      <h1 className="text-4xl font-bold">Store</h1>

      <main className="grid grid-cols-2 gap-8 mt-16">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </main>
    </div>
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
