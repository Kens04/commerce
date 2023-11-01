import { Carousel } from 'components/carousel';
import { KinuhikariCollection } from 'components/collections/kinuhikari-collection';
import { LettuceCollection } from 'components/collections/lettuce-collection';
import { OnionCollection } from 'components/collections/onion-collection';
import { ThreeItemGrid } from 'components/grid/three-items';
import { FetchInstagramData } from 'components/instagram/fetch-instagram-data';

import InstagramContainer from 'components/instagram/instagram-container';
import Footer from 'components/layout/footer';
import FetchNewsData from 'components/news/fetch-news-data';
import NewsContainer from 'components/news/news-container';
import { Faq } from 'components/section/faq';
import { Feature } from 'components/section/feature';
import { LettuceFlow } from 'components/section/lettuce-flow';
import MainView from 'components/section/main-view';
import { OnionFlow } from 'components/section/onion-flow';
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
  const props = await FetchNewsData({ limit: 3 });

  return (
    <>
      <MainView />
      <NewsContainer posts={props} />
      <OnionCollection />
      <LettuceCollection />
      <KinuhikariCollection />
      <ThreeItemGrid />
      <OnionFlow />
      <LettuceFlow />
      <Feature />
      <Suspense>
        <Carousel />
        <InstagramContainer posts={posts} />
        <Faq />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
