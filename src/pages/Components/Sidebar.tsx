import { Box, Flex, Text, Image, List, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Link from "next/link";
export default function Sidebar() {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        // w="100%"
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
  return (
    <Flex
      display={windowsWidth >768 ? 'flex':'none'}
      flex={2}
      direction="column"
      h="100vh"
      bgColor={"#05294B"}
      pt="2rem"
      px="1vw"
      gap="3.5rem"
    >
      <Image maxW="12.25rem" alt="logo" src="./Assets/logo.svg" />
      <List color="white" fontWeight={600}>
        {sidebarList}

        <Text ml="0rem" mt="2.5rem" color="white" fontSize="14px">
          + Submit a new request
        </Text>
      </List>
    </Flex>
  );
}
