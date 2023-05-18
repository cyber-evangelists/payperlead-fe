import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Hero from "./Hero";
import MobileSidebar from "./MobileSidebar";

export default function LandingPage() {
  return (
    <Flex>
      <MobileSidebar />
      <Sidebar />
      <Hero />
    </Flex>
  );
}
