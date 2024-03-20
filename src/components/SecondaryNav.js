import { Button } from "@chakra-ui/button";
import { Flex, HStack } from "@chakra-ui/layout";
import React from "react"

function SecondaryNav() {
    return (
        <Flex bgColor="#E6D8C7" height="30px" width="100%">
            <HStack>
                <Button variant="link" as="a">
                    LATEST
                </Button>
            </HStack>
        </Flex>
    )
}

export default SecondaryNav;