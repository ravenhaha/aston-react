import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const ModalHeader = ({ children }: { children: ReactNode }) => (
    <div style={{ borderBottom: '1px solid #ccc', paddingBottom: 10, marginBottom: 10 }}>
        {children}
    </div>
);

const ModalBody = ({ children }: { children: ReactNode }) => (
    <div style={{ paddingBottom: 20 }}>
        {children}
    </div>
);

const ModalFooter = ({ children }: { children: ReactNode }) => (
    <div style={{ marginTop: 10 }}>
        {children}
    </div>
);

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return createPortal(
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: '#fff',
                    padding: 20,
                    borderRadius: 8,
                    minWidth: 300,
                }}
            >
                {children}
            </div>
        </div>,
        document.body
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
