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
      const response = await client.api.graphql.$post({
        json: {
          query: `
            {
              Page {
                media(
                  season: SUMMER
                  seasonYear: 2025
                  type: ANIME
                  sort: FAVOURITES_DESC
                  format: TV
                ) {
                  id
                  title {
                    english
                    romaji
                  }
                  description
                  favourites
                  coverImage {
                    extraLarge
                    color
                  }
                  nextAiringEpisode {
                    airingAt
                    timeUntilAiring
                    episode
                  }
                }
              }
            }
          `,
        },
      });
      const { data } = await response.json();
      return data;
    },
  });

  return (
    <Container py={4}>
      <VStack gap={4}>
        <Box width={"full"}>
          <Heading size={"2xl"}>Series</Heading>
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
          {!data && (
            <>
              {new Array(9).fill(null).map((_, i) => (
                <SeriesSkeleton key={i} />
              ))}
            </>
          )}
          {data && (
            <>
              {data.Page.media.map((anime) => (
                <Series key={anime.id} />
              ))}
            </>
          )}
        </Grid>
      </VStack>
    </Container>
  );
}
