import Image from 'next/image';

const lettuceImages = [
  {
    id: '17',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/17.png?v=1698623292'
  },
  {
    id: '28',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/28.png?v=1698623292'
  },
  {
    id: '32',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/32.png?v=1698623292'
  },
  {
    id: '24',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/24.png?v=1698623292'
  },
  {
    id: '22',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/22.png?v=1698623292'
  },
  {
    id: '20',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/20.png?v=1698623292'
  },
  {
    id: '30',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/30.png?v=1698623292'
  },
  {
    id: '10',
    src: 'https://cdn.shopify.com/s/files/1/0587/5580/9303/files/10.png?v=1698623292'
  }
];

export const LettuceFlow = () => {
  return (
    <section className="pb-6 pt-1">
      <div className="title-bg py-5 text-center">
        <h2 className="text-xl font-bold md:text-2xl">あわじ島レタスの一連の流れ</h2>
        <p className="pt-2 text-sm">収穫の時期11月から5月まで</p>
      </div>
      <div className="w-full overflow-x-auto">
        <ul className="flex animate-carousel gap-4">
          {lettuceImages.map((lettuceImage) => (
            <li
              key={lettuceImage.id}
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
            >
              <Image
                src={lettuceImage.src}
                width={475}
                height={275}
                alt={lettuceImage.id}
                className="relative h-full w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
