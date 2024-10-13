import { useHome } from "@/features/hooks/use-home";
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
import React, { useMemo, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import LikeButtonPost from "../../button/like";
import HorizontalLine from "../horizontal-line";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useThreadById } from "@/features/hooks/use-threadById";
import { ReplyMap } from "./reply-map";
import ThreadCard from "./thread-card";

export function ThreadMap() {
  const { data } = useHome();
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>(null);
  const [replies, setReplies] = useState([]); // State untuk menyimpan balasan
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { search } = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  // const { data: thread } = useThreadById(searchParams.get("threadId")!);
  // console.log("thread reply:", thread);

  // const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  // const fetchReplies = async (threadId) => {
  //   try {
  //     const response = await fetch(`/thread/${threadId}/reply`);
  //     const data = await response.json();
  //     console.log("data fecth reply", data);

  //     setReplies(data); // Simpan data balasan ke state
  //   } catch (error) {
  //     console.error("Error fetching replies:", error);
  //   }
  // };

  // const handleButtonClick = (thread) => {
  //   setSelectedThreadId(thread.id);
  //   fetchReplies(thread.id); // Ambil balasan saat modal dibuka
  //   onOpen();
  // };

  return (
    <>
      {data?.map((thread) => (
        <ThreadCard {...thread} />
      ))}
    </>
  );
}
