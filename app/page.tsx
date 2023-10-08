import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import ThreeD from 'components/threeDComponents/three-d';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description:
    '淡路島で採れた野菜を販売しています。主に玉ねぎとレタスです。農家直送の為、全国の皆様により美味しい状態でお届けできます。',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <ThreeD />
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
