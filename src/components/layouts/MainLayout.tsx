import { Box, useMediaQuery } from "@chakra-ui/react"
import React from "react"

import SideBar from "@/components/common/SideBar"
import DrawerSideBar from "@/components/common/DrawerSideBar"

export default function MainLayout({ children }) {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");

  return (
    <Box display={'flex'} flexDirection={'row'} minH="100vh">
      {breakpoint ? <DrawerSideBar /> : <SideBar />}
      <Box w={breakpoint ? '100%' : '80%'}>
        {children}
      </Box>
    </Box>
  )
}
