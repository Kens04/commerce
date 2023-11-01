import Image from 'next/image';
import Link from 'next/link';

export const Feature = () => {
  return (
    <section className="pb-6 pt-1">
      <div className="relative mt-10">
        <div>
          <Image
            src="https://cdn.shopify.com/s/files/1/0587/5580/9303/files/image_onion_1.jpg?v=1698796325"
            alt="玉ねぎ"
            width={1920}
            height={1280}
            className="h-full max-h-[750px] w-full"
          />
        </div>
        <div className="left-1/2 ml-auto mr-auto w-full max-w-none bg-white px-3 pb-10 pt-6 md:absolute md:top-1/4 md:max-w-2xl md:-translate-x-1/2 md:-translate-y-1/4 md:rounded-xl md:p-10 lg:translate-y-0">
          <h3 className="text-center text-xl font-bold md:text-3xl">Farmlysとは</h3>
          <p className="px-2 pt-5 text-justify md:leading-6 md:tracking-wide">
            Farmlysは、淡路島で家族5人と一緒に農業を営んでいます。農業は30年以上前から行っており、主に玉ねぎ、レタス、お米を栽培しています。
          </p>
          <p className="px-2 pt-3 text-justify md:leading-6 md:tracking-wide">
            私たちの強みは、最も美味しい状態の野菜をお届けすることです。
            野菜を収穫してから2日〜3日程でお届けできるため、新鮮で美味しい野菜をお楽しみいただけます。また、玉ねぎは収穫後に吊るしておくことで甘みが増し、より美味しくなります。そのため、玉ねぎも最も美味しい状態でお届けいたします。
          </p>
          <div className="button-bg mt-5 block rounded-md px-5 py-3 text-center">
            <Link className="text-white md:text-lg" href="/search">
              淡路島産の野菜一覧へ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
