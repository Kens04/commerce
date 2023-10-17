import Link from 'next/link';

export type PostType = {
  id: string;
  permalink: string;
  media_url: string;
  media_type: string;
};

type Props = {
  posts: PostType[];
};

const Instagram = ({ posts }: Props) => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">インスタグラム</h2>
      </div>
      <div className="mt-10 grid w-full grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-3 md:gap-x-4 md:gap-y-4">
        {posts.map((post) => {
          return (
            <Link key={post.id} href={post.permalink}>
              {post.media_type === 'VIDEO' ? (
                <video
                  className="h-auto w-full object-cover md:h-full md:max-h-[400px]"
                  src={post.media_url}
                  controls
                />
              ) : (
                <img
                  className="h-auto w-full object-cover md:h-full md:max-h-[400px]"
                  src={post.media_url}
                  alt="インスタグラムの画像"
                />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Instagram;
