import React, { useState } from 'react';
import { filterByLength } from '../lib/filterByLength';

const PostLengthFilter = ({ posts }: { posts: { title: string, body: string }[] }) => {
    const [length, setLength] = useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLength(Number(event.target.value));
    };

    const filteredPosts = filterByLength(posts, length);

    return (
        <div>
            <input
                type="number"
                value={length}
                onChange={handleChange}
                placeholder="Filter by length"
            />
            <div>
                {filteredPosts.map((post) => (
                    <div key={post.title}>{post.title}</div>
                ))}
            </div>
        </div>
    );
};

export default PostLengthFilter;


