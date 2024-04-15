import { Button } from "@chakra-ui/button";
import { Flex, HStack } from "@chakra-ui/layout";
import React from "react"
import { Link } from "react-router-dom";

function SecondaryNav() {
    return (
        <Flex bgColor="#E6D8C7" height="30px" width="100%" padding={4}>
            <HStack spacing="60" flexWrap="wrap" margin={5} paddingLeft={30} className="poppins-regular">
                <Link
                    to="/latest"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    LATEST
                </Link>
                <Link
                    to="/lifestyle"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    LIFESTYLE
                </Link>
                <Link
                    to="/creating"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    CREATING
                </Link>
                <Link
                    to="/school"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    SCHOOL
                </Link>
                <Link
                    to="/travel"
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    TRAVEL
                </Link>
            </HStack>
        </Flex>
    )
}

export default SecondaryNav;