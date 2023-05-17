import Head from "next/head";
import SideBar from "@/components/common/SideBar";
import DrawerSideBar from "@/components/common/DrawerSideBar";
import Hero from "@/components/home/Hero";

import { Box, useMediaQuery } from "@chakra-ui/react";

export default function Home() {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Head>
        <title>Better Boiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bgColor={'#05294B'} display={'flex'} flexDirection={'row'}>
        {breakpoint ? <DrawerSideBar /> : <SideBar />}
        <Hero />
      </Box>
    </>
  );
}
