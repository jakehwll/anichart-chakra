import { Container, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Container py={4}>
      <Heading size={"2xl"}>TV</Heading>
      <Link href={"/anime/foo"}>Link</Link>
    </Container>
  );
}
