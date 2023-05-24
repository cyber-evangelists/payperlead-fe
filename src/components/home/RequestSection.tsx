import { Box, Flex, Text, Divider, Modal, ModalOverlay, ModalContent, ModalBody, useMediaQuery } from "@chakra-ui/react"
import React, { useEffect } from "react"
import HeaderNavMenu from "../common/HeaderNavMenu"
import { ThreeDots } from "react-loader-spinner"

export default function RequestSection() {
  const [breakpoint] = useMediaQuery("(max-width: 767px)");

  return (
    <Box bgColor="#05294B">
      <Box bgColor={'#001930'} pt={5} borderTopLeftRadius={{ base: '0px', sm: '0px', md: '30px' }} pb={8}>
        <HeaderNavMenu />
        <Box bgColor={'#4AB2E1'} width={{ base: '90%', sm: '80%', md: '60%' }} py={2} borderRadius={'6px'} mx={'auto'} >
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'15px'} lineHeight={'150%'} textAlign={'center'} color={'white'}>✨ Thank your submission has been received, we will contact you soon ✨</Text>
        </Box>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'32px'} lineHeight={'150%'} textAlign={'center'} color={'#EDF4FF'} mt={50}>New Boiler Quote</Text>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} textAlign={'center'} color={'#4AB2E1'} my={6}>What Happens Next?</Text>
        <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} textAlign={'center'} color={'#EDF4FF'} w={{ base: '90%', sm: '85%', md: '75%' }} mx={'auto'}>Someone from our team will give you a quick call from 0800 786765 to explain how the process works. Engineers interested in providing you with a free no-obligation quote will appear below.</Text>
        {breakpoint ? <Box width={'90%'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'6px'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} mx={'auto'} py={3} px={6} mt={10}>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={500} fontSize={'16px'} lineHeight={'150%'} color={'#EDF4FF'}>Recommendation </Text>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={600} fontSize={'16px'} lineHeight={'150%'} color={'#EDF4FF'} opacity={0.5}>Find Nearby</Text>
        </Box> : null}
        <Flex justifyContent="center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#5BC2E7"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </Flex>
      </Box>
    </Box>
  )
}
