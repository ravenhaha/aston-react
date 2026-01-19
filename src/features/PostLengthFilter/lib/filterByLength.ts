import type { Post } from '@/entities/post/model/types';

export const filterByLength = <T extends Pick<Post, 'title'>>(
    posts: T[],
    minLength: number
): T[] => {
    return posts.filter((post) => post.title.length >= minLength);
};
