import { useHome } from "@/features/hooks/use-home";
import { useAppSelector } from "@/hooks/use-store";
import { Avatar, Box, Button, Input } from "@chakra-ui/react";
import { LuImage } from "react-icons/lu";
import { Form } from "react-router-dom";
import HorizontalLine from "../horizontal-line";

export function CreateLeftBar() {
  const { register, handleSubmit, errors, isSubmitting, onSubmit, isLoading } =
    useHome();
  const { profile } = useAppSelector((state) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Box
      backgroundColor={"brand.background"}
      color={"white"}
      minHeight={"300px"}
    >
      <Box display={"flex"} flexDir={"row"}>
        <Box
          borderRadius="full"
          overflow="hidden"
          width="40px" // sesuaikan dengan ukuran yang diinginkan
          height="40px" // sesuaikan dengan ukuran yang diinginkan
        >
          <Avatar src={profile} objectFit="cover" width="100%" height="100%" />
        </Box>
        <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "90%" }}>
          <Box paddingLeft={"25px"}>
            <Input
              h={"200px"}
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
            <HorizontalLine />
            <Box paddingLeft={"20px"} display={"flex"} flexDirection={"row"}>
              <Box marginRight={"20px"}>
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
              </Box>
              <Box marginLeft={"200px"}>
                <Button
                  type="submit"
                  backgroundColor={"brand.green"}
                  color={"white"}
                >
                  {isSubmitting ? "Submitting..." : "POST"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
