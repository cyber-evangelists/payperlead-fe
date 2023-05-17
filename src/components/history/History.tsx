import { Box, Text, Avatar, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"
import HeaderNavMenu from "../common/HeaderNavMenu"
import man from '/public/assets/images/history/man.png'
import boiler from '/public/assets/images/history/boiler.png'
import { isNull } from "util"

export default function HistoryComponent() {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");

  return (
    <Box w={breakpoint ? '100%' : '80%'}>
      <HeaderNavMenu />
      <Box bgColor={'#FFFFFF'} p={16} borderTopLeftRadius={'30px'} borderTopRadius={breakpoint ? '30px' : null} h={'100vh'}>
        {breakpoint ?
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} color={'#2B3950'} textAlign={'center'}>Gas Boiler Request</Text> :
          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} color={'#2B3950'}>Gas Boiler Request</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'} gap={3} alignItems={'center'}>
              <Box bgColor={'#EF4336'} borderRadius={'6px'} px={8} py={2} cursor={'pointer'}>
                <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'150%'} color={'#FFFFFF'}>Submit a new request</Text>
              </Box>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'150%'} color={'#2B3950'}>Gas Richard Bell</Text>
              <Avatar size={'sm'} bgColor={'orange'} src={man} />
            </Box>
          </Box>}

        <Box bgColor={'#FFFFFF'} width={{ base: '78%', sm: '58%', md: '28%' }} border={'1px solid #EDEDED'} borderRadius={'20px'} display={'flex'} flexDirection={'column'} mt={12} mx={breakpoint ? 'auto' : null}>
          <Box height={'40%'} bg={'#F4F4F4'} borderTopRadius={'20px'} display={'flex'} justifyContent={'center'}>
            <Image src={boiler} alt="img" />
          </Box>
          <Box height={'60%'} borderBottomRadius={'20px'} p={3}>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#2B3950'}>Boiler Installation</Text>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'14px'} lineHeight={'150%'} color={'#2B3950'} opacity={0.5}>2 April 2023</Text>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mt={4}>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'150%'} color={'#2B3950'} opacity={0.5}>Boiler Type</Text>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#2B3950'}>Combo</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} py={1} >
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'150%'} color={'#2B3950'} opacity={0.5}>Fuel</Text>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#2B3950'}>Gas</Text>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mt={4}>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'14px'} lineHeight={'150%'} color={'#2B3950'} opacity={0.5}>Post Code</Text>
              <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#2B3950'}>WC2N 5DU</Text>
            </Box>
          </Box>

        </Box>
      </Box >

    </Box >
  )
}