import { client } from 'lib/micro-cms/client';
import { PostType } from './news';

export const FetchNewsData = async (): Promise<PostType> => {
  const res = await client.get<PostType>({
    endpoint: 'news'
  });
  return res;
};

export const fetchPostData = async (id: string): Promise<PostType> => {
  const res = await fetch(`https://farmlys-news.microcms.io/api/v1/news/${id}`, {
    headers: {
      'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
    } as HeadersInit
  }).then((res) => res.json());
  return res;
};

export const getPosts = async (): Promise<PostType[]> => {
  const res = await fetch('https://farmlys-news.microcms.io/api/v1/news', {
    headers: {
      'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
    } as HeadersInit
  }).then((res) => res.json());
  return res.contents;
};

export default FetchNewsData;
