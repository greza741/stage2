import { ThreadEntity } from "@/entities/thread-entity";
import {
  Avatar,
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import LikeButtonPost from "../../button/like";
import { BiCommentDetail } from "react-icons/bi";
import HorizontalLine from "../horizontal-line";
import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ReplyMap } from "./reply-map";

export default function ThreadCard({ ...thread }: ThreadEntity) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>(null);
  const [replies, setReplies] = useState([]); // State untuk menyimpan balasan
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { search } = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <Box key={thread.id} className={`${thread.id}`}>
        <Box paddingLeft={"20px"} display={"flex"} flexDir={"row"}>
          <Box borderRadius="full" overflow="hidden" width="40px" height="40px">
            <Avatar
              src={thread.author.profile}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Box paddingLeft={"25px"} flex={2}>
            <Box>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>{thread.author.fullname} </Text>
                <Text fontWeight={1}>@{thread.author.username}</Text>
                <Text fontWeight={1}>•</Text>
                <Text fontWeight={1}>
                  {formatDistanceToNow(new Date(thread.createdAt), {
                    addSuffix: true,
                  })}
                </Text>
              </Stack>
            </Box>
            <Box paddingTop={"10px"}>
              {thread.image !== null && (
                <Image
                  src={thread.image}
                  width={"300px"}
                  height={"300px"}
                  objectFit={"contain"}
                  onClick={() => {
                    setSelectedImage(thread.image as string | null);
                    setSelectedThreadId(thread.id);
                    onOpen();

                    console.log("ID", thread.id);
                    setSearchParams({
                      threadId: thread.id.toString(),
                    });
                  }}
                />
              )}
              <Text>{thread.content}</Text>
            </Box>
            <Box paddingTop={"10px"}>
              <Stack direction={`row`} alignItems="center">
                <label>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems="center"
                  >
                    <LikeButtonPost threadId={thread.id} />
                    <Text fontWeight={1} paddingLeft={"10px"}>
                      {thread.likesCount}
                    </Text>
                  </Box>
                </label>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems="center"
                  paddingLeft={"20px"}
                >
                  <BiCommentDetail size={"20px"} />
                  <Box
                    as="button" // Ganti dengan elemen yang bisa diklik
                    // onClick={() => handleButtonClick(thread)} // Panggil fungsi untuk membuka modal
                    paddingLeft={"10px"}
                    display="flex"
                    alignItems="center"
                  >
                    <Text fontWeight={1} paddingLeft={"10px"}>
                      {thread.repliesCount} Replies
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
        <HorizontalLine />
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Replies</ModalHeader>
          <ModalCloseButton />
          <ModalBody backgroundColor={"brand.background"} color={"white"}>
            <ReplyMap />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
