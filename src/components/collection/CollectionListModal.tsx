"use client";

import { useState } from "react";
import Modal from "../modals/Modal";
import CollectionList from "./CollectionList";
import { ICollection } from "@/lib/types/collection";
import { useRouter } from "next/navigation";

export default function CollectionListModal({ collection }: { collection: ICollection }) {
  const [isActive, setIsActive] = useState(true);
  const router = useRouter();

  const handleOnClose = () => {
    setIsActive(false);
    router.back();
  }

  return (<Modal isActive={isActive} onClose={handleOnClose}>
    <CollectionList collection={collection} />
  </Modal>)
}