import dayjs from 'dayjs';
import Link from 'next/link';

type NewsContent = {
  id: string;
  title: string;
  publishedAt: string;
};

type NewsContainerProps = {
  posts: {
    contents: NewsContent[];
  };
};

const NewsContainer = ({ posts }: NewsContainerProps) => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">ニュース</h2>
      </div>
      <div>
        <ul>
          {posts.contents.map((content: { id: string; title: string; publishedAt: string }) => {
            return (
              <li key={content.id} className="border-b border-gray-200 py-2 md:py-4">
                <Link className="news-title md:flex md:items-center" href={`/news/${content.id}`}>
                  <time
                    className="text-sm text-gray-500 md:text-base"
                    dateTime={content.publishedAt}
                  >
                    {dayjs(content.publishedAt).format('YYYY年MM月DD日')}
                  </time>
                  <span className="block font-bold md:ml-5 md:inline-block md:text-xl">
                    {content.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default NewsContainer;
