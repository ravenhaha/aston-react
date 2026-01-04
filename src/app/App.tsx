import { useState, useEffect } from 'react';
import { MainLayout } from '../shared/layouts/MainLayout';
import { PostList } from '../widgets/PostList/PostList';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 секунды симуляция
    }, []);

    return (
        <MainLayout>
            <PostList isLoading={isLoading} />
        </MainLayout>
    );
};

export default App;
