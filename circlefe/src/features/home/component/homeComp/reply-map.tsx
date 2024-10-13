import { useHome } from "@/features/hooks/use-home";
import { useAppSelector } from "@/hooks/use-store";
import {
  Avatar,
  Box,
  Button,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { LuImage } from "react-icons/lu";
import { Form, useSearchParams } from "react-router-dom";
import LikeButtonPost from "../../button/like";
import HorizontalLineDetail from "../horizontal-line-detail";
import { useThreadById } from "@/features/hooks/use-threadById";

export function ReplyMap() {
  //   const thread = useAppSelector((state) => state.auth.thread);
  let [searchParams, setSearchParams] = useSearchParams();
  const { data: thread } = useThreadById(searchParams.get("threadId")!);
  console.log("thread reply:", thread);

  return <></>;
}
