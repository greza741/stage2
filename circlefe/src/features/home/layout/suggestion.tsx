import { useSuggestion2 } from "@/features/hooks/use-suggestion-dummy";
import { Box, Text } from "@chakra-ui/react";
import HorizontalLine from "../component/horizontal-line";

export function Suggestion2() {
  const { data } = useSuggestion2();
  return (
    <>
      {(data as any)?.map((user: any) => {
        return (
          <Box key={user.id}>
            <Text>fullname : {user.fullname}</Text>
            <Text>Username : {user.username}</Text>
            <Text>Bio : {user.bio}</Text>
            <Text>ID : {user.id}</Text>
            <Text>Profile : {user.profile}</Text>
            <Text>CreatedAt : {user.createdAt}</Text>
            <Text>UpdateAt : {user.updatedAt}</Text>
            <Text>Email : {user.email}</Text>
            <Text>BackgroundImage : {user.bgImage}</Text>
            <Text>Password : {user.password}</Text>
            <Text>Role : {user.role}</Text>
            <HorizontalLine />
          </Box>
        );
      })}
    </>
  );
}
