import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { PostCard } from '../../entities/post/ui/PostCard';

export const PostsPage = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery();

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки постов</div>;

    return (
        <div>
            <h1>Все посты</h1>
            {posts?.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    );
};