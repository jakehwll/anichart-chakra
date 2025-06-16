"use client";

import { Button, Dialog, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Page({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params: _,
}: {
  params: Promise<{ id: string }>;
}) {
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
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Close</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
