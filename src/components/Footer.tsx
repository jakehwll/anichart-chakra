import { Box, Container, Flex } from "@chakra-ui/react"

const Footer = () => {
    const GITHUB_HASH = "1234abcd"

    return (
        <Container as={"footer"} display={"flex"}>
            <Flex flex={1} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <code>{GITHUB_HASH}</code>&nbsp;— v3.5
            </Flex>
        </Container>
    )
}

export default Footer