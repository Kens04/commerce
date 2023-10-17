import { PostType } from './instagram';

export const FetchInstagramData = async (): Promise<PostType[]> => {
  const res = await fetch(process.env.INSTAGRAM_DATA_URL ?? '', { cache: 'no-store' });
  const data = await res.json();
  return data.data;
};
