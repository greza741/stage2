import { useHome } from "@/features/hooks/use-home";
import { useAppSelector } from "@/hooks/use-store";
import { Avatar, Box, Button, Input, Text } from "@chakra-ui/react";
import { LuImage } from "react-icons/lu";
import { Form } from "react-router-dom";
import { ThreadMap } from "./homeComp/thread-map";
import HorizontalLine from "./horizontal-line";

export function MiddleBarHome() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit, isLoading } =
    useHome();
  const { profile } = useAppSelector((state) => state.auth);

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
          <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "90%" }}>
            <Box paddingLeft={"25px"} display={"flex"}>
              <Input
                {...register("content")}
                backgroundColor={"#3F3F3F"}
                type="search"
                placeholder="What do you feel ?"
              />
              {errors.content && (
                <p style={{ color: "red", margin: 0 }}>
                  {errors.content.message}
                </p>
              )}
              <label>
                <LuImage size={40} />
                <input
                  {...register("image")}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </label>
              {errors.image && (
                <p style={{ color: "red", margin: 0 }}>
                  {errors.image.message}
                </p>
              )}

              <Box paddingLeft={"20px"}>
                <Button
                  type="submit"
                  backgroundColor={"brand.green"}
                  color={"white"}
                >
                  {isSubmitting ? "Submitting..." : "POST"}
                </Button>
              </Box>
            </Box>
          </Form>
        </Box>
        <HorizontalLine />
        <ThreadMap />
      </Box>
    </Box>
  );
}
