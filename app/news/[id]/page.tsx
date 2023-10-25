import { getNewsDetail } from 'components/news/fetch-news-data';
import dayjs from 'dayjs';

const NewsId = async ({ params }: { params: { id: string } }) => {
  if (!params || typeof params.id !== 'string') {
    return <div>No post found</div>;
  }

  const post = await getNewsDetail(params.id);

  return (
    <section className="prose mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">{post.title}</h2>
        <time dateTime={post.publishedAt}>{dayjs(post.publishedAt).format('YYYY年MM月DD日')}</time>
      </div>
      <div className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
      </div>
    </section>
  );
};

export default NewsId;
