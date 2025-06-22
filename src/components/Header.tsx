import { Box, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { BiUser } from "react-icons/bi";

const CURRENT_YEAR = new Date().getFullYear();
const SEASONS = ["Winter", "Spring", "Summer", "Fall"];

const Header = () => {
  return (
    <Container as={"header"} paddingY={10} maxWidth={"4xl"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box height={10} width={12} position={"relative"}>
          <Link href={"/"}>
            <Image src={Logo} alt={""} fill={true} />
          </Link>
        </Box>
        <Box as={"nav"}>
          <Flex as={"ul"} alignItems={"center"} gap={8}>
            {SEASONS.map((season) => (
              <li key={season}>
                <Link href={`/${season}-${CURRENT_YEAR}`}>
                  <Flex flexDir={"column"} alignItems={"center"}>
                    <Text fontWeight={"medium"}>{season}</Text>
                    <Text fontWeight={"medium"} fontSize={"xs"}>
                      {CURRENT_YEAR}
                    </Text>
                  </Flex>
                </Link>
              </li>
            ))}
          </Flex>
        </Box>
        <IconButton variant={"ghost"}>
          <BiUser />
        </IconButton>
      </Flex>
    </Container>
  );
};

export default Header;
