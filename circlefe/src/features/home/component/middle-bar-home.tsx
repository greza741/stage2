import { useHome } from "@/features/hooks/use-home";
import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { Form } from "react-router-dom";
import HorizontalLine from "./horizontal-line";
import { formatDistanceToNow } from "date-fns";


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
              src="https://heavyocity.com/wp-content/uploads/2021/08/FA_JRR_Feature_Color.jpg" // ganti dengan URL foto profilmu
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
        {data?.map((thread) => {
           const createdAtDate = new Date(thread.createdAt);
          return (
            <Box>
        <Box paddingLeft={"20px"} display={"flex"} flexDir={"row"}>
          <Box
            borderRadius="full"
            overflow="hidden"
            width="40px" // tidak sesuai
            height="40px" // sesuaikan dengan ukuran yang diinginkan
          >
            <Avatar
              src="https://heavyocity.com/wp-content/uploads/2021/08/FA_JRR_Feature_Color.jpg" // ganti dengan URL foto profilmu
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Box paddingLeft={"25px"} flex={2}>
            <Box>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>{thread.user.fullname} </Text>
                <Text fontWeight={1}>@{thread.user.fullname}</Text>
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
