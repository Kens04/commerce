import { client } from 'lib/micro-cms/client';
import { PostType } from './news';

export const FetchNewsData = async (): Promise<PostType> => {
  const res = await client.get<PostType>({
    endpoint: 'news'
  });
  return res;
};

export async function generateStaticParams() {
  const posts = await client.get({ endpoint: 'news' });

  if (!posts || !posts.contents) {
    throw new Error('Invalid posts object');
  }

  const ids = posts.contents.map((post: { id: string }) => post.id);
  const data = await Promise.all(
    ids.map((id: string) =>
      fetch(`https://farmlys-news.microcms.io/api/v1/news/${id}`, {
        headers: {
          'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
        } as HeadersInit
      }).then((res) => res.json())
    )
  );

  return data;
}

export default FetchNewsData;
