import { useHome } from "@/features/hooks/use-home";
import { useProfile } from "@/features/hooks/use-profile";
import {
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Suggestion } from "./suggestComp/suggettion";

export function RightBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const { isLoading } = useHome();
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useProfile();

  const dataProfile = useProfile().data;

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <Box
      py={2}
      height={"100%"}
      backgroundColor={"brand.background"}
      display={`flex`}
      flexDirection={`column`}
    >
      <Box width={`100%`} height={`10%`}>
        <Box
          margin={"2px 20px"}
          bg={"brand.background2"}
          boxShadow={"2xl"}
          borderRadius={`20px`}
          overflow={"hidden"}
          color={`white`}
          padding={`2px 20px`}
        >
          <Box padding={`10px 0px`}>
            <Text>My Profile</Text>
          </Box>
          <Image
            paddingBottom={`10px`}
            h={"80px"}
            w={"full"}
            src={dataProfile?.bgImage}
            objectFit="cover"
            alt="#"
          />
          <Flex paddingStart={`3%`} mt={-12} justifyContent={`start`}>
            <Box
              borderRadius="full"
              overflow="hidden"
              width="70px"
              height="70px"
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
          <Box display={`flex`} justifyContent={`end`} mt={`-7`}>
            <Button
              fontSize={`15`}
              w={"40%"}
              h={"100%"}
              border={`1px solid white`}
              backgroundColor={`brand.background2`}
              color={"white"}
              borderRadius={`20px`}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg",
              }}
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
                          style={{ display: "none" }}
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
              <Heading fontSize={"2xl"} fontWeight={1000} fontFamily={"body"}>
                {dataProfile?.fullname}
              </Heading>
              <Text fontSize={`small`}>@{dataProfile?.username}</Text>
              <Text>{dataProfile?.bio}</Text>
            </Stack>

            <Stack direction={"row"} justify={"start"} spacing={2}>
              <Stack direction={`row`}>
                <Text fontWeight={1000}>{dataProfile?.followers.length} </Text>
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
          <Suggestion />
        </Box>
        <Box
          margin={"2px 20px"}
          bg={"brand.background2"}
          boxShadow={"2xl"}
          borderRadius={`20px`}
          overflow={"hidden"}
          color={`white`}
          padding={`2px 20px`}
        >
          <Box display={`flex`} flexDirection={`row`} alignItems={`center`}>
            Developed by Suffering •
            <Box display={`flex`} flexDirection={`row`}>
              <Box paddingLeft={`5px`}>
                <FaGithub />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaLinkedin />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaFacebook />
              </Box>
              <Box paddingLeft={`5px`}>
                <FaInstagram />
              </Box>
            </Box>
          </Box>
          <Text fontSize={`10px`} fontWeight={`100`}>
            Powered by Dumways Indonesia • #1 Coding Bootcamp
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
