import { Box, Flex, Text, Image, List, ListItem } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Link from "next/link";
export default function MobileSidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClick = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  const sidebar_data = [
    {
      id: 1,
      name: "Home",
      image: { alt: "Home icon", src: "./Assets/home_icon.svg" },
    },
    {
      id: 2,
      name: "History",
      image: { alt: "History icon", src: "./Assets/history_icon.svg" },
    },
    {
      id: 3,
      name: "Profile",
      image: { alt: "Profile icon", src: "./Assets/profile_icon.svg" },
    },
    {
      id: 4,
      name: "Help",
      image: { alt: "Help icon", src: "./Assets/help_icon.svg" },
    },
  ];
  const sidebarList = sidebar_data.map((item) => {
    return (
      <ListItem
        key={item.id}
        display={"flex"}
        p={"0.5rem"}
        alignItems={"center"}
        gap="0.75rem"
        borderRadius={"12px"}
        color="#A0BADC"
        _hover={{
          bg: "#1E3E5D",
          color: "white",
          img: {
            filter: "brightness(0) invert(1)",
          },
        }}
        py="0.75rem"
      >
        <Image alt={item.image.alt} src={item.image.src} />
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
          href="/"
        >
          <Text display="inline" textDecoration={"none"}>
            {item.name}
          </Text>
        </Link>
      </ListItem>
    );
  });

  var sidebar = (
    <List
      w="70%"
      h="95vh"
      bg="linear-gradient(180deg, #021C35 0%, #13335F 100%)"
      color="white"
      fontWeight={600}
      p="1rem"
      pt="2rem"
      borderBottomRadius={"15px"}
      display={{ base: "block", md: "none" }}
      transform={isDrawerOpen ? "translateX(0)" : "translateX(-1550px)"}
      transition={
        isDrawerOpen
          ? "transform 250ms ease-in-out"
          : "transform 350ms ease-in-out"
      }
    >
      {sidebarList}

      <Text ml="0rem" mt="2.5rem" color="white" fontSize="14px">
        + Submit a new request
      </Text>
    </List>
  );
  return (
    <Flex
      display={{ base: "block", md: "none" }}
      position={"fixed"}
      direction="column"
      w="100%"
      zIndex={1}
    >
      <Flex
        w="100%"
        alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={" #021C35"}
        borderTopRadius={"15px"}
        borderBottomRadius={isDrawerOpen ? "0px" : "15px"}
        p="1rem"
      >
        <Image maxW="12.25rem" alt="logo" src="./Assets/logo.svg" />
        <Box
          as="img"
          src="./Assets/menu.svg"
          alt="menu logo"
          cursor="pointer"
          onClick={() => {
            handleDrawerClick();
          }}
          _hover={{
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out",
          }}
          _active={{
            transform: "scale(0.9)",
            transition: "transform 0.2s ease-in-out",
          }}
        />
      </Flex>
      {sidebar}
    </Flex>
  );
}
