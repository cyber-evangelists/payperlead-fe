import { Box, useMediaQuery } from "@chakra-ui/react"
import React from "react"
import Image from "next/image"
import logo from '/public/assets/images/sideBar/logo.png'
import menu from '/public/assets/images/sideBar/menu.png'
import DrawerSideBar from "./DrawerSideBar"

export default function HeaderNavMenu() {
  const [menuBtn, setMenu] = React.useState(false)
  const [breakpoint] = useMediaQuery("(max-width: 767px)");
  const onMenuBtn = () => setMenu(true)
  return (
    <>
      <DrawerSideBar menuStatus={menuBtn} />
      {breakpoint ? <Box p={5} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
        <Image src={logo} alt="logo" />
        <Box cursor="pointer" onClick={onMenuBtn}>
          <Image src={menu} alt="menu" />
        </Box>
      </Box> : null}
    </>
  )
}