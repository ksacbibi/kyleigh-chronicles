import { Box, Flex } from "@chakra-ui/layout"
import React from "react"

function Highlights() {
    return (
        <Flex w="100vw" h="85vh" bgColor="#D3E9D7">
            <Box w="100%" margin="100px 200px 100px 200px">
                <Box textAlign="left">
                    <h1 className="poppins-semibold" style={{marginTop: 0, color: "#275F30"}}>highlights</h1>
                </Box>
            </Box>
        </Flex>
    )
}

export default Highlights