import { Box, Text, Progress } from "@chakra-ui/react"
import Image from "next/image"
import logo from '/public/assets/images/logo.png'
import leftArrow from '/public/assets/images/leftArrow.png'
import newBoiler from '/public/assets/images/newBoiler.png'
import heating from '/public/assets/images/heating.png'
import phone from '/public/assets/images/phone.png'

export default function RandomComponent() {
  return (
    <>
      <Image src={logo} alt="logo" bgColor="black" />

      <Box width={'60%'} mx={'auto'} my={16}>
        <Progress colorScheme="blue" color="rgba(74, 178, 225, 1)" size='sm' value={30} borderRadius={'20px'} />
        <Box display={'flex'} flexDirection={'row'} gap={20} my={10} alignItems={'start'}>
          <Box mt={2} cursor={'pointer'}>
            <Image src={leftArrow} alt="logo" bgColor="black" />
          </Box>
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'42px'} lineHeight={'120%'} color={'#111518'} width={'80%'} textAlign={'center'}>What kind of fuel does your boiler use?</Text>
        </Box>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={4}>
          <Box width={'30%'} height={'200px'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} boxShadow={'0px 4px 25px rgba(17, 21, 24, 0.1)'} p={5} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
            <Box width={'80%'} height={'220px'} display={'flex'} justifyContent={'center'}>
              <Box my={'auto'}>
                <Image src={newBoiler} alt="img" />
              </Box>
            </Box>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'19px'} lineHeight={'120%'} color={'#005A8C'}>New Boiler</Text>
          </Box>
          <Box width={'30%'} height={'200px'} border={'1px solid rgba(255, 255, 255, 0.25)'} borderRadius={'12px'} boxShadow={'0px 4px 25px rgba(17, 21, 24, 0.1)'} p={5} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={3}>
            <Box width={'80%'} height={'220px'} display={'flex'} justifyContent={'center'}>
              <Box my={'auto'}>
                <Image src={heating} alt="img" />
              </Box>
            </Box>
            <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'19px'} lineHeight={'120%'} color={'#005A8C'}>New Central Heating</Text>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={2} mt={10}>
          <Image src={phone} alt="img" />
          <Text fontFamily={'Inter'} fontStyle={'normal'} fontWeight={400} fontSize={'18px'} lineHeight={'120%'} color={'#111518'}>Prefer to talk to a human? Call us on +44</Text>
        </Box>
      </Box>

    </>
  )
}
