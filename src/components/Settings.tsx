import { Button, Field, Input, Stack } from "@chakra-ui/react";

const Settings = () => {
  return (
    <Stack gap="4" w="full">
      <Field.Root>
        <Field.Label>Username</Field.Label>
        <Input />
      </Field.Root>
      <Field.Root>
        <Field.Label>Job Title</Field.Label>
        <Input />
      </Field.Root>
      <Button variant="subtle" width={"full"}>
        Sign In
      </Button>
    </Stack>
  );
};

export default Settings;
