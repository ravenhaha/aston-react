import { PostCard } from '../../entities/post/ui/PostCard'
import { Fragment } from 'react';

const posts = [
    { id: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, title: 'Post 2', body: 'Body 2' },
];

export const PostList = () => {
    return (
        <div>
            {posts.map(post => (
                <Fragment key={post.id}>
                    <PostCard
                        title={post.title}
                        body={post.body}
                    />
                </Fragment>
            ))}
        </div>
    );
};

