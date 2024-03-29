import Head from "next/head";

import RequestSection from "@/components/home/RequestSection";
import MainLayout from "@/components/layouts/MainLayout";
import { WaitingSection } from "@/components/home/WaitingSection";
import { useEffect, useState } from "react";
import * as repository from "@/services/repository";
import { Button, Center, Text, Input, Textarea, Box } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const [disabled, setDisabled] = useState(true);
  return (
    <Box mx="auto">
      <Box color="white" bgColor="blue.700">
        <Text as="h1" fontSize="5xl" textAlign="center" p="5">Better Boiler</Text>
      </Box>
      <Center py="100px">
        <Box maxW="600px" mx="auto" border="1px solid grey" borderRadius="20px" p="5">
          <Input placeholder="Email" mt="10" onChange={(e) => setDisabled(!/^.+@.+\..+$/.test(e.target.value))} />
          <Textarea placeholder="Message" mt="10" />
          <NextLink href={disabled ? '#' : "/home?session=UQAxf4GQ0XxrCvCIjsED1f2yfI5lDCBt"}>
            <Button mt="10">Register</Button>
          </NextLink>
        </Box>
      </Center>
    </Box>
  );
}
