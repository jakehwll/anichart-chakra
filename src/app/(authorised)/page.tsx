import Series from "@/components/Series";
import SeriesSkeleton from "@/components/SeriesSkeleton";
import { Box, Container, Grid, Heading, VStack } from "@chakra-ui/react";
// import Link from "next/link";

// 37:53

export default function Home() {
  return (
    <Container py={4}>
      <VStack gap={4}>
        <Box width={"full"}>
          <Heading size={"2xl"}>TV</Heading>
        </Box>
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
