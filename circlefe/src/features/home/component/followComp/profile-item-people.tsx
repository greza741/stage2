// import { Box, Heading, Image, Text } from "@chakra-ui/react";
// import { FaComments } from "react-icons/fa";
// import LikeButton from "../../button/like";
// import { ButtonLink } from "../../button/link";
// import { useHome } from "@/features/hooks/use-home";

// export function ProfilePostPeople() {
//   const { data } = useHome();

//   if (!data || data.length === 0) {
//     return (
//       <Box
//         justifyContent={"center"}
//         display={"flex"}
//         alignItems={"center"}
//         flexDirection={"column"}
//         mt={"30px"}
//         pb={"15px"}
//       >
//         <Heading as={"text"} color={"nav.text"} fontSize={"15px"}>
//           I think this user dont have any post yet
//         </Heading>
//       </Box>
//     );
//   }

//   return (
//     <>
//       {data?.map((thread) => {
//         return (
//           <Box
//             mt={"20px"}
//             pb={"15px"}
//             key={thread.id}
//             display={"flex"}
//             color={"#FFFFFF"}
//             alignItems={"center"}
//           >
//             <Box display={"flex"}>
//               <Image
//                 alt=""
//                 boxSize="40px"
//                 borderRadius="500px"
//                 src={thread.author.image}
//               />

//               <Box ms={"10px"}>
//                 <Text fontSize={"12px"} fontWeight={"bold"}>
//                   {thread.author.fullname}{" "}
//                   <Text as={"span"} color={"#909090"} ms={"3px"}>
//                     @{thread.author.username} • 4h
//                   </Text>
//                 </Text>
//                 <Text fontSize={"12px"} mt={"5px"}>
//                   {thread.content}
//                 </Text>
//                 <Text
//                   display={"flex"}
//                   alignItems={"center"}
//                   mt={"15px"}
//                   fontSize={"20px"}
//                 >
//                   <Text
//                     mt={"15px"}
//                     display={"flex"}
//                     fontSize={"20px"}
//                     alignItems={"center"}
//                   >
//                     <LikeButton threadId={thread.id} />
//                     <Text as={"span"} color={"home.link"} fontSize={"12px"}>
//                       {thread.likesCount}
//                     </Text>

//                     <FaComments
//                       style={{ color: "#909090", marginLeft: "20px" }}
//                     />
//                     <ButtonLink
//                       state={thread.id}
//                       to={`/status/${thread.id}`}
//                       display={"flex"}
//                     >
//                       <Text
//                         ms={"5px"}
//                         as={"span"}
//                         color={"home.link"}
//                         fontSize={"12px"}
//                       >
//                         {thread.repliesCount} Replies
//                       </Text>
//                     </ButtonLink>
//                   </Text>
//                 </Text>
//               </Box>
//             </Box>
//           </Box>
//         );
//       })}
//     </>
//   );
// }
