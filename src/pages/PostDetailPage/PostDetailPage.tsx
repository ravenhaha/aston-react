import { useParams } from 'react-router-dom';

export const PostDetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Пост {id}</h1>
            {/* Здесь будет детальная информация о посте */}
        </div>
    );
};