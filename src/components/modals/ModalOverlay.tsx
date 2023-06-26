import Portal from "@/components/modals/Portal";
import { IModalOverlayProps } from "./types";


export default function ModalOverlay({ children, isActive, onClose }: IModalOverlayProps) {
  if (!isActive) return null;

  return (<Portal>
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center" role="dialog">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 bg-slate-300 opacity-20 cursor-pointer"
        onClick={onClose}
      />
      {children}
    </div>
  </Portal>);
}