import { Image } from "@chakra-ui/image"
import { Box, Flex, HStack } from "@chakra-ui/layout"
import React from "react"

function Author() {
    return (
        <Flex w="100vw" h="85vh" bgColor="#FFF6F6" justifyContent="center">
            <Box w="100%" margin="100px 300px 100px 300px">
                <HStack justifyContent="space-around">
                    <Box w="40%">
                    <h1 className="metal-regular">the author</h1>
                    <p className="poppins-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Box>
                    <Image src="herobg.jpg" alt="" w={294} h={316} objectFit="cover" objectPosition="center"/>
                </HStack>
            </Box>
        </Flex>
    )
}

export default Author