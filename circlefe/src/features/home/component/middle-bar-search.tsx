import { UserEntity } from "@/entities/user-entity";
import { apiv1 } from "@/libs/api";
import { Box, Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { SearchResult } from "./searchComp/search-result";

export function MiddleBarSearch() {
  const [searchQuery, setSearchQuery] = useState<String>("");
  const [result, setResult] = useState<UserEntity[]>([]);
  const [, setLoading] = useState<boolean>(false);
  const token = Cookies.get("token");
  let userLogin = null;
  useEffect(() => {
    search();
  }, [searchQuery]);
  if (token) {
    try {
      const payLoadBase64 = token.split(".")[1];
      if (payLoadBase64) {
        const decodedPayLoad = JSON.parse(atob(payLoadBase64));
        userLogin = decodedPayLoad;
      }
    } catch (error) {
      console.error("Failed to decode token", error);
    }
  }
  const search = async () => {
    setLoading(true);
    try {
      const response = await apiv1.get<UserEntity[]>("/search", {
        params: {
          query: searchQuery,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filterUser = response.data.filter(
        (user) => user.id !== userLogin?.id
      );
      setResult(filterUser);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Box>
      <Box
        backgroundColor={"brand.background"}
        color={"white"}
        minHeight={"100vh"}
        borderRight={"1px solid grey"}
      >
        <Flex h="20" alignItems="center" padding={"0px 20px"}>
          <InputGroup borderRadius={"20px"}>
            <InputLeftAddon
              borderLeftRadius={"20px"}
              backgroundColor={"#3F3F3F"}
            >
              <RiUserSearchFill />
            </InputLeftAddon>
            <Input
              onChange={(e) => setSearchQuery(e.target.value)}
              borderRightRadius={"20px"}
              backgroundColor={"#3F3F3F"}
              type="search"
              placeholder="Search"
            />
          </InputGroup>
        </Flex>
        <SearchResult result={result} />
      </Box>
    </Box>
  );
}
