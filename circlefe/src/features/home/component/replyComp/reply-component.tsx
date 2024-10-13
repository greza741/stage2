import { useProfile } from "@/features/hooks/use-profile";
import { useDetailReplyForm } from "@/features/hooks/use-reply";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";

interface DetailReplyProps {
  selectedThreadId: number | null;
}

export function DetailReply({ selectedThreadId }: DetailReplyProps) {
  const { register, handleSubmit, onSubmit } =
    useDetailReplyForm(selectedThreadId);
  const { data } = useProfile();
  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <Box
        mt={"20px"}
        px={"25px"}
        pb={"20px"}
        display={"flex"}
        color={"home.text"}
        alignItems={"center"}
        justifyContent={"space-between"}
        borderBottom={"1px solid #3F3F3F"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Image
            alt=""
            top={"115px"}
            left={"30px"}
            boxSize="40px"
            display={"block"}
            borderRadius="500px"
            src={data?.image}
          />

          <Input
            type="text"
            ms={"13px"}
            border={"none"}
            height={"25px"}
            fontSize={"14px"}
            color={"home.text"}
            fontWeight={"bold"}
            {...register("content")}
            placeholder="Type your reply!"
            _focusVisible={{
              borderColor: "transparent",
            }}
            _hover={{
              borderColor: "transparent",
            }}
          />
        </Box>

        <Box>
          <FormControl display={"flex"} alignItems={"center"}>
            <FormLabel
              display={"flex"}
              mt={"5px"}
              color={"home.button.hoverText"}
              fontSize={"25px"}
            >
              <LuImagePlus />
            </FormLabel>
            <Input type="file" {...register("image")} hidden name="image" />
            <Button
              padding={"5px 30px"}
              type="submit"
              border={"none"}
              height={"30px"}
              fontSize={"14px"}
              color={"home.button.text"}
              cursor={"pointer"}
              transition={"0.3s"}
              fontWeight={"bold"}
              borderRadius={"15px"}
              backgroundColor={"home.button.background"}
              _hover={{
                backgroundColor: "home.button.hoverBackground",
                color: "home.button.hoverText",
              }}
            >
              Reply
            </Button>
          </FormControl>
        </Box>
      </Box>
    </form>
  );
}
