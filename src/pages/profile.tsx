import Head from "next/head";
import SideBar from "@/components/common/SideBar";
import Profile from "@/components/profile/Profile";

import { Box } from "@chakra-ui/react";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Better Boiler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box bgColor={'#05294B'} h={'100vh'} display={'flex'} flexDirection={'row'}>
        <SideBar />
        <Profile />
      </Box>
    </>
  );
}
