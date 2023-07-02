"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from '@mui/icons-material/Close';

import Modal from "@/components/modals/Modal";
import { IconButton } from "@mui/material";

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
        <IconButton aria-label="close">
          <CloseIcon onClick={handleOnClose} />
        </IconButton>
      </div>
      {children}
    </Modal>
  );
}