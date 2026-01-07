import { Fragment, useMemo } from 'react';
import { PostCard } from '../../entities/post/ui/PostCard';
import withLoading from '../../shared/lib/hoc/withLoading';

const posts = [
    { id: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, title: 'Post 2', body: 'Body 2' },
];

const PostListComponent = () => {
    const memoizedPosts = useMemo(() => posts, [posts]);

    return (
        <div>
            {memoizedPosts.map((post: { id: number; title: string; body: string }) => (
                <Fragment key={post.id}>
                    <PostCard title={post.title} body={post.body} />
                </Fragment>
            ))}
        </div>
    );
};

const PostList = withLoading(PostListComponent);

export { PostList };
