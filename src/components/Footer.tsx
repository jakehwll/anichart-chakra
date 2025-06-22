import { Container, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container as={"footer"} display={"flex"}>
      <Flex
        flex={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        my={8}
      >
        v3.5
      </Flex>
    </Container>
  );
};

export default Footer;
