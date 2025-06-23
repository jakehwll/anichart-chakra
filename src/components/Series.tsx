"use client";

import { gql, useQuery } from "@apollo/client";
import { Box, Heading, VStack } from "@chakra-ui/react";
import DOMPurify from "dompurify";
import { useMemo } from "react";

const GET_SERIES = gql(`
  query GetSeries($seriesId: Int) {
    Media(id: $seriesId) {
      id
      title {
        english
        romaji
      }
      description
    }
  }
`);

const Series = ({ seriesId }: { seriesId: string }) => {
  const { data, error } = useQuery(GET_SERIES, {
    variables: { seriesId },
  });

  const sanatizedDescription = useMemo(
    () =>
      data?.Media?.description && {
        __html: DOMPurify.sanitize(data.Media.description),
      },
    [data?.Media?.description]
  );

  const title = data?.Media?.title;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Box>
      <VStack alignItems={"start"} gap={2}>
        <VStack alignItems={"start"} gap={1}>
          <Heading size={"lg"}>{title?.english ?? title?.romaji}</Heading>
          <Heading size={"xs"}>{title?.romaji}</Heading>
        </VStack>
        <Box
          fontSize={"xs"}
          dangerouslySetInnerHTML={sanatizedDescription || undefined}
        ></Box>
      </VStack>
    </Box>
  );
};

export default Series;
