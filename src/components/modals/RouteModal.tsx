"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CloseButton } from "@chakra-ui/react";

import Modal from "@/components/modals/Modal";

export default function RouteModal({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(true);
  const router = useRouter();

  const handleOnClose = () => {
    setIsActive(false);
    router.back();
  }

  return (
    <Modal isActive={isActive} onClose={handleOnClose}>
      <div className="flex justify-end">
        <CloseButton onClick={handleOnClose} size='sm' />
      </div>
      {children}
    </Modal>
  );
}