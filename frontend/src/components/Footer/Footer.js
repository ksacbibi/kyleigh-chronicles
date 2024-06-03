import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, VStack } from "@chakra-ui/layout";
import React from "react";
import './Footer.css'

function Footer() {
  return (
    <Flex w="100vw" h="60vh" bgColor="#D1BA9E" >
      <Box margin="auto">
        <HStack justifyContent="space-between" spacing={100} h="300px">
          <Image
            src="/footer/footerimg.jpg"
            alt=""
            w="165px"
            h="100%"
            objectFit="cover"
            objectPosition="center"
          />
          <VStack h="100%" align="flex-start">
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              Home
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              About
            </Button>
            <h3>Blogs</h3>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              Latest
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              Lifestyle
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              Creating
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              School
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              Travel
            </Button>
          </VStack>
          <VStack h="100%" align="flex-start" >
            <h3>Contact</h3>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              Email
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              LinkedIn
            </Button>
          </VStack>
          <VStack h="100%" align="flex-start">
            <h3>Social Media</h3>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              Instagram
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              YouTube
            </Button>
            <Button
              as="a"
              href="/"
              variant="link"
              className="footer-link"
            >
              TikTok
            </Button>
          </VStack>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Footer;
