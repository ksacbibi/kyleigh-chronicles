import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import React from "react";

function Latest() {
  return (
    <Flex w="100vw" h="85vh" bgColor="#FFF6F6" justifyContent="center">
      <Box w="80%" h="65%" margin="80px 100px 50px 100px" border="1px solid #7E7E7E" position="absolute" />
        <Box w="100%" margin="100px 300px 100px 300px" alignContent="center" justifyContent="center" padding="55px 0 55px 0">
          <HStack w="100%" justifyContent="space-between">
            <Box textAlign="left" width="350px" >
              <h2
                className="poppins-semibold"
                style={{
                  marginTop: 0,
                  paddingBottom: 20,
                  color: "#593205",
                  fontSize: "22px",
                  letterSpacing: "2px",
                }}
              >
                LATEST
              </h2>
              <h1 className="poppins-bold">blog post name</h1>
              <p className="poppins-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <Button as="a" variant="link" href="/" className="metal-regular" color="black" fontSize="20px" >
                read more
              </Button>
            </Box>
            <Image src="herobg.jpg" alt="" w={294} h={316} objectFit="cover" objectPosition="center"/>
          </HStack>
        </Box>
    </Flex>
  );
}

export default Latest;
