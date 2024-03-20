import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";

function Navbar() {
    return (
        <Flex
            justify="space-between"
            width="100%"
            padding="2"
            position="fixed"
            bg="white"
            zIndex={10}
        >
            <Box as="a" href="/">
                <Image src="logo.png" alt="" height={35} padding="10px 60px 10px 60px"/>
            </Box>
            <HStack spacing="60" flexWrap="wrap" margin={5} paddingRight={60}>
                <Button
                    variant="link"
                    as="a"
                >
                    HOME
                </Button>
                <Button
                    variant="link"
                    as="a"
                >
                    ABOUT
                </Button>
                <Button
                    variant="link"
                    as="a"
                >
                    CONTACT 
                </Button>
            </HStack>
        </Flex>
    )
}

export default Navbar;