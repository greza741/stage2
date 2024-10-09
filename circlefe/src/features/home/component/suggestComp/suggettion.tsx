import { UserEntity } from "@/entities/user-entity";
import { useAllUsers } from "@/features/hooks/use-all";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FollowButton from "../../button/follow";
import { ButtonLink } from "../../button/link";

export function Suggestion() {
  const { data } = useAllUsers();
  const [randomUsers, setRandomUsers] = useState<UserEntity[]>([]);
  const getRandomUsers = (users: UserEntity[]): UserEntity[] => {
    if (!users || users.length === 0) return [];
    const shuffled = users.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
  useEffect(() => {
    if (data && randomUsers.length === 0) {
      const selectedUsers = getRandomUsers(data);
      setRandomUsers(selectedUsers);
    }
  }, [data]);
  return (
    <Box
      py={2}
      height={"100%"}
      backgroundColor={"brand.background"}
      display={`flex`}
      flexDirection={`column`}
    >
      <Box width={`100%`} height={`10%`}>
        <Box
          margin={"10px 20px"}
          bg={"brand.background2"}
          boxShadow={"2xl"}
          borderRadius={`20px`}
          overflow={"hidden"}
          color={`white`}
          padding={`2px 20px`}
        >
          <Box>
            <Text>Sugested for you</Text>
          </Box>
          {/* baris nama suggestion */}
          {randomUsers?.map((users) => {
            return (
              <Box
                paddingTop={`10px`}
                display={`flex`}
                alignItems="center" // Menjaga elemen sejajar secara vertikal
                justifyContent="space-between" // Menyebar elemen agar di ujung kanan dan kiri
              >
                <Flex alignItems={`center`}>
                  <Box
                    borderRadius="full"
                    overflow="hidden"
                    width="40px" // sesuaikan dengan ukuran yang diinginkan
                    height="40px" // sesuaikan dengan ukuran yang diinginkan
                  >
                    <Image
                      src={users.profile}
                      alt="Profile Picture"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <ButtonLink
                    textDecoration={"none"}
                    state={users.id}
                    to={`/users/${users.id}`}
                    bg={"none"}
                  >
                    <Stack spacing={0} paddingLeft={`10px`}>
                      <Text fontWeight={`700`}>{users.fullname}</Text>
                      <Text color={"gray"}>@{users.username}</Text>
                    </Stack>
                  </ButtonLink>
                </Flex>
                <Box>
                  <FollowButton userId={users.id} />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
