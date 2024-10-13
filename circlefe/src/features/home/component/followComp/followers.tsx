import { FollowEntity } from "@/entities/follow-entity";
import { apiv1 } from "@/libs/api";
import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ButtonLink } from "../../button/link";
import FollowButton from "../../button/follow";
import HorizontalLine from "../horizontal-line";

export function Follower() {
  const [follower, setFollower] = useState<FollowEntity[]>();

  async function getFollower() {
    const response = await apiv1("/follow");
    const data = response.data.follower;

    return { follower: data };
  }
  useEffect(() => {
    getFollower().then(({ follower }) => {
      setFollower(follower);
    });
  }, []);

  if (!follower) {
    return <Spinner />;
  }
  return (
    <>
      {follower?.map((user) => {
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
                  src={user.following.profile}
                />

                <ButtonLink
                  textDecoration={"none"}
                  state={user.following.id}
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
                    {user.following.fullname}
                    <Text fontSize={"10px"} color={"gray"}>
                      @{user.following.username}
                    </Text>
                  </Text>
                </ButtonLink>
              </Box>
              <Box bg={"none"}>
                <FollowButton userId={user.following.id} />
              </Box>
            </Box>
            <HorizontalLine />
          </>
        );
      })}
    </>
  );
}
