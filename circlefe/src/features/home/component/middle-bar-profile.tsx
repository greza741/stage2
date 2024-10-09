import { useHome } from "@/features/hooks/use-home";
import { useProfile } from "@/features/hooks/use-profile";
import { useAppSelector } from "@/hooks/use-store";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import LikeButtonPost from "../button/like";
import HorizontalLine from "./horizontal-line";
import HorizontalLineDetail from "./horizontal-line-detail";
import { LuImage } from "react-icons/lu";
import { Form } from "react-router-dom";

export function MiddleBarProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="100%"
      backdropBlur="2px"
    />
  );
  const [openModalId, setOpenModalId] = useState(null); // Menyimpan id modal yang terbuka
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const { data, isLoading } = useHome();
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useProfile();

  const dataProfile = useProfile().data;

  const { id: authorId } = useAppSelector((state) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <Box>
      <Box
        backgroundColor={"brand.background"}
        color={"white"}
        minHeight={"100vh"}
        borderRight={"1px solid grey"}
      >
        <Box margin={"0px 20px"} bg={"brand.background"} color={`white`}>
          <Box padding={`10px 0px`} display={"flex"} alignItems={"center"}>
            <Button
              color={"white"}
              backgroundColor={"brand.background"}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
            >
              <FaArrowLeft color="white" size={"40px"} />
              <Text fontSize={"40px"} paddingLeft={"20px"} marginBottom={"7px"}>
                {dataProfile?.fullname}
              </Text>
            </Button>
          </Box>
          <Image
            paddingBottom={`10px`}
            h={"200px"}
            w={"full"}
            borderRadius={"20px"}
            src={dataProfile?.bgImage}
            objectFit="cover"
            alt="#"
          />
          <Flex paddingStart={`3%`} mt={-12} justifyContent={`start`}>
            <Box
              borderRadius="full"
              overflow="hidden"
              width="100px" // sesuaikan dengan ukuran yang diinginkan
              height="100px" // sesuaikan dengan ukuran yang diinginkan
            >
              <Image
                src={dataProfile?.profile}
                alt="Profile Picture"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Box>
          </Flex>
          <Box display={`flex`} justifyContent={`end`} mt={`-12`}>
            <Button
              fontSize={`30`}
              padding={"24px 20px"}
              border={`1px solid white`}
              backgroundColor={`brand.background2`}
              color={"white"}
              borderRadius={`20px`}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
              ml="4"
              onClick={() => {
                setOverlay(<OverlayTwo />);
                onOpen();
              }}
            >
              Edit Profile
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              {overlay}
              <ModalContent
                color={"white"}
                backgroundColor={"brand.background"}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <ModalHeader>Edit Profile</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box
                      margin={"1px 1px"}
                      bg={"brand.background"}
                      borderRadius={`20px`}
                      overflow={"hidden"}
                      color={`white`}
                      padding={`1px 1px`}
                    >
                      <label>
                        <Image
                          paddingBottom={`1px`}
                          h={"80px"}
                          w={"full"}
                          src={dataProfile?.bgImage}
                          objectFit="cover"
                          alt="#"
                        />
                        <input
                          // {...register("bgImage")}
                          type="file"
                          accept="image/*"
                          style={{ display: "none", cursor: "pointer" }}
                        />
                      </label>
                      <Flex
                        paddingStart={`3%`}
                        mt={-12}
                        justifyContent={`start`}
                      >
                        <Box
                          borderRadius="full"
                          overflow="hidden"
                          width="70px"
                          height="70px"
                        >
                          <label>
                            <Image
                              src={dataProfile?.profile}
                              alt="Profile Picture"
                              objectFit="cover"
                              width="100%"
                              height="100%"
                            />
                            <input
                              //  {...register("profile")}
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                            />
                          </label>
                        </Box>
                      </Flex>
                    </Box>
                    <Text mt={"10px"}>Name</Text>
                    <Input
                      {...register("fullname")}
                      placeholder="Fullname"
                      defaultValue={dataProfile?.fullname}
                    />
                    {errors.fullname && (
                      <p style={{ color: "red", margin: 0 }}>
                        {errors.fullname.message}
                      </p>
                    )}
                    {/* edit fullname */}
                    <Text mt={"10px"}>Username</Text>
                    <Input
                      {...register("username")}
                      placeholder="username"
                      defaultValue={dataProfile?.username}
                    />
                    {/* edit username */}
                    {errors.username && (
                      <p style={{ color: "red", margin: 0 }}>
                        {errors.username.message}
                      </p>
                    )}
                    <Text mt={"10px"}>Bio</Text>
                    <Input
                      {...register("bio")}
                      placeholder="Bio"
                      defaultValue={dataProfile?.bio}
                    />
                    {errors.bio && (
                      <p style={{ color: "red", margin: 0 }}>
                        {errors.bio.message}
                      </p>
                    )}
                    {/* edit bio */}
                    {/* Add more fields as needed */}
                  </ModalBody>
                  <ModalFooter justifyContent="flex-start">
                    <Button
                      type="submit"
                      colorScheme="blue"
                      mr={3}
                      onClick={onClose}
                    >
                      {isSubmitting ? "Submitting..." : "Save"}
                    </Button>
                    <Button variant="ghost" colorScheme="red" onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>
          </Box>
          <Box p={`20px 0px`}>
            <Stack spacing={0} align={"start"}>
              <Heading fontSize={"40px"} fontWeight={1000} fontFamily={"body"}>
                {dataProfile?.fullname}
              </Heading>
              <Text fontSize={`20px`} color={"grey"}>
                @{dataProfile?.username}
              </Text>
              <Text>{dataProfile?.bio}</Text>
            </Stack>

            <Stack direction={"row"} justify={"start"} spacing={2}>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>{dataProfile?.followers.length}</Text>
                <Text fontWeight={1}>Followers</Text>
              </Stack>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>{dataProfile?.following.length} </Text>
                <Text fontWeight={1}>Following</Text>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box>
          <Tabs variant="enclosed">
            <TabList>
              <Tab flex={"1"}>All Post</Tab>
              <Tab flex={"1"}>Media</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {!data && <Text>Loading posts...</Text>}
                {data?.length === 0 && <Text>No posts available.</Text>}

                {data
                  ?.filter((thread) => thread.author.id === authorId)
                  ?.slice()
                  .reverse()
                  ?.map((thread) => {
                    const createdAtDate = new Date(thread.createdAt);
                    const isOpen = openModalId === thread.id;
                    return (
                      <Box key={thread.id}>
                        <Box flex={2}>
                          <Box>
                            <Stack direction={`row`}>
                              <Text fontWeight={1000}>
                                {thread.author.fullname}{" "}
                              </Text>
                              <Text fontWeight={1}>
                                @{thread.author.fullname}
                              </Text>
                              <Text fontWeight={1}>•</Text>
                              <Text fontWeight={1}>
                                {formatDistanceToNow(createdAtDate, {
                                  addSuffix: true,
                                })}
                              </Text>
                            </Stack>
                          </Box>
                          <Box paddingTop={"10px"}>
                            <Image
                              src={thread.image}
                              width={"300px"}
                              height={"300px"}
                              objectFit={"cover"}
                              onClick={() =>
                                setOpenModalId(thread.id as unknown as null)
                              }
                            />
                            <Modal
                              onClose={() => setOpenModalId(null)}
                              isOpen={isOpen}
                              isCentered
                            >
                              <ModalOverlay
                                bg="blackAlpha.300"
                                backdropFilter="blur(10px) hue-rotate(90deg)"
                              />
                              <ModalContent>
                                <ModalCloseButton />
                                <ModalBody w={"500px"}>
                                  <Box>
                                    <Box paddingTop={"10px"}>
                                      <Image
                                        src={thread.image}
                                        width={"5000"}
                                        height={"500"}
                                        objectFit={"cover"}
                                      />
                                    </Box>
                                  </Box>
                                </ModalBody>
                                {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
                              </ModalContent>
                            </Modal>
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
                                <Text fontWeight={1} paddingLeft={"10px"}>
                                  {thread.repliesCount} Replies
                                </Text>
                              </Box>
                            </Stack>
                          </Box>
                        </Box>
                        <HorizontalLine />
                      </Box>
                    );
                  })}
              </TabPanel>

              <TabPanel>
                {!data && <Text>Loading posts...</Text>}
                {data?.length === 0 && <Text>No posts available.</Text>}
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(3, 1fr)"
                  gap={2}
                >
                  {data
                    ?.filter((thread) => thread.author.id === authorId)
                    ?.slice()
                    .reverse()
                    ?.map((thread) => {
                      const isOpen = openModalId === thread.id; // Cek apakah modal untuk thread ini terbuka
                      // const { isOpen, onOpen, onClose } = useDisclosure();
                      const createdAtDate = new Date(thread.createdAt);
                      return (
                        <Box key={thread.id}>
                          <Image
                            src={thread.image}
                            h={"300px"}
                            objectFit="cover"
                            onClick={() =>
                              setOpenModalId(thread.id as unknown as null)
                            } //
                          />
                          <Modal
                            onClose={() => setOpenModalId(null)}
                            isOpen={isOpen}
                            isCentered
                            size={"full"}
                          >
                            <ModalOverlay
                              bg="blackAlpha.300"
                              backdropFilter="blur(10px) hue-rotate(90deg)"
                            />
                            <ModalContent>
                              <ModalCloseButton />
                              <ModalBody
                                backgroundColor={"brand.background"}
                                color={"white"}
                              >
                                <Box display={"flex"} flexDirection={"row"}>
                                  <Box
                                    paddingTop={"10px"}
                                    w={"70%"}
                                    h={"100%"}
                                    display="flex"
                                    justifyContent="center"
                                    justifyItems={"center"}
                                  >
                                    <Image
                                      src={thread.image}
                                      width={"5000"}
                                      height={"500"}
                                      objectFit={"cover"}
                                    />
                                  </Box>
                                  <Box
                                    paddingLeft={"20px"}
                                    paddingTop={"20px"}
                                    border={"1px grey solid"}
                                    borderRadius={"20px"}
                                    w={"30%"}
                                    h={"100vh"}
                                  >
                                    <Box display={"flex"} flexDirection={"row"}>
                                      <Box
                                        borderRadius="full"
                                        overflow="hidden"
                                        width="40px"
                                        height="40px"
                                      >
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
                                            <Text fontWeight={1000}>
                                              {thread.author.fullname}
                                            </Text>
                                            <Text fontWeight={1}>
                                              @{thread.author.username}
                                            </Text>
                                            <Text fontWeight={1}>•</Text>
                                            <Text fontWeight={1}>
                                              {formatDistanceToNow(
                                                createdAtDate,
                                                {
                                                  addSuffix: true,
                                                }
                                              )}
                                            </Text>
                                          </Stack>
                                          <Box>
                                            <Text>{thread.content}</Text>
                                          </Box>
                                          <Box paddingTop={"10px"}>
                                            <Stack
                                              direction={`row`}
                                              alignItems="center"
                                            >
                                              <label>
                                                <Box
                                                  display={"flex"}
                                                  flexDirection={"row"}
                                                  alignItems="center"
                                                >
                                                  <LikeButtonPost
                                                    threadId={thread.id}
                                                  />
                                                  <Text
                                                    fontWeight={1}
                                                    paddingLeft={"10px"}
                                                  >
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
                                                <BiCommentDetail
                                                  size={"20px"}
                                                />
                                                <Text
                                                  fontWeight={1}
                                                  paddingLeft={"10px"}
                                                >
                                                  {thread.repliesCount} Replies
                                                </Text>
                                              </Box>
                                            </Stack>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                    <HorizontalLineDetail />
                                    <Box display={"flex"} flexDirection={"row"}>
                                      <Box
                                        borderRadius="full"
                                        overflow="hidden"
                                        width="40px"
                                        height="40px"
                                      >
                                        <Avatar
                                          src={thread.author.profile}
                                          objectFit="cover"
                                          width="100%"
                                          height="100%"
                                        />
                                      </Box>
                                      <Form
                                        onSubmit={handleSubmit(onSubmit)}
                                        style={{ width: "90%" }}
                                      >
                                        <Box
                                          paddingLeft={"25px"}
                                          display={"flex"}
                                        >
                                          <Input
                                            // {...register("content")}
                                            backgroundColor={"#3F3F3F"}
                                            type="search"
                                            placeholder="Feel free to reply.. "
                                          />
                                          {/* {errors.content && (
                <p style={{ color: "red", margin: 0 }}>
                  {errors.content.message}
                </p>
              )} */}
                                          <label>
                                            <LuImage size={40} />
                                            <input
                                              // {...register("image")}
                                              type="file"
                                              accept="image/*"
                                              style={{ display: "none" }}
                                            />
                                          </label>
                                          {/* {errors.image && (
                <p style={{ color: "red", margin: 0 }}>
                  {errors.image.message}
                </p>
              )} */}

                                          <Box paddingLeft={"20px"}>
                                            <Button
                                              type="submit"
                                              backgroundColor={"brand.green"}
                                              color={"white"}
                                            >
                                              {isSubmitting
                                                ? "Submitting..."
                                                : "Reply"}
                                            </Button>
                                          </Box>
                                        </Box>
                                      </Form>
                                    </Box>
                                    <HorizontalLineDetail />
                                  </Box>
                                </Box>
                              </ModalBody>
                              {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
                            </ModalContent>
                          </Modal>
                        </Box>
                      );
                    })}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
