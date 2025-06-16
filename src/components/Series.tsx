import { Box, Card, Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";

const Series = () => {
  return (
    <Card.Root>
      <HStack>
        <AspectRatio
          bg={"bg.muted"}
          ratio={37 / 53}
          width={40}
          roundedLeft={"md"}
        >
          <Center fontSize="xl">TODO</Center>
        </AspectRatio>
        <Box flex={"1"} height={"full"} position={"relative"}>
          <Card.Body position={"absolute"} inset={0} overflowY={"auto"}>
            <VStack alignItems={"start"} gap={2}>
              <VStack alignItems={"start"} gap={1}>
                <Heading size={"xs"} color={"fg.muted"}>
                  Ep 1 airing in
                </Heading>
                <Heading size={"lg"}>16 days, 2 hours</Heading>
                <Heading size={"xs"}>Sequel to FooBarBaz</Heading>
              </VStack>
              <Card.Description fontSize={"xs"}>
                {`
              I'm baby crucifix yr squid waistcoat. Organic hoodie banjo, synth
              aesthetic tbh squid chambray dreamcatcher pour-over. Knausgaard
              art party kombucha four dollar toast kickstarter XOXO blackbird
              spyplane four loko. Tbh edison bulb celiac brunch viral street
              art.
              `}
              </Card.Description>
            </VStack>
          </Card.Body>
        </Box>
      </HStack>
    </Card.Root>
  );
};

export default Series;
