"use client";

import { Dialog, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const onOpenChange = () => {
    router.back();
  };

  return (
    <Dialog.Root open={true} onOpenChange={onOpenChange}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body>{children}</Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
