import ModalOverlay from "@/components/modals/ModalOverlay";
import { IModalProps } from "./types";

export default function Modal({ children, isActive, onClose }: IModalProps) {
  return (<ModalOverlay isActive={isActive} onClose={onClose}>
    <div className="z-10 bg-white rounded-lg p-4">
      {children}
    </div>
  </ModalOverlay>);
}