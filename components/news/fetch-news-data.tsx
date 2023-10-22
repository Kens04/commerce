import { client } from 'lib/micro-cms/client';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  content: string;
};

// ニュース一覧を取得(トップページ)
export const FetchNewsData = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<News>({
      endpoint: 'news',
      queries
    })
    .catch(notFound);

  const contents = listData.contents.map((content) => ({
    ...content,
    publishedAt: content.publishedAt || ''
  }));

  return { contents };
};

// ニュース一覧を取得(ニュース一覧ページ)
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<News>({
      endpoint: 'news',
      queries
    })
    .catch(notFound);
  return listData;
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
