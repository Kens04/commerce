import { PostType } from 'components/news/news';
import { NextPage } from 'next';
import { generateStaticParams } from 'components/news/fetch-news-data';

const NewsId: NextPage<PostType> = async () => {
  const postsArray = await generateStaticParams();

  const post = postsArray[0];
  if (!post) {
    return <div>No post found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <time>{post.publishedAt}</time>
      <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
    </div>
  );
};

export default NewsId;
