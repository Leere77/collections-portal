export interface IModalOverlayProps {
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
}

export interface IModalProps extends IModalOverlayProps {}
