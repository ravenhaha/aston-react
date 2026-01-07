import { useState, useCallback } from 'react';

const CommentList = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    return (
        <div>
            <button onClick={toggleCollapse}>
                {isCollapsed ? 'Show Comments' : 'Hide Comments'}
            </button>

            <div style={{ display: isCollapsed ? 'none' : 'block' }}>
                <div>Comment 1</div>
                <div>Comment 2</div>
                <div>Comment 3</div>
            </div>
        </div>
    );
};

export default CommentList;
