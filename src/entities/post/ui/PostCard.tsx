import type { Post } from '../model/types';

type PostCardProps = Pick<Post, 'title' | 'body'>;

export const PostCard = ({ title, body }: PostCardProps) => {
    return (
        <article>
            <h3>
                {title}
            </h3>
            <p>
                {body}
            </p>
        </article>
    );
};

export type { PostCardProps };
