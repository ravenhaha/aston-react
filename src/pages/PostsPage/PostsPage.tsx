import { usePosts } from '../../features/PostList/model/hooks/usePosts';
import { PostCard } from '../../entities/post/ui/PostCard';

export const PostsPage = () => {
    const { posts, loading, error } = usePosts();

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div>
            <h1>Все посты</h1>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    );
};