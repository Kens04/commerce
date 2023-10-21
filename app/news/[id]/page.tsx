import { getNewsDetail } from 'components/news/fetch-news-data';
import dayjs from 'dayjs';

const NewsId = async ({ params }: { params: { id: string } }) => {
  if (!params || typeof params.id !== 'string') {
    return <div>No post found</div>;
  }

  const post = await getNewsDetail(params.id);

  return (
    <div className="prose">
      <h1>{post.title}</h1>
      <time dateTime={post.publishedAt}>{dayjs(post.publishedAt).format('YYYY年MM月DD日')}</time>
      <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
    </div>
  );
};

export default NewsId;
