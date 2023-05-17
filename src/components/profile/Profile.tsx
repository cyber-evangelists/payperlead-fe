import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"
import HeaderNavMenu from "../common/HeaderNavMenu"
import phone from '/public/assets/images/profile/phone.png'
import location from '/public/assets/images/profile/location.png'
import edit from '/public/assets/images/profile/edit.png'
import boiler from '/public/assets/images/profile/boiler.png'

export default function ProfileComponent() {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");

  return (
    <Box w={breakpoint ? '100%' : '80%'}>
      <HeaderNavMenu />

      <Box bgColor={'#FFFFFF'} pt={20} borderTopLeftRadius={'30px'} borderTopRadius={breakpoint ? '30px' : null} h={'100vh'}>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} color={'#2B3950'} textAlign={'center'}>Your Profile</Text>

        <Box w={{ base: '90%', sm: '80%', md: '60%' }} bgColor={'#F4F4F4'} borderRadius={'20px'} p={5} mx={'auto'} mt={8}>
          <Image src={edit} alt="edit" align={'right'} />
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'24px'} lineHeight={'150%'} color={'#2B3950'} textAlign={'center'}>Richard Bell</Text>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} textAlign={'center'} opacity={0.4}>Joined 2 april 2023</Text>
          <Box width={{ base: '80%', sm: '70%', md: '50%' }} mx={'auto'} mt={4}>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} py={4}>
              <Box display={'flex'} flexDirection={'row'} gap={2}>
                <Box><Image src={phone} alt="phone" /></Box>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} >Phone number</Text>
              </Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} >+44 334 3412</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} pb={10}>
              <Box display={'flex'} flexDirection={'row'} gap={2}>
              <Box><Image src={location} alt="location" /></Box>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} >Address</Text>
              </Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} >WC2N 5DU</Text>
            </Box>
          </Box>
        </Box>

        <Box w={'60%'} mx={'auto'} my={6}>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'16px'} lineHeight={'120%'} color={'#12315B'}>Boiler Request History</Text>
        </Box>

        <Box w={{ base: '90%', sm: '80%', md: '60%' }} bgColor={'#F4F4F4'} borderRadius={'12px'} p={3} mx={'auto'}>
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Box display={'flex'} flexDirection={'row'} gap={6} alignItems={'center'}>
              <Image src={boiler} alt="img" />
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#2B3950'} >Boiler Installation</Text>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'140%'} color={'#111518'} >2 April 2023</Text>
            </Box>
            <Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#2B3950'} >WC2N 5DU</Text>
            </Box>
          </Box>
        </Box>

      </Box >
    </Box >
  )
}
