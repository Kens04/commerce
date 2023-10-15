import { AddToCart } from 'components/cart/add-to-cart';
import { GridTileImage } from 'components/grid/tile';
import Price from 'components/price';
import { VariantSelector } from 'components/product/variant-selector';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function OnionCollectionDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-3 flex flex-col border-b pb-3 dark:border-neutral-700 md:mb-6 md:pb-6">
        <h1 className="mt-2 text-center text-xl md:mb-2 md:mt-5 md:text-3xl">{product.title}</h1>
        <div className="mt-3 md:mt-5">
          <span className="text-title text-lg font-semibold md:text-xl">価格</span>
        </div>
        <div className="text-body text-2xl md:text-4xl">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}

function OnionCollectionItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link className="relative block aspect-square h-full w-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={size === 'full' ? '(min-width: 768px) 66%, 100%' : '(min-width: 768px) 33%, 100%'}
          priority={priority}
          alt={item.title}
        />
      </Link>
    </div>
  );
}

export async function OnionCollection() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'onion-collection'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">淡路島産玉ねぎ一覧</h2>
      </div>
      <div className="mt-5 flex overflow-x-auto md:mt-6 md:grid md:grid-cols-3 md:gap-10">
        <div className="mr-4 flex w-10/12 flex-shrink-0 flex-col md:mr-0 md:w-full">
          <OnionCollectionItem size="half" item={firstProduct} priority={true} />
          <OnionCollectionDescription product={firstProduct} />
        </div>
        <div className="flex w-10/12 flex-shrink-0 flex-col md:w-full">
          <OnionCollectionItem size="half" item={secondProduct} priority={true} />
          <OnionCollectionDescription product={secondProduct} />
        </div>
        <div className="hidden w-10/12 flex-shrink-0 flex-col md:flex md:w-full">
          <OnionCollectionItem size="half" item={thirdProduct} />
          <OnionCollectionDescription product={thirdProduct} />
        </div>
      </div>
    </section>
  );
}
