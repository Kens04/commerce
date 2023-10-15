import { AddToCart } from 'components/cart/add-to-cart';
import { GridTileImage } from 'components/grid/tile';
import Price from 'components/price';
import { VariantSelector } from 'components/product/variant-selector';
import Prose from 'components/prose';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function KinuhikariCollectionDescription({ product }: { product: Product }) {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 mt-5 text-center text-3xl">{product.title}</h1>
        <div className="mt-5">
          <span className="text-title text-xl font-semibold">価格</span>
        </div>
        <div className="text-body text-4xl">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />

      {product.descriptionHtml ? (
        <Prose
          className="text-body mb-6 text-base leading-normal dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}

      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
    </>
  );
}

function KinuhikariCollectionItem({
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
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          // label={{
          //   position: size === 'full' ? 'center' : 'bottom',
          //   title: item.title as string,
          //   amount: item.priceRange.maxVariantPrice.amount,
          //   currencyCode: item.priceRange.maxVariantPrice.currencyCode
          // }}
        />
      </Link>
    </div>
  );
}

export async function KinuhikariCollection() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'kinuhikari-collection'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-3xl font-bold md:text-4xl">淡路島産キヌヒカリ一覧</h2>
      </div>
      <div className="mt-5 grid gap-4 md:mt-6 md:grid-cols-3 md:gap-10">
        <div className="flex flex-col">
          <KinuhikariCollectionItem size="half" item={firstProduct} priority={true} />
          <KinuhikariCollectionDescription product={firstProduct} />
        </div>
        <div className="flex flex-col">
          <KinuhikariCollectionItem size="half" item={secondProduct} priority={true} />
          <KinuhikariCollectionDescription product={secondProduct} />
        </div>
        <div className="flex flex-col">
          <KinuhikariCollectionItem size="half" item={thirdProduct} />
          <KinuhikariCollectionDescription product={thirdProduct} />
        </div>
      </div>
    </section>
  );
}
