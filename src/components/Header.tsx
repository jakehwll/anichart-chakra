import { Box, Container } from "@chakra-ui/react";
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Link from "next/link";

const Header = () => {
    return (
        <Container paddingY={10} maxWidth={"4xl"}>
            <Box as={"header"} height={10} width={12} position={"relative"}>
                <Link href={"/"}>
                    <Image src={Logo} alt={""} fill={true} />
                </Link>
            </Box>
        </Container>
    )
}

export default Header