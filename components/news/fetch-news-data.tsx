import { client } from 'lib/micro-cms/client';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';
import { PostType } from './news';

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  content: string;
};

// ニュース一覧を取得
export const FetchNewsData = async (): Promise<PostType> => {
  const res = await client.get<PostType>({
    endpoint: 'news'
  });
  return res;
};

// ニュースの詳細を取得
export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<News>({
      endpoint: 'news',
      contentId,
      queries
    })
    .catch(notFound);

  return detailData;
};

export default FetchNewsData;
