import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout"
import React from "react"

function Hero() {
    return (
    <Flex>
        <Box backgroundImage="url(herobg.jpg)" width="100vw" height="100vh" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" filter='auto' brightness='50%'></Box>
    </Flex>
    )
}

export default Hero;