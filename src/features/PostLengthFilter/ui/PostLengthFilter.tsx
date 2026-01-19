import { useState, type ChangeEventHandler } from 'react';
import type { Post } from '@/entities/post/model/types';
import { filterByLength } from '../lib/filterByLength';

interface PostLengthFilterProps {
    posts: Post[];
}

const PostLengthFilter = ({ posts }: PostLengthFilterProps) => {
    const [minLength, setMinLength] = useState(0);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setMinLength(Number(event.target.value));
    };

    const filteredPosts = filterByLength(posts, minLength);

    return (
        <div>
            <input
                type="number"
                value={minLength}
                onChange={handleChange}
                placeholder="Filter by length"
                min={0}
            />
            <div>
                {filteredPosts.map((post) => (
                    <div key={post.id}>{post.title}</div>
                ))}
            </div>
        </div>
    );
};

export default PostLengthFilter;
export type { PostLengthFilterProps };
