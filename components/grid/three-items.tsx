import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
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

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-screen-2xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">新着商品</h2>
      </div>
      <div className="mt-5 flex overflow-x-auto md:mt-6 md:grid md:grid-cols-3 md:gap-10">
        <div className="mr-4 flex w-10/12 flex-shrink-0 flex-col md:mr-0 md:w-full">
          <ThreeItemGridItem size="half" item={firstProduct} priority={true} />
        </div>
        <div className="mr-4 flex w-10/12 flex-shrink-0 flex-col md:mr-0 md:w-full">
          <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        </div>
        <div className="w-10/12 flex-shrink-0 flex-col md:w-full">
          <ThreeItemGridItem size="half" item={thirdProduct} />
        </div>
      </div>
    </section>
  );
}
