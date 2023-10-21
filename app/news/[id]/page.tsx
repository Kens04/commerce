import { fetchPostData, getPosts } from 'components/news/fetch-news-data';
import dayjs from 'dayjs';

const NewsId = async ({ params }: { params: { id: string } }) => {
  if (!params || typeof params.id !== 'string') {
    return <div>No post found</div>;
  }

  const post = await fetchPostData(params.id);

  return (
    <div className="prose">
      <h1>{post.title}</h1>
      <time dateTime={post.publishedAt}>{dayjs(post.publishedAt).format('YYYY年MM月DD日')}</time>
      <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
    </div>
  );
};

export async function generateStaticParams() {
  const postsArray = await getPosts();
  const paths = postsArray.map((post) => ({ params: { id: post.id } }));
  return paths;
}

export default NewsId;
