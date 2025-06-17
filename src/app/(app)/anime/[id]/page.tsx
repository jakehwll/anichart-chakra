import { Container } from "@chakra-ui/react";

export default function Page({ params }: { params: { id: string } }) {
  return <Container py={4}>{params.id}</Container>;
}
