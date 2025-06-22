import { MediaSeason } from "@/__generated__/graphql";
import SeriesGrid from "@/components/SeriesGrid";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [season, seasonYear] = (await params).slug.split("-");

  if (
    // Ensure that the season is a valid season
    !Object.keys(MediaSeason).includes(season) ||
    // Ensure that the year is a set of 4 numbers.
    !seasonYear.match(/^\d+$/) ||
    // Ensure that the year is above 2000.
    parseInt(seasonYear) < 2000
  ) {
    return notFound();
  }

  return (
    <Container py={4}>
      <VStack gap={4}>
        <Box width={"full"}>
          <Heading size={"2xl"}>Series</Heading>
        </Box>
        <SeriesGrid
          season={season.toUpperCase() as MediaSeason}
          seasonYear={2025}
        />
      </VStack>
    </Container>
  );
}
