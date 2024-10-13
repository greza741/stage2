import { FollowEntity } from "@/entities/follow-entity";
import { apiv1 } from "@/libs/api";
import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ButtonLink } from "../../button/link";
import FollowButton from "../../button/follow";
import HorizontalLine from "../horizontal-line";

export function Following() {
  const [following, setFollowing] = useState<FollowEntity[]>();

  async function getFollowing() {
    const response = await apiv1("/follow");
    const data = response.data.following;

    return { following: data };
  }
  useEffect(() => {
    getFollowing().then(({ following }) => {
      setFollowing(following);
    });
  }, []);

  if (!following) {
    return <Spinner />;
  }
  return (
    <>
      {following?.map((user) => {
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
                  src={user.follower.profile}
                />

                <ButtonLink
                  textDecoration={"none"}
                  state={user.follower.id}
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
                    {user.follower.fullname}
                    <Text fontSize={"10px"} color={"gray"}>
                      @{user.follower.username}
                    </Text>
                  </Text>
                </ButtonLink>
              </Box>
              <Box bg={"none"}>
                <FollowButton userId={user.follower.id} />
              </Box>
            </Box>
            <HorizontalLine />
          </>
        );
      })}
    </>
  );
}
