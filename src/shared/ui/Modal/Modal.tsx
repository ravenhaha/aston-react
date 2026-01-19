import type { PropsWithChildren, MouseEventHandler, CSSProperties } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const overlayStyles: CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const contentStyles: CSSProperties = {
    background: '#fff',
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
};

const ModalHeader = ({ children }: PropsWithChildren) => (
    <div style={{ borderBottom: '1px solid #ccc', paddingBottom: 10, marginBottom: 10 }}>
        {children}
    </div>
);

const ModalBody = ({ children }: PropsWithChildren) => (
    <div style={{ paddingBottom: 20 }}>
        {children}
    </div>
);

const ModalFooter = ({ children }: PropsWithChildren) => (
    <div style={{ marginTop: 10 }}>
        {children}
    </div>
);

export const Modal = ({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) => {
    if (!isOpen) return null;

    const handleOverlayClick: MouseEventHandler<HTMLDivElement> = () => {
        onClose();
    };

    const handleContentClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };

    return createPortal(
        <div onClick={handleOverlayClick} style={overlayStyles}>
            <div onClick={handleContentClick} style={contentStyles}>
                {children}
            </div>
        </div>,
        document.body
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export type { ModalProps };