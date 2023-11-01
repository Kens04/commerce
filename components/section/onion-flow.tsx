import Image from 'next/image';

const onionImages = [
  {
    id: '14',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/14.png?v=1698623292'
  },
  {
    id: '25',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/25.png?v=1698623292'
  },
  {
    id: '26',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/26.png?v=1698623292'
  },
  {
    id: '18',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/18.png?v=1698623292'
  },
  {
    id: '19',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/19.png?v=1698623293'
  },
  {
    id: '34',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/34.png?v=1698623292'
  }
];

export const OnionFlow = () => {
  return (
    <section className="pb-6 pt-1">
      <div className="title-bg py-5 text-center">
        <h2 className="text-xl font-bold md:text-2xl">淡路島玉ねぎの一連の流れ</h2>
        <p className="pt-2 text-sm">収穫の時期6月から10月まで</p>
      </div>
      <div className="w-full overflow-x-auto">
        <ul className="flex animate-carousel gap-4">
          {onionImages.map((onionImage) => (
            <li
              key={onionImage.id}
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
            >
              <Image
                src={onionImage.src}
                width={475}
                height={275}
                alt={onionImage.id}
                className="relative h-full w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
