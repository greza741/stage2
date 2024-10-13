// import {
//     Avatar,
//     Box,
//     Button,
//     Image,
//     Input,
//     Modal,
//     ModalBody,
//     ModalCloseButton,
//     ModalContent,
//     ModalOverlay,
//     Stack,
//     Text
// } from "@chakra-ui/react";
// import { formatDistanceToNow } from "date-fns";
// import { BiCommentDetail } from "react-icons/bi";
// import { LuImage } from "react-icons/lu";
// import { Form } from "react-router-dom";
// import LikeButtonPost from "../../button/like";
// import HorizontalLineDetail from "../horizontal-line-detail";

// <Modal
// onClose={() => setOpenModalId(null)}
// isOpen={isOpen}
// isCentered
// size={"full"}
// >
// <ModalOverlay
//   bg="blackAlpha.300"
//   backdropFilter="blur(10px) hue-rotate(90deg)"
// />
// <ModalContent>
//   <ModalCloseButton />
//   <ModalBody
//     backgroundColor={"brand.background"}
//     color={"white"}
//   >
//     <Box display={"flex"} flexDirection={"row"}>
//       <Box
//         paddingTop={"10px"}
//         w={"70%"}
//         h={"100%"}
//         display="flex"
//         justifyContent="center"
//         justifyItems={"center"}
//       >
//         <Image
//           src={thread.image}
//           width={"5000"}
//           height={"500"}
//           objectFit={"cover"}
//         />
//       </Box>
//       <Box
//         paddingLeft={"20px"}
//         paddingTop={"20px"}
//         border={"1px grey solid"}
//         borderRadius={"20px"}
//         w={"30%"}
//         h={"100vh"}
//       >
//         <Box display={"flex"} flexDirection={"row"}>
//           <Box
//             borderRadius="full"
//             overflow="hidden"
//             width="40px"
//             height="40px"
//           >
//             <Avatar
//               src={thread.author.profile}
//               objectFit="cover"
//               width="100%"
//               height="100%"
//             />
//           </Box>
//           <Box paddingLeft={"25px"} flex={2}>
//             <Box>
//               <Stack direction={`row`}>
//                 <Text fontWeight={1000}>
//                   {thread.author.fullname}
//                 </Text>
//                 <Text fontWeight={1}>
//                   @{thread.author.username}
//                 </Text>
//                 <Text fontWeight={1}>•</Text>
//                 <Text fontWeight={1}>
//                   {formatDistanceToNow(
//                     createdAtDate,
//                     {
//                       addSuffix: true,
//                     }
//                   )}
//                 </Text>
//               </Stack>
//               <Box>
//                 <Text>{thread.content}</Text>
//               </Box>
//               <Box paddingTop={"10px"}>
//                 <Stack
//                   direction={`row`}
//                   alignItems="center"
//                 >
//                   <label>
//                     <Box
//                       display={"flex"}
//                       flexDirection={"row"}
//                       alignItems="center"
//                     >
//                       <LikeButtonPost
//                         threadId={thread.id}
//                       />
//                       <Text
//                         fontWeight={1}
//                         paddingLeft={"10px"}
//                       >
//                         {thread.likesCount}
//                       </Text>
//                     </Box>
//                   </label>
//                   <Box
//                     display={"flex"}
//                     flexDirection={"row"}
//                     alignItems="center"
//                     paddingLeft={"20px"}
//                   >
//                     <BiCommentDetail
//                       size={"20px"}
//                     />
//                     <Text
//                       fontWeight={1}
//                       paddingLeft={"10px"}
//                     >
//                       {thread.repliesCount} Replies
//                     </Text>
//                   </Box>
//                 </Stack>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <HorizontalLineDetail />
//         <Box display={"flex"} flexDirection={"row"}>
//           <Box
//             borderRadius="full"
//             overflow="hidden"
//             width="40px"
//             height="40px"
//           >
//             <Avatar
//               src={thread.author.profile}
//               objectFit="cover"
//               width="100%"
//               height="100%"
//             />
//           </Box>
//           <Form
//             onSubmit={handleSubmit(onSubmit)}
//             style={{ width: "90%" }}
//           >
//             <Box
//               paddingLeft={"25px"}
//               display={"flex"}
//             >
//               <Input
//                 // {...register("content")}
//                 backgroundColor={"#3F3F3F"}
//                 type="search"
//                 placeholder="Feel free to reply.. "
//               />
//               {/* {errors.content && (
// <p style={{ color: "red", margin: 0 }}>
// {errors.content.message}
// </p>
// )} */}
//               <label>
//                 <LuImage size={40} />
//                 <input
//                   // {...register("image")}
//                   type="file"
//                   accept="image/*"
//                   style={{ display: "none" }}
//                 />
//               </label>
//               {/* {errors.image && (
// <p style={{ color: "red", margin: 0 }}>
// {errors.image.message}
// </p>
// )} */}

//               <Box paddingLeft={"20px"}>
//                 <Button
//                   type="submit"
//                   backgroundColor={"brand.green"}
//                   color={"white"}
//                 >
//                   {isSubmitting
//                     ? "Submitting..."
//                     : "Reply"}
//                 </Button>
//               </Box>
//             </Box>
//           </Form>
//         </Box>
//         <HorizontalLineDetail />
//       </Box>
//     </Box>
//   </ModalBody>
//   {/* <ModalFooter>
// <Button onClick={onClose}>Close</Button>
// </ModalFooter> */}
// </ModalContent>
// </Modal>
