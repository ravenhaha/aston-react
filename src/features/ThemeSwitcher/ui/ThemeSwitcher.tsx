import { useTheme } from '../../../shared/lib/theme';
import { Button } from '../../../shared/ui/Button';


export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme}>
            {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
        </Button>
    );
};
