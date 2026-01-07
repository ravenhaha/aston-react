import { Outlet } from 'react-router-dom';
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader';
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter';

export const MainLayout = () => {
    return (
        <div>
            <LayoutHeader />
            <main>
                <Outlet />
            </main>
            <LayoutFooter />
        </div>
    );
};