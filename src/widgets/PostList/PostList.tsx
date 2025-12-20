import { PostCard } from '../../entities/post/ui/PostCard'

const posts = [
    { id: 1, title: 'Post 1', body: 'Body 1' },
    { id: 2, title: 'Post 2', body: 'Body 2' },
    { id: 3, title: 'Post 3', body: 'Body 3' },
    { id: 4, title: 'Post 4', body: 'Body 4' },
    { id: 5, title: 'Post 5', body: 'Body 5' },
]

export const PostList = () => {
    return (
        <div>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    )
}

