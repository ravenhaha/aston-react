import { useState } from 'react';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '../../shared/ui/Button';
import { Modal } from '../../shared/ui/Modal';


export const LayoutHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <ThemeSwitcher />

            <Button onClick={() => setIsOpen(true)}>
                О проекте
            </Button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>О проекте</h2>
                <p>Учебное React-приложение</p>

                <Button onClick={() => setIsOpen(false)}>
                    Закрыть
                </Button>
            </Modal>
        </header>
    );
};
