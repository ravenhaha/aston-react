import { useState, useCallback, type MouseEventHandler } from 'react';
import type { Comment } from '@/entities/comment/model/types';

interface CommentListProps {
    comments: Comment[];
    initialCollapsed?: boolean;
}

const CommentList = ({ comments, initialCollapsed = true }: CommentListProps) => {
    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

    const toggleCollapse: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    if (comments.length === 0) {
        return <div>No comments</div>;
    }

    return (
        <div>
            <button onClick={toggleCollapse}>
                {isCollapsed ? 'Show Comments' : 'Hide Comments'}
                {` (${comments.length})`}
            </button>

            <div style={{ display: isCollapsed ? 'none' : 'block' }}>
                {comments.map((comment) => (
                    <div key={comment.id} style={{ marginTop: 8, padding: 8, border: '1px solid #eee' }}>
                        <strong>{comment.name}</strong>
                        <p>{comment.body}</p>
                        <small>{comment.email}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentList;
export type { CommentListProps };
