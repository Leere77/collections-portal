"use client";

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/navigation';

export default function RouteModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const handleClose = () => {
    router.back();
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        {children}

        <button onClick={handleClose}>Deactivate</button>
        <button onClick={handleClose}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  )
}
