import {
  AspectRatio,
  Box,
  HStack,
  Skeleton,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";

const SeriesSkeleton = () => {
  return (
    <Box>
      <HStack width={"full"}>
        <AspectRatio ratio={37 / 53} width={40}>
          <Skeleton />
        </AspectRatio>
        <Box flex={"1 1"}>
          <VStack alignItems={"start"} gap={4}>
            <VStack alignItems={"start"} gap={2} width={"full"}>
              <SkeletonText noOfLines={1} />
              <Skeleton height={7} width={"full"} />
              <SkeletonText noOfLines={1} />
            </VStack>
            <SkeletonText noOfLines={4} />
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export default SeriesSkeleton;
