import Link from 'next/link';

export type PostType = {
  id: number;
  title: string;
  totalCount: number;
  date: number;
  contents: {
    id: string;
    title: string;
    content: string;
  }[];
};

type NewsProps = {
  posts: PostType;
};

const News = ({ posts }: NewsProps) => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">ニュース</h2>
      </div>
      <div>
        <p>{`記事の総数：${posts.totalCount}件`}</p>
        <ul>
          {posts.contents.map((content: { id: string; title: string }) => {
            return (
              <li key={content.id}>
                <Link href={`/news/${content.id}`}>{content.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default News;
