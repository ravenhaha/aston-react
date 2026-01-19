import { useState, useCallback } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

export const LayoutHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <header>
            <ThemeSwitcher />

            <Button onClick={openModal}>
                О проекте
            </Button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Modal.Header>
                    <h2>О проекте</h2>
                </Modal.Header>
                <Modal.Body>
                    <p>Учебное React-приложение</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={closeModal}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </header>
    );
};
