import { Box, Button, Flex, HStack, Image } from "@chakra-ui/react";
import React from "react";
import SecondaryNav from "./SecondaryNav";
import '../App.css';
import { Link } from "react-router-dom";

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
                <Link
                    to="/"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    HOME
                </Link>
                <Link
                    to="/about"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    ABOUT
                </Link>
                <Link
                    to="/contact"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    CONTACT 
                </Link>
            </HStack>
        </Flex>
        <SecondaryNav/>
        </Box>
    )
}

export default Navbar;