"use client";

import { client } from "@/utils/rpc";
import { Button, Field, Input, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  jobTitle: string;
};

const Settings = ({ afterSubmit }: { afterSubmit?: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    client.api.auth.$post({
      json: data,
    });
    if (!afterSubmit) return;
    afterSubmit();
  };

  return (
    <Stack as={"form"} gap="4" w="full" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root>
        <Field.Label>Username</Field.Label>
        <Input {...register("username")} />
        {errors.username && <div>{errors.username.message}</div>}
      </Field.Root>
      <Field.Root>
        <Field.Label>Job Title</Field.Label>
        <Input {...register("jobTitle")} />
        {errors.jobTitle && <div>{errors.jobTitle.message}</div>}
      </Field.Root>
      <Button type={"submit"} variant="subtle" width={"full"}>
        Sign In
      </Button>
    </Stack>
  );
};

export default Settings;
