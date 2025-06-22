"use client";

import { Grid } from "@chakra-ui/react";
import SeriesSkeleton from "./SeriesSkeleton";
import SeriesCard from "./SeriesCard";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__";

const GET_SERIES_LIST = gql(`
  query GetSeries {
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
`);

const Series = () => {
  const { data } = useQuery(GET_SERIES_LIST, {});

  return (
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
          {data.Page?.media?.map((media) =>
            media !== null ? <SeriesCard key={media.id} {...media} /> : media
          )}
        </>
      )}
    </Grid>
  );
};

export default Series;
