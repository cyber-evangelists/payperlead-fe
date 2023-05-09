import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowsWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const btn = (bgc: string) => {
    return (
      <Button
        border="none"
        borderRadius="50%"
        w="13px"
        h="13px"
        bgColor={bgc}
        cursor={"pointer"}
      ></Button>
    );
  };
  return (
    <Flex flex={8} direction="column">
      <Flex
        flex="2"
        direction="column"
        alignItems={"center"}
        justifyContent={"space-between"}
        gap="1rem"
        p="1rem"
        bg="linear-gradient(180deg, #001930 0%, #13335F 100%)"
      >
        <Text
          color="white"
          bg="#4AB2E1"
          borderRadius={"6px"}
          px="3rem"
          py="0.5rem"
          fontSize={"14px"}
        >
          ✨ Thank your submission has been received, we will contact you soon
          ✨
        </Text>
        <Text
          fontSize="2rem"
          color="white"
          textAlign={"center"}
          // mt="4rem"
          // mb="1rem"
        >
          New Boiler Quote
        </Text>
        <Text
          color="#4AB2E1"
          fontWeight={600}
          //  mb="0.7rem"
        >
          What Happens Next?
        </Text>
        <Text
          color="white"
          textAlign={"center"}
          maxW="50em"
          wordBreak="break-word"
          overflowWrap="break-word"
        >
          Someone from our team will give you a quick call from 0800 786765 to
          explain how the process works. Engineers interested in providing you
          with a free no-obligation quote will appear below.
        </Text>
        <Flex gap="0.5rem" my="2.25rem">
          {btn("#4AB2E1")}
          {btn(" #1F8BCB")}
          {btn("#4AB2E1")}
          {btn(" #1F8BCB")}
        </Flex>
      </Flex>
      <Flex
        flex="5"
        direction="column"
        alignItems={"center"}
        justifyContent="space-between"
        gap="1rem"
        px="5rem"
        py="1rem"
      >
        <Box>
          <Text
            textAlign={"center"}
            color="#005A8C"
            fontSize="2rem"
            fontWeight={600}
          >{`While You're Waiting...`}</Text>
          <Text color="#005A8C">
            Browse through our list of local Gas-Safe engineers in your area &
            invite them to quote
          </Text>
        </Box>
        <Text justifySelf={"flex-end"} color="#2B3950" opacity="0.5">
          Better Boiler is operated by Pay Per Lead Ltd. Registered in England &
          Wales number 14088039. E&OEGas Safe Register is a registered trade
          mark of HSE and is used under license.
        </Text>
      </Flex>
    </Flex>
  );
}
