import { NavLink } from 'react-router-dom';

interface UserTabsProps {
    userId: string;
}

export const UserTabs = ({ userId }: UserTabsProps) => {
    return (
        <nav>
            <NavLink
                to={`/users/${userId}/posts`}
                className={({ isActive }) => isActive ? 'active-tab' : 'tab'}
            >
                Посты
            </NavLink>
            <NavLink
                to={`/users/${userId}/albums`}
                className={({ isActive }) => isActive ? 'active-tab' : 'tab'}
            >
                Альбомы
            </NavLink>
            <NavLink
                to={`/users/${userId}/todos`}
                className={({ isActive }) => isActive ? 'active-tab' : 'tab'}
            >
                Задачи
            </NavLink>
        </nav>
    );
};