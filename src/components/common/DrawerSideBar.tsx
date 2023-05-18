import { Box, Text, Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react"
import React from "react"
import { useRef } from "react";
import Image from "next/image"
import Link from 'next/link';
import logo from '/public/assets/images/sideBar/logo.png'
import home from '/public/assets/images/sideBar/home.png'
import history from '/public/assets/images/sideBar/history.png'
import profile from '/public/assets/images/sideBar/profile.png'
import help from '/public/assets/images/sideBar/help.png'
import add from '/public/assets/images/sideBar/add.png'

export default function DrawerSideBar({ drawerOpen, drawerClose }: any) {
  const drawerContentRef = useRef();
  return (
    <>
      <Drawer placement={'left'} onClose={drawerClose} isOpen={drawerOpen} finalFocusRef={drawerContentRef}>
        <DrawerOverlay />
        <DrawerContent bgColor={'#05294B'} borderRadius={'0px 25px 0px 0px'} ref={drawerContentRef}>
          <Box p={10}>
          <Box pl={3}><Image src={logo} alt="logo" /></Box>

            <Box mt={12} display={'flex'} flexDirection={'column'}>
          <Link href={'/'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3} _hover={{ bgColor: 'whiteAlpha.300', borderRadius: '12px' }} width={'100%'} px={4}
            >
              <Image src={home} alt="home" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>Home</Text>
            </Box>
          </Link>
          <Link href={'/history'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3} _hover={{ bgColor: 'whiteAlpha.300', borderRadius: '12px' }} width={'100%'} px={4}>
              <Image src={history} alt="history" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>History</Text>
            </Box>
          </Link>
          <Link href={'/profile'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3} _hover={{ bgColor: 'whiteAlpha.300', borderRadius: '12px' }} width={'100%'} px={4}>
              <Image src={profile} alt="profile" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>Profile</Text>
            </Box>
          </Link>
          <Link href={'/help'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3} _hover={{ bgColor: 'whiteAlpha.300', borderRadius: '12px' }} width={'100%'} px={4}>
              <Image src={help} alt="help" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>Help</Text>
            </Box>
          </Link>
          <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2} mt={2}>
            <Box>
              <Image src={add} alt="help" />
            </Box>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'150%'} color={'#FFFFFF'}>Submit a new request</Text>
          </Box>
        </Box>

          </Box>
        </DrawerContent>
      </Drawer >
    </>
  )
}