import { Button } from "@chakra-ui/button";
import { Flex, HStack } from "@chakra-ui/layout";
import React from "react"

function SecondaryNav() {
    return (
        <Flex bgColor="#E6D8C7" height="30px" width="100%" padding={4}>
            <HStack spacing="60" flexWrap="wrap" margin={5} paddingLeft={30} className="poppins-regular">
                <Button
                    variant="link"
                    as="a"
                    href="/latest"
                    color="black"
                    textDecoration="none"
                >
                    LATEST
                </Button>
                <Button
                    variant="link"
                    as="a"
                    href="/lifestyle"
                    color="black"
                    textDecoration="none"
                >
                    LIFESTYLE
                </Button>
                <Button
                    variant="link"
                    as="a"
                    href="/creating"
                    color="black"
                    textDecoration="none"
                >
                    CREATING
                </Button>
                <Button
                    variant="link"
                    as="a"
                    href="/school"
                    color="black"
                    textDecoration="none"
                >
                    SCHOOL
                </Button>
                <Button
                    variant="link"
                    as="a"
                    href="/travel"
                    color="black"
                    textDecoration="none"
                >
                    TRAVEL
                </Button>
            </HStack>
        </Flex>
    )
}

export default SecondaryNav;