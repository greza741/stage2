// import { useHome } from "@/features/hooks/use-home";
// import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { DetailLayout } from "./detail-layout";

// export function ProfileMediaPeople() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const initialRef = React.useRef(null);
//   const finalRef = React.useRef(null);
//   const { data } = useHome();
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [selectedThreadId, setSelectedThreadId] = useState<number | null>(null);

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
//     <Box
//       mt={"20px"}
//       pb={"15px"}
//       display={"flex"}
//       color={"#FFFFFF"}
//       justifyContent={"center"}
//       alignItems={"center"}
//     >
//       <Box
//         display={"flex"}
//         flexWrap={"wrap"}
//         justifyContent={"center"}
//         width={"1000px"}
//         gap={"5px"}
//       >
//         {data?.map((thread) => {
//           return (
//             <>
//               {thread.image !== null && (
//                 <Image
//                   boxSize="155px"
//                   key={thread.id}
//                   onClick={() => {
//                     setSelectedImage(thread.image as string | null);
//                     setSelectedThreadId(thread.id);
//                     onOpen();
//                   }}
//                   objectFit="cover"
//                   src={thread?.image}
//                   alt="Dan Abramov"
//                 />
//               )}
//             </>
//           );
//         })}
//       </Box>
//       <DetailLayout
//         isOpen={isOpen}
//         onClose={onClose}
//         initialRef={initialRef}
//         finalRef={finalRef}
//         selectedImage={selectedImage}
//         selectedThreadId={selectedThreadId}
//       />
//     </Box>
//   );
// }
