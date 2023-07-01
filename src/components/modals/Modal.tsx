import ModalOverlay from "@/components/modals/ModalOverlay";

import { IModalProps } from "./types";

export default function Modal({ children, isActive, onClose }: IModalProps) {
  return (
    <ModalOverlay isActive={isActive} onClose={onClose}>
      <div className="w-screen h-screen md:w-9/12 md:h-4/5 z-10 overflow-scroll bg-white rounded-lg p-4 drop-shadow-2xl">
        {children}
      </div>
    </ModalOverlay>
  );
}