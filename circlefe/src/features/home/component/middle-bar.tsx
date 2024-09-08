import { Box, Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { RiUserSearchFill } from "react-icons/ri";


export function MiddleBar() {
    return (
        <Box>
            <Box backgroundColor={"brand.background"}
                color={"white"}
                minHeight={"100vh"}
                borderRight={"1px solid grey"}>
                <Flex h="20"
                    alignItems="center"
                    mx="10"
                    backgroundColor={""}>
                    <InputGroup width={"1000px"} borderRadius={"20px"} >
                        <InputLeftAddon borderLeftRadius={"20px"} backgroundColor={"#3F3F3F"} ><RiUserSearchFill /></InputLeftAddon>
                        <Input borderRightRadius={"20px"} backgroundColor={"#3F3F3F"} type='search' placeholder='Search' />
                    </InputGroup>

                </Flex>
            </Box>
        </Box>
    )
}