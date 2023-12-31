import Head from "next/head";
import Image from "next/image";
import { AddToCart } from "~/components/add-to-cart";
import { Rating } from "~/components/rating";
import { formatPrice } from "~/lib/formatter";

export default function Page({ product }) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>

      <main className="flex flex-col gap-4 flex-1">
        <div className="flex gap-4 items-center">
          <div className="bg-emerald-600 text-sm font-medium rounded-lg px-2 py-1 text-white">
            {product.category}
          </div>

          <Rating count={product.rating.count} rating={product.rating.rate} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{product.title}</h2>

            <p>{product.description}</p>

            <figure className="relative w-full aspect-square lg:h-96 lg:w-96">
              <Image
                className="object-contain"
                src={product.image}
                alt={product.description}
                fill
              />
            </figure>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-bold text-4xl">
              {formatPrice(product.price)}
            </div>

            <AddToCart productId={product.id} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );

  const product = await response.json();

  return {
    props: {
      product,
    },
  };
}
