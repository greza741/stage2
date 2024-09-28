import { useHome } from "@/features/hooks/use-home";
import { useAppSelector } from "@/hooks/use-store";
import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Form } from "react-router-dom";
import HorizontalLine from "./horizontal-line";


export function MiddleBarHome() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    data,
    isLoading,
  } = useHome();
  const {
    profile,
  } = useAppSelector((state) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Box>
      <Box
        backgroundColor={"brand.background"}
        color={"white"}
        minHeight={"100vh"}
        borderRight={"1px solid grey"}
      >
        <Box>
          <Text paddingLeft={"20px"} fontSize={"30px"} fontWeight={1000}>
            HOME
          </Text>
        </Box>
        <Box
          paddingLeft={"20px"}
          paddingTop={"30px"}
          display={"flex"}
          flexDir={"row"}
        >
          <Box
            borderRadius="full"
            overflow="hidden"
            width="40px" // sesuaikan dengan ukuran yang diinginkan
            height="40px" // sesuaikan dengan ukuran yang diinginkan
          >
            <Avatar
              src={profile}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Form onSubmit={handleSubmit(onSubmit)}>
          <Box paddingLeft={"25px"} w={"90%"}>
              <Input {...register("content")}
                backgroundColor={"#3F3F3F"}
                type="search"
                placeholder="What do you feel ?"
              />
                {errors.content && (
            <p style={{ color: "red", margin: 0 }}>{errors.content.message}</p>
          )}
              <Input
            
            {...register("image")}
            type="file"
            placeholder="image..."
            color="white"
          />
              {errors.image && (
            <p style={{ color: "red", margin: 0 }}>{errors.image.message}</p>
          )}
              
          <Box paddingLeft={"30px"}>
            <Button type="submit" backgroundColor={"brand.green"} color={"white"}>
            {isSubmitting ? "Submitting..." : "POST"}
            </Button>
          </Box>
          </Box>
          </Form>
        </Box>
        <HorizontalLine />
        {data?.slice().reverse().map((thread) => {
           const createdAtDate = new Date(thread.createdAt);
          return (
            <Box  key={thread.id}>
        <Box paddingLeft={"20px"} display={"flex"} flexDir={"row"}>
          <Box
            borderRadius="full"
            overflow="hidden"
            width="40px" 
            height="40px" 
          >
            <Avatar
              src={thread.user.profile}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Box paddingLeft={"25px"} flex={2}>
            <Box>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>{thread.user.fullname} </Text>
                <Text fontWeight={1}>@{thread.user.username}</Text>
                <Text fontWeight={1}>•</Text>
                <Text fontWeight={1}>{formatDistanceToNow(createdAtDate, { addSuffix: true })}</Text>
              </Stack>
            </Box>
            <Box paddingTop={"10px"}>
              <Image
                src={thread.image}
                width={"300px"}
                height={"300px"}
                objectFit={"cover"}
              />
              <Text>
              {thread.content}
              </Text>
            </Box>
            <Box paddingTop={"10px"}>
              <Stack direction={`row`} alignItems="center">
                <Box display={"flex"} flexDirection={"row"} alignItems="center">
                  <IoIosHeartEmpty size={"20px"} />
                  <Text fontWeight={1} paddingLeft={"10px"}>
                  {thread.likesCount}
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems="center"
                  paddingLeft={"20px"}
                >
                  <BiCommentDetail size={"20px"} />
                  <Text fontWeight={1} paddingLeft={"10px"}>
                  {thread.repliesCount} Replies
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
          </Box>
          <HorizontalLine />
        </Box>
          )
        })}
      </Box>
    </Box>
  );
}
