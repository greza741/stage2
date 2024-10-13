import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Following } from "./followComp/following";
import { Follower } from "./followComp/followers";

export function MiddleBarFollow() {
  return (
    <Box backgroundColor={"brand.background"} h={"100%"} color={"white"}>
      <Tabs isFitted variant="enclosed" m={"1px"}>
        <TabList mb="1em">
          <Tab>Following</Tab>
          <Tab>Followers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Following />
          </TabPanel>
          <TabPanel>
            <Follower />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
