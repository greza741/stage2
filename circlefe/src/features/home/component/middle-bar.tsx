import { Box, Flex, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import { RiUserSearchFill } from "react-icons/ri";


export function MiddleBar() {
    return (
        <Box>
            <Box backgroundColor={"brand.background"}
                color={"white"}
                minHeight={"100vh"}
                borderRight={"1px solid grey"}
                padding={"0px 20px"}>
                <Flex h="20"
                    alignItems="center">
                    <InputGroup  borderRadius={"20px"} >
                        <InputLeftAddon borderLeftRadius={"20px"} backgroundColor={"#3F3F3F"} ><RiUserSearchFill /></InputLeftAddon>
                        <Input borderRightRadius={"20px"} backgroundColor={"#3F3F3F"} type='search' placeholder='Search' />
                    </InputGroup>

                </Flex>
                    <Text>
                        
                    </Text>
            </Box>
        </Box>
    )
}