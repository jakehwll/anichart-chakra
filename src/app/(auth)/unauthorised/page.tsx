import Settings from "@/components/Settings";
import { Card, Container } from "@chakra-ui/react";

export default function Unauthorised() {
  return (
    <Container width={"md"}>
      <Card.Root>
        <Card.Header>
          <Card.Title>Unauthorised</Card.Title>
          <Card.Description>
            {
              "You're unable to access this content without providing some details first."
            }
          </Card.Description>
        </Card.Header>
        <Card.Body gap="2">
          <Settings />
        </Card.Body>
      </Card.Root>
    </Container>
  );
}
