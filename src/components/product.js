import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "~/lib/formatter";

export function Product({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <figure className="relative w-full h-96">
        <Image
          className="object-contain"
          src={product.image}
          alt={product.description}
          fill
        />
      </figure>

      <div className="flex gap-4 mt-4">
        <h3 className="flex-1 font-medium">{product.title}</h3>

        <h4 className="tabular-nums font-bold">{formatPrice(product.price)}</h4>
      </div>
    </Link>
  );
}
