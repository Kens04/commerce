import Link from 'next/link';
import useSWR from 'swr';

type PostType = {
  id: string;
  permalink: string;
  media_url: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export const Instagram = () => {
  const { data: posts, error } = useSWR(
    'https://graph.facebook.com/v15.0/17841451572101189/media?fields=id%2Cmedia_type%2Cmedia_url%2Cthumbnail_url%2Cpermalink&limit=5&access_token=EAANBm9bZBS0sBAIj3AqCVCQQQyKHwZA9TDdZAFbSoYXnEeS7yXSHaZCUoQgLYIBVb6eQQwQgoWR9Fnye46yo121JofsR2wv7y4yZBNVhL1lsMXq0Q7ZAZAzI4cvFzOElBtQHDyqORACO4GQ75l0LirR8BfkFbs6W2ZAJiZBxn0dZA2OiX6wQyzEyOfeReUBznD8rBoNcS03ZAuYVQZDZD',
    fetcher
  );

  if (error) return <div>Error loading posts</div>;
  if (!posts) return <div>Loading...</div>;

  return (
    <div className="mx-auto max-w-[1200px] py-10 text-center md:py-12">
      <h2 className="title">インスタグラム</h2>
      <div className="mt-10 flex w-full flex-wrap justify-center gap-3 md:flex-nowrap">
        {posts &&
          posts.data &&
          posts.data.map((post: PostType) => {
            return (
              <Link className="w-28 md:w-1/5" key={post.id} href={post.permalink}>
                <img
                  className="h-28 w-full object-cover md:h-full"
                  src={post.media_url}
                  alt="インスタグラムの画像"
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
