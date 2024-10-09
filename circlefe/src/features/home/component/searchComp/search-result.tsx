import { Box, Image, Text } from "@chakra-ui/react";
import { ButtonLink } from "../../button/link";
import { UserEntity } from "@/entities/user-entity";
import { SearchNoResult } from "./search-noresult";
import HorizontalLine from "../horizontal-line";
import FollowButton from "../../button/follow";

interface SearchResultProps {
  result: UserEntity[];
}

export function SearchResult({ result }: SearchResultProps) {
  if (result.length === 0) {
    return <SearchNoResult />;
  }

  return (
    <>
      {result.map((user) => {
        return (
          <>
            <Box
              padding={"0px 20px"}
              mt={"13px"}
              bg={"none"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} bg={"none"} alignItems={"center"}>
                <Image
                  alt=""
                  top={"150px"}
                  left={"50px"}
                  boxSize="50px"
                  display={"block"}
                  borderRadius="500px"
                  src={user.profile}
                />

                <ButtonLink
                  textDecoration={"none"}
                  state={user.id}
                  to={`/profile-people/${user.id}`}
                  bg={"none"}
                >
                  <Text
                    as={"p"}
                    ms={"10px"}
                    color={"nav.text"}
                    fontSize={"15px"}
                    fontWeight={"bold"}
                    transition={"color 0.2s ease-in-out"}
                    _hover={{ color: "nav.button.hoverText" }}
                  >
                    {user.fullname}
                    <Text fontSize={"10px"} color={"gray"}>
                      @{user.username}
                    </Text>
                  </Text>
                </ButtonLink>
              </Box>
              <Box bg={"none"}>
                <FollowButton userId={user.id} />
              </Box>
            </Box>
            <HorizontalLine />
          </>
        );
      })}
    </>
  );
}
