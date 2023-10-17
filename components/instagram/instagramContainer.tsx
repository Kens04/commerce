import Instagram, { PostType } from './instagram';

interface InstagramContainerProps {
  posts: PostType[];
}

const InstagramContainer = (props: InstagramContainerProps) => {
  return <Instagram posts={props.posts} />;
};

export default InstagramContainer;
