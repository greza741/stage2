import { useAppSelector } from "@/hooks/use-store";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

export function MiddleBarProfile() {
  const { fullname, email } = useAppSelector((state) => state.auth);
  return (
    <Box>
      <Box
        backgroundColor={"brand.background"}
        color={"white"}
        minHeight={"100vh"}
        borderRight={"1px solid grey"}
      >
        <Box margin={"0px 20px"} bg={"brand.background"} color={`white`}>
          <Box padding={`10px 0px`} display={"flex"} alignItems={"center"}>
            <Button
              color={"white"}
              backgroundColor={"brand.background"}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              <FaArrowLeft color="white" size={"40px"} />
              <Text fontSize={"40px"} paddingLeft={"20px"} marginBottom={"7px"}>
                {fullname}
              </Text>
            </Button>
          </Box>
          <Image
            paddingBottom={`10px`}
            h={"200px"}
            w={"full"}
            borderRadius={"20px"}
            src={
              "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            objectFit="cover"
            alt="#"
          />
          <Flex paddingStart={`3%`} mt={-12} justifyContent={`start`}>
            <Box
              borderRadius="full"
              overflow="hidden"
              width="100px" // sesuaikan dengan ukuran yang diinginkan
              height="100px" // sesuaikan dengan ukuran yang diinginkan
            >
              <Image
                src="https://heavyocity.com/wp-content/uploads/2021/08/FA_JRR_Feature_Color.jpg" // ganti dengan URL foto profilmu
                alt="Profile Picture"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
          </Flex>
          <Box display={`flex`} justifyContent={`end`} mt={`-12`}>
            <Button
              fontSize={`30`}
              padding={"24px 20px"}
              border={`1px solid white`}
              backgroundColor={`brand.background2`}
              color={"white"}
              borderRadius={`20px`}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              Edit Profile
            </Button>
          </Box>
          <Box p={`20px 0px`}>
            <Stack spacing={0} align={"start"}>
              <Heading fontSize={"40px"} fontWeight={1000} fontFamily={"body"}>
                {fullname}
              </Heading>
              <Text fontSize={`20px`} color={"grey"}>
                {email}
              </Text>
              <Text>Heal the world!</Text>
            </Stack>

            <Stack direction={"row"} justify={"start"} spacing={2}>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>23k </Text>
                <Text fontWeight={1}>Followers</Text>
              </Stack>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>23k </Text>
                <Text fontWeight={1}>Following</Text>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box>
      {/* Tabs for All Posts and Media */}
      <Tabs variant="enclosed">
        <TabList>
          <Tab flex={"1"}>All Post</Tab>
          <Tab flex={"1"}>Media</Tab>
        </TabList>

        <TabPanels>
          {/* All Post Section */}
          <TabPanel>
            <Box>
              <Text fontWeight="bold">Post 1</Text>
              <Text fontSize="sm">This is the content of post 1.</Text>
            </Box>
            <Box mt={4}>
              <Text fontWeight="bold">Post 2</Text>
              <Text fontSize="sm">This is the content of post 2.</Text>
            </Box>
            {/* Add more posts as needed */}
          </TabPanel>

          {/* Media Section */}
          <TabPanel>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
              <Image src="https://via.placeholder.com/150" alt="Media 1" />
              <Image src="https://via.placeholder.com/150" alt="Media 2" />
              <Image src="https://via.placeholder.com/150" alt="Media 3" />
              {/* Add more media as needed */}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
      </Box>
    </Box>
  );
}
