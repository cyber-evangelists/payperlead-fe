import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
export default function LandingPage() {
  return (
    <Flex >
      <Sidebar />
      <Hero/>
    </Flex>
  );
}
