import { getNewsList } from 'components/news/fetch-news-data';
import Pagination from 'components/news/pagination/pagination';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

const News = async () => {
  const posts = await getNewsList({ limit: 3 });
  // console.log(posts);

  return (
    <section className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">お知らせ</h2>
      </div>
      <div>
        <ul>
          {posts.contents.map((content) => {
            return (
              <li key={content.id} className="border-b border-gray-200 py-2 md:py-4">
                <Link
                  className="news-title flex flex-wrap items-center gap-2 md:gap-4"
                  href={`/news/${content.id}`}
                >
                  {content.image.url && (
                    <Image
                      src={content.image.url}
                      alt={content.title}
                      className="h-auto max-w-full"
                      width={300}
                      height={300}
                    />
                  )}
                  <div>
                    <time
                      className="text-sm text-gray-500 md:text-base"
                      dateTime={content.publishedAt}
                    >
                      {dayjs(content.publishedAt).format('YYYY年MM月DD日')}
                    </time>
                    <span className="block font-bold md:mt-4 md:text-xl">{content.title}</span>
                  </div>
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
