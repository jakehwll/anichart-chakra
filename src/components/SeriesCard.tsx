import { Media } from "@/__generated__/graphql";
import { Box, Card, Heading, HStack, VStack } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

const SeriesCard = ({
  title,
  description,
  coverImage,
}: Pick<Media, "id" | "title" | "description" | "coverImage">) => {
  return (
    <Card.Root>
      <HStack>
        <AspectRatio
          bg={"bg.muted"}
          ratio={37 / 53}
          width={40}
          roundedLeft={"md"}
          position={"relative"}
        >
          {coverImage?.extraLarge ? (
            <Image src={coverImage.extraLarge} alt={""} fill={true} />
          ) : (
            <span />
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
              <Card.Description fontSize={"xs"}>{description}</Card.Description>
            </VStack>
          </Card.Body>
        </Box>
      </HStack>
    </Card.Root>
  );
};

export default SeriesCard;
