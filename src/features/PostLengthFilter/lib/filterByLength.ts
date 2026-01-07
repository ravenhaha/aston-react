export const filterByLength = (posts: { title: string, body: string }[], length: number) => {
    return posts.filter((post) => post.title.length >= length);
};