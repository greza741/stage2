import { Box, Button, Flex, FlexProps, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { RiUserSearchLine } from "react-icons/ri";
import { SlLogout } from "react-icons/sl";
import { Link } from "react-router-dom";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Search", icon: RiUserSearchLine, path: "/search" },
  { name: "Follows", icon: CiHeart, path: "/" },
  { name: "Profile", icon: CgProfile, path: "/profile" },
];

export default function LeftBar() {
  return (
    <Box
      backgroundColor={"brand.background"}
      color={"white"}
      minHeight={"100vh"}
      borderRight={"1px solid grey"}
    >
      <Flex display={"flex"} alignItems="center" paddingLeft={"11%"}>
        <Text fontSize="300%" fontWeight="bold" color={"brand.green"}>
          circle
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem color={"white"} key={link.name} icon={link.icon} path={link.path}>
          {link.name}
        </NavItem>
      ))}
      <Box
        display={"flex"}
        justifyContent={"center"}
        boxSize={"100%"}
        padding="10px"
      >
        <Button
          backgroundColor={"brand.green"}
          color="white"
          borderRadius="20px"
          width={"100%"}
        >
          Create Post
        </Button>
      </Box>
      <Flex position="absolute" bottom="20px" mx={"50"} align={"center"}>
        <Icon as={SlLogout} mr={"2"} fontSize={"20px"} />
        <Text fontSize={"20px"}>Logout</Text>
      </Flex>
    </Box>
  );
}
interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  path: string
}
const NavItem = ({ icon, children,path, ...rest }: NavItemProps) => {
  return (
    <Box
      as={Link}
      to={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
