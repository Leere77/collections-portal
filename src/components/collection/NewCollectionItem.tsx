import Modal from "@/components/modals/Modal";

import { AddIcon } from "@chakra-ui/icons";
import { CloseButton } from "@chakra-ui/react";
import { useState } from "react";
import NewCollectionItemForm from "./NewCollectionItemForm";

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
          <CloseButton onClick={handleOnClose} size='sm' />
        </div>
        <NewCollectionItemForm collectionId={collectionId} />
      </Modal>
    </>
  );
}