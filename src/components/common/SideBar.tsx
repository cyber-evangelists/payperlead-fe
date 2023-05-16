import { Box, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from 'next/link';
import logo from '/public/assets/images/sideBar/logo.png'
import home from '/public/assets/images/sideBar/home.png'
import history from '/public/assets/images/sideBar/history.png'
import profile from '/public/assets/images/sideBar/profile.png'
import help from '/public/assets/images/sideBar/help.png'

export default function SideBar() {
  return (
    <>
      <Box width={'20%'} p={10}>
        <Image src={logo} alt="logo" />

        <Box mt={12} display={'flex'} flexDirection={'column'}>
          <Link href={'/'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3}>
              <Image src={home} alt="home" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>Home</Text>
            </Box>
          </Link>
          <Link href={'/history'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3}>
              <Image src={history} alt="history" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>History</Text>
            </Box>
          </Link>
          <Link href={'/profile'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3}>
              <Image src={profile} alt="profile" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>Profile</Text>
            </Box>
          </Link>
          <Link href={'/help'}>
            <Box borderRadius={'12px'} display={'flex'} flexDirection={'row'} gap={3} cursor={'pointer'} py={3}>
              <Image src={help} alt="help" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#FFFFFF'}>Help</Text>
            </Box>
          </Link>
        </Box>

      </Box>
    </>
  )
}