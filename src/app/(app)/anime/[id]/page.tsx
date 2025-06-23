import Series from "@/components/Series";
import { Container } from "@chakra-ui/react";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <Container py={4}>
      <Series seriesId={id} />
    </Container>
  );
}
