import { Media } from "@/__generated__/graphql";
import { Box, Card, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import { useMemo } from "react";
import DOMPurify from "dompurify";
import { Link } from "./Link";

const SeriesCard = ({
  id,
  title,
  description,
  coverImage,
}: Pick<Media, "id" | "title" | "description" | "coverImage">) => {
  const sanatizedDescription = useMemo(
    () =>
      description && {
        __html: DOMPurify.sanitize(description),
      },
    [description]
  );

  return (
    <Card.Root position={"relative"}>
      <Link href={`/anime/${id}`} position={"absolute"} inset={0} zIndex={20} />
      <HStack>
        <AspectRatio
          bg={"bg.muted"}
          ratio={37 / 53}
          width={40}
          roundedLeft={"md"}
          position={"relative"}
        >
          {coverImage?.large ? (
            <Image src={coverImage.large} alt={""} fill={true} />
          ) : (
            <Center fontSize="xl">Missing</Center>
          )}
        </AspectRatio>
        <Box flex={"1"} height={"full"} position={"relative"}>
          <Card.Body position={"absolute"} inset={0} overflowY={"auto"}>
            <VStack alignItems={"start"} gap={2}>
              <VStack alignItems={"start"} gap={1}>
                <Heading size={"xs"} color={"fg.muted"}>
                  Ep 1 airing in
                </Heading>
                <Heading size={"lg"}>{title?.english ?? title?.romaji}</Heading>
                <Heading size={"xs"}>{title?.romaji}</Heading>
              </VStack>
              <Card.Description
                fontSize={"xs"}
                dangerouslySetInnerHTML={sanatizedDescription || undefined}
              ></Card.Description>
            </VStack>
          </Card.Body>
        </Box>
      </HStack>
    </Card.Root>
  );
};

export default SeriesCard;
