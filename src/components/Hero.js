import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

function Hero() {
  return (
    <Flex
      backgroundImage="url(herobg.jpg)"
      width="100vw"
      height="100vh"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      filter="auto"
      alignContent="center"
      justifyContent="center"
      flexDirection="column"
    >
        <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        />
        <Box margin="auto" color="white" zIndex={1} textAlign="center">
            <h3 className="lusitana-regular">WELCOME TO</h3>
            <h2 className="lusitana-regular" style={{marginBottom: "0px"}}>THE</h2>
            <h1 className="lavishly-yours-regular" style={{fontSize: "100px", margin: "0px"}}>kyleigh chronicles</h1>
        </Box>
    </Flex>
  );
}

export default Hero;
