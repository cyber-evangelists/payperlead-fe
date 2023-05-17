import Head from "next/head";
import { Box, Text } from "@chakra-ui/react";
import Random from "@/components/random/Random";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Better Boiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bgColor={'#FAFAFA'} h={'100vh'} css={{
        backdropFilter: "blur(32px)",
      }} p={10}>
        <Random />
      </Box>
    </>
  );
}
