import { Button, Card, Container, Field, Input, Stack } from "@chakra-ui/react";

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
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>Job Title</Field.Label>
              <Input />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer>
          <Button variant="subtle" width={"full"}>
            Sign In
          </Button>
        </Card.Footer>
      </Card.Root>
    </Container>
  );
}
