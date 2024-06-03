import { Box, Flex } from "@chakra-ui/layout";
import React from "react";

function ComingSoon() {
  return (
    <Flex
      backgroundImage="url(/comingsoon/comingsoonbg.JPG)"
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
            <h2 className="poppins-semibold" fontSize="30px">whoops!</h2>
            <h3 className="poppins-semibold" style={{marginBottom: "0px", fontSize: "20px"}}>this page is still in the works and is</h3>
            <h1 className="poppins-bold" style={{fontSize: "70px", margin: "0px"}}>COMING SOON</h1>
        </Box>
    </Flex>
  );
}

export default ComingSoon;
