import { Flex } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      minWidth={"100dvw"}
      minHeight={"100dvh"}
      flex={1}
      alignItems={"center"}
      justifyContent={"center"}
      py={8}
    >
      {children}
    </Flex>
  );
}
