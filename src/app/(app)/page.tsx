"use client";

import Series from "@/components/Series";
import SeriesSkeleton from "@/components/SeriesSkeleton";
import { Box, Container, Grid, Heading, VStack } from "@chakra-ui/react";
import { client } from "@/utils/rpc";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery({
    queryKey: ["series"],
    queryFn: async () => {
      const { json } = await client.api.health.$get();
      return json();
    },
  });

  return (
    <Container py={4}>
      <VStack gap={4}>
        <Box width={"full"}>
          <Heading size={"2xl"}>TV</Heading>
        </Box>
        <Box>{JSON.stringify(data)}</Box>
        <Grid
          width={"full"}
          templateColumns="repeat(1, 1fr)"
          md={{
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
          xl={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          <Series />
          <SeriesSkeleton />
        </Grid>
      </VStack>
    </Container>
  );
}
