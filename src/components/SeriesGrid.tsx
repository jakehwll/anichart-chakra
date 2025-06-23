"use client";

import { Flex, Grid, IconButton } from "@chakra-ui/react";
import SeriesSkeleton from "./SeriesSkeleton";
import SeriesCard from "./SeriesCard";
import { useQuery } from "@apollo/client";
import { gql } from "@/__generated__";
import { MediaSeason } from "@/__generated__/graphql";
import { Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useState } from "react";
import { PaginationPage } from "./PaginationCount";

const PER_PAGE = 12;

const GET_SERIES_LIST = gql(`
  query GetSeriesList($season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
      }
      media(
        season: $season
        seasonYear: $seasonYear
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
        coverImage {
          large
        }
      }
    }
  }
`);

const Series = ({
  season,
  seasonYear,
}: {
  season: MediaSeason;
  seasonYear: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error } = useQuery(GET_SERIES_LIST, {
    variables: { season, seasonYear, page: currentPage, perPage: PER_PAGE },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Flex flexDir={"column"} gap={2} width={"full"}>
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
      <Pagination.Root
        defaultPage={1}
        pageSize={PER_PAGE}
        count={data?.Page?.pageInfo?.total ?? 0}
        onPageChange={({ page }) => setCurrentPage(page)}
        width={"full"}
      >
        <Flex alignItems={"center"} gap={4}>
          <Pagination.PrevTrigger asChild>
            <IconButton variant={"ghost"}>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <PaginationPage />

          <Pagination.NextTrigger asChild>
            <IconButton variant={"ghost"}>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </Flex>
      </Pagination.Root>
    </Flex>
  );
};

export default Series;
