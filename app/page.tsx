import { Carousel } from 'components/carousel';
import { KinuhikariCollection } from 'components/collections/kinuhikari-collection';
import { LettuceCollection } from 'components/collections/lettuce-collection';
import { OnionCollection } from 'components/collections/onion-collection';
import { ThreeItemGrid } from 'components/grid/three-items';
import { FetchInstagramData } from 'components/instagram/fetchInstagramData';
import InstagramContainer from 'components/instagram/instagramContainer';
import Footer from 'components/layout/footer';
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
  const posts = await FetchInstagramData();

  return (
    <>
      <OnionCollection />
      <LettuceCollection />
      <KinuhikariCollection />
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <InstagramContainer posts={posts} />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
