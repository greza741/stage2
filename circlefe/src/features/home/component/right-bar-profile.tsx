import { Box, Text } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Suggestion } from "./suggestComp/suggettion";

export function RightBarProfile() {
  return (
    <Box
      py={2}
      height={"100%"}
      backgroundColor={"brand.background"}
      display={`flex`}
      flexDirection={`column`}
    >
      <Box width={`100%`} height={`10%`}>
        <Box>
          <Suggestion />
        </Box>
        <Box
          margin={"2px 20px"}
          bg={"brand.background2"}
          boxShadow={"2xl"}
          borderRadius={`20px`}
          overflow={"hidden"}
          color={`white`}
          padding={`2px 20px`}
        >
          <Box display={`flex`} flexDirection={`row`} alignItems={`center`}>
            Developed by Suffering •
            <Box display={`flex`} flexDirection={`row`}>
              <Box paddingLeft={`5px`}>
                <FaGithub />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaLinkedin />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaFacebook />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaInstagram />
              </Box>
            </Box>
          </Box>
          <Text fontSize={`10px`} fontWeight={`100`}>
            Powered by Dumways Indonesia • #1 Coding Bootcamp
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
