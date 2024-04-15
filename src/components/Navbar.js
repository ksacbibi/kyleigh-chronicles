import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import SecondaryNav from "./SecondaryNav";
import '../App.css';

function Navbar() {
    return (
        <Box position="fixed" zIndex={2} width="100%">
        <Flex
            justify="space-between"
            width="100%"
            padding="2"
            bg="white"
        >
            <Box as="a" href="/">
                <Image src="logo.png" alt="" height={50} padding="5px 60px 5px 60px"/>
            </Box>
            <HStack spacing="60" flexWrap="wrap" margin={5} paddingRight={60} className="poppins-regular">
                <Button
                    variant="link"
                    as="a"
                    href="/"
                    color="black"
                    textDecoration="none"
                >
                    HOME
                </Button>
                <Button
                    variant="link"
                    as="a"
                    href="/about"
                    color="black" 
                    textDecoration="none"
                >
                    ABOUT
                </Button>
                <Button
                    variant="link"
                    as="a"
                    href="/contact"
                    color="black" 
                    textDecoration="none"
                >
                    CONTACT 
                </Button>
            </HStack>
        </Flex>
        <SecondaryNav/>
        </Box>
    )
}

export default Navbar;