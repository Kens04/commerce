import { getNewsList } from 'components/news/fetch-news-data';
import Pagination from 'components/news/pagination/pagination';
import dayjs from 'dayjs';
import Link from 'next/link';

const News = async () => {
  const posts = await getNewsList({ limit: 3 });

  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">ニュース</h2>
      </div>
      <div>
        <p className="mt-4 text-gray-400">{`記事の総数: ${posts.totalCount}件`}</p>
        <ul>
          {posts.contents.map((content) => {
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
      <Pagination totalCount={posts.totalCount} basePath="/news" />
    </section>
  );
};

export default News;
