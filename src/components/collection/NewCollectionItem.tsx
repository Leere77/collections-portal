import Modal from "@/components/modals/Modal";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import NewCollectionItemForm from "@/components/collection/NewCollectionItemForm";

export default function NewCollectionItem({ collectionId }: { collectionId: string }) {
  const [isActive, setIsActive] = useState(false);

  const handleOnClose = () => {
    setIsActive(false);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-lg p-4 border border-solid basis-80">
        <div onClick={() => setIsActive(true)} className="p-16 rounded-lg border-2 border-dashed cursor-pointer mb-4">
          <AddIcon />
        </div>
        <p>Add item</p>
      </div>
      <Modal isActive={isActive} onClose={handleOnClose}>
        <div className="flex justify-end">
          <CloseIcon onClick={handleOnClose} />
        </div>
        <NewCollectionItemForm collectionId={collectionId} />
      </Modal>
    </>
  );
}